import axios from "../../Utils/axios"
import { loadPeople } from '../reducers/peoplesSlice';
export { removePeople } from "../reducers/peoplesSlice";

export const asycloadperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalId = await axios.get(`/person/${id}/external_ids`);
    const combinedCcredits = await axios.get(`/person/${id}/combined_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    
    let ultimateDeta = {
        detail:detail.data,
        externalId:externalId.data,
        combinedCcredits:combinedCcredits.data,
        movieCredits:movieCredits.data,
        tvCredits:tvCredits.data
    };
    dispatch(loadPeople(ultimateDeta));
  } catch (error) {
    console.log("Error " + error);
  }
};
