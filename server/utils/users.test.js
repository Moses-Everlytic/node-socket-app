const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach (() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Moses',
      room: 'A'
    },{
      id: '2',
      name: 'Mozi',
      room: 'B'
    },{
      id: '3',
      name: 'Hello',
      room: 'A'
    }];
  })

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '124',
      name: 'Moses',
      room: 'A'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser('2');

    expect(user.id).toBe('2');
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var user = users.removeUser('8');

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);    
  });

  it('should find user', () => {
    var user = users.getUser('1');

    expect(user.id).toBe('1');
    expect(user).toInclude({
      id: '1',
      name: 'Moses',
      room: 'A'
    });
  });

  it('should not find user', () => {
    var user = users.getUser('10');

    expect(user).toNotExist();
  });

  it('should return names for room A', () => {
    var userList = users.getUserList('A');

    expect(userList).toEqual(['Moses', 'Hello']);
  });

  it('should return names for room B', () => {
    var userList = users.getUserList('B');

    expect(userList).toEqual(['Mozi']);
  });
});
