window.addEventListener('scroll', function () {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    console.log('Scroll Y:' + scrollY)

    var element1 = document.getElementById('1');
    var element2 = document.getElementById('2');
    var element3 = document.getElementById('3');

    if (scrollY < 760) {
        element1.classList.remove('active');
        element2.classList.remove('active');
        element3.classList.remove('active');
    };
    if (scrollY >= 760) {
        element1.classList.add('active');
        element2.classList.remove('active');
        element3.classList.remove('active');
    };
    if (scrollY >= 1520) {
        element1.classList.remove('active');
        element2.classList.add('active');
        element3.classList.remove('active');
    };
    if (scrollY >= 2280) {
        element1.classList.remove('active');
        element2.classList.remove('active');
        element3.classList.add('active');
    };
});

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});