const badWords = ["гнида", "пидор", "сука"];

export const spamFilter = (store) => (next) => (action) => {
  let result = next(action);
  console.log(store.getState());
  return result;
};
