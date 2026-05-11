ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([108.444199, -6.784588, 108.670850, -6.661460]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RBI10K_ADMINISTRASI_AR_DESA_1 = new ol.format.GeoJSON();
var features_RBI10K_ADMINISTRASI_AR_DESA_1 = format_RBI10K_ADMINISTRASI_AR_DESA_1.readFeatures(json_RBI10K_ADMINISTRASI_AR_DESA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RBI10K_ADMINISTRASI_AR_DESA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI10K_ADMINISTRASI_AR_DESA_1.addFeatures(features_RBI10K_ADMINISTRASI_AR_DESA_1);
var lyr_RBI10K_ADMINISTRASI_AR_DESA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI10K_ADMINISTRASI_AR_DESA_1, 
                style: style_RBI10K_ADMINISTRASI_AR_DESA_1,
                popuplayertitle: 'RBI10K_ADMINISTRASI_AR_DESA',
                interactive: true,
    title: 'RBI10K_ADMINISTRASI_AR_DESA<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_0.png" /> Argasunya<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_1.png" /> Drajat<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_2.png" /> Harjamukti<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_3.png" /> Jagasatru<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_4.png" /> Kalijaga<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_5.png" /> Karyamulya<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_6.png" /> Kebonbaru<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_7.png" /> Kecapi<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_8.png" /> Kejaksan<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_9.png" /> Kesambi<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_10.png" /> Kesenden<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_11.png" /> Kesepuhan<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_12.png" /> Larangan<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_13.png" /> Lemahwungkuk<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_14.png" /> Panjunan<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_15.png" /> Pegambiran<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_16.png" /> Pekalangan<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_17.png" /> Pekalipan<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_18.png" /> Pekiringan<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_19.png" /> Pulasaren<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_20.png" /> Sukapura<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_21.png" /> Sunyaragi<br />\
    <img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_1_22.png" /> <br />' });
var format_RBI25K_ADMINISTRASI_LN_2 = new ol.format.GeoJSON();
var features_RBI25K_ADMINISTRASI_LN_2 = format_RBI25K_ADMINISTRASI_LN_2.readFeatures(json_RBI25K_ADMINISTRASI_LN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RBI25K_ADMINISTRASI_LN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI25K_ADMINISTRASI_LN_2.addFeatures(features_RBI25K_ADMINISTRASI_LN_2);
var lyr_RBI25K_ADMINISTRASI_LN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI25K_ADMINISTRASI_LN_2, 
                style: style_RBI25K_ADMINISTRASI_LN_2,
                popuplayertitle: 'RBI25K_ADMINISTRASI_LN',
                interactive: true,
                title: '<img src="styles/legend/RBI25K_ADMINISTRASI_LN_2.png" /> RBI25K_ADMINISTRASI_LN'
            });

lyr_OSMStandard_0.setVisible(true);lyr_RBI10K_ADMINISTRASI_AR_DESA_1.setVisible(true);lyr_RBI25K_ADMINISTRASI_LN_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_RBI10K_ADMINISTRASI_AR_DESA_1,lyr_RBI25K_ADMINISTRASI_LN_2];
lyr_RBI10K_ADMINISTRASI_AR_DESA_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI25K_ADMINISTRASI_LN_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'KARKTR': 'KARKTR', 'KLBADM': 'KLBADM', 'PJGBTS': 'PJGBTS', 'STSBTS': 'STSBTS', 'TIPLOK': 'TIPLOK', 'TIPTBT': 'TIPTBT', 'UUPP': 'UUPP', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI10K_ADMINISTRASI_AR_DESA_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_RBI25K_ADMINISTRASI_LN_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'KARKTR': 'TextEdit', 'KLBADM': 'TextEdit', 'PJGBTS': 'TextEdit', 'STSBTS': 'TextEdit', 'TIPLOK': 'TextEdit', 'TIPTBT': 'TextEdit', 'UUPP': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_RBI10K_ADMINISTRASI_AR_DESA_1.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_ADMINISTRASI_LN_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'KARKTR': 'no label', 'KLBADM': 'no label', 'PJGBTS': 'no label', 'STSBTS': 'no label', 'TIPLOK': 'no label', 'TIPTBT': 'no label', 'UUPP': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI25K_ADMINISTRASI_LN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});