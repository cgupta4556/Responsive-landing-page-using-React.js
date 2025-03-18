import React, { useEffect, useState } from "react";
import axios from "axios";
import debounce from "../utils/debounce";
import "../styles.css";

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
      setFilteredUsers(res.data);
    });
  }, []);

  const handleSearch = debounce((value) => {
    setFilteredUsers(users.filter((user) => user.name.toLowerCase().includes(value.toLowerCase())));
  }, 500);

  return (
    <section className="user-search">
      <h2>Search Users</h2>
      <input type="text" placeholder="Search..." onChange={(e) => handleSearch(e.target.value)} />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default UserSearch;
