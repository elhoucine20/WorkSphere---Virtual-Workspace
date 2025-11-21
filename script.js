let arry = [];

let Data = {};
let conteur = 0;
var id = 0;

// 
const modal = document.querySelector('#modal');
const close = document.querySelector('#close')
const AddWorker = document.querySelector('#AddWorker');
// 
// regex
const regexname = /^[a-zA-ZÀ-ÿ0-9\s'.,-]{2,24}$/;
const regeximageurl = /^(https?:\/\/.*)$/i;
//   les inputs
const Valide_Worker = document.querySelector('#Valide_Worker');
const form = document.querySelector('#form');
const parent_list = document.querySelector('#parent_list');
const modal_List = document.querySelector('#modal_List');
const modalList = document.querySelector('#modal-List');
const InputName = document.querySelector('#name');
const select = document.querySelector('#role');
const email = document.querySelector('#email');
const company = document.querySelector('#company');
const phone = document.querySelector('#phone');
const experienceStartDate = document.querySelector('#experience-start-date');
const experienceEndDate = document.querySelector('#experience-end-date');
const url = document.querySelector('#photo');
const PlusExpe = document.querySelector('#PlusExpe')

// les 6 div
const salle_manager = document.querySelector('#salle-manager');
const div1 = document.querySelector('#ul1');
const div2 = document.querySelector('#ul2');
const div3 = document.querySelector('#ul3');
const div4 = document.querySelector('#ul4');
const div5 = document.querySelector('#ul5');
const div6 = document.querySelector('#ul6');

const salle_Receptionist = document.querySelector('#salle-Receptionist');
const salle_Technician = document.querySelector('#salle-Technician');
const salle_Security = document.querySelector('#salle-Security');
const salle_servers = document.querySelector('#salle-servers');
const salle_Cleaning = document.querySelector('#salle-Cleaning');
// modal block
const blurr = document.querySelector('#bgMOdal');
AddWorker.addEventListener('click', function () {
    modal.style.display = "block";
    blurr.style.display = "block";
})
close.addEventListener('click', function () {
    modal.style.display = "none";
    blurr.style.display = "none";
})
PlusExpe.addEventListener('click', function () {
    plusierExperience.innerHTML += `
        <label for="company">Company :</label>
                        <input type="text" id="company" name="company" placeholder="Company"><br>
                        <label for="experience-start-date">Start :</label>
                        <input type="date" id="experience-start-date" name="experience-start-date"><br>
                        <label for="experience-end-date">End :</label>
                        <input type="date" id="experience-end-date" name="experience-end-date"><br>
    `
})
// affichage dans header
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //    validation
    if (!regexname.test(InputName.value)) {
        return alert('saisir name')
    }
    if (!regeximageurl.test(url.value)) {
        return alert('saisir URL');
    }
    Data = {
        name: InputName.value,
        role: select.value,
        emaill: email.value,
        phonee: phone.value,
        URL: url.value,
        Company: company.value,
        ExSTART: experienceStartDate.value,
        ExEND: experienceEndDate.value,
    }
    
    arry.push(Data);
    // console.log("Data");
    // console.log(Data);
    affichagCard();
    affichadModal();
    form.reset();
});
//    affichage dans aside
function affichagCard() {
    parent_list.innerHTML += `   
        <div  class="li1">
                <img onclick="modall(${conteur++})" class="image imgSmalll" src="${url.value}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${InputName.value}</p>
                    <p class="small small2M">${select.value}</p>
                </div>
                <button class="btn-edit btnEditsmall editJS">edit
                </button>
            </div>
   `
}
//    l'affichage sur le modal
function affichadModal() {
    modal_List.innerHTML += `   
        <div  class="li1">
                <img  class="image imgSmalll" src="${url.value}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${InputName.value}</p>
                    <p class="small small2M">${select.value}</p>
                </div>
                <button onclick="AddWorkerr(${id++})" class="btn-edit btnEditsmall editJS">Add
                </button>
            </div>*
   `
}
// modal des information
let header = document.querySelector('#header');
let div = document.createElement('div');
header.append(div);
function modall(index) {
    div.innerHTML = `
        <div id="modal2">
            <div id="modal-content">
                <span id="close2" class="close">&times;</span>
                <div class="informations">
                    <p>NAME : <span>${arry[index].name}</span></p>
                    <p>ROLE : <span>${arry[index].role}</span></p>
                    <p>PHONE : <span>${arry[index].phonee}</span></p>
                    <p>EMAIL : <span>${arry[index].emaill}</span></p>
                    <p>URL : <span>${arry[index].URL}</span></p>
                    <h2>Experience</h2>
                    <p>Company : <span>${arry[index].Company}</span></p>
                    <p>Date Start : <span>${arry[index].ExSTART}</span></p>
                    <p>Date End : <span>${arry[index].ExEND}</span></p>
                </div>
            </div>
         </div>
    `
    const modal2 = document.querySelector('#modal2');
    const close2 = document.querySelector('#close2')
    modal2.style.display = "block";
    close2.addEventListener('click', function () {
        modal2.style.display = "none";
    })
}
// btn plus modal affiche tout
const blurr3 = document.querySelector('#bgMOdal3');
const plus = document.querySelectorAll('.btnPlus');
plus.forEach(ele => {
    ele.addEventListener('click', function () {
        const close3 = document.querySelector('#close3')
        modalList.style.display = "block";
        blurr3.style.display = "block";
        //   display none modal 3
         close3.addEventListener('click', function () {
            modalList.style.display = "none";
            blurr3.style.display = "none";
        })
    })
})
// add worker
function AddWorkerr(index) {
    // manager
    function salleManager() {
        if (arry[index].role === "Manager") {
            div1.innerHTML += `
        <div  class="li1 lismall">
                <img  class="image imgSmall" src="${arry[index].URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall">${arry[index].name}</p>
                    <p class="small small2M">${arry[index].role}</p>
                </div>
                <button class="btn-edit btnEDITsmall editJS">X
                </button>
            </div>
   `
   arry.splice(index, 1)
    parent_list.innerHTML = "";
    modal_List.innerHTML = `<span id="close3" class="close">&times;</span></br>`;
    let closes = document.querySelector("#close3");
    closes.addEventListener('click', function () {
            modalList.style.display = "none";
            blurr3.style.display = "none";
        })
    arry.forEach(ele => {
        parent_list.innerHTML += `
        <div  class="li1">
                <img onclick="modall(${conteur++})" class="image imgSmalll" src="${ele.URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${ele.name}</p>
                    <p class="small small2M">${ele.role}</p>
                </div>
                <button class="btn-edit btnEditsmall editJS">edit
                </button>
            </div>`;
            modal_List.innerHTML += `   

        <div  class="li1">
                <img  class="image imgSmalll" src="${ele.URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${ele.name}</p>
                    <p class="small small2M">${ele.role}</p>
                </div>
                <button onclick="AddWorkerr(${id++})" class="btn-edit btnEditsmall editJS">Add
                </button>
            </div>
   `
    })
    

        } else {
            alert('imppossible dans cette zone ')
        }
    }
    // salleManager();
   function salleReceptionist() {
        if (arry[index].role === "Receptionist") {
            div2.innerHTML += `
        <div  class="li1 lismall">
                <img  class="image imgSmall" src="${arry[index].URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall">${arry[index].name}</p>
                    <p class="small small2M">${arry[index].role}</p>
                </div>
                <button class="btn-edit btnEDITsmall editJS">X
                </button>
            </div>
   `
            // arry.splice(index, 1)
                      arry.splice(index, 1)
    parent_list.innerHTML = "";
    modal_List.innerHTML = `<span id="close3" class="close">&times;</span></br>`;
    let closes = document.querySelector("#close3");
    closes.addEventListener('click', function () {
            modalList.style.display = "none";
            blurr3.style.display = "none";
        })
    arry.forEach(ele => {
        parent_list.innerHTML += `
        <div  class="li1">
                <img onclick="modall(${conteur++})" class="image imgSmalll" src="${ele.URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${ele.name}</p>
                    <p class="small small2M">${ele.role}</p>
                </div>
                <button class="btn-edit btnEditsmall editJS">edit
                </button>
            </div>`;
            modal_List.innerHTML += `   

        <div  class="li1">
                <img  class="image imgSmalll" src="${ele.URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${ele.name}</p>
                    <p class="small small2M">${ele.role}</p>
                </div>
                <button onclick="AddWorkerr(${id++})" class="btn-edit btnEditsmall editJS">Add
                </button>
            </div>
   `
    })
           
        } else {
            alert('imppossible dans cette zone ')
        }
    }
    // salleReceptionist();

      function salleTechnician() {
        if (arry[index].role === "Technician") {
            div3.innerHTML += `
        <div  class="li1 lismall">
                <img  class="image imgSmall" src="${arry[index].URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall">${arry[index].name}</p>
                    <p class="small small2M">${arry[index].role}</p>
                </div>
                <button class="btn-edit btnEDITsmall editJS">X
                </button>
            </div>
   `
            // arry.splice(index, 1)
                      arry.splice(index, 1)
    parent_list.innerHTML = "";
    modal_List.innerHTML = `<span id="close3" class="close">&times;</span></br>`;
    let closes = document.querySelector("#close3");
    closes.addEventListener('click', function () {
            modalList.style.display = "none";
            blurr3.style.display = "none";
        })
    arry.forEach(ele => {
        parent_list.innerHTML += `
        <div  class="li1">
                <img onclick="modall(${conteur++})" class="image imgSmalll" src="${ele.URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${ele.name}</p>
                    <p class="small small2M">${ele.role}</p>
                </div>
                <button class="btn-edit btnEditsmall editJS">edit
                </button>
            </div>`;
            modal_List.innerHTML += `   

        <div  class="li1">
                <img  class="image imgSmalll" src="${ele.URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${ele.name}</p>
                    <p class="small small2M">${ele.role}</p>
                </div>
                <button onclick="AddWorkerr(${id++})" class="btn-edit btnEditsmall editJS">Add
                </button>
            </div>
   `
    })
           
        } else {
            alert('imppossible dans cette zone ')
        }
    }
    // salleTechnician();
        function salleSecurity() {
        if (arry[index].role === "Security") {
            div4.innerHTML += `
        <div  class="li1 lismall">
                <img  class="image imgSmall" src="${arry[index].URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall">${arry[index].name}</p>
                    <p class="small small2M">${arry[index].role}</p>
                </div>
                <button class="btn-edit btnEDITsmall editJS">X
                </button>
            </div>
   `
            // arry.splice(index, 1)
                      arry.splice(index, 1)
    parent_list.innerHTML = "";
    modal_List.innerHTML = `<span id="close3" class="close">&times;</span></br>`;
    let closes = document.querySelector("#close3");
    closes.addEventListener('click', function () {
            modalList.style.display = "none";
            blurr3.style.display = "none";
        })
    arry.forEach(ele => {
        parent_list.innerHTML += `
        <div  class="li1">
                <img onclick="modall(${conteur++})" class="image imgSmalll" src="${ele.URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${ele.name}</p>
                    <p class="small small2M">${ele.role}</p>
                </div>
                <button class="btn-edit btnEditsmall editJS">edit
                </button>
            </div>`;
            modal_List.innerHTML += `   

        <div  class="li1">
                <img  class="image imgSmalll" src="${ele.URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${ele.name}</p>
                    <p class="small small2M">${ele.role}</p>
                </div>
                <button onclick="AddWorkerr(${id++})" class="btn-edit btnEditsmall editJS">Add
                </button>
            </div>
   `
    })
         
        } else {
            alert('imppossible dans cette zone ')
        }
    }
    // salleSecurity();
    // salleTechnician();
          function salleCleaning() {
        if (arry[index].role === "Cleaning") {
            div6.innerHTML += `
        <div  class="li1 lismall">
                <img  class="image imgSmall" src="${arry[index].URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall">${arry[index].name}</p>
                    <p class="small small2M">${arry[index].role}</p>
                </div>
                <button class="btn-edit btnEDITsmall editJS">X
                </button>
            </div>
   `
            // arry.splice(index, 1)
                      arry.splice(index, 1)
    parent_list.innerHTML = "";
    modal_List.innerHTML = `<span id="close3" class="close">&times;</span></br>`;
    let closes = document.querySelector("#close3");
    closes.addEventListener('click', function () {
            modalList.style.display = "none";
            blurr3.style.display = "none";
        })
    arry.forEach(ele => {
        parent_list.innerHTML += `
        <div  class="li1">
                <img onclick="modall(${conteur++})" class="image imgSmalll" src="${ele.URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${ele.name}</p>
                    <p class="small small2M">${ele.role}</p>
                </div>
                <button class="btn-edit btnEditsmall editJS">edit
                </button>
            </div>`;
            modal_List.innerHTML += `   

        <div  class="li1">
                <img  class="image imgSmalll" src="${ele.URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${ele.name}</p>
                    <p class="small small2M">${ele.role}</p>
                </div>
                <button onclick="AddWorkerr(${id++})" class="btn-edit btnEditsmall editJS">Add
                </button>
            </div>
   `
    })
           
        } else {
            alert('imppossible dans cette zone ')
        }
    }
    //    salleCleaning();
    switch(arry[index].role){
    case "Manager":salleManager(); break;
    case "Receptionist":salleReceptionist(); break;
    case "Technician":salleTechnician(); break;
    case "Security":salleSecurity(); break;
    case "Cleaning":salleCleaning(); break;
    default:alert("aucun worker!!"); break;
}
}
// AddWorkerr();
// plus exeprience
const plusierExperience = document.querySelector('#plusier-experience')
const addExperience = document.querySelector('#experience');
addExperience.style = `
 border:solid 2px ;
 border-radius:10px;
 padding:5px
`
addExperience.addEventListener('click', function () {
    plusierExperience.style.display = "block"
    PlusExpe.style.display = "block"
    plusierExperience.style = `border:solid 2px green;padding:10px;border-radius:10px`
})
addExperience.addEventListener('dblclick', function () {
    plusierExperience.style.display = "none";
    PlusExpe.style.display = "none"
})