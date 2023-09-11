import { ref, provide, inject, Ref } from 'vue';
import * as yup from 'yup';
import { ValidationError } from 'yup';
import { availableAddOns, plans } from '../data.ts';

type PersonalInfo = {
  name: string;
  email: string;
  phoneNumber: string;
};

type Summary = Readonly<{
  title: string;
  planPrice: number;
  addOnsTotalPrice: number;
  selectedAddOns: Array<{ title: string; price: number }>;
}>;

export interface FormStore extends PersonalInfo {
  activeStep: number;
  isStepOneFinished: boolean;
  plan: 'Arcade' | 'Advanced' | 'Pro';
  selectedAddOns: { type: 'Online' | 'Storage' | 'Customizable' }[];
  isMonthly: boolean;
  isConfirmed: boolean;
  getPersonalInfo: () => PersonalInfo;
  getPersonalInfoErrors: () => Promise<void>;
  firstStepErrors: Partial<PersonalInfo>;
  getSummary: () => Summary;
}

const FORM_STORE_KEY = 'formStore';

export const personInfoSchema = yup.object().shape({
  name: yup.string() /*.required('This field is required')*/,
  email: yup.string() /*.required('This field is required').email('Not a valid email')*/,
  phoneNumber: yup.string() /*
    .matches(/^\+[1-9]+\d{9,}$/, 'Not a valid number')
    .required('This field is required')*/
});

const formStore = ref<FormStore>({
  activeStep: 4,
  isStepOneFinished: false,
  name: '',
  email: '',
  phoneNumber: '',
  plan: 'Arcade',
  selectedAddOns: [],
  isMonthly: true,
  isConfirmed: false,
  firstStepErrors: {},
  async getPersonalInfoErrors() {
    try {
      await personInfoSchema.validate(this.getPersonalInfo(), {
        abortEarly: false,
        recursive: true
      });
      this.isStepOneFinished = true;
      this.firstStepErrors = {};
    } catch (errors) {
      this.isStepOneFinished = false;
      this.firstStepErrors = {};
      if (errors instanceof ValidationError)
        errors.inner.forEach(error => {
          this.firstStepErrors[error.path as keyof PersonalInfo] = error.message;
        });
    }
  },
  getPersonalInfo() {
    return {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber
    };
  },
  getSummary() {
    const key = this.isMonthly ? 'monthly' : 'yearly';
    const planPrice = plans[this.plan].price[key];
    const addOnsTotalPrice = this.selectedAddOns.reduce(
      (total, { type }) => total + availableAddOns[type].price[key],
      0
    );
    const title = `${this.plan} (${key})`;
    const selectedAddOns = this.selectedAddOns.map(addons => ({
      price: availableAddOns[addons.type].price[key],
      title: availableAddOns[addons.type].title
    }));
    return { title, planPrice, addOnsTotalPrice, selectedAddOns };
  }
});

export const provideStore = () => {
  provide(FORM_STORE_KEY, formStore);
};

export const injectStore = () => {
  const formStore = inject<Ref<FormStore>>(FORM_STORE_KEY);
  return formStore?.value!;
};
