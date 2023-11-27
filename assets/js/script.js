document.addEventListener('DOMContentLoaded', function () {
    let header = document.getElementById('mainHeader');
     
     let puls = document.querySelector('.startedpuls')

    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) { 
            header.style.backgroundColor = 'white'; 
            puls.style.backgroundColor ='green'
        } else {
            header.style.backgroundColor = '#FFC017';
            puls.style.backgroundColor ='black'
        }
    });
});
