import axios from "axios";
// import { GET_ERRORS } from "./types";
// Send score
export const sendScore = (userScore) => dispatch => {
  axios
    .post("/api/users/scoreboard", userScore)
    .then(res => console.log(res)) 
    .catch(err => console.log(err)
    //   dispatch({
    //     type: GET_ERRORS,
    //     payload: err.response.data
    //   })
    );
};

export const readScores = () => dispatch => {
    axios
        .get("/api/users/scoreboard")
        .then((res) => console.log("Aciton says: " + res))
        .catch(err => console.log(err))
}