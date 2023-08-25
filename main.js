// toggle-btn 

const toggleBnt = document.querySelector('.toggle-btn');
const collapse = () => {
    document.querySelector('.navbar').classList.add('fade');
    toggleBnt.innerHTML = `<h6 class='btn-close'>X</h6>`;
    Close = "dflksdjkfjsdljkallk";
}
toggleBnt.addEventListener('click', collapse);

const closeBtn = document.querySelector(".btn.close");

///////////////////


const links = document.getElementsByClassName('link');

links.foreach(element=>{
    element.addEventListener('click' , ()=>{
           alert(element);
    })
})



