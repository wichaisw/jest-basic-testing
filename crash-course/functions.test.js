const functions = require('./functions');

test('add 2 + 2 = 4', () => {
  expect(functions.add(2,2)).toBe(4);
});


test('add 2 + 2 NOT equal 5', () => {
  expect(functions.add(2,2)).not.toBe(5);
});

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('Shoudl be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test('User shoudl be Ryan Li object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Ryan', 
    lastName: 'Li'
  });
});

//RegEx
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in Username', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});

// async data with async await
test('user fecthed name should be Leanne Graham', async() => {
  expect.assertions(1);
  const res = await functions.fetchUsers();
  expect(res.name).toEqual('Leanne Graham');
});


// asynchronous with Promise .then
it('user fecthed name should be Leanne Graham', () => {
  expect.assertions(1);

  return functions.fetchUsers().then(data => {
    expect(data.name).toEqual('Leanne Graham');
  })
});