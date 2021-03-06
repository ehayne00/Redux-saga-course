export const Types = {
  //setting up the action types
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
  CREATE_USER_REQUEST: "users/create_user_request",
  DELETE_USER_REQUEST: "users/delete_user_request",
  USERS_ERROR: "users/users_error"
};

export const getUsersRequest = () => ({
  //setting up the first action
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = ({ items }) => ({
  //where items is the array of users
  type: Types.GET_USERS_SUCCESS,
  payload: {
    items, //this is the same as items: items
  },
});

export const createUserRequest = ({firstName, lastName}) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: {
    firstName,
    lastName
  }
})

export const deleteUserRequest = (userId) => ({
  type: Types.DELETE_USER_REQUEST,
  payload: {
    userId
  }
})

export const usersError = ({error}) => ({
  type: Types.USERS_ERROR,
  payload: {
    error
  }
})
