const formNewletter = document.getElementById("form");
formNewletter.addEventListener('submit', (event)=> {
    event.preventDefault();
    saveDataLocal( getValueEmail());
});

const getValueEmail=()=>{
    const email= document.getElementById("formEmail").value
    document.getElementById("valueInput").innerHTML =`Te has subscrito con: ${getEmailStorage()}`;
    return email 
} 
const saveDataLocal=(email)=>{
    localStorage.setItem("emailValue",JSON.stringify(email));
}

const getEmailStorage=()=>{
    let emailStorage=JSON.parse(localStorage.getItem("emailValue"));
    return emailStorage
}
