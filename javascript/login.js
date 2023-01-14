let signInBtn=document.getElementById("signIn");
let Email=document.getElementById("email");
let Password=document.getElementById("password");

const users = JSON.parse(window.localStorage.getItem("users"));
                
                console.log(users);

signInBtn.addEventListener("click",function(e){
    e.preventDefault();
    let email=Email.value;
    let password=Password.value;
    eamil=email.trim();
    password=password.trim();

    let regEx=/^([a-z0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})?$/;
                if(email.length===0 || !regEx.test(email)){
                    
                    document.getElementById("2").style.visibility="visible";
                    
                    return;
                }
                

                if(password===undefined || password.length<5 || password.length>8){
                    
                    document.getElementById("3").style.visibility="visible";
                   
                    return;

                }

                

                const user = users.find((user) =>user.email == email && user.password == password);

                

                if(user){
                    sessionStorage.setItem("email",email);
                    window.location.href="./home.html";
                }else{

                    alert("Enter Correct email and password");
                    
                }

                



})