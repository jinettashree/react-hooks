import { useEffect, useState } from "react";
import axios from "axios";

function SearchAndFilter() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        placeholder="Search user"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredUsers.map((user) => (
        <p key={user.id}>
            Name: {user.name}<br/>
            Username: {user.username}<br/>
            Email: {user.email}
        </p>
      ))}
    </>
  );
}

export default SearchAndFilter;
