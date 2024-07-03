import React, { Suspense } from "react";
import useFetchUsers from "./hooks/useFetch";
import "./App.css";

const API_URL = "https://602e7c2c4410730017c50b9d.mockapi.io/users";
const UsersList = React.lazy(() => import("./components/UsersList"));

function App() {
  const { users, loading, error } = useFetchUsers(API_URL);

  if (loading) {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Users</h1>
      <Suspense
        fallback={<div className="suspense-fallback">Loading users...</div>}
      >
        <UsersList users={users} />
      </Suspense>
    </div>
  );
}

export default App;
