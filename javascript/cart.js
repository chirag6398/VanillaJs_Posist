
if(sessionStorage.getItem("currentUser")===null){
    window.location.href="./login.html";
}
// console.log(sessionStorage.getItem("currentUser"))

var cart=JSON.parse(sessionStorage.getItem("currentUser")).cart;



