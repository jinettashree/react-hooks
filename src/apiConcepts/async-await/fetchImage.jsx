import { useEffect, useState } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(
        "https://randomuser.me/api/?results=10"
      );
      const data = await res.json();
      setUsers(data.results);
    }

    fetchUsers();
  }, []);

  return (
    <>
      {users.map(user => (
        <div key={user.login.uuid}>
          <img src={user.picture.large} alt="User profile picture"/>
          <h4>
            {user.name.first} {user.name.last}
          </h4>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default UsersList;