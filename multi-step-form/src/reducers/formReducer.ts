import { Reducer } from "react";
import { FormActionTypes } from "../constants";

export const initialState = {
  numOfSteps: 4,
  currentStep: 1,
  confirmed: false,
  isValidPersonalInfo: false,
  isValidating: false,
  personalInfo: {
    setp: 1,
    name: "",
    email: "",
    phone: "",
  },
  plans: {
    step: 2,
    plan: "monthly" as "monthly" | "yearly",
    details: {
      id: 0,
      type: "Arcade",
      price: 9,
    },
  },
  addOns: {
    step: 3,
    pickedAddOns: [] as Array<{
      id: string;
      name: string;
      price: number;
    }>,
  },
};

const formReducer: Reducer<
  typeof initialState,
  { type: string; payload?: any }
> = (state, action) => {
  switch (action.type) {
    case FormActionTypes.UPDATE_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          [action.payload.field]: action.payload.value,
        },
      };
    case FormActionTypes.IS_VALIDATE_PERSONAL_INTO:
      return {
        ...state,
        isValidating: action.payload,
      };
    case FormActionTypes.VALIDATE_PERSONAL_INTO:
      return {
        ...state,
        isValidPersonalInfo: action.payload,
      };
    case FormActionTypes.CHANGE_PLAN:
      return {
        ...state,
        plans: {
          ...state.plans,
          plan: action.payload.plan,
        },
      };
    case FormActionTypes.UPDATE_SELECTED_PLAN:
      return {
        ...state,
        plans: {
          ...state.plans,
          details: action.payload,
        },
      };
    case FormActionTypes.UPDATE_PICKED_ADD_ONS:
      return {
        ...state,
        addOns: {
          ...state.addOns,
          pickedAddOns: action.payload.updatePickedAddOns(
            state.addOns.pickedAddOns
          ),
        },
      };
    case FormActionTypes.NEXT:
      let currentStep = Math.min(state.currentStep + 1, state.numOfSteps);
      if (!state.isValidPersonalInfo && currentStep === 2) {
        currentStep = state.currentStep;
      }

      return {
        ...state,
        currentStep,
      };
    case FormActionTypes.PREV:
      return {
        ...state,
        currentStep: Math.max(1, state.currentStep - 1),
      };
    case FormActionTypes.GO_CHANGE_PLAN:
      return {
        ...state,
        currentStep: 2,
      };
    case FormActionTypes.CONFIRM:
      return {
        ...state,
        confirmed: state.currentStep === state.numOfSteps,
      };
  }
  return state;
};

export default formReducer;
