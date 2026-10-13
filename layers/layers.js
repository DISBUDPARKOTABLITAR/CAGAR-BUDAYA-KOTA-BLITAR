ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([12481850.401766, -909491.506535, 12491921.943640, -897098.706904]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_JalanLokal_1 = new ol.format.GeoJSON();
var features_JalanLokal_1 = format_JalanLokal_1.readFeatures(json_JalanLokal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLokal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLokal_1.addFeatures(features_JalanLokal_1);
var lyr_JalanLokal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLokal_1, 
                style: style_JalanLokal_1,
                popuplayertitle: 'Jalan Lokal',
                interactive: false,
                title: '<img src="styles/legend/JalanLokal_1.png" /> Jalan Lokal'
            });
var format_JalanSekunder_2 = new ol.format.GeoJSON();
var features_JalanSekunder_2 = format_JalanSekunder_2.readFeatures(json_JalanSekunder_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanSekunder_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanSekunder_2.addFeatures(features_JalanSekunder_2);
var lyr_JalanSekunder_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanSekunder_2, 
                style: style_JalanSekunder_2,
                popuplayertitle: 'Jalan Sekunder',
                interactive: false,
                title: '<img src="styles/legend/JalanSekunder_2.png" /> Jalan Sekunder'
            });
var format_JalanUtama_3 = new ol.format.GeoJSON();
var features_JalanUtama_3 = format_JalanUtama_3.readFeatures(json_JalanUtama_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanUtama_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanUtama_3.addFeatures(features_JalanUtama_3);
var lyr_JalanUtama_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanUtama_3, 
                style: style_JalanUtama_3,
                popuplayertitle: 'Jalan Utama',
                interactive: false,
                title: '<img src="styles/legend/JalanUtama_3.png" /> Jalan Utama'
            });
