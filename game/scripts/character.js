/* ============================================================
   STREAM UPGRADE: ELLIE.EXE — Character Dialogue Macros
   ============================================================ */

Macro.add("eli", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-eli">' +
                     '<img class="portrait" src="' + State.variables.playerImage + '">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Eli</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("ellie", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-ellie">' +
                     '<img class="portrait" src="images/characters/eli/ellie.png">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Ellie</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("kira", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-kira">' +
                     '<img class="portrait" src="images/characters/kira/kira.jpeg">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Kira</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("marc", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-marc">' +
                     '<img class="portrait" src="images/characters/marc/marc.jpeg">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Marc</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("dr_maren", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-dr_maren">' +
                     '<img class="portrait" src="images/characters/dr_maren/dr_maren.jpeg">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Dr. Voss</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("lina", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-lina">' +
                     '<img class="portrait" src="images/characters/lina/lina.jpeg">' +
                     '<div class="dialog-text">' +
                       '<span class="name">Lina</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("darkslayer", {
    handler() {
        let text = this.args[0];
        let html = '<div class="dialog-box dialog-darkslayer">' +
                     '<div class="dialog-text">' +
                       '<span class="name">xX_DarkSlayer_Xx</span>' +
                       text +
                     '</div>' +
                   '</div>';
        $(this.output).wiki(html);
    }
});


/* Generic chat macro — handles any username including special characters
   Usage: <<chat "xX_DarkSlayer_Xx" "ur so bad lol">>
   Optional 3rd arg overrides avatar: <<chat "Fan123" "hi!" "images/avatars/fan.png">> */
Macro.add("chat", {
    handler() {
        const username = String(this.args[0] || 'Unknown');
        const text     = this.args[1] || '';
        const imgOverride = this.args[2] || null;

        /* Pick a consistent color from username char codes */
        const palette = ['#e84393','#a855f7','#60a5fa','#2dd4bf','#f59e0b','#ef4444','#22c55e','#f472b6'];
        const colorIdx = username.split('').reduce(function(a, c) { return a + c.charCodeAt(0); }, 0) % palette.length;
        const color = palette[colorIdx];

        /* First letter of username (skip non-alpha) */
        const letter = (username.replace(/[^a-zA-Z]/g, '').charAt(0) || '?').toUpperCase();

        /* SVG avatar — colored box with initial */
        const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="85" height="128" viewBox="0 0 85 128">'
            + '<rect width="85" height="128" rx="8" fill="' + color + '18"/>'
            + '<rect width="85" height="128" rx="8" fill="none" stroke="' + color + '" stroke-width="1.5"/>'
            + '<text x="42.5" y="64" font-family="monospace" font-size="46" fill="' + color + '" text-anchor="middle" dominant-baseline="middle">' + letter + '</text>'
            + '</svg>';
        const avatar = imgOverride || ('data:image/svg+xml,' + encodeURIComponent(svg));

        const html = '<div class="dialog-box dialog-chat">'
            + '<img class="portrait" src="' + avatar + '">'
            + '<div class="dialog-text">'
            + '<span class="name" style="color:' + color + '">' + username + '</span>'
            + text
            + '</div>'
            + '</div>';
        $(this.output).wiki(html);
    }
});


Macro.add("img", {
    handler() {
        let file = this.args[0];
        let type = this.args[1] || "scene"; // "header", "scene", "right", "left"
        let cls = "";

        switch (type) {
            case "header": cls = "passage-header-img"; break;
            case "scene":  cls = "scene-image";        break;
            case "right":  cls = "illus-right";        break;
            case "left":   cls = "illus-left";         break;
        }

        let html = `<div class="${cls}"><img src="${file}"></div>`;
        $(this.output).wiki(html);
    }
});
