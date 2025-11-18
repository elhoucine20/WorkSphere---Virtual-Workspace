const modal = document.querySelector('#modal');
const close = document.querySelector('#close')
const AddWorker = document.querySelector('#AddWorker');

AddWorker.addEventListener('click', function () {
    modal.style.display = "block";
})
close.addEventListener('click', function () {
    modal.style.display = "none";

})

const Valide_Worker = document.querySelector('#Valide_Worker');
const form = document.querySelector('#form');
const parent_list = document.querySelector('#parent_list');
const InputName = document.querySelector('#name');
const select = document.querySelector('#role');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
let arry = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();
    //    validation
    let conteur=0;
    if (InputName.value == " " || InputName.value == "") {
        alert('saisir name')
    } else {
                // conteur++;
        parent_list.innerHTML += `
        <div onclick="modall(${++conteur})" class="li1">
                <img class="image imgSmalll" src="" alt="avatar">
                <div class="div-name">
                    <p class="name nameSmall2M">${InputName.value}</p>
                    <p class="small small2M">${select.value}</p>
                </div>
                <button class="btn-edit btnEditsmall editJS">edit</button>
            </div>
   `
    }
    let Data = {
        name: InputName.value,
        role: select.value,
        emaill:email.value,
        phonee:phone.value
    }
    arry.push(Data);
    console.log(Data);
    form.reset();
})
let card = document.querySelector('.btn-edit');
const header = document.querySelector('#header');
function modall(index) {
    //   const indexx=arry[index-1];
    console.log("welcom");
     console.log("1");
    console.log(arry[index-1]);
      
    //  arry.forEach(element => {
          header.innerHTML += `
        <div id="modal2">
            <div id="modal-content">
                <span id="close2" class="close">&times;</span>
                <div>
                    <p>name:${arry[index-1].name}</p>
                    <p>role:${arry[index-1].role}</p>
                    <p>phone:${arry[index-1].phonee}</p>
                    <p>email:${arry[index-1].emaill}</p>
                </div>
            </div>
         </div>
    `
  
    //  });
        const modal2 = document.querySelector('#modal2');
    const close2 = document.querySelector('#close2')
    modal2.style.display="block";
    close2.addEventListener('click',function(){
    modal2.style.display="none";

    })
}

// plus exeprience
const addExperience=document.querySelector('#Add-experience');
addExperience.addEventListener('click',function(){
     
})
