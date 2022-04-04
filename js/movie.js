// ALL
let saved = [];
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
    for (let i =0; i < page.results.length; i++){
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
    let pHTML =``;
    if (pg == 1) {
        pHTML += `<button onclick="pg += 1">NEXT PAGE</button>`
    } else if (pg > 1 && pg < 8) {
        pHTML += `<button onclick="pg -= 1">PREV PAGE</button>`
        pHTML += `<button onclick="pg += 1">NEXT PAGE</button>`
    } else {
        pHTML += `<button onclick="pg -= 1">PREV PAGE</button>`
    }
    
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
            console.log('here');
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
    </div>
    <div>`
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
        console.log(saved);
        makeSave(saved);
    }
}

