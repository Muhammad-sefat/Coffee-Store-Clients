import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUser = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl font-semibold py-5">My Table</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>PasswodHash</th>
              <th>ProvierID</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loadedUser.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.passwordHash}</td>
                <td>{user.providedId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
