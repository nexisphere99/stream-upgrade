/* ---- FAVICON ---- */
(function () {
    var link = document.createElement('link');
    link.rel  = 'icon';
    link.type = 'image/svg+xml';
    link.href = 'images/regenaform/favicon.png';
    document.head.appendChild(link);
})();


$(document).one(':storyready', function () {

    // Only skip if splash has already been shown
    if (State.variables.firstTimeSplash === false) return;

    $('body').append(`
        <div id="stream-splash">

            <!-- STEP 1: TITLE -->
            <div class="stream-splash-content step1 fade-in-scale">
                <h1>Stream Upgrade</h1>
                <h2>ellie.exe</h2>
                <p class="stream-splash-tagline">A game about desperation, transformation, and the price of being seen.</p>
                <button id="stream-splash-next">Next →</button>
            </div>

            <!-- STEP 2: CONTENT WARNING -->
            <div class="stream-splash-content step2">
                <img class="stream-splash-img"
                     src="https://placehold.co/480x220/1e1e2e/e84393?text=ellie.exe"
                     alt="Stream Upgrade">

                <h2 class="stream-warning-title">⚠️ Content Warning</h2>

                <button id="stream-splash-continue">I am 18+ and understand - Continue</button>
                <br><br>
                <div class="stream-warning">
                    <p>This is an <strong>18+ adult game</strong>. By continuing you confirm you are of legal age in your jurisdiction.</p>

                    <p>This game contains:</p>
                    <ul class="stream-warning-list">
                        <li>Gender transformation / feminization themes</li>
                        <li>Explicit sexual content</li>
                        <li>Themes of body image, dysphoria, and identity</li>
                        <li>Financial desperation and coercive circumstances</li>
                        <li>Streaming culture and parasocial dynamics</li>
                        <li>Strong language</li>
                    </ul>

                    <p class="stream-warning-note">All characters depicted are fictional and 18 or older. Leave now if you are under 18 or uncomfortable with any of the above themes.</p>
                </div>

                <button id="stream-splash-continue">I am 18+ and understand - Continue</button>
            </div>

        </div>
    `);

    // Step 1 → Step 2
    $(document).on('click', '#stream-splash-next', function () {
        $('#stream-splash .step1').addClass('fade-out-scale');
        setTimeout(() => {
            $('#stream-splash .step1').hide();
            $('#stream-splash .step2').show().addClass('fade-in-scale');
        }, 600);
    });

    // Step 2 → Close splash and begin story
    $(document).on('click', '#stream-splash-continue', function () {
        $('#stream-splash .step2').addClass('fade-out-scale');
        setTimeout(() => {
            $('#stream-splash').fadeOut(400, function () {
                $(this).remove();
            });
        }, 600);

        State.variables.firstTimeSplash = false;
    });
});
