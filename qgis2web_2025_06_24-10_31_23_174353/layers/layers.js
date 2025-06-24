var wms_layers = [];

var format_JAKARTABARAT_0 = new ol.format.GeoJSON();
var features_JAKARTABARAT_0 = format_JAKARTABARAT_0.readFeatures(json_JAKARTABARAT_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKARTABARAT_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKARTABARAT_0.addFeatures(features_JAKARTABARAT_0);
var lyr_JAKARTABARAT_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKARTABARAT_0, 
                style: style_JAKARTABARAT_0,
                popuplayertitle: 'JAKARTA BARAT',
                interactive: true,
                title: '<img src="styles/legend/JAKARTABARAT_0.png" /> JAKARTA BARAT'
            });
var format_JAKARTAPUSAT_1 = new ol.format.GeoJSON();
var features_JAKARTAPUSAT_1 = format_JAKARTAPUSAT_1.readFeatures(json_JAKARTAPUSAT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKARTAPUSAT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKARTAPUSAT_1.addFeatures(features_JAKARTAPUSAT_1);
var lyr_JAKARTAPUSAT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKARTAPUSAT_1, 
                style: style_JAKARTAPUSAT_1,
                popuplayertitle: 'JAKARTA PUSAT',
                interactive: true,
                title: '<img src="styles/legend/JAKARTAPUSAT_1.png" /> JAKARTA PUSAT'
            });
var format_JAKARTASELATAN_2 = new ol.format.GeoJSON();
var features_JAKARTASELATAN_2 = format_JAKARTASELATAN_2.readFeatures(json_JAKARTASELATAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKARTASELATAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKARTASELATAN_2.addFeatures(features_JAKARTASELATAN_2);
var lyr_JAKARTASELATAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKARTASELATAN_2, 
                style: style_JAKARTASELATAN_2,
                popuplayertitle: 'JAKARTA SELATAN',
                interactive: true,
                title: '<img src="styles/legend/JAKARTASELATAN_2.png" /> JAKARTA SELATAN'
            });
var format_JAKARTATIMUR_3 = new ol.format.GeoJSON();
var features_JAKARTATIMUR_3 = format_JAKARTATIMUR_3.readFeatures(json_JAKARTATIMUR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKARTATIMUR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKARTATIMUR_3.addFeatures(features_JAKARTATIMUR_3);
var lyr_JAKARTATIMUR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKARTATIMUR_3, 
                style: style_JAKARTATIMUR_3,
                popuplayertitle: 'JAKARTA TIMUR',
                interactive: true,
                title: '<img src="styles/legend/JAKARTATIMUR_3.png" /> JAKARTA TIMUR'
            });
var format_JAKARTAUTARA_4 = new ol.format.GeoJSON();
var features_JAKARTAUTARA_4 = format_JAKARTAUTARA_4.readFeatures(json_JAKARTAUTARA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKARTAUTARA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKARTAUTARA_4.addFeatures(features_JAKARTAUTARA_4);
var lyr_JAKARTAUTARA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKARTAUTARA_4, 
                style: style_JAKARTAUTARA_4,
                popuplayertitle: 'JAKARTA UTARA',
                interactive: true,
                title: '<img src="styles/legend/JAKARTAUTARA_4.png" /> JAKARTA UTARA'
            });
var format_KEPULAUANSERIBU_5 = new ol.format.GeoJSON();
var features_KEPULAUANSERIBU_5 = format_KEPULAUANSERIBU_5.readFeatures(json_KEPULAUANSERIBU_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEPULAUANSERIBU_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEPULAUANSERIBU_5.addFeatures(features_KEPULAUANSERIBU_5);
var lyr_KEPULAUANSERIBU_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KEPULAUANSERIBU_5, 
                style: style_KEPULAUANSERIBU_5,
                popuplayertitle: 'KEPULAUAN SERIBU',
                interactive: true,
                title: '<img src="styles/legend/KEPULAUANSERIBU_5.png" /> KEPULAUAN SERIBU'
            });
var lyr_NDVI_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI<br />\
    <img src="styles/legend/NDVI_6_0.png" /> -0,0209<br />\
    <img src="styles/legend/NDVI_6_1.png" /> 0,0439<br />\
    <img src="styles/legend/NDVI_6_2.png" /> 0,1086<br />\
    <img src="styles/legend/NDVI_6_3.png" /> 0,1734<br />\
    <img src="styles/legend/NDVI_6_4.png" /> 0,2382<br />\
    <img src="styles/legend/NDVI_6_5.png" /> 0,3030<br />\
    <img src="styles/legend/NDVI_6_6.png" /> 0,3677<br />\
    <img src="styles/legend/NDVI_6_7.png" /> 0,4275<br />\
    <img src="styles/legend/NDVI_6_8.png" /> 0,4774<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11876195.652904, -710727.183114, 11908274.202935, -664028.237059]
        })
    });
