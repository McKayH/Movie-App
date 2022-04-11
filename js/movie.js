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
        RHTML += `<button class="buttonStyle" onclick="minus('rpg', makeRecent)">PREV PAGE</button>`
    }
    for (let i = 0; i < page.results.length; i++){
        if(page.results[i].poster_path){
            postPath =`<img onclick="switchPage(${page.results[i].id})" src="https://image.tmdb.org/t/p/w500${page.results[i].poster_path}">`
         }
         else{
            postPath = `<img onclick="switchPage(${page.results[i].id})" src="img/noPost.png" alt="no poster img">`;
         }
        RHTML += `
        <div class="CardStyle">
            <div class="movieImg">
                ${postPath}
            </div>
            <div class="info">
                <p class="rating">${page.results[i].vote_average}</p>
                <span onclick="switchPage(${page.results[i].id})" class="name">${page.results[i].title}</span>
                <p class="date">${page.results[i].release_date}</p>
            </div>
            <div>
                <button class="buttonStyle" onclick="addSave('${page.results[i].id}', '${page.results[i].title}', '${page.results[i].poster_path}', '${page.results[i].vote_average}')">Save</button>
            </div>
        </div>
        `;
    };
    if (pgObject["rpg"] < page.total_pages) {
        RHTML += `<button class="buttonStyle" onclick="plus('rpg', makeRecent)">NEXT PAGE</button>`
    }
    
    document.getElementById('recent').innerHTML = RHTML;
}
// popular
function makePopular(page) {
    let PHTML = '';

    let postPath = '';
    if (pgObject["ppg"] > 1) {
        PHTML += `<button class="buttonStyle" onclick="minus('ppg', makePopular)">PREV PAGE</button>`
    }
    for (let i = 0; i < page.results.length; i++){
        if(page.results[i].poster_path){
            postPath =`<img onclick="switchPage(${page.results[i].id})" src="https://image.tmdb.org/t/p/w500${page.results[i].poster_path}">`
         }
         else{
            postPath = `<img onclick="switchPage(${page.results[i].id})" src="img/noPost.png" alt="no poster img">`;
         }
        PHTML += `
        <div class="CardStyle">
            <div class="movieImg">
                ${postPath}
            </div>
            <div class="info">
                <p class="rating">${page.results[i].vote_average}</p>
                <span onclick="switchPage(${page.results[i].id})" class="name">${page.results[i].title}</span>
                <p class="date">${page.results[i].release_date}</p>
            </div>
            <div>
                <button onclick="addSave('${page.results[i].id}', '${page.results[i].title}', '${page.results[i].poster_path}', '${page.results[i].vote_average}')">Save</button>
            </div>
        </div>
        `;
    };
    if (pgObject["ppg"] < page.total_pages) {
        PHTML += `<button class="buttonStyle" onclick="plus('ppg', makePopular)">NEXT PAGE</button>`
    }
    document.getElementById('popular').innerHTML = PHTML;
}
// Trending
function makeTrend(page) {
    let THTML = '';
    let postPath ='';
    for (let i =0; i < page.results.length; i++){
        if(page.results[i].poster_path){
            postPath =`<img onclick="switchPage(${page.results[i].id})" src="https://image.tmdb.org/t/p/w500${page.results[i].poster_path}">`
         }
         else{
            postPath = `<img onclick="switchPage(${page.results[i].id})" src="img/noPost.png" alt="no poster img">`;
         }
        THTML += `
        <div class="CardStyle">
            <div class="movieImg">
                ${postPath}
            </div>
            <div class="info">
                <p class="rating">${page.results[i].vote_average}</p>
                <span onclick="switchPage(${page.results[i].id})" class="name">${page.results[i].title}</span>
                <p class="date">${page.results[i].release_date}</p>
            </div>
            <div>
                <button onclick="addSave('${page.results[i].id}', '${page.results[i].title}', '${page.results[i].poster_path}', '${page.results[i].vote_average}')">Save</button>
            </div>
        </div>
        `;
    }
    document.getElementById('trending').innerHTML = THTML;
}
function makeSave(save) {
    let SHTML = '';
    let postIm = '';
    save.forEach(ele => {
        if(ele.img != 'null'){
            postIm = `<img src="https://image.tmdb.org/t/p/w500${ele.img}" onclick="switchPage(${ele.id})">`;
        }
        else{
            postIm = `<img onclick="switchPage(${ele.id})" src="img/noPost.png" alt="no poster img">`;
        }
        SHTML += `<div class="CardStyle">
        <div class="movieImg">
            ${postIm}
        </div>
        <div class="info">
            <p class="rating">${ele.rateing}</p>
            <span onclick="switchPage(${ele.id})" class="name">${ele.title}</span>
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
