const createAction = (type: string) => {
  return {
    types: {
      request: `auth/${type}-request`,
      success: `auth/${type}-success`,
      error: `auth/${type}-error`,
    },
    request: <T>(data?: T) => {
      return {
        type: `auth/${type}-request`,
        payload: data,
      };
    },
    success: <T>(data: T) => {
      return {
        type: `auth/${type}-success`,
        payload: data,
      };
    },
    error: (data: string) => {
      return {
        type: `auth/${type}-error`,
        payload: data,
      };
    },
  };
};

export const registerUser = createAction('registerUser');
export const loginUser = createAction('loginUser');
export const logoutUser = createAction('logoutUser');