var format_CagarBudayaKotaBlitar_4 = new ol.format.GeoJSON();
var features_CagarBudayaKotaBlitar_4 = format_CagarBudayaKotaBlitar_4.readFeatures(json_CagarBudayaKotaBlitar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CagarBudayaKotaBlitar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CagarBudayaKotaBlitar_4.addFeatures(features_CagarBudayaKotaBlitar_4);
var lyr_CagarBudayaKotaBlitar_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CagarBudayaKotaBlitar_4, 
                style: style_CagarBudayaKotaBlitar_4,
                popuplayertitle: 'Cagar Budaya Kota Blitar',
                interactive: true,
    title: 'Cagar Budaya Kota Blitar<br />\
    <img src="styles/legend/CagarBudayaKotaBlitar_4_0.png" /> Candi Gedog<br />\
    <img src="styles/legend/CagarBudayaKotaBlitar_4_1.png" /> Istana Gebang Blitar<br />\
    <img src="styles/legend/CagarBudayaKotaBlitar_4_2.png" /> Makam Adipati Aryo Blitar<br />\
    <img src="styles/legend/CagarBudayaKotaBlitar_4_3.png" /> Makam Bung Karno<br />\
    <img src="styles/legend/CagarBudayaKotaBlitar_4_4.png" /> Makam Pangeranan<br />\
    <img src="styles/legend/CagarBudayaKotaBlitar_4_5.png" /> Monumen PETA<br />\
    <img src="styles/legend/CagarBudayaKotaBlitar_4_6.png" /> Monumen Potlot<br />\
    <img src="styles/legend/CagarBudayaKotaBlitar_4_7.png" /> Pesanggrahan Djojodigdan<br />\
    <img src="styles/legend/CagarBudayaKotaBlitar_4_8.png" /> Prasasti Karangtengah<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_JalanLokal_1.setVisible(true);lyr_JalanSekunder_2.setVisible(true);lyr_JalanUtama_3.setVisible(true);lyr_CagarBudayaKotaBlitar_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_JalanLokal_1,lyr_JalanSekunder_2,lyr_JalanUtama_3,lyr_CagarBudayaKotaBlitar_4];
lyr_JalanLokal_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'width': 'width', 'parking:both': 'parking:both', 'covered': 'covered', 'foot': 'foot', 'motorcar': 'motorcar', 'maxspeed:advisory': 'maxspeed:advisory', 'import': 'import', 'horse': 'horse', 'flood_prone': 'flood_prone', 'cycleway': 'cycleway', 'bicycle': 'bicycle', 'service': 'service', 'junction': 'junction', 'motorcycle': 'motorcycle', 'not:name': 'not:name', 'traffic_calming': 'traffic_calming', 'layer': 'layer', 'bridge': 'bridge', 'maxspeed': 'maxspeed', 'lane_markings': 'lane_markings', 'motor_vehicle': 'motor_vehicle', 'access': 'access', 'reg_ref': 'reg_ref', 'lit': 'lit', 'cycleway:left': 'cycleway:left', 'oneway:4wd': 'oneway:4wd', 'alt_name': 'alt_name', 'ref': 'ref', 'cycleway:right': 'cycleway:right', 'oneway:motorcar': 'oneway:motorcar', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'lanes': 'lanes', 'designation': 'designation', 'surface': 'surface', 'oneway': 'oneway', 'name': 'name', 'hgv': 'hgv', });
lyr_JalanSekunder_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'width': 'width', 'parking:both': 'parking:both', 'covered': 'covered', 'foot': 'foot', 'motorcar': 'motorcar', 'maxspeed:advisory': 'maxspeed:advisory', 'import': 'import', 'horse': 'horse', 'flood_prone': 'flood_prone', 'cycleway': 'cycleway', 'bicycle': 'bicycle', 'service': 'service', 'junction': 'junction', 'motorcycle': 'motorcycle', 'not:name': 'not:name', 'traffic_calming': 'traffic_calming', 'layer': 'layer', 'bridge': 'bridge', 'maxspeed': 'maxspeed', 'lane_markings': 'lane_markings', 'motor_vehicle': 'motor_vehicle', 'access': 'access', 'reg_ref': 'reg_ref', 'lit': 'lit', 'cycleway:left': 'cycleway:left', 'oneway:4wd': 'oneway:4wd', 'alt_name': 'alt_name', 'ref': 'ref', 'cycleway:right': 'cycleway:right', 'oneway:motorcar': 'oneway:motorcar', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'lanes': 'lanes', 'designation': 'designation', 'surface': 'surface', 'oneway': 'oneway', 'name': 'name', 'hgv': 'hgv', });
lyr_JalanUtama_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'width': 'width', 'parking:both': 'parking:both', 'covered': 'covered', 'foot': 'foot', 'motorcar': 'motorcar', 'maxspeed:advisory': 'maxspeed:advisory', 'import': 'import', 'horse': 'horse', 'flood_prone': 'flood_prone', 'cycleway': 'cycleway', 'bicycle': 'bicycle', 'service': 'service', 'junction': 'junction', 'motorcycle': 'motorcycle', 'not:name': 'not:name', 'traffic_calming': 'traffic_calming', 'layer': 'layer', 'bridge': 'bridge', 'maxspeed': 'maxspeed', 'lane_markings': 'lane_markings', 'motor_vehicle': 'motor_vehicle', 'access': 'access', 'reg_ref': 'reg_ref', 'lit': 'lit', 'cycleway:left': 'cycleway:left', 'oneway:4wd': 'oneway:4wd', 'alt_name': 'alt_name', 'ref': 'ref', 'cycleway:right': 'cycleway:right', 'oneway:motorcar': 'oneway:motorcar', 'name:etymology:wikipedia': 'name:etymology:wikipedia', 'name:etymology:wikidata': 'name:etymology:wikidata', 'lanes': 'lanes', 'designation': 'designation', 'surface': 'surface', 'oneway': 'oneway', 'name': 'name', 'hgv': 'hgv', });
lyr_CagarBudayaKotaBlitar_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Jenis Cagar Budaya': 'Jenis Cagar Budaya', 'Foto 1': 'Foto 1', 'Foto 2': 'Foto 2', 'Foto 3': 'Foto 3', 'Foto 4': 'Foto 4', 'Foto 5': 'Foto 5', 'Alamat': 'Alamat', 'Tahun Didirikan': 'Tahun Didirikan', 'Tahun Terakhir Pemeliharaan': 'Tahun Terakhir Pemeliharaan', 'Deskripsi Sejarah': 'Deskripsi Sejarah', 'Sumber Informasi': 'Sumber Informasi', 'Link Google Maps': 'Link Google Maps', 'layer': 'layer', 'path': 'path', });
lyr_JalanLokal_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'width': 'TextEdit', 'parking:both': 'TextEdit', 'covered': 'TextEdit', 'foot': 'TextEdit', 'motorcar': 'TextEdit', 'maxspeed:advisory': 'TextEdit', 'import': 'TextEdit', 'horse': 'TextEdit', 'flood_prone': 'TextEdit', 'cycleway': 'TextEdit', 'bicycle': 'TextEdit', 'service': 'TextEdit', 'junction': 'TextEdit', 'motorcycle': 'TextEdit', 'not:name': 'TextEdit', 'traffic_calming': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'maxspeed': 'TextEdit', 'lane_markings': 'TextEdit', 'motor_vehicle': 'TextEdit', 'access': 'TextEdit', 'reg_ref': 'TextEdit', 'lit': 'TextEdit', 'cycleway:left': 'TextEdit', 'oneway:4wd': 'TextEdit', 'alt_name': 'TextEdit', 'ref': 'TextEdit', 'cycleway:right': 'TextEdit', 'oneway:motorcar': 'TextEdit', 'name:etymology:wikipedia': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'lanes': 'TextEdit', 'designation': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'hgv': 'TextEdit', });
lyr_JalanSekunder_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'width': 'TextEdit', 'parking:both': 'TextEdit', 'covered': 'TextEdit', 'foot': 'TextEdit', 'motorcar': 'TextEdit', 'maxspeed:advisory': 'TextEdit', 'import': 'TextEdit', 'horse': 'TextEdit', 'flood_prone': 'TextEdit', 'cycleway': 'TextEdit', 'bicycle': 'TextEdit', 'service': 'TextEdit', 'junction': 'TextEdit', 'motorcycle': 'TextEdit', 'not:name': 'TextEdit', 'traffic_calming': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'maxspeed': 'TextEdit', 'lane_markings': 'TextEdit', 'motor_vehicle': 'TextEdit', 'access': 'TextEdit', 'reg_ref': 'TextEdit', 'lit': 'TextEdit', 'cycleway:left': 'TextEdit', 'oneway:4wd': 'TextEdit', 'alt_name': 'TextEdit', 'ref': 'TextEdit', 'cycleway:right': 'TextEdit', 'oneway:motorcar': 'TextEdit', 'name:etymology:wikipedia': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'lanes': 'TextEdit', 'designation': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'hgv': 'TextEdit', });
lyr_JalanUtama_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'width': 'TextEdit', 'parking:both': 'TextEdit', 'covered': 'TextEdit', 'foot': 'TextEdit', 'motorcar': 'TextEdit', 'maxspeed:advisory': 'TextEdit', 'import': 'TextEdit', 'horse': 'TextEdit', 'flood_prone': 'TextEdit', 'cycleway': 'TextEdit', 'bicycle': 'TextEdit', 'service': 'TextEdit', 'junction': 'TextEdit', 'motorcycle': 'TextEdit', 'not:name': 'TextEdit', 'traffic_calming': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'maxspeed': 'TextEdit', 'lane_markings': 'TextEdit', 'motor_vehicle': 'TextEdit', 'access': 'TextEdit', 'reg_ref': 'TextEdit', 'lit': 'TextEdit', 'cycleway:left': 'TextEdit', 'oneway:4wd': 'TextEdit', 'alt_name': 'TextEdit', 'ref': 'TextEdit', 'cycleway:right': 'TextEdit', 'oneway:motorcar': 'TextEdit', 'name:etymology:wikipedia': 'TextEdit', 'name:etymology:wikidata': 'TextEdit', 'lanes': 'TextEdit', 'designation': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'hgv': 'TextEdit', });
lyr_CagarBudayaKotaBlitar_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Jenis Cagar Budaya': 'TextEdit', 'Foto 1': 'ExternalResource', 'Foto 2': 'ExternalResource', 'Foto 3': 'ExternalResource', 'Foto 4': 'ExternalResource', 'Foto 5': 'ExternalResource', 'Alamat': 'TextEdit', 'Tahun Didirikan': 'TextEdit', 'Tahun Terakhir Pemeliharaan': 'TextEdit', 'Deskripsi Sejarah': 'TextEdit', 'Sumber Informasi': 'TextEdit', 'Link Google Maps': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_JalanLokal_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'width': 'no label', 'parking:both': 'no label', 'covered': 'no label', 'foot': 'no label', 'motorcar': 'no label', 'maxspeed:advisory': 'no label', 'import': 'no label', 'horse': 'no label', 'flood_prone': 'no label', 'cycleway': 'no label', 'bicycle': 'no label', 'service': 'no label', 'junction': 'no label', 'motorcycle': 'no label', 'not:name': 'no label', 'traffic_calming': 'no label', 'layer': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', 'lane_markings': 'no label', 'motor_vehicle': 'no label', 'access': 'no label', 'reg_ref': 'no label', 'lit': 'no label', 'cycleway:left': 'no label', 'oneway:4wd': 'no label', 'alt_name': 'no label', 'ref': 'no label', 'cycleway:right': 'no label', 'oneway:motorcar': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'lanes': 'no label', 'designation': 'no label', 'surface': 'no label', 'oneway': 'no label', 'name': 'no label', 'hgv': 'no label', });
lyr_JalanSekunder_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'width': 'no label', 'parking:both': 'no label', 'covered': 'no label', 'foot': 'no label', 'motorcar': 'no label', 'maxspeed:advisory': 'no label', 'import': 'no label', 'horse': 'no label', 'flood_prone': 'no label', 'cycleway': 'no label', 'bicycle': 'no label', 'service': 'no label', 'junction': 'no label', 'motorcycle': 'no label', 'not:name': 'no label', 'traffic_calming': 'no label', 'layer': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', 'lane_markings': 'no label', 'motor_vehicle': 'no label', 'access': 'no label', 'reg_ref': 'no label', 'lit': 'no label', 'cycleway:left': 'no label', 'oneway:4wd': 'no label', 'alt_name': 'no label', 'ref': 'no label', 'cycleway:right': 'no label', 'oneway:motorcar': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'lanes': 'no label', 'designation': 'no label', 'surface': 'no label', 'oneway': 'no label', 'name': 'no label', 'hgv': 'no label', });
lyr_JalanUtama_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'header label - visible with data', 'osm_type': 'no label', 'highway': 'no label', 'width': 'no label', 'parking:both': 'no label', 'covered': 'no label', 'foot': 'no label', 'motorcar': 'no label', 'maxspeed:advisory': 'no label', 'import': 'no label', 'horse': 'no label', 'flood_prone': 'no label', 'cycleway': 'no label', 'bicycle': 'no label', 'service': 'no label', 'junction': 'no label', 'motorcycle': 'no label', 'not:name': 'no label', 'traffic_calming': 'no label', 'layer': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', 'lane_markings': 'no label', 'motor_vehicle': 'no label', 'access': 'no label', 'reg_ref': 'no label', 'lit': 'no label', 'cycleway:left': 'no label', 'oneway:4wd': 'no label', 'alt_name': 'no label', 'ref': 'no label', 'cycleway:right': 'no label', 'oneway:motorcar': 'no label', 'name:etymology:wikipedia': 'no label', 'name:etymology:wikidata': 'no label', 'lanes': 'no label', 'designation': 'no label', 'surface': 'no label', 'oneway': 'no label', 'name': 'no label', 'hgv': 'no label', });
lyr_CagarBudayaKotaBlitar_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Jenis Cagar Budaya': 'inline label - always visible', 'Foto 1': 'no label', 'Foto 2': 'no label', 'Foto 3': 'no label', 'Foto 4': 'no label', 'Foto 5': 'no label', 'Alamat': 'inline label - always visible', 'Tahun Didirikan': 'inline label - always visible', 'Tahun Terakhir Pemeliharaan': 'inline label - always visible', 'Deskripsi Sejarah': 'no label', 'Sumber Informasi': 'inline label - always visible', 'Link Google Maps': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CagarBudayaKotaBlitar_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});