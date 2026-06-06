$(document).one(':storyready', function () {

    if ($('#stream-left-bar').length) return;

    $('body').append(`

        <!-- LEFT SIDEBAR -->
        <aside id="stream-left-bar">

            <div class="stream-left-brand">
                <div class="stream-live-badge">
                    <span class="stream-live-dot"></span>
                    V0.0.4
                </div>
                <h2 class="stream-game-title">Stream Upgrade</h2>
                <span class="stream-game-version">ellie.exe</span>
            </div>

            <div id="stream-ui-bar-history"></div>

            <div class="stream-left-image">
                <img id="stream-player-image"
                    src="${State.variables.playerImage || 'https://placehold.co/280x460/0a0a0f/e84393?text=EliPlays'}"
                    alt="Character">
                <div class="stream-char-name-tag" id="stream-char-name">
                    ${State.variables.playerName || 'Eli'}
                </div>
            </div>

            <div class="stream-left-location">
                <div class="stream-location-label">
                    <span class="stream-location-icon">◎</span>
                    <span id="stream-location-name">${State.variables.locationName || 'Location'}</span>
                </div>
                <img id="stream-location-image"
                    src="${State.variables.locationImage || 'https://placehold.co/280x140/0a0a0f/5d5875?text=–'}"
                    alt="Location">
            </div>

        </aside>


        <!-- RIGHT SIDEBAR -->
        <aside id="stream-right-bar">
            <!-- content injected by renderRightBar() on each passage -->
        </aside>

        <!-- HINT BAR -->
        <div id="stream-hint-bar"></div>

    `);


    // Clone history buttons from SugarCube's hidden bar
    $('#ui-bar-history button').each(function () {
        const $clone = $(this).clone(true);

        if ($clone.attr('id') === 'history-backward') {
            $clone.html('&#8592;');
        } else if ($clone.attr('id') === 'history-forward') {
            $clone.html('&#8594;');
        }

        $('#stream-ui-bar-history').append($clone);
    });

    // Initial render — runs before :passagerender fires
    setTimeout(function () {
        renderRightBar();
        const sv = State.variables;
        if (sv.hint) {
            $('#stream-hint-bar')
                .html(`<span class="rl-hint-icon">▶</span><span class="rl-hint-text">${sv.hint}</span>`)
                .addClass('visible');
        }
    }, 0);

});


/* ---------- RIGHT SIDEBAR RENDERER ---------- */

