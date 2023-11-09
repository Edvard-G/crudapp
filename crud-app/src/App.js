import Header from "./components/Header";
import Button from "./components/shared/Button";
import Users from "./components/Users";

const App = () => {
  return (
    <>
      <div className="navBar">
        <Header />
        <div className="buttons">
          <Button color="primary">Add User</Button>
          <Button color="success">Edit User</Button>
          <Button color="error"> Delete User</Button>
        </div>
      </div>
      <div className="App">
        <Users />
      </div>
    </>
  );
};

export default App;
