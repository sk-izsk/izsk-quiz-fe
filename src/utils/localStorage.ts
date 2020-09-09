const setFromLocalStorage = (key: string, value: unknown) => localStorage.setItem(key, JSON.stringify(value));

const getFromLocalStorage = (key: string) => JSON.parse(localStorage.getItem(key) as string);

const removeFromLocalStorage = (key: string) => localStorage.removeItem(key);

const header = {
  authorization: getFromLocalStorage('token'),
};

export { setFromLocalStorage, getFromLocalStorage, removeFromLocalStorage, header };
