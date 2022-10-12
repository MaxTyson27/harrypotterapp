import { usersAPI } from "../../api/api";

const SET_USERS = "users-reducer/SET_USERS";
const FILTER_USERS = "users-reducer/FILTER_USERS";
const SET_USER_PROFILE = "users-reducer/SET_USER_PROFILE";

const initialState = {
  profile: [],
  users: [],
  filtredUsers: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
        filtredUsers: [...action.users],
      };
    case FILTER_USERS:
      return {
        ...state,
        filtredUsers: [...state.users].filter((user) => {
          return Object.keys(action.filters).every(
            (key) => user[key] === action.filters[key]
          );
        }),
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: [...state.users].filter((user) => {
          return user.name === action.name;
        }),
      };
    default:
      return state;
  }
};

const filterUsersAC = (filters) => ({
  type: FILTER_USERS,
  filters,
});

const setUserProfileAC = (name) => ({
  type: SET_USER_PROFILE,
  name,
});

const setUsersAC = (users) => ({ type: SET_USERS, users });

export const setUserProfile = (name) => (dispatch) => {
  dispatch(setUserProfileAC(name));
};

export const filterUsers = (filters) => (dispatch) => {
  dispatch(filterUsersAC(filters));
};

export const setUsers = () => async (dispatch) => {
  const users = await usersAPI.getUsers();
  dispatch(setUsersAC(users));
};

export default usersReducer;
