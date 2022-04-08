export const createAction = (type: string) => {
  return {
    types: {
      request: `${type}-request`,
      success: `${type}-success`,
      error: `${type}-error`,
    },
    request: <T>(data?: T) => {
      return {
        type: `${type}-request`,
        payload: data,
      };
    },
    success: <T>(data: T) => {
      return {
        type: `${type}-success`,
        payload: data,
      };
    },
    error: (data: string) => {
      return {
        type: `${type}-error`,
        payload: data,
      };
    },
  };
};