var format_data_ispu_dengan_totallllllllll_7 = new ol.format.GeoJSON();
var features_data_ispu_dengan_totallllllllll_7 = format_data_ispu_dengan_totallllllllll_7.readFeatures(json_data_ispu_dengan_totallllllllll_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_data_ispu_dengan_totallllllllll_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_data_ispu_dengan_totallllllllll_7.addFeatures(features_data_ispu_dengan_totallllllllll_7);
var lyr_data_ispu_dengan_totallllllllll_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_data_ispu_dengan_totallllllllll_7, 
                style: style_data_ispu_dengan_totallllllllll_7,
                popuplayertitle: 'data_ispu_dengan_totallllllllll',
                interactive: true,
                title: '<img src="styles/legend/data_ispu_dengan_totallllllllll_7.png" /> data_ispu_dengan_totallllllllll'
            });

lyr_JAKARTABARAT_0.setVisible(true);lyr_JAKARTAPUSAT_1.setVisible(true);lyr_JAKARTASELATAN_2.setVisible(true);lyr_JAKARTATIMUR_3.setVisible(true);lyr_JAKARTAUTARA_4.setVisible(true);lyr_KEPULAUANSERIBU_5.setVisible(true);lyr_NDVI_6.setVisible(true);lyr_data_ispu_dengan_totallllllllll_7.setVisible(true);
var layersList = [lyr_JAKARTABARAT_0,lyr_JAKARTAPUSAT_1,lyr_JAKARTASELATAN_2,lyr_JAKARTATIMUR_3,lyr_JAKARTAUTARA_4,lyr_KEPULAUANSERIBU_5,lyr_NDVI_6,lyr_data_ispu_dengan_totallllllllll_7];
lyr_JAKARTABARAT_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JAKARTAPUSAT_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JAKARTASELATAN_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JAKARTATIMUR_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JAKARTAUTARA_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KEPULAUANSERIBU_5.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_data_ispu_dengan_totallllllllll_7.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', 'field_11': 'field_11', 'field_12': 'field_12', });
lyr_JAKARTABARAT_0.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_JAKARTAPUSAT_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_JAKARTASELATAN_2.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_JAKARTATIMUR_3.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_JAKARTAUTARA_4.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_KEPULAUANSERIBU_5.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_data_ispu_dengan_totallllllllll_7.set('fieldImages', {'field_1': '', 'field_2': '', 'field_3': '', 'field_4': '', 'field_5': '', 'field_6': '', 'field_7': '', 'field_8': '', 'field_9': '', 'field_10': '', 'field_11': '', 'field_12': '', });
lyr_JAKARTABARAT_0.set('fieldLabels', {'KDPPUM': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'KDEBPS': 'inline label - always visible', 'KDEPUM': 'inline label - always visible', 'KDCBPS': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDBPUM': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_JAKARTAPUSAT_1.set('fieldLabels', {'KDPPUM': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'KDEBPS': 'inline label - always visible', 'KDEPUM': 'inline label - always visible', 'KDCBPS': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDBPUM': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_JAKARTASELATAN_2.set('fieldLabels', {'KDPPUM': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'KDEBPS': 'inline label - always visible', 'KDEPUM': 'inline label - always visible', 'KDCBPS': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDBPUM': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_JAKARTATIMUR_3.set('fieldLabels', {'KDPPUM': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'KDEBPS': 'inline label - always visible', 'KDEPUM': 'inline label - always visible', 'KDCBPS': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDBPUM': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_JAKARTAUTARA_4.set('fieldLabels', {'KDPPUM': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'KDEBPS': 'inline label - always visible', 'KDEPUM': 'inline label - always visible', 'KDCBPS': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDBPUM': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_KEPULAUANSERIBU_5.set('fieldLabels', {'KDPPUM': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'KDEBPS': 'inline label - always visible', 'KDEPUM': 'inline label - always visible', 'KDCBPS': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDBPUM': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_data_ispu_dengan_totallllllllll_7.set('fieldLabels', {'field_1': 'inline label - always visible', 'field_2': 'inline label - always visible', 'field_3': 'inline label - always visible', 'field_4': 'inline label - always visible', 'field_5': 'inline label - always visible', 'field_6': 'inline label - always visible', 'field_7': 'inline label - always visible', 'field_8': 'inline label - always visible', 'field_9': 'inline label - always visible', 'field_10': 'inline label - always visible', 'field_11': 'inline label - always visible', 'field_12': 'inline label - always visible', });
lyr_data_ispu_dengan_totallllllllll_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});