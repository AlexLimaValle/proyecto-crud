const table = document.querySelector(".table__table");
const register = document.querySelector(".register__info");
const input_name = document.getElementById("name");
const input_lastName = document.getElementById("lastName");
const input_tel = document.getElementById("cellphone");
const input_select = document.getElementById("especialidad");
const input_radio_1 = document.getElementById("mujer");
const input_radio_2 = document.getElementById("hombre");

let users = JSON.parse(localStorage.getItem("medicos")) || [];

const getAddTr = (objeto)=>{
        const nuevo_tr = document.createElement("tr");
        nuevo_tr.setAttribute("class","table__tr");
        nuevo_tr.innerHTML = `
        <td class="table__td">
             <img src="./img/medico-${objeto.sex}.png"  alt="avatar-1" class="table__avatar">
        </td>
        <td class="table__td">
             <ul class="table__ul">
               <li class="table__li">${objeto.name} ${objeto.lastname}</li>
               <li class="table__li">${objeto.espe}</li>
               <li class="table__li">${objeto.sex}</li>
            </ul>
        </td>
        <td class="table__td table__td--display">
            <button class="table__button">
                <img src="./img/pencil.png" alt="lapiz" class="table__button-img">
            </button>
            <button class="table__button">
                <img src="./img/trash.png" alt="lapiz" class="table__button-img">
            </button>
            <button class="table__button">
                <img src="./img/user.png" alt="lapiz" class="table__button-img">
            </button>
        </td>
        `;
         table.appendChild(nuevo_tr);
}

users.forEach(e=>{
    getAddTr(e);
})

const getAddInfo = (event)=>{
    const {target} = event;
    if(target.getAttribute("class") == "register__info-button"){
        let valor_radio;
        if(input_radio_1.checked){
            valor_radio = input_radio_1.value;
        }else if(input_radio_2.checked){
            valor_radio = input_radio_2.value;
        }
        data = {
                name:input_name.value,
                lastname:input_lastName.value,
                tel:input_tel.value,
                espe:input_select.value,
                sex:valor_radio
        };
        users = [...users,data];  
        let storage = JSON.stringify(users);
        localStorage.setItem("medicos",storage);
        getAddTr(data);
        input_name.value = "";
        input_lastName.value = "";
        input_tel.value = "";
        input_select.value ="";
        input_radio_1.checked = false;
        input_radio_2.checked = false;
    }
}
// no pasa los nueva data al array es por eso que no puede aplicar el forEach, ya que el array llega vacío
register.addEventListener("click",getAddInfo);







