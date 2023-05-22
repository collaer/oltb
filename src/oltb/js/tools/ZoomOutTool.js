import { DOM } from '../helpers/browser/DOM';
import { Config } from '../core/Config';
import { Events } from '../helpers/constants/Events';
import { Control } from 'ol/control';
import { toLonLat } from "ol/proj";
import { goToView } from '../helpers/GoToView';
import { LogManager } from '../core/managers/LogManager';
import { ShortcutKeys } from '../helpers/constants/ShortcutKeys';
import { ElementManager } from '../core/managers/ElementManager';
import { SvgPaths, getIcon } from '../core/icons/GetIcon';
import { isShortcutKeyOnly } from '../helpers/browser/IsShortcutKeyOnly';

const FILENAME = 'tools/ZoomOutTool.js';
const TOOL_BUTTON_CLASS = 'oltb-tool-button';

const DefaultOptions = Object.freeze({
    delta: -1,
    click: undefined,
    zoomed: undefined
});

class ZoomOutTool extends Control {
    constructor(options = {}) {
        super({
            element: ElementManager.getToolbarElement()
        });
        
        const icon = getIcon({
            path: SvgPaths.zoomOut.stroked,
            class: `${TOOL_BUTTON_CLASS}__icon`
        });

        const button = DOM.createElement({
            element: 'button',
            html: icon,
            class: TOOL_BUTTON_CLASS,
            attributes: {
                type: 'button',
                'data-tippy-content': `Zoom out (${ShortcutKeys.zoomOutTool})`
            },
            listeners: {
                'click': this.handleClick.bind(this)
            }
        });

        DOM.appendChildren(this.element, [
            button
        ]);

        this.button = button;
        this.options = { ...DefaultOptions, ...options };

        window.addEventListener(Events.browser.keyUp, this.onWindowKeyUp.bind(this));
    }

    onWindowKeyUp(event) {
        if(isShortcutKeyOnly(event, ShortcutKeys.zoomOutTool)) {
            this.handleClick(event);
        }
    }

    handleClick() {
        LogManager.logDebug(FILENAME, 'handleClick', 'User clicked tool');

        // User defined callback from constructor
        if(this.options.click instanceof Function) {
            this.options.click();
        }
        
        this.momentaryActivation();
    }

    momentaryActivation() {
        const map = this.getMap();
        if(!Boolean(map)) {
            return;
        }
        
        const view = map.getView();
        const coordiantes = toLonLat(view.getCenter());
        const currentZoom = view.getZoom();
        const newZoom = view.getConstrainedZoom(currentZoom + this.options.delta);

        goToView(map, coordiantes, newZoom);

        window.setTimeout(() => {
            // User defined callback from constructor
            if(this.options.zoomed instanceof Function) {
                this.options.zoomed();
            }
        }, Config.animationDuration.normal);
    }
}

export { ZoomOutTool };