const toggle = document.querySelector('.toggle');
const body = document.getElementById('my-body');
let isToggleOn = false;

toggle.addEventListener('click', () => {
    if (isToggleOn) {
        body.style.fontSize = '16px';
        body.style.backgroundColor = '#fff';
        isToggleOn = false;
    } else {
        body.style.fontSize = '90px';
        body.style.backgroundColor = '#000';
        isToggleOn = true;
    }
});
