const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
//const allSections = document.querySelector('.main-content:not(.btn-con)');


var i = 0;
var txt = '      William Sease.'; /* The text */
var speed = 175; /* The speed/duration of the effect in milliseconds */
TypeWriter();

function TypeWriter() {
    if (i < txt.length) {
        document.getElementById("totype").innerHTML += txt.charAt(i);
        i++;
        setTimeout(TypeWriter, speed);
    }
}
// Ripped from https://www.w3schools.com/howto/howto_js_typewriter.asp




function PageTransition() {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }

    //Sections active class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //Remove selected from the other btns
            // sectBtns.forEach((btn) => {
            //     btn.classList.remove('active')
            // })
            // const btns = sectBtns[0].children;
            // for (let btn of btns){
            //     btn.classList.remove('active')
            // }
            // e.target.classList.add('active')

            //Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', (e) => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })

}

PageTransition();
// Ripped from https://www.youtube.com/watch?v=xV7S8BhIeBo&ab_channel=freeCodeCamp.org

