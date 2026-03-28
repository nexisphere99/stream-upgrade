/* ============================================================
   STREAM UPGRADE: ELLIE.EXE — Touch Ripple Effect
   ============================================================ */

(function () {

    /* Touch ripple — spawns at each tap point on mobile */
    document.addEventListener('touchstart', function (e) {
        var touches = e.changedTouches;
        for (var i = 0; i < touches.length; i++) {
            spawnRipple(touches[i].clientX, touches[i].clientY);
        }
    }, { passive: true });

    function spawnRipple(x, y) {
        var el = document.createElement('div');
        el.className = 'touch-ripple';
        el.style.left = (x - 28) + 'px';
        el.style.top  = (y - 28) + 'px';
        document.body.appendChild(el);
        setTimeout(function () {
            if (el.parentNode) el.parentNode.removeChild(el);
        }, 600);
    }

})();
