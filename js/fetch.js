let pg = 1;
let sortedIds = [];
const promiseApi = fetchApi(pg);
promiseApi.then(sendApi);

async function fetchApi(pg){
    const get = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=38a763a2d61b4b9bf250355de45a7ac7&query=dood&page=${pg}`);
    return get.json()
}

function sendApi(ap){    
   sortIds(ap);
}
function sortIds(ap){
    const page = ap;
    page.results.forEach(ele => {
        ids.push(ele.id);
        });
    console.log(ids);
    sortIds(ids);
    function sortIds(arr){
        let i = 0;
        while(arr.length){
            const min = smallest(arr)
            const smallId = arr.splice(arr.indexOf(min), 1);
            sortedIds.push(smallId[0]);
            i++;
            if(i === 100){
                break;
            }
        }
        function smallest(arr){
            let small = arr[0];
            arr.forEach(ele =>{
                if(ele < small){
                    small = ele;
                }
            });
            return small;
        }
        console.log(sortedIds);
    }
}
