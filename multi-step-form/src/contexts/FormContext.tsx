import { createContext, Dispatch, useReducer } from "react";
import { FormActionTypes } from "../constants";
import formReducer, { initialState } from "../reducers/formReducer";

type State = typeof initialState;

const useInitialState = (
  dispatch: Dispatch<{
    type: string;
    payload?: any;
  }>
) => {
  const updatePersonalInfo = (field: string, value: string) => {
    dispatch({
      type: FormActionTypes.UPDATE_PERSONAL_INFO,
      payload: {
        field,
        value,
      },
    });
  };

  const setIsValidating = (isValid: boolean) => {
    dispatch({
      type: FormActionTypes.IS_VALIDATE_PERSONAL_INTO,
      payload: isValid,
    });
  };

  const validatePersonalInfo = (isValid: boolean) => {
    dispatch({
      type: FormActionTypes.VALIDATE_PERSONAL_INTO,
      payload: isValid,
    });
  };

  const changePlan = (plan: "monthly" | "yearly") => {
    dispatch({
      type: FormActionTypes.CHANGE_PLAN,
      payload: {
        plan,
      },
    });
  };

  const updateSelectedPlan = (details: {
    id: string;
    type: string;
    price: number;
  }) => {
    dispatch({
      type: FormActionTypes.UPDATE_SELECTED_PLAN,
      payload: details,
    });
  };

  const updatePickedAddOns = (
    updatePickedAddOns: (list: State["addOns"]["pickedAddOns"]) => void
  ) => {
    dispatch({
      type: FormActionTypes.UPDATE_PICKED_ADD_ONS,
      payload: {
        updatePickedAddOns,
      },
    });
  };

  const goNext = () => {
    dispatch({
      type: FormActionTypes.NEXT,
    });
  };

  const goBack = () => {
    dispatch({
      type: FormActionTypes.PREV,
    });
  };

  const goChangePlan = () => {
    dispatch({
      type: FormActionTypes.GO_CHANGE_PLAN,
    });
  };

  const confirm = () => {
    dispatch({
      type: FormActionTypes.CONFIRM,
    });
  };

  return {
    updatePersonalInfo,
    setIsValidating,
    validatePersonalInfo,
    updateSelectedPlan,
    updatePickedAddOns,
    changePlan,
    goNext,
    goBack,
    goChangePlan,
    confirm,
  };
};

const FormContext = createContext({
  ...initialState,
  ...useInitialState(() => {}),
});

export const FormProvider = (props: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const value = useInitialState(dispatch);
  return (
    <FormContext.Provider value={{ ...state, ...value }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContext;
