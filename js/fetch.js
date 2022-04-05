
// let sortedIds = [];
const promiseApi = fetchApi(1, 'disney');
promiseApi.then(data => {
    makeRecent(data)
    makePopular(data)
    makeTrend(data)
    // sortIds(data);
});
function searching(){
    const query = document.getElementById('search').value;
    const ap = fetchApi( 1 ,query);
    let swap = '';
    ap.then(data =>{

        data.results.forEach(ele => {
            if(ele.backdrop_path){
                postIm = `<img src="https://image.tmdb.org/t/p/w500${ele.poster_path}" onclick="switchPage(${ele.id})">`;
            }
            else{
                postIm = `<img src="img/noPost.png" alt="no poster img">`;
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

async function fetchApi(pg, query){
    const get = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=38a763a2d61b4b9bf250355de45a7ac7&query=${query}&page=${pg}`);
    return get.json()
}

// https://developers.themoviedb.org/3/trending/get-trending
// https://developers.themoviedb.org/3/movies/get-popular-movies

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
}

//  work on this later


// function sortIds(ap){
//     const page = ap;
//     let ids = [];
//     page.results.forEach(ele => {
//         ids.push(ele.id);
//         });
//     sortIds(ids);
//     function sortIds(arr){
//         let i = 0;
//         while(arr.length){
//             const min = smallest(arr)
//             const smallId = arr.splice(arr.indexOf(min), 1);
//             sortedIds.push(smallId[0]);
//             i++;
//             if(i === 100){
//                 break;
//             }
//         }
//         function smallest(arr){
//             let small = arr[0];
//             arr.forEach(ele =>{
//                 if(ele < small){
//                     small = ele;
//                 }
//             });
//             return small;
//         }
//         console.log(sortedIds);
//     }
// }
