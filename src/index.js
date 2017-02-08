const p = require( 'pixi.js' ); // eslint-disable-line import/no-extraneous-dependencies

module.exports = function patchPIXI( pixi ) {
    const PIXI = pixi || p;
    const proto = PIXI.interaction.InteractionManager.prototype;

    proto.update = function update( deltaTime ) {
        this._deltaTime += deltaTime; // eslint-disable-line no-underscore-dangle

        if ( !this.interactionDOMElement || !this.eventData.data ) return;

        this.processInteractive(
            this.eventData.data.global,
            this.renderer._lastObjectRendered, // eslint-disable-line no-underscore-dangle
            this.processTouchOverOut.bind( this ),
            true,
        );
    };

    proto.processTouchOverOut = function processTouchOverOut( displayObject, hit ) {
        if ( hit ) {
            if ( !displayObject._over ) { // eslint-disable-line no-underscore-dangle
                displayObject._over = true; // eslint-disable-line no-underscore-dangle
                this.dispatchEvent( displayObject, 'touchover', this.eventData );
                this.dispatchEvent( displayObject, 'pointerover', this.eventData );
            }
        }
        else if ( displayObject._over ) { // eslint-disable-line no-underscore-dangle
            displayObject._over = false; // eslint-disable-line no-underscore-dangle
            this.dispatchEvent( displayObject, 'touchout', this.eventData );
            this.dispatchEvent( displayObject, 'pointerout', this.eventData );
        }
    };
};
