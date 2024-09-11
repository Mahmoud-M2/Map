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

// دالة لإظهار الإشعارات
function showNotification(event) {
    const notification = document.getElementById('notification');
    const triangle = document.querySelector('.triangle');
    const profileContent = document.querySelector('.profile_content');
    
    // Toggle notification visibility
    if (notification.style.display === 'block') {
        notification.style.display = 'none';
        triangle.style.display = 'none';
    } else {
        notification.style.display = 'block';
        triangle.style.display = 'block';
        
        // Ensure profile content is hidden when notification is shown
        if (profileContent) {
            profileContent.style.display = 'none';
        }
    }
    event.stopPropagation(); // Prevent the click from closing the notification
}

// دالة للتبديل بين إظهار وإخفاء العنصر profile_content
function toggleProfileContent(event) {
    const profileContent = document.querySelector('.profile_content');
    const notification = document.getElementById('notification');

    // Toggle profile content visibility
    if (profileContent.style.display === 'none' || profileContent.style.display === '') {
        profileContent.style.display = 'block';
        
        // Ensure notification is hidden when profile content is shown
        if (notification) {
            notification.style.display = 'none';
            document.querySelector('.triangle').style.display = 'none';
        }
    } else {
        profileContent.style.display = 'none';
    }

    event.stopPropagation(); // Prevent the click from closing the profile content
}

// إغلاق العناصر عند النقر خارجًا
document.addEventListener('click', function(event) {
    const profileContent = document.querySelector('.profile_content');
    const openPopup = document.getElementById('open-popup');
    const notification = document.getElementById('notification');
    const triangle = document.querySelector('.triangle');
    const target = event.target;

    // إغلاق profile_content إذا كان النقر خارج العنصر
    if (profileContent && openPopup && !openPopup.contains(target) && !profileContent.contains(target)) {
        profileContent.style.display = 'none';
    }

    // إغلاق الإشعارات إذا كان النقر خارج العنصر
    if (notification && triangle && !notification.contains(target) && !triangle.contains(target)) {
        notification.style.display = 'none';
        triangle.style.display = 'none';
    }
});



// PopUp Camps
document.querySelectorAll('.camp-image').forEach(image => {
    image.addEventListener('click', function() {
        // Hide all popups
        document.querySelectorAll('.popup').forEach(popup => {
            popup.style.display = 'none';
        });
        
        // Show the popup related to the clicked image
        const popupId = this.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.style.display = 'block';
    });
});

// Close the popup when clicking outside of it
document.addEventListener('click', function(event) {
    if (!event.target.classList.contains('camp-image') && !event.target.classList.contains('popup')) {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.style.display = 'none';
        });
    } });