function renderRightBar() {
    const sv  = State.variables;
    const mode = sv.right_sidebar_mode || 0;
    const $bar = $('#stream-right-bar');
    if (!$bar.length) return;

    if (mode === 1) {
        /* ---- STREAM MODE ---- */
        $bar.html(`
            <div class="stream-right-header">
                <span class="stream-right-channel">${sv.streamName || 'EliPlays'}</span>
                <span class="stream-right-badge">
                    <span class="stream-live-dot"></span>
                    LIVE
                </span>
            </div>

            <div class="stream-stats-panel">
                <div class="stream-stat-row">
                    <span class="stream-stat-label">👁  Viewers</span>
                    <span class="stream-stat-value" id="stat-viewers"></span>
                </div>
                <div class="stream-stat-row">
                    <span class="stream-stat-label">♡  Followers</span>
                    <span class="stream-stat-value" id="stat-followers"></span>
                </div>
                <div class="stream-stat-row">
                    <span class="stream-stat-label">💰  Donations</span>
                    <span class="stream-stat-value" id="stat-donations"></span>
                </div>
                <div class="stream-stat-row stream-stat-row--accent">
                    <span class="stream-stat-label">$ Balance</span>
                    <span class="stream-stat-value stream-stat-accent" id="stat-sc"></span>
                </div>
            </div>

            <div class="stream-right-divider"></div>

            <div class="stream-chat-panel">
                <div class="stream-chat-panel-label">CHAT</div>
                <div id="stream-right-chat" class="stream-right-chat-feed">
                    <div class="stream-chat-line">
                        <span class="stream-chat-user stream-chat-bot">BotStream</span>
                        <span class="stream-chat-msg">welcome to the stream!</span>
                    </div>
                </div>
            </div>
        `);

        /* Populate stream stats */
        function setStat(id, val, prefix, suffix) {
            const $el = $('#' + id);
            $el.text((prefix || '') + (val !== undefined ? val : '—') + (suffix || ''));
            $el.removeClass('stream-stat-dead stream-stat-good stream-stat-great');
            if (!val || val === 0 || val === '0.00') {
                $el.addClass('stream-stat-dead');
            } else if (val > 100) {
                $el.addClass('stream-stat-great');
            } else {
                $el.addClass('stream-stat-good');
            }
        }

        setStat('stat-viewers',   sv.viewers,   '',  '');
        setStat('stat-followers', sv.followers, '',  '');
        setStat('stat-donations', sv.donations, '$', '');
        $('#stat-sc').text((sv.money || 0) + ' $');

    } else {
        /* ---- REAL LIFE MODE ---- */

        function statBar(val, max, colorClass) {
            const pct = Math.min(100, Math.max(0, Math.round((val / max) * 100)));
            return `<div class="rl-bar-track">
                        <div class="rl-bar-fill ${colorClass}" style="width:${pct}%"></div>
                    </div>`;
        }

        function moneyClass(val) {
            if (val <= 0)  return 'stream-stat-dead';
            if (val < 100) return 'stream-stat-good';
            return 'stream-stat-great';
        }

        $bar.html(`
            <div class="stream-right-header">
                <span class="stream-right-channel">${sv.playerName || 'Eli Vance'}</span>
                <span class="rl-day-badge">Day ${sv.day || 1}</span>
            </div>

            <div class="rl-stats-panel">

                <div class="rl-stat-block">
                    <div class="rl-stat-row">
                        <span class="rl-stat-label">💵 Money</span>
                        <span class="rl-stat-value ${moneyClass(sv.money || 0)}">
                            $${sv.money !== undefined ? sv.money : 0}
                        </span>
                    </div>
                    ${(sv.loan || 0) > 0 ? `<div class="rl-stat-row">
                        <span class="rl-stat-label">🏦 Loan</span>
                        <span class="rl-stat-value rl-val-red">-$${sv.loan}</span>
                    </div>` : ''}
                </div>

                <div class="rl-divider"></div>

                <div class="rl-stat-block">
                    <div class="rl-section-label">APPEARANCE</div>
                    <div class="rl-stat-row">
                        <span class="rl-stat-label">✦ ATTRACTIVENESS</span>
                    </div>
                    ${statBar(sv.appearance || 0, 100, 'rl-bar-pink')}
                    <div class="rl-stat-row">
                    <span class="rl-stat-label">✨ VISUAL LOOK</span>
                    </div>
                    <div class="rl-sexuality-track">
                        <span class="rl-sex-label">FEMALE</span>
                        <div class="rl-spectrum-track">
                            <div class="rl-spectrum-needle" style="left:${100 - (sv.femminity || 0)}%"></div>
                        </div>
                        <span class="rl-sex-label">MALE</span>
                    </div>
                </div>

                <div class="rl-divider"></div>

                <div class="rl-stat-block">
                    <div class="rl-section-label">MENTAL</div>
                    <div class="rl-stat-row">
                        <span class="rl-stat-label">◈ Confidence</span>
                        <span class="rl-stat-value">${sv.confidence || 0}</span>
                    </div>
                    ${statBar(sv.confidence || 0, 100, 'rl-bar-teal')}

                    <div class="rl-stat-row" style="margin-top:0.5rem">
                        <span class="rl-stat-label">⚡ Stress</span>
                        <span class="rl-stat-value ${(sv.stress || 0) > 70 ? 'stream-stat-dead' : ''}">
                            ${sv.stress || 0}
                        </span>
                    </div>
                    ${statBar(sv.stress || 0, 100, 'rl-bar-red')}
                    <div class="rl-stat-row" style="margin-top:0.5rem">
                        <span class="rl-stat-label">⚡ Corruption</span>
                        <span class="rl-stat-value ${(sv.corruption || 0) > 70 ? 'stream-stat-dead' : ''}">
                            ${sv.corruption || 0}
                        </span>
                    </div>
                    ${statBar(sv.corruption || 0, 100, 'rl-bar-red')}
                </div>

                <div class="rl-divider"></div>

                <div class="rl-stat-block">
                    <div class="rl-section-label">FEMALE ATTRACTNESS</div>
                    <div class="rl-sexuality-track">
                        <span class="rl-sex-label">LOW</span>
                        <div class="rl-bar-track" style="flex:1">
                            <div class="rl-bar-fill rl-bar-purple"
                                 style="width:${sv.female_attractiveness}%"></div>
                        </div>
                        <span class="rl-sex-label">HIGH</span>
                    </div>
                    <div class="rl-section-label">MALE ATTRACTNESS</div>
                    <div class="rl-sexuality-track">
                        <span class="rl-sex-label">LOW</span>
                        <div class="rl-bar-track" style="flex:1">
                            <div class="rl-bar-fill rl-bar-purple"
                                 style="width:${sv.male_attractiveness}%"></div>
                        </div>
                        <span class="rl-sex-label">HIGH</span>
                    </div>
                </div>

            </div>

            <!--<div class="stream-chat-panel" style="border-top:1px solid rgba(255,255,255,0.04)">
                <div class="stream-chat-panel-label">MESSAGES</div>
                <div class="stream-right-chat-feed" id="stream-right-chat">
                    <div class="stream-chat-line rl-msg-empty">No new messages.</div>
                </div>
            </div>-->
        `);
    }
}


