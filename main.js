const firstOl = document.querySelectorAll('ol li');

for (let i = 0; i < firstOl.length; i++) {
    firstOl[i] = firstOl[i].addEventListener('click', strikeThrough);
}

function strikeThrough() {
    event.target.style.textDecoration = 'line-through';
}

const firstUl = document.querySelectorAll('ul li');

for (let i = 0; i < firstUl.length; i++) {
    firstUl[i] = firstUl[i].addEventListener('click', goAway);
}

function goAway(event) {
    event.target.style.opacity = '0';
}

const images = document.querySelectorAll('img');

for (let i = 0; i < images.length; i++) {
    images[i] = images[i].addEventListener('click', collapseImg);
}

function collapseImg(event) {
    event.target.style.width = '0px';
}

function burnItAll() {
    for (let i = 0; i < firstOl.length; i++) {
        firstOl[i] = firstOl[i].style.textDecoration = 'line-through';
    }
    for (let i = 0; i < firstUl.length; i++) {
        firstUl[i] = firstUl[i].style.opacity = '0';
    }
    for (let i = 0; i < images.length; i++) {
        images[i] = images[i].style.width = '0px';
    }
}

document.querySelector('#toggle').addEventListener('click', burnItAll)
