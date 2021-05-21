import { LOG_IN, LOG_OUT } from "./constant";
const initialState = {
  isLogged: false,
  details: {},
};

const Login = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return { ...state, isLogged: true, details: action.payload };
    }
    case LOG_OUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
export default Login;
