const useLocalStorage = (name) => {
  const data = JSON.parse(localStorage.getItem(name));
  if (data == null) {
    return [];
  } else {
    return data;
  }
};

export default useLocalStorage;
