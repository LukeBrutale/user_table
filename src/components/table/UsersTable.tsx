import React from "react";
import { useAppSelector } from "../../hooks/hooks.ts";
import { selectFilteredUsers } from "../../store/userSlice.ts";

export default function UsersTable() {
  const filteredUsers = useAppSelector(state => selectFilteredUsers(state.user));

  return (
    <div className="users-container">
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan={4}>No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
