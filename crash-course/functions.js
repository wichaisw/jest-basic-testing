const { default: axios } = require("axios");

const add = (a, b) => {
  return a + b;
}

const isNull = () => {
  return null;
}

const checkValue = (x) => {
  return x;
}

const createUser = () => {
  const user = {firstName: 'Ryan'};
  user.lastName = 'Li';

  return user;
}

const fetchUsers = async() => {
  let res;
  try {
    res = await (await axios.get('https://jsonplaceholder.typicode.com/users/1'));
    return res.data;
  } catch(err) {
    console.log('error');
  }
}

module.exports = {
  add,
  isNull,
  checkValue,
  createUser,
  fetchUsers
}