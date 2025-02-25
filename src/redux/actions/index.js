export const SET_MY_PROFILE = "SET_MY_PROFILE";

export const getMyProfile = () => {
  return async (dispatch) => {
    const headers = new Headers({
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNGNkM2U3MDMzNzAwMTUzMTZkYWUiLCJpYXQiOjE3NDAzOTM2ODMsImV4cCI6MTc0MTYwMzI4M30.tM6t2Rh-7iEQNFJu8UFjJn4h9cGKrxIPWJj-y-sV3rc",
    });

    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        method: "GET",
        headers,
      });
      if (response.ok) {
        let data = await response.json();
        dispatch({ type: SET_MY_PROFILE, payload: data });
        /* setmyProfile(data); */
      } else {
        throw new Error("Error in fetching ");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
