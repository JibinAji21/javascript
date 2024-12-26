

const fetchdata = async () =>{
    try{
        const response = await fetch("https://dummyjson.com/posts")
        // console.log(response);
        const data =await response.json()
        // console.log(data.products);
        const row = document.querySelector(".row")
        data.posts.forEach(element=>{
            console.log(element.title);
            const col=document.createElement("div")
            col.classList.add("col-lg-3")
            col.innerHTML=`
            <div class="card" style="width:"100%">
                <div class="card-body" style="background-color:red;">
                <h4 class="card-title">${element.title}</h4>
                <p class="card-text">${element.body}</p>
                <p class="card-text">${element.tags}</p>
                <p class="card-text">${element.reactions}</p>
                <p class="card-text">${element.views}</p>
                <p class="card-text">${element.userId}</p>
                </div>
            </div>`
            row.appendChild(col)
        })
    }
    catch(error){
            console.log(error);
        }
}
fetchdata()
    
           

