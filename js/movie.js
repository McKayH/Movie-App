// ALL
let saved = [];
// HOMEPAGE

class savedItem{
    constructor(id, name, img){
        this.id = id;
        this.name = name;
        this.img = img;
    }
}

function makeRecent(page) {
    console.log(page);
    let RHTML = '';
    let postPath = '';
    for (let i =0; i < page.results.length; i++){
        if(page.results[i].poster_path){
           postPath =`<div class="movieImg">
            <img src="https://image.tmdb.org/t/p/w500${page.results[i].poster_path}">
            </div>`
        }
        else{
            postPath = '<h2>NO POSTER</h2>';
        }
        RHTML += `
        <div class="CardStyle">
            <div class="movieImg">
                ${postPath}
            </div>
            <div class="info">
                <p class="rating">${page.results[i].vote_average}</p>
                <p class="name">${page.results[i].title}</p>
                <p class="date">${page.results[i].release_date}</p>
            </div>
        </div>
        <div>
            <button onclick="addSave(${page.results[i]})">Save</button>
        </div>
        `;
    };
    document.getElementById('recent').innerHTML = RHTML;
}
function makePopular(page) {
    let PHTML = '';

    let postPath = '';
    for (let i = 0; i < page.results.length; i++){
        if(page.results[i].poster_path){
            postPath =`<div class="movieImg">
             <img src="https://image.tmdb.org/t/p/w500${page.results[i].poster_path}">
             </div>`
         }
         else{
             postPath = '<h2>NO POSTER</h2>';
         }
        PHTML += `
        <div class="CardStyle">
            <div class="movieImg">
                ${postPath}
            </div>
            <div class="info">
                <p class="rating">${page.results[i].vote_average}</p>
                <p class="name">${page.results[i].title}</p>
                <p class="date">${page.results[i].release_date}</p>
            </div>
        </div>
        <div>
            <button onclick="${page.results[i]}">Save</button>
        </div>
        `;
    };
    document.getElementById('popular').innerHTML = PHTML;
}
function makeTrend(page) {
    let THTML = '';
    let postPath ='';
    for (let i =0; i < page.results.length; i++){
        if(page.results[i].poster_path){
            postPath =`<div class="movieImg">
             <img src="https://image.tmdb.org/t/p/w500${page.results[i].poster_path}">
             </div>`
         }
         else{
             postPath = '<h2>NO POSTER</h2>';
         }
        THTML += `
        <div class="CardStyle">
            <div class="movieImg">
                ${postPath}
            </div>
            <div class="info">
                <p class="rating">${page.results[i].vote_average}</p>
                <p class="name">${page.results[i].title}</p>
                <p class="date">${page.results[i].release_date}</p>
            </div>
        </div>
        <div>
            <button onclick="${page.results[i]}">Save</button>
        </div>
        `;
    };
    document.getElementById('trending').innerHTML = THTML;
}
function makeSave(save) {
    let SHTML = '';
    for (let i = 0; i < 20 && i < saved.length; i++){
        SHTML += `
        <div class="CardStyle">
            <div class="movieImg">
                <img src="https://image.tmdb.org/t/p/w500/${page.results.i.poster_path}">
            </div>
            <div class="info">
                <p class="rating">${pages[1].results.i.vote_average}</p>
                <p class="name">${pages[1].results.i.title}</p>
                <p class="date">${pages[1].results.i.release_date}</p>
            </div>
        </div>
        `;
    };
    document.getElementById('saved').innerHTML = SHTML;
}
// MOVIE DETAILS



// function findPop() {
//     let popular = [];
//     for (let i = 0; i < total_pages.length; i++) {
//         for (let j = 0; j < results.length; j++) {
//             popular.push()
//             while (con != popular.length-1){
//                 for (let k = 0; k < popular.length-1; k++)
//             }
//         }
//     };
// };
// sendInfo(idOfMovie, PageApi);

function addSave (s) {
    saved.push(s);
    console.log(saved);
    return saved
}

