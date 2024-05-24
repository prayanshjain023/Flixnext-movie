export { removeMovie } from "../reducers/movieSlice";
import axios from "../../Utils/axios";
import { loadMovie} from "../reducers/movieSlice";

export const asycloadmovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await  axios.get(`/movie/${id}`);
    const externalId = await  axios.get(`/movie/${id}/external_ids`);
    const recommendations = await  axios.get(`/movie/${id}/recommendations`);
    const similar =  await axios.get(`/movie/${id}/similar`);
    const videos = await  axios.get(`/movie/${id}/videos`);
    const watchPovider = await  axios.get(`/movie/${id}/watch/providers`);

    let ultimateDeta = {
      detail:detail.data,
      externalId:externalId.data,
      recommendations:recommendations.data.results,
      similar:similar.data.results,
      videos:videos.data.results.find((m)=> m.type === 'Trailer'),
      watchPovider:watchPovider.data.results,
    };
    dispatch(loadMovie(ultimateDeta));
  } catch (error) {
    console.log("Error " + error);
  }
}
