/*=============== Language Ar || En ===============*/
function changeLanguage(lang, flagSrc, langText) {
    document.getElementById('current-language').innerHTML = `<img src="${flagSrc}" class="flag" alt="${langText} Flag"> ${lang}`;
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


//Notification
function showNotification(event) {
    const notification = document.getElementById('notification');
    const triangle = document.querySelector('.triangle');
    if (notification.style.display === 'block') {
        notification.style.display = 'none';
        triangle.style.display = 'none';
    } else {
        notification.style.display = 'block';
        triangle.style.display = 'block';
    }
    event.stopPropagation(); // Prevent the click from closing the notification
}

document.addEventListener('click', function(event) {
    const notification = document.getElementById('notification');
    const triangle = document.querySelector('.triangle');
    const target = event.target;

    // Close the notification if the click was outside of it
    if (!notification.contains(target) && !triangle.contains(target) && notification.style.display === 'block') {
        notification.style.display = 'none';
        triangle.style.display = 'none';
    }
});

