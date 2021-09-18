const starter = (state = {}, action) => {
  switch (action.type) {
    case "GET_STARTER_INIT":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default starter;
