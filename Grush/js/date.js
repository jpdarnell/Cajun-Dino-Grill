let today = new Date();
let year = today.getFullYear();
let est = new Date('Apr 16, 2016 15:45:55');
let difference = today.getTime() - est.getTime();
difference = (difference / 31556900000);

const el = document.querySelector('footer');
el.innerHTML = '<p>Grush\'s Cajun Dino Grill &copy;' + ' ' + year + ' | Serving Asheville for ' + Math.floor(difference) + ' years</p>';