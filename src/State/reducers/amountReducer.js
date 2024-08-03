const reducer = (state = 0, action) => {  
  if (action.type === "deposite") {
    const newState =  state + action.payload
    return newState;
  } else if (action.type === "withdraw") {
    
    return state - action.payload;
  } else {
    return state;
  }
};

export default reducer;
