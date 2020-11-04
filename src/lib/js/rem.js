(function() {
    function resize() {
        const designWidth = 1920
        const html = document.documentElement;
        const windowWidth = window.innerWidth;
        html.style.fontSize = 100 / designWidth * windowWidth + 'px';
    }
    resize();
    window.addEventListener('onorientationchang' in window ? 'onorientationchang' : 'resize', resize);
    window.addEventListener('DOMContentLoaded', resize);
})(document);