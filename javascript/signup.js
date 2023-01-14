let signInBtn=document.getElementById("signIn");
let signUpBtn=document.getElementById("signUp");
let Name=document.getElementById("name");
let Email=document.getElementById("email");
let Password=document.getElementById("password");

function checkUserExist(db,user){
    
    const check=db.find((e)=>{
        // alert(e.email==user.email)
        return e.email==user.email
    });
    return check;
}

signUpBtn.addEventListener("click",function(e){
                
                e.preventDefault();
                
               let name=Name.value
               let email=Email.value
               let password=Password.value
                
               email=email.trim();
               password=password.trim();
               name=name.trim(); 

                if(name.length===0){
                    
                    document.getElementById("1").style.visibility="visible";
                   
                    return;
                }
                let regEx=/^([a-z0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})?$/;
                if(email.length===0 || !regEx.test(email)){
                    
                    document.getElementById("2").style.visibility="visible";
                    
                    return;
                }
                

                if(password===undefined || password.length<5 || password.length>8){
                    
                    document.getElementById("3").style.visibility="visible";
                   
                    return;

                }



                let newUser={
                    name,
                    email,
                    password

                }

                
                    
                if (window.localStorage.getItem("users") != null) {
                    const users = JSON.parse(window.localStorage.getItem("users"));
                    const exist=checkUserExist(users,newUser);
                   
                    if(exist){
                        alert("email id already exist");
                        return;
                    }
                    users.push(newUser);
                    window.localStorage.setItem("users", JSON.stringify(users));
                  } else {
                    window.localStorage.setItem("users", JSON.stringify([newUser]));
                  } 
                
                  alert("successfull signUp");
                  
                  window.location.href="./login.html";


});

