let user=null;


user=JSON.parse((sessionStorage.getItem("currentUser")));

// console.log(user);


function addItem(userCart,element){
    let exist=userCart.cart.findIndex((order)=>{ return order.id===element.id; })
    // console.log(exist)
    if(exist!==-1){
        userCart.cart[exist].quantity+=1;

    }else{
        let newOrder={
            quantity:1,
            name:user.name,
            email:user.email,
            ...element
        }
        userCart.cart.push(newOrder);
    }
    console.log(userCart)
}
if(user===null){
    window.location.href="./signup.html"
}else{

    let userCart={
        name:user.name,
        email:user.email,
        cart:[]
    }

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
                    let addBtn=document.createElement("button");


                    div1.classList.add("card");
                    div1.style.width="280px";
                    div1.style.height="430px"
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
                    p2.innerText="Rs. "+Math.ceil(element.price);
                    p3.className+="card-text";
                    p3.style.fontWeight="300";
                    p3.innerText=element.title;
                    div2.appendChild(p3);
                    div2.appendChild(p2);
                    div2.appendChild(p1);

                    // addBtn.classList.add("btn btn-warning");
                    addBtn.className+="btn btn-warning"
                    addBtn.innerText="Add To Cart";
                    div2.appendChild(addBtn);

                    addBtn.addEventListener("click",()=>{
                        addItem(userCart,element);

                        sessionStorage.setItem("userCart",JSON.stringify(userCart));

                    })
                    

                })
            }
            )
    
}

function logoutHandler(){
    console.log("hi")
    sessionStorage.removeItem("currentUser");
    window.location.href="./login.html";
}

{/* <button type="button" class="btn btn-warning">Warning</button> */}