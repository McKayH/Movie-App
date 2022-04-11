
// let sortedIds = [];
const trend = fetchTrend();
trend.then(makeTrend);

const pop = fetchPop(pg);
pop.then(makePopular);


function searching(){
    const query = document.getElementById('search').value;
    const ap = fetchSearch( pgObject["spg"] ,query);
    ap.then(data =>{
        srch(data, query);
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

function plus(pg,func) {
    pgObject[pg] += 1;

    const plusPop = fetchPop(pgObject[pg]);

    plusPop.then(data => {
        func(data)
    });

}

function minus(pg, func) {
    pgObject[pg] -= 1;

    const minusPop = fetchPop(pgObject[pg]);

    minusPop.then(data => {
        func(data)
    });
}
function plusSearch(pg,func,qry) {
    pgObject[pg] += 1;
    const pluSearch = fetchSearch(pgObject[pg], qry);

    pluSearch.then(data => {
        func(data, qry)
    });

}
function minSearch(pg,func,qry) {
    pgObject[pg] -= 1;
    const minSearch = fetchSearch(pgObject[pg], qry);

    minSearch.then(data => {
        func(data, qry)
    });

}
