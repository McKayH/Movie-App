let pg = 1;
const promiseApi = fetchApi();
promiseApi.then(check);

async function fetchApi(){
    const get = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=38a763a2d61b4b9bf250355de45a7ac7&query=dood&page=${pg}`);
    return get.json()
}

function check(ap){
    console.log(ap);
}