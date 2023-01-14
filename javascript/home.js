let user=undefined;

user=sessionStorage.getItem("email");
console.log(user);
if(user===null){
    window.location.href="./signup.html"
}else{
    function trimString(str){
        if(str.length>50){
            return str.substring(0,50)+"..."
        }
    }
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res=>{
                console.log(res)
                res.forEach(element => {
                    let div1=document.createElement("div");
                    let img=document.createElement("img");
                    let div2=document.createElement("div");
                    let p1=document.createElement("p");
                    let p2=document.createElement("p");
                    let p3=document.createElement("p");
                    let mainDiv=document.getElementById("container");
                    // console.log(mainDiv)
                    div1.classList.add("card");
                    div1.style.width="18rem";
                    div1.style.display="flex";
                    div1.style.alignItems="center";
                    div1.style.marginBottom="10px"
                    mainDiv.appendChild(div1);
                    img.className+="card-img-top";
                    img.alt="loading..."
                    img.src=`${element.image}`;

                    div1.appendChild(img);
                    div2.classList.add("card-body");
                    img.insertAdjacentElement("afterend",div2);
                    img.style.objectFit="contain";
                    img.style.maxWidth="200px";
                    img.style.maxHeight="200px";
                    p1.className+="card-text";
                    p1.innerText=trimString(element.description);
                    p2.className+="card-text";
                    p2.innerText="Rs. "+element.price;
                    p3.className+="card-text";
                    p3.style.fontWeight="300";
                    p3.innerText=element.title;
                    div2.appendChild(p3);
                    div2.appendChild(p2);
                    div2.appendChild(p1);

                    

                })
            }
            )
    // console.log(JSON.parse(user));
}

function logoutHandler(){
    console.log("hi")
    sessionStorage.removeItem("email");
    window.location.href="./login.html";
}

{/* <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div> */}