import {
  EMPLOYEES_LOADED,
  EMPLOYEE_CREATED,
  EMPLOYEE_LOADING,
  EMPLOYEE_LOADING_ERROR
} from "./constants";

export const employeesLoaded = employees => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
};

export const employeeCreated = employee => {
  return {
    type: EMPLOYEE_CREATED,
    payload: {
      employee
    }
  };
};

export const employeesLoading = employees => {
  return {
    type: EMPLOYEE_LOADING,
    payload: {}
  };
};
export const employeesLoadingError = employees => {
  return {
    type: EMPLOYEE_LOADING_ERROR,
    payload: {
      error
    }
  };
};
