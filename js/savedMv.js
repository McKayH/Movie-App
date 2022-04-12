function switchSvd(){
    document.getElementById('page').innerHTML = `<button onClick="window.location.reload();">Go Back</button><div id="cont"></div>`;
    displayMv();
}
function removeSv(id){
    let ids = [];
    saved.map(obj =>{ids.push(obj.id);});
    const indx = ids.indexOf(id.toString());
    console.log(indx); 
    console.log(saved[indx]);
    saved.splice(indx, 1);
    console.log(saved);
    localStorage.setItem('movieList', JSON.stringify(saved));
}
function displayMv(){
    let display = '';
    if(saved.length){
        for (let i = saved.length-1; i >= 0; i--) {
            const ele = saved[i];
                if(ele.img != 'null'){
                    postIm = `<img src="https://image.tmdb.org/t/p/w500${ele.img}" onclick="switchPage(${ele.id})">`;
                }
                else{
                    postIm = `<img onclick="switchPage(${ele.id})" src="img/noPost.png" alt="no poster img">`;
                }
                display += `<div class="CardStyle">
                <div class="movieImg">
                    ${postIm}
                </div>
                <div class="info">
                    <p class="rating">${ele.rateing}</p>
                    <span onclick="switchPage(${ele.id})" class="name">${ele.title}</span>
                </div>
                <button type="button" class="btn btn-dark" onclick="removeSv(${ele.id})">Remove</button>
            </div>`
        }
    }
    else{
        display = "<h2>NO SAVED MOVIES</h2>"
    }
    document.getElementById('cont').innerHTML = display;
}