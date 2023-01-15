let signInBtn=document.getElementById("signIn");
let signUpBtn=document.getElementById("signUp");
let Name=document.getElementById("name");
let Email=document.getElementById("email");
let Password=document.getElementById("password");
let passwordValidateBox=document.getElementById("passwordValidateBox");
let PhnNumber=document.getElementById("number");
let Cpassword=document.getElementById("cpassword");
let checkIcon=document.getElementsByClassName("checkIcon");
// console.log(checkIcon)

function HideBox(){
    passwordValidateBox.style.display="none";
}

Password.onfocus=()=>{
    passwordValidateBox.style.display="flex";

}

Password.onkeyup=()=>{
    let regExLowerCase=/[a-z]/g;

    if(Password.value.match(regExLowerCase)){
        checkIcon[0].classList.remove("invalid")
        checkIcon[0].classList.add("valid");
    }else{
        checkIcon[0].classList.remove("valid")
        checkIcon[0].classList.add("invalid");
    }

    let regExUpperCase=/[A-Z]/g;

    if(Password.value.match(regExUpperCase)){
        checkIcon[1].classList.remove("invalid")
        checkIcon[1].classList.add("valid");
    }else{
        checkIcon[1].classList.remove("valid")
        checkIcon[1].classList.add("invalid");
    }

    let regExNumber=/[0-9]/g;

    if(Password.value.match(regExNumber)){
        checkIcon[2].classList.remove("invalid")
        checkIcon[2].classList.add("valid");
    }else{
        checkIcon[2].classList.remove("valid")
        checkIcon[2].classList.add("invalid");
    }

    

    if(Password.value.length>=5 && Password.value.length<=8){
        checkIcon[3].classList.remove("invalid")
        checkIcon[3].classList.add("valid");
    }else{
        checkIcon[3].classList.remove("valid")
        checkIcon[3].classList.add("invalid");
    }

}

function passwordValidate(){
    let check=true;
    // console.log(checkIcon.length)
    for(let i=0;i<checkIcon.length;i++){
        if(checkIcon[i].classList.contains("invalid")==true){
            check=false;
            break;
        }
    };
    return check;
}

// console.log(Password)

function checkUserExist(db,user){
    
    const check=db.find((e)=>{
       
        return e.email=== user.email || e.name===user.name
    });

    return check;
}






signUpBtn.addEventListener("click",function(e){
                
                e.preventDefault();
                
               let name=Name.value
               let email=Email.value
               let password=Password.value
               let number=PhnNumber.value
               let cpassword=Cpassword.value

               email=email.trim();
               password=password.trim();
               name=name.trim(); 
               number=number.trim();
               cpassword=cpassword.trim();

                if(name.length===0){
                    
                    document.getElementById("1").style.visibility="visible";
                   
                    return;
                }
                let regEx=/^([a-z0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})?$/;
                if(email.length===0 || !regEx.test(email)){
                    
                    document.getElementById("2").style.visibility="visible";
                    
                    return;
                }
                let regExNumer=/^\d{10}$/;

                if(!regExNumer.test(number)){
                    document.getElementById("3").style.visibility="visible";
                    return;
                }
                

                if(!passwordValidate()){
                    alert("invalid password")
                    // document.getElementById("3").style.visibility="visible";
                   
                    return;

                }



                let newUser={
                    name,
                    email,
                    password,
                    number

                }

                
                    
                if (window.localStorage.getItem("users") != null) {
                    const users = JSON.parse(window.localStorage.getItem("users"));
                    const exist=checkUserExist(users,newUser);
                   
                    if(exist){
                        alert("user already exist");
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

