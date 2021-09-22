var size = 0;
var placement = 'point';

var style_Medida_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("valor");
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("valor") !== null) {
        labelText = String(feature.get("valor"));
    }
    if (value >= 0.400000 && value <= 10.913000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 27.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,128,53,0.612)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(255,245,240,0.612)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10.913000 && value <= 14.345636) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 27.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,128,53,0.612)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(253,204,184,0.612)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 14.345636 && value <= 17.777778) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 27.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,128,53,0.612)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(252,143,111,0.612)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 17.777778 && value <= 21.209920) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 27.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,128,53,0.612)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(244,77,55,0.612)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 21.209920 && value <= 24.642062) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 27.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,128,53,0.612)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(197,22,27,0.612)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24.642062 && value <= 30.500000) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 27.2 + size,
            stroke: new ol.style.Stroke({color: 'rgba(61,128,53,0.612)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(103,0,13,0.612)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
