export default interface Action {
  type: string;
  payload: {
    _id?: string;
    completed?: string;
    description?: string;
  };
}
