// class User {
//     constructor(id, name, surname, email) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//     }
//   }
// export default User

const User = (id, name, surname, email) => ({
  id,
  name,
  surname,
  email
})

export default User