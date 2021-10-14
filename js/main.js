alert("CLICK THE MOON");
function toggleScene() {
    let button = document.querySelector('.scene');
    button.classList.toggle('active');
}

function stars() {
    let count = 500, i = 1;
    while(i < count){
        let scene = document.querySelector('.scene')
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let size = Math.random() * 4;
        let duration = Math.random() * 10;


        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDuration = 5 + duration + 's'
        star.style.animationDelay = duration + 's'

        scene.appendChild(star);
        i++;
    }
}

stars();