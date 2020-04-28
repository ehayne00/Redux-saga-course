export const Types = {
  //setting up the action types
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
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
