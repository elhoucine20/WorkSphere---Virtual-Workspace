let arry = [];
let Data = {};
let conteur = 0;
// 
const modal = document.querySelector('#modal');
const close = document.querySelector('#close')
const AddWorker = document.querySelector('#AddWorker');
// 
// regex
const regexname = /^[a-zA-ZÀ-ÿ0-9\s'.,-]{2,15}$/;
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

// modal block
const blurr=document.querySelector('#bgMOdal');
AddWorker.addEventListener('click', function () {
    modal.style.display = "block";
    blurr.style.display="block";
})
close.addEventListener('click', function () {
    modal.style.display = "none";
    blurr.style.display="none";

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
        phonee:phone.value,
        URL: url.value,
        Company: company.value,
        ExSTART: experienceStartDate.value,
        ExEND: experienceEndDate.value
    }
    arry.push(Data);
    console.log(Data);
    
   
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


   modal_List.innerHTML += `   
  
        <div  class="li1">
                <img  class="image imgSmalll" src="${url.value}" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${InputName.value}</p>
                    <p class="small small2M">${select.value}</p>
                </div>
                <button class="btn-edit btnEditsmall editJS">edit
                </button>
            </div>
   `

    form.reset();
});

// btn plus modal affiche tout
const blurr3=document.querySelector('#bgMOdal3');
const plus=document.querySelectorAll('.btnPlus');
plus.forEach(ele=>{
ele.addEventListener('click',function(){
        const close3 = document.querySelector('#close3')
    modalList.style.display = "block";
    blurr3.style.display="block";

    close3.addEventListener('click', function () {
        modalList.style.display = "none";
    blurr3.style.display="none";
    })
})
})

// modal des information
let header = document.querySelector('#header');
let div=document.createElement('div');
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
    plusierExperience.style = `border:solid 2px green;padding:10px;border-radius:10px`

})
addExperience.addEventListener('dblclick', function () {
    plusierExperience.style.display = "none"
})

    // <div id="modal3">
    //         <div id="modal-content3">
    //             <span id="close3" class="close3">&times;</span>
    //             <div class="informations">
    //                 <p>NAME : <span>${arry[index].name}</span></p>
    //                 <p>ROLE : <span>${arry[index].role}</span></p>
    //                 <p>PHONE : <span>${arry[index].phonee}</span></p>
    //                 <p>EMAIL : <span>${arry[index].emaill}</span></p>
    //                 <p>URL : <span>${arry[index].URL}</span></p>
    //             </div>
    //         </div>
    //      </div>