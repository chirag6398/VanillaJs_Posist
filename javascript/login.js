let signInBtn=document.getElementById("signIn");
let UserName=document.getElementById("username");
let Password=document.getElementById("password");

const users = JSON.parse(window.localStorage.getItem("users"));
                

signInBtn.addEventListener("click",function(e){
    e.preventDefault();
    let userName=UserName.value;
    let password=Password.value;
    userName=userName.trim();
    password=password.trim();

    let regEx=/^([a-z0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})?$/;
                if(userName.length===0){
                    
                    document.getElementById("2").style.visibility="visible";
                    
                    return;
                }
                

                if(password===undefined || password.length<5 || password.length>8){
                    
                    document.getElementById("3").style.visibility="visible";
                   
                    return;

                }

                

                const user = users.find((user) =>(user.email == userName || user.name==userName) && user.password == password);

                

                if(user){
                    sessionStorage.setItem("currentUser",JSON.stringify(user));
                    window.location.href="./index.html";
                }else{

                    alert("Enter Correct email and password");
                    
                }

                



})