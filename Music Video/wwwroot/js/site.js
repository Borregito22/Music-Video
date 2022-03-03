// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
function animate({ timing, draw, duration }) {
    const start = performance.now();
    requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        let progress = timing(timeFraction)
        draw(progress); // draw it
        if (timeFraction < 1) requestAnimationFrame(animate);
    });
}

window.run = function () {
    animate({
        duration: 2000,
        timing: function (t) { return t },
        draw: pct => {
            const air = document.querySelector('.air');
            const ball = document.querySelector('.ball');
            ball.style.left = pct * (air.offsetWidth - 30) + 'px';
        }
    });
}
