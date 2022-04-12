function switchPage(id){
    document.getElementById('page').innerHTML = `<button onClick="window.location.reload();">Go Back</button><div id="mvDis"></div>`;
    console.log(id);

}
function makePage(img, title, date, rating, info) {
    console.log('here');
    HTML = `
    <div>
        <img src="https://image.tmdb.org/t/p/w500${img}">
        <div class="infomation">
            <div>${title}</div>
            <div>${info}</div>
            <div>${date}</div>
            <div>${rating}</div>
        </div>
    </div>`;

    document.getElementById('mvDis').innerHTML = HTML;

}
