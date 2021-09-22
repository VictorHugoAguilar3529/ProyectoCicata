var wms_layers = [];


        var lyr_ESRINationalGeographic_0 = new ol.layer.Tile({
            'title': 'ESRI National Geographic',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Medida_1 = new ol.format.GeoJSON();
var features_Medida_1 = format_Medida_1.readFeatures(json_Medida_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Medida_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Medida_1.addFeatures(features_Medida_1);
var lyr_Medida_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Medida_1, 
                style: style_Medida_1,
                interactive: true,
    title: 'Medida<br />\
    <img src="styles/legend/Medida_1_0.png" /> <  -1.00 Std Dev<br />\
    <img src="styles/legend/Medida_1_1.png" />  -1.00 Std Dev -  -0.50 Std Dev<br />\
    <img src="styles/legend/Medida_1_2.png" />  -0.50 Std Dev -  0.00 Std Dev<br />\
    <img src="styles/legend/Medida_1_3.png" />  0.00 Std Dev -  0.50 Std Dev<br />\
    <img src="styles/legend/Medida_1_4.png" />  0.50 Std Dev -  1.00 Std Dev<br />\
    <img src="styles/legend/Medida_1_5.png" /> â‰¥  1.00 Std Dev<br />'
        });
var format_22mun_2 = new ol.format.GeoJSON();
var features_22mun_2 = format_22mun_2.readFeatures(json_22mun_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22mun_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22mun_2.addFeatures(features_22mun_2);
var lyr_22mun_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_22mun_2, 
                style: style_22mun_2,
                interactive: true,
                title: '<img src="styles/legend/22mun_2.png" /> 22mun'
            });

lyr_ESRINationalGeographic_0.setVisible(true);lyr_Medida_1.setVisible(true);lyr_22mun_2.setVisible(true);
var layersList = [lyr_ESRINationalGeographic_0,lyr_Medida_1,lyr_22mun_2];
lyr_Medida_1.set('fieldAliases', {'id': 'id', 'valor': 'valor', 'fecha': 'fecha', });
lyr_22mun_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', });
lyr_Medida_1.set('fieldImages', {'id': 'TextEdit', 'valor': 'TextEdit', 'fecha': 'DateTime', });
lyr_22mun_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_Medida_1.set('fieldLabels', {'id': 'no label', 'valor': 'no label', 'fecha': 'no label', });
lyr_22mun_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', });
lyr_22mun_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});