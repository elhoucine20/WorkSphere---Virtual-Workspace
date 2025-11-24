let arry = [];
let Data = {};
let currentZon = null;
let id = 0;

// regex
const regexname = /^[a-zA-ZÀ-ÿ0-9\s'.,-]{2,24}$/;
const regeximageurl = /^(https?:\/\/.*)$/i;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexPhone = /^[\d\s+()-]{10,}$/;


//   les inputs
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

// les div (les salles)
const div1 = document.querySelector('#ul1');
const div2 = document.querySelector('#ul2');
const div3 = document.querySelector('#ul3');
const div4 = document.querySelector('#ul4');
const div5 = document.querySelector('#ul5');
const div6 = document.querySelector('#ul6');

// les btns +(6)
const plus = document.querySelectorAll('.btnPlus');

// varaibles du modal form
const modal = document.querySelector('#modal');
const close = document.querySelector('#close')
const AddWorker = document.querySelector('#AddWorker');
const blurr = document.querySelector('#bgMOdal');

// modal du form
AddWorker.addEventListener('click', function () {
    modal.style.display = "block";
    blurr.style.display = "block";
})
// display non du form
close.addEventListener('click', function () {
    modal.style.display = "none";
    blurr.style.display = "none";
})

// plus exeprience
const PlusExpe = document.querySelector('#PlusExpe')
const plusierExperience = document.querySelector('#plusier-experience')
const addExperience = document.querySelector('#experience');
addExperience.addEventListener('click', function () {
    plusierExperience.style.display = "block"
    PlusExpe.style.display = "block"
    plusierExperience.style = `border:solid 2px; padding:10px; border-radius:10px`
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

// affichage dans navbar
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //    validation
    if (!regexname.test(InputName.value)) {
        return alert('saisir name')
    }
    if (!regeximageurl.test(url.value)) {
        return alert('saisir URL');
    }
    if (!regexEmail.test(email.value)) {
    return alert('saisir email');
    }

    // objet stocké data
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
        zone:"main"
    }
    // pushé data to array
    arry.push(Data);
    //  affichage sur navbar et modal
    refreshLists();
    form.reset();
});

// modal des information
let aside = document.querySelector('#aside');
let div = document.createElement('div');
aside.append(div);
function modall(workerId) {
    // find l'elemnt by id 
    const worker = arry.find(w => w.id === workerId);
    
    // affichage des informations
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
    // modal des informations
    const modal2 = document.querySelector('#modal2');
    const close2 = document.querySelector('#close2')
    modal2.style.display = "block";
    close2.addEventListener('click', function () {
        modal2.style.display = "none";
    })
}

//  finction affichage sur navbar et modal-list
function refreshLists() {
    parent_list.innerHTML = "";
    modal_List.innerHTML = ` <span id="close3" class="close">&times;</span><br>`;

    arry.forEach(ele => {
        if(ele.zone==="main"){
              // navbar list
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

        // modal list
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
        }

    });
}

// btn plus click
plus.forEach(ele => {
    ele.addEventListener('click', function () {
        // rocherché sur la zone by data-button
        currentZon = ele.dataset.button;

        // affichage du modal
        affich_modal();
    });
});

//  affichage manager
function maanager(workerId) {
    // search sur l'elemnte dand arry
    const worker = arry.find(w => w.id === workerId);
    // pour l'element n'est pas  disponible la fonction va arrêté
    if (!worker) return;

    worker.zone="Manager";
    // pour find l'elemnt on va affiche sur la zone 
    div1.innerHTML += creatWorkerHTML(worker);
    refreshLists(); 
}

//  reciptionist
function Receptionistt(workerId) {
    const worker = arry.find(w => w.id === workerId);
    if (!worker) return;

    worker.zone="Receptionist";
    div2.innerHTML += creatWorkerHTML(worker);
    refreshLists();
}

//  technicien
function Techniciann(workerId) {
    const worker = arry.find(w => w.id === workerId);
    if (!worker) return;

    worker.zone="Technician";
    div3.innerHTML += creatWorkerHTML(worker);
    refreshLists();
}

//  security
function Securityy(workerId) {
    const worker = arry.find(w => w.id === workerId);
    if (!worker) return;

    worker.zone="Security";
    div4.innerHTML += creatWorkerHTML(worker);
    refreshLists();
}

// servers
function Serverss(workerId){
    const worker =arry.find(w=>w.id===workerId);
    worker.zone = "Servers";
    div5.innerHTML += creatWorkerHTML(worker);
    refreshLists();

}
//  cleaning
function Cleaningg(workerId) {
    const worker = arry.find(w => w.id === workerId);
    if (!worker) return;

    worker.zone="Cleaning";
    div6.innerHTML += creatWorkerHTML(worker);
    refreshLists();
}

// add worker btn Add
function AddWorkerr(workerId) {
    const worker = arry.find(w => w.id === workerId);
    // if find
    // console.log(currentZon);
    const role = worker.role;
    if(currentZon === "Servers"){
          if (role === "Technician" || role==="Manager"|| role==="Cleaning") {
            Serverss(workerId);
             affich_modal();
             return;
          }else{
            alert('impossible dans cette zone');
            return;
          }
    } 
    
    if (role === currentZon || role==="Manager") {
        // verification by if-else
        if (currentZon === "Manager") {
            maanager(workerId);
        }
        else if (currentZon === "Receptionist") {
            Receptionistt(workerId);
        }
        else if (currentZon === "Technician") {
            Techniciann(workerId);
        }
        else if (currentZon === "Security") {
            Securityy(workerId);
        }
        else if (currentZon === "Cleaning") {
            Cleaningg(workerId);
        }
    } else {
        alert('impossible dans cette zone')
        return;
    }
    affich_modal();
}

// function create worker
function creatWorkerHTML(worker) {
    return `
        <div data-id="${worker.id}" class="li1 lismall">
            <img class="image imgSmall" src="${worker.URL}" alt="avatar">
            <div class="div-name">
                <p class="name nameSmall">${worker.name}</p>
                <p class="small small2M">${worker.role}</p>
            </div>
            <button onclick="returnToMain(${worker.id})" class="btn-edit btnEDITsmall editJS">X</button>
        </div>
    `;
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

// remove from zone 
function returnToMain(workerId){
   const worker=arry.find(w=>w.id===workerId);
   if(!worker){
    alert('worker not found');
    return;
   }
   worker.zone="main";
   const workerRemove=document.querySelector(`[data-id="${workerId}"]`);
   if(workerRemove){
     workerRemove.remove();
   }
   refreshLists();

   const modalList =document.querySelector('#modal-List');
   const blurr3 =document.querySelector('#bgMOdal3');
   if(modalList){
    modalList.style.display="none";
   }
     if(blurr3){
    blurr3.style.display="none";
   }
}
