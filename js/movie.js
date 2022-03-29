// ALL
// HOMEPAGE

function makeRecent(page) {
    let RHTML = '';
    for (let i =0; i < 20; i++){
        RHTML += `
        <div class="CardStyle">
            <div class="movieImg">
                <img src="${page.results[i].poster_path}">
            </div>
            <div class="info">
                <p class="rating">${page.results[i].vote_average}</p>
                <p class="name">${page.results[i].title}</p>
                <p class="date">${page.results[i].release_date}</p>
            </div>
        </div>
        `;
    };
    console.log(RHTML)
    document.getElementById('recent').innerHTML = RHTML;
}
function makePopular() {
    let PHTML = '';
    for (let i =0; i < 20; i++){
        PHTML += `
        <div class="CardStyle">
            <div class="movieImg">
                <img src="${pages[1].results.i.poster_path}">
            </div>
            <div class="info">
                <p class="rating">${pages[1].results.i.vote_average}</p>
                <p class="name">${pages[1].results.i.title}</p>
                <p class="date">${pages[1].results.i.release_date}</p>
            </div>
        </div>
        `;
    };
    document.getElementById(popular).innerHTML = PHTML;
}
function makeTrend() {
    let THTML = '';
    for (let i =0; i < 20; i++){
        THTML += `
        <div class="CardStyle">
            <div class="movieImg">
                <img src="${pages[1].results.i.poster_path}">
            </div>
            <div class="info"
                <p class="rating">${pages[1].results.i.vote_average}</p>
                <p class="name">${pages[1].results.i.title}</p>
                <p class="date">${pages[1].results.i.release_date}</p>
            </div>
        </div>
        `;
    };
    document.getElementById(trending).innerHTML = THTML;
}
// function makeSave(save) {
//     let SHTML = `<div class="ScrollBar">`;
//     for (let i = 0; i < 20 && i < saved.length; i++){
//         SHTML += `
//         <div class="CardStyle">
//             <div class="movieImg">
//                 <img src="${pages[1].results.i.poster_path}">
//             </div>
//             <div class="info">
//                 <p class="rating">${pages[1].results.i.vote_average}</p>
//                 <p class="name">${pages[1].results.i.title}</p>
//                 <p class="date">${pages[1].results.i.release_date}</p>
//             </div>
//         </div>
//         `;
//     };
//     SHTML += `</div>`
//     document.getElementById(saved).innerHTML = SHTML;
// }
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