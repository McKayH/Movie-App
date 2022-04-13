function switchPage(id, img, title, date, rating, info){
    HTML = `
    <button onClick="window.location.reload();">Go Back</button>
    <div class="centerStuff">
        
            <img src="https://image.tmdb.org/t/p/w500${img}">
            <div class="infomation">
                <div>${title}</div>
                <div>${info}</div>
                <div>${date}</div>
                <div>${rating}</div>
            </div>
        
    </div>`;
    document.getElementById('page').innerHTML = HTML;
    console.log(id);
}
