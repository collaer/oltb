import { KML } from 'ol/format';
import { GeoJSON } from 'ol/format';

const FormatOptions = Object.freeze([
    {
        text: 'GeoJSON',
        value: 'GeoJSON'
    },
    {
        text: 'KML',
        value: 'KML'
    }
]);

const FormatTypes = Object.freeze({
    'GeoJSON': GeoJSON,
    'KML': KML
});

const instantiateFormat = function(name, options) {
    if(!(name in FormatTypes)) {
        return null;
    }

    return new FormatTypes[name](options);
}

export { FormatOptions, FormatTypes, instantiateFormat };