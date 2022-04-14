
function switchPage(id){
    document.getElementById('page').innerHTML = `<button onClick="window.location.reload();">Go Back</button><div id="mvDis"></div>`;
    console.log(id);
    const movie = fetchById(id);
    movie.then(data =>{
        makePage(data);
    });


}
function makePage(data) {
    let poster = '';
    let genres = '';
    console.log(data)
    if (!data.poster_path) {
        poster = '<img src="img/noPost.png">';
    }
    else{
        poster = `<img src="https://image.tmdb.org/t/p/w500${data.poster_path}">`;
    }
    data.genres.forEach(ele =>{
        genres += `<li>${ele.name}</li>`
    });





    const HTML = `
    <button onClick="window.location.reload();">Go Back</button>
    <div class="centerStuff">
        <h1>${data.title}</h1>
            ${poster}
            <div class="information">
                <h5>Genres</h5>
                <ul id="genre">${genres}</ul>
                <p> ${data.overview}</p>
                <div>Release Date: ${data.release_date}</div>
                <div>Average rating: ${data.vote_average}<div> Votes counted: ${data.vote_count}</div></div>
                <div>Budget: ${data.budget}</div>
                <div>Revenue: ${data.revenue}</div>
            </div>
        
    </div>`;
    document.getElementById('page').innerHTML = HTML;
}
