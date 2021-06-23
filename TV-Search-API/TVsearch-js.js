const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    deleteImgs();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = function (shows) {
    for (let resoult of shows) {
        if (resoult.show.image) {
            const img = document.createElement('IMG');
            img.src = resoult.show.image.medium;
            document.body.append(img);
        }
    }
}
const deleteImgs = function () {
    const imgs = document.querySelectorAll('img');
    for (let img of imgs) {
        img.remove();
    }
}