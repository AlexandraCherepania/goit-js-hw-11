export { fetchImages };
// const key = 32672755-e410867216a3d089c501c2971;
    async function fetchImages(value, page) {
        return await fetch(`https://pixabay.com/api/?key=32672755-e410867216a3d089c501c2971&q=${value}&image_type=photo&orientation=horizontal&
    safesearch=true&page=${page}&per_page=40`)
            .then(async response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        return [];
                    }
                    throw new Error(response.status);
                }
                return await response.json();
            })
            .catch(error => {
                console.error(error);
            });
};
    
