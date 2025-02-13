
const navdialog=document.getElementById("extra");
function handlemenu(){

    navdialog.classList.toggle('hidden');

}

function setup(elemt, ltr, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting; // Corrected typo here
        if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    }

    const intersectionObserver = new IntersectionObserver(intersectionCallback);
    intersectionObserver.observe(elemt);

    function scrollHandler() {
        // Calculate translation distance
        const tranx = (window.innerHeight - elemt.getBoundingClientRect().top) * speed;

        // Determine direction based on 'ltr' argument
        if (ltr) {
            elemt.style.transform = `translateX(${tranx}px)`; // Move right
        } else {
            elemt.style.transform = `translateX(${-tranx}px)`; // Move left
        }
    }
}

// Select elements
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");

// Set up the elements with appropriate direction and speed
setup(line1, true, 0.15); // Line 1 moves to the right
setup(line2, false, 0.15); // Line 2 moves to the left
setup(line3, true, 0.15); // Line 3 moves to the right
setup(line4, true, 0.8); // Line 3 moves to the right


const dtelemnt = document.querySelectorAll('dt');

dtelemnt.forEach(elemt => {
    elemt.addEventListener('click', () => {
        const ddid = elemt.getAttribute('aria-controls');
        const ddelement = document.getElementById(ddid);
        const ddarrow = elemt.querySelector('i'); // Assuming there's only one icon

        ddelement.classList.toggle('hidden');  // Toggle visibility of dd
        ddarrow.classList.toggle('rotate-180');  // Rotate the arrow
    });
});
