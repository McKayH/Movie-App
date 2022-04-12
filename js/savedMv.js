function switchSvd(){
    document.getElementById('page').innerHTML = `<button onClick="window.location.reload();">Go Back</button>`;
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