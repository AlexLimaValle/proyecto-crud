const table = document.querySelector(".table__table");
const register = document.querySelector(".register__info");
const input_name = document.getElementById("name");
const input_lastName = document.getElementById("lastName");
const input_tel = document.getElementById("cellphone");

let users = [];

const getAddInfo = (event)=>{
    const {target} = event;
    if(target.getAttribute("class") == "register__info-button"){
        data = {
                name:input_name.value,
                lastname:input_lastName.value,
                tel:input_tel.value
        };
        users = [...users,data];  
        console.log(users);
        input_name.value = "";
        input_lastName.value = "";
        input_tel.value = "";
    }
}

register.addEventListener("click",getAddInfo);

const getAddTr = function(list){
    list.forEach(
        
    );
}