function switchPage(id){
    document.getElementById('page').innerHTML = `<button onClick="window.location.reload();">Go Back</button>`;
    console.log(id);
}