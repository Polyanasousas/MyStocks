export const checkUserSavedData = (userEmail, storageKey) => {
  const getFromStorage = JSON.parse(localStorage.getItem(storageKey));
  const findUser = getFromStorage.find((item) => item.email === userEmail);
  if (!findUser) return false;
  
  return findUser;
}

export const validateEmailAndPassword = (email, password) => {
  const validateEmail = /^\w+@\w+\.\w+$/;
  const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/;
  
  if (!validateEmail.test(email) || !validatePassword.test(password)) {
    return false;
  }
  return true;
};


