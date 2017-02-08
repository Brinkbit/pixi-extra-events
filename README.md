# Overview

Adds two additional touch events and ensures equivalent pointer events are fired for touches:

- `touchover`
- `touchout`
- `pointerover`
- `pointerout`

Based on [comment](https://github.com/pixijs/pixi.js/issues/616) by [@alanthai](https://github.com/alanthai).

# Installation

Requires pixi.js as a peer dependency

1. `npm i -S pixi.js`
1. `npm i -S pixi-extra-events`

# Usage

Pass in your own pixi object.

```javascript
const PIXI = require( 'pixi.js' );
const extraEvents = require( 'pixi-extra-events' );
extraEvents( PIXI );
```

Or automatically monkey-patch:

```javascript
require( 'pixi-extra-events' )();
```

# Tests

TODO
