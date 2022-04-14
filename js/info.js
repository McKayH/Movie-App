let Comments = JSON.parse(localStorage.getItem('comments')) || [];
class reviewed{
    constructor(id, user, review, comment){
        this.id = id;
        this.user = user;
        this.review = review;
        this.comment = comment;
    }
}
function switchPage(id){
    document.getElementById('page').innerHTML = `<button onClick="window.location.reload();">Go Back</button><div id="mvDis"></div>`;
    console.log(id);
    const movie = fetchById(id);
    movie.then(data =>{
        makePage(data);
    });


}
function makePage(data) {
    let poster = '';
    let genres = '';
    console.log(data)
    if (!data.poster_path) {
        poster = '<img src="img/noPost.png">';
    }
    else{
        poster = `<img src="https://image.tmdb.org/t/p/w500${data.poster_path}">`;
    }
    data.genres.forEach(ele =>{
        genres += `<li>${ele.name}</li>`
    });





    const HTML = `
    <button onClick="window.location.reload();">Go Back</button>
    <div class="centerStuff">
        <h1>${data.title}</h1>
            ${poster}
            <div id="rate>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            </div>
            <div class="information">
                <h5>Genres</h5>
                <ul id="genre">${genres}</ul>
                <p> ${data.overview}</p>
                <div>Release Date: ${data.release_date}</div>
                <div>Average rating: ${data.vote_average}<div>Votes counted: ${data.vote_count}</div></div>
                <div>Budget: $${data.budget}<div>Revenue: $${data.revenue}</div></div>
            </div>
            <div id="commentSection">
                <div class="input-group">
                <span class="input-group-text">Name</span>
                <input type="text" aria-label="Name" class="form-control" id="user">
                </div>
                
                <div class="input-group mb-3">
                <label class="input-group-text" for="rate">Rate</label>
                <select class="form-select" id="rate">
                    <option selected value="0">Did not see...</option>
                    <option value="1">One Star</option>
                    <option value="2">Two Stars</option>
                    <option value="3">Three Stars</option>
                    <option value="4">Four Stars</option>
                    <option value="5">Five Stars</option>
                    <option value="6">Six Stars</option>
                    <option value="7">Seven Stars</option>
                    <option value="8">Eight Stars</option>
                    <option value="9">Nine Stars</option>
                    <option value="10">Ten Stars</option>
                </select>
                </div>

                <div class="input-group mb-3">
                <button class="btn btn-outline-secondary" type="button" id="button-addon1" onclick="post(${data.id}, '${data.title}', '${data.poster_path}', '${data.vote_average}')">Post</button>
                <input type="text" id="comment" class="form-control" placeholder="Comment" aria-label="Example text with button addon" aria-describedby="button-addon1">
                </div>
                <div id="displayComment"></div>
            </div>
        
    </div>`;
    document.getElementById('page').innerHTML = HTML;
    makePost(data.id);
}

function post(svid, svtitle, svposter, svrating) {
    const name = document.getElementById('user').value;
    const rate = document.getElementById('rate').value;
    const comment = document.getElementById('comment').value;
    console.log(name, rate, comment);
    if (!name || !comment) {
        alert("Have not filled out all areas");
    }
    else{
        const comm = new reviewed(svid, name, rate, comment);
        Comments.push(comm);
        localStorage.setItem('comments', JSON.stringify(Comments));
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
        }

        makePost(svid);
    }
}
function makePost(id) {
    console.log(Comments);
    let comHTML = '';
    Comments.forEach(ele =>{
        if (ele.id === id) {
            comHTML += `<div class="post"><h4>${ele.user}</h4><span>${ele.review}</span><p>${ele.comment}</p></div>`
        }
    });
    document.getElementById('displayComment').innerHTML = comHTML;
}