/* ---------- UPDATE SIDEBAR ON EACH PASSAGE ---------- */
$(document).on(':passagerender', function () {

    const sv = State.variables;

    /* Left bar — character image */
    if (sv.playerImage && $('#stream-player-image').length) {
        $('#stream-player-image')
            .stop(true, true)
            .fadeOut(200, function () {
                $(this).attr('src', sv.playerImage).fadeIn(200);
            });
    }

    if (sv.playerName) $('#stream-char-name').text(sv.playerName);

    /* Left bar — location */
    if (sv.locationImage && $('#stream-location-image').length) {
        $('#stream-location-image')
            .stop(true, true)
            .fadeOut(200, function () {
                $(this).attr('src', sv.locationImage).fadeIn(200);
            });
    }

    if (sv.locationName) $('#stream-location-name').text(sv.locationName);

    /* Right bar — full re-render based on mode */
    renderRightBar();

    /* Hint bar */
    const $hint = $('#stream-hint-bar');
    if ($hint.length) {
        if (sv.hint) {
            $hint.html(`<span class="rl-hint-icon">▶</span><span class="rl-hint-text">${sv.hint}</span>`);
            $hint.addClass('visible');
        } else {
            $hint.removeClass('visible').empty();
        }
    }

});


/* ---------- SCROLL TO TOP ON PASSAGE CHANGE ---------- */
$(document).on(':passagestart', function () {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});


/* ---------- MOBILE OFF-CANVAS ---------- */
(function () {

    function isMobileView() {
        return window.matchMedia('(max-width: 900px)').matches;
    }

    function closeSidebars() {
        $('body').removeClass('stream-left-open stream-right-open');
        $('#stream-toggle-left').attr('aria-expanded', 'false');
        $('#stream-toggle-right').attr('aria-expanded', 'false');
    }

    function ensureMobileButtons() {
        if (!$('#stream-toggle-left').length) {
            $('body').append(`
                <button id="stream-toggle-left" type="button"
                        aria-expanded="false" aria-label="Toggle left sidebar">
                    <span class="stream-dot"></span>
                    <span>Char</span>
                </button>
            `);
            $('#stream-toggle-left').on('click', function () {
                const open = $('body').toggleClass('stream-left-open')
                                      .hasClass('stream-left-open');
                $(this).attr('aria-expanded', open.toString());
            });
        }

        if (!$('#stream-toggle-right').length) {
            $('body').append(`
                <button id="stream-toggle-right" type="button"
                        aria-expanded="false" aria-label="Toggle right sidebar">
                    <span class="stream-dot"></span>
                    <span>Stats</span>
                </button>
            `);
            $('#stream-toggle-right').on('click', function () {
                const open = $('body').toggleClass('stream-right-open')
                                      .hasClass('stream-right-open');
                $(this).attr('aria-expanded', open.toString());
            });
        }
    }

    function applyMobileState() {
        if (isMobileView()) {
            ensureMobileButtons();
        } else {
            $('body').removeClass('stream-left-open stream-right-open');
            $('#stream-toggle-left, #stream-toggle-right').remove();
        }
    }

    // Close sidebars on every passage navigation
    $(document).on(':passagestart', function () {
        if (isMobileView()) closeSidebars();
    });

    $(document).one(':storyready', function () {
        applyMobileState();
        $(window).on('resize orientationchange', applyMobileState);
    });

})();
