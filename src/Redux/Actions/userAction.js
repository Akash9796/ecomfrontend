import axios from "axios";

// const url = "http://localhost:4001/";
const url = "http://ecombackend01.onrender.com/";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });
    console.log(email, password);
    const { data } = await axios.post(
      url + "api/v1/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "LoginFailure",
      //   payload: error.response,
    });
  }
};
