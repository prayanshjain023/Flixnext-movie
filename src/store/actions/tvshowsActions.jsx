import axios from "../../Utils/axios";
import { loadTvshows } from "../reducers/tvshowsSlice";
export { removeTvshows } from "../reducers/tvshowsSlice";

export const asycloadtv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalId = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchPovider = await axios.get(`/tv/${id}/watch/providers`);
    let ultimateDeta = {
      detail:detail.data,
      externalId:externalId.data,
      recommendations:recommendations.data.results,
      similar:similar.data.results,
      videos:videos.data.results.find(m => m.type==='Trailer'),
      watchPovider:watchPovider.data.results,
    };
    dispatch(loadTvshows(ultimateDeta));
  } catch (error) {
    console.log("Error " + error);
  }
};
