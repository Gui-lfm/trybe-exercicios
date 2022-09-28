const header = document.getElementById('header-container');
header.style.backgroundColor = '#00B069';

const body = document.getElementById('container');
body.style.backgroundColor = '#F3F3F3';

const sectionEmergency = document.querySelector('.emergency-tasks');
sectionEmergency.style.backgroundColor = '#FF9F84';

const titleEmergency = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < titleEmergency.length; i += 1) {
    titleEmergency[i].style.backgroundColor = '#A500F3';
}

const sectionNonEmergency = document.querySelector('.no-emergency-tasks');
sectionNonEmergency.style.backgroundColor = '#F9DB5E';

const titleNonEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < titleEmergency.length; i += 1) {
    titleNonEmergency[i].style.backgroundColor = '#232525';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#003533';