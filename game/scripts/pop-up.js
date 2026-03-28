/* =========================================================
   STREAM UPGRADE: ELLIE.EXE - Center Popup Menu
========================================================= */

(function () {

    /* ---------- CREATE POPUP ONCE ---------- */
    $(document).one(':storyready', function () {

        $('body').append(`
            <button id="stream-toggle" aria-label="Open Menu"></button>

            <div id="stream-overlay"></div>

            <div id="stream-popup" role="dialog" aria-hidden="true">
                <button id="stream-close" class="stream-close-btn" aria-label="Close Menu"></button>
                <div class="stream-avatar">
                    <img src="images/regenaform/regenaform_logo_with_name_only.svg" alt="Regenaform">
                </div>

                <h1 class="stream-title">Stream Upgrade</h1>
                <div class="stream-separator"></div>

                <nav class="stream-menu">
                    <ul id="stream-menu-story"></ul>
                    <ul id="stream-menu-core"></ul>
                    <button id="stream-name-characters" class="stream-action-btn">
                        Characters
                    </button>
                </nav>
            </div>


            <!-- CHARACTER LIST POPUP -->
            <div id="stream-char-popup" role="dialog" aria-hidden="true">
                <button id="stream-char-close" class="stream-close-btn" aria-label="Close Character Menu"></button>

                <h1 class="stream-title">Characters</h1>
                <div class="stream-separator"></div>

                <div class="stream-char-list">
                    <p data-char="eli"><strong>Eli Vance</strong></p>
                    <p data-char="marc"><strong>Marcus "Marc" Delano</strong></p>
                    <p data-char="kira"><strong>Kira Nomura</strong></p>
                    <p data-char="dr_maren"><strong>Dr. Maren Voss</strong></p>
                    <p data-char="lina"><strong>Lina</strong></p>
                </div>
            </div>


            <!-- ELI VANCE PROFILE -->
            <div id="stream-char-eli" class="stream-char-profile" role="dialog" aria-hidden="true">
                <button id="stream-char-eli-close" aria-label="Close Eli Profile" class="stream-close-btn"></button>

                <h1 class="stream-title">Eli Vance</h1>
                <div class="stream-separator"></div>

                <div class="stream-char-profile-content">
                    <div class="stream-char-image">
                        <img src="images/user/tier_0/face.jpeg"
                             alt="Eli Vance" width="256" height="384">
                    </div>
                    <div class="stream-char-text">
                        <p><strong>Role:</strong> Protagonist. A failing streamer whose desperation becomes the engine of his transformation.</p>
                        <p><strong>Age:</strong> 22</p>
                        <p>Quietly bitter, deeply insecure, but not without spark. Eli is the kind of person who rehearses conversations in the shower and still fumbles them in real life. He oscillates between self-pity and manic bursts of motivation that burn out within hours. Has a dry, self-deprecating sense of humor that occasionally lands but mostly just makes people uncomfortable.</p>
                        <p>Underneath the cynicism is a genuine hunger to be <em>seen</em> - not famous, not rich, just acknowledged.</p>
                        <p><strong>Stream Name:</strong> EliPlays<br>
                        <strong>Followers:</strong> 54<br>
                        <strong>Avg Viewers:</strong> 8–15<br>
                        <strong>Last Month Earnings:</strong> $12.50</p>
                        <p><strong>Appearance:</strong> 5'9", skinny-fat build. Pale dull skin with mild acne, dark circles from chronic poor sleep. Greasy unkempt medium-length brownish hair. His default expression is tired apathy the face of someone who stopped expecting good things a long time ago.</p>
                        <p><strong>Wardrobe:</strong> Rotation of three faded t-shirts, the same black joggers four days a week, cheap slip-on sneakers, and a worn dark navy zip hoodie that serves as his jacket, blanket, and emotional support garment.</p>
                    </div>
                </div>
            </div>


            <!-- MARCUS "MARC" DELANO PROFILE -->
            <div id="stream-char-marc" class="stream-char-profile" role="dialog" aria-hidden="true">
                <button id="stream-char-marc-close" aria-label="Close Marc Profile" class="stream-close-btn"></button>

                <h1 class="stream-title">Marcus "Marc" Delano</h1>
                <div class="stream-separator"></div>

                <div class="stream-char-profile-content">
                    <div class="stream-char-image">
                        <img src="images/characters/marc/marc.jpeg"
                             alt="Marc Delano" width="256" height="384">
                    </div>
                    <div class="stream-char-text">
                        <p><strong>Role:</strong> Eli's best friend since middle school. The guy who never left.</p>
                        <p><strong>Age:</strong> 22</p>
                        <p>Laid-back, loyal to a fault, chronically unbothered. Marcus works part-time at a phone repair shop and plays games casually he has zero ambition to stream but will hop on anyone's stream if asked. He's the kind of guy who brings snacks without being asked, never judges, and communicates almost entirely through sarcasm and shoulder punches.</p>
                        <p>He doesn't notice subtle changes in people's appearances because he genuinely doesn't care what anyone looks like. This trait becomes critical later.</p>
                        <p><strong>Appearance:</strong> Tall (6'1"), broad-shouldered, Black, keeps his hair in short twists. Warm brown eyes, easy grin. Usually wearing oversized hoodies and basketball shorts regardless of weather. Beat-up Jordans he refuses to replace. Has a small scar on his left eyebrow from a skateboarding accident at 14 that he lies about the origin of every time someone asks.</p>
                    </div>
                </div>
            </div>


            <!-- KIRA NOMURA PROFILE -->
            <div id="stream-char-kira" class="stream-char-profile" role="dialog" aria-hidden="true">
                <button id="stream-char-kira-close" aria-label="Close Kira Profile" class="stream-close-btn"></button>

                <h1 class="stream-title">Kira Nomura</h1>
                <div class="stream-separator"></div>

                <div class="stream-char-profile-content">
                    <div class="stream-char-image">
                        <img src="images/characters/kira/kira.jpeg"
                             alt="Kira Nomura" width="256" height="384">
                    </div>
                    <div class="stream-char-text">
                        <p><strong>Role:</strong> Eli's online-friend-turned-real-friend. Successful mid-tier streamer. The living proof that female streamers earn more.</p>
                        <p><strong>Age:</strong> 21</p>
                        <p>Sharp, pragmatic, genuinely kind but not naive. Kira started streaming two years ago as a hobby and stumbled into consistent income almost by accident. She's aware of the gender dynamics in streaming and neither resents nor exploits them she just <em>understands</em> them. She's the friend who tells you the uncomfortable truth while handing you a coffee.</p>
                        <p>She cares about Eli more than she lets on and worries he's spiraling, but respects his autonomy too much to push.</p>
                        <p><strong>Stream Name:</strong> KiraByte<br>
                        <strong>Avg Viewers:</strong> 800–1,200<br>
                        <strong>Monthly Income:</strong> $3,000–5,000</p>
                        <p><strong>Appearance:</strong> Petite (5'3"), Japanese-American, slim build with soft features. Straight black hair cut in a sharp bob with blunt bangs. Dark brown eyes behind round wire-frame glasses she doesn't need for streaming. Has a small tattoo of a pixel heart on her inner left wrist.</p>
                        <p><strong>Stream Setup:</strong> Ring light, dual monitors, a pink-and-black custom keyboard, high-end webcam, acoustic foam panels covered in anime posters. Polished overlay.</p>
                    </div>
                </div>
            </div>


            <!-- DR. MAREN VOSS PROFILE -->
            <div id="stream-char-dr_maren" class="stream-char-profile" role="dialog" aria-hidden="true">
                <button id="stream-char-dr_maren-close" aria-label="Close Dr. Voss Profile" class="stream-close-btn"></button>

                <h1 class="stream-title">Dr. Maren Voss</h1>
                <div class="stream-separator"></div>

                <div class="stream-char-profile-content">
                    <div class="stream-char-image">
                        <img src="images/characters/dr_maren/dr_maren.jpeg"
                             alt="Dr. Maren Voss" width="256" height="384">
                    </div>
                    <div class="stream-char-text">
                        <p><strong>Role:</strong> The Architect. Head physician at RegenaForm.</p>
                        <p>Speaks in a melodic, measured cadence that makes every sentence feel like a clinical conclusion. She doesn't persuade she presents facts and lets the client reach the inevitable conclusion themselves. There is warmth somewhere inside her, but it's buried under precision.</p>
                        <p>"We don't change you. We unlock you."</p>
                        <p><strong>Appearance:</strong> Ambiguously gendered, mid-30s. Flawless pale skin with an almost luminous quality. Sharp elegant bone structure that reads neither definitively masculine nor feminine. Cool grey-green eyes with an unsettlingly calm steady gaze. Ash-blonde hair pulled back sleekly. Always in a tailored white lab coat over a black high-collared shirt.</p>
                        <p><strong>Affiliation:</strong> RegenaForm advanced cosmetic transformation clinic.</p>
                    </div>
                </div>
            </div>


            <!-- LINA PROFILE -->
            <div id="stream-char-lina" class="stream-char-profile" role="dialog" aria-hidden="true">
                <button id="stream-char-lina-close" aria-label="Close Lina Profile" class="stream-close-btn"></button>

                <h1 class="stream-title">Lina</h1>
                <div class="stream-separator"></div>

                <div class="stream-char-profile-content">
                    <div class="stream-char-image">
                        <img src="images/characters/lina/lina.jpeg"
                             alt="Lina" width="256" height="384">
                    </div>
                    <div class="stream-char-text">
                        <p><strong>Role:</strong> RegenaForm front desk receptionist. First face clients see.</p>
                        <p><strong>Age:</strong> 26 (apparent)</p>
                        <p>Warm, professional, slightly too perfect. Speaks in a melodic cadence. Every gesture feels rehearsed but not robotic more like a person who has practiced being approachable until it became second nature. She never blinks at odd requests.</p>
                        <p>Deliberately chosen to be a walking advertisement for the clinic's work.</p>
                        <p><strong>Appearance:</strong> Stunning in a way that's hard to pin down. Could be any ethnicity, all of them, none of them. Honey-toned skin, large doe eyes in an unusual amber-gold color, soft wavy caramel-highlighted hair past her shoulders, full lips in a permanent subtle smile. Her beauty is almost <em>too</em> balanced the uncanny valley of attractiveness.</p>
                        <p>Wears the RegenaForm uniform: a fitted dove-grey dress with the chrome double-helix logo embroidered on the chest.</p>
                    </div>
                </div>
            </div>

        `);
    });


    /* ---------- MENU REBUILD ---------- */
    function rebuildNeuraMenu() {
        const $story = $('#menu-story');
        const $core  = $('#menu-core');
        if (!$story.length || !$core.length) return;

        const $storyTarget = $('#stream-menu-story');
        const $coreTarget  = $('#stream-menu-core');
        if (!$storyTarget.length || !$coreTarget.length) return;

        $storyTarget.empty();
        $coreTarget.empty();

        $story.children('li').clone(true, true).appendTo($storyTarget);
        $core.children('li').clone(true, true).appendTo($coreTarget);
    }

    $(document).on(':uiupdate', function () { setTimeout(rebuildNeuraMenu, 0); });
    $(document).on(':storyready', function () { setTimeout(rebuildNeuraMenu, 0); });


    /* ---------- OPEN / CLOSE MAIN POPUP ---------- */
    $(document).on('click', '#stream-toggle', function (e) {
        e.stopPropagation();
        $('#stream-overlay, #stream-popup').addClass('open');
    });

    $(document).on('click', '#stream-close', function () {
        $('#stream-overlay, #stream-popup').removeClass('open');
    });

    $(document).on('click', '#stream-overlay', function () {
        $('#stream-overlay, #stream-popup, .stream-char-profile, #stream-char-popup').removeClass('open');
    });

    $(document).on('keydown', function (e) {
        if (e.key === 'Escape') {
            $('#stream-overlay, #stream-popup, .stream-char-profile, #stream-char-popup').removeClass('open');
        }
    });

})();


/* ---------- CHARACTER LIST POPUP ---------- */
$(document).on('click', '#stream-name-characters', function (e) {
    e.stopPropagation();
    $('#stream-char-popup').addClass('open');
});

$(document).on('click', '#stream-char-close', function () {
    $('#stream-char-popup').removeClass('open');
});


/* ---------- INDIVIDUAL CHARACTER PROFILES ---------- */
const charProfiles = ['eli', 'marc', 'kira', 'dr_maren', 'lina'];

charProfiles.forEach(function (id) {
    // Open: click the list item with matching data-char
    $(document).on('click', '.stream-char-list p[data-char="' + id + '"]', function () {
        $('#stream-char-' + id).addClass('open');
    });

    // Close: click the profile's own close button
    $(document).on('click', '#stream-char-' + id + '-close', function () {
        $('#stream-char-' + id).removeClass('open');
    });
});
