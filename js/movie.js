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
            <button onclick="addSave('${page.results[i].id}', '${page.results[i].title}', '${page.results[i].poster_path}', '${page.results[i].vote_average}')">Save</button>
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
            <button onclick="addSave('${page.results[i].id}', '${page.results[i].title}', '${page.results[i].poster_path}', '${page.results[i].vote_average}')">Save</button>
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
            <button onclick="addSave('${page.results[i].id}', '${page.results[i].title}', '${page.results[i].poster_path}', '${page.results[i].vote_average}')">Save</button>
        </div>
        `;
    };
    document.getElementById('trending').innerHTML = THTML;
}
function makeSave(save) {
    let SHTML = '';
    let img = '';
    save.forEach(ele => {
        if(ele.img){
            img = `<img src="https://image.tmdb.org/t/p/w500${ele.img}">`;
        }
        else{
            img = `<h2>NO POSTER</h2>`
        }
        SHTML += `<div class="CardStyle">
        <div class="movieImg">
            ${img}
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
        const Item = new savedItem(svid, svtitle, svposter,svrating)
        saved.push(Item);
        console.log(saved);
        makeSave(saved);
    }
}

