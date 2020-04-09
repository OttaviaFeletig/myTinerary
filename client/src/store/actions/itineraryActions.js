// I cleaned a bit your action, I was almost good, just a few probem with the .json() convertion and handeling the payload
//it shuld work now ;)
import axios from "axios";
import jwt_decode from "jwt-decode"; // import dependency

export const fitchItinerariesAction = () => {
  return (dispatch) => {
    //add the full url of your back end
    fetch("http://localhost:5000/api/itineraries")
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        dispatch({ type: "FETCH_ITINERARIES_SUCCESS", payload: json });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ITINERARIES_ERROR", payload: err });
      });
  };
};
export const fetchItinerariesByCityName = (city) => {
  return (dispatch) => {
    fetch("http://localhost:5000/api/itineraries/" + city)
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        dispatch({ type: "FETCH_ITINERARIES_SUCCESS", payload: json });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ITINERARIES_ERROR", payload: err });
      });
  };
};
export const fetchItinerariesFavorite = (emailAdded) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/api/itineraries/:name/favorites", emailAdded)
      .then((res) => {
        console.log("response", res);
        if (res.status === 200) {
          //send the user to his account page
          dispatch({ type: "ADD_ITINERARY_FAVORITE", payload: res.data[0] });
          // window.location = "/UserAccount";
        }
      })
      .catch((error) => {
        console.log("error" + error.response);
        if (error.response) {
          if (error.response.status === 409) {
            alert("problem with email");
          } else {
            //alert with something else
            alert("Be Sure From Your email and link");
          }
        }
      });
  };
};
