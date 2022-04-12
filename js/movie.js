// ALL
let pg = 1;

let pgObject = {
    spg: 1,
    ppg: 1,
}

let saved = JSON.parse(localStorage.getItem('movieList')) || [];
if (saved.length) {
    console.log(saved);
    makeSave(saved);
}
// HOMEPAGE

class savedItem{
    constructor(id, title, info, date, img, rating){
        this.id = id;
        this.title = title;
        this.info = info;
        this.date = date;
        this.img = img;
        this.rating = rating
    }
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
            postPath =`<img onclick="switchPage(${page.results[i].id}); makePage('${page.results[i].poster_path}', '${page.results[i].title}', '${page.results[i].overview}', '${page.results[i].release_date}', '${page.results[i].vote_average}')" src="https://image.tmdb.org/t/p/w500${page.results[i].poster_path}">`
         }
         else{
            postPath = `<img onclick="switchPage(${page.results[i].id}); makePage('${page.results[i].poster_path}', '${page.results[i].title}', '${page.results[i].overview}', '${page.results[i].release_date}', '${page.results[i].vote_average}')" src="img/noPost.png" alt="no poster img">`;
         }
        PHTML += `
        <div class="CardStyle">
            <div class="movieImg">
                ${postPath}
            </div> 
            <div class="info">
                <p class="rating">${page.results[i].vote_average}</p>
                <span onclick="switchPage(${page.results[i].id}); makePage('${page.results[i].poster_path}', '${page.results[i].title}', '${page.results[i].overview}', '${page.results[i].release_date}', '${page.results[i].vote_average}')" class="name">${page.results[i].title}</span>
                <p class="date">${page.results[i].release_date}</p>
            </div>
            <div>
                <button onclick="addSave('${page.results[i].id}', '${page.results[i].poster_path}', '${page.results[i].title}', '${page.results[i].overview}', '${page.results[i].release_date}', '${page.results[i].vote_average}')">Save</button>
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
            postPath =`<img onclick="switchPage(${page.results[i].id}); makePage('${page.results[i].poster_path}', '${page.results[i].title}', '${page.results[i].overview}', '${page.results[i].release_date}', '${page.results[i].vote_average}')" src="https://image.tmdb.org/t/p/w500${page.results[i].poster_path}">`
         }
         else{
            postPath = `<img onclick="switchPage(${page.results[i].id}); makePage('${page.results[i].poster_path}', '${page.results[i].title}', '${page.results[i].overview}', '${page.results[i].release_date}', '${page.results[i].vote_average}')" src="img/noPost.png" alt="no poster img">`;
         }
        THTML += `
        <div class="CardStyle">
            <div class="movieImg">
                ${postPath}
            </div>
            <div class="info">
                <p class="rating">${page.results[i].vote_average}</p>
                <span onclick="switchPage('${page.results[i].id}'); makePage('${page.results[i].poster_path}', '${page.results[i].title}', '${page.results[i].overview}', '${page.results[i].release_date}', '${page.results[i].vote_average}')" class="name">${page.results[i].title}</span>
                <p class="date">${page.results[i].release_date}</p>
            </div>
            <div>
                <button onclick="addSave('${page.results[i].poster_path}', '${page.results[i].title}', '${page.results[i].overview}', '${page.results[i].release_date}', '${page.results[i].vote_average}')">Save</button>
            </div>
        </div>
        `;
        
    }
    document.getElementById('trending').innerHTML = THTML;
}
function makeSave(save) {
    let SHTML = '';
    let postIm = '';
    let check = 0
    for (let i = save.length-1; i >= 0; i--) {
        const ele = save[i];
            if(ele.img != 'null'){
                postIm = `<img src="https://image.tmdb.org/t/p/w500${ele.img}" onclick="switchPage(${ele.id}); makePage('${ele.poster_path}', '${ele.title}', '${ele.overview}', '${ele.release_date}', '${ele.vote_average}')">`;
            }
            else{
                postIm = `<img onclick="switchPage(${ele.id}); makePage('${ele.poster_path}', '${ele.title}', '${ele.overview}', '${ele.release_date}', '${ele.vote_average}')" src="img/noPost.png" alt="no poster img">`;
            }
            SHTML += `<div class="CardStyle">
            <div class="movieImg">
                ${postIm}
            </div>
            <div class="info">
                <p class="rating">${ele.rateing}</p>
                <span onclick="switchPage(${ele.id}); makePage('${ele.poster_path}', '${ele.title}', '${ele.overview}', '${ele.release_date}', '${ele.vote_average}')" class="name">${ele.title}</span>
            </div>
            <button type="button" class="btn btn-dark" onclick="removeSv(${ele.id})">Remove</button>
        </div>`
        check++;
        if (check === 10) {
            break
        }
    }
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

function srch(data, qry){
    let swap = '';
    if (pgObject["spg"] > 1) {
        swap += `<button class="buttonStyle" onclick="minSearch('spg', srch, '${qry}')">PREV PAGE</button>`
    }
        data.results.forEach(ele => {
            if(ele.backdrop_path){
                postIm = `<img src="https://image.tmdb.org/t/p/w500${ele.poster_path}" onclick="switchPage(${ele.id}); makePage('${ele.poster_path}', '${ele.title}', '${ele.overview}', '${ele.release_date}', '${ele.vote_average}')">`;
            }
            else{
                postIm = `<img onclick="switchPage(${ele.id}); makePage('${ele.poster_path}', '${ele.title}', '${ele.overview}', '${ele.release_date}', '${ele.vote_average}')" src="img/noPost.png" alt="no poster img">`;
            }
            swap += `<div class="CardStyle">
            <div class="movieImg">
                ${postIm}
            </div>
            <div class="info">
                <p class="rating">${ele.popularity}</p>
                <span onclick="switchPage(${ele.id}); makePage('${ele.poster_path}', '${ele.title}', '${ele.overview}', '${ele.release_date}', '${ele.vote_average}')" class="name">${ele.title}</span>
                <span>${ele.release_date}</span>
                <div>
                <button onclick="addSave('${ele.poster_path}', '${ele.title}', '${ele.overview}', '${ele.release_date}', '${ele.vote_average}')">Save</button>
                </div>
            </div>
        </div>`
    });
    if (pgObject["spg"] < data.total_pages) {
        swap += `<button class="buttonStyle" onclick="plusSearch('spg', srch, '${qry}')">NEXT PAGE</button>`;
    }
    document.getElementById('replace').innerHTML = 'Searched Items';
    document.getElementById('popular').innerHTML  = swap;

}

// 