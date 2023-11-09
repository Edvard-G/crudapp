// const usersData = [

//     { _id: "1", firstName: 'test', lastName: 'testtt', email: 'test@test.com'} ,
//     { _id: "2", firstName: 'test1', lastName: 'test1', email: 'test1@test.com'} ,
//     { _id: "3", firstName: 'test2', lastName: 'test2', email: 'test12@test.com'} ,
//  ]

//  export default usersData;
import User from './user.js'

const u1 = User(0, "Edi", "Gelo", "test@gmail.com");
const u2 = User(1, "Edi1", "Gelo1", "test@gmail.com1");
const u3 = User(2, "Edi2", "Gelo2", "test@gmail.com2");
const usersData = [];
usersData.push(u1);
usersData.push(u2);
usersData.push(u3);

function getUserList() {
  return usersData;
}

export default getUserList;