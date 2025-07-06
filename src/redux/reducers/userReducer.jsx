const initialState = { isLoggedIn: false, username: '' };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, username: action.payload };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, username: '' };
    default:
      return state;
  }
};

export default userReducer;
