// ALL
let saved = [];
// HOMEPAGE

function makeRecent(page) {
    let RHTML = '';
    for (let i =0; i < 20; i++){
        RHTML += `
        <div class="CardStyle">
            <div class="movieImg">
            `
            if (page.results[i].poster_path = null) {
                RHTML += `<img src="https://image.tmdb.org/t/p/w500/${page.results[i].poster_path}"></img>`
            } else {
                RHTML += `<img src="https://image.tmdb.org/t/p/w500/${page.results[i].poster_path}"></img>`
            }
            RHTML += `
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
    for (let i =0; i < 20; i++){
        PHTML += `
        <div class="CardStyle">
            <div class="movieImg">`
        if (page.results[i].poster_path = null) {
            PHTML += `<img src="https://image.tmdb.org/t/p/w500/${page.results[i].poster_path}"></img>`
        } else {
            PHTML += `<img src="https://image.tmdb.org/t/p/w500/${page.results[i].poster_path}"></img>`
        }
        PHTML += `
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
    for (let i =0; i < 20; i++){
        THTML += `
        <div class="CardStyle">
            <div class="movieImg">
            `
            if (page.results[i].poster_path = null) {
                THTML += `<img src="https://image.tmdb.org/t/p/w500/${page.results[i].poster_path}"></img>`
            } else {
                THTML += `<img src="https://image.tmdb.org/t/p/w500/${page.results[i].poster_path}"></img>`
            }
            THTML += `
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
    let SHTML = `<div class="ScrollBar">`;
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
    SHTML += `</div>`
    document.getElementById('saved').innerHTML = SHTML;
}
// MOVIE DETAILS

function addSave (s) {
    saved.push(s);
    return saved
}