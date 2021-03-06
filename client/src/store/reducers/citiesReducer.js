const initialState = {
  cities: [],
  err: "",
};

//you had some issues acting the payload to pass data from your action to your reducer
//I changed a bit the naming too so it makes more sense
function citiesReducer(state = initialState, action) {
  console.log("city action", action);
  switch (action.type) {
    case "FETCH_CITIES_SUCCESS":
      console.log("FETCH_CITIES_SUCCESS", action);
      return { ...state, cities: action.payload, err: "" };

    case "FETCH_CITIES_ERROR":
      console.log("FETCH_CITIES_ERROR", action);
      return { ...state, err: action.payload };

    case "ADD_CITY":
      return { ...state, cities: [...state.cities, action.payload] };

    default:
      return state;
  }
}
export default citiesReducer;
