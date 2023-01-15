let currentUser=JSON.parse(window.localStorage.getItem("currentUser"));

if(currentUser===null){
    window.location.href="./login.html";
}

document.getElementById("loading").style.display="none";
document.getElementById("signup").style.display="none";
document.getElementById("signin").style.display="none";

let users=JSON.parse(window.localStorage.getItem("users"));
let indx=users.findIndex(el=>{
    return currentUser.email===el.email;
});

console.log(users[indx])
let cart=users[indx].cart;
console.log(cart)
let totalAmount=document.getElementById("totalAmount");

function trimString(str){
    if(str.length>50){
        return str.substring(0,50)+"..."
    }
}

let totalPrice=0;
if(cart.length===0){
    document.getElementById("empty").style.display="none";
}else{
    cart.forEach(element => {
        let div1=document.createElement("div");
        let img=document.createElement("img");
        let div2=document.createElement("div");
        let p1=document.createElement("p");
        let p2=document.createElement("p");
        let p3=document.createElement("p");
    
        let p4=document.createElement("p");
        let mainDiv=document.getElementById("container");
        
    
    
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
        img.style.objectFit="contain";
        img.style.maxWidth="200px";
        img.style.maxHeight="200px";
    
        div1.appendChild(img);
        div2.classList.add("card-body");
        img.insertAdjacentElement("afterend",div2);
        
        p1.className+="card-text";
        p1.innerText=trimString(element.description);
        p2.className+="card-text";
        p2.innerText="Rs. "+Math.ceil(element.price);
        p3.className+="card-text";
        p3.style.fontWeight="300";
        p3.innerText=element.title;
        p4.className+="card-text";
        p4.style.fontWeight="500";
        p4.innerText="Quantity: "+element.quantity;
        div2.appendChild(p3);
        div2.appendChild(p2);
        div2.appendChild(p1);
        div2.appendChild(p4);
    
        totalPrice+=element.quantity*Math.ceil(element.price);
    
        // addBtn.classList.add("btn btn-warning");
        
    
        
        
    
    });
    
    totalAmount.innerText=totalPrice
}


function logoutHandler(){
    console.log("hi")
    window.localStorage.removeItem("currentUser");
    window.location.href="./login.html";
}

