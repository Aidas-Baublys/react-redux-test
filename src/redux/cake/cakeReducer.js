import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  cakes: 10
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        cakes: state.cakes - action.payload
      };
    default:
      return state;
  }
};

export default cakeReducer;