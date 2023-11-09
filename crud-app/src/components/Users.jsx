import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response= await axios.get("/api/usersData");
        setUsersData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    };
    fetchUsersData();
  }, []);

  return (
    <div className="userData">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
        {usersData.map((user) => {
          return (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Users;
