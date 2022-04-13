
function switchPage(id){
    document.getElementById('page').innerHTML = `<button onClick="window.location.reload();">Go Back</button><div id="mvDis"></div>`;
    console.log(id);
    const movie = fetchById(id);
    movie.then(data =>{

        makePage(data.poster_path, data.title, data.release_date, data.vote_average, data.overview);
    });


}
function makePage(img, title, date, rating, info) {
    console.log('here');
    HTML = `
    <button onClick="window.location.reload();">Go Back</button>
    <div>
        <img src="https://image.tmdb.org/t/p/w500${img}">
        <div class="infomation">
            <div>${title}</div>
            <div>${info}</div>
            <div>${date}</div>
            <div>${rating}</div>
        </div>
    </div>`;
    document.getElementById('page').innerHTML = HTML;
}
