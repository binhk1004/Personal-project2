import FetchHelper from "../helpers/FetchHelper";
import YoutubeFetchHelper from "../helpers/youtubeFetchHelper";

const api = {
    getPhotos: (params) => FetchHelper.fetchJsonGet('/photos', params),
    youtubeSearch: (params) => YoutubeFetchHelper.fetchJsonGet('/search', params),
}

export default api;
