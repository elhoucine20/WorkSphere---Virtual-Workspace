let arry = [];
let currentZon = null;
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
// 
const plus = document.querySelectorAll('.btnPlus');
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
        id: id++,
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
    refreshLists();
    form.reset();
});
// modal des information
let header = document.querySelector('#header');
let div = document.createElement('div');
header.append(div);
function modall(workerId) {
    const worker = arry.find(w => w.id === workerId);
    if (!worker) return;

    div.innerHTML = `
        <div id="modal2">
            <div id="modal-content">
                <span id="close2" class="close">&times;</span>
                <div class="informations">
                    <p>NAME : <span>${worker.name}</span></p>
                    <p>ROLE : <span>${worker.role}</span></p>
                    <p>PHONE : <span>${worker.phonee}</span></p>
                    <p>EMAIL : <span>${worker.emaill}</span></p>
                    <p>URL : <span>${worker.URL}</span></p>
                    <h2>Experience</h2>
                    <p>Company : <span>${worker.Company}</span></p>
                    <p>Date Start : <span>${worker.ExSTART}</span></p>
                    <p>Date End : <span>${worker.ExEND}</span></p>
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

//  finction de nouvuax affichage 
function refreshLists() {
    parent_list.innerHTML = "";
    modal_List.innerHTML = ` <span id="close3" class="close">&times;</span><br>`;


    arry.forEach((ele, i) => {
        // aside list
        parent_list.innerHTML += `
        <div  class="li1">
                <img onclick="modall(${ele.id})" class="image imgSmalll" src="${ele.URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${ele.name}</p>
                    <p class="small small2M">${ele.role}</p>
                </div>
                <button class="btn-edit btnEditsmall editJS">edit
                </button>
            </div>`;

        modal_List.innerHTML += `
            <div class="li1">
                <img class="image imgSmalll" src="${ele.URL}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${ele.name}</p>
                    <p class="small small2M">${ele.role}</p>
                </div>
                <button onclick="AddWorkerr(${ele.id})" class="btn-edit btnEditsmall editJS">Add</button>
            </div>
        `


    });
}


// btn plus click
plus.forEach(ele => {
    ele.addEventListener('click', function () {
        currentZon = ele.dataset.button
        // console.log("currentZon", currentZon)

 affich_modal() ;
        });
    });
// });

const zonTarget = {
    Manager: maanager,
    Receptionist: Receptionistt,
    Technician: Techniciann,
    Security: Securityy,
    Cleaning: Cleaningg
};

//  affichage manager
function maanager(workerId) {
    const worker = arry.find(w => w.id === workerId);
    if (!worker) return;
    div1.innerHTML += creatWorkerHTML(worker);
    removeFromMain(workerId);
 affich_modal() ;

    
}

//  reciptionist
function Receptionistt(workerId) {
    const worker = arry.find(w => w.id === workerId);
    if (!worker) return;
    div2.innerHTML += creatWorkerHTML(worker);
    removeFromMain(workerId);
 affich_modal() ;

}

//  technicien
function Techniciann(workerId) {
     const worker = arry.find(w => w.id === workerId);
    if (!worker) return;
    div3.innerHTML += creatWorkerHTML(worker);
    removeFromMain(workerId);
 affich_modal() ;

}
//  security
function Securityy(workerId) {
        const worker = arry.find(w => w.id === workerId);
    if (!worker) return;
    div4.innerHTML += creatWorkerHTML(worker);
    removeFromMain(workerId);
 affich_modal() ;

}

//  scleaning
function Cleaningg(workerId) {
     const worker = arry.find(w => w.id === workerId);
    if (!worker) return;
    div6.innerHTML += creatWorkerHTML(worker);
    removeFromMain(workerId);
 affich_modal() ;

}

function AddWorkerr(workerId) {
    const worker=arry.find(w=>w.id===workerId);
    if(!worker) {
        alert('worker not find');
        return;
    }

    const role = worker.role;
    if (role === currentZon) {
        // maanager(index);
        zonTarget[currentZon](workerId);

    } else {
        alert('impossible dans cette zone')
        return;
    }
 affich_modal() ;

}


function creatWorkerHTML(worker) {
    return `
        <div class="li1 lismall">
            <img class="image imgSmall" src="${worker.URL}" alt="avatar">
            <div class="div-name">
                <p class="name nameSmall">${worker.name}</p>
                <p class="small small2M">${worker.role}</p>
            </div>
            <button  class="btn-edit btnEDITsmall editJS">X</button>
        </div>
    `;
 affich_modal() ;

}

function removeFromMain(workerId) {
    const index=arry.findIndex(w=>w.id===workerId);
    if(index!==-1){
        arry.splice(index, 1);
    refreshLists();
    }
    affich_modal();
}




function affich_modal() {
    const blurr3 = document.querySelector('#bgMOdal3');
    const close3 = document.querySelector('#close3')
    modalList.style.display = "block";
    blurr3.style.display = "block";

    close3.addEventListener('click', function () {
        modalList.style.display = "none";
        blurr3.style.display = "none";
    })
}


