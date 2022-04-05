// ALL
let pg = 1;

let pgObject = {
    rpg: 1,
    ppg: 1,
    tpg: 1,
}

let saved = JSON.parse(localStorage.getItem('movieList')) || [];
if (saved.length) {
    console.log(saved);
    makeSave(saved);
}
// HOMEPAGE

class savedItem{
    constructor(id, title, img, rateing){
        this.id = id;
        this.title = title;
        this.img = img;
        this.rateing = rateing
    }
}

function makeRecent(page) {
    console.log(page);
    let RHTML = '';
    let postPath = '';
    if (pgObject["rpg"] > 1) {
        RHTML += `<button onclick="minus('rpg', makeRecent)">PREV PAGE</button>`
    }
    for (let i = 0; i < page.results.length; i++){
        if(page.results[i].poster_path){
           postPath =`<div class="movieImg">
            <img src="https://image.tmdb.org/t/p/w500${page.results[i].poster_path}">
            </div>`
        }
        else{
            postPath = '<img src="img/noPost.png" alt="no poster img">';
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
            <div>
                <button onclick="addSave('${page.results[i].id}', '${page.results[i].title}', '${page.results[i].poster_path}', '${page.results[i].vote_average}')">Save</button>
            </div>
        </div>
        `;
    };
    if (pgObject["rpg"] < page.total_pages) {
        RHTML += `<button onclick="plus('rpg', makeRecent)">NEXT PAGE</button>`
    }
    
    document.getElementById('recent').innerHTML = RHTML;
}
// popular
function makePopular(page) {
    let PHTML = '';

    let postPath = '';
    if (pgObject["ppg"] > 1) {
        PHTML += `<button onclick="minus('ppg', makePopular)">PREV PAGE</button>`
    }
    for (let i = 0; i < page.results.length; i++){
        if(page.results[i].poster_path){
            postPath =`<div class="movieImg">
             <img src="https://image.tmdb.org/t/p/w500${page.results[i].poster_path}">
             </div>`
         }
         else{
            postPath = '<img src="img/noPost.png" alt="no poster img">';
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
            <div>
                <button onclick="addSave('${page.results[i].id}', '${page.results[i].title}', '${page.results[i].poster_path}', '${page.results[i].vote_average}')">Save</button>
            </div>
        </div>
        `;
    };
    if (pgObject["ppg"] < page.total_pages) {
        PHTML += `<button onclick="plus('ppg', makePopular)">NEXT PAGE</button>`
    }
    document.getElementById('pop').innerHTML = THTML;
}
// Trending
function makeTrend(page) {
    let THTML = '';
    let postPath ='';
    if (pgObject["tpg"] > 1) {
        THTML += `<button onclick="minus('tpg', makeTrend)">PREV PAGE</button>`
    }
    for (let i =0; i < page.results.length; i++){
        if(page.results[i].poster_path){
            postPath =`<div class="movieImg">
             <img src="https://image.tmdb.org/t/p/w500${page.results[i].poster_path}">
             </div>`
         }
         else{
             postPath = '<img src="img/noPost.png" alt="no poster img">';
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
            <div>
                <button onclick="addSave('${page.results[i].id}', '${page.results[i].title}', '${page.results[i].poster_path}', '${page.results[i].vote_average}')">Save</button>
            </div>
        </div>
        `;
    };
   if (pgObject["tpg"] < page.total_pages) {
        THTML += `<button onclick="plus('tpg', makeTrend)">NEXT PAGE</button>`
    }

    document.getElementById('trending').innerHTML = THTML;
}
function makeSave(save) {
    let SHTML = '';
    let postIm = '';
    save.forEach(ele => {
        if(ele.img != 'null'){
            postIm = `<img src="https://image.tmdb.org/t/p/w500${ele.img}">`;
        }
        else{
            postIm = `<img src="img/noPost.png" alt="no poster img">`;
        }
        SHTML += `<div class="CardStyle">
        <div class="movieImg">
            ${postIm}
        </div>
        <div class="info">
            <p class="rating">${ele.rateing}</p>
            <p class="name">${ele.title}</p>
        </div>
    </div>`
    });
    document.getElementById('saved').innerHTML = SHTML;
}

function addSave (svid, svtitle, svposter, svrating) {
    let haveSved = false;
    if(saved.length){
        saved.forEach(ele =>{
            if(svid === ele.id){
                console.log('ALREADY SAVED THIS');
                haveSved = true;
            }
        });
    }
    if(!haveSved){
        const Item = new savedItem(svid, svtitle, svposter, svrating)
        saved.push(Item);
        localStorage.setItem('movieList', JSON.stringify(saved));
        makeSave(saved);
    }
}

function searching(){
    const searched = document.getElementById('search').value.toUpperCase();
    const ap = fetchApi();
    ap.then(data =>{
        search(data, searched)
    });
}
function search(data, searched){
    console.log(searched);
    let result = [];
    let titles = [];
    data.results.forEach(ele =>{
        titles.push(ele.title);
    });
    result = titles.filter(ele =>{
        console.log(ele)
        return ele.toUpperCase().includes(searched);
    });
    console.log(result);
}
