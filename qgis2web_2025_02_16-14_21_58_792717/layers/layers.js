var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WalkingDataMWlocations_2 = new ol.format.GeoJSON();
var features_WalkingDataMWlocations_2 = format_WalkingDataMWlocations_2.readFeatures(json_WalkingDataMWlocations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WalkingDataMWlocations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WalkingDataMWlocations_2.addFeatures(features_WalkingDataMWlocations_2);
var lyr_WalkingDataMWlocations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WalkingDataMWlocations_2, 
                style: style_WalkingDataMWlocations_2,
                popuplayertitle: 'WalkingDataMW — locations',
                interactive: true,
                title: '<img src="styles/legend/WalkingDataMWlocations_2.png" /> WalkingDataMW — locations'
            });
var format_WalkingDataMWToilets_3 = new ol.format.GeoJSON();
var features_WalkingDataMWToilets_3 = format_WalkingDataMWToilets_3.readFeatures(json_WalkingDataMWToilets_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WalkingDataMWToilets_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WalkingDataMWToilets_3.addFeatures(features_WalkingDataMWToilets_3);
var lyr_WalkingDataMWToilets_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WalkingDataMWToilets_3,
maxResolution:14.00223307613098,
 
                style: style_WalkingDataMWToilets_3,
                popuplayertitle: 'WalkingDataMW — Toilets',
                interactive: true,
                title: '<img src="styles/legend/WalkingDataMWToilets_3.png" /> WalkingDataMW — Toilets'
            });
var format_WalkingDataMWBench_4 = new ol.format.GeoJSON();
var features_WalkingDataMWBench_4 = format_WalkingDataMWBench_4.readFeatures(json_WalkingDataMWBench_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WalkingDataMWBench_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WalkingDataMWBench_4.addFeatures(features_WalkingDataMWBench_4);
var lyr_WalkingDataMWBench_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WalkingDataMWBench_4,
maxResolution:14.00223307613098,
 
                style: style_WalkingDataMWBench_4,
                popuplayertitle: 'WalkingDataMW — Bench',
                interactive: true,
                title: '<img src="styles/legend/WalkingDataMWBench_4.png" /> WalkingDataMW — Bench'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_WalkingDataMWlocations_2.setVisible(true);lyr_WalkingDataMWToilets_3.setVisible(true);lyr_WalkingDataMWBench_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_WalkingDataMWlocations_2,lyr_WalkingDataMWToilets_3,lyr_WalkingDataMWBench_4];
lyr_WalkingDataMWlocations_2.set('fieldAliases', {'fid': 'fid', 'Photo': 'Photo', 'Name': 'Name', 'ID': 'ID', 'X': 'X', 'Y': 'Y', 'Description': 'Description', 'Parking': 'Parking', 'Toilets': 'Toilets', 'Condition': 'Condition', 'Activities': 'Activities', });
lyr_WalkingDataMWToilets_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'male': 'male', 'description': 'description', 'operator': 'operator', 'level': 'level', 'female': 'female', 'check_date': 'check_date', 'changing_table': 'changing_table', 'capacity': 'capacity', 'unisex': 'unisex', 'access': 'access', 'wheelchair': 'wheelchair', 'toilets:disposal': 'toilets:disposal', 'fee': 'fee', 'amenity': 'amenity', });
lyr_WalkingDataMWBench_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'armrest': 'armrest', 'direction': 'direction', 'survey:date': 'survey:date', 'mapillary': 'mapillary', 'colour': 'colour', 'check_date': 'check_date', 'seats': 'seats', 'material': 'material', 'backrest': 'backrest', 'amenity': 'amenity', });
lyr_WalkingDataMWlocations_2.set('fieldImages', {'fid': 'Hidden', 'Photo': 'ExternalResource', 'Name': 'TextEdit', 'ID': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Description': 'TextEdit', 'Parking': 'TextEdit', 'Toilets': 'TextEdit', 'Condition': 'TextEdit', 'Activities': 'TextEdit', });
lyr_WalkingDataMWToilets_3.set('fieldImages', {'fid': 'Hidden', 'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'Hidden', 'male': 'Hidden', 'description': 'Hidden', 'operator': 'Hidden', 'level': 'Hidden', 'female': 'Hidden', 'check_date': 'Hidden', 'changing_table': 'Hidden', 'capacity': 'Hidden', 'unisex': 'Hidden', 'access': 'Hidden', 'wheelchair': 'Hidden', 'toilets:disposal': 'Hidden', 'fee': 'Hidden', 'amenity': 'Hidden', });
lyr_WalkingDataMWBench_4.set('fieldImages', {'fid': 'Hidden', 'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'Hidden', 'armrest': 'Hidden', 'direction': 'Hidden', 'survey:date': 'Hidden', 'mapillary': 'Hidden', 'colour': 'Hidden', 'check_date': 'Hidden', 'seats': 'Hidden', 'material': 'Hidden', 'backrest': 'Hidden', 'amenity': 'Hidden', });
lyr_WalkingDataMWlocations_2.set('fieldLabels', {'Photo': 'no label', 'Name': 'no label', 'Description': 'no label', 'Parking': 'header label - always visible', 'Toilets': 'header label - always visible', 'Condition': 'header label - always visible', 'Activities': 'header label - always visible', });
lyr_WalkingDataMWToilets_3.set('fieldLabels', {});
lyr_WalkingDataMWBench_4.set('fieldLabels', {});
lyr_WalkingDataMWBench_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});