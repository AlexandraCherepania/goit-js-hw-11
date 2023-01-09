

const API_KEY = '32672755-e410867216a3d089c501c2971';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 40;


function fetchImages(searchQuery) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=${PER_PAGE}&image_type=photo&orientation=horizontal&safesearch=true~`).then(response => { return response.json() });
}


export default { fetchImages };
