function switchPage(id){
    document.getElementById('page').innerHTML = `<button onClick="window.location.reload();">Go Back</button>`;
    console.log(id);
    
    function makePage(img, title, date, rating, info) {
        HTML = `
        <div>
            <img src="${img}">
            <div class="infomation">
                <div>${title}</div>
                <div>${info}</div>
                <div>${date}</div>
                <div>${rating}</div>
            </div>
        </div>`;
    
        document.getElementById('page').innerHTML = HTML;
    
    }
}
