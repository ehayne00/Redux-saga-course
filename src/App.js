import React from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
} from "./actions/users";
import UsersList from "./components/UsersList";
import NewUserForm from "./components/NewUserForm";
import { Alert } from "reactstrap";

function App({
  getUsersRequest,
  users,
  createUserRequest,
  deleteUserRequest,
  usersError,
}) {
  getUsersRequest();

  const usersList = users;

  const handleSubmit = ({ firstName, lastName }) => {
    createUserRequest({
      firstName,
      lastName,
    });
  };

  const handleDeleteUserClick = (userId) => {
    deleteUserRequest(userId);
  };

  const handleCloseAlert = () => {
    usersError({
      error: "", //when you click the "x" on the error message it closes then sets error back to ""
    });
  };

  return (
    <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
      <Alert color="danger" isOpen={!!users.error} toggle={handleCloseAlert}>
        {users.error}
      </Alert>
      <NewUserForm onSubmit={handleSubmit} />
      <UsersList
        usersList={usersList.items}
        onDeleteUser={handleDeleteUserClick}
      />
    </div>
  );
}

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
})(App);
