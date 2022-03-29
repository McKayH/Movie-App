// ALL
// HOMEPAGE
function makeRecent(recent) {
    let RHTML;
    for (let i =0; i < 25; i++){
        RHTML += `
        <div class="CardStyle">
            <div class="movieImg">

            </div>
            <div class="info">
                <p class="rating"></p>
                <p class="name"></p>
                <p class="date"></p>
            </div>
        </div>
        `;
    };
    document.getElementById(recent).innerHTML = RHTML;
}
function makePopular(popular) {
    let PHTML;
    for (let i =0; i < 25; i++){
        PHTML += `
        <div class="CardStyle">
            <div class="movieImg">

            </div>
            <div class="info">
                <p class="rating"></p>
                <p class="name"></p>
                <p class="date"></p>
            </div>
        </div>
        `;
    };
    document.getElementById(popular).innerHTML = PHTML;
}
function makeTrend(trend) {
    let THTML;
    for (let i =0; i < 25; i++){
        THTML += `
        <div class="CardStyle">
            <div class="movieImg">

            </div>
            <div class="info">
                <p class="rating"></p>
                <p class="name"></p>
                <p class="date"></p>
            </div>
        </div>
        `;
    };
    document.getElementById(trending).innerHTML = THTML;
}
function makeSave(save) {
    let SHTML = `<div class="ScrollBar">`;
    for (let i =0; i < 25 && i < saved.length; i++){
        SHTML += `
        <div class="CardStyle">
            <div class="movieImg">

            </div>
            <div class="info">
                <p class="rating"></p>
                <p class="name"></p>
                <p class="date"></p>
            </div>
        </div>
        `;
    };
    SHTML += `</div>`
    document.getElementById(saved).innerHTML = SHTML;
}
// MOVIE DETAILS
function select(){

    // info should give me the movie name or id that I can use to get the movie
    sendInfo(info);
}
