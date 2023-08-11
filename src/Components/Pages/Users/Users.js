import { useCallback, useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = useCallback(async () => {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/users");
      let res = await data.json();
      setUsers(res);
      setLoading(false);
      setError("")
    } catch (error) {
      setError(error.message)
      setLoading(true)
    }
  }, [])

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>

      <h3 className="text-center mt-4">Users List</h3>

      {loading && <div className="text-center mt-5"><span className="spinner-border spinner-border-sm" ></span></div>}

      {error && <div className="text-center"><p className="text-danger">{error}</p></div>}

      <div className="text-start  mb-5  offset-2">
        {users && users.map((elem) => {
          return (
            <User user={elem} key={elem.id} />
          )
        })}
      </div>

    </>
  );
}

export default Users;