// Max In Chapter 5 ---- 163  ------------------------------------------------
export const getAllData = async () => {
  await new Promise((resolver) => setTimeout(resolver, 5000));
  return { message: "Good Luck" };
};
