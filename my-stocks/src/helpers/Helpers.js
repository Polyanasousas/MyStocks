export const checkUserSavedData = (userEmail, storageKey) => {
  const getFromStorage = JSON.parse(localStorage.getItem(storageKey));
  const findUser = getFromStorage.find((item) => item.email === userEmail);
  if (!findUser) return false;
  
  return findUser;
}

export const validateEmailAndPassword = (email, password) => {
  const validateEmail = /^\w+@\w+\.\w+$/;
  const validatePassword = /^[0-9a-zA-Z]{8,}$/;
  
  if (!validateEmail.test(email) || !validatePassword.test(password)) {
    return true;
  }
  return false;
};

export const updateBalanceInStorage = (userEmail, newBalance, userName) => {
  const balanceArr = JSON.parse(localStorage.getItem('balance'))
        .filter(item => item.email !== userEmail)
  const updatedBalanceArr = [...balanceArr, {value: newBalance, email: userEmail, name: userName}]
    
  localStorage.setItem('balance', JSON.stringify(updatedBalanceArr)) 
}

export const updateGeneralTable = (stocksList, updatedStock) => {
  const list = stocksList;
  const stockName = updatedStock.stock;
  const findIndex = list.indexOf(list.find((el) => el.stock === stockName));

  list[findIndex] = updatedStock;
  return list;
}


