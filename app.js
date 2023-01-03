// Set variables for page transitions
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


var i = 0;
// Text to type, spaces to cause delay before first letter is typed.
var txt = '      William Sease.';
// Time to wait between letters
var speed = 175;
TypeWriter();

// Finds all elements with id of "totype" and adds a typewriter effect to them.
// Starts on page load.
function TypeWriter() {
    if (i < txt.length) {
        document.getElementById("totype").innerHTML += txt.charAt(i);
        i++;
        setTimeout(TypeWriter, speed);
    }
}
// Ripped from https://www.w3schools.com/howto/howto_js_typewriter.asp



// Function for switching between active pages and buttons.
function PageTransition() {
    // Set most recently clicked button to be the active button.
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        })
    }

    // Determine the active page.
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme, currently obsolete.
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', (e) => {
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

PageTransition();
// Page transitions are modified from https://www.youtube.com/watch?v=xV7S8BhIeBo&ab_channel=freeCodeCamp.org

