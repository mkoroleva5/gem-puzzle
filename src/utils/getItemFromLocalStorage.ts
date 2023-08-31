export const getItemFromLocalStorage = (itemName: string) => {
  let item;

  try {
    item = JSON.parse(localStorage.getItem(itemName));
  } catch (error) {
    item = null;
  }

  return item;
};
