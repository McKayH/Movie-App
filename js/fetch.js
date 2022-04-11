
// let sortedIds = [];
const trend = fetchTrend();
trend.then(makeTrend);

const pop = fetchPop(pg);
pop.then(makePopular);


function searching(){
    const query = document.getElementById('search').value;
    const ap = fetchSearch( 1 ,query);
    let swap = '';
    ap.then(data =>{

        data.results.forEach(ele => {
            if(ele.backdrop_path){
                postIm = `<img src="https://image.tmdb.org/t/p/w500${ele.poster_path}" onclick="switchPage(${ele.id})">`;
            }
            else{
                postIm = `<img onclick="switchPage(${ele.id})" src="img/noPost.png" alt="no poster img">`;
            }
            swap += `<div class="CardStyle">
            <div class="movieImg">
                ${postIm}
            </div>
            <div class="info">
                <p class="rating">${ele.popularity}</p>
                <span onclick="switchPage(${ele.id})" class="name">${ele.title}</span>
                <span>${ele.release_date}</span>
                <div>
                <button onclick="addSave('${ele.id}', '${ele.title}', '${ele.poster_path}', '${ele.vote_average}')">Save</button>
                </div>
            </div>
        </div>`
        });
        document.getElementById('replace').innerHTML = 'Searched Items';
        document.getElementById('popular').innerHTML  = swap;
    });
}

async function fetchSearch(pg, query){
    const get = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=38a763a2d61b4b9bf250355de45a7ac7&query=${query}&page=${pg}`);
    return get.json()
}
async function fetchTrend(){
    const get = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=38a763a2d61b4b9bf250355de45a7ac7`);
    return get.json()
}
async function fetchPop(pg){
    const get = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=38a763a2d61b4b9bf250355de45a7ac7&language=en-US&page=${pg}`);
    return get.json()
}

function plus(pg,fun) {
    pgObject[pg] += 1;

    const plusApi = fetchApi(pgObject[pg]);

    plusApi.then(data => {
        fun(data)
    });
}

function minus(pg, fun) {
    pgObject[pg] -= 1;

    const minusApi = fetchApi(pgObject[pg]);

    minusApi.then(data => {
        fun(data)
    });
<<<<<<< HEAD
}

=======
}
>>>>>>> 750cd4443b5cd9d30d0d2f09740ed0cebc34a430
