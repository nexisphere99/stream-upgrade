# STREAM UPGRADE: ELLIE.EXE — Devlog

---

## v0.0.1 — Foundation Release
**Date:** 2026-03-28
**Branch:** v0.0.1

---

### Overview

First public-facing build. Everything in this release is the foundation — the world, the characters, the engine scaffolding, and the first three days of Arc 1. The core loop is playable from intro through Day 3, across two distinct narrative routes.

---

### Story Content

#### World & Introduction
- Full three-passage intro written and implemented: the post-automation economy, RegenaForm's origins and capabilities, and Eli's backstory
- Intro is skippable — players can jump directly to the neighbourhood hub
- World-building establishes the 2027 setting: 25% real unemployment, the streaming gold rush, the algorithm's gender bias, and RegenaForm as the inevitable solution
- RegenaForm's tech described in full: facial, vocal, body, and full genital construction — all reversible, all scarless, all grown from the client's own DNA
- Tagline and chrome helix logo implemented

#### Arc 1 — Three Days of Content

**Day 1**
- Eli wakes up to Kira's Discord message ("beauty sleep" moment), establishes the dynamic
- Morning routine written in full — mattress, apartment, the desk as the centre of everything
- First stream scene: 3 viewers, DarkSlayer appears, the Silver grind
- Apartment exploration available

**Day 2**
- Eli wakes early for the first time in months — Kira is picking him up at noon
- Morning stream continues the routine
- Kira's apartment scene: she walks Eli through stream analytics, the click-through rate gender gap conversation
- **Branching point — the "hot" moment:**
  - **Kira Arc:** Eli doesn't deflect. He holds the gaze. Kira admits she's been "practising in the shower." They laugh. Something real begins.
  - **Other Arc:** Eli laughs it off. The moment shatters. He goes home and opens a browser tab: "how to look feminine fast."

**Day 3**
- **Kira Arc:** Eli wakes smiling. Text exchange with Kira (Packet-on-keyboard photo, Spotify link, "some girl" jokes). Relationship progression. Evening at her place. First visit to RegenaForm together (Day 3, step 14).
- **Other Arc:** Eli checks the ElliePlayz dashboard — 89 peak viewers, 47 new followers, $47 in one hour. The math is clear. Rabbit hole begins: makeup tutorials rejected, AI face-swap rejected after 12 minutes of consideration, the search leads to RegenaForm. First solo clinic visit (Day 3, step 2).

---

### Characters

Five implemented character macros with styled portrait dialogue boxes:

| Character | Role |
|---|---|
| **Eli** | Player character. Uses `$playerImage` — updates with transformation tier |
| **Kira** | 21yo mid-tier streamer (~1,100 viewers). Love interest / mentor figure |
| **Marc** | Eli's best friend. Cheese puffs and sarcasm, unconditional loyalty |
| **Dr. Voss** (dr_maren) | RegenaForm physician |
| **Lina** | Supporting character (clinic / other arc) |

- Generic `<<chat>>` macro for stream chat — auto-generates SVG avatar from username initials, consistent colour per user derived from char codes
- `xX_DarkSlayer_Xx` appears Day 1 stream, Day 2 stream — recurring troll presence

---

### Locations

**Neighbourhood Hub** (`neighbourhood`)
- SVG interactive district map
- Tooltip on hover, blocked-location flash for gated areas
- Mobile responsive: grid legend replaces SVG on small screens
- Locations: Eli's Apartment, RegenaForm Clinic, Coffee Shop, Kira's Apartment, Marc's Apartment, The Meridian

**Eli's Apartment** — sub-locations mapped:
- Apartment overview, desk area, bed area, washroom, kitchen, closet

**RegenaForm Clinic** — full floor plan mapped:
- Street entrance, approach hallway, reception lobby, consultation room, wig fitting suite, client corridor, Procedure Suite Tier 1

---

### Character Appearance System

Three-tier image system for the player character:

| Tier | Description | Images |
|---|---|---|
| **Tier 0** | Eli's base male appearance | 1 image (`face.jpeg`) |
| **Tier 1** | Facial feminisation — 9 procedural steps | ~80 images |
| **Tier 4** | Body modification — front/back/side variants per step | ~60+ images |

**Tier 1 detail — step 1.9 (final face step) is fully branched:**
- 7 skin tones: porcelain, rose, sun-kissed, olive, honey, caramel, ebony
- 5 eye colours per tone: emerald, gold, blue, violet, heterochromia
- All combinations rendered = 35 unique face completion images

**Tier 4 body steps:** 4.1 through 4.7 (a/b/c/d variants), plus Tier 5 step 5.1 (a–h variants with side views). Front, back, and side angles per variant.

---

### Stats System

Initialised in `StoryInit`:

**Real Life**
- `$money` — starts at 47
- `$loan` — starts at 0
- `$appearance` — starts at 2
- `$femininity` — starts at 0
- `$confidence` — starts at 2
- `$female_attractiveness` — starts at 100
- `$male_attractiveness` — starts at 0
- `$stress` — starts at 90
- `$corruption` — starts at 0
- `$phone_msgs` — array

**Stream**
- `$viewers`, `$followers` (54), `$donations`, `$sc`

**Sidebar mode** (`$right_sidebar_mode`): `0` = real life stats, `1` = stream stats. Set per passage.

---

### UI & Engine

- **Engine:** SugarCube 2.37.3
- **Dual sidebar layout:** left bar (character portrait, location image, nav history), right bar (stats, injected per passage)
- **Hint bar:** persistent bottom strip, driven by `$hint`
- **Splash screen:** two-step animated intro with content warning (18+ gate). Skipped on subsequent sessions via `$firstTimeSplash`
- **Custom cursor** (CSS + JS)
- **Pop-up system** (JS + CSS)
- **Character dialogue CSS** — styled boxes per character (Eli, Ellie, Kira, Marc, Dr. Voss, Lina, chat)
- **`<<img>>` macro** — unified image helper with layout type: `header`, `scene`, `right`, `left`
- **Favicon** set to RegenaForm logo

---

### Adult Content

- Two masturbation scene sets implemented (`masturbation/set_1`, `masturbation/set_2`) — accessible from washroom
- Scenes are fantasy-based (random encounter recalled), written in first person
- Content warning lists: gender transformation, explicit sexual content, body image/dysphoria, financial coercion, streaming culture, strong language

---

### Known State (v0.0.1)

- Arc 1 content ends at Day 3 (both routes reach RegenaForm but Tier 1 procedure not yet fully playable in-narrative)
- Tier 2 and Tier 3 image assets not yet created
- `$sexuality` stat commented out — not yet wired
- Some location passages are stub navigation only (apartment sub-rooms redirect to map)
- `4.7.side.jepg` — typo in filename (`.jepg`)
- Ellie portrait references `images/characters/eli/ellie.png` — not yet confirmed in assets
- Tier 4 folder contains Tier 5 assets (5.1 steps) — folder organisation to be addressed

---

### What's Next

- Tier 1 procedure passage — first RegenaForm visit fully playable
- Character creation UI — skin tone and eye colour selection wired to `$playerImage`
- Day 4+ content for both routes
- `$right_sidebar_mode = 1` stream UI pass
- Tier 2 image production begins
