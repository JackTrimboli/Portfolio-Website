const hamburger = document.getElementById('hamburger')
const navUL = document.getElementById('nav-ul')
const boxes = document.querySelectorAll('.projects-box')


hamburger.addEventListener('click', () =>{
    navUL.classList.toggle('show')
});


window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}



