import { Fragment } from "react";
import { useGetUsers } from "../hooks/get-users";

export const UsersPage = () => {
  const { users, error, getUsers } = useGetUsers();

  return (
    <Fragment>
      <h1>Users</h1>
      <button onClick={getUsers}>Reload</button>
      {error && <small>{error.message}</small>}
      <table>
        <thead>
          <tr>
            <th>Identifier</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};
