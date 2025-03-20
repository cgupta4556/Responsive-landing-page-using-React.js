import React, { useEffect, useState } from "react";
import axios from "axios";
import debounce from "../utils/debounce";
import UserCard from "./UserCard";
import "../styles.css";

const UserSearch = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  console.log("UserSearch loaded");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log("users fetched");
      setUsers(res.data);
      setFilteredUsers(res.data);
    });
  }, []);

  const handleSearch = debounce((value) => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  }, 500);

  return (
    <section className="user-search">
      <h2>Search Users</h2>
      <input type="text" placeholder="Search by name..." onChange={(e) => handleSearch(e.target.value)} />
      
      {/* Grid wrapper for user cards */}
      <div className="user-cards">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default UserSearch;
