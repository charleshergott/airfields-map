

document.addEventListener('DOMContentLoaded', function () {
    let map = L.map('map').setView([51.505, -0.09], 3);

    L.tileLayer('', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    let marker = L.marker([51.5, -0.09]).addTo(map);

    let circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500,
    }).addTo(map);

    let polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047],
    ]).addTo(map);

    marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();
    circle.bindPopup('I am a circle.');
    polygon.bindPopup('I am a polygon.');

    map.on('click', function (e) {
        L.popup()
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    });


    map.locate({ setView: true, maxZoom: 16 });

    map.on('locationfound', function (e) {
        L.marker(e.latlng).addTo(map)
            .bindPopup("You are here").openPopup();
    });

    map.on('locationerror', function () {
        alert("Location access denied.");
    });


    L.marker([24.2617, 55.6092]).addTo(map)
        .bindPopup('OMAL');

    L.marker([24.433, 54.6511]).addTo(map)
        .bindPopup('OMAA');

    L.marker([24.467, 54.6103]).addTo(map)
        .bindPopup('nan');

    L.marker([24.4283, 54.4581]).addTo(map)
        .bindPopup('OMAD');

    L.marker([24.2482, 54.5477]).addTo(map)
        .bindPopup('OMAM');

    L.marker([24.2836, 52.5803]).addTo(map)
        .bindPopup('OMBY');

    L.marker([24.51, 52.3352]).addTo(map)
        .bindPopup('OMDL');

    L.marker([25.1122, 56.324]).addTo(map)
        .bindPopup('OMFJ');

    L.marker([25.3286, 55.5172]).addTo(map)
        .bindPopup('OMSJ');

    L.marker([25.2422, 55.3314]).addTo(map)
        .bindPopup('nan');

    L.marker([24.989, 55.0238]).addTo(map)
        .bindPopup('nan');

    L.marker([24.8964, 55.1614]).addTo(map)
        .bindPopup('OMDW');

    L.marker([25.2528, 55.3644]).addTo(map)
        .bindPopup('OMDB');

    L.marker([25.0268, 55.3662]).addTo(map)
        .bindPopup('OMDM');

    L.marker([25.691, 55.778]).addTo(map)
        .bindPopup('nan');

    L.marker([25.6135, 55.9388]).addTo(map)
        .bindPopup('OMRK');

    L.marker([38.4611, 70.8825]).addTo(map)
        .bindPopup('OADZ');

    L.marker([37.1211, 70.5181]).addTo(map)
        .bindPopup('OAFZ');

    L.marker([37.752, -89.0154]).addTo(map)
        .bindPopup('OARZ');

    L.marker([37.883, 70.217]).addTo(map)
        .bindPopup('OAHN');

    L.marker([37.567, 71.5]).addTo(map)
        .bindPopup('OASN');

    L.marker([34.985, 63.1178]).addTo(map)
        .bindPopup('OAQN');

    L.marker([36.7069, 67.2097]).addTo(map)
        .bindPopup('OAMS');

    L.marker([34.817, 67.817]).addTo(map)
        .bindPopup('OABN');

    L.marker([32.367, 62.183]).addTo(map)
        .bindPopup('OAFR');

    L.marker([35.9308, 64.7609]).addTo(map)
        .bindPopup('OAMN');

    L.marker([33.5312, 68.4129]).addTo(map)
        .bindPopup('OAGN');

    L.marker([33.3207, 68.6365]).addTo(map)
        .bindPopup('OADS');

    L.marker([34.5265, 65.271]).addTo(map)
        .bindPopup('OACC');

    L.marker([31.5597, 64.365]).addTo(map)
        .bindPopup('OABT');

    L.marker([31.0, 64.0]).addTo(map)
        .bindPopup('OADY');

    L.marker([31.8638, 64.2246]).addTo(map)
        .bindPopup('OAZI');

    L.marker([34.21, 62.2283]).addTo(map)
        .bindPopup('OAHR');

    L.marker([33.3913, 62.261]).addTo(map)
        .bindPopup('OASD');

    L.marker([30.9722, 61.8658]).addTo(map)
        .bindPopup('OAZJ');

    L.marker([33.6315, 69.2394]).addTo(map)
        .bindPopup('OAGZ');

    L.marker([34.5658, 69.2131]).addTo(map)
        .bindPopup('OAKB');

    L.marker([31.5058, 65.8478]).addTo(map)
        .bindPopup('OAKN');

    L.marker([32.6042, 65.8658]).addTo(map)
        .bindPopup('OATN');

    L.marker([32.903, 66.6309]).addTo(map)
        .bindPopup('OARG');

    L.marker([33.3334, 69.952]).addTo(map)
        .bindPopup('OAKS');

    L.marker([33.3638, 69.9561]).addTo(map)
        .bindPopup('OASL');

    L.marker([36.6651, 68.9108]).addTo(map)
        .bindPopup('OAUZ');

    L.marker([33.9225, 69.0772]).addTo(map)
        .bindPopup('OASH');

    L.marker([34.3998, 70.4986]).addTo(map)
        .bindPopup('OAJL');

    L.marker([33.1258, 68.8385]).addTo(map)
        .bindPopup('OASA');

    L.marker([32.9318, 69.1563]).addTo(map)
        .bindPopup('OAOG');

    L.marker([34.9461, 69.265]).addTo(map)
        .bindPopup('OAIX');

    L.marker([36.7707, 69.532]).addTo(map)
        .bindPopup('OATQ');

    L.marker([17.6358, -61.8286]).addTo(map)
        .bindPopup('TAPH');

    L.marker([17.1367, -61.7927]).addTo(map)
        .bindPopup('TAPA');

    L.marker([18.2048, -63.0551]).addTo(map)
        .bindPopup('TQPF');

    L.marker([40.1473, 44.3959]).addTo(map)
        .bindPopup('UDYZ');

    L.marker([40.7504, 43.8593]).addTo(map)
        .bindPopup('UDSG');

    L.marker([-7.86222, 13.1161]).addTo(map)
        .bindPopup('FNAM');

    L.marker([-12.609, 13.4037]).addTo(map)
        .bindPopup('FNBG');

    L.marker([-12.4792, 13.4869]).addTo(map)
        .bindPopup('FNCT');

    L.marker([-12.3757, 13.561]).addTo(map)
        .bindPopup('FNLB');

    L.marker([-11.4723, 16.7109]).addTo(map)
        .bindPopup('nan');

    L.marker([-12.4046, 16.9474]).addTo(map)
        .bindPopup('FNKU');

    L.marker([-5.59699, 12.1884]).addTo(map)
        .bindPopup('FNCA');

    L.marker([-17.0435, 15.6838]).addTo(map)
        .bindPopup('FNGI');

    L.marker([-16.7554, 14.9653]).addTo(map)
        .bindPopup('FNXA');

    L.marker([-12.8089, 15.7605]).addTo(map)
        .bindPopup('FNHU');

    L.marker([-14.6982, 16.0701]).addTo(map)
        .bindPopup('nan');

    L.marker([-14.9247, 13.575]).addTo(map)
        .bindPopup('FNUB');

    L.marker([-15.1603, 19.1561]).addTo(map)
        .bindPopup('FNCV');

    L.marker([-17.9819, 20.7681]).addTo(map)
        .bindPopup('nan');

    L.marker([-14.6576, 17.7198]).addTo(map)
        .bindPopup('FNME');

    L.marker([-9.27519, 14.9772]).addTo(map)
        .bindPopup('nan');

    L.marker([-11.4264, 15.1014]).addTo(map)
        .bindPopup('FNWK');

    L.marker([-11.1679, 13.8475]).addTo(map)
        .bindPopup('FNSU');

    L.marker([-10.722, 13.7655]).addTo(map)
        .bindPopup('FNPA');

    L.marker([-8.85837, 13.2312]).addTo(map)
        .bindPopup('FNLU');

    L.marker([-8.78361, 17.9897]).addTo(map)
        .bindPopup('FNCF');

    L.marker([-7.40089, 20.8185]).addTo(map)
        .bindPopup('FNDU');

    L.marker([-8.44573, 20.7321]).addTo(map)
        .bindPopup('FNLK');

    L.marker([-9.11596, 18.0493]).addTo(map)
        .bindPopup('FNLZ');

    L.marker([-7.71694, 21.3582]).addTo(map)
        .bindPopup('FNZG');

    L.marker([-7.35889, 20.8047]).addTo(map)
        .bindPopup('FNCH');

    L.marker([-9.68907, 20.4319]).addTo(map)
        .bindPopup('FNSA');

    L.marker([-9.76937, 15.4553]).addTo(map)
        .bindPopup('FNCP');

    L.marker([-9.52509, 16.3124]).addTo(map)
        .bindPopup('FNMA');

    L.marker([-11.8931, 22.9164]).addTo(map)
        .bindPopup('FNCZ');

    L.marker([-13.7106, 19.8611]).addTo(map)
        .bindPopup('nan');

    L.marker([-14.105, 21.45]).addTo(map)
        .bindPopup('nan');

    L.marker([-11.7681, 19.8977]).addTo(map)
        .bindPopup('FNUE');

    L.marker([-10.7158, 22.2311]).addTo(map)
        .bindPopup('FNUA');

    L.marker([-15.2612, 12.1468]).addTo(map)
        .bindPopup('FNMO');

    L.marker([-7.75451, 15.2877]).addTo(map)
        .bindPopup('FNNG');

    L.marker([-7.60307, 15.0278]).addTo(map)
        .bindPopup('FNUG');

    L.marker([-7.25944, 12.8631]).addTo(map)
        .bindPopup('FNZE');

    L.marker([-6.2699, 14.247]).addTo(map)
        .bindPopup('FNBC');

    L.marker([-6.14109, 12.3718]).addTo(map)
        .bindPopup('FNSO');

    L.marker([-62.1908, -58.9867]).addTo(map)
        .bindPopup('SCRM');

    L.marker([-34.5589, -58.4164]).addTo(map)
        .bindPopup('SABE');

    L.marker([-38.725, -62.1693]).addTo(map)
        .bindPopup('SAZB');

    L.marker([-40.7781, -62.9803]).addTo(map)
        .bindPopup('nan');

    L.marker([-37.4461, -61.8893]).addTo(map)
        .bindPopup('SAZC');

    L.marker([-34.6099, -58.6126]).addTo(map)
        .bindPopup('SADP');

    L.marker([-34.8222, -58.5358]).addTo(map)
        .bindPopup('SAEZ');

    L.marker([-34.5459, -60.9306]).addTo(map)
        .bindPopup('SAAJ');

    L.marker([-34.9722, -57.8947]).addTo(map)
        .bindPopup('SADL');

    L.marker([-37.9342, -57.5733]).addTo(map)
        .bindPopup('SAZM');

    L.marker([-38.2271, -57.8697]).addTo(map)
        .bindPopup('nan');

    L.marker([-38.4831, -58.8172]).addTo(map)
        .bindPopup('SAZO');

    L.marker([-36.89, -60.2166]).addTo(map)
        .bindPopup('SAZF');

    L.marker([-38.3869, -60.3297]).addTo(map)
        .bindPopup('SAZH');

    L.marker([-35.8446, -61.8576]).addTo(map)
        .bindPopup('SAZP');

    L.marker([-36.5423, -56.7218]).addTo(map)
        .bindPopup('SAZL');

    L.marker([-37.2374, -59.2279]).addTo(map)
        .bindPopup('SAZT');

    L.marker([-35.0, -63.0]).addTo(map)
        .bindPopup('nan');

    L.marker([-37.2354, -57.0292]).addTo(map)
        .bindPopup('SAZV');

    L.marker([-28.5956, -65.7517]).addTo(map)
        .bindPopup('SANC');

    L.marker([-27.2164, -61.2103]).addTo(map)
        .bindPopup('nan');

    L.marker([-26.7536, -60.4922]).addTo(map)
        .bindPopup('SARS');

    L.marker([-27.45, -59.0561]).addTo(map)
        .bindPopup('SARE');

    L.marker([-45.0136, -70.8122]).addTo(map)
        .bindPopup('SAVR');

    L.marker([-45.7853, -67.4655]).addTo(map)
        .bindPopup('SAVC');

    L.marker([-42.0292, -71.1725]).addTo(map)
        .bindPopup('SAVD');

    L.marker([-42.908, -71.1395]).addTo(map)
        .bindPopup('SAVE');

    L.marker([-44.0486, -70.4589]).addTo(map)
        .bindPopup('SAWS');

    L.marker([-45.5824, -68.9998]).addTo(map)
        .bindPopup('SAVM');

    L.marker([-42.7592, -65.1027]).addTo(map)
        .bindPopup('SAVY');

    L.marker([-43.2105, -65.2703]).addTo(map)
        .bindPopup('SAVT');

    L.marker([-45.7039, -70.2456]).addTo(map)
        .bindPopup('SAWM');

    L.marker([-31.3236, -64.208]).addTo(map)
        .bindPopup('SACO');

    L.marker([-31.0058, -64.5319]).addTo(map)
        .bindPopup('SACC');

    L.marker([-33.0851, -64.2613]).addTo(map)
        .bindPopup('SAOC');

    L.marker([-31.9452, -65.1463]).addTo(map)
        .bindPopup('SAOD');

    L.marker([-29.6894, -57.1521]).addTo(map)
        .bindPopup('SARL');

    L.marker([-27.4455, -58.7619]).addTo(map)
        .bindPopup('SARC');

    L.marker([-30.2719, -57.6402]).addTo(map)
        .bindPopup('SARM');

    L.marker([-29.2214, -58.0878]).addTo(map)
        .bindPopup('SATM');

    L.marker([-29.1058, -59.2189]).addTo(map)
        .bindPopup('SATG');

    L.marker([-29.7706, -57.9789]).addTo(map)
        .bindPopup('SATU');

    L.marker([-31.2969, -57.9966]).addTo(map)
        .bindPopup('SAAC');

    L.marker([-33.0103, -58.6131]).addTo(map)
        .bindPopup('SAAG');

    L.marker([-31.7948, -60.4804]).addTo(map)
        .bindPopup('SAAP');

    L.marker([-25.3036, -57.7344]).addTo(map)
        .bindPopup('SATC');

    L.marker([-26.2127, -58.2281]).addTo(map)
        .bindPopup('SARF');

    L.marker([-24.7214, -60.5488]).addTo(map)
        .bindPopup('SATK');

    L.marker([-24.3928, -65.0978]).addTo(map)
        .bindPopup('SASJ');

    L.marker([-35.6962, -63.7583]).addTo(map)
        .bindPopup('SAZG');

    L.marker([-36.5883, -64.2757]).addTo(map)
        .bindPopup('SAZR');

    L.marker([-29.3816, -66.7958]).addTo(map)
        .bindPopup('SANL');

    L.marker([-34.5883, -68.4039]).addTo(map)
        .bindPopup('SAMR');

    L.marker([-35.4936, -69.5743]).addTo(map)
        .bindPopup('SAMM');

    L.marker([-32.8317, -68.7929]).addTo(map)
        .bindPopup('SAME');

    L.marker([-26.3975, -54.5747]).addTo(map)
        .bindPopup('SATD');

    L.marker([-25.7373, -54.4734]).addTo(map)
        .bindPopup('SARI');

    L.marker([-27.3858, -55.9707]).addTo(map)
        .bindPopup('SARP');

    L.marker([-38.9755, -70.1136]).addTo(map)
        .bindPopup('SAHZ');

    L.marker([-40.0754, -71.1373]).addTo(map)
        .bindPopup('SAZY');

    L.marker([-38.9397, -69.2646]).addTo(map)
        .bindPopup('SAZW');

    L.marker([-37.8514, -71.0092]).addTo(map)
        .bindPopup('nan');

    L.marker([-37.4447, -70.2225]).addTo(map)
        .bindPopup('SAHC');

    L.marker([-38.0819, -70.6439]).addTo(map)
        .bindPopup('nan');

    L.marker([-38.949, -68.1557]).addTo(map)
        .bindPopup('SAZN');

    L.marker([-37.3906, -68.9042]).addTo(map)
        .bindPopup('SAHS');

    L.marker([-41.1512, -71.1575]).addTo(map)
        .bindPopup('SAZS');

    L.marker([-37.9102, -67.835]).addTo(map)
        .bindPopup('nan');

    L.marker([-41.9432, -71.5323]).addTo(map)
        .bindPopup('SAVB');

    L.marker([-39.0007, -67.6205]).addTo(map)
        .bindPopup('SAHR');

    L.marker([-41.3209, -69.5749]).addTo(map)
        .bindPopup('SAVJ');

    L.marker([-40.8177, -68.0747]).addTo(map)
        .bindPopup('nan');

    L.marker([-41.2431, -68.7078]).addTo(map)
        .bindPopup('SAVQ');

    L.marker([-40.7512, -65.0343]).addTo(map)
        .bindPopup('SAVN');

    L.marker([-41.5917, -65.3394]).addTo(map)
        .bindPopup('SAVS');

    L.marker([-40.7, -66.15]).addTo(map)
        .bindPopup('nan');

    L.marker([-40.8692, -63.0004]).addTo(map)
        .bindPopup('SAVV');

    L.marker([-23.1528, -64.3292]).addTo(map)
        .bindPopup('SASO');

    L.marker([-24.856, -65.4862]).addTo(map)
        .bindPopup('SASA');

    L.marker([-22.6196, -63.7937]).addTo(map)
        .bindPopup('SAST');

    L.marker([-31.5715, -68.4182]).addTo(map)
        .bindPopup('SANU');

    L.marker([-33.2732, -66.3564]).addTo(map)
        .bindPopup('SAOU');

    L.marker([-32.3847, -65.1865]).addTo(map)
        .bindPopup('SAOS');

    L.marker([-33.7299, -65.3874]).addTo(map)
        .bindPopup('SAOR');

    L.marker([-46.4318, -67.5186]).addTo(map)
        .bindPopup('nan');

    L.marker([-50.2803, -72.0531]).addTo(map)
        .bindPopup('SAWA');

    L.marker([-48.7831, -70.15]).addTo(map)
        .bindPopup('SAWR');

    L.marker([-46.5383, -68.9653]).addTo(map)
        .bindPopup('SAVH');

    L.marker([-46.5379, -70.9787]).addTo(map)
        .bindPopup('SAWP');

    L.marker([-47.7353, -65.9041]).addTo(map)
        .bindPopup('SAWD');

    L.marker([-51.6089, -69.3126]).addTo(map)
        .bindPopup('SAWG');

    L.marker([-51.605, -72.2203]).addTo(map)
        .bindPopup('SAWT');

    L.marker([-50.0165, -68.5792]).addTo(map)
        .bindPopup('SAWU');

    L.marker([-49.3068, -67.8026]).addTo(map)
        .bindPopup('SAWJ');

    L.marker([-29.8723, -61.9279]).addTo(map)
        .bindPopup('SANW');

    L.marker([-30.9575, -61.5283]).addTo(map)
        .bindPopup('SAFS');

    L.marker([-31.2825, -61.5017]).addTo(map)
        .bindPopup('SAFR');

    L.marker([-29.2103, -59.68]).addTo(map)
        .bindPopup('SATR');

    L.marker([-32.9036, -60.785]).addTo(map)
        .bindPopup('SAAR');

    L.marker([-31.7117, -60.8117]).addTo(map)
        .bindPopup('SAAV');

    L.marker([-27.4966, -64.936]).addTo(map)
        .bindPopup('SANR');

    L.marker([-27.7656, -64.31]).addTo(map)
        .bindPopup('SANE');

    L.marker([-53.7777, -67.7494]).addTo(map)
        .bindPopup('SAWE');

    L.marker([-54.8433, -68.2958]).addTo(map)
        .bindPopup('SAWH');

    L.marker([-26.8409, -65.1049]).addTo(map)
        .bindPopup('SANT');

    L.marker([-14.1844, -169.67]).addTo(map)
        .bindPopup('NSAS');

    L.marker([-14.331, -170.71]).addTo(map)
        .bindPopup('NSTU');

    L.marker([-14.2292, -169.511]).addTo(map)
        .bindPopup('nan');

    L.marker([46.6425, 14.3377]).addTo(map)
        .bindPopup('LOWK');

    L.marker([48.1103, 16.5697]).addTo(map)
        .bindPopup('LOWW');

    L.marker([48.2332, 14.1875]).addTo(map)
        .bindPopup('LOWL');

    L.marker([47.7933, 13.0043]).addTo(map)
        .bindPopup('LOWS');

    L.marker([46.9911, 15.4396]).addTo(map)
        .bindPopup('LOWG');

    L.marker([47.2602, 11.344]).addTo(map)
        .bindPopup('LOWI');

    L.marker([47.385, 9.7]).addTo(map)
        .bindPopup('LOIH');

    L.marker([-35.3069, 149.195]).addTo(map)
        .bindPopup('YSCB');

    L.marker([-36.0678, 146.958]).addTo(map)
        .bindPopup('YMAY');

    L.marker([-30.5281, 151.617]).addTo(map)
        .bindPopup('YARM');

    L.marker([-33.0667, 151.648]).addTo(map)
        .bindPopup('YLMQ');

    L.marker([-32.0014, 141.472]).addTo(map)
        .bindPopup('YBHI');

    L.marker([-33.4094, 149.652]).addTo(map)
        .bindPopup('YBTH');

    L.marker([-28.8339, 153.562]).addTo(map)
        .bindPopup('YBNA');

    L.marker([-30.0392, 145.952]).addTo(map)
        .bindPopup('YBKE');

    L.marker([-29.9739, 146.817]).addTo(map)
        .bindPopup('YBRW');

    L.marker([-33.9244, 150.988]).addTo(map)
        .bindPopup('YSBK');

    L.marker([-34.6236, 143.578]).addTo(map)
        .bindPopup('YBRN');

    L.marker([-31.5383, 145.794]).addTo(map)
        .bindPopup('YCBA');

    L.marker([-33.0644, 147.209]).addTo(map)
        .bindPopup('YCDO');

    L.marker([-34.0403, 150.687]).addTo(map)
        .bindPopup('YSCN');

    L.marker([-32.7875, 151.342]).addTo(map)
        .bindPopup('YCNK');

    L.marker([-30.3206, 153.116]).addTo(map)
        .bindPopup('YCFS');

    L.marker([-31.7733, 149.61]).addTo(map)
        .bindPopup('YCAH');

    L.marker([-34.6239, 148.028]).addTo(map)
        .bindPopup('YCTM');

    L.marker([-30.9833, 148.376]).addTo(map)
        .bindPopup('YCNM');

    L.marker([-31.3325, 149.267]).addTo(map)
        .bindPopup('YCBB');

    L.marker([-29.5217, 148.582]).addTo(map)
        .bindPopup('YCBR');

    L.marker([-28.8828, 153.067]).addTo(map)
        .bindPopup('YCAS');

    L.marker([-33.2783, 148.763]).addTo(map)
        .bindPopup('YCUA');

    L.marker([-33.8447, 148.649]).addTo(map)
        .bindPopup('YCWR');

    L.marker([-35.9947, 146.357]).addTo(map)
        .bindPopup('YCOR');

    L.marker([-32.2167, 148.575]).addTo(map)
        .bindPopup('YSDU');

    L.marker([-32.5625, 149.611]).addTo(map)
        .bindPopup('YMDG');

    L.marker([-35.5594, 144.946]).addTo(map)
        .bindPopup('YDLQ');

    L.marker([-29.0933, 153.42]).addTo(map)
        .bindPopup('YEVD');

    L.marker([-35.6667, 145.55]).addTo(map)
        .bindPopup('YFIL');

    L.marker([-32.2042, 152.479]).addTo(map)
        .bindPopup('YFST');

    L.marker([-33.3636, 147.935]).addTo(map)
        .bindPopup('YFBS');

    L.marker([-34.0, 148.133]).addTo(map)
        .bindPopup('nan');

    L.marker([-34.2508, 146.067]).addTo(map)
        .bindPopup('YGTH');

    L.marker([-29.7594, 153.03]).addTo(map)
        .bindPopup('YGFN');

    L.marker([-29.675, 151.689]).addTo(map)
        .bindPopup('YGLI');

    L.marker([-33.3678, 151.3]).addTo(map)
        .bindPopup('YSMB');

    L.marker([-30.9611, 150.251]).addTo(map)
        .bindPopup('YGDH');

    L.marker([-34.8103, 149.726]).addTo(map)
        .bindPopup('YGLB');

    L.marker([-34.5314, 144.83]).addTo(map)
        .bindPopup('YHAY');

    L.marker([-29.8883, 151.144]).addTo(map)
        .bindPopup('YIVL');

    L.marker([-31.0744, 152.77]).addTo(map)
        .bindPopup('YKMP');

    L.marker([-33.5871, 151.323]).addTo(map)
        .bindPopup('nan');

    L.marker([-31.5383, 159.077]).addTo(map)
        .bindPopup('YLHI');

    L.marker([-29.4567, 147.984]).addTo(map)
        .bindPopup('YLRD');

    L.marker([-28.8303, 153.26]).addTo(map)
        .bindPopup('YLIS');

    L.marker([-36.9086, 149.901]).addTo(map)
        .bindPopup('YMER');

    L.marker([-29.4989, 149.845]).addTo(map)
        .bindPopup('YMOR');

    L.marker([-32.7013, 151.493]).addTo(map)
        .bindPopup('YMND');

    L.marker([-30.7, 152.917]).addTo(map)
        .bindPopup('nan');

    L.marker([-35.8978, 150.144]).addTo(map)
        .bindPopup('YMRY');

    L.marker([-30.3192, 149.827]).addTo(map)
        .bindPopup('YNBR');

    L.marker([-30.65, 153.0]).addTo(map)
        .bindPopup('YNHS');

    L.marker([-34.2556, 148.248]).addTo(map)
        .bindPopup('YYNG');

    L.marker([-34.9489, 150.537]).addTo(map)
        .bindPopup('YSNW');

    L.marker([-34.7022, 146.512]).addTo(map)
        .bindPopup('YNAR');

    L.marker([-32.0372, 150.832]).addTo(map)
        .bindPopup('YSCO');

    L.marker([-32.795, 151.834]).addTo(map)
        .bindPopup('YWLM');

    L.marker([-31.5511, 147.203]).addTo(map)
        .bindPopup('YNYN');

    L.marker([-33.3817, 149.133]).addTo(map)
        .bindPopup('YORG');

    L.marker([-36.3006, 148.974]).addTo(map)
        .bindPopup('YCOM');

    L.marker([-33.1314, 148.239]).addTo(map)
        .bindPopup('YPKS');

    L.marker([-31.4358, 152.863]).addTo(map)
        .bindPopup('YPMQ');

    L.marker([-33.869, 151.262]).addTo(map)
        .bindPopup('nan');

    L.marker([-32.6008, 151.193]).addTo(map)
        .bindPopup('YSGT');

    L.marker([-33.9461, 151.177]).addTo(map)
        .bindPopup('YSSY');

    L.marker([-35.8117, 145.608]).addTo(map)
        .bindPopup('YTOC');

    L.marker([-34.4214, 147.512]).addTo(map)
        .bindPopup('YTEM');

    L.marker([-31.0839, 150.847]).addTo(map)
        .bindPopup('YSTW');

    L.marker([-31.8886, 152.514]).addTo(map)
        .bindPopup('YTRE');

    L.marker([-35.2628, 148.241]).addTo(map)
        .bindPopup('YTMU');

    L.marker([-29.4511, 142.058]).addTo(map)
        .bindPopup('YTIB');

    L.marker([-31.4906, 150.514]).addTo(map)
        .bindPopup('YQDI');

    L.marker([-20.6406, 134.215]).addTo(map)
        .bindPopup('nan');

    L.marker([-30.2583, 149.408]).addTo(map)
        .bindPopup('YWWA');

    L.marker([-35.1653, 147.466]).addTo(map)
        .bindPopup('YSWG');

    L.marker([-30.0328, 148.126]).addTo(map)
        .bindPopup('YWLG');

    L.marker([-31.5264, 143.375]).addTo(map)
        .bindPopup('YWCA');

    L.marker([-31.0, 151.567]).addTo(map)
        .bindPopup('YWCH');

    L.marker([-34.5611, 150.789]).addTo(map)
        .bindPopup('YWOL');

    L.marker([-33.9372, 147.191]).addTo(map)
        .bindPopup('YWWL');

    L.marker([-33.6006, 150.781]).addTo(map)
        .bindPopup('YSRI');

    L.marker([-21.7383, 135.242]).addTo(map)
        .bindPopup('nan');

    L.marker([-25.0325, 132.275]).addTo(map)
        .bindPopup('nan');

    L.marker([-23.8067, 133.902]).addTo(map)
        .bindPopup('YBAS');

    L.marker([-15.7, 130.0]).addTo(map)
        .bindPopup('YAUV');

    L.marker([-20.5, 137.75]).addTo(map)
        .bindPopup('nan');

    L.marker([-19.0602, 136.71]).addTo(map)
        .bindPopup('YALX');

    L.marker([-19.2908, 136.079]).addTo(map)
        .bindPopup('nan');

    L.marker([-18.0181, 135.535]).addTo(map)
        .bindPopup('nan');

    L.marker([-25.1861, 130.976]).addTo(map)
        .bindPopup('YAYE');

    L.marker([-13.7808, 136.202]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.0753, 136.302]).addTo(map)
        .bindPopup('YBRL');

    L.marker([-11.7692, 130.62]).addTo(map)
        .bindPopup('YBTI');

    L.marker([-18.64, 135.938]).addTo(map)
        .bindPopup('nan');

    L.marker([-13.1981, 136.227]).addTo(map)
        .bindPopup('nan');

    L.marker([-12.9033, 132.532]).addTo(map)
        .bindPopup('YCOO');

    L.marker([-17.0217, 131.327]).addTo(map)
        .bindPopup('YCFD');

    L.marker([-11.165, 132.483]).addTo(map)
        .bindPopup('YCKI');

    L.marker([-15.5483, 130.962]).addTo(map)
        .bindPopup('nan');

    L.marker([-17.948, 135.916]).addTo(map)
        .bindPopup('nan');

    L.marker([-17.607, 131.549]).addTo(map)
        .bindPopup('nan');

    L.marker([-24.86, 129.07]).addTo(map)
        .bindPopup('YDVR');

    L.marker([-12.55, 130.685]).addTo(map)
        .bindPopup('YDLV');

    L.marker([-12.4147, 130.877]).addTo(map)
        .bindPopup('YPDN');

    L.marker([-13.7498, 130.694]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.2647, 133.383]).addTo(map)
        .bindPopup('nan');

    L.marker([-25.2058, 133.254]).addTo(map)
        .bindPopup('nan');

    L.marker([-21.1725, 135.444]).addTo(map)
        .bindPopup('nan');

    L.marker([-12.0194, 135.571]).addTo(map)
        .bindPopup('YELD');

    L.marker([-18.001, 134.863]).addTo(map)
        .bindPopup('nan');

    L.marker([-25.5947, 134.583]).addTo(map)
        .bindPopup('YFNE');

    L.marker([-11.65, 133.382]).addTo(map)
        .bindPopup('YGBI');

    L.marker([-12.2694, 136.818]).addTo(map)
        .bindPopup('YPGV');

    L.marker([-11.4025, 130.422]).addTo(map)
        .bindPopup('YGPT');

    L.marker([-13.975, 136.46]).addTo(map)
        .bindPopup('YGTE');

    L.marker([-26.9483, 133.607]).addTo(map)
        .bindPopup('YTGT');

    L.marker([-23.93, 132.805]).addTo(map)
        .bindPopup('YHMB');

    L.marker([-18.3367, 130.638]).addTo(map)
        .bindPopup('YHOO');

    L.marker([-24.584, 133.236]).addTo(map)
        .bindPopup('YHBY');

    L.marker([-16.4897, 130.63]).addTo(map)
        .bindPopup('YHBR');

    L.marker([-17.8411, 129.643]).addTo(map)
        .bindPopup('YINW');

    L.marker([-12.6583, 132.893]).addTo(map)
        .bindPopup('YJAB');

    L.marker([-17.7792, 129.21]).addTo(map)
        .bindPopup('nan');

    L.marker([-24.26, 131.49]).addTo(map)
        .bindPopup('YKCA');

    L.marker([-24.4233, 131.835]).addTo(map)
        .bindPopup('YKCS');

    L.marker([-17.4319, 130.808]).addTo(map)
        .bindPopup('YKKG');

    L.marker([-25.8428, 133.292]).addTo(map)
        .bindPopup('nan');

    L.marker([-20.51, 134.671]).addTo(map)
        .bindPopup('nan');

    L.marker([-14.5211, 132.378]).addTo(map)
        .bindPopup('YPTN');

    L.marker([-12.4989, 135.806]).addTo(map)
        .bindPopup('YLEV');

    L.marker([-17.2356, 129.882]).addTo(map)
        .bindPopup('nan');

    L.marker([-20.9807, 137.918]).addTo(map)
        .bindPopup('YLKN');

    L.marker([-16.4425, 136.084]).addTo(map)
        .bindPopup('YMHU');

    L.marker([-22.1, 137.983]).addTo(map)
        .bindPopup('YMCR');

    L.marker([-12.0944, 134.894]).addTo(map)
        .bindPopup('YMGB');

    L.marker([-18.8093, 137.081]).addTo(map)
        .bindPopup('nan');

    L.marker([-14.0533, 134.094]).addTo(map)
        .bindPopup('nan');

    L.marker([-25.9667, 133.2]).addTo(map)
        .bindPopup('YMVG');

    L.marker([-12.0561, 134.234]).addTo(map)
        .bindPopup('YMGD');

    L.marker([-14.1167, 133.833]).addTo(map)
        .bindPopup('nan');

    L.marker([-22.444, 135.199]).addTo(map)
        .bindPopup('YMDS');

    L.marker([-22.8058, 137.251]).addTo(map)
        .bindPopup('YMQA');

    L.marker([-14.8181, 133.701]).addTo(map)
        .bindPopup('nan');

    L.marker([-22.6247, 135.035]).addTo(map)
        .bindPopup('YMNS');

    L.marker([-16.9783, 130.555]).addTo(map)
        .bindPopup('YMSF');

    L.marker([-25.86, 131.65]).addTo(map)
        .bindPopup('YMUP');

    L.marker([-22.5312, 133.763]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.0442, 129.264]).addTo(map)
        .bindPopup('nan');

    L.marker([-14.2717, 135.717]).addTo(map)
        .bindPopup('YNUM');

    L.marker([-14.1442, 130.091]).addTo(map)
        .bindPopup('nan');

    L.marker([-14.25, 129.529]).addTo(map)
        .bindPopup('YKPT');

    L.marker([-12.3564, 134.898]).addTo(map)
        .bindPopup('YRNG');

    L.marker([-18.9533, 135.201]).addTo(map)
        .bindPopup('YRKD');

    L.marker([-14.7348, 134.525]).addTo(map)
        .bindPopup('YRRB');

    L.marker([-14.7228, 134.747]).addTo(map)
        .bindPopup('YNGU');

    L.marker([-14.9215, 134.05]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.7183, 136.945]).addTo(map)
        .bindPopup('nan');

    L.marker([-11.15, 132.15]).addTo(map)
        .bindPopup('YSMP');

    L.marker([-11.4228, 130.654]).addTo(map)
        .bindPopup('YSNB');

    L.marker([-15.62, 130.445]).addTo(map)
        .bindPopup('YTBR');

    L.marker([-19.6344, 134.183]).addTo(map)
        .bindPopup('YTNK');

    L.marker([-22.2558, 137.953]).addTo(map)
        .bindPopup('YTMY');

    L.marker([-15.8074, 134.146]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.4021, 131.005]).addTo(map)
        .bindPopup('YVRD');

    L.marker([-17.3933, 131.118]).addTo(map)
        .bindPopup('YWAV');

    L.marker([-17.2199, 137.935]).addTo(map)
        .bindPopup('YWOR');

    L.marker([-16.63, 129.32]).addTo(map)
        .bindPopup('YWTL');

    L.marker([-22.2542, 131.782]).addTo(map)
        .bindPopup('YYND');

    L.marker([-26.693, 141.048]).addTo(map)
        .bindPopup('YARY');

    L.marker([-17.6167, 143.167]).addTo(map)
        .bindPopup('YABI');

    L.marker([-23.6461, 146.584]).addTo(map)
        .bindPopup('YAPH');

    L.marker([-10.9508, 142.459]).addTo(map)
        .bindPopup('YNPE');

    L.marker([-12.1456, 142.149]).addTo(map)
        .bindPopup('nan');

    L.marker([-18.515, 139.878]).addTo(map)
        .bindPopup('YAGD');

    L.marker([-13.3541, 141.721]).addTo(map)
        .bindPopup('YAUR');

    L.marker([-22.9667, 145.242]).addTo(map)
        .bindPopup('YAMC');

    L.marker([-19.5844, 147.329]).addTo(map)
        .bindPopup('YAYR');

    L.marker([-27.4056, 141.809]).addTo(map)
        .bindPopup('YLLE');

    L.marker([-23.5653, 145.307]).addTo(map)
        .bindPopup('YBAR');

    L.marker([-17.3883, 144.169]).addTo(map)
        .bindPopup('nan');

    L.marker([-24.9039, 152.319]).addTo(map)
        .bindPopup('YBUD');

    L.marker([-10.15, 142.173]).addTo(map)
        .bindPopup('YBAU');

    L.marker([-24.3461, 139.46]).addTo(map)
        .bindPopup('YBIE');

    L.marker([-15.8736, 145.33]).addTo(map)
        .bindPopup('nan');

    L.marker([-23.3639, 141.563]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.8808, 143.479]).addTo(map)
        .bindPopup('nan');

    L.marker([-20.4958, 138.475]).addTo(map)
        .bindPopup('YBAW');

    L.marker([-24.4278, 145.429]).addTo(map)
        .bindPopup('YBCK');

    L.marker([-28.0583, 147.483]).addTo(map)
        .bindPopup('YBLL');

    L.marker([-23.6031, 148.807]).addTo(map)
        .bindPopup('YBTR');

    L.marker([-20.8033, 149.27]).addTo(map)
        .bindPopup('YBPI');

    L.marker([-27.3842, 153.117]).addTo(map)
        .bindPopup('YBBN');

    L.marker([-22.9133, 139.9]).addTo(map)
        .bindPopup('YBOU');

    L.marker([-25.6417, 140.783]).addTo(map)
        .bindPopup('YBEO');

    L.marker([-17.7486, 139.534]).addTo(map)
        .bindPopup('YBKT');

    L.marker([-25.8975, 139.348]).addTo(map)
        .bindPopup('YBDV');

    L.marker([-12.6592, 142.675]).addTo(map)
        .bindPopup('nan');

    L.marker([-14.7403, 144.119]).addTo(map)
        .bindPopup('nan');

    L.marker([-19.4794, 140.927]).addTo(map)
        .bindPopup('nan');

    L.marker([-26.775, 150.617]).addTo(map)
        .bindPopup('YCCA');

    L.marker([-18.225, 142.258]).addTo(map)
        .bindPopup('YCRY');

    L.marker([-18.7167, 144.317]).addTo(map)
        .bindPopup('nan');

    L.marker([-28.03, 145.622]).addTo(map)
        .bindPopup('YCMU');

    L.marker([-19.9117, 138.125]).addTo(map)
        .bindPopup('YCMW');

    L.marker([-22.7731, 147.621]).addTo(map)
        .bindPopup('YCMT');

    L.marker([-10.05, 143.07]).addTo(map)
        .bindPopup('YCCT');

    L.marker([-20.6686, 140.504]).addTo(map)
        .bindPopup('YCCY');

    L.marker([-16.8858, 145.755]).addTo(map)
        .bindPopup('YBCS');

    L.marker([-14.9708, 145.312]).addTo(map)
        .bindPopup('nan');

    L.marker([-28.4301, 152.089]).addTo(map)
        .bindPopup('nan');

    L.marker([-26.4133, 146.262]).addTo(map)
        .bindPopup('YBCV');

    L.marker([-15.4447, 145.184]).addTo(map)
        .bindPopup('YCKN');

    L.marker([-26.8, 153.1]).addTo(map)
        .bindPopup('YCDR');

    L.marker([-13.7611, 143.113]).addTo(map)
        .bindPopup('YCOE');

    L.marker([-20.0431, 146.273]).addTo(map)
        .bindPopup('YCHT');

    L.marker([-24.5167, 139.617]).addTo(map)
        .bindPopup('YUNY');

    L.marker([-27.1553, 151.267]).addTo(map)
        .bindPopup('YDAY');

    L.marker([-16.9917, 141.317]).addTo(map)
        .bindPopup('YDLT');

    L.marker([-16.053, 143.012]).addTo(map)
        .bindPopup('nan');

    L.marker([-27.075, 141.9]).addTo(map)
        .bindPopup('YDRH');

    L.marker([-17.9417, 146.14]).addTo(map)
        .bindPopup('YDKI');

    L.marker([-17.9403, 138.822]).addTo(map)
        .bindPopup('YDMG');

    L.marker([-16.05, 142.4]).addTo(map)
        .bindPopup('YDBR');

    L.marker([-16.5537, 141.824]).addTo(map)
        .bindPopup('YDOR');

    L.marker([-28.5917, 148.217]).addTo(map)
        .bindPopup('YDBI');

    L.marker([-25.685, 140.228]).addTo(map)
        .bindPopup('YDRI');

    L.marker([-24.15, 141.108]).addTo(map)
        .bindPopup('YDPD');

    L.marker([-15.1175, 143.316]).addTo(map)
        .bindPopup('YDIX');

    L.marker([-22.6222, 148.364]).addTo(map)
        .bindPopup('YDYS');

    L.marker([-23.7617, 141.145]).addTo(map)
        .bindPopup('nan');

    L.marker([-14.8965, 141.609]).addTo(map)
        .bindPopup('YPMP');

    L.marker([-18.5033, 144.094]).addTo(map)
        .bindPopup('nan');

    L.marker([-23.5675, 148.179]).addTo(map)
        .bindPopup('YEML');

    L.marker([-20.9764, 141.007]).addTo(map)
        .bindPopup('YESE');

    L.marker([-25.6144, 151.619]).addTo(map)
        .bindPopup('YGAY');

    L.marker([-16.55, 143.667]).addTo(map)
        .bindPopup('YGAM');

    L.marker([-18.625, 139.233]).addTo(map)
        .bindPopup('YGDS');

    L.marker([-9.23278, 142.218]).addTo(map)
        .bindPopup('YBOI');

    L.marker([-23.1833, 150.942]).addTo(map)
        .bindPopup('YGKL');

    L.marker([-24.8083, 139.6]).addTo(map)
        .bindPopup('YGLE');

    L.marker([-22.8883, 138.825]).addTo(map)
        .bindPopup('YGLO');

    L.marker([-23.8697, 151.223]).addTo(map)
        .bindPopup('YGLA');

    L.marker([-28.5214, 150.32]).addTo(map)
        .bindPopup('YGDI');

    L.marker([-19.7726, 139.404]).addTo(map)
        .bindPopup('YGON');

    L.marker([-18.305, 143.53]).addTo(map)
        .bindPopup('YGTN');

    L.marker([-18.9966, 145.014]).addTo(map)
        .bindPopup('YGNV');

    L.marker([-26.2828, 152.702]).addTo(map)
        .bindPopup('YGYM');

    L.marker([-11.7369, 142.577]).addTo(map)
        .bindPopup('YHTL');

    L.marker([-20.815, 144.225]).addTo(map)
        .bindPopup('YHUG');

    L.marker([-10.5864, 142.29]).addTo(map)
        .bindPopup('YHID');

    L.marker([-16.4244, 143.146]).addTo(map)
        .bindPopup('YHHY');

    L.marker([-21.3333, 138.283]).addTo(map)
        .bindPopup('YHDY');

    L.marker([-15.6858, 145.215]).addTo(map)
        .bindPopup('nan');

    L.marker([-15.2923, 145.104]).addTo(map)
        .bindPopup('nan');

    L.marker([-20.3581, 148.952]).addTo(map)
        .bindPopup('YBHM');

    L.marker([-25.3189, 152.88]).addTo(map)
        .bindPopup('YHBA');

    L.marker([-18.9, 141.217]).addTo(map)
        .bindPopup('YIFY');

    L.marker([-17.5594, 146.012]).addTo(map)
        .bindPopup('YIFL');

    L.marker([-18.6606, 146.152]).addTo(map)
        .bindPopup('YIGM');

    L.marker([-16.275, 141.442]).addTo(map)
        .bindPopup('YIKM');

    L.marker([-25.851, 148.55]).addTo(map)
        .bindPopup('YINJ');

    L.marker([-12.7869, 143.305]).addTo(map)
        .bindPopup('YLHR');

    L.marker([-20.6639, 139.489]).addTo(map)
        .bindPopup('YBMA');

    L.marker([-24.2583, 144.425]).addTo(map)
        .bindPopup('YISF');

    L.marker([-20.6683, 141.723]).addTo(map)
        .bindPopup('YJLC');

    L.marker([-24.8417, 143.058]).addTo(map)
        .bindPopup('YJDA');

    L.marker([-20.5967, 147.86]).addTo(map)
        .bindPopup('YCSV');

    L.marker([-24.3388, 139.279]).addTo(map)
        .bindPopup('nan');

    L.marker([-26.5808, 151.841]).addTo(map)
        .bindPopup('YKRY');

    L.marker([-15.3189, 143.955]).addTo(map)
        .bindPopup('YKLB');

    L.marker([-19.375, 140.057]).addTo(map)
        .bindPopup('YKML');

    L.marker([-15.8886, 142.439]).addTo(map)
        .bindPopup('YKLA');

    L.marker([-14.89, 144.22]).addTo(map)
        .bindPopup('YKPR');

    L.marker([-17.4567, 140.83]).addTo(map)
        .bindPopup('YKMB');

    L.marker([-23.55, 140.7]).addTo(map)
        .bindPopup('YSPV');

    L.marker([-10.225, 142.218]).addTo(map)
        .bindPopup('YKUB');

    L.marker([-15.4856, 141.751]).addTo(map)
        .bindPopup('YKOW');

    L.marker([-20.4536, 149.04]).addTo(map)
        .bindPopup('YLIN');

    L.marker([-14.9207, 144.203]).addTo(map)
        .bindPopup('YLFD');

    L.marker([-15.8333, 144.85]).addTo(map)
        .bindPopup('YLND');

    L.marker([-17.1428, 144.529]).addTo(map)
        .bindPopup('YCGO');

    L.marker([-23.0167, 138.7]).addTo(map)
        .bindPopup('nan');

    L.marker([-18.9933, 139.907]).addTo(map)
        .bindPopup('YLOR');

    L.marker([-23.4342, 144.28]).addTo(map)
        .bindPopup('YLRE');

    L.marker([-19.1958, 144.371]).addTo(map)
        .bindPopup('YLHS');

    L.marker([-17.0483, 141.376]).addTo(map)
        .bindPopup('YLOV');

    L.marker([-15.1833, 144.367]).addTo(map)
        .bindPopup('YLRS');

    L.marker([-15.55, 144.45]).addTo(map)
        .bindPopup('YLRA');

    L.marker([-18.5683, 138.635]).addTo(map)
        .bindPopup('YLAH');

    L.marker([-24.1129, 152.716]).addTo(map)
        .bindPopup('nan');

    L.marker([-14.6733, 145.455]).addTo(map)
        .bindPopup('YLZI');

    L.marker([-25.5133, 152.715]).addTo(map)
        .bindPopup('YMYB');

    L.marker([-26.6033, 153.091]).addTo(map)
        .bindPopup('YBSU');

    L.marker([-12.4442, 142.638]).addTo(map)
        .bindPopup('YMOT');

    L.marker([-19.67, 144.885]).addTo(map)
        .bindPopup('nan');

    L.marker([-21.1717, 149.18]).addTo(map)
        .bindPopup('YBMK');

    L.marker([-13.0649, 142.454]).addTo(map)
        .bindPopup('YMEU');

    L.marker([-22.8025, 148.705]).addTo(map)
        .bindPopup('YMMU');

    L.marker([-24.8858, 151.1]).addTo(map)
        .bindPopup('YMTO');

    L.marker([-22.0578, 148.077]).addTo(map)
        .bindPopup('YMRB');

    L.marker([-17.0692, 145.419]).addTo(map)
        .bindPopup('YMBA');

    L.marker([46.3834, -82.6331]).addTo(map)
        .bindPopup('nan');

    L.marker([-26.4833, 147.937]).addTo(map)
        .bindPopup('YMIT');

    L.marker([-14.7757, 143.505]).addTo(map)
        .bindPopup('YMGV');

    L.marker([-17.3289, 141.886]).addTo(map)
        .bindPopup('YMIR');

    L.marker([-23.3637, 139.65]).addTo(map)
        .bindPopup('YMWX');

    L.marker([-9.91667, 144.055]).addTo(map)
        .bindPopup('YMAE');

    L.marker([-9.58333, 143.767]).addTo(map)
        .bindPopup('YDNI');

    L.marker([-19.2, 145.773]).addTo(map)
        .bindPopup('nan');

    L.marker([-27.5583, 141.133]).addTo(map)
        .bindPopup('YNAP');

    L.marker([-26.4233, 153.063]).addTo(map)
        .bindPopup('YNSH');

    L.marker([-17.6841, 141.07]).addTo(map)
        .bindPopup('YNTN');

    L.marker([56.4657, -5.3977]).addTo(map)
        .bindPopup('nan');

    L.marker([-24.9594, 153.315]).addTo(map)
        .bindPopup('YORC');

    L.marker([-9.7528, 143.406]).addTo(map)
        .bindPopup('YYKI');

    L.marker([-27.4114, 151.735]).addTo(map)
        .bindPopup('YBOK');

    L.marker([-16.6625, 139.178]).addTo(map)
        .bindPopup('YMTI');

    L.marker([-24.8167, 140.533]).addTo(map)
        .bindPopup('YMNK');

    L.marker([-28.1644, 153.505]).addTo(map)
        .bindPopup('YBCG');

    L.marker([-25.25, 140.983]).addTo(map)
        .bindPopup('YMOO');

    L.marker([-12.325, 133.006]).addTo(map)
        .bindPopup('YOEN');

    L.marker([-18.634, 146.5]).addTo(map)
        .bindPopup('nan');

    L.marker([-22.0817, 140.555]).addTo(map)
        .bindPopup('YOSB');

    L.marker([-28.0598, 141.536]).addTo(map)
        .bindPopup('nan');

    L.marker([-25.3583, 141.433]).addTo(map)
        .bindPopup('YMNY');

    L.marker([-21.8111, 139.924]).addTo(map)
        .bindPopup('YTMO');

    L.marker([-18.7553, 146.581]).addTo(map)
        .bindPopup('YPAM');

    L.marker([-20.495, 148.552]).addTo(map)
        .bindPopup('YBPN');

    L.marker([-20.7019, 143.115]).addTo(map)
        .bindPopup('YRMD');

    L.marker([-13.6434, 142.641]).addTo(map)
        .bindPopup('nan');

    L.marker([-18.4253, 144.459]).addTo(map)
        .bindPopup('nan');

    L.marker([-26.545, 148.775]).addTo(map)
        .bindPopup('YROM');

    L.marker([-18.845, 143.71]).addTo(map)
        .bindPopup('YROB');

    L.marker([-23.3819, 150.475]).addTo(map)
        .bindPopup('YBRK');

    L.marker([-25.8333, 139.65]).addTo(map)
        .bindPopup('YRSB');

    L.marker([-15.6433, 141.843]).addTo(map)
        .bindPopup('YRTP');

    L.marker([-9.37833, 142.625]).addTo(map)
        .bindPopup('YSII');

    L.marker([-18.6333, 144.567]).addTo(map)
        .bindPopup('YSPK');

    L.marker([-28.0497, 148.595]).addTo(map)
        .bindPopup('YSGE');

    L.marker([-27.9221, 153.372]).addTo(map)
        .bindPopup('YSPT');

    L.marker([-28.6203, 151.991]).addTo(map)
        .bindPopup('YSPE');

    L.marker([-24.0568, 139.082]).addTo(map)
        .bindPopup('nan');

    L.marker([-27.5167, 153.428]).addTo(map)
        .bindPopup('nan');

    L.marker([-13.9754, 143.554]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.51, 143.55]).addTo(map)
        .bindPopup('YSTI');

    L.marker([-17.85, 142.567]).addTo(map)
        .bindPopup('YSMR');

    L.marker([-10.3667, 142.117]).addTo(map)
        .bindPopup('nan');

    L.marker([-10.2083, 142.825]).addTo(map)
        .bindPopup('YWBS');

    L.marker([-27.13, 153.363]).addTo(map)
        .bindPopup('YTGA');

    L.marker([-24.9933, 150.093]).addTo(map)
        .bindPopup('YTDR');

    L.marker([-24.4939, 150.576]).addTo(map)
        .bindPopup('YTNG');

    L.marker([-21.835, 140.888]).addTo(map)
        .bindPopup('YTEE');

    L.marker([-19.2525, 146.765]).addTo(map)
        .bindPopup('YBTL');

    L.marker([-27.5428, 151.916]).addTo(map)
        .bindPopup('YTWB');

    L.marker([-26.388, 153.028]).addTo(map)
        .bindPopup('nan');

    L.marker([-17.3633, 143.75]).addTo(map)
        .bindPopup('nan');

    L.marker([-25.8478, 141.928]).addTo(map)
        .bindPopup('nan');

    L.marker([-26.0833, 143.467]).addTo(map)
        .bindPopup('YTHY');

    L.marker([-9.95, 142.183]).addTo(map)
        .bindPopup('YMAA');

    L.marker([-18.2, 144.6]).addTo(map)
        .bindPopup('YUDA');

    L.marker([-26.6122, 144.253]).addTo(map)
        .bindPopup('YQLP');

    L.marker([-22.5833, 144.533]).addTo(map)
        .bindPopup('YMTB');

    L.marker([-16.9633, 141.95]).addTo(map)
        .bindPopup('YVRS');

    L.marker([-25.3563, 141.925]).addTo(map)
        .bindPopup('nan');

    L.marker([-28.1494, 151.943]).addTo(map)
        .bindPopup('YWCK');

    L.marker([-26.2833, 151.858]).addTo(map)
        .bindPopup('YWND');

    L.marker([-12.6786, 141.925]).addTo(map)
        .bindPopup('YBWP');

    L.marker([-22.3636, 143.086]).addTo(map)
        .bindPopup('YWTN');

    L.marker([-26.8083, 150.175]).addTo(map)
        .bindPopup('YMLS');

    L.marker([-25.4131, 142.667]).addTo(map)
        .bindPopup('YWDH');

    L.marker([-18.575, 140.892]).addTo(map)
        .bindPopup('YWDL');

    L.marker([-16.6583, 144.002]).addTo(map)
        .bindPopup('YWMP');

    L.marker([-20.2761, 148.755]).addTo(map)
        .bindPopup('YSHR');

    L.marker([-27.5583, 151.793]).addTo(map)
        .bindPopup('YBWW');

    L.marker([-9.90111, 142.776]).addTo(map)
        .bindPopup('YYMI');

    L.marker([-27.9864, 143.811]).addTo(map)
        .bindPopup('YTGM');

    L.marker([-25.8017, 149.9]).addTo(map)
        .bindPopup('YTAM');

    L.marker([-27.1567, 150.477]).addTo(map)
        .bindPopup('YTAA');

    L.marker([-24.4, 150.51]).addTo(map)
        .bindPopup('nan');

    L.marker([-20.0183, 148.215]).addTo(map)
        .bindPopup('YBWN');

    L.marker([-25.6833, 142.108]).addTo(map)
        .bindPopup('YSGW');

    L.marker([-34.945, 138.531]).addTo(map)
        .bindPopup('YPAD');

    L.marker([-30.4383, 137.137]).addTo(map)
        .bindPopup('YAMK');

    L.marker([-26.1083, 131.207]).addTo(map)
        .bindPopup('YAMT');

    L.marker([-26.5333, 139.267]).addTo(map)
        .bindPopup('nan');

    L.marker([-33.6667, 136.892]).addTo(map)
        .bindPopup('YCWL');

    L.marker([-32.1306, 133.71]).addTo(map)
        .bindPopup('YCDU');

    L.marker([-27.0183, 138.892]).addTo(map)
        .bindPopup('nan');

    L.marker([-29.04, 134.721]).addTo(map)
        .bindPopup('YCBP');

    L.marker([-31.8944, 132.296]).addTo(map)
        .bindPopup('nan');

    L.marker([-33.7097, 136.505]).addTo(map)
        .bindPopup('YCEE');

    L.marker([-27.7117, 138.328]).addTo(map)
        .bindPopup('YCWI');

    L.marker([-29.0133, 138.481]).addTo(map)
        .bindPopup('YDLK');

    L.marker([-26.2633, 132.182]).addTo(map)
        .bindPopup('YERN');

    L.marker([-28.7408, 138.589]).addTo(map)
        .bindPopup('YEDA');

    L.marker([-31.4597, 137.174]).addTo(map)
        .bindPopup('YMGN');

    L.marker([-31.8559, 138.468]).addTo(map)
        .bindPopup('YHAW');

    L.marker([-26.9667, 133.325]).addTo(map)
        .bindPopup('YIDK');

    L.marker([-27.7, 140.733]).addTo(map)
        .bindPopup('YINN');

    L.marker([-32.8358, 134.293]).addTo(map)
        .bindPopup('YKBY');

    L.marker([-35.7139, 137.521]).addTo(map)
        .bindPopup('YKSC');

    L.marker([-31.4706, 131.825]).addTo(map)
        .bindPopup('YYTA');

    L.marker([-30.535, 139.337]).addTo(map)
        .bindPopup('YBLC');

    L.marker([-30.5983, 138.426]).addTo(map)
        .bindPopup('YLEC');

    L.marker([-33.5442, 135.693]).addTo(map)
        .bindPopup('YLOK');

    L.marker([-37.7456, 140.785]).addTo(map)
        .bindPopup('YMTG');

    L.marker([-32.8433, 135.145]).addTo(map)
        .bindPopup('YMPA');

    L.marker([-37.5836, 140.366]).addTo(map)
        .bindPopup('YMCT');

    L.marker([-28.0092, 138.657]).addTo(map)
        .bindPopup('YMUG');

    L.marker([-28.0994, 140.197]).addTo(map)
        .bindPopup('YOOM');

    L.marker([-27.3333, 133.627]).addTo(map)
        .bindPopup('YALA');

    L.marker([-28.3478, 138.65]).addTo(map)
        .bindPopup('YMUK');

    L.marker([-29.9069, 139.765]).addTo(map)
        .bindPopup('YMWT');

    L.marker([-36.9853, 140.725]).addTo(map)
        .bindPopup('YNRC');

    L.marker([-31.4417, 130.902]).addTo(map)
        .bindPopup('YNUB');

    L.marker([-27.5617, 135.447]).addTo(map)
        .bindPopup('YOOD');

    L.marker([-26.7453, 140.638]).addTo(map)
        .bindPopup('YCOD');

    L.marker([-30.485, 136.877]).addTo(map)
        .bindPopup('YOLD');

    L.marker([-35.0, 137.617]).addTo(map)
        .bindPopup('YYOR');

    L.marker([-26.1167, 139.4]).addTo(map)
        .bindPopup('YPDI');

    L.marker([-35.807, 137.264]).addTo(map)
        .bindPopup('nan');

    L.marker([-35.7558, 137.963]).addTo(map)
        .bindPopup('YPSH');

    L.marker([-31.9167, 133.0]).addTo(map)
        .bindPopup('nan');

    L.marker([-34.6053, 135.88]).addTo(map)
        .bindPopup('YPLC');

    L.marker([-33.2389, 137.995]).addTo(map)
        .bindPopup('YPIR');

    L.marker([-32.5069, 137.717]).addTo(map)
        .bindPopup('YPAG');

    L.marker([-29.716, 135.524]).addTo(map)
        .bindPopup('YPMH');

    L.marker([-35.7574, 137.776]).addTo(map)
        .bindPopup('nan');

    L.marker([-34.1964, 140.674]).addTo(map)
        .bindPopup('YREN');

    L.marker([-29.6633, 138.065]).addTo(map)
        .bindPopup('YMRE');

    L.marker([-28.5833, 140.317]).addTo(map)
        .bindPopup('YMYT');

    L.marker([-30.7033, 134.584]).addTo(map)
        .bindPopup('nan');

    L.marker([-31.1442, 136.817]).addTo(map)
        .bindPopup('YPWR');

    L.marker([-33.0433, 135.447]).addTo(map)
        .bindPopup('YWUD');

    L.marker([-33.0589, 137.514]).addTo(map)
        .bindPopup('YWHA');

    L.marker([-34.75, 137.533]).addTo(map)
        .bindPopup('YMIN');

    L.marker([-40.9989, 145.731]).addTo(map)
        .bindPopup('YWYY');

    L.marker([-40.3917, 148.017]).addTo(map)
        .bindPopup('nan');

    L.marker([-41.1697, 146.43]).addTo(map)
        .bindPopup('YDPO');

    L.marker([-40.0917, 147.993]).addTo(map)
        .bindPopup('YFLI');

    L.marker([-41.08, 146.84]).addTo(map)
        .bindPopup('YGTO');

    L.marker([-42.8361, 147.51]).addTo(map)
        .bindPopup('YMHB');

    L.marker([-41.3367, 148.282]).addTo(map)
        .bindPopup('YSTH');

    L.marker([-39.8775, 143.878]).addTo(map)
        .bindPopup('YKII');

    L.marker([-41.5453, 147.214]).addTo(map)
        .bindPopup('YMLT');

    L.marker([-41.2352, 146.396]).addTo(map)
        .bindPopup('nan');

    L.marker([-40.835, 145.084]).addTo(map)
        .bindPopup('YSMI');

    L.marker([-42.155, 145.292]).addTo(map)
        .bindPopup('YSRN');

    L.marker([-42.075, 145.532]).addTo(map)
        .bindPopup('YQNS');

    L.marker([-37.3094, 142.989]).addTo(map)
        .bindPopup('YARA');

    L.marker([-38.0394, 144.469]).addTo(map)
        .bindPopup('YMAV');

    L.marker([-36.5519, 146.007]).addTo(map)
        .bindPopup('YBLA');

    L.marker([-36.733, 146.967]).addTo(map)
        .bindPopup('nan');

    L.marker([-37.8875, 147.568]).addTo(map)
        .bindPopup('YBNS');

    L.marker([-36.7394, 144.33]).addTo(map)
        .bindPopup('YBDG');

    L.marker([-36.1828, 147.888]).addTo(map)
        .bindPopup('YCRG');

    L.marker([-36.1572, 144.762]).addTo(map)
        .bindPopup('YECH');

    L.marker([-38.225, 144.333]).addTo(map)
        .bindPopup('YGLG');

    L.marker([-37.6489, 142.065]).addTo(map)
        .bindPopup('YHML');

    L.marker([-36.6697, 142.173]).addTo(map)
        .bindPopup('YHSM');

    L.marker([-35.7153, 142.36]).addTo(map)
        .bindPopup('YHPN');

    L.marker([-35.7514, 143.939]).addTo(map)
        .bindPopup('YKER');

    L.marker([-36.7187, 146.89]).addTo(map)
        .bindPopup('YPOK');

    L.marker([-37.9758, 145.102]).addTo(map)
        .bindPopup('YMMB');

    L.marker([-37.7281, 144.902]).addTo(map)
        .bindPopup('YMEN');

    L.marker([-37.6733, 144.843]).addTo(map)
        .bindPopup('YMML');

    L.marker([-37.0475, 147.334]).addTo(map)
        .bindPopup('YHOT');

    L.marker([-34.2292, 142.086]).addTo(map)
        .bindPopup('YMIA');

    L.marker([-35.089, 142.354]).addTo(map)
        .bindPopup('YOUY');

    L.marker([-38.3181, 141.471]).addTo(map)
        .bindPopup('YPOD');

    L.marker([-34.65, 142.783]).addTo(map)
        .bindPopup('YROI');

    L.marker([-37.79, 148.61]).addTo(map)
        .bindPopup('YORB');

    L.marker([-36.4289, 145.393]).addTo(map)
        .bindPopup('YSHT');

    L.marker([-37.0717, 142.741]).addTo(map)
        .bindPopup('YSWL');

    L.marker([-35.3758, 143.533]).addTo(map)
        .bindPopup('YSWH');

    L.marker([-38.0908, 146.965]).addTo(map)
        .bindPopup('YWSL');

    L.marker([-38.2072, 146.47]).addTo(map)
        .bindPopup('YLTV');

    L.marker([-36.4158, 146.307]).addTo(map)
        .bindPopup('YWGT');

    L.marker([-38.6824, 146.445]).addTo(map)
        .bindPopup('nan');

    L.marker([-36.3211, 142.419]).addTo(map)
        .bindPopup('YWKB');

    L.marker([-38.2953, 142.447]).addTo(map)
        .bindPopup('YWBL');

    L.marker([-38.2867, 143.68]).addTo(map)
        .bindPopup('YOLA');

    L.marker([-37.5983, 149.72]).addTo(map)
        .bindPopup('YMCO');

    L.marker([-34.9433, 117.809]).addTo(map)
        .bindPopup('YABA');

    L.marker([-17.2867, 127.463]).addTo(map)
        .bindPopup('YBDF');

    L.marker([-17.0165, 122.646]).addTo(map)
        .bindPopup('nan');

    L.marker([-19.5667, 127.667]).addTo(map)
        .bindPopup('nan');

    L.marker([-17.9447, 122.232]).addTo(map)
        .bindPopup('YBRM');

    L.marker([-33.6884, 115.402]).addTo(map)
        .bindPopup('YBLN');

    L.marker([-20.1483, 127.973]).addTo(map)
        .bindPopup('YBGO');

    L.marker([-33.3783, 115.677]).addTo(map)
        .bindPopup('YBUN');

    L.marker([-16.7333, 125.433]).addTo(map)
        .bindPopup('YBYS');

    L.marker([-20.8644, 115.406]).addTo(map)
        .bindPopup('YBWX');

    L.marker([-17.545, 128.305]).addTo(map)
        .bindPopup('YBEB');

    L.marker([-22.6739, 119.166]).addTo(map)
        .bindPopup('YBRY');

    L.marker([-18.9178, 125.538]).addTo(map)
        .bindPopup('nan');

    L.marker([-32.265, 125.493]).addTo(map)
        .bindPopup('YCAG');

    L.marker([-33.3667, 116.217]).addTo(map)
        .bindPopup('YCOI');

    L.marker([-22.9667, 118.813]).addTo(map)
        .bindPopup('YCWA');

    L.marker([-22.3543, 119.643]).addTo(map)
        .bindPopup('YCHK');

    L.marker([-21.7946, 117.755]).addTo(map)
        .bindPopup('YCWY');

    L.marker([-15.5019, 128.534]).addTo(map)
        .bindPopup('nan');

    L.marker([-27.4467, 117.918]).addTo(map)
        .bindPopup('YCUE');

    L.marker([-24.8802, 113.672]).addTo(map)
        .bindPopup('YCAR');

    L.marker([-22.3567, 119.652]).addTo(map)
        .bindPopup('YCHK');

    L.marker([-17.5814, 123.828]).addTo(map)
        .bindPopup('YCIN');

    L.marker([-27.8303, 117.316]).addTo(map)
        .bindPopup('YDGA');

    L.marker([-15.3864, 126.302]).addTo(map)
        .bindPopup('nan');

    L.marker([-25.8882, 113.577]).addTo(map)
        .bindPopup('nan');

    L.marker([-29.2981, 114.927]).addTo(map)
        .bindPopup('YDRA');

    L.marker([-17.37, 123.661]).addTo(map)
        .bindPopup('YDBY');

    L.marker([-15.7136, 126.381]).addTo(map)
        .bindPopup('YDRD');

    L.marker([-29.8325, 115.246]).addTo(map)
        .bindPopup('YEEB');

    L.marker([-33.6844, 121.823]).addTo(map)
        .bindPopup('YESP');

    L.marker([-31.7, 128.883]).addTo(map)
        .bindPopup('YECL');

    L.marker([-22.0333, 114.1]).addTo(map)
        .bindPopup('YEXM');

    L.marker([-18.1819, 125.559]).addTo(map)
        .bindPopup('YFTZ');

    L.marker([-30.8381, 128.115]).addTo(map)
        .bindPopup('YFRT');

    L.marker([-18.1321, 125.787]).addTo(map)
        .bindPopup('nan');

    L.marker([-18.2833, 128.417]).addTo(map)
        .bindPopup('YFLO');

    L.marker([-15.1647, 127.84]).addTo(map)
        .bindPopup('YFRV');

    L.marker([-16.4233, 126.445]).addTo(map)
        .bindPopup('YGIB');

    L.marker([-22.5812, 120.036]).addTo(map)
        .bindPopup('YGIA');

    L.marker([-18.6781, 128.592]).addTo(map)
        .bindPopup('YGDN');

    L.marker([-28.7961, 114.707]).addTo(map)
        .bindPopup('YGEL');

    L.marker([-20.333, 119.5]).addTo(map)
        .bindPopup('nan');

    L.marker([-25.0546, 115.203]).addTo(map)
        .bindPopup('YGSC');

    L.marker([-16.6369, 128.451]).addTo(map)
        .bindPopup('YARG');

    L.marker([-18.2339, 127.67]).addTo(map)
        .bindPopup('YHLC');

    L.marker([-21.7244, 119.392]).addTo(map)
        .bindPopup('YHIL');

    L.marker([-32.0975, 115.881]).addTo(map)
        .bindPopup('YPJT');

    L.marker([-30.3016, 115.056]).addTo(map)
        .bindPopup('YJNB');

    L.marker([-27.6928, 114.259]).addTo(map)
        .bindPopup('YKBR');

    L.marker([-17.3978, 124.355]).addTo(map)
        .bindPopup('nan');

    L.marker([-31.1907, 121.598]).addTo(map)
        .bindPopup('YKBL');

    L.marker([-22.2908, 119.437]).addTo(map)
        .bindPopup('YFDF');

    L.marker([-30.7894, 121.462]).addTo(map)
        .bindPopup('YPKG');

    L.marker([-33.7167, 117.633]).addTo(map)
        .bindPopup('YKNG');

    L.marker([-15.7781, 128.708]).addTo(map)
        .bindPopup('YPKU');

    L.marker([-29.2167, 116.687]).addTo(map)
        .bindPopup('YKAR');

    L.marker([-20.7122, 116.773]).addTo(map)
        .bindPopup('YPKA');

    L.marker([-27.2771, 120.096]).addTo(map)
        .bindPopup('YYLR');

    L.marker([-17.6128, 126.743]).addTo(map)
        .bindPopup('nan');

    L.marker([-22.2356, 114.089]).addTo(map)
        .bindPopup('YPLM');

    L.marker([-27.8433, 120.703]).addTo(map)
        .bindPopup('YLST');

    L.marker([-20.1089, 127.619]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.661, 128.594]).addTo(map)
        .bindPopup('nan');

    L.marker([-28.8781, 121.315]).addTo(map)
        .bindPopup('YLEO');

    L.marker([-28.6136, 122.424]).addTo(map)
        .bindPopup('YLTN');

    L.marker([-21.1633, 119.833]).addTo(map)
        .bindPopup('YMBL');

    L.marker([-16.6573, 125.961]).addTo(map)
        .bindPopup('nan');

    L.marker([-18.6217, 126.883]).addTo(map)
        .bindPopup('YMGR');

    L.marker([-17.055, 125.71]).addTo(map)
        .bindPopup('YMHO');

    L.marker([-14.7914, 125.824]).addTo(map)
        .bindPopup('YMIP');

    L.marker([-25.8939, 113.577]).addTo(map)
        .bindPopup('YSHK');

    L.marker([-34.2653, 116.14]).addTo(map)
        .bindPopup('YMJM');

    L.marker([-26.6117, 118.548]).addTo(map)
        .bindPopup('YMEK');

    L.marker([-28.1161, 117.842]).addTo(map)
        .bindPopup('YMOG');

    L.marker([-19.7383, 120.838]).addTo(map)
        .bindPopup('YMDI');

    L.marker([-33.9306, 115.1]).addTo(map)
        .bindPopup('YMGT');

    L.marker([-20.6589, 120.067]).addTo(map)
        .bindPopup('YMUC');

    L.marker([-29.2017, 116.022]).addTo(map)
        .bindPopup('YMRW');

    L.marker([-28.475, 115.517]).addTo(map)
        .bindPopup('YMWA');

    L.marker([-18.1247, 124.272]).addTo(map)
        .bindPopup('YMYR');

    L.marker([-27.98, 119.297]).addTo(map)
        .bindPopup('YSAN');

    L.marker([-21.6717, 121.587]).addTo(map)
        .bindPopup('YCNF');

    L.marker([-18.4947, 124.852]).addTo(map)
        .bindPopup('nan');

    L.marker([-21.9133, 120.198]).addTo(map)
        .bindPopup('YNUL');

    L.marker([-18.05, 128.9]).addTo(map)
        .bindPopup('nan');

    L.marker([-32.93, 117.08]).addTo(map)
        .bindPopup('YNRG');

    L.marker([-32.21, 121.755]).addTo(map)
        .bindPopup('YNSM');

    L.marker([-22.54, 117.275]).addTo(map)
        .bindPopup('YBGD');

    L.marker([-17.3408, 128.912]).addTo(map)
        .bindPopup('YORV');

    L.marker([-21.6683, 115.113]).addTo(map)
        .bindPopup('YOLW');

    L.marker([-23.1711, 117.745]).addTo(map)
        .bindPopup('YPBO');

    L.marker([-31.9403, 115.967]).addTo(map)
        .bindPopup('YPPH');

    L.marker([-20.3778, 118.626]).addTo(map)
        .bindPopup('YPPD');

    L.marker([-20.1175, 119.59]).addTo(map)
        .bindPopup('YPDO');

    L.marker([-20.7617, 117.157]).addTo(map)
        .bindPopup('YROE');

    L.marker([-22.6258, 119.959]).addTo(map)
        .bindPopup('YRYH');

    L.marker([-32.0067, 115.54]).addTo(map)
        .bindPopup('YRTI');

    L.marker([-33.7972, 120.208]).addTo(map)
        .bindPopup('YNRV');

    L.marker([-20.4247, 120.141]).addTo(map)
        .bindPopup('YSHG');

    L.marker([-22.2554, 117.763]).addTo(map)
        .bindPopup('YSOL');

    L.marker([-31.24, 119.36]).addTo(map)
        .bindPopup('YSCR');

    L.marker([-19.1664, 128.174]).addTo(map)
        .bindPopup('nan');

    L.marker([-21.5103, 119.362]).addTo(map)
        .bindPopup('nan');

    L.marker([-17.2833, 126.9]).addTo(map)
        .bindPopup('YTAB');

    L.marker([-14.7881, 126.496]).addTo(map)
        .bindPopup('YTHD');

    L.marker([-21.715, 122.229]).addTo(map)
        .bindPopup('YTEF');

    L.marker([-17.0408, 128.206]).addTo(map)
        .bindPopup('YTKY');

    L.marker([-22.746, 117.869]).addTo(map)
        .bindPopup('YTMP');

    L.marker([-14.0897, 126.381]).addTo(map)
        .bindPopup('YTST');

    L.marker([-14.2883, 126.632]).addTo(map)
        .bindPopup('YKAL');

    L.marker([-26.1667, 113.4]).addTo(map)
        .bindPopup('YUSL');

    L.marker([-22.2183, 118.348]).addTo(map)
        .bindPopup('YWIT');

    L.marker([-19.7736, 120.649]).addTo(map)
        .bindPopup('YWAL');

    L.marker([-23.1356, 118.707]).addTo(map)
        .bindPopup('YANG');

    L.marker([-27.2864, 120.555]).addTo(map)
        .bindPopup('YMNE');

    L.marker([-28.475, 122.242]).addTo(map)
        .bindPopup('nan');

    L.marker([-30.0317, 119.39]).addTo(map)
        .bindPopup('YWDG');

    L.marker([-20.8442, 120.702]).addTo(map)
        .bindPopup('YWWG');

    L.marker([-28.7053, 121.891]).addTo(map)
        .bindPopup('YMMI');

    L.marker([-26.6292, 120.221]).addTo(map)
        .bindPopup('YWLU');

    L.marker([-21.6628, 121.234]).addTo(map)
        .bindPopup('YWWI');

    L.marker([-15.5114, 128.153]).addTo(map)
        .bindPopup('YWYM');

    L.marker([-28.3553, 116.684]).addTo(map)
        .bindPopup('YYAL');

    L.marker([59.4875, -97.7803]).addTo(map)
        .bindPopup('nan');

    L.marker([-23.4178, 119.803]).addTo(map)
        .bindPopup('YNWN');

    L.marker([-17.7869, 127.67]).addTo(map)
        .bindPopup('nan');

    L.marker([12.5014, -70.0152]).addTo(map)
        .bindPopup('TNCA');

    L.marker([40.4675, 50.0467]).addTo(map)
        .bindPopup('UBBB');

    L.marker([40.7377, 46.3176]).addTo(map)
        .bindPopup('UBBG');

    L.marker([38.7464, 48.818]).addTo(map)
        .bindPopup('UBBL');

    L.marker([39.1888, 45.4584]).addTo(map)
        .bindPopup('UBBN');

    L.marker([40.8267, 47.7125]).addTo(map)
        .bindPopup('UBBQ');

    L.marker([40.6319, 47.1419]).addTo(map)
        .bindPopup('UBEE');

    L.marker([41.5622, 46.6672]).addTo(map)
        .bindPopup('UBBY');

    L.marker([43.2829, 17.8459]).addTo(map)
        .bindPopup('LQMO');

    L.marker([43.8246, 18.3315]).addTo(map)
        .bindPopup('LQSA');

    L.marker([44.4587, 18.7248]).addTo(map)
        .bindPopup('LQTZ');

    L.marker([44.9414, 17.2975]).addTo(map)
        .bindPopup('LQBK');

    L.marker([13.0746, -59.4925]).addTo(map)
        .bindPopup('TBPB');

    L.marker([22.801, 90.3012]).addTo(map)
        .bindPopup('VGBR');

    L.marker([22.2496, 91.8133]).addTo(map)
        .bindPopup('VGEG');

    L.marker([23.4372, 91.1897]).addTo(map)
        .bindPopup('VGCM');

    L.marker([21.4522, 91.9639]).addTo(map)
        .bindPopup('VGCB');

    L.marker([23.8433, 90.3978]).addTo(map)
        .bindPopup('VGHS');

    L.marker([23.1838, 89.1608]).addTo(map)
        .bindPopup('VGJR');

    L.marker([24.1525, 89.0494]).addTo(map)
        .bindPopup('VGIS');

    L.marker([24.4372, 88.6165]).addTo(map)
        .bindPopup('VGRJ');

    L.marker([25.7592, 88.9089]).addTo(map)
        .bindPopup('VGSD');

    L.marker([26.0164, 88.4036]).addTo(map)
        .bindPopup('VGSG');

    L.marker([24.417, 91.883]).addTo(map)
        .bindPopup('VGSH');

    L.marker([24.9632, 91.8668]).addTo(map)
        .bindPopup('VGSY');

    L.marker([51.1894, 4.46028]).addTo(map)
        .bindPopup('EBAW');

    L.marker([51.2647, 4.75333]).addTo(map)
        .bindPopup('EBZR');

    L.marker([50.9014, 4.48444]).addTo(map)
        .bindPopup('EBBR');

    L.marker([50.4592, 4.45382]).addTo(map)
        .bindPopup('EBCI');

    L.marker([50.6374, 5.44322]).addTo(map)
        .bindPopup('EBLG');

    L.marker([50.8172, 3.20472]).addTo(map)
        .bindPopup('EBKT');

    L.marker([51.1989, 2.86222]).addTo(map)
        .bindPopup('EBOS');

    L.marker([10.95, -3.25]).addTo(map)
        .bindPopup('DFOU');

    L.marker([11.8, -0.367]).addTo(map)
        .bindPopup('DFET');

    L.marker([11.167, -0.617]).addTo(map)
        .bindPopup('DFEZ');

    L.marker([10.683, -4.717]).addTo(map)
        .bindPopup('DFOB');

    L.marker([12.983, -0.167]).addTo(map)
        .bindPopup('DFEB');

    L.marker([12.033, 0.35]).addTo(map)
        .bindPopup('DFEF');

    L.marker([11.1601, -4.33097]).addTo(map)
        .bindPopup('DFOO');

    L.marker([12.3532, -1.51242]).addTo(map)
        .bindPopup('DFFD');

    L.marker([11.25, 0.7]).addTo(map)
        .bindPopup('DFEP');

    L.marker([12.75, -3.867]).addTo(map)
        .bindPopup('DFON');

    L.marker([12.459, -3.49]).addTo(map)
        .bindPopup('DFOD');

    L.marker([11.15, -1.15]).addTo(map)
        .bindPopup('DFCP');

    L.marker([12.65, -0.567]).addTo(map)
        .bindPopup('DFEA');

    L.marker([14.8, 0.05]).addTo(map)
        .bindPopup('DFEM');

    L.marker([14.45, -0.233]).addTo(map)
        .bindPopup('DFEG');

    L.marker([10.3841, -3.16345]).addTo(map)
        .bindPopup('DFOG');

    L.marker([13.067, -1.1]).addTo(map)
        .bindPopup('DFCA');

    L.marker([14.033, -0.033]).addTo(map)
        .bindPopup('DFEE');

    L.marker([11.1, -2.1]).addTo(map)
        .bindPopup('DFCL');

    L.marker([14.217, -0.883]).addTo(map)
        .bindPopup('DFOY');

    L.marker([14.1, -1.633]).addTo(map)
        .bindPopup('DFCJ');

    L.marker([13.067, -3.067]).addTo(map)
        .bindPopup('DFOT');

    L.marker([11.597, 1.483]).addTo(map)
        .bindPopup('DFER');

    L.marker([12.0603, 1.78463]).addTo(map)
        .bindPopup('DFED');

    L.marker([12.467, 1.5]).addTo(map)
        .bindPopup('DFEL');

    L.marker([13.45, 0.517]).addTo(map)
        .bindPopup('DFES');

    L.marker([13.567, -2.417]).addTo(map)
        .bindPopup('DFCC');

    L.marker([42.5696, 27.5152]).addTo(map)
        .bindPopup('LBBG');

    L.marker([41.8718, 25.6048]).addTo(map)
        .bindPopup('LBHS');

    L.marker([42.0678, 24.8508]).addTo(map)
        .bindPopup('LBPD');

    L.marker([43.6948, 26.0567]).addTo(map)
        .bindPopup('LBRS');

    L.marker([44.0552, 27.1788]).addTo(map)
        .bindPopup('LBSS');

    L.marker([42.6967, 23.4114]).addTo(map)
        .bindPopup('LBSF');

    L.marker([42.3767, 25.655]).addTo(map)
        .bindPopup('LBSZ');

    L.marker([43.3066, 26.7009]).addTo(map)
        .bindPopup('LBTG');

    L.marker([43.2321, 27.8251]).addTo(map)
        .bindPopup('LBWN');

    L.marker([43.1514, 25.7129]).addTo(map)
        .bindPopup('LBGO');

    L.marker([42.4549, 26.3522]).addTo(map)
        .bindPopup('nan');

    L.marker([26.2708, 50.6336]).addTo(map)
        .bindPopup('OBBI');

    L.marker([-3.32402, 29.3185]).addTo(map)
        .bindPopup('HBBA');

    L.marker([-3.41721, 29.9113]).addTo(map)
        .bindPopup('HBBE');

    L.marker([-2.54477, 30.0946]).addTo(map)
        .bindPopup('HBBO');

    L.marker([11.1448, 2.94038]).addTo(map)
        .bindPopup('DBBK');

    L.marker([10.377, 1.36051]).addTo(map)
        .bindPopup('DBBN');

    L.marker([9.35769, 2.60968]).addTo(map)
        .bindPopup('DBBP');

    L.marker([8.01817, 2.46458]).addTo(map)
        .bindPopup('DBBS');

    L.marker([9.69208, 1.63778]).addTo(map)
        .bindPopup('DBBD');

    L.marker([6.35723, 2.38435]).addTo(map)
        .bindPopup('DBBB');

    L.marker([17.9044, -62.8436]).addTo(map)
        .bindPopup('TFFJ');

    L.marker([32.364, -64.6787]).addTo(map)
        .bindPopup('TXKF');

    L.marker([4.9442, 114.928]).addTo(map)
        .bindPopup('WBSB');

    L.marker([-19.827, -63.961]).addTo(map)
        .bindPopup('SLAG');

    L.marker([-19.2468, -65.1496]).addTo(map)
        .bindPopup('SLSU');

    L.marker([-14.8592, -66.7375]).addTo(map)
        .bindPopup('SLSB');

    L.marker([-17.4211, -66.1771]).addTo(map)
        .bindPopup('SLCB');

    L.marker([-16.9889, -65.1417]).addTo(map)
        .bindPopup('SLHI');

    L.marker([-13.55, -63.7479]).addTo(map)
        .bindPopup('SLHJ');

    L.marker([-13.5833, -63.5833]).addTo(map)
        .bindPopup('SLBU');

    L.marker([-10.8206, -65.3456]).addTo(map)
        .bindPopup('SLGY');

    L.marker([-13.2607, -64.0608]).addTo(map)
        .bindPopup('SLMG');

    L.marker([-14.4279, -67.4968]).addTo(map)
        .bindPopup('SLRQ');

    L.marker([-14.3044, -67.3534]).addTo(map)
        .bindPopup('SLRY');

    L.marker([-11.0, -66.0]).addTo(map)
        .bindPopup('SLRI');

    L.marker([-13.7622, -65.4352]).addTo(map)
        .bindPopup('SLSA');

    L.marker([-13.0528, -64.6617]).addTo(map)
        .bindPopup('SLJO');

    L.marker([-14.9658, -65.6338]).addTo(map)
        .bindPopup('SLSM');

    L.marker([-14.0662, -66.7868]).addTo(map)
        .bindPopup('SLSR');

    L.marker([-13.2639, -64.6039]).addTo(map)
        .bindPopup('SLRA');

    L.marker([-14.8187, -64.918]).addTo(map)
        .bindPopup('SLTR');

    L.marker([-14.7356, -68.4119]).addTo(map)
        .bindPopup('SLAP');

    L.marker([-16.5133, -68.1923]).addTo(map)
        .bindPopup('SLLP');

    L.marker([-17.9626, -67.0762]).addTo(map)
        .bindPopup('SLOR');

    L.marker([-11.0404, -68.783]).addTo(map)
        .bindPopup('SLCO');

    L.marker([-11.1077, -67.5512]).addTo(map)
        .bindPopup('SLPR');

    L.marker([-19.5433, -65.7237]).addTo(map)
        .bindPopup('SLPO');

    L.marker([-20.4463, -66.8484]).addTo(map)
        .bindPopup('SLUY');

    L.marker([-15.9303, -63.1567]).addTo(map)
        .bindPopup('SLAS');

    L.marker([-20.0064, -63.5278]).addTo(map)
        .bindPopup('SLCA');

    L.marker([-16.1383, -62.0286]).addTo(map)
        .bindPopup('SLCP');

    L.marker([-16.3392, -58.4019]).addTo(map)
        .bindPopup('SLTI');

    L.marker([-18.9753, -57.8206]).addTo(map)
        .bindPopup('SLPS');

    L.marker([-18.3292, -59.765]).addTo(map)
        .bindPopup('SLRB');

    L.marker([-17.8308, -60.7431]).addTo(map)
        .bindPopup('SLJE');

    L.marker([-16.2708, -62.4703]).addTo(map)
        .bindPopup('SLJV');

    L.marker([-16.3836, -60.9628]).addTo(map)
        .bindPopup('SLSI');

    L.marker([-17.8116, -63.1715]).addTo(map)
        .bindPopup('SLET');

    L.marker([-18.4825, -64.0994]).addTo(map)
        .bindPopup('SLVG');

    L.marker([-17.6448, -63.1354]).addTo(map)
        .bindPopup('SLVR');

    L.marker([-22.7733, -64.3129]).addTo(map)
        .bindPopup('SLBJ');

    L.marker([-21.9609, -63.6517]).addTo(map)
        .bindPopup('SLYA');

    L.marker([-21.5557, -64.7013]).addTo(map)
        .bindPopup('SLTJ');

    L.marker([-21.2552, -63.4056]).addTo(map)
        .bindPopup('SLVM');

    L.marker([12.131, -68.2685]).addTo(map)
        .bindPopup('TNCB');

    L.marker([17.645, -63.22]).addTo(map)
        .bindPopup('TNCS');

    L.marker([17.4965, -62.9794]).addTo(map)
        .bindPopup('TNCE');

    L.marker([-7.59991, -72.7695]).addTo(map)
        .bindPopup('SBCZ');

    L.marker([-8.14083, -70.3472]).addTo(map)
        .bindPopup('SNOU');

    L.marker([-9.86889, -67.8981]).addTo(map)
        .bindPopup('SBRB');

    L.marker([-8.15526, -70.7833]).addTo(map)
        .bindPopup('SBTK');

    L.marker([-9.116, -68.6108]).addTo(map)
        .bindPopup('SWSN');

    L.marker([-9.77536, -36.6292]).addTo(map)
        .bindPopup('SNAL');

    L.marker([-9.51081, -35.7917]).addTo(map)
        .bindPopup('SBMO');

    L.marker([0.050664, -51.0722]).addTo(map)
        .bindPopup('SBMQ');

    L.marker([3.85549, -51.7969]).addTo(map)
        .bindPopup('SBOI');

    L.marker([-0.981292, -62.9196]).addTo(map)
        .bindPopup('SWBC');

    L.marker([-8.83456, -67.3124]).addTo(map)
        .bindPopup('SWNK');

    L.marker([-4.87152, -66.8975]).addTo(map)
        .bindPopup('SWCA');

    L.marker([-4.13406, -63.1326]).addTo(map)
        .bindPopup('SWKO');

    L.marker([-6.63953, -69.8798]).addTo(map)
        .bindPopup('SWEI');

    L.marker([-2.53261, -66.0832]).addTo(map)
        .bindPopup('SWOB');

    L.marker([-7.53212, -63.0721]).addTo(map)
        .bindPopup('SWHT');

    L.marker([-2.93907, -69.694]).addTo(map)
        .bindPopup('SWII');

    L.marker([-0.3786, -64.9923]).addTo(map)
        .bindPopup('SWTP');

    L.marker([-3.12726, -58.4812]).addTo(map)
        .bindPopup('SBIC');

    L.marker([-7.27897, -64.7695]).addTo(map)
        .bindPopup('SWLB');

    L.marker([-3.03861, -60.0497]).addTo(map)
        .bindPopup('SBEG');

    L.marker([-3.37217, -57.7248]).addTo(map)
        .bindPopup('SWMW');

    L.marker([-5.81138, -61.2783]).addTo(map)
        .bindPopup('SBMY');

    L.marker([-5.11803, -60.3649]).addTo(map)
        .bindPopup('SWNA');

    L.marker([-3.46793, -68.9204]).addTo(map)
        .bindPopup('SDCG');

    L.marker([-2.67302, -56.7772]).addTo(map)
        .bindPopup('SWPI');

    L.marker([-3.14604, -59.9863]).addTo(map)
        .bindPopup('SBMN');

    L.marker([-4.40634, -59.6024]).addTo(map)
        .bindPopup('SWBR');

    L.marker([-0.14835, -66.9855]).addTo(map)
        .bindPopup('SBUA');

    L.marker([-4.25567, -69.9358]).addTo(map)
        .bindPopup('SBTT');

    L.marker([-3.38294, -64.7241]).addTo(map)
        .bindPopup('SBTF');

    L.marker([-14.2554, -41.8175]).addTo(map)
        .bindPopup('SNBU');

    L.marker([-16.4386, -39.0809]).addTo(map)
        .bindPopup('SBPS');

    L.marker([-11.0808, -43.1475]).addTo(map)
        .bindPopup('SNBX');

    L.marker([-12.0789, -45.009]).addTo(map)
        .bindPopup('SNBR');

    L.marker([-15.8717, -38.8719]).addTo(map)
        .bindPopup('SNBL');

    L.marker([-15.667, -38.9547]).addTo(map)
        .bindPopup('SNED');

    L.marker([-17.6523, -39.2531]).addTo(map)
        .bindPopup('SBCV');

    L.marker([-12.2003, -38.9068]).addTo(map)
        .bindPopup('SNJD');

    L.marker([-14.2082, -42.7461]).addTo(map)
        .bindPopup('SNGI');

    L.marker([-14.816, -39.0332]).addTo(map)
        .bindPopup('SBIL');

    L.marker([-14.1339, -39.7339]).addTo(map)
        .bindPopup('SNIU');

    L.marker([-11.3399, -41.847]).addTo(map)
        .bindPopup('SNIC');

    L.marker([-13.7322, -39.1417]).addTo(map)
        .bindPopup('SNZW');

    L.marker([-14.8105, -39.2904]).addTo(map)
        .bindPopup('SNHA');

    L.marker([-11.1632, -40.5531]).addTo(map)
        .bindPopup('SNJB');

    L.marker([-13.8777, -40.0716]).addTo(map)
        .bindPopup('SNJK');

    L.marker([-13.2621, -43.4081]).addTo(map)
        .bindPopup('SBLP');

    L.marker([-12.4823, -41.277]).addTo(map)
        .bindPopup('SBLE');

    L.marker([-18.0489, -39.8642]).addTo(map)
        .bindPopup('SNMU');

    L.marker([-9.40088, -38.2506]).addTo(map)
        .bindPopup('SBUF');

    L.marker([-17.2967, -39.2712]).addTo(map)
        .bindPopup('SNRD');

    L.marker([-12.9086, -38.3225]).addTo(map)
        .bindPopup('SBSV');

    L.marker([-17.5245, -39.6685]).addTo(map)
        .bindPopup('SNTF');

    L.marker([-15.3552, -38.999]).addTo(map)
        .bindPopup('SBTC');

    L.marker([-13.2965, -38.9924]).addTo(map)
        .bindPopup('SNVB');

    L.marker([-14.8628, -40.8631]).addTo(map)
        .bindPopup('SBQV');

    L.marker([-4.56861, -37.8047]).addTo(map)
        .bindPopup('SBAC');

    L.marker([-2.89618, -40.858]).addTo(map)
        .bindPopup('SNWC');

    L.marker([-3.77628, -38.5326]).addTo(map)
        .bindPopup('SBFZ');

    L.marker([-7.21896, -39.2701]).addTo(map)
        .bindPopup('SBJU');

    L.marker([-2.90667, -40.3581]).addTo(map)
        .bindPopup('SBJE');

    L.marker([-15.8692, -47.9208]).addTo(map)
        .bindPopup('SBBR');

    L.marker([-20.8343, -41.1856]).addTo(map)
        .bindPopup('SNKI');

    L.marker([-20.6465, -40.4919]).addTo(map)
        .bindPopup('SNGA');

    L.marker([-18.7213, -39.8337]).addTo(map)
        .bindPopup('SNMX');

    L.marker([-20.2581, -40.2864]).addTo(map)
        .bindPopup('SBVT');

    L.marker([-16.3623, -48.9271]).addTo(map)
        .bindPopup('SWNS');

    L.marker([-15.8994, -52.2411]).addTo(map)
        .bindPopup('SWEC');

    L.marker([-17.7253, -48.6075]).addTo(map)
        .bindPopup('SBCN');

    L.marker([-16.632, -49.2207]).addTo(map)
        .bindPopup('SBGO');

    L.marker([-18.4447, -49.2134]).addTo(map)
        .bindPopup('SBIT');

    L.marker([-17.8299, -51.773]).addTo(map)
        .bindPopup('SWJW');

    L.marker([-13.5491, -48.1953]).addTo(map)
        .bindPopup('SBMC');

    L.marker([-14.4349, -48.4915]).addTo(map)
        .bindPopup('SWNQ');

    L.marker([-17.8347, -50.9561]).addTo(map)
        .bindPopup('SWLC');

    L.marker([-13.3313, -50.1976]).addTo(map)
        .bindPopup('SWUA');

    L.marker([-18.2168, -47.8997]).addTo(map)
        .bindPopup('SWKT');

    L.marker([-9.08361, -45.9506]).addTo(map)
        .bindPopup('SNAI');

    L.marker([-5.5025, -45.2158]).addTo(map)
        .bindPopup('SNBC');

    L.marker([-2.75663, -42.8057]).addTo(map)
        .bindPopup('SBRR');

    L.marker([-7.52603, -46.0533]).addTo(map)
        .bindPopup('SNBS');

    L.marker([-7.32044, -47.4587]).addTo(map)
        .bindPopup('SBCI');

    L.marker([-1.82111, -44.8669]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.25028, -46.0172]).addTo(map)
        .bindPopup('SNCP');

    L.marker([-2.10944, -44.6511]).addTo(map)
        .bindPopup('SNGM');

    L.marker([-5.53129, -47.46]).addTo(map)
        .bindPopup('SBIZ');

    L.marker([-5.3098, -44.481]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.48361, -45.0672]).addTo(map)
        .bindPopup('SNYE');

    L.marker([-2.58536, -44.2341]).addTo(map)
        .bindPopup('SBSL');

    L.marker([-21.2473, -56.4525]).addTo(map)
        .bindPopup('SBDB');

    L.marker([-20.4687, -54.6725]).addTo(map)
        .bindPopup('SBCG');

    L.marker([-19.0119, -57.6714]).addTo(map)
        .bindPopup('SBCR');

    L.marker([-19.1464, -51.6853]).addTo(map)
        .bindPopup('SSCL');

    L.marker([-22.2019, -54.9266]).addTo(map)
        .bindPopup('SSDO');

    L.marker([-19.6512, -51.1994]).addTo(map)
        .bindPopup('SSPN');

    L.marker([-22.5496, -55.7026]).addTo(map)
        .bindPopup('SBPP');

    L.marker([-20.7542, -51.6842]).addTo(map)
        .bindPopup('SBTG');

    L.marker([-9.86639, -56.105]).addTo(map)
        .bindPopup('SBAT');

    L.marker([-10.1883, -59.4573]).addTo(map)
        .bindPopup('SSOU');

    L.marker([-13.4655, -58.8669]).addTo(map)
        .bindPopup('SWTU');

    L.marker([-15.8613, -52.3889]).addTo(map)
        .bindPopup('SBBW');

    L.marker([-16.0436, -57.6299]).addTo(map)
        .bindPopup('SWKC');

    L.marker([-10.6344, -51.5636]).addTo(map)
        .bindPopup('nan');

    L.marker([-15.6529, -56.1167]).addTo(map)
        .bindPopup('SBCY');

    L.marker([-13.5744, -52.2706]).addTo(map)
        .bindPopup('SWEK');

    L.marker([-14.3769, -56.4004]).addTo(map)
        .bindPopup('SWDM');

    L.marker([-14.0194, -52.1522]).addTo(map)
        .bindPopup('SWHP');

    L.marker([-11.4194, -58.7017]).addTo(map)
        .bindPopup('SWJN');

    L.marker([-10.3058, -58.4894]).addTo(map)
        .bindPopup('SWJU');

    L.marker([-11.2966, -57.5495]).addTo(map)
        .bindPopup('SIZX');

    L.marker([-15.1934, -59.3848]).addTo(map)
        .bindPopup('nan');

    L.marker([-13.0379, -55.9502]).addTo(map)
        .bindPopup('SILC');

    L.marker([-10.1703, -54.9528]).addTo(map)
        .bindPopup('SWXM');

    L.marker([-14.9942, -59.9458]).addTo(map)
        .bindPopup('SWVB');

    L.marker([-14.6983, -52.3464]).addTo(map)
        .bindPopup('SWXV');

    L.marker([-11.885, -55.5861]).addTo(map)
        .bindPopup('SWSI');

    L.marker([-9.89861, -58.5819]).addTo(map)
        .bindPopup('nan');

    L.marker([-11.5404, -57.3782]).addTo(map)
        .bindPopup('SWPG');

    L.marker([-10.8611, -51.685]).addTo(map)
        .bindPopup('SWPQ');

    L.marker([-16.586, -54.7248]).addTo(map)
        .bindPopup('SWRD');

    L.marker([-10.4647, -50.5186]).addTo(map)
        .bindPopup('SWST');

    L.marker([-11.6717, -51.4347]).addTo(map)
        .bindPopup('nan');

    L.marker([-11.6324, -50.6896]).addTo(map)
        .bindPopup('SWFX');

    L.marker([-14.662, -57.4435]).addTo(map)
        .bindPopup('SWTS');

    L.marker([-9.97944, -51.1422]).addTo(map)
        .bindPopup('SWVC');

    L.marker([-19.5632, -46.9604]).addTo(map)
        .bindPopup('SBAX');

    L.marker([-16.1839, -40.6672]).addTo(map)
        .bindPopup('SNAR');

    L.marker([-20.1807, -44.8709]).addTo(map)
        .bindPopup('SNDV');

    L.marker([-18.232, -43.6504]).addTo(map)
        .bindPopup('SNDT');

    L.marker([-14.9337, -42.81]).addTo(map)
        .bindPopup('nan');

    L.marker([-18.8952, -41.9822]).addTo(map)
        .bindPopup('SBGV');

    L.marker([-19.4707, -42.4876]).addTo(map)
        .bindPopup('SBIP');

    L.marker([-8.7, -51.1742]).addTo(map)
        .bindPopup('nan');

    L.marker([-21.5131, -43.1731]).addTo(map)
        .bindPopup('SBZM');

    L.marker([-21.7915, -43.3868]).addTo(map)
        .bindPopup('SBJF');

    L.marker([-21.085, -44.2247]).addTo(map)
        .bindPopup('SNJR');

    L.marker([-15.4738, -44.3855]).addTo(map)
        .bindPopup('SNJN');

    L.marker([-21.4661, -42.727]).addTo(map)
        .bindPopup('SNDN');

    L.marker([-16.7069, -43.8189]).addTo(map)
        .bindPopup('SBMK');

    L.marker([-17.8233, -40.3299]).addTo(map)
        .bindPopup('SNNU');

    L.marker([-17.3169, -44.8603]).addTo(map)
        .bindPopup('SNPX');

    L.marker([-18.6728, -46.4912]).addTo(map)
        .bindPopup('SNPD');

    L.marker([-21.843, -46.5679]).addTo(map)
        .bindPopup('SBPC');

    L.marker([-22.2892, -45.9191]).addTo(map)
        .bindPopup('SNZA');

    L.marker([-20.7322, -46.6618]).addTo(map)
        .bindPopup('SNOS');

    L.marker([-22.0909, -45.0445]).addTo(map)
        .bindPopup('SNLO');

    L.marker([-17.8923, -41.5136]).addTo(map)
        .bindPopup('SNTO');

    L.marker([-19.7647, -47.9661]).addTo(map)
        .bindPopup('SBUR');

    L.marker([-18.8836, -48.2253]).addTo(map)
        .bindPopup('SBUL');

    L.marker([-21.5901, -45.4733]).addTo(map)
        .bindPopup('SBVG');

    L.marker([-1.917, -54.7231]).addTo(map)
        .bindPopup('nan');

    L.marker([-3.25391, -52.254]).addTo(map)
        .bindPopup('SBHT');

    L.marker([-1.37925, -48.4763]).addTo(map)
        .bindPopup('SBBE');

    L.marker([-1.63653, -50.4436]).addTo(map)
        .bindPopup('SNVS');

    L.marker([-8.34835, -49.3015]).addTo(map)
        .bindPopup('SBAA');

    L.marker([-6.11528, -50.0014]).addTo(map)
        .bindPopup('SBCJ');

    L.marker([-9.31997, -50.3285]).addTo(map)
        .bindPopup('SNKE');

    L.marker([-2.2468, -49.56]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.47917, -52.5781]).addTo(map)
        .bindPopup('SNYA');

    L.marker([-4.24234, -56.0007]).addTo(map)
        .bindPopup('SBIH');

    L.marker([-6.23316, -57.7769]).addTo(map)
        .bindPopup('SBEK');

    L.marker([-5.36859, -49.138]).addTo(map)
        .bindPopup('SBMA');

    L.marker([-0.889839, -52.6022]).addTo(map)
        .bindPopup('SBMD');

    L.marker([-1.9958, -54.0742]).addTo(map)
        .bindPopup('SNMA');

    L.marker([-7.12583, -55.4008]).addTo(map)
        .bindPopup('SJNP');

    L.marker([-1.86717, -55.5144]).addTo(map)
        .bindPopup('SNTI');

    L.marker([-6.7631, -51.0499]).addTo(map)
        .bindPopup('SDOW');

    L.marker([-1.71408, -55.8362]).addTo(map)
        .bindPopup('SNOX');

    L.marker([-1.74145, -52.2361]).addTo(map)
        .bindPopup('SNMZ');

    L.marker([-8.03329, -49.9799]).addTo(map)
        .bindPopup('SNDC');

    L.marker([-0.699431, -48.521]).addTo(map)
        .bindPopup('SNSW');

    L.marker([-2.42472, -54.7858]).addTo(map)
        .bindPopup('SBSN');

    L.marker([-6.6413, -51.9523]).addTo(map)
        .bindPopup('SNFX');

    L.marker([-1.4896, -56.3968]).addTo(map)
        .bindPopup('SBTB');

    L.marker([-6.7488, -51.1478]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.0906, -49.9765]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.26992, -35.8964]).addTo(map)
        .bindPopup('SBKG');

    L.marker([-7.14583, -34.9486]).addTo(map)
        .bindPopup('SBJP');

    L.marker([-24.1039, -49.7891]).addTo(map)
        .bindPopup('SSYA');

    L.marker([-23.6095, -51.3845]).addTo(map)
        .bindPopup('SSAP');

    L.marker([-23.3529, -51.4917]).addTo(map)
        .bindPopup('SSOG');

    L.marker([-25.4051, -49.232]).addTo(map)
        .bindPopup('SBBI');

    L.marker([-25.0003, -53.5008]).addTo(map)
        .bindPopup('SBCA');

    L.marker([-24.0092, -52.3568]).addTo(map)
        .bindPopup('SSKM');

    L.marker([-23.1525, -50.6025]).addTo(map)
        .bindPopup('SSCP');

    L.marker([-25.5285, -49.1758]).addTo(map)
        .bindPopup('SBCT');

    L.marker([-26.0592, -53.0635]).addTo(map)
        .bindPopup('SSFB');

    L.marker([-23.6914, -52.6422]).addTo(map)
        .bindPopup('SSCT');

    L.marker([-24.0797, -54.1881]).addTo(map)
        .bindPopup('SSGY');

    L.marker([-25.3875, -51.5202]).addTo(map)
        .bindPopup('SBGU');

    L.marker([-25.6003, -54.485]).addTo(map)
        .bindPopup('SBFI');

    L.marker([-23.3336, -51.1301]).addTo(map)
        .bindPopup('SBLO');

    L.marker([-23.4761, -52.0162]).addTo(map)
        .bindPopup('SBMG');

    L.marker([-25.1847, -50.1441]).addTo(map)
        .bindPopup('SSZW');

    L.marker([-25.5401, -48.5312]).addTo(map)
        .bindPopup('SSPG');

    L.marker([-26.2172, -52.6945]).addTo(map)
        .bindPopup('SSPB');

    L.marker([-23.0899, -52.4885]).addTo(map)
        .bindPopup('SSPI');

    L.marker([-24.3178, -50.6516]).addTo(map)
        .bindPopup('SBTL');

    L.marker([-24.6863, -53.6975]).addTo(map)
        .bindPopup('SBTD');

    L.marker([-3.78601, -49.7203]).addTo(map)
        .bindPopup('SBTU');

    L.marker([-23.7987, -53.3138]).addTo(map)
        .bindPopup('SSUM');

    L.marker([-8.28239, -36.0135]).addTo(map)
        .bindPopup('SNRU');

    L.marker([-3.85493, -32.4233]).addTo(map)
        .bindPopup('SBFN');

    L.marker([-9.36241, -40.5691]).addTo(map)
        .bindPopup('SBPL');

    L.marker([-8.12649, -34.9236]).addTo(map)
        .bindPopup('SBRF');

    L.marker([-6.84639, -43.0773]).addTo(map)
        .bindPopup('SNQG');

    L.marker([-6.78222, -43.5822]).addTo(map)
        .bindPopup('SNGD');

    L.marker([-7.06206, -41.5237]).addTo(map)
        .bindPopup('SNPC');

    L.marker([-2.89375, -41.732]).addTo(map)
        .bindPopup('SBPB');

    L.marker([-5.05994, -42.8235]).addTo(map)
        .bindPopup('SBTE');

    L.marker([-5.20192, -37.3643]).addTo(map)
        .bindPopup('SBMS');

    L.marker([-5.76806, -35.3761]).addTo(map)
        .bindPopup('SBNT');

    L.marker([-29.8127, -55.8934]).addTo(map)
        .bindPopup('SSLT');

    L.marker([-29.1483, -51.5364]).addTo(map)
        .bindPopup('nan');

    L.marker([-31.3905, -54.1122]).addTo(map)
        .bindPopup('SBBG');

    L.marker([-29.3706, -50.8322]).addTo(map)
        .bindPopup('SSCN');

    L.marker([-29.6841, -52.4122]).addTo(map)
        .bindPopup('SSSC');

    L.marker([-33.5022, -53.3442]).addTo(map)
        .bindPopup('SSVP');

    L.marker([-29.1971, -51.1875]).addTo(map)
        .bindPopup('SBCX');

    L.marker([-28.6578, -53.6106]).addTo(map)
        .bindPopup('nan');

    L.marker([-27.6619, -52.2683]).addTo(map)
        .bindPopup('SSER');

    L.marker([-28.2817, -54.1691]).addTo(map)
        .bindPopup('SBNM');

    L.marker([-27.6383, -54.3391]).addTo(map)
        .bindPopup('SSHZ');

    L.marker([-28.3687, -53.8466]).addTo(map)
        .bindPopup('SSIJ');

    L.marker([-29.1731, -56.5367]).addTo(map)
        .bindPopup('SSIQ');

    L.marker([-13.6506, -41.8339]).addTo(map)
        .bindPopup('SNLB');

    L.marker([-31.7184, -52.3277]).addTo(map)
        .bindPopup('SBPK');

    L.marker([-28.244, -52.3266]).addTo(map)
        .bindPopup('SBPF');

    L.marker([-29.9944, -51.1714]).addTo(map)
        .bindPopup('SBPA');

    L.marker([-29.7114, -53.6882]).addTo(map)
        .bindPopup('SBSM');

    L.marker([-32.0817, -52.1633]).addTo(map)
        .bindPopup('SBRG');

    L.marker([-31.3833, -52.0328]).addTo(map)
        .bindPopup('SSRU');

    L.marker([-27.9067, -54.5204]).addTo(map)
        .bindPopup('SSZR');

    L.marker([-29.4149, -49.81]).addTo(map)
        .bindPopup('SBTR');

    L.marker([-29.7822, -57.0382]).addTo(map)
        .bindPopup('SBUG');

    L.marker([-22.7709, -41.9631]).addTo(map)
        .bindPopup('SBBZ');

    L.marker([-21.6983, -41.3017]).addTo(map)
        .bindPopup('SBCP');

    L.marker([-22.9217, -42.0743]).addTo(map)
        .bindPopup('SBCB');

    L.marker([-21.2193, -41.8759]).addTo(map)
        .bindPopup('SDUN');

    L.marker([-22.343, -41.766]).addTo(map)
        .bindPopup('SBME');

    L.marker([-22.4785, -44.4803]).addTo(map)
        .bindPopup('SDRS');

    L.marker([-10.1781, -62.8256]).addTo(map)
        .bindPopup('nan');

    L.marker([-12.6944, -60.0983]).addTo(map)
        .bindPopup('SBVH');

    L.marker([-12.4211, -64.2516]).addTo(map)
        .bindPopup('SWCQ');

    L.marker([-10.7864, -65.2848]).addTo(map)
        .bindPopup('SBGM');

    L.marker([-10.8708, -61.8465]).addTo(map)
        .bindPopup('SWJI');

    L.marker([-11.496, -61.4508]).addTo(map)
        .bindPopup('SSKW');

    L.marker([-11.6416, -61.1791]).addTo(map)
        .bindPopup('SWPM');

    L.marker([-8.70929, -63.9023]).addTo(map)
        .bindPopup('SBPV');

    L.marker([2.84139, -60.6922]).addTo(map)
        .bindPopup('SBBV');

    L.marker([-26.8756, -52.3731]).addTo(map)
        .bindPopup('nan');

    L.marker([-26.8306, -49.0903]).addTo(map)
        .bindPopup('SSBL');

    L.marker([-27.1806, -52.0527]).addTo(map)
        .bindPopup('SSCK');

    L.marker([-28.7244, -49.4214]).addTo(map)
        .bindPopup('SBCM');

    L.marker([-26.7884, -50.9398]).addTo(map)
        .bindPopup('SBCD');

    L.marker([-27.6703, -48.5525]).addTo(map)
        .bindPopup('SBFL');

    L.marker([-27.1714, -51.5533]).addTo(map)
        .bindPopup('SSJA');

    L.marker([-28.6753, -49.0596]).addTo(map)
        .bindPopup('SBJA');

    L.marker([-26.2245, -48.7974]).addTo(map)
        .bindPopup('SBJV');

    L.marker([-27.7821, -50.2815]).addTo(map)
        .bindPopup('SBLJ');

    L.marker([-27.16, -49.5425]).addTo(map)
        .bindPopup('SSLN');

    L.marker([-26.88, -48.6514]).addTo(map)
        .bindPopup('SBNF');

    L.marker([-26.7816, -53.5035]).addTo(map)
        .bindPopup('SSOE');

    L.marker([-26.2317, -51.0689]).addTo(map)
        .bindPopup('SSUV');

    L.marker([-26.9997, -51.1419]).addTo(map)
        .bindPopup('SSVI');

    L.marker([-27.1342, -52.6566]).addTo(map)
        .bindPopup('SBCH');

    L.marker([-22.64, -50.4531]).addTo(map)
        .bindPopup('SBAS');

    L.marker([-21.812, -48.133]).addTo(map)
        .bindPopup('SBAQ');

    L.marker([-21.1413, -50.4247]).addTo(map)
        .bindPopup('SBAU');

    L.marker([-20.5845, -48.5941]).addTo(map)
        .bindPopup('SBBT');

    L.marker([-22.3436, -49.0539]).addTo(map)
        .bindPopup('SBBU');

    L.marker([-22.9792, -46.5375]).addTo(map)
        .bindPopup('SBBP');

    L.marker([-22.8592, -47.1081]).addTo(map)
        .bindPopup('SDAM');

    L.marker([-20.5922, -47.3829]).addTo(map)
        .bindPopup('SIMK');

    L.marker([-22.7916, -45.2048]).addTo(map)
        .bindPopup('SBGW');

    L.marker([-20.293, -50.5464]).addTo(map)
        .bindPopup('SDJL');

    L.marker([-22.1669, -49.0503]).addTo(map)
        .bindPopup('SBAE');

    L.marker([-21.664, -49.7305]).addTo(map)
        .bindPopup('SBLN');

    L.marker([-22.1969, -49.9264]).addTo(map)
        .bindPopup('SBML');

    L.marker([-22.9665, -49.9133]).addTo(map)
        .bindPopup('SDOU');

    L.marker([-22.1751, -51.4246]).addTo(map)
        .bindPopup('SBDN');

    L.marker([-21.8754, -47.9037]).addTo(map)
        .bindPopup('SDSC');

    L.marker([-21.1364, -47.7767]).addTo(map)
        .bindPopup('SBRP');

    L.marker([-20.183, -50.917]).addTo(map)
        .bindPopup('nan');

    L.marker([-23.2292, -45.8615]).addTo(map)
        .bindPopup('SBSJ');

    L.marker([-20.8166, -49.4065]).addTo(map)
        .bindPopup('SBSR');

    L.marker([-23.478, -47.49]).addTo(map)
        .bindPopup('SDCO');

    L.marker([-23.9281, -46.2997]).addTo(map)
        .bindPopup('SBST');

    L.marker([-23.4411, -45.0756]).addTo(map)
        .bindPopup('SDUB');

    L.marker([-20.7771, -51.5648]).addTo(map)
        .bindPopup('SBUP');

    L.marker([-20.4632, -50.0045]).addTo(map)
        .bindPopup('SDVG');

    L.marker([-10.984, -37.0703]).addTo(map)
        .bindPopup('SBAR');

    L.marker([-13.0252, -46.8841]).addTo(map)
        .bindPopup('SWRA');

    L.marker([-7.22787, -48.2405]).addTo(map)
        .bindPopup('SWGN');

    L.marker([-11.5954, -46.8467]).addTo(map)
        .bindPopup('SWDN');

    L.marker([-11.7396, -49.1322]).addTo(map)
        .bindPopup('SWGI');

    L.marker([-11.5723, -50.6662]).addTo(map)
        .bindPopup('SWIY');

    L.marker([-9.5669, -48.3919]).addTo(map)
        .bindPopup('nan');

    L.marker([-10.2915, -48.357]).addTo(map)
        .bindPopup('SBPJ');

    L.marker([-10.7194, -48.3997]).addTo(map)
        .bindPopup('SBPN');

    L.marker([22.4418, -73.9709]).addTo(map)
        .bindPopup('MYAP');

    L.marker([25.7383, -77.8401]).addTo(map)
        .bindPopup('MYBG');

    L.marker([25.6999, -79.2647]).addTo(map)
        .bindPopup('MYBS');

    L.marker([25.767, -79.25]).addTo(map)
        .bindPopup('nan');

    L.marker([24.3153, -75.4523]).addTo(map)
        .bindPopup('MYCB');

    L.marker([24.6979, -77.7956]).addTo(map)
        .bindPopup('MYAF');

    L.marker([25.4171, -77.8809]).addTo(map)
        .bindPopup('MYBC');

    L.marker([24.2877, -77.6846]).addTo(map)
        .bindPopup('MYAB');

    L.marker([25.0538, -78.049]).addTo(map)
        .bindPopup('MYAN');

    L.marker([25.5546, -79.2752]).addTo(map)
        .bindPopup('MYCC');

    L.marker([27.2667, -78.3997]).addTo(map)
        .bindPopup('MYAW');

    L.marker([26.5587, -78.6956]).addTo(map)
        .bindPopup('MYGF');

    L.marker([23.5626, -75.878]).addTo(map)
        .bindPopup('MYEF');

    L.marker([24.5943, -76.8202]).addTo(map)
        .bindPopup('MYEN');

    L.marker([24.1691, -76.4391]).addTo(map)
        .bindPopup('MYES');

    L.marker([25.4749, -76.6835]).addTo(map)
        .bindPopup('MYEH');

    L.marker([26.5114, -77.0835]).addTo(map)
        .bindPopup('MYAM');

    L.marker([26.7453, -77.3913]).addTo(map)
        .bindPopup('MYAT');

    L.marker([20.975, -73.6669]).addTo(map)
        .bindPopup('MYIG');

    L.marker([22.7456, -74.1824]).addTo(map)
        .bindPopup('MYCI');

    L.marker([22.1818, -75.7295]).addTo(map)
        .bindPopup('MYRD');

    L.marker([23.179, -75.0936]).addTo(map)
        .bindPopup('MYLD');

    L.marker([22.8297, -74.3461]).addTo(map)
        .bindPopup('MYCP');

    L.marker([23.5823, -75.2686]).addTo(map)
        .bindPopup('MYLS');

    L.marker([22.3795, -73.0135]).addTo(map)
        .bindPopup('MYMM');

    L.marker([25.039, -77.4662]).addTo(map)
        .bindPopup('MYNN');

    L.marker([23.6844, -74.8362]).addTo(map)
        .bindPopup('MYRP');

    L.marker([24.0633, -74.524]).addTo(map)
        .bindPopup('MYSM');

    L.marker([24.1589, -77.5897]).addTo(map)
        .bindPopup('MYAK');

    L.marker([24.6294, -75.6738]).addTo(map)
        .bindPopup('MYCA');

    L.marker([25.2847, -76.331]).addTo(map)
        .bindPopup('MYEM');

    L.marker([24.8951, -76.1769]).addTo(map)
        .bindPopup('MYER');

    L.marker([26.6853, -78.975]).addTo(map)
        .bindPopup('MYGW');

    L.marker([27.5622, 90.7471]).addTo(map)
        .bindPopup('VQBT');

    L.marker([27.4032, 89.4246]).addTo(map)
        .bindPopup('VQPR');

    L.marker([26.8846, 90.4641]).addTo(map)
        .bindPopup('VQGP');

    L.marker([27.2564, 91.5145]).addTo(map)
        .bindPopup('VQTY');

    L.marker([-21.2667, 25.3167]).addTo(map)
        .bindPopup('FBOR');

    L.marker([-22.0583, 27.8288]).addTo(map)
        .bindPopup('FBSP');

    L.marker([-20.5534, 26.1158]).addTo(map)
        .bindPopup('FBSN');

    L.marker([-22.1892, 29.1269]).addTo(map)
        .bindPopup('FBTL');

    L.marker([-17.8329, 25.1624]).addTo(map)
        .bindPopup('FBKE');

    L.marker([-21.6925, 21.6581]).addTo(map)
        .bindPopup('FBGZ');

    L.marker([-23.9897, 21.7581]).addTo(map)
        .bindPopup('nan');

    L.marker([-26.0333, 22.4]).addTo(map)
        .bindPopup('FBTS');

    L.marker([-21.1596, 27.4745]).addTo(map)
        .bindPopup('FBFT');

    L.marker([-19.15, 23.783]).addTo(map)
        .bindPopup('FBKR');

    L.marker([-19.9726, 23.4311]).addTo(map)
        .bindPopup('FBMN');

    L.marker([-18.5206, 24.0767]).addTo(map)
        .bindPopup('FBSV');

    L.marker([-18.3739, 21.8326]).addTo(map)
        .bindPopup('FBSW');

    L.marker([-24.5552, 25.9182]).addTo(map)
        .bindPopup('FBSK');

    L.marker([-25.1981, 25.7139]).addTo(map)
        .bindPopup('FBLO');

    L.marker([-24.6023, 24.691]).addTo(map)
        .bindPopup('FBJW');

    L.marker([52.1083, 23.8981]).addTo(map)
        .bindPopup('UMBB');

    L.marker([52.527, 31.0167]).addTo(map)
        .bindPopup('UMGG');

    L.marker([53.602, 24.0538]).addTo(map)
        .bindPopup('UMMG');

    L.marker([53.9549, 30.0951]).addTo(map)
        .bindPopup('UMOO');

    L.marker([53.8645, 27.5397]).addTo(map)
        .bindPopup('UMMM');

    L.marker([53.8825, 28.0307]).addTo(map)
        .bindPopup('UMMS');

    L.marker([55.1265, 30.3496]).addTo(map)
        .bindPopup('UMII');

    L.marker([17.5391, -88.3082]).addTo(map)
        .bindPopup('MZBZ');

    L.marker([17.7347, -88.0325]).addTo(map)
        .bindPopup('nan');

    L.marker([17.7008, -88.0411]).addTo(map)
        .bindPopup('nan');

    L.marker([17.9139, -87.9711]).addTo(map)
        .bindPopup('nan');

    L.marker([17.5164, -88.1944]).addTo(map)
        .bindPopup('nan');

    L.marker([17.2696, -88.7765]).addTo(map)
        .bindPopup('nan');

    L.marker([17.1049, -89.1011]).addTo(map)
        .bindPopup('nan');

    L.marker([17.2785, -89.0238]).addTo(map)
        .bindPopup('nan');

    L.marker([17.1859, -89.0098]).addTo(map)
        .bindPopup('nan');

    L.marker([18.3822, -88.4119]).addTo(map)
        .bindPopup('nan');

    L.marker([18.3561, -88.1308]).addTo(map)
        .bindPopup('nan');

    L.marker([18.0468, -88.5839]).addTo(map)
        .bindPopup('nan');

    L.marker([16.5194, -88.4079]).addTo(map)
        .bindPopup('nan');

    L.marker([16.9825, -88.231]).addTo(map)
        .bindPopup('nan');

    L.marker([16.5345, -88.4413]).addTo(map)
        .bindPopup('nan');

    L.marker([17.0043, -88.3042]).addTo(map)
        .bindPopup('nan');

    L.marker([16.537, -88.3615]).addTo(map)
        .bindPopup('MZPL');

    L.marker([16.7253, -88.34]).addTo(map)
        .bindPopup('nan');

    L.marker([16.1024, -88.8083]).addTo(map)
        .bindPopup('nan');

    L.marker([57.3817, -111.701]).addTo(map)
        .bindPopup('CYNR');

    L.marker([57.2239, -111.419]).addTo(map)
        .bindPopup('nan');

    L.marker([57.0556, -111.574]).addTo(map)
        .bindPopup('nan');

    L.marker([51.0575, -113.624]).addTo(map)
        .bindPopup('nan');

    L.marker([49.5206, -113.997]).addTo(map)
        .bindPopup('CZPC');

    L.marker([51.2073, -115.542]).addTo(map)
        .bindPopup('CYBA');

    L.marker([54.3042, -110.744]).addTo(map)
        .bindPopup('CYBF');

    L.marker([52.075, -111.445]).addTo(map)
        .bindPopup('CYCT');

    L.marker([53.2658, -114.96]).addTo(map)
        .bindPopup('nan');

    L.marker([53.5789, -116.465]).addTo(map)
        .bindPopup('CYET');

    L.marker([57.2758, -110.977]).addTo(map)
        .bindPopup('nan');

    L.marker([53.9169, -118.874]).addTo(map)
        .bindPopup('nan');

    L.marker([52.9967, -118.059]).addTo(map)
        .bindPopup('CYJA');

    L.marker([53.3192, -117.753]).addTo(map)
        .bindPopup('nan');

    L.marker([54.7703, -112.032]).addTo(map)
        .bindPopup('CYLB');

    L.marker([53.3092, -110.073]).addTo(map)
        .bindPopup('CYLL');

    L.marker([56.6533, -111.222]).addTo(map)
        .bindPopup('CYMM');

    L.marker([54.405, -110.279]).addTo(map)
        .bindPopup('CYOD');

    L.marker([55.7094, -117.094]).addTo(map)
        .bindPopup('nan');

    L.marker([58.6214, -117.165]).addTo(map)
        .bindPopup('CYOJ');

    L.marker([58.4914, -119.408]).addTo(map)
        .bindPopup('CYOP');

    L.marker([56.2269, -117.447]).addTo(map)
        .bindPopup('CYPE');

    L.marker([58.7672, -111.117]).addTo(map)
        .bindPopup('CYPY');

    L.marker([52.1822, -113.894]).addTo(map)
        .bindPopup('CYQF');

    L.marker([49.6303, -112.8]).addTo(map)
        .bindPopup('CYQL');

    L.marker([55.1797, -118.885]).addTo(map)
        .bindPopup('CYQU');

    L.marker([52.4297, -114.904]).addTo(map)
        .bindPopup('CYRM');

    L.marker([50.2667, -111.183]).addTo(map)
        .bindPopup('CYSD');

    L.marker([53.3558, -110.824]).addTo(map)
        .bindPopup('CYVG');

    L.marker([50.0189, -110.721]).addTo(map)
        .bindPopup('CYXH');

    L.marker([51.1139, -114.02]).addTo(map)
        .bindPopup('CYYC');

    L.marker([49.6364, -114.094]).addTo(map)
        .bindPopup('CYYM');

    L.marker([55.2931, -114.777]).addTo(map)
        .bindPopup('CYZH');

    L.marker([54.1439, -115.787]).addTo(map)
        .bindPopup('CYZU');

    L.marker([56.0814, -118.435]).addTo(map)
        .bindPopup('nan');

    L.marker([55.3936, -116.475]).addTo(map)
        .bindPopup('CZHP');

    L.marker([49.0369, -116.498]).addTo(map)
        .bindPopup('nan');

    L.marker([51.6261, -124.142]).addTo(map)
        .bindPopup('nan');

    L.marker([49.2944, -123.111]).addTo(map)
        .bindPopup('CYHC');

    L.marker([50.1655, -120.171]).addTo(map)
        .bindPopup('nan');

    L.marker([48.7545, -123.71]).addTo(map)
        .bindPopup('nan');

    L.marker([52.3875, -126.596]).addTo(map)
        .bindPopup('CYBD');

    L.marker([49.15, -123.696]).addTo(map)
        .bindPopup('nan');

    L.marker([55.025, -120.935]).addTo(map)
        .bindPopup('nan');

    L.marker([49.8833, -124.533]).addTo(map)
        .bindPopup('nan');

    L.marker([49.794, -124.621]).addTo(map)
        .bindPopup('nan');

    L.marker([49.3372, -124.394]).addTo(map)
        .bindPopup('nan');

    L.marker([52.4525, -125.303]).addTo(map)
        .bindPopup('nan');

    L.marker([48.7952, -123.182]).addTo(map)
        .bindPopup('nan');

    L.marker([50.5822, -126.916]).addTo(map)
        .bindPopup('CYAL');

    L.marker([48.8167, -123.608]).addTo(map)
        .bindPopup('nan');

    L.marker([48.8667, -123.3]).addTo(map)
        .bindPopup('nan');

    L.marker([49.0798, -125.776]).addTo(map)
        .bindPopup('CYAZ');

    L.marker([48.8333, -125.133]).addTo(map)
        .bindPopup('nan');

    L.marker([50.9179, -127.937]).addTo(map)
        .bindPopup('CYBH');

    L.marker([49.9508, -125.271]).addTo(map)
        .bindPopup('CYBL');

    L.marker([56.9667, -130.25]).addTo(map)
        .bindPopup('nan');

    L.marker([48.97, -123.664]).addTo(map)
        .bindPopup('nan');

    L.marker([48.75, -123.233]).addTo(map)
        .bindPopup('nan');

    L.marker([49.6794, -124.982]).addTo(map)
        .bindPopup('nan');

    L.marker([49.055, -123.87]).addTo(map)
        .bindPopup('CYCD');

    L.marker([50.063, -124.93]).addTo(map)
        .bindPopup('nan');

    L.marker([49.2964, -117.632]).addTo(map)
        .bindPopup('CYCG');

    L.marker([55.6872, -121.627]).addTo(map)
        .bindPopup('CYCQ');

    L.marker([49.1528, -121.939]).addTo(map)
        .bindPopup('CYCW');

    L.marker([50.3303, -115.873]).addTo(map)
        .bindPopup('CYCZ');

    L.marker([58.4222, -130.032]).addTo(map)
        .bindPopup('CYDL');

    L.marker([55.7423, -120.183]).addTo(map)
        .bindPopup('CYDQ');

    L.marker([49.0742, -123.012]).addTo(map)
        .bindPopup('CZBB');

    L.marker([49.6942, -124.518]).addTo(map)
        .bindPopup('CYGB');

    L.marker([50.0994, -125.023]).addTo(map)
        .bindPopup('nan');

    L.marker([48.8545, -123.497]).addTo(map)
        .bindPopup('nan');

    L.marker([50.839, -126.775]).addTo(map)
        .bindPopup('nan');

    L.marker([51.733, -128.117]).addTo(map)
        .bindPopup('nan');

    L.marker([49.3683, -121.498]).addTo(map)
        .bindPopup('CYHE');

    L.marker([50.05, -125.25]).addTo(map)
        .bindPopup('nan');

    L.marker([49.4606, -123.719]).addTo(map)
        .bindPopup('nan');

    L.marker([50.3923, -125.137]).addTo(map)
        .bindPopup('nan');

    L.marker([50.7022, -120.444]).addTo(map)
        .bindPopup('CYKA');

    L.marker([53.8, -130.433]).addTo(map)
        .bindPopup('nan');

    L.marker([52.6076, -128.522]).addTo(map)
        .bindPopup('nan');

    L.marker([49.9561, -119.378]).addTo(map)
        .bindPopup('CYLW');

    L.marker([49.1008, -122.631]).addTo(map)
        .bindPopup('CYNJ');

    L.marker([50.1228, -120.747]).addTo(map)
        .bindPopup('nan');

    L.marker([48.817, -123.2]).addTo(map)
        .bindPopup('nan');

    L.marker([50.5756, -127.029]).addTo(map)
        .bindPopup('nan');

    L.marker([50.0667, -124.983]).addTo(map)
        .bindPopup('nan');

    L.marker([56.0356, -121.976]).addTo(map)
        .bindPopup('CYNH');

    L.marker([49.3219, -124.931]).addTo(map)
        .bindPopup('nan');

    L.marker([54.5667, -130.433]).addTo(map)
        .bindPopup('nan');

    L.marker([54.2861, -130.445]).addTo(map)
        .bindPopup('CYPR');

    L.marker([49.6238, -124.025]).addTo(map)
        .bindPopup('nan');

    L.marker([49.8342, -124.5]).addTo(map)
        .bindPopup('CYPW');

    L.marker([54.3764, -125.951]).addTo(map)
        .bindPopup('CYPZ');

    L.marker([50.065, -125.235]).addTo(map)
        .bindPopup('nan');

    L.marker([49.7108, -124.887]).addTo(map)
        .bindPopup('CYQQ');

    L.marker([53.0261, -122.51]).addTo(map)
        .bindPopup('CYQZ');

    L.marker([50.1234, -124.843]).addTo(map)
        .bindPopup('nan');

    L.marker([52.8237, -126.965]).addTo(map)
        .bindPopup('nan');

    L.marker([51.684, -127.264]).addTo(map)
        .bindPopup('nan');

    L.marker([50.4094, -125.132]).addTo(map)
        .bindPopup('nan');

    L.marker([50.9667, -118.183]).addTo(map)
        .bindPopup('CYRV');

    L.marker([49.7817, -123.162]).addTo(map)
        .bindPopup('CYSE');

    L.marker([50.6828, -119.229]).addTo(map)
        .bindPopup('CZAM');

    L.marker([52.15, -128.083]).addTo(map)
        .bindPopup('nan');

    L.marker([53.4167, -129.25]).addTo(map)
        .bindPopup('nan');

    L.marker([50.8854, -126.831]).addTo(map)
        .bindPopup('nan');

    L.marker([49.155, -125.91]).addTo(map)
        .bindPopup('nan');

    L.marker([52.7631, -132.04]).addTo(map)
        .bindPopup('nan');

    L.marker([57.9167, -131.117]).addTo(map)
        .bindPopup('nan');

    L.marker([50.2481, -119.331]).addTo(map)
        .bindPopup('CYVK');

    L.marker([49.1939, -123.184]).addTo(map)
        .bindPopup('CYVR');

    L.marker([48.425, -123.389]).addTo(map)
        .bindPopup('CYWH');

    L.marker([52.1831, -122.054]).addTo(map)
        .bindPopup('CYWL');

    L.marker([50.1436, -122.949]).addTo(map)
        .bindPopup('nan');

    L.marker([49.6108, -115.782]).addTo(map)
        .bindPopup('CYXC');

    L.marker([56.2381, -120.74]).addTo(map)
        .bindPopup('CYXJ');

    L.marker([53.8894, -122.679]).addTo(map)
        .bindPopup('CYXS');

    L.marker([54.4685, -128.576]).addTo(map)
        .bindPopup('CYXT');

    L.marker([49.0253, -122.361]).addTo(map)
        .bindPopup('CYXX');

    L.marker([54.8247, -127.183]).addTo(map)
        .bindPopup('CYYD');

    L.marker([58.8364, -122.597]).addTo(map)
        .bindPopup('CYYE');

    L.marker([49.4631, -119.602]).addTo(map)
        .bindPopup('CYYF');

    L.marker([48.6469, -123.426]).addTo(map)
        .bindPopup('CYYJ');

    L.marker([50.7753, -121.321]).addTo(map)
        .bindPopup('nan');

    L.marker([53.2543, -131.814]).addTo(map)
        .bindPopup('CYZP');

    L.marker([50.6806, -127.367]).addTo(map)
        .bindPopup('CYZT');

    L.marker([49.0556, -117.609]).addTo(map)
        .bindPopup('nan');

    L.marker([55.4667, -129.483]).addTo(map)
        .bindPopup('nan');

    L.marker([52.185, -128.157]).addTo(map)
        .bindPopup('CBBC');

    L.marker([49.0156, -118.431]).addTo(map)
        .bindPopup('CZGF');

    L.marker([51.7361, -121.333]).addTo(map)
        .bindPopup('CZML');

    L.marker([54.0275, -132.125]).addTo(map)
        .bindPopup('CZMT');

    L.marker([49.1833, -123.95]).addTo(map)
        .bindPopup('nan');

    L.marker([51.8628, -127.869]).addTo(map)
        .bindPopup('nan');

    L.marker([52.3667, -127.717]).addTo(map)
        .bindPopup('nan');

    L.marker([53.267, -132.083]).addTo(map)
        .bindPopup('nan');

    L.marker([55.9354, -129.982]).addTo(map)
        .bindPopup('CZST');

    L.marker([54.3333, -130.283]).addTo(map)
        .bindPopup('CZSW');

    L.marker([49.9167, -126.667]).addTo(map)
        .bindPopup('nan');

    L.marker([56.0614, -95.6139]).addTo(map)
        .bindPopup('CZBD');

    L.marker([56.0375, -96.5097]).addTo(map)
        .bindPopup('CZEE');

    L.marker([56.2486, -101.304]).addTo(map)
        .bindPopup('nan');

    L.marker([55.5889, -97.1642]).addTo(map)
        .bindPopup('CZMN');

    L.marker([56.3, -100.5]).addTo(map)
        .bindPopup('nan');

    L.marker([58.6175, -101.469]).addTo(map)
        .bindPopup('CZWH');

    L.marker([55.7492, -101.266]).addTo(map)
        .bindPopup('CZFG');

    L.marker([52.9965, -97.2742]).addTo(map)
        .bindPopup('CZNG');

    L.marker([56.7928, -98.9072]).addTo(map)
        .bindPopup('CZSN');

    L.marker([58.7061, -98.5122]).addTo(map)
        .bindPopup('CYBQ');

    L.marker([53.7063, -100.344]).addTo(map)
        .bindPopup('nan');

    L.marker([49.91, -99.9519]).addTo(map)
        .bindPopup('CYBR');

    L.marker([57.8894, -101.679]).addTo(map)
        .bindPopup('CYBT');

    L.marker([52.3589, -97.0183]).addTo(map)
        .bindPopup('CYBV');

    L.marker([54.6106, -97.7608]).addTo(map)
        .bindPopup('CYCR');

    L.marker([51.1008, -100.052]).addTo(map)
        .bindPopup('CYDN');

    L.marker([51.7846, -96.6923]).addTo(map)
        .bindPopup('CZTA');

    L.marker([54.6781, -101.682]).addTo(map)
        .bindPopup('CYFO');

    L.marker([50.6281, -97.0433]).addTo(map)
        .bindPopup('CYGM');

    L.marker([54.5589, -94.4914]).addTo(map)
        .bindPopup('CYGO');

    L.marker([56.3575, -94.7106]).addTo(map)
        .bindPopup('CYGX');

    L.marker([53.8572, -94.6536]).addTo(map)
        .bindPopup('CYIV');

    L.marker([54.9153, -94.7981]).addTo(map)
        .bindPopup('nan');

    L.marker([56.5133, -99.9853]).addTo(map)
        .bindPopup('CYLR');

    L.marker([53.9583, -97.8442]).addTo(map)
        .bindPopup('CYNE');

    L.marker([54.9333, -95.2789]).addTo(map)
        .bindPopup('CYOH');

    L.marker([49.9031, -98.2738]).addTo(map)
        .bindPopup('CYPG');

    L.marker([53.9714, -101.091]).addTo(map)
        .bindPopup('CYQD');

    L.marker([54.1672, -93.5572]).addTo(map)
        .bindPopup('CYRS');

    L.marker([53.8456, -94.8519]).addTo(map)
        .bindPopup('CYST');

    L.marker([55.3189, -97.7078]).addTo(map)
        .bindPopup('CZLQ');

    L.marker([55.8011, -97.8642]).addTo(map)
        .bindPopup('CYTH');

    L.marker([49.91, -97.2399]).addTo(map)
        .bindPopup('CYWG');

    L.marker([50.0101, -100.314]).addTo(map)
        .bindPopup('CYYI');

    L.marker([56.8639, -101.076]).addTo(map)
        .bindPopup('CYYL');

    L.marker([58.7392, -94.065]).addTo(map)
        .bindPopup('CYYQ');

    L.marker([56.0894, -96.0892]).addTo(map)
        .bindPopup('CZAC');

    L.marker([54.8397, -94.0786]).addTo(map)
        .bindPopup('CZGI');

    L.marker([52.0456, -95.4658]).addTo(map)
        .bindPopup('CZGR');

    L.marker([54.5189, -98.0461]).addTo(map)
        .bindPopup('CZJG');

    L.marker([52.1206, -101.236]).addTo(map)
        .bindPopup('CZJN');

    L.marker([55.8656, -92.0814]).addTo(map)
        .bindPopup('CZTM');

    L.marker([47.0078, -65.4492]).addTo(map)
        .bindPopup('CYCH');

    L.marker([47.9908, -66.3303]).addTo(map)
        .bindPopup('CYCL');

    L.marker([45.8689, -66.5372]).addTo(map)
        .bindPopup('CYFC');

    L.marker([46.1122, -64.6786]).addTo(map)
        .bindPopup('CYQM');

    L.marker([45.3161, -65.8903]).addTo(map)
        .bindPopup('CYSJ');

    L.marker([47.1575, -67.8347]).addTo(map)
        .bindPopup('CYSL');

    L.marker([47.6297, -65.7389]).addTo(map)
        .bindPopup('CZBF');

    L.marker([51.3919, -56.0831]).addTo(map)
        .bindPopup('CYAY');

    L.marker([53.4694, -55.785]).addTo(map)
        .bindPopup('nan');

    L.marker([53.43, -57.2333]).addTo(map)
        .bindPopup('nan');

    L.marker([49.2108, -57.3914]).addTo(map)
        .bindPopup('CYDF');

    L.marker([56.5492, -61.6803]).addTo(map)
        .bindPopup('CYDP');

    L.marker([52.3728, -55.6739]).addTo(map)
        .bindPopup('nan');

    L.marker([52.5281, -56.2861]).addTo(map)
        .bindPopup('nan');

    L.marker([55.4483, -60.2286]).addTo(map)
        .bindPopup('CYHO');

    L.marker([48.5442, -58.55]).addTo(map)
        .bindPopup('CYJT');

    L.marker([52.3028, -55.8472]).addTo(map)
        .bindPopup('CYMH');

    L.marker([55.0769, -59.1864]).addTo(map)
        .bindPopup('CYFT');

    L.marker([55.9139, -61.1844]).addTo(map)
        .bindPopup('nan');

    L.marker([48.9369, -54.5681]).addTo(map)
        .bindPopup('CYQX');

    L.marker([53.6828, -57.0419]).addTo(map)
        .bindPopup('CYCA');

    L.marker([54.1797, -58.4575]).addTo(map)
        .bindPopup('nan');

    L.marker([54.9105, -59.7851]).addTo(map)
        .bindPopup('nan');

    L.marker([52.9219, -66.8644]).addTo(map)
        .bindPopup('CYWK');

    L.marker([52.5669, -55.7847]).addTo(map)
        .bindPopup('nan');

    L.marker([53.3192, -60.4258]).addTo(map)
        .bindPopup('CYYR');

    L.marker([47.6186, -52.7519]).addTo(map)
        .bindPopup('CYYT');

    L.marker([53.5619, -64.1064]).addTo(map)
        .bindPopup('CZUM');

    L.marker([66.7031, -119.707]).addTo(map)
        .bindPopup('nan');

    L.marker([64.5114, -110.289]).addTo(map)
        .bindPopup('nan');

    L.marker([63.4265, -109.193]).addTo(map)
        .bindPopup('nan');

    L.marker([62.5981, -111.543]).addTo(map)
        .bindPopup('nan');

    L.marker([68.2233, -135.006]).addTo(map)
        .bindPopup('CYKD');

    L.marker([61.9569, -128.203]).addTo(map)
        .bindPopup('nan');

    L.marker([67.02, -126.126]).addTo(map)
        .bindPopup('CYVL');

    L.marker([60.2919, -102.502]).addTo(map)
        .bindPopup('nan');

    L.marker([60.3164, -103.129]).addTo(map)
        .bindPopup('nan');

    L.marker([68.3042, -133.483]).addTo(map)
        .bindPopup('CYEV');

    L.marker([64.1908, -114.077]).addTo(map)
        .bindPopup('CYWE');

    L.marker([62.7, -109.167]).addTo(map)
        .bindPopup('nan');

    L.marker([61.1808, -113.69]).addTo(map)
        .bindPopup('CYFR');

    L.marker([61.7602, -121.237]).addTo(map)
        .bindPopup('CYFS');

    L.marker([66.2408, -128.651]).addTo(map)
        .bindPopup('CYGH');

    L.marker([70.7628, -117.806]).addTo(map)
        .bindPopup('CYHI');

    L.marker([60.8397, -115.783]).addTo(map)
        .bindPopup('CYHY');

    L.marker([60.2358, -123.469]).addTo(map)
        .bindPopup('CYJF');

    L.marker([63.1317, -117.246]).addTo(map)
        .bindPopup('nan');

    L.marker([76.2392, -119.322]).addTo(map)
        .bindPopup('CYMD');

    L.marker([63.5936, -110.906]).addTo(map)
        .bindPopup('nan');

    L.marker([64.6989, -110.615]).addTo(map)
        .bindPopup('CYOA');

    L.marker([69.3608, -124.075]).addTo(map)
        .bindPopup('CYPC');

    L.marker([64.1161, -117.31]).addTo(map)
        .bindPopup('CYRA');

    L.marker([62.4183, -110.682]).addTo(map)
        .bindPopup('CYLK');

    L.marker([60.0203, -111.962]).addTo(map)
        .bindPopup('CYSM');

    L.marker([71.9939, -125.243]).addTo(map)
        .bindPopup('CYSY');

    L.marker([69.4333, -133.026]).addTo(map)
        .bindPopup('CYUB');

    L.marker([65.2816, -126.798]).addTo(map)
        .bindPopup('CYVQ');

    L.marker([65.2111, -123.436]).addTo(map)
        .bindPopup('CYWJ');

    L.marker([63.2094, -123.437]).addTo(map)
        .bindPopup('CYWY');

    L.marker([62.4628, -114.44]).addTo(map)
        .bindPopup('CYZF');

    L.marker([67.4075, -134.861]).addTo(map)
        .bindPopup('CZFM');

    L.marker([64.9097, -125.573]).addTo(map)
        .bindPopup('CZFN');

    L.marker([44.5458, -65.7854]).addTo(map)
        .bindPopup('CYID');

    L.marker([44.8808, -63.5086]).addTo(map)
        .bindPopup('CYHZ');

    L.marker([45.6567, -61.3681]).addTo(map)
        .bindPopup('CYPD');

    L.marker([43.8269, -66.0881]).addTo(map)
        .bindPopup('CYQI');

    L.marker([46.1614, -60.0478]).addTo(map)
        .bindPopup('CYQY');

    L.marker([43.9303, -59.9603]).addTo(map)
        .bindPopup('nan');

    L.marker([44.9844, -64.9169]).addTo(map)
        .bindPopup('CYZX');

    L.marker([68.1253, -106.585]).addTo(map)
        .bindPopup('nan');

    L.marker([68.156, -106.618]).addTo(map)
        .bindPopup('nan');

    L.marker([73.0058, -85.0425]).addTo(map)
        .bindPopup('CYAB');

    L.marker([68.5344, -89.8081]).addTo(map)
        .bindPopup('CYBB');

    L.marker([64.2989, -96.0778]).addTo(map)
        .bindPopup('CYBK');

    L.marker([69.1081, -105.138]).addTo(map)
        .bindPopup('CYCB');

    L.marker([67.8167, -115.144]).addTo(map)
        .bindPopup('CYCO');

    L.marker([63.3469, -90.7311]).addTo(map)
        .bindPopup('CYCS');

    L.marker([70.4861, -68.5167]).addTo(map)
        .bindPopup('CYCY');

    L.marker([61.0942, -94.0708]).addTo(map)
        .bindPopup('CYEK');

    L.marker([79.9947, -85.8142]).addTo(map)
        .bindPopup('CYEU');

    L.marker([63.7564, -68.5558]).addTo(map)
        .bindPopup('CYFB');

    L.marker([69.3647, -81.8161]).addTo(map)
        .bindPopup('CYGT');

    L.marker([76.4261, -82.9092]).addTo(map)
        .bindPopup('CYGZ');

    L.marker([68.6356, -95.8497]).addTo(map)
        .bindPopup('CYHK');

    L.marker([72.6833, -77.9667]).addTo(map)
        .bindPopup('CYIO');

    L.marker([62.85, -69.8833]).addTo(map)
        .bindPopup('CYLC');

    L.marker([82.5178, -62.2806]).addTo(map)
        .bindPopup('CYLT');

    L.marker([71.3242, -79.3569]).addTo(map)
        .bindPopup('nan');

    L.marker([74.7169, -94.9694]).addTo(map)
        .bindPopup('CYRB');

    L.marker([62.8114, -92.1158]).addTo(map)
        .bindPopup('CYRT');

    L.marker([56.5378, -79.2467]).addTo(map)
        .bindPopup('CYSK');

    L.marker([64.23, -76.5267]).addTo(map)
        .bindPopup('CYTE');

    L.marker([66.5214, -86.2247]).addTo(map)
        .bindPopup('CYUT');

    L.marker([68.7761, -81.2425]).addTo(map)
        .bindPopup('CYUX');

    L.marker([67.5458, -64.0314]).addTo(map)
        .bindPopup('CYVM');

    L.marker([66.593, -61.5776]).addTo(map)
        .bindPopup('CYVN');

    L.marker([62.24, -92.5981]).addTo(map)
        .bindPopup('CYXN');

    L.marker([66.145, -65.7136]).addTo(map)
        .bindPopup('CYXP');

    L.marker([69.5467, -93.5767]).addTo(map)
        .bindPopup('CYYH');

    L.marker([64.1933, -83.3594]).addTo(map)
        .bindPopup('CYZS');

    L.marker([52.9911, -92.8364]).addTo(map)
        .bindPopup('nan');

    L.marker([53.0125, -89.8553]).addTo(map)
        .bindPopup('nan');

    L.marker([53.4414, -91.7628]).addTo(map)
        .bindPopup('CZMD');

    L.marker([52.7086, -88.5419]).addTo(map)
        .bindPopup('nan');

    L.marker([52.8939, -89.2892]).addTo(map)
        .bindPopup('nan');

    L.marker([53.9656, -91.0272]).addTo(map)
        .bindPopup('nan');

    L.marker([44.6394, -75.7503]).addTo(map)
        .bindPopup('nan');

    L.marker([42.3064, -82.0819]).addTo(map)
        .bindPopup('CYCK');

    L.marker([53.5247, -88.6428]).addTo(map)
        .bindPopup('CYAQ');

    L.marker([51.7272, -91.8244]).addTo(map)
        .bindPopup('CYAC');

    L.marker([48.6542, -93.4397]).addTo(map)
        .bindPopup('CYAG');

    L.marker([46.485, -84.5094]).addTo(map)
        .bindPopup('CYAM');

    L.marker([52.9275, -82.4319]).addTo(map)
        .bindPopup('CYAT');

    L.marker([53.8492, -89.5794]).addTo(map)
        .bindPopup('nan');

    L.marker([52.6067, -90.3769]).addTo(map)
        .bindPopup('nan');

    L.marker([45.0928, -74.5633]).addTo(map)
        .bindPopup('CYCC');

    L.marker([43.2856, -81.5083]).addTo(map)
        .bindPopup('CYCE');

    L.marker([43.1917, -79.1717]).addTo(map)
        .bindPopup('CYSN');

    L.marker([49.1056, -81.0136]).addTo(map)
        .bindPopup('CYCN');

    L.marker([46.4203, -84.0922]).addTo(map)
        .bindPopup('nan');

    L.marker([46.3514, -82.5614]).addTo(map)
        .bindPopup('CYEL');

    L.marker([45.8428, -81.8581]).addTo(map)
        .bindPopup('CYEM');

    L.marker([56.0189, -87.6761]).addTo(map)
        .bindPopup('CYER');

    L.marker([52.2014, -81.6969]).addTo(map)
        .bindPopup('CYFA');

    L.marker([51.5619, -87.9078]).addTo(map)
        .bindPopup('CYFH');

    L.marker([44.2253, -76.5969]).addTo(map)
        .bindPopup('CYGK');

    L.marker([49.7783, -86.9394]).addTo(map)
        .bindPopup('CYGQ');

    L.marker([49.8317, -92.7442]).addTo(map)
        .bindPopup('CYHD');

    L.marker([49.7142, -83.6861]).addTo(map)
        .bindPopup('CYHF');

    L.marker([43.1736, -79.935]).addTo(map)
        .bindPopup('CYHM');

    L.marker([49.1931, -84.7589]).addTo(map)
        .bindPopup('CYHN');

    L.marker([52.1133, -94.2556]).addTo(map)
        .bindPopup('CYHP');

    L.marker([48.7739, -91.6386]).addTo(map)
        .bindPopup('CYIB');

    L.marker([44.2014, -81.6067]).addTo(map)
        .bindPopup('CYKM');

    L.marker([43.4558, -80.3858]).addTo(map)
        .bindPopup('CYKF');

    L.marker([48.2103, -79.9814]).addTo(map)
        .bindPopup('CYKX');

    L.marker([47.82, -83.3467]).addTo(map)
        .bindPopup('CYLD');

    L.marker([52.1956, -87.9342]).addTo(map)
        .bindPopup('CYLH');

    L.marker([44.4853, -79.5556]).addTo(map)
        .bindPopup('CYLS');

    L.marker([49.0839, -85.8606]).addTo(map)
        .bindPopup('CYMG');

    L.marker([51.2911, -80.6078]).addTo(map)
        .bindPopup('CYMO');

    L.marker([52.49, -92.9711]).addTo(map)
        .bindPopup('nan');

    L.marker([51.6586, -85.9017]).addTo(map)
        .bindPopup('CYKP');

    L.marker([43.9228, -78.895]).addTo(map)
        .bindPopup('CYOO');

    L.marker([44.5903, -80.8375]).addTo(map)
        .bindPopup('CYOS');

    L.marker([45.3225, -75.6692]).addTo(map)
        .bindPopup('CYOW');

    L.marker([45.2575, -79.8297]).addTo(map)
        .bindPopup('nan');

    L.marker([51.4464, -90.2142]).addTo(map)
        .bindPopup('CYPL');

    L.marker([51.8197, -93.9733]).addTo(map)
        .bindPopup('CYPM');

    L.marker([54.9881, -85.4433]).addTo(map)
        .bindPopup('CYPO');

    L.marker([44.23, -78.3633]).addTo(map)
        .bindPopup('CYPQ');

    L.marker([44.9747, -79.3033]).addTo(map)
        .bindPopup('CYQA');

    L.marker([42.2756, -82.9556]).addTo(map)
        .bindPopup('CYQG');

    L.marker([49.7883, -94.3631]).addTo(map)
        .bindPopup('CYQK');

    L.marker([50.1828, -86.6964]).addTo(map)
        .bindPopup('CYQN');

    L.marker([42.77, -81.1108]).addTo(map)
        .bindPopup('CYQS');

    L.marker([48.3719, -89.3239]).addTo(map)
        .bindPopup('CYQT');

    L.marker([51.0669, -93.7931]).addTo(map)
        .bindPopup('CYRL');

    L.marker([45.4603, -75.6461]).addTo(map)
        .bindPopup('CYRO');

    L.marker([46.625, -80.7989]).addTo(map)
        .bindPopup('CYSB');

    L.marker([44.9458, -75.9406]).addTo(map)
        .bindPopup('CYSH');

    L.marker([45.1733, -80.1375]).addTo(map)
        .bindPopup('nan');

    L.marker([48.7553, -86.3444]).addTo(map)
        .bindPopup('CYSP');

    L.marker([45.8644, -77.2517]).addTo(map)
        .bindPopup('CYTA');

    L.marker([53.8178, -89.8969]).addTo(map)
        .bindPopup('CYTL');

    L.marker([44.1189, -77.5281]).addTo(map)
        .bindPopup('CYTR');

    L.marker([48.5697, -81.3767]).addTo(map)
        .bindPopup('CYTS');

    L.marker([43.6285, -79.396]).addTo(map)
        .bindPopup('CYTZ');

    L.marker([44.7458, -81.1072]).addTo(map)
        .bindPopup('CYVV');

    L.marker([52.6558, -94.0614]).addTo(map)
        .bindPopup('CYVZ');

    L.marker([45.9522, -77.3192]).addTo(map)
        .bindPopup('CYWA');

    L.marker([52.9594, -87.3749]).addTo(map)
        .bindPopup('CYWP');

    L.marker([48.6269, -85.2233]).addTo(map)
        .bindPopup('nan');

    L.marker([50.1139, -91.9053]).addTo(map)
        .bindPopup('CYXL');

    L.marker([47.6974, -79.8473]).addTo(map)
        .bindPopup('CYXR');

    L.marker([43.0356, -81.1539]).addTo(map)
        .bindPopup('CYXU');

    L.marker([47.9667, -84.7867]).addTo(map)
        .bindPopup('CYXZ');

    L.marker([46.3636, -79.4228]).addTo(map)
        .bindPopup('CYYB');

    L.marker([49.4139, -82.4675]).addTo(map)
        .bindPopup('CYYU');

    L.marker([50.2903, -88.9097]).addTo(map)
        .bindPopup('CYYW');

    L.marker([43.6797, -79.6227]).addTo(map)
        .bindPopup('CYYZ');

    L.marker([45.8853, -82.5678]).addTo(map)
        .bindPopup('CYZE');

    L.marker([42.9994, -82.3089]).addTo(map)
        .bindPopup('CYZR');

    L.marker([52.2825, -81.6778]).addTo(map)
        .bindPopup('CZKE');

    L.marker([53.8911, -92.1964]).addTo(map)
        .bindPopup('CZPB');

    L.marker([52.9436, -91.3128]).addTo(map)
        .bindPopup('CZRJ');

    L.marker([53.0642, -93.3444]).addTo(map)
        .bindPopup('CZSJ');

    L.marker([49.4297, -91.7178]).addTo(map)
        .bindPopup('CZUC');

    L.marker([46.4406, -63.8336]).addTo(map)
        .bindPopup('CYSU');

    L.marker([46.29, -63.1211]).addTo(map)
        .bindPopup('CYYG');

    L.marker([60.8186, -78.1486]).addTo(map)
        .bindPopup('CYKO');

    L.marker([48.9172, -79.1786]).addTo(map)
        .bindPopup('nan');

    L.marker([58.7114, -65.9928]).addTo(map)
        .bindPopup('CYLU');

    L.marker([53.7547, -73.6753]).addTo(map)
        .bindPopup('CYAH');

    L.marker([53.5717, -76.1964]).addTo(map)
        .bindPopup('CYAD');

    L.marker([61.6622, -73.3214]).addTo(map)
        .bindPopup('nan');

    L.marker([49.1325, -68.2044]).addTo(map)
        .bindPopup('CYBC');

    L.marker([48.3306, -70.9964]).addTo(map)
        .bindPopup('CYBG');

    L.marker([50.2838, -62.8063]).addTo(map)
        .bindPopup('nan');

    L.marker([51.4436, -57.1853]).addTo(map)
        .bindPopup('CYBX');

    L.marker([48.7785, -72.375]).addTo(map)
        .bindPopup('CYDO');

    L.marker([48.5639, -78.2497]).addTo(map)
        .bindPopup('CYEY');

    L.marker([48.7461, -69.0972]).addTo(map)
        .bindPopup('CYFE');

    L.marker([54.5539, -71.1733]).addTo(map)
        .bindPopup('nan');

    L.marker([53.6253, -77.7042]).addTo(map)
        .bindPopup('CYGL');

    L.marker([48.7753, -64.4786]).addTo(map)
        .bindPopup('CYGP');

    L.marker([47.4247, -61.7781]).addTo(map)
        .bindPopup('CYGR');

    L.marker([50.2819, -63.6114]).addTo(map)
        .bindPopup('CYGV');

    L.marker([55.2819, -77.7653]).addTo(map)
        .bindPopup('CYGW');

    L.marker([50.4689, -59.6367]).addTo(map)
        .bindPopup('CYHR');

    L.marker([51.2117, -58.6583]).addTo(map)
        .bindPopup('CYIF');

    L.marker([62.4173, -77.9253]).addTo(map)
        .bindPopup('CYIK');

    L.marker([45.2944, -73.2811]).addTo(map)
        .bindPopup('CYJN');

    L.marker([60.0272, -69.9992]).addTo(map)
        .bindPopup('CYAS');

    L.marker([54.8053, -66.8053]).addTo(map)
        .bindPopup('CYKL');

    L.marker([51.4733, -78.7583]).addTo(map)
        .bindPopup('CYKQ');

    L.marker([53.8056, -78.9169]).addTo(map)
        .bindPopup('nan');

    L.marker([50.2869, -64.1528]).addTo(map)
        .bindPopup('CYLP');

    L.marker([47.4097, -72.7889]).addTo(map)
        .bindPopup('CYLQ');

    L.marker([49.0303, -77.0172]).addTo(map)
        .bindPopup('nan');

    L.marker([48.8569, -67.4533]).addTo(map)
        .bindPopup('CYME');

    L.marker([47.5975, -70.2239]).addTo(map)
        .bindPopup('CYML');

    L.marker([49.7719, -74.5281]).addTo(map)
        .bindPopup('CYMT');

    L.marker([46.2728, -75.9906]).addTo(map)
        .bindPopup('CYMW');

    L.marker([45.6702, -74.0324]).addTo(map)
        .bindPopup('CYMX');

    L.marker([50.19, -61.7892]).addTo(map)
        .bindPopup('CYNA');

    L.marker([53.0106, -78.8311]).addTo(map)
        .bindPopup('CYNC');

    L.marker([45.5217, -75.5636]).addTo(map)
        .bindPopup('CYND');

    L.marker([49.7617, -77.8028]).addTo(map)
        .bindPopup('CYNM');

    L.marker([51.6911, -76.1356]).addTo(map)
        .bindPopup('CYHH');

    L.marker([52.2219, -76.6119]).addTo(map)
        .bindPopup('nan');

    L.marker([58.4719, -78.0769]).addTo(map)
        .bindPopup('CYPH');

    L.marker([59.2967, -69.5997]).addTo(map)
        .bindPopup('CYLA');

    L.marker([49.8364, -64.2886]).addTo(map)
        .bindPopup('CYPN');

    L.marker([60.0506, -77.2869]).addTo(map)
        .bindPopup('CYPX');

    L.marker([46.7911, -71.3933]).addTo(map)
        .bindPopup('CYQB');

    L.marker([61.0464, -69.6178]).addTo(map)
        .bindPopup('CYHA');

    L.marker([47.7644, -69.5847]).addTo(map)
        .bindPopup('CYRI');

    L.marker([48.52, -72.2656]).addTo(map)
        .bindPopup('CYRJ');

    L.marker([46.3528, -72.6794]).addTo(map)
        .bindPopup('CYRQ');

    L.marker([45.4386, -71.6914]).addTo(map)
        .bindPopup('CYSC');

    L.marker([48.5089, -71.6419]).addTo(map)
        .bindPopup('CYTF');

    L.marker([46.4094, -74.78]).addTo(map)
        .bindPopup('CYFJ');

    L.marker([58.6678, -69.9558]).addTo(map)
        .bindPopup('CYTQ');

    L.marker([56.5361, -76.5183]).addTo(map)
        .bindPopup('CYMU');

    L.marker([45.4657, -73.7455]).addTo(map)
        .bindPopup('CYUL');

    L.marker([48.2061, -78.8356]).addTo(map)
        .bindPopup('CYUY');

    L.marker([48.0711, -65.4603]).addTo(map)
        .bindPopup('CYVB');

    L.marker([48.0533, -77.7828]).addTo(map)
        .bindPopup('CYVO');

    L.marker([58.0961, -68.4269]).addTo(map)
        .bindPopup('CYVP');

    L.marker([61.5886, -71.9294]).addTo(map)
        .bindPopup('CYKG');

    L.marker([49.9434, -71.138]).addTo(map)
        .bindPopup('nan');

    L.marker([48.4781, -68.4969]).addTo(map)
        .bindPopup('CYXK');

    L.marker([48.6086, -68.2081]).addTo(map)
        .bindPopup('CYYY');

    L.marker([62.1794, -75.6672]).addTo(map)
        .bindPopup('CYZG');

    L.marker([50.2233, -66.2656]).addTo(map)
        .bindPopup('CYZV');

    L.marker([45.2908, -72.7414]).addTo(map)
        .bindPopup('CZBM');

    L.marker([52.2264, -78.5225]).addTo(map)
        .bindPopup('CZEM');

    L.marker([50.2597, -60.6794]).addTo(map)
        .bindPopup('nan');

    L.marker([50.1958, -61.2658]).addTo(map)
        .bindPopup('nan');

    L.marker([50.8308, -58.9756]).addTo(map)
        .bindPopup('nan');

    L.marker([50.6744, -59.3836]).addTo(map)
        .bindPopup('nan');

    L.marker([58.3911, -109.516]).addTo(map)
        .bindPopup('nan');

    L.marker([59.5614, -108.481]).addTo(map)
        .bindPopup('CYBE');

    L.marker([58.6625, -103.538]).addTo(map)
        .bindPopup('nan');

    L.marker([49.2103, -102.966]).addTo(map)
        .bindPopup('CYEN');

    L.marker([52.8167, -102.311]).addTo(map)
        .bindPopup('CYHB');

    L.marker([58.2361, -103.678]).addTo(map)
        .bindPopup('CYKC');

    L.marker([57.2561, -105.618]).addTo(map)
        .bindPopup('CYKJ');

    L.marker([51.5175, -109.181]).addTo(map)
        .bindPopup('CYKY');

    L.marker([54.1253, -108.523]).addTo(map)
        .bindPopup('CYLJ');

    L.marker([50.3303, -105.559]).addTo(map)
        .bindPopup('CYMJ');

    L.marker([58.2767, -104.082]).addTo(map)
        .bindPopup('CYNL');

    L.marker([53.2142, -105.673]).addTo(map)
        .bindPopup('CYPA');

    L.marker([50.4319, -104.666]).addTo(map)
        .bindPopup('CYQR');

    L.marker([51.2647, -102.462]).addTo(map)
        .bindPopup('CYQV');

    L.marker([52.7692, -108.244]).addTo(map)
        .bindPopup('CYQW');

    L.marker([59.2503, -105.841]).addTo(map)
        .bindPopup('CYSF');

    L.marker([52.8367, -104.067]).addTo(map)
        .bindPopup('nan');

    L.marker([55.1514, -105.262]).addTo(map)
        .bindPopup('CYVC');

    L.marker([55.8419, -108.418]).addTo(map)
        .bindPopup('CYVT');

    L.marker([52.1708, -106.7]).addTo(map)
        .bindPopup('CYXE');

    L.marker([50.2919, -107.691]).addTo(map)
        .bindPopup('CYYN');

    L.marker([59.3344, -107.182]).addTo(map)
        .bindPopup('CZFD');

    L.marker([55.5281, -106.582]).addTo(map)
        .bindPopup('CZPO');

    L.marker([58.1069, -103.172]).addTo(map)
        .bindPopup('CZWL');

    L.marker([63.1811, -130.202]).addTo(map)
        .bindPopup('nan');

    L.marker([61.9706, -132.423]).addTo(map)
        .bindPopup('CYDM');

    L.marker([64.0431, -139.128]).addTo(map)
        .bindPopup('CYDA');

    L.marker([61.3711, -139.041]).addTo(map)
        .bindPopup('CYDB');

    L.marker([60.7892, -137.546]).addTo(map)
        .bindPopup('CYHT');

    L.marker([64.4755, -140.742]).addTo(map)
        .bindPopup('nan');

    L.marker([63.6164, -135.868]).addTo(map)
        .bindPopup('CYMA');

    L.marker([67.5706, -139.839]).addTo(map)
        .bindPopup('CYOC');

    L.marker([60.1164, -128.822]).addTo(map)
        .bindPopup('CYQH');

    L.marker([62.4103, -140.867]).addTo(map)
        .bindPopup('CYXQ');

    L.marker([60.7096, -135.067]).addTo(map)
        .bindPopup('CYXY');

    L.marker([60.1728, -132.743]).addTo(map)
        .bindPopup('CYZW');

    L.marker([62.2075, -133.376]).addTo(map)
        .bindPopup('CZFA');

    L.marker([-12.1886, 96.8306]).addTo(map)
        .bindPopup('YPCC');

    L.marker([2.81835, 24.7937]).addTo(map)
        .bindPopup('FZKJ');

    L.marker([4.25321, 20.9753]).addTo(map)
        .bindPopup('FZFD');

    L.marker([1.22472, 19.7889]).addTo(map)
        .bindPopup('FZEN');

    L.marker([0.0226, 18.2887]).addTo(map)
        .bindPopup('FZEA');

    L.marker([-11.5913, 27.5309]).addTo(map)
        .bindPopup('FZQA');

    L.marker([-8.35, 22.583]).addTo(map)
        .bindPopup('FZSK');

    L.marker([-10.35, 28.633]).addTo(map)
        .bindPopup('FZQG');

    L.marker([-9.2886, 28.3269]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.583, 24.15]).addTo(map)
        .bindPopup('FZTK');

    L.marker([-8.467, 28.883]).addTo(map)
        .bindPopup('FZQC');

    L.marker([1.56572, 30.2208]).addTo(map)
        .bindPopup('FZKA');

    L.marker([-6.733, 23.95]).addTo(map)
        .bindPopup('FZWC');

    L.marker([-6.133, 24.483]).addTo(map)
        .bindPopup('FZWT');

    L.marker([-4.96167, 23.3783]).addTo(map)
        .bindPopup('FZVI');

    L.marker([-3.417, 23.45]).addTo(map)
        .bindPopup('FZVA');

    L.marker([-6.12124, 23.569]).addTo(map)
        .bindPopup('FZWA');

    L.marker([-4.3158, 20.4149]).addTo(map)
        .bindPopup('FZVR');

    L.marker([-5.90005, 22.4692]).addTo(map)
        .bindPopup('FZUA');

    L.marker([-7.183, 22.4]).addTo(map)
        .bindPopup('FZUG');

    L.marker([-4.85, 21.55]).addTo(map)
        .bindPopup('FZVM');

    L.marker([-4.32992, 20.5901]).addTo(map)
        .bindPopup('FZVS');

    L.marker([-6.43833, 20.7947]).addTo(map)
        .bindPopup('FZUK');

    L.marker([-4.38575, 15.4446]).addTo(map)
        .bindPopup('FZAA');

    L.marker([-4.32666, 15.3275]).addTo(map)
        .bindPopup('FZAB');

    L.marker([-5.854, 13.064]).addTo(map)
        .bindPopup('FZAJ');

    L.marker([-4.95, 14.133]).addTo(map)
        .bindPopup('FZAL');

    L.marker([-5.79961, 13.4404]).addTo(map)
        .bindPopup('FZAM');

    L.marker([-5.93086, 12.3518]).addTo(map)
        .bindPopup('FZAG');

    L.marker([-5.421, 14.8169]).addTo(map)
        .bindPopup('FZAR');

    L.marker([-10.7659, 25.5057]).addTo(map)
        .bindPopup('FZQM');

    L.marker([-3.31132, 17.3817]).addTo(map)
        .bindPopup('FZBO');

    L.marker([-5.0, 19.6]).addTo(map)
        .bindPopup('FZCB');

    L.marker([-1.94722, 18.2858]).addTo(map)
        .bindPopup('FZBA');

    L.marker([-4.533, 26.617]).addTo(map)
        .bindPopup('FZOK');

    L.marker([-5.03577, 18.7856]).addTo(map)
        .bindPopup('FZCA');

    L.marker([-1.435, 19.024]).addTo(map)
        .bindPopup('FZBT');

    L.marker([-4.8, 18.717]).addTo(map)
        .bindPopup('FZCE');

    L.marker([-4.783, 17.85]).addTo(map)
        .bindPopup('FZCV');

    L.marker([-2.7175, 17.6847]).addTo(map)
        .bindPopup('FZBI');

    L.marker([-2.578, 26.734]).addTo(map)
        .bindPopup('FZOC');

    L.marker([-2.91918, 25.9154]).addTo(map)
        .bindPopup('FZOA');

    L.marker([-1.367, 26.333]).addTo(map)
        .bindPopup('FZOP');

    L.marker([2.18278, 22.4817]).addTo(map)
        .bindPopup('FZFU');

    L.marker([2.17066, 21.4969]).addTo(map)
        .bindPopup('FZGA');

    L.marker([0.575, 29.4739]).addTo(map)
        .bindPopup('FZNP');

    L.marker([-1.67081, 29.2385]).addTo(map)
        .bindPopup('FZNA');

    L.marker([2.82761, 27.5883]).addTo(map)
        .bindPopup('FZJH');

    L.marker([0.117142, 29.313]).addTo(map)
        .bindPopup('nan');

    L.marker([4.15764, 21.6509]).addTo(map)
        .bindPopup('FZFP');

    L.marker([-1.04811, 23.3725]).addTo(map)
        .bindPopup('FZGV');

    L.marker([-2.30898, 28.8088]).addTo(map)
        .bindPopup('FZMA');

    L.marker([3.23537, 19.7713]).addTo(map)
        .bindPopup('FZFK');

    L.marker([3.633, 18.633]).addTo(map)
        .bindPopup('FZFA');

    L.marker([-7.067, 29.783]).addTo(map)
        .bindPopup('FZRB');

    L.marker([-5.87556, 29.25]).addTo(map)
        .bindPopup('FZRF');

    L.marker([-6.083, 26.917]).addTo(map)
        .bindPopup('FZRM');

    L.marker([-5.39444, 26.99]).addTo(map)
        .bindPopup('FZRQ');

    L.marker([-7.28889, 27.3944]).addTo(map)
        .bindPopup('FZRA');

    L.marker([0.481639, 25.338]).addTo(map)
        .bindPopup('FZIC');

    L.marker([0.783, 24.467]).addTo(map)
        .bindPopup('FZIR');

    L.marker([-0.217, 20.85]).addTo(map)
        .bindPopup('FZGN');

    L.marker([9.3167, 21.185]).addTo(map)
        .bindPopup('nan');

    L.marker([8.4965, 21.2565]).addTo(map)
        .bindPopup('nan');

    L.marker([8.42721, 20.6352]).addTo(map)
        .bindPopup('FEFN');

    L.marker([4.39848, 18.5188]).addTo(map)
        .bindPopup('FEFF');

    L.marker([5.05, 25.15]).addTo(map)
        .bindPopup('FEFZ');

    L.marker([5.33301, 25.9319]).addTo(map)
        .bindPopup('FEGE');

    L.marker([6.52, 23.26]).addTo(map)
        .bindPopup('FEFY');

    L.marker([6.52778, 21.9894]).addTo(map)
        .bindPopup('FEFR');

    L.marker([-1.95, 124.967]).addTo(map)
        .bindPopup('nan');

    L.marker([8.01056, 22.3986]).addTo(map)
        .bindPopup('FEFW');

    L.marker([4.22158, 15.7864]).addTo(map)
        .bindPopup('FEFT');

    L.marker([4.937, 15.894]).addTo(map)
        .bindPopup('FEFC');

    L.marker([4.785, 22.781]).addTo(map)
        .bindPopup('FEFG');

    L.marker([5.694, 22.801]).addTo(map)
        .bindPopup('FEGM');

    L.marker([4.98861, 23.9278]).addTo(map)
        .bindPopup('FEGR');

    L.marker([5.958, 15.637]).addTo(map)
        .bindPopup('FEFO');

    L.marker([5.84694, 20.6475]).addTo(map)
        .bindPopup('FEFM');

    L.marker([6.517, 18.267]).addTo(map)
        .bindPopup('FEGU');

    L.marker([6.492, 17.429]).addTo(map)
        .bindPopup('FEFS');

    L.marker([7.31411, 18.3088]).addTo(map)
        .bindPopup('FEGF');

    L.marker([6.34417, 16.3219]).addTo(map)
        .bindPopup('FEGZ');

    L.marker([9.58112, 21.7282]).addTo(map)
        .bindPopup('nan');

    L.marker([10.2364, 22.7169]).addTo(map)
        .bindPopup('FEFI');

    L.marker([8.9, 22.783]).addTo(map)
        .bindPopup('FEGO');

    L.marker([-4.01487, 13.9661]).addTo(map)
        .bindPopup('FCBM');

    L.marker([-4.22308, 13.2863]).addTo(map)
        .bindPopup('FCBY');

    L.marker([-2.85, 13.817]).addTo(map)
        .bindPopup('FCBZ');

    L.marker([-4.2517, 15.253]).addTo(map)
        .bindPopup('FCBB');

    L.marker([-1.033, 15.383]).addTo(map)
        .bindPopup('FCOB');

    L.marker([-0.53135, 15.9501]).addTo(map)
        .bindPopup('FCOO');

    L.marker([-0.017, 15.583]).addTo(map)
        .bindPopup('FCOM');

    L.marker([-1.44833, 15.0733]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.22667, 15.91]).addTo(map)
        .bindPopup('nan');

    L.marker([-0.883, 14.8]).addTo(map)
        .bindPopup('FCOE');

    L.marker([-0.083, 14.533]).addTo(map)
        .bindPopup('FCOK');

    L.marker([-3.683, 13.35]).addTo(map)
        .bindPopup('FCBS');

    L.marker([3.05, 18.5]).addTo(map)
        .bindPopup('FCOT');

    L.marker([1.617, 18.067]).addTo(map)
        .bindPopup('FCOI');

    L.marker([-4.20635, 12.6599]).addTo(map)
        .bindPopup('FCPL');

    L.marker([-3.483, 12.617]).addTo(map)
        .bindPopup('FCPA');

    L.marker([-2.95, 12.7]).addTo(map)
        .bindPopup('FCMM');

    L.marker([-2.533, 14.75]).addTo(map)
        .bindPopup('FCBD');

    L.marker([-1.8294, 15.8852]).addTo(map)
        .bindPopup('FCOG');

    L.marker([-2.45, 14.533]).addTo(map)
        .bindPopup('FCBL');

    L.marker([-2.313, 14.606]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.81603, 11.8866]).addTo(map)
        .bindPopup('FCPP');

    L.marker([-3.95, 14.517]).addTo(map)
        .bindPopup('FCBK');

    L.marker([1.36667, 17.4833]).addTo(map)
        .bindPopup('nan');

    L.marker([1.61599, 16.0379]).addTo(map)
        .bindPopup('FCOU');

    L.marker([2.067, 14.133]).addTo(map)
        .bindPopup('FCOS');

    L.marker([46.9141, 7.49715]).addTo(map)
        .bindPopup('LSZB');

    L.marker([46.2381, 6.10895]).addTo(map)
        .bindPopup('LSGG');

    L.marker([46.5341, 9.88411]).addTo(map)
        .bindPopup('LSZS');

    L.marker([47.0924, 8.30518]).addTo(map)
        .bindPopup('LSME');

    L.marker([46.9744, 8.39694]).addTo(map)
        .bindPopup('LSZC');

    L.marker([47.485, 9.56077]).addTo(map)
        .bindPopup('LSZR');

    L.marker([46.0043, 8.91058]).addTo(map)
        .bindPopup('LSZA');

    L.marker([46.2196, 7.32676]).addTo(map)
        .bindPopup('LSGS');

    L.marker([47.4647, 8.54917]).addTo(map)
        .bindPopup('LSZH');

    L.marker([5.26139, -3.92629]).addTo(map)
        .bindPopup('DIAP');

    L.marker([9.6, -4.05]).addTo(map)
        .bindPopup('DIOF');

    L.marker([4.64341, -6.92396]).addTo(map)
        .bindPopup('DIGN');

    L.marker([4.74672, -6.66082]).addTo(map)
        .bindPopup('DISP');

    L.marker([4.43781, -7.36273]).addTo(map)
        .bindPopup('DITB');

    L.marker([4.92833, -6.13278]).addTo(map)
        .bindPopup('DISS');

    L.marker([5.46194, -3.23472]).addTo(map)
        .bindPopup('DIAO');

    L.marker([6.71556, -3.47028]).addTo(map)
        .bindPopup('DIAU');

    L.marker([9.5, -7.567]).addTo(map)
        .bindPopup('DIOD');

    L.marker([6.90461, -5.36236]).addTo(map)
        .bindPopup('DIDV');

    L.marker([6.133, -5.95]).addTo(map)
        .bindPopup('DIGA');

    L.marker([6.65167, -4.64056]).addTo(map)
        .bindPopup('DIDK');

    L.marker([6.53471, -7.52685]).addTo(map)
        .bindPopup('DIGL');

    L.marker([7.27207, -7.58736]).addTo(map)
        .bindPopup('DIMN');

    L.marker([6.79281, -6.47319]).addTo(map)
        .bindPopup('DIDL');

    L.marker([9.533, -6.467]).addTo(map)
        .bindPopup('DIBI');

    L.marker([9.6, -5.18333]).addTo(map)
        .bindPopup('DIFK');

    L.marker([9.38718, -5.55666]).addTo(map)
        .bindPopup('DIKO');

    L.marker([7.7388, -5.07367]).addTo(map)
        .bindPopup('DIBK');

    L.marker([8.1329, -5.0657]).addTo(map)
        .bindPopup('nan');

    L.marker([7.96833, -6.71083]).addTo(map)
        .bindPopup('DISG');

    L.marker([8.2934, -7.674]).addTo(map)
        .bindPopup('DITM');

    L.marker([6.90317, -5.36558]).addTo(map)
        .bindPopup('DIYO');

    L.marker([8.01722, -2.76194]).addTo(map)
        .bindPopup('DIBU');

    L.marker([9.2775, -3.02528]).addTo(map)
        .bindPopup('DIBN');

    L.marker([-18.8309, -159.764]).addTo(map)
        .bindPopup('NCAI');

    L.marker([-19.9678, -158.119]).addTo(map)
        .bindPopup('NCAT');

    L.marker([-21.896, -157.907]).addTo(map)
        .bindPopup('NCMG');

    L.marker([-10.3767, -161.002]).addTo(map)
        .bindPopup('NCMH');

    L.marker([-19.8425, -157.703]).addTo(map)
        .bindPopup('NCMR');

    L.marker([-20.1361, -157.345]).addTo(map)
        .bindPopup('NCMK');

    L.marker([-9.01437, -158.032]).addTo(map)
        .bindPopup('NCPY');

    L.marker([-10.9145, -165.839]).addTo(map)
        .bindPopup('NCPK');

    L.marker([-21.2027, -159.806]).addTo(map)
        .bindPopup('NCRG');

    L.marker([-45.9161, -71.6895]).addTo(map)
        .bindPopup('SCBA');

    L.marker([-46.5833, -71.6874]).addTo(map)
        .bindPopup('SCCC');

    L.marker([-45.5942, -72.1061]).addTo(map)
        .bindPopup('SCCY');

    L.marker([-47.2438, -72.5884]).addTo(map)
        .bindPopup('SCHR');

    L.marker([-45.3992, -72.6703]).addTo(map)
        .bindPopup('SCAS');

    L.marker([-23.4445, -70.4451]).addTo(map)
        .bindPopup('SCFA');

    L.marker([-22.4982, -68.9036]).addTo(map)
        .bindPopup('SCCF');

    L.marker([-22.1411, -70.0629]).addTo(map)
        .bindPopup('SCBE');

    L.marker([-25.5643, -70.3759]).addTo(map)
        .bindPopup('SCTT');

    L.marker([-18.3485, -70.3387]).addTo(map)
        .bindPopup('SCAR');

    L.marker([-26.3325, -70.6073]).addTo(map)
        .bindPopup('SCRA');

    L.marker([-27.2612, -70.7792]).addTo(map)
        .bindPopup('SCAT');

    L.marker([-26.3111, -69.7652]).addTo(map)
        .bindPopup('SCES');

    L.marker([-28.5964, -70.756]).addTo(map)
        .bindPopup('SCLL');

    L.marker([-36.7727, -73.0631]).addTo(map)
        .bindPopup('SCIE');

    L.marker([-37.4017, -72.4254]).addTo(map)
        .bindPopup('SCGE');

    L.marker([-36.5825, -72.0314]).addTo(map)
        .bindPopup('SCCH');

    L.marker([-30.1989, -71.2469]).addTo(map)
        .bindPopup('SCQB');

    L.marker([-29.9162, -71.1995]).addTo(map)
        .bindPopup('SCSE');

    L.marker([-30.5592, -71.1756]).addTo(map)
        .bindPopup('SCOV');

    L.marker([-38.7668, -72.6371]).addTo(map)
        .bindPopup('SCTC');

    L.marker([-38.9259, -72.6515]).addTo(map)
        .bindPopup('SCQP');

    L.marker([-38.2456, -72.3486]).addTo(map)
        .bindPopup('SCTO');

    L.marker([-39.2928, -71.9159]).addTo(map)
        .bindPopup('SCPC');

    L.marker([-43.1892, -71.8511]).addTo(map)
        .bindPopup('SCFT');

    L.marker([-41.117, -73.05]).addTo(map)
        .bindPopup('SCFR');

    L.marker([-42.3404, -73.7157]).addTo(map)
        .bindPopup('SCPQ');

    L.marker([-41.4389, -73.094]).addTo(map)
        .bindPopup('SCTE');

    L.marker([-41.3494, -72.9467]).addTo(map)
        .bindPopup('SCPV');

    L.marker([-43.6119, -71.8061]).addTo(map)
        .bindPopup('SCAP');

    L.marker([-42.4903, -73.7728]).addTo(map)
        .bindPopup('SCST');

    L.marker([-42.9328, -72.6991]).addTo(map)
        .bindPopup('SCTN');

    L.marker([-40.6112, -73.061]).addTo(map)
        .bindPopup('SCJO');

    L.marker([-41.9043, -73.7966]).addTo(map)
        .bindPopup('SCAC');

    L.marker([-39.65, -73.0861]).addTo(map)
        .bindPopup('SCVD');

    L.marker([-51.6715, -72.5284]).addTo(map)
        .bindPopup('SCNT');

    L.marker([-53.0026, -70.8546]).addTo(map)
        .bindPopup('SCCI');

    L.marker([-52.7367, -69.3336]).addTo(map)
        .bindPopup('SCSB');

    L.marker([-53.2537, -70.3192]).addTo(map)
        .bindPopup('SCFM');

    L.marker([-54.9311, -67.6263]).addTo(map)
        .bindPopup('SCGZ');

    L.marker([-35.3778, -71.6017]).addTo(map)
        .bindPopup('SCTL');

    L.marker([-33.3928, -70.7856]).addTo(map)
        .bindPopup('SCEL');

    L.marker([-20.75, -68.6833]).addTo(map)
        .bindPopup('SCKP');

    L.marker([-20.5352, -70.1813]).addTo(map)
        .bindPopup('SCDA');

    L.marker([-27.1648, -109.422]).addTo(map)
        .bindPopup('SCIP');

    L.marker([-32.9496, -71.4786]).addTo(map)
        .bindPopup('SCVM');

    L.marker([-32.8142, -70.6467]).addTo(map)
        .bindPopup('SCAN');

    L.marker([-33.0681, -71.5575]).addTo(map)
        .bindPopup('SCRD');

    L.marker([7.35701, 13.5592]).addTo(map)
        .bindPopup('FKKN');

    L.marker([3.72256, 11.5533]).addTo(map)
        .bindPopup('FKYS');

    L.marker([3.83604, 11.5235]).addTo(map)
        .bindPopup('FKKY');

    L.marker([4.54861, 13.7261]).addTo(map)
        .bindPopup('FKKO');

    L.marker([4.475, 14.3625]).addTo(map)
        .bindPopup('FKKI');

    L.marker([10.3561, 15.2372]).addTo(map)
        .bindPopup('FKKJ');

    L.marker([10.0925, 14.4456]).addTo(map)
        .bindPopup('FKKH');

    L.marker([10.4514, 14.2574]).addTo(map)
        .bindPopup('FKKL');

    L.marker([4.00608, 9.71948]).addTo(map)
        .bindPopup('FKKD');

    L.marker([4.95, 9.933]).addTo(map)
        .bindPopup('FKAN');

    L.marker([9.33589, 13.3701]).addTo(map)
        .bindPopup('FKKR');

    L.marker([5.89528, 10.0339]).addTo(map)
        .bindPopup('FKKG');

    L.marker([6.03924, 10.1226]).addTo(map)
        .bindPopup('FKKV');

    L.marker([5.53692, 10.3546]).addTo(map)
        .bindPopup('FKKU');

    L.marker([5.45, 10.067]).addTo(map)
        .bindPopup('FKKS');

    L.marker([5.63692, 10.7508]).addTo(map)
        .bindPopup('FKKM');

    L.marker([2.876, 11.185]).addTo(map)
        .bindPopup('FKKW');

    L.marker([2.87389, 9.97778]).addTo(map)
        .bindPopup('FKKB');

    L.marker([5.70417, 9.30639]).addTo(map)
        .bindPopup('FKKF');

    L.marker([4.08919, 9.36053]).addTo(map)
        .bindPopup('FKKC');

    L.marker([30.5822, 117.05]).addTo(map)
        .bindPopup('ZSAQ');

    L.marker([32.8477, 117.32]).addTo(map)
        .bindPopup('ZSBB');

    L.marker([32.8822, 115.734]).addTo(map)
        .bindPopup('ZSFY');

    L.marker([31.78, 117.298]).addTo(map)
        .bindPopup('ZSOF');

    L.marker([30.7403, 117.686]).addTo(map)
        .bindPopup('nan');

    L.marker([29.7333, 118.256]).addTo(map)
        .bindPopup('ZSTX');

    L.marker([31.3906, 118.409]).addTo(map)
        .bindPopup('ZSWA');

    L.marker([40.0725, 116.598]).addTo(map)
        .bindPopup('ZBAA');

    L.marker([29.4658, 107.692]).addTo(map)
        .bindPopup('ZUWL');

    L.marker([31.064, 109.706]).addTo(map)
        .bindPopup('ZUWS');

    L.marker([29.7192, 106.642]).addTo(map)
        .bindPopup('ZUCK');

    L.marker([29.6362, 105.774]).addTo(map)
        .bindPopup('ZUDZ');

    L.marker([29.5133, 108.831]).addTo(map)
        .bindPopup('ZUQJ');

    L.marker([30.6794, 107.786]).addTo(map)
        .bindPopup('ZULP');

    L.marker([30.8017, 108.433]).addTo(map)
        .bindPopup('ZUWX');

    L.marker([25.9351, 119.663]).addTo(map)
        .bindPopup('ZSFZ');

    L.marker([24.7964, 118.59]).addTo(map)
        .bindPopup('ZSQZ');

    L.marker([25.6747, 116.747]).addTo(map)
        .bindPopup('ZSLO');

    L.marker([26.4263, 117.834]).addTo(map)
        .bindPopup('ZSSM');

    L.marker([27.7019, 118.001]).addTo(map)
        .bindPopup('ZSWY');

    L.marker([24.544, 118.128]).addTo(map)
        .bindPopup('ZSAM');

    L.marker([40.1611, 94.8092]).addTo(map)
        .bindPopup('ZLDH');

    L.marker([34.8105, 102.645]).addTo(map)
        .bindPopup('ZLXH');

    L.marker([35.7997, 107.603]).addTo(map)
        .bindPopup('ZLQY');

    L.marker([39.8569, 98.3414]).addTo(map)
        .bindPopup('ZLJQ');

    L.marker([38.5422, 102.348]).addTo(map)
        .bindPopup('ZLJC');

    L.marker([36.5152, 103.62]).addTo(map)
        .bindPopup('ZLLL');

    L.marker([33.788, 105.797]).addTo(map)
        .bindPopup('ZLLN');

    L.marker([34.5594, 105.86]).addTo(map)
        .bindPopup('ZLTS');

    L.marker([38.8019, 100.675]).addTo(map)
        .bindPopup('ZLZY');

    L.marker([23.3924, 113.299]).addTo(map)
        .bindPopup('ZGGG');

    L.marker([23.0833, 113.07]).addTo(map)
        .bindPopup('ZGFS');

    L.marker([24.9786, 113.421]).addTo(map)
        .bindPopup('nan');

    L.marker([23.05, 114.6]).addTo(map)
        .bindPopup('ZGHZ');

    L.marker([24.35, 116.133]).addTo(map)
        .bindPopup('ZGMX');

    L.marker([23.552, 116.503]).addTo(map)
        .bindPopup('ZGOW');

    L.marker([22.6393, 113.811]).addTo(map)
        .bindPopup('ZGSZ');

    L.marker([24.1492, 115.758]).addTo(map)
        .bindPopup('ZGXN');

    L.marker([21.2144, 110.358]).addTo(map)
        .bindPopup('ZGZJ');

    L.marker([22.0064, 113.376]).addTo(map)
        .bindPopup('ZGSD');

    L.marker([23.7206, 106.96]).addTo(map)
        .bindPopup('ZGBS');

    L.marker([21.5394, 109.294]).addTo(map)
        .bindPopup('ZGBH');

    L.marker([24.805, 107.7]).addTo(map)
        .bindPopup('ZGHC');

    L.marker([25.2181, 110.039]).addTo(map)
        .bindPopup('ZGKL');

    L.marker([24.2075, 109.391]).addTo(map)
        .bindPopup('ZGZH');

    L.marker([22.6083, 108.172]).addTo(map)
        .bindPopup('ZGNN');

    L.marker([23.4567, 111.248]).addTo(map)
        .bindPopup('ZGWZ');

    L.marker([25.0864, 104.959]).addTo(map)
        .bindPopup('ZUYI');

    L.marker([26.2606, 105.873]).addTo(map)
        .bindPopup('ZUAS');

    L.marker([27.2671, 105.472]).addTo(map)
        .bindPopup('ZUBJ');

    L.marker([26.3222, 109.15]).addTo(map)
        .bindPopup('ZUNP');

    L.marker([26.972, 107.988]).addTo(map)
        .bindPopup('nan');

    L.marker([26.5385, 106.801]).addTo(map)
        .bindPopup('ZUGY');

    L.marker([25.4525, 107.962]).addTo(map)
        .bindPopup('ZULB');

    L.marker([26.6094, 104.979]).addTo(map)
        .bindPopup('ZUPS');

    L.marker([27.8833, 109.309]).addTo(map)
        .bindPopup('ZUTR');

    L.marker([27.8164, 106.333]).addTo(map)
        .bindPopup('ZUMT');

    L.marker([27.5895, 107.001]).addTo(map)
        .bindPopup('ZUZY');

    L.marker([19.1382, 110.455]).addTo(map)
        .bindPopup('nan');

    L.marker([19.9349, 110.459]).addTo(map)
        .bindPopup('ZJHK');

    L.marker([18.3029, 109.412]).addTo(map)
        .bindPopup('ZJSY');

    L.marker([39.6664, 119.059]).addTo(map)
        .bindPopup('ZBDH');

    L.marker([41.1225, 118.074]).addTo(map)
        .bindPopup('ZBCD');

    L.marker([36.5258, 114.426]).addTo(map)
        .bindPopup('ZBHD');

    L.marker([38.2807, 114.697]).addTo(map)
        .bindPopup('ZBSJ');

    L.marker([39.7178, 118.003]).addTo(map)
        .bindPopup('ZBTS');

    L.marker([36.8831, 114.429]).addTo(map)
        .bindPopup('ZBXT');

    L.marker([40.7386, 114.93]).addTo(map)
        .bindPopup('ZBZJ');

    L.marker([46.7464, 125.141]).addTo(map)
        .bindPopup('ZYDQ');

    L.marker([48.445, 126.133]).addTo(map)
        .bindPopup('nan');

    L.marker([48.1995, 134.366]).addTo(map)
        .bindPopup('ZYFY');

    L.marker([50.1716, 127.309]).addTo(map)
        .bindPopup('ZYHE');

    L.marker([45.6234, 126.25]).addTo(map)
        .bindPopup('ZYHB');

    L.marker([50.3714, 124.118]).addTo(map)
        .bindPopup('ZYJD');

    L.marker([46.8434, 130.465]).addTo(map)
        .bindPopup('ZYJM');

    L.marker([47.11, 132.66]).addTo(map)
        .bindPopup('ZYJS');

    L.marker([45.293, 131.193]).addTo(map)
        .bindPopup('ZYJX');

    L.marker([47.7521, 129.019]).addTo(map)
        .bindPopup('ZYLD');

    L.marker([44.5241, 129.569]).addTo(map)
        .bindPopup('ZYMD');

    L.marker([47.2396, 123.918]).addTo(map)
        .bindPopup('ZYQQ');

    L.marker([52.9128, 122.43]).addTo(map)
        .bindPopup('ZYMH');

    L.marker([46.317, 129.567]).addTo(map)
        .bindPopup('ZYYL');

    L.marker([32.5414, 114.078]).addTo(map)
        .bindPopup('ZHXY');

    L.marker([36.1339, 114.344]).addTo(map)
        .bindPopup('ZHAY');

    L.marker([34.5197, 113.841]).addTo(map)
        .bindPopup('ZHCC');

    L.marker([34.8422, 113.274]).addTo(map)
        .bindPopup('nan');

    L.marker([34.7411, 112.388]).addTo(map)
        .bindPopup('ZHLY');

    L.marker([32.9808, 112.615]).addTo(map)
        .bindPopup('ZHNY');

    L.marker([30.3429, 115.03]).addTo(map)
        .bindPopup('ZHEC');

    L.marker([30.3203, 109.485]).addTo(map)
        .bindPopup('ZHES');

    L.marker([31.626, 110.34]).addTo(map)
        .bindPopup('ZHSN');

    L.marker([32.3894, 111.695]).addTo(map)
        .bindPopup('ZHGH');

    L.marker([30.3243, 112.28]).addTo(map)
        .bindPopup('ZHSS');

    L.marker([32.5917, 110.908]).addTo(map)
        .bindPopup('ZHSY');

    L.marker([30.7838, 114.208]).addTo(map)
        .bindPopup('ZHHH');

    L.marker([32.1506, 112.291]).addTo(map)
        .bindPopup('ZHXF');

    L.marker([30.5565, 111.48]).addTo(map)
        .bindPopup('ZHYC');

    L.marker([25.7506, 112.846]).addTo(map)
        .bindPopup('ZGCZ');

    L.marker([29.314, 113.278]).addTo(map)
        .bindPopup('ZGYY');

    L.marker([28.9189, 111.64]).addTo(map)
        .bindPopup('ZGCD');

    L.marker([28.1892, 113.22]).addTo(map)
        .bindPopup('ZGHA');

    L.marker([29.1028, 110.443]).addTo(map)
        .bindPopup('ZGDY');

    L.marker([27.4411, 109.7]).addTo(map)
        .bindPopup('ZGCJ');

    L.marker([26.9053, 112.628]).addTo(map)
        .bindPopup('ZGHY');

    L.marker([26.3387, 111.61]).addTo(map)
        .bindPopup('ZGLG');

    L.marker([26.802, 110.642]).addTo(map)
        .bindPopup('ZGSY');

    L.marker([31.9197, 119.779]).addTo(map)
        .bindPopup('ZSCG');

    L.marker([33.7908, 119.125]).addTo(map)
        .bindPopup('ZSSH');

    L.marker([34.5717, 118.874]).addTo(map)
        .bindPopup('ZSLG');

    L.marker([31.742, 118.862]).addTo(map)
        .bindPopup('ZSNJ');

    L.marker([32.0708, 120.976]).addTo(map)
        .bindPopup('ZSNT');

    L.marker([32.2579, 120.502]).addTo(map)
        .bindPopup('ZSRG');

    L.marker([31.2631, 120.401]).addTo(map)
        .bindPopup('ZSSZ');

    L.marker([31.4944, 120.429]).addTo(map)
        .bindPopup('ZSWX');

    L.marker([34.0591, 117.555]).addTo(map)
        .bindPopup('ZSXZ');

    L.marker([33.4258, 120.203]).addTo(map)
        .bindPopup('ZSYN');

    L.marker([32.5602, 119.717]).addTo(map)
        .bindPopup('ZSYA');

    L.marker([29.3386, 117.176]).addTo(map)
        .bindPopup('ZSJD');

    L.marker([26.8569, 114.737]).addTo(map)
        .bindPopup('ZSJA');

    L.marker([29.4769, 115.801]).addTo(map)
        .bindPopup('ZSJJ');

    L.marker([28.865, 115.9]).addTo(map)
        .bindPopup('ZSCN');

    L.marker([25.8533, 114.779]).addTo(map)
        .bindPopup('ZSGZ');

    L.marker([28.3797, 117.964]).addTo(map)
        .bindPopup('ZSSR');

    L.marker([27.8025, 114.306]).addTo(map)
        .bindPopup('ZSYC');

    L.marker([43.9962, 125.685]).addTo(map)
        .bindPopup('ZYCC');

    L.marker([45.5053, 123.02]).addTo(map)
        .bindPopup('ZYBA');

    L.marker([44.0022, 126.396]).addTo(map)
        .bindPopup('ZYJL');

    L.marker([42.0669, 127.602]).addTo(map)
        .bindPopup('ZYBS');

    L.marker([42.2539, 125.703]).addTo(map)
        .bindPopup('ZYTN');

    L.marker([42.8828, 129.451]).addTo(map)
        .bindPopup('ZYYJ');

    L.marker([44.9381, 124.55]).addTo(map)
        .bindPopup('ZYSQ');

    L.marker([41.1053, 122.854]).addTo(map)
        .bindPopup('ZYAS');

    L.marker([41.5381, 120.435]).addTo(map)
        .bindPopup('ZYCY');

    L.marker([39.2667, 122.667]).addTo(map)
        .bindPopup('ZYCH');

    L.marker([40.0247, 124.286]).addTo(map)
        .bindPopup('ZYDD');

    L.marker([38.9657, 121.539]).addTo(map)
        .bindPopup('ZYTL');

    L.marker([41.1014, 121.062]).addTo(map)
        .bindPopup('ZYJZ');

    L.marker([41.6398, 123.483]).addTo(map)
        .bindPopup('ZYTX');

    L.marker([40.5803, 120.698]).addTo(map)
        .bindPopup('ZYXC');

    L.marker([40.5425, 122.359]).addTo(map)
        .bindPopup('ZYYK');

    L.marker([43.8704, 120.16]).addTo(map)
        .bindPopup('nan');

    L.marker([38.7483, 105.589]).addTo(map)
        .bindPopup('nan');

    L.marker([40.56, 109.997]).addTo(map)
        .bindPopup('ZBOW');

    L.marker([42.235, 118.908]).addTo(map)
        .bindPopup('ZBCF');

    L.marker([39.49, 109.861]).addTo(map)
        .bindPopup('ZBDS');

    L.marker([42.0155, 101.001]).addTo(map)
        .bindPopup('nan');

    L.marker([43.4225, 112.097]).addTo(map)
        .bindPopup('ZBER');

    L.marker([40.8514, 111.824]).addTo(map)
        .bindPopup('ZBHH');

    L.marker([49.205, 119.825]).addTo(map)
        .bindPopup('ZBLA');

    L.marker([46.1953, 122.008]).addTo(map)
        .bindPopup('ZBUL');

    L.marker([45.4872, 119.407]).addTo(map)
        .bindPopup('ZBHZ');

    L.marker([49.5667, 117.33]).addTo(map)
        .bindPopup('ZBMZ');

    L.marker([47.8658, 122.768]).addTo(map)
        .bindPopup('nan');

    L.marker([39.225, 101.546]).addTo(map)
        .bindPopup('nan');

    L.marker([40.926, 107.743]).addTo(map)
        .bindPopup('ZBYZ');

    L.marker([43.5567, 122.2]).addTo(map)
        .bindPopup('ZBTL');

    L.marker([41.1297, 113.108]).addTo(map)
        .bindPopup('nan');

    L.marker([39.7934, 106.799]).addTo(map)
        .bindPopup('ZBUH');

    L.marker([41.4596, 108.535]).addTo(map)
        .bindPopup('nan');

    L.marker([43.9156, 115.964]).addTo(map)
        .bindPopup('ZBXH');

    L.marker([47.3106, 119.912]).addTo(map)
        .bindPopup('ZBES');

    L.marker([36.0789, 106.217]).addTo(map)
        .bindPopup('ZLGY');

    L.marker([38.3228, 106.393]).addTo(map)
        .bindPopup('ZLIC');

    L.marker([37.5731, 105.154]).addTo(map)
        .bindPopup('ZLZW');

    L.marker([38.012, 100.644]).addTo(map)
        .bindPopup('ZLHB');

    L.marker([34.4181, 100.301]).addTo(map)
        .bindPopup('ZLGL');

    L.marker([36.4006, 94.7861]).addTo(map)
        .bindPopup('ZLGM');

    L.marker([38.202, 90.8415]).addTo(map)
        .bindPopup('nan');

    L.marker([37.1253, 97.2687]).addTo(map)
        .bindPopup('ZLDL');

    L.marker([36.5275, 102.043]).addTo(map)
        .bindPopup('ZLXN');

    L.marker([32.8364, 97.0364]).addTo(map)
        .bindPopup('ZLYS');

    L.marker([32.7081, 108.931]).addTo(map)
        .bindPopup('ZLAK');

    L.marker([36.2475, 113.126]).addTo(map)
        .bindPopup('ZBCZ');

    L.marker([40.0603, 113.482]).addTo(map)
        .bindPopup('ZBDT');

    L.marker([36.6369, 109.554]).addTo(map)
        .bindPopup('ZLYA');

    L.marker([33.1341, 107.206]).addTo(map)
        .bindPopup('ZLHZ');

    L.marker([36.1326, 111.641]).addTo(map)
        .bindPopup('nan');

    L.marker([37.6833, 111.143]).addTo(map)
        .bindPopup('ZBLL');

    L.marker([34.3767, 109.12]).addTo(map)
        .bindPopup('ZLSN');

    L.marker([37.7469, 112.628]).addTo(map)
        .bindPopup('ZBYN');

    L.marker([38.3597, 109.591]).addTo(map)
        .bindPopup('ZLYL');

    L.marker([38.5975, 112.969]).addTo(map)
        .bindPopup('ZBXZ');

    L.marker([34.4471, 108.752]).addTo(map)
        .bindPopup('ZLXY');

    L.marker([35.2133, 115.737]).addTo(map)
        .bindPopup('ZSHZ');

    L.marker([37.5086, 118.788]).addTo(map)
        .bindPopup('ZSDY');

    L.marker([35.2928, 116.347]).addTo(map)
        .bindPopup('ZLJN');

    L.marker([35.0461, 118.412]).addTo(map)
        .bindPopup('ZSLY');

    L.marker([42.4464, 119.574]).addTo(map)
        .bindPopup('nan');

    L.marker([35.405, 119.324]).addTo(map)
        .bindPopup('nan');

    L.marker([36.2661, 120.374]).addTo(map)
        .bindPopup('ZSQD');

    L.marker([36.8572, 117.216]).addTo(map)
        .bindPopup('ZSJN');

    L.marker([36.6467, 119.119]).addTo(map)
        .bindPopup('ZSWF');

    L.marker([37.1871, 122.229]).addTo(map)
        .bindPopup('ZSWH');

    L.marker([37.6572, 120.987]).addTo(map)
        .bindPopup('ZSYT');

    L.marker([31.1434, 121.805]).addTo(map)
        .bindPopup('ZSPD');

    L.marker([31.1979, 121.336]).addTo(map)
        .bindPopup('ZSSS');

    L.marker([35.1164, 111.031]).addTo(map)
        .bindPopup('ZBYC');

    L.marker([31.04, 107.44]).addTo(map)
        .bindPopup('ZUDA');

    L.marker([32.5315, 102.352]).addTo(map)
        .bindPopup('ZUHY');

    L.marker([31.7384, 106.645]).addTo(map)
        .bindPopup('nan');

    L.marker([30.5785, 103.947]).addTo(map)
        .bindPopup('ZUUU');

    L.marker([31.1302, 107.429]).addTo(map)
        .bindPopup('ZUDX');

    L.marker([29.3231, 100.053]).addTo(map)
        .bindPopup('ZUDC');

    L.marker([30.9485, 104.33]).addTo(map)
        .bindPopup('ZUGH');

    L.marker([32.3911, 105.702]).addTo(map)
        .bindPopup('ZUGU');

    L.marker([32.8533, 103.682]).addTo(map)
        .bindPopup('ZUJZ');

    L.marker([30.1575, 101.735]).addTo(map)
        .bindPopup('ZUKD');

    L.marker([29.03, 105.47]).addTo(map)
        .bindPopup('ZULZ');

    L.marker([31.4281, 104.741]).addTo(map)
        .bindPopup('ZUMY');

    L.marker([30.7955, 106.163]).addTo(map)
        .bindPopup('ZUNC');

    L.marker([26.54, 101.799]).addTo(map)
        .bindPopup('ZUZH');

    L.marker([30.319, 104.445]).addTo(map)
        .bindPopup('ZUTF');

    L.marker([27.9891, 102.184]).addTo(map)
        .bindPopup('ZUXC');

    L.marker([28.8006, 104.545]).addTo(map)
        .bindPopup('ZUYB');

    L.marker([39.1244, 117.346]).addTo(map)
        .bindPopup('ZBTJ');

    L.marker([47.7499, 88.0858]).addTo(map)
        .bindPopup('ZWAT');

    L.marker([41.2625, 80.2917]).addTo(map)
        .bindPopup('ZWAK');

    L.marker([44.895, 82.3]).addTo(map)
        .bindPopup('ZWBL');

    L.marker([46.8042, 89.512]).addTo(map)
        .bindPopup('ZWFY');

    L.marker([42.8414, 93.6692]).addTo(map)
        .bindPopup('ZWHM');

    L.marker([37.0385, 79.8649]).addTo(map)
        .bindPopup('ZWTN');

    L.marker([38.2336, 85.4656]).addTo(map)
        .bindPopup('ZWCM');

    L.marker([41.6779, 82.8729]).addTo(map)
        .bindPopup('ZWKC');

    L.marker([39.5429, 76.02]).addTo(map)
        .bindPopup('ZWSH');

    L.marker([48.2223, 86.9959]).addTo(map)
        .bindPopup('ZWKN');

    L.marker([41.6978, 86.1289]).addTo(map)
        .bindPopup('ZWKL');

    L.marker([45.4665, 84.9527]).addTo(map)
        .bindPopup('ZWKM');

    L.marker([43.4318, 83.3786]).addTo(map)
        .bindPopup('ZWNL');

    L.marker([38.2811, 77.0752]).addTo(map)
        .bindPopup('nan');

    L.marker([38.9747, 88.0083]).addTo(map)
        .bindPopup('ZWRQ');

    L.marker([44.2421, 85.8905]).addTo(map)
        .bindPopup('ZWHZ');

    L.marker([42.9117, 90.2475]).addTo(map)
        .bindPopup('ZWSS');

    L.marker([46.6725, 83.3408]).addTo(map)
        .bindPopup('ZWTC');

    L.marker([43.0308, 89.0987]).addTo(map)
        .bindPopup('ZWTL');

    L.marker([43.9071, 87.4742]).addTo(map)
        .bindPopup('ZWWW');

    L.marker([43.9558, 81.3303]).addTo(map)
        .bindPopup('ZWYN');

    L.marker([30.5536, 97.1083]).addTo(map)
        .bindPopup('ZUBD');

    L.marker([29.2978, 90.9119]).addTo(map)
        .bindPopup('ZULS');

    L.marker([29.3033, 94.3353]).addTo(map)
        .bindPopup('ZUNZ');

    L.marker([32.1, 80.0531]).addTo(map)
        .bindPopup('ZUAL');

    L.marker([29.3519, 89.3114]).addTo(map)
        .bindPopup('ZURK');

    L.marker([25.0533, 99.1683]).addTo(map)
        .bindPopup('ZPBS');

    L.marker([23.2739, 99.3736]).addTo(map)
        .bindPopup('ZPCW');

    L.marker([27.7936, 99.6772]).addTo(map)
        .bindPopup('ZPDQ');

    L.marker([25.6494, 100.319]).addTo(map)
        .bindPopup('ZPDL');

    L.marker([21.9739, 100.76]).addTo(map)
        .bindPopup('ZPJH');

    L.marker([22.4158, 99.7864]).addTo(map)
        .bindPopup('ZPJM');

    L.marker([25.1019, 102.929]).addTo(map)
        .bindPopup('ZPPP');

    L.marker([26.68, 100.246]).addTo(map)
        .bindPopup('ZPLJ');

    L.marker([23.7381, 100.025]).addTo(map)
        .bindPopup('ZPLC');

    L.marker([24.4011, 98.5317]).addTo(map)
        .bindPopup('ZPMS');

    L.marker([27.5403, 100.759]).addTo(map)
        .bindPopup('nan');

    L.marker([22.7933, 100.959]).addTo(map)
        .bindPopup('ZPSM');

    L.marker([24.9381, 98.4858]).addTo(map)
        .bindPopup('ZUTC');

    L.marker([23.5583, 104.326]).addTo(map)
        .bindPopup('ZPWS');

    L.marker([25.7375, 101.882]).addTo(map)
        .bindPopup('ZPYM');

    L.marker([27.3256, 103.755]).addTo(map)
        .bindPopup('ZPZT');

    L.marker([30.2295, 120.434]).addTo(map)
        .bindPopup('ZSHC');

    L.marker([29.9342, 122.362]).addTo(map)
        .bindPopup('ZSZS');

    L.marker([28.5622, 121.429]).addTo(map)
        .bindPopup('ZSLQ');

    L.marker([28.9658, 118.899]).addTo(map)
        .bindPopup('ZSJU');

    L.marker([29.8267, 121.462]).addTo(map)
        .bindPopup('ZSNB');

    L.marker([27.9122, 120.852]).addTo(map)
        .bindPopup('ZSWZ');

    L.marker([29.3447, 120.032]).addTo(map)
        .bindPopup('ZSYW');

    L.marker([-2.14544, -71.7581]).addTo(map)
        .bindPopup('nan');

    L.marker([8.6, -73.6167]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.75333, -73.2047]).addTo(map)
        .bindPopup('nan');

    L.marker([-0.733333, -73.0167]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.19355, -69.9432]).addTo(map)
        .bindPopup('SKLT');

    L.marker([-1.32861, -69.5797]).addTo(map)
        .bindPopup('SKLP');

    L.marker([-32.7458, -70.705]).addTo(map)
        .bindPopup('SCSF');

    L.marker([-2.89472, -69.7472]).addTo(map)
        .bindPopup('SKRA');

    L.marker([5.69764, -75.8804]).addTo(map)
        .bindPopup('SKAN');

    L.marker([6.91667, -75.0667]).addTo(map)
        .bindPopup('SKAM');

    L.marker([7.81196, -76.7164]).addTo(map)
        .bindPopup('SKLC');

    L.marker([8.85705, -76.4244]).addTo(map)
        .bindPopup('nan');

    L.marker([7.96847, -75.1985]).addTo(map)
        .bindPopup('SKCU');

    L.marker([7.59647, -74.8089]).addTo(map)
        .bindPopup('SKEB');

    L.marker([6.22055, -75.5906]).addTo(map)
        .bindPopup('SKMD');

    L.marker([7.68038, -76.6865]).addTo(map)
        .bindPopup('SKIG');

    L.marker([6.16454, -75.4231]).addTo(map)
        .bindPopup('SKRG');

    L.marker([6.21002, -74.5906]).addTo(map)
        .bindPopup('SKPN');

    L.marker([8.45, -76.7833]).addTo(map)
        .bindPopup('SKNC');

    L.marker([8.28597, -76.3804]).addTo(map)
        .bindPopup('nan');

    L.marker([7.01037, -74.7155]).addTo(map)
        .bindPopup('SKOT');

    L.marker([6.46034, -74.4105]).addTo(map)
        .bindPopup('SKPR');

    L.marker([8.76667, -76.5333]).addTo(map)
        .bindPopup('nan');

    L.marker([8.15, -77.05]).addTo(map)
        .bindPopup('nan');

    L.marker([8.07453, -76.7415]).addTo(map)
        .bindPopup('SKTU');

    L.marker([8.65, -76.75]).addTo(map)
        .bindPopup('nan');

    L.marker([8.03333, -77.0833]).addTo(map)
        .bindPopup('nan');

    L.marker([6.32883, -76.1425]).addTo(map)
        .bindPopup('SKUR');

    L.marker([7.02106, -71.3889]).addTo(map)
        .bindPopup('SKAT');

    L.marker([7.06888, -70.7369]).addTo(map)
        .bindPopup('SKUC');

    L.marker([6.31684, -70.2107]).addTo(map)
        .bindPopup('SKCN');

    L.marker([6.95187, -71.8572]).addTo(map)
        .bindPopup('SKSA');

    L.marker([6.45108, -71.7603]).addTo(map)
        .bindPopup('SKTM');

    L.marker([10.8896, -74.7808]).addTo(map)
        .bindPopup('SKBQ');

    L.marker([10.4424, -75.513]).addTo(map)
        .bindPopup('SKCG');

    L.marker([9.28474, -74.8461]).addTo(map)
        .bindPopup('SKMG');

    L.marker([9.79911, -74.786]).addTo(map)
        .bindPopup('SKMP');

    L.marker([2.28333, -74.95]).addTo(map)
        .bindPopup('nan');

    L.marker([4.90693, -72.8948]).addTo(map)
        .bindPopup('nan');

    L.marker([5.93904, -74.457]).addTo(map)
        .bindPopup('SKVL');

    L.marker([6.283, -71.083]).addTo(map)
        .bindPopup('SKPA');

    L.marker([4.65, -73.3333]).addTo(map)
        .bindPopup('nan');

    L.marker([5.67732, -72.9703]).addTo(map)
        .bindPopup('SKSO');

    L.marker([5.01281, -72.7424]).addTo(map)
        .bindPopup('SKTA');

    L.marker([5.0296, -75.4647]).addTo(map)
        .bindPopup('SKMZ');

    L.marker([-0.5833, -72.4083]).addTo(map)
        .bindPopup('SKAC');

    L.marker([1.54417, -73.9333]).addTo(map)
        .bindPopup('SKYA');

    L.marker([2.03333, -74.2167]).addTo(map)
        .bindPopup('nan');

    L.marker([4.66667, -72.0]).addTo(map)
        .bindPopup('nan');

    L.marker([1.58919, -75.5644]).addTo(map)
        .bindPopup('SKFL');

    L.marker([2.15217, -74.7663]).addTo(map)
        .bindPopup('SKSV');

    L.marker([0.7459, -75.234]).addTo(map)
        .bindPopup('SKTQ');

    L.marker([5.31911, -72.384]).addTo(map)
        .bindPopup('SKYP');

    L.marker([6.15, -71.75]).addTo(map)
        .bindPopup('SKHC');

    L.marker([5.65, -72.2]).addTo(map)
        .bindPopup('nan');

    L.marker([4.79222, -71.3564]).addTo(map)
        .bindPopup('SKOE');

    L.marker([5.73333, -71.9833]).addTo(map)
        .bindPopup('nan');

    L.marker([5.87615, -71.8866]).addTo(map)
        .bindPopup('SKPZ');

    L.marker([5.40018, -71.7001]).addTo(map)
        .bindPopup('nan');

    L.marker([5.43278, -71.6625]).addTo(map)
        .bindPopup('SKTD');

    L.marker([5.72448, -72.103]).addTo(map)
        .bindPopup('nan');

    L.marker([2.57013, -77.8986]).addTo(map)
        .bindPopup('SKGP');

    L.marker([3.05, -77.55]).addTo(map)
        .bindPopup('nan');

    L.marker([2.4544, -76.6093]).addTo(map)
        .bindPopup('SKPP');

    L.marker([2.767, -77.667]).addTo(map)
        .bindPopup('SKMB');

    L.marker([10.0966, -73.2337]).addTo(map)
        .bindPopup('nan');

    L.marker([8.34197, -73.7057]).addTo(map)
        .bindPopup('nan');

    L.marker([8.24722, -73.5819]).addTo(map)
        .bindPopup('SKAG');

    L.marker([10.435, -73.2495]).addTo(map)
        .bindPopup('SKVP');

    L.marker([8.51667, -77.3]).addTo(map)
        .bindPopup('SKAD');

    L.marker([6.55, -77.3263]).addTo(map)
        .bindPopup('SKCP');

    L.marker([6.20292, -77.3947]).addTo(map)
        .bindPopup('SKBS');

    L.marker([5.08333, -76.7]).addTo(map)
        .bindPopup('SKCD');

    L.marker([8.63333, -77.35]).addTo(map)
        .bindPopup('SKCA');

    L.marker([8.33333, -77.0833]).addTo(map)
        .bindPopup('nan');

    L.marker([6.51667, -76.6]).addTo(map)
        .bindPopup('SKJU');

    L.marker([5.6964, -77.2806]).addTo(map)
        .bindPopup('SKNQ');

    L.marker([5.69076, -76.6412]).addTo(map)
        .bindPopup('SKUI');

    L.marker([8.3, -75.15]).addTo(map)
        .bindPopup('nan');

    L.marker([9.03333, -75.7]).addTo(map)
        .bindPopup('nan');

    L.marker([7.97174, -75.4325]).addTo(map)
        .bindPopup('SKML');

    L.marker([8.82374, -75.8258]).addTo(map)
        .bindPopup('SKMR');

    L.marker([8.4, -75.6]).addTo(map)
        .bindPopup('nan');

    L.marker([8.5, -76.175]).addTo(map)
        .bindPopup('nan');

    L.marker([4.38333, -73.2]).addTo(map)
        .bindPopup('nan');

    L.marker([3.21667, -75.85]).addTo(map)
        .bindPopup('nan');

    L.marker([4.51667, -73.2833]).addTo(map)
        .bindPopup('nan');

    L.marker([5.48361, -74.6574]).addTo(map)
        .bindPopup('SKPQ');

    L.marker([4.70159, -74.1469]).addTo(map)
        .bindPopup('SKBO');

    L.marker([1.75, -69.9167]).addTo(map)
        .bindPopup('nan');

    L.marker([2.56667, -67.5833]).addTo(map)
        .bindPopup('nan');

    L.marker([3.48333, -69.8]).addTo(map)
        .bindPopup('SKBM');

    L.marker([3.85353, -67.9062]).addTo(map)
        .bindPopup('SKPD');

    L.marker([-0.383333, -72.2667]).addTo(map)
        .bindPopup('nan');

    L.marker([1.35, -71.9444]).addTo(map)
        .bindPopup('SKMF');

    L.marker([2.57969, -72.6394]).addTo(map)
        .bindPopup('SKSJ');

    L.marker([2.06667, -74.5833]).addTo(map)
        .bindPopup('nan');

    L.marker([2.95015, -75.294]).addTo(map)
        .bindPopup('SKNV');

    L.marker([1.91667, -75.1667]).addTo(map)
        .bindPopup('nan');

    L.marker([1.85777, -76.0857]).addTo(map)
        .bindPopup('SKPI');

    L.marker([2.21667, -75.25]).addTo(map)
        .bindPopup('nan');

    L.marker([11.2325, -72.4901]).addTo(map)
        .bindPopup('SKLM');

    L.marker([11.5262, -72.926]).addTo(map)
        .bindPopup('SKRH');

    L.marker([10.7667, -73.0167]).addTo(map)
        .bindPopup('nan');

    L.marker([9.04554, -73.9749]).addTo(map)
        .bindPopup('SKBC');

    L.marker([10.0167, -74.6833]).addTo(map)
        .bindPopup('nan');

    L.marker([9.8, -74.7833]).addTo(map)
        .bindPopup('SKPL');

    L.marker([11.1196, -74.2306]).addTo(map)
        .bindPopup('SKSM');

    L.marker([4.07607, -73.5627]).addTo(map)
        .bindPopup('SKAP');

    L.marker([4.58333, -72.9667]).addTo(map)
        .bindPopup('nan');

    L.marker([4.56417, -71.3364]).addTo(map)
        .bindPopup('SKCI');

    L.marker([2.0, -74.1333]).addTo(map)
        .bindPopup('SVWX');

    L.marker([9.04465, -73.0973]).addTo(map)
        .bindPopup('nan');

    L.marker([3.62918, -70.3233]).addTo(map)
        .bindPopup('nan');

    L.marker([2.1736, -73.7862]).addTo(map)
        .bindPopup('SKNA');

    L.marker([3.21667, -74.4]).addTo(map)
        .bindPopup('SKUB');

    L.marker([4.16787, -73.6138]).addTo(map)
        .bindPopup('SKVV');

    L.marker([2.44944, -78.0942]).addTo(map)
        .bindPopup('SKEH');

    L.marker([0.861925, -77.6718]).addTo(map)
        .bindPopup('SKIP');

    L.marker([2.44583, -77.9818]).addTo(map)
        .bindPopup('nan');

    L.marker([2.64955, -78.3361]).addTo(map)
        .bindPopup('nan');

    L.marker([1.39625, -77.2915]).addTo(map)
        .bindPopup('SKPS');

    L.marker([1.8, -78.1667]).addTo(map)
        .bindPopup('nan');

    L.marker([1.81442, -78.7492]).addTo(map)
        .bindPopup('SKCO');

    L.marker([7.92757, -72.5115]).addTo(map)
        .bindPopup('SKCC');

    L.marker([8.31506, -73.3583]).addTo(map)
        .bindPopup('SKOC');

    L.marker([8.63152, -72.7304]).addTo(map)
        .bindPopup('SKTB');

    L.marker([-0.182278, -74.7708]).addTo(map)
        .bindPopup('SKLG');

    L.marker([0.505228, -76.5008]).addTo(map)
        .bindPopup('SKAS');

    L.marker([0.978767, -76.6056]).addTo(map)
        .bindPopup('SKVG');

    L.marker([4.45278, -75.7664]).addTo(map)
        .bindPopup('SKAR');

    L.marker([4.81267, -75.7395]).addTo(map)
        .bindPopup('SKPE');

    L.marker([12.5836, -81.7112]).addTo(map)
        .bindPopup('SKSP');

    L.marker([13.3569, -81.3583]).addTo(map)
        .bindPopup('SKPV');

    L.marker([6.81667, -73.2833]).addTo(map)
        .bindPopup('nan');

    L.marker([7.1265, -73.1848]).addTo(map)
        .bindPopup('SKBG');

    L.marker([6.367, -73.967]).addTo(map)
        .bindPopup('SKCM');

    L.marker([7.02433, -73.8068]).addTo(map)
        .bindPopup('SKEJ');

    L.marker([7.38322, -73.5054]).addTo(map)
        .bindPopup('SKRU');

    L.marker([9.40092, -75.6913]).addTo(map)
        .bindPopup('SKCV');

    L.marker([9.33274, -75.2856]).addTo(map)
        .bindPopup('SKCZ');

    L.marker([8.69, -75.156]).addTo(map)
        .bindPopup('nan');

    L.marker([9.50945, -75.5854]).addTo(map)
        .bindPopup('SKTL');

    L.marker([3.717, -75.467]).addTo(map)
        .bindPopup('SKHA');

    L.marker([4.27624, -74.7967]).addTo(map)
        .bindPopup('SKGI');

    L.marker([4.42161, -75.1333]).addTo(map)
        .bindPopup('SKIB');

    L.marker([5.21256, -74.8836]).addTo(map)
        .bindPopup('SKQU');

    L.marker([3.3, -75.7]).addTo(map)
        .bindPopup('nan');

    L.marker([4.75361, -73.0028]).addTo(map)
        .bindPopup('nan');

    L.marker([3.81963, -76.9898]).addTo(map)
        .bindPopup('SKBU');

    L.marker([3.54322, -76.3816]).addTo(map)
        .bindPopup('SKCL');

    L.marker([4.75818, -75.9557]).addTo(map)
        .bindPopup('SKGO');

    L.marker([4.08836, -76.2351]).addTo(map)
        .bindPopup('SKUL');

    L.marker([0.533333, -70.1333]).addTo(map)
        .bindPopup('nan');

    L.marker([1.0136, -71.2961]).addTo(map)
        .bindPopup('SKCR');

    L.marker([0.633333, -69.75]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.13333, -70.25]).addTo(map)
        .bindPopup('nan');

    L.marker([1.25366, -70.2339]).addTo(map)
        .bindPopup('SKMU');

    L.marker([1.11667, -70.75]).addTo(map)
        .bindPopup('nan');

    L.marker([5.83333, -68.1333]).addTo(map)
        .bindPopup('nan');

    L.marker([4.54972, -70.925]).addTo(map)
        .bindPopup('SKGA');

    L.marker([3.73333, -76.2167]).addTo(map)
        .bindPopup('SKIM');

    L.marker([6.18472, -67.4932]).addTo(map)
        .bindPopup('SKPC');

    L.marker([5.1309, -70.8682]).addTo(map)
        .bindPopup('SKSL');

    L.marker([10.478, -84.6345]).addTo(map)
        .bindPopup('MRAN');

    L.marker([11.0353, -84.7061]).addTo(map)
        .bindPopup('MRLC');

    L.marker([10.3274, -83.8876]).addTo(map)
        .bindPopup('MRRF');

    L.marker([9.99386, -84.2088]).addTo(map)
        .bindPopup('MROC');

    L.marker([10.8922, -85.0162]).addTo(map)
        .bindPopup('MRUP');

    L.marker([10.4307, -85.1746]).addTo(map)
        .bindPopup('MRMJ');

    L.marker([10.5933, -85.5444]).addTo(map)
        .bindPopup('MRLB');

    L.marker([10.1394, -85.4458]).addTo(map)
        .bindPopup('MRNC');

    L.marker([9.97649, -85.653]).addTo(map)
        .bindPopup('MRNS');

    L.marker([9.85611, -85.3708]).addTo(map)
        .bindPopup('MRIA');

    L.marker([9.87051, -85.4814]).addTo(map)
        .bindPopup('MRCR');

    L.marker([10.3135, -85.8155]).addTo(map)
        .bindPopup('MRTM');

    L.marker([10.7687, -83.5856]).addTo(map)
        .bindPopup('MRBC');

    L.marker([10.2172, -83.797]).addTo(map)
        .bindPopup('MRGP');

    L.marker([9.95796, -83.022]).addTo(map)
        .bindPopup('MRLM');

    L.marker([10.42, -83.6095]).addTo(map)
        .bindPopup('MRBT');

    L.marker([9.16395, -83.3302]).addTo(map)
        .bindPopup('MRBA');

    L.marker([8.71889, -83.6417]).addTo(map)
        .bindPopup('MRDK');

    L.marker([8.65401, -83.1822]).addTo(map)
        .bindPopup('MRGF');

    L.marker([9.98141, -84.7727]).addTo(map)
        .bindPopup('MRCH');

    L.marker([8.60156, -82.9686]).addTo(map)
        .bindPopup('MRCC');

    L.marker([8.53333, -83.3]).addTo(map)
        .bindPopup('MRPJ');

    L.marker([8.95103, -83.4686]).addTo(map)
        .bindPopup('MRPM');

    L.marker([9.73852, -85.0138]).addTo(map)
        .bindPopup('MRTR');

    L.marker([8.82611, -82.9589]).addTo(map)
        .bindPopup('MRSV');

    L.marker([9.44316, -84.1298]).addTo(map)
        .bindPopup('MRQP');

    L.marker([9.34861, -83.7125]).addTo(map)
        .bindPopup('MRSI');

    L.marker([9.95705, -84.1398]).addTo(map)
        .bindPopup('MRPV');

    L.marker([23.0328, -82.5794]).addTo(map)
        .bindPopup('MUPB');

    L.marker([21.4203, -77.8475]).addTo(map)
        .bindPopup('MUCM');

    L.marker([22.0271, -78.7896]).addTo(map)
        .bindPopup('MUCA');

    L.marker([22.461, -78.3284]).addTo(map)
        .bindPopup('MUCC');

    L.marker([22.15, -80.4142]).addTo(map)
        .bindPopup('MUCF');

    L.marker([20.3964, -76.6214]).addTo(map)
        .bindPopup('MUBY');

    L.marker([20.2881, -77.0892]).addTo(map)
        .bindPopup('MUMZ');

    L.marker([20.3653, -74.5062]).addTo(map)
        .bindPopup('MUBA');

    L.marker([20.0853, -75.1583]).addTo(map)
        .bindPopup('MUGT');

    L.marker([19.9065, -75.2071]).addTo(map)
        .bindPopup('MUGM');

    L.marker([20.2506, -74.1505]).addTo(map)
        .bindPopup('nan');

    L.marker([20.7856, -76.3151]).addTo(map)
        .bindPopup('MUHG');

    L.marker([20.6539, -74.9222]).addTo(map)
        .bindPopup('MUMO');

    L.marker([21.6165, -81.546]).addTo(map)
        .bindPopup('MUCL');

    L.marker([21.8347, -82.7838]).addTo(map)
        .bindPopup('MUNG');

    L.marker([21.6425, -82.9551]).addTo(map)
        .bindPopup('MUSN');

    L.marker([22.9892, -82.4091]).addTo(map)
        .bindPopup('MUHA');

    L.marker([20.9876, -76.9358]).addTo(map)
        .bindPopup('MUVT');

    L.marker([23.0344, -81.4353]).addTo(map)
        .bindPopup('MUVR');

    L.marker([23.124, -81.3016]).addTo(map)
        .bindPopup('MUKW');

    L.marker([22.3361, -83.6419]).addTo(map)
        .bindPopup('MULM');

    L.marker([22.0953, -84.152]).addTo(map)
        .bindPopup('MUSJ');

    L.marker([21.7883, -79.9972]).addTo(map)
        .bindPopup('MUTD');

    L.marker([21.9704, -79.4427]).addTo(map)
        .bindPopup('MUSS');

    L.marker([19.9698, -75.8354]).addTo(map)
        .bindPopup('MUCU');

    L.marker([22.6213, -79.1472]).addTo(map)
        .bindPopup('MUBR');

    L.marker([22.4922, -79.9436]).addTo(map)
        .bindPopup('MUSC');

    L.marker([16.1365, -22.8889]).addTo(map)
        .bindPopup('GVBA');

    L.marker([14.8643, -24.746]).addTo(map)
        .bindPopup('GVBR');

    L.marker([15.1559, -23.2137]).addTo(map)
        .bindPopup('GVMA');

    L.marker([14.9245, -23.4935]).addTo(map)
        .bindPopup('GVNP');

    L.marker([17.2028, -25.0906]).addTo(map)
        .bindPopup('GVAN');

    L.marker([16.5884, -24.2847]).addTo(map)
        .bindPopup('GVSN');

    L.marker([16.7414, -22.9494]).addTo(map)
        .bindPopup('GVAC');

    L.marker([15.045, -24.3392]).addTo(map)
        .bindPopup('GVMT');

    L.marker([14.885, -24.48]).addTo(map)
        .bindPopup('GVSF');

    L.marker([16.8332, -25.0553]).addTo(map)
        .bindPopup('GVSV');

    L.marker([12.1889, -68.9598]).addTo(map)
        .bindPopup('TNCC');

    L.marker([-10.4506, 105.69]).addTo(map)
        .bindPopup('YPXM');

    L.marker([35.2359, 33.7244]).addTo(map)
        .bindPopup('LCGK');

    L.marker([34.8751, 33.6249]).addTo(map)
        .bindPopup('LCLK');

    L.marker([35.1547, 33.4961]).addTo(map)
        .bindPopup('LCEN');

    L.marker([34.5904, 32.9879]).addTo(map)
        .bindPopup('LCRA');

    L.marker([34.718, 32.4857]).addTo(map)
        .bindPopup('LCPH');

    L.marker([48.9464, 14.4275]).addTo(map)
        .bindPopup('LKCS');

    L.marker([49.1513, 16.6944]).addTo(map)
        .bindPopup('LKTB');

    L.marker([50.203, 12.915]).addTo(map)
        .bindPopup('LKKV');

    L.marker([49.9228, 12.7247]).addTo(map)
        .bindPopup('LKMR');

    L.marker([49.6963, 18.1111]).addTo(map)
        .bindPopup('LKMT');

    L.marker([49.9283, 18.0783]).addTo(map)
        .bindPopup('LKZA');

    L.marker([49.5878, 17.2108]).addTo(map)
        .bindPopup('LKOL');

    L.marker([49.4258, 17.4047]).addTo(map)
        .bindPopup('LKPO');

    L.marker([50.0134, 15.7386]).addTo(map)
        .bindPopup('LKPD');

    L.marker([50.1008, 14.26]).addTo(map)
        .bindPopup('LKPR');

    L.marker([50.2166, 14.3958]).addTo(map)
        .bindPopup('LKVO');

    L.marker([49.3144, 17.5689]).addTo(map)
        .bindPopup('LKHO');

    L.marker([49.0294, 17.4397]).addTo(map)
        .bindPopup('LKKU');

    L.marker([47.6713, 9.51149]).addTo(map)
        .bindPopup('EDNY');

    L.marker([48.7794, 8.0805]).addTo(map)
        .bindPopup('EDSB');

    L.marker([49.3924, 8.65193]).addTo(map)
        .bindPopup('ETIE');

    L.marker([48.3693, 7.82772]).addTo(map)
        .bindPopup('EDTL');

    L.marker([49.4731, 8.51417]).addTo(map)
        .bindPopup('EDFM');

    L.marker([48.6899, 9.22196]).addTo(map)
        .bindPopup('EDDS');

    L.marker([48.4253, 10.9317]).addTo(map)
        .bindPopup('EDMA');

    L.marker([49.985, 11.64]).addTo(map)
        .bindPopup('EDQD');

    L.marker([48.2056, 11.2669]).addTo(map)
        .bindPopup('ETSF');

    L.marker([47.9888, 10.2395]).addTo(map)
        .bindPopup('EDJA');

    L.marker([49.6481, 9.96639]).addTo(map)
        .bindPopup('EDQG');

    L.marker([50.2886, 11.8564]).addTo(map)
        .bindPopup('EDQM');

    L.marker([48.7157, 11.534]).addTo(map)
        .bindPopup('ETSI');

    L.marker([49.4739, 10.3881]).addTo(map)
        .bindPopup('ETIK');

    L.marker([49.7431, 10.2006]).addTo(map)
        .bindPopup('ETIN');

    L.marker([48.3538, 11.7861]).addTo(map)
        .bindPopup('EDDM');

    L.marker([49.4987, 11.0781]).addTo(map)
        .bindPopup('EDDN');

    L.marker([48.0814, 11.2831]).addTo(map)
        .bindPopup('EDMO');

    L.marker([48.9008, 12.5167]).addTo(map)
        .bindPopup('EDMS');

    L.marker([49.7942, 11.1336]).addTo(map)
        .bindPopup('EDQE');

    L.marker([52.5597, 13.2877]).addTo(map)
        .bindPopup('EDDT');

    L.marker([52.3514, 13.4939]).addTo(map)
        .bindPopup('EDDB');

    L.marker([51.8894, 14.5319]).addTo(map)
        .bindPopup('EDCD');

    L.marker([53.0475, 8.78667]).addTo(map)
        .bindPopup('EDDW');

    L.marker([53.5069, 8.57278]).addTo(map)
        .bindPopup('EDWB');

    L.marker([53.6304, 9.98823]).addTo(map)
        .bindPopup('EDDH');

    L.marker([53.5353, 9.83556]).addTo(map)
        .bindPopup('EDHI');

    L.marker([50.0333, 8.57056]).addTo(map)
        .bindPopup('EDDF');

    L.marker([51.1146, 9.286]).addTo(map)
        .bindPopup('ETHF');

    L.marker([51.4173, 9.38497]).addTo(map)
        .bindPopup('EDVK');

    L.marker([50.0498, 8.3254]).addTo(map)
        .bindPopup('ETOU');

    L.marker([54.3383, 12.7105]).addTo(map)
        .bindPopup('EDBH');

    L.marker([53.6022, 13.306]).addTo(map)
        .bindPopup('EDBN');

    L.marker([54.3833, 13.3256]).addTo(map)
        .bindPopup('EDCG');

    L.marker([53.8787, 14.1523]).addTo(map)
        .bindPopup('EDAH');

    L.marker([54.1578, 13.7744]).addTo(map)
        .bindPopup('EDCP');

    L.marker([53.3064, 12.7522]).addTo(map)
        .bindPopup('EDAX');

    L.marker([53.9182, 12.2783]).addTo(map)
        .bindPopup('ETNL');

    L.marker([53.427, 11.7834]).addTo(map)
        .bindPopup('EDOP');

    L.marker([53.7828, 7.91389]).addTo(map)
        .bindPopup('EDWG');

    L.marker([53.5964, 6.70917]).addTo(map)
        .bindPopup('EDWR');

    L.marker([53.7247, 7.37333]).addTo(map)
        .bindPopup('EDWZ');

    L.marker([52.3192, 10.5561]).addTo(map)
        .bindPopup('EDVE');

    L.marker([53.3911, 7.2275]).addTo(map)
        .bindPopup('EDWE');

    L.marker([53.7677, 8.6585]).addTo(map)
        .bindPopup('ETMN');

    L.marker([52.4611, 9.68508]).addTo(map)
        .bindPopup('EDDV');

    L.marker([53.6811, 7.05583]).addTo(map)
        .bindPopup('EDWJ');

    L.marker([53.7425, 7.49778]).addTo(map)
        .bindPopup('EDWL');

    L.marker([53.6331, 7.19028]).addTo(map)
        .bindPopup('EDWS');

    L.marker([53.7069, 7.23]).addTo(map)
        .bindPopup('EDWY');

    L.marker([52.9083, 8.04056]).addTo(map)
        .bindPopup('EDWU');

    L.marker([53.5022, 8.05222]).addTo(map)
        .bindPopup('EDWI');

    L.marker([53.1447, 8.62444]).addTo(map)
        .bindPopup('EDWD');

    L.marker([50.8231, 6.18639]).addTo(map)
        .bindPopup('EDKA');

    L.marker([51.9647, 8.54444]).addTo(map)
        .bindPopup('EDLI');

    L.marker([50.8659, 7.14274]).addTo(map)
        .bindPopup('EDDK');

    L.marker([51.5183, 7.61224]).addTo(map)
        .bindPopup('EDLW');

    L.marker([51.2895, 6.76678]).addTo(map)
        .bindPopup('EDDL');

    L.marker([51.4023, 6.93733]).addTo(map)
        .bindPopup('EDLE');

    L.marker([52.1346, 7.68483]).addTo(map)
        .bindPopup('EDDG');

    L.marker([50.9608, 6.04242]).addTo(map)
        .bindPopup('ETNG');

    L.marker([51.9228, 8.30633]).addTo(map)
        .bindPopup('ETUO');

    L.marker([51.2303, 6.50444]).addTo(map)
        .bindPopup('EDLN');

    L.marker([51.6024, 6.14217]).addTo(map)
        .bindPopup('EDLV');

    L.marker([51.6141, 8.61632]).addTo(map)
        .bindPopup('EDLP');

    L.marker([50.7077, 8.08297]).addTo(map)
        .bindPopup('EDGS');

    L.marker([49.9453, 6.565]).addTo(map)
        .bindPopup('EDRB');

    L.marker([49.9487, 7.26389]).addTo(map)
        .bindPopup('EDFH');

    L.marker([49.4369, 7.60028]).addTo(map)
        .bindPopup('ETAR');

    L.marker([49.9727, 6.6925]).addTo(map)
        .bindPopup('ETAD');

    L.marker([49.2094, 7.40056]).addTo(map)
        .bindPopup('EDRZ');

    L.marker([49.2146, 7.10951]).addTo(map)
        .bindPopup('EDDR');

    L.marker([51.1328, 13.7672]).addTo(map)
        .bindPopup('EDDC');

    L.marker([51.2936, 13.3561]).addTo(map)
        .bindPopup('EDAU');

    L.marker([51.4239, 12.2364]).addTo(map)
        .bindPopup('EDDP');

    L.marker([51.8564, 11.4203]).addTo(map)
        .bindPopup('EDBC');

    L.marker([51.7211, 11.9528]).addTo(map)
        .bindPopup('EDCK');

    L.marker([51.5527, 12.054]).addTo(map)
        .bindPopup('EDAQ');

    L.marker([54.0794, 9.94139]).addTo(map)
        .bindPopup('EDHN');

    L.marker([54.7733, 9.37889]).addTo(map)
        .bindPopup('EDXF');

    L.marker([54.9132, 8.34047]).addTo(map)
        .bindPopup('EDXW');

    L.marker([54.1533, 8.90167]).addTo(map)
        .bindPopup('EDXB');

    L.marker([54.1853, 7.91583]).addTo(map)
        .bindPopup('EDXH');

    L.marker([54.3794, 10.1453]).addTo(map)
        .bindPopup('EDHK');

    L.marker([53.8054, 10.7192]).addTo(map)
        .bindPopup('EDHL');

    L.marker([54.6844, 8.52833]).addTo(map)
        .bindPopup('EDXY');

    L.marker([54.3089, 8.68694]).addTo(map)
        .bindPopup('EDXO');

    L.marker([54.51, 9.13833]).addTo(map)
        .bindPopup('EDXJ');

    L.marker([54.4593, 9.51633]).addTo(map)
        .bindPopup('ETNS');

    L.marker([50.9819, 12.5064]).addTo(map)
        .bindPopup('EDAC');

    L.marker([50.9916, 10.4797]).addTo(map)
        .bindPopup('EDGE');

    L.marker([50.9798, 10.9581]).addTo(map)
        .bindPopup('EDDE');

    L.marker([11.1469, 42.72]).addTo(map)
        .bindPopup('HDAS');

    L.marker([11.5473, 43.1595]).addTo(map)
        .bindPopup('HDAM');

    L.marker([11.967, 43.267]).addTo(map)
        .bindPopup('HDOB');

    L.marker([11.7167, 43.2]).addTo(map)
        .bindPopup('HDMO');

    L.marker([11.783, 42.917]).addTo(map)
        .bindPopup('HDTJ');

    L.marker([55.6179, 12.656]).addTo(map)
        .bindPopup('EKCH');

    L.marker([55.0633, 14.7596]).addTo(map)
        .bindPopup('EKRN');

    L.marker([56.3, 10.619]).addTo(map)
        .bindPopup('EKAH');

    L.marker([56.2975, 9.12463]).addTo(map)
        .bindPopup('EKKA');

    L.marker([56.5502, 9.17298]).addTo(map)
        .bindPopup('EKSV');

    L.marker([55.9901, 8.35391]).addTo(map)
        .bindPopup('EKVJ');

    L.marker([57.0928, 9.84924]).addTo(map)
        .bindPopup('EKYT');

    L.marker([57.2772, 11.0001]).addTo(map)
        .bindPopup('EKLS');

    L.marker([57.5035, 10.2294]).addTo(map)
        .bindPopup('EKSN');

    L.marker([57.0688, 8.70522]).addTo(map)
        .bindPopup('EKTS');

    L.marker([54.6993, 11.4401]).addTo(map)
        .bindPopup('EKMB');

    L.marker([55.5856, 12.1314]).addTo(map)
        .bindPopup('EKRK');

    L.marker([55.7403, 9.15178]).addTo(map)
        .bindPopup('EKBI');

    L.marker([55.5259, 8.5534]).addTo(map)
        .bindPopup('EKEB');

    L.marker([55.4767, 10.3309]).addTo(map)
        .bindPopup('EKOD');

    L.marker([54.9644, 9.79173]).addTo(map)
        .bindPopup('EKSB');

    L.marker([55.221, 9.26702]).addTo(map)
        .bindPopup('EKSP');

    L.marker([15.547, -61.3]).addTo(map)
        .bindPopup('TDPD');

    L.marker([15.3367, -61.3922]).addTo(map)
        .bindPopup('TDCF');

    L.marker([18.2515, -71.1204]).addTo(map)
        .bindPopup('MDBH');

    L.marker([18.5725, -69.9856]).addTo(map)
        .bindPopup('MDJB');

    L.marker([18.5674, -68.3634]).addTo(map)
        .bindPopup('MDPC');

    L.marker([18.9075, -70.7219]).addTo(map)
        .bindPopup('MDCZ');

    L.marker([18.4297, -69.6689]).addTo(map)
        .bindPopup('MDSD');

    L.marker([17.929, -71.6448]).addTo(map)
        .bindPopup('MDCR');

    L.marker([19.7579, -70.57]).addTo(map)
        .bindPopup('MDPP');

    L.marker([19.267, -69.742]).addTo(map)
        .bindPopup('MDCY');

    L.marker([19.3214, -69.4959]).addTo(map)
        .bindPopup('MDAB');

    L.marker([19.4061, -70.6047]).addTo(map)
        .bindPopup('MDST');

    L.marker([27.8376, -0.186414]).addTo(map)
        .bindPopup('DAUA');

    L.marker([21.375, 0.923889]).addTo(map)
        .bindPopup('DATM');

    L.marker([29.2371, 0.276033]).addTo(map)
        .bindPopup('DAUT');

    L.marker([36.691, 3.21541]).addTo(map)
        .bindPopup('DAAG');

    L.marker([36.8222, 7.80917]).addTo(map)
        .bindPopup('DABB');

    L.marker([35.7521, 6.30859]).addTo(map)
        .bindPopup('DABT');

    L.marker([31.6457, -2.26986]).addTo(map)
        .bindPopup('DAOR');

    L.marker([36.712, 5.06992]).addTo(map)
        .bindPopup('DAAE');

    L.marker([34.7933, 5.73823]).addTo(map)
        .bindPopup('DAUB');

    L.marker([36.2127, 1.33177]).addTo(map)
        .bindPopup('DAOI');

    L.marker([36.276, 6.62039]).addTo(map)
        .bindPopup('DABC');

    L.marker([35.3325, 4.20639]).addTo(map)
        .bindPopup('DAAD');

    L.marker([33.7217, 1.0925]).addTo(map)
        .bindPopup('DAOY');

    L.marker([33.5114, 6.77679]).addTo(map)
        .bindPopup('DAUO');

    L.marker([30.5713, 2.85959]).addTo(map)
        .bindPopup('DAUE');

    L.marker([32.3841, 3.79411]).addTo(map)
        .bindPopup('DAUG');

    L.marker([24.2928, 9.45244]).addTo(map)
        .bindPopup('DAAJ');

    L.marker([28.0515, 9.64291]).addTo(map)
        .bindPopup('DAUZ');

    L.marker([26.7235, 8.62265]).addTo(map)
        .bindPopup('DAAP');

    L.marker([36.7951, 5.87361]).addTo(map)
        .bindPopup('DAAV');

    L.marker([32.9304, 3.31154]).addTo(map)
        .bindPopup('DAFH');

    L.marker([33.7644, 2.92834]).addTo(map)
        .bindPopup('DAUL');

    L.marker([35.2077, 0.147142]).addTo(map)
        .bindPopup('DAOV');

    L.marker([35.9088, 0.149383]).addTo(map)
        .bindPopup('nan');

    L.marker([33.5359, -0.242353]).addTo(map)
        .bindPopup('DAAY');

    L.marker([35.6239, -0.621183]).addTo(map)
        .bindPopup('DAOO');

    L.marker([35.5424, -0.532278]).addTo(map)
        .bindPopup('DAOL');

    L.marker([31.673, 6.14044]).addTo(map)
        .bindPopup('DAUH');

    L.marker([31.9172, 5.41278]).addTo(map)
        .bindPopup('DAUU');

    L.marker([33.0678, 6.08867]).addTo(map)
        .bindPopup('DAUK');

    L.marker([36.1781, 5.32449]).addTo(map)
        .bindPopup('DAAS');

    L.marker([35.1718, -0.593275]).addTo(map)
        .bindPopup('DAOS');

    L.marker([36.8641, 6.9516]).addTo(map)
        .bindPopup('DABP');

    L.marker([19.567, 5.75]).addTo(map)
        .bindPopup('DATG');

    L.marker([27.251, 2.51202]).addTo(map)
        .bindPopup('DAUI');

    L.marker([22.8115, 5.45108]).addTo(map)
        .bindPopup('DAAT');

    L.marker([35.4316, 8.12072]).addTo(map)
        .bindPopup('DABS');

    L.marker([35.3411, 1.46315]).addTo(map)
        .bindPopup('DAOB');

    L.marker([27.7004, -8.1671]).addTo(map)
        .bindPopup('DAOF');

    L.marker([35.0167, -1.45]).addTo(map)
        .bindPopup('DAON');

    L.marker([-2.88947, -78.9844]).addTo(map)
        .bindPopup('SECU');

    L.marker([0.809506, -77.7081]).addTo(map)
        .bindPopup('SETU');

    L.marker([-0.906833, -78.6158]).addTo(map)
        .bindPopup('nan');

    L.marker([-3.44199, -79.997]).addTo(map)
        .bindPopup('SERO');

    L.marker([-3.2689, -79.9616]).addTo(map)
        .bindPopup('SEMH');

    L.marker([0.978519, -79.6266]).addTo(map)
        .bindPopup('SETN');

    L.marker([-0.453758, -90.2659]).addTo(map)
        .bindPopup('SEGS');

    L.marker([-0.942628, -90.953]).addTo(map)
        .bindPopup('SEII');

    L.marker([-0.910206, -89.6174]).addTo(map)
        .bindPopup('SEST');

    L.marker([-2.15742, -79.8836]).addTo(map)
        .bindPopup('SEGU');

    L.marker([-3.99589, -79.3719]).addTo(map)
        .bindPopup('SETM');

    L.marker([-4.37823, -79.941]).addTo(map)
        .bindPopup('SEMA');

    L.marker([-0.608111, -80.4027]).addTo(map)
        .bindPopup('SESV');

    L.marker([-1.0, -80.6667]).addTo(map)
        .bindPopup('SEJI');

    L.marker([-0.946078, -80.6788]).addTo(map)
        .bindPopup('SEMT');

    L.marker([-1.04165, -80.4722]).addTo(map)
        .bindPopup('SEPV');

    L.marker([-2.73333, -78.3167]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.483, -78.167]).addTo(map)
        .bindPopup('SESC');

    L.marker([-2.38167, -77.5028]).addTo(map)
        .bindPopup('SETH');

    L.marker([-2.29917, -78.1208]).addTo(map)
        .bindPopup('SEMC');

    L.marker([-1.05972, -77.5833]).addTo(map)
        .bindPopup('SEJD');

    L.marker([-0.462886, -76.9868]).addTo(map)
        .bindPopup('SECO');

    L.marker([-0.776111, -75.5264]).addTo(map)
        .bindPopup('SETI');

    L.marker([-1.50524, -78.0627]).addTo(map)
        .bindPopup('SESM');

    L.marker([-0.129167, -78.3575]).addTo(map)
        .bindPopup('SEQM');

    L.marker([-2.20499, -80.9889]).addTo(map)
        .bindPopup('SESA');

    L.marker([0.093056, -76.8675]).addTo(map)
        .bindPopup('SENL');

    L.marker([0.115949, -75.8502]).addTo(map)
        .bindPopup('SEPT');

    L.marker([-0.122956, -76.3378]).addTo(map)
        .bindPopup('SETR');

    L.marker([-1.21207, -78.5746]).addTo(map)
        .bindPopup('SEAM');

    L.marker([59.4133, 24.8328]).addTo(map)
        .bindPopup('EETN');

    L.marker([58.9908, 22.8307]).addTo(map)
        .bindPopup('EEKA');

    L.marker([58.419, 24.4728]).addTo(map)
        .bindPopup('EEPU');

    L.marker([58.2299, 22.5095]).addTo(map)
        .bindPopup('EEKE');

    L.marker([58.3075, 26.6904]).addTo(map)
        .bindPopup('EETU');

    L.marker([27.1783, 33.7994]).addTo(map)
        .bindPopup('HEGN');

    L.marker([25.5571, 34.5837]).addTo(map)
        .bindPopup('HEMA');

    L.marker([31.1839, 29.9489]).addTo(map)
        .bindPopup('HEAX');

    L.marker([30.9177, 29.6964]).addTo(map)
        .bindPopup('HEBA');

    L.marker([30.1097, 30.8944]).addTo(map)
        .bindPopup('nan');

    L.marker([28.1013, 30.7303]).addTo(map)
        .bindPopup('HE25');

    L.marker([30.1219, 31.4056]).addTo(map)
        .bindPopup('HECA');

    L.marker([25.671, 32.7066]).addTo(map)
        .bindPopup('HELX');

    L.marker([25.4116, 29.0031]).addTo(map)
        .bindPopup('HEDK');

    L.marker([22.5857, 28.7166]).addTo(map)
        .bindPopup('HEOW');

    L.marker([25.4736, 30.5907]).addTo(map)
        .bindPopup('HEKG');

    L.marker([30.3, 31.75]).addTo(map)
        .bindPopup('nan');

    L.marker([22.376, 31.6117]).addTo(map)
        .bindPopup('HEBL');

    L.marker([23.9644, 32.82]).addTo(map)
        .bindPopup('HESN');

    L.marker([27.0465, 31.012]).addTo(map)
        .bindPopup('HEAT');

    L.marker([31.2794, 32.24]).addTo(map)
        .bindPopup('HEPS');

    L.marker([28.899, 33.2025]).addTo(map)
        .bindPopup('nan');

    L.marker([28.209, 33.6455]).addTo(map)
        .bindPopup('HETR');

    L.marker([28.6853, 34.0625]).addTo(map)
        .bindPopup('HESC');

    L.marker([27.9773, 34.395]).addTo(map)
        .bindPopup('HESH');

    L.marker([29.5878, 34.7781]).addTo(map)
        .bindPopup('HETB');

    L.marker([30.9245, 28.4614]).addTo(map)
        .bindPopup('HEAL');

    L.marker([31.3254, 27.2217]).addTo(map)
        .bindPopup('HEMM');

    L.marker([29.3455, 25.5067]).addTo(map)
        .bindPopup('nan');

    L.marker([31.4666, 25.878]).addTo(map)
        .bindPopup('nan');

    L.marker([31.0733, 33.8358]).addTo(map)
        .bindPopup('HEAR');

    L.marker([26.3428, 31.7428]).addTo(map)
        .bindPopup('HEMK');

    L.marker([15.2919, 38.9107]).addTo(map)
        .bindPopup('HHAS');

    L.marker([13.0718, 42.645]).addTo(map)
        .bindPopup('HHSB');

    L.marker([15.1043, 36.6817]).addTo(map)
        .bindPopup('HHTS');

    L.marker([15.67, 39.3701]).addTo(map)
        .bindPopup('HHMS');

    L.marker([36.6749, -4.49911]).addTo(map)
        .bindPopup('LEMG');

    L.marker([37.1887, -3.77736]).addTo(map)
        .bindPopup('LEGR');

    L.marker([36.8439, -2.3701]).addTo(map)
        .bindPopup('LEAM');

    L.marker([37.842, -4.84888]).addTo(map)
        .bindPopup('LEBA');

    L.marker([37.1749, -5.61594]).addTo(map)
        .bindPopup('LEMO');

    L.marker([36.6452, -6.34946]).addTo(map)
        .bindPopup('LERT');

    L.marker([37.418, -5.89311]).addTo(map)
        .bindPopup('LEZL');

    L.marker([36.7446, -6.06011]).addTo(map)
        .bindPopup('LEJR');

    L.marker([42.0761, -0.316667]).addTo(map)
        .bindPopup('LEHC');

    L.marker([40.403, -1.2183]).addTo(map)
        .bindPopup('LETL');

    L.marker([41.6662, -1.04155]).addTo(map)
        .bindPopup('LEZG');

    L.marker([43.5636, -6.03462]).addTo(map)
        .bindPopup('LEAS');

    L.marker([28.9455, -13.6052]).addTo(map)
        .bindPopup('GCRR');

    L.marker([28.4527, -13.8638]).addTo(map)
        .bindPopup('GCFV');

    L.marker([28.0296, -17.2146]).addTo(map)
        .bindPopup('GCGM');

    L.marker([27.9319, -15.3866]).addTo(map)
        .bindPopup('GCLP');

    L.marker([28.6265, -17.7556]).addTo(map)
        .bindPopup('GCLA');

    L.marker([27.8148, -17.8871]).addTo(map)
        .bindPopup('GCHI');

    L.marker([43.4271, -3.82001]).addTo(map)
        .bindPopup('LEXJ');

    L.marker([38.8564, -3.97]).addTo(map)
        .bindPopup('LERL');

    L.marker([42.589, -5.65556]).addTo(map)
        .bindPopup('LELN');

    L.marker([42.3576, -3.62076]).addTo(map)
        .bindPopup('LEBG');

    L.marker([40.9521, -5.50199]).addTo(map)
        .bindPopup('LESA');

    L.marker([41.7061, -4.85194]).addTo(map)
        .bindPopup('LEVD');

    L.marker([38.9485, -1.86352]).addTo(map)
        .bindPopup('LEAB');

    L.marker([41.2971, 2.07846]).addTo(map)
        .bindPopup('LEBL');

    L.marker([41.901, 2.76055]).addTo(map)
        .bindPopup('LEGE');

    L.marker([41.7282, 0.535023]).addTo(map)
        .bindPopup('LEDA');

    L.marker([42.3386, 1.40917]).addTo(map)
        .bindPopup('LESU');

    L.marker([41.1474, 1.16717]).addTo(map)
        .bindPopup('LERS');

    L.marker([38.8913, -6.82133]).addTo(map)
        .bindPopup('LEBZ');

    L.marker([43.3021, -8.37726]).addTo(map)
        .bindPopup('LECO');

    L.marker([42.8963, -8.41514]).addTo(map)
        .bindPopup('LEST');

    L.marker([42.2318, -8.62677]).addTo(map)
        .bindPopup('LEVX');

    L.marker([38.8729, 1.37312]).addTo(map)
        .bindPopup('LEIB');

    L.marker([39.8626, 4.21865]).addTo(map)
        .bindPopup('LEMH');

    L.marker([39.5517, 2.73881]).addTo(map)
        .bindPopup('LEPA');

    L.marker([42.461, -2.32224]).addTo(map)
        .bindPopup('LELO');

    L.marker([40.4719, -3.56264]).addTo(map)
        .bindPopup('LEMD');

    L.marker([40.4967, -3.44587]).addTo(map)
        .bindPopup('LETO');

    L.marker([35.2798, -2.95626]).addTo(map)
        .bindPopup('GEML');

    L.marker([37.775, -0.812389]).addTo(map)
        .bindPopup('LELC');

    L.marker([37.803, -1.125]).addTo(map)
        .bindPopup('LEMI');

    L.marker([42.77, -1.64633]).addTo(map)
        .bindPopup('LEPP');

    L.marker([43.3011, -2.91061]).addTo(map)
        .bindPopup('LEBB');

    L.marker([43.3565, -1.79061]).addTo(map)
        .bindPopup('LESO');

    L.marker([42.8828, -2.72447]).addTo(map)
        .bindPopup('LEVT');

    L.marker([38.2822, -0.558156]).addTo(map)
        .bindPopup('LEAL');

    L.marker([40.2139, 0.073333]).addTo(map)
        .bindPopup('LECH');

    L.marker([39.4893, -0.481625]).addTo(map)
        .bindPopup('LEVC');

    L.marker([8.97778, 38.7994]).addTo(map)
        .bindPopup('HAAB');

    L.marker([11.7875, 40.9915]).addTo(map)
        .bindPopup('HASM');

    L.marker([11.6081, 37.3216]).addTo(map)
        .bindPopup('HABD');

    L.marker([10.35, 37.717]).addTo(map)
        .bindPopup('HADM');

    L.marker([11.967, 38.0]).addTo(map)
        .bindPopup('HADT');

    L.marker([11.0825, 39.7114]).addTo(map)
        .bindPopup('HADC');

    L.marker([12.933, 36.167]).addTo(map)
        .bindPopup('HAMM');

    L.marker([12.5199, 37.434]).addTo(map)
        .bindPopup('HAGN');

    L.marker([11.975, 38.98]).addTo(map)
        .bindPopup('HALL');

    L.marker([10.7254, 38.7415]).addTo(map)
        .bindPopup('HAMA');

    L.marker([11.083, 37.867]).addTo(map)
        .bindPopup('nan');

    L.marker([11.3126, 36.4164]).addTo(map)
        .bindPopup('HAPW');

    L.marker([10.0185, 34.5863]).addTo(map)
        .bindPopup('HASO');

    L.marker([9.6247, 41.8542]).addTo(map)
        .bindPopup('HADR');

    L.marker([8.12876, 34.5631]).addTo(map)
        .bindPopup('HAGM');

    L.marker([7.96213, 39.1283]).addTo(map)
        .bindPopup('nan');

    L.marker([9.38639, 34.5219]).addTo(map)
        .bindPopup('HABE');

    L.marker([8.554, 34.858]).addTo(map)
        .bindPopup('HADD');

    L.marker([5.2897, 39.7023]).addTo(map)
        .bindPopup('HANG');

    L.marker([9.583, 37.35]).addTo(map)
        .bindPopup('HAFN');

    L.marker([7.15, 40.717]).addTo(map)
        .bindPopup('HAGH');

    L.marker([7.11606, 40.0463]).addTo(map)
        .bindPopup('HAGB');

    L.marker([8.1614, 35.5529]).addTo(map)
        .bindPopup('HAGR');

    L.marker([7.66609, 36.8166]).addTo(map)
        .bindPopup('HAJM');

    L.marker([6.35, 39.7167]).addTo(map)
        .bindPopup('HAML');

    L.marker([9.767, 35.1]).addTo(map)
        .bindPopup('HAMN');

    L.marker([9.55, 35.467]).addTo(map)
        .bindPopup('HANJ');

    L.marker([9.05, 36.6]).addTo(map)
        .bindPopup('HANK');

    L.marker([5.6923, 38.9764]).addTo(map)
        .bindPopup('HASK');

    L.marker([8.456, 36.352]).addTo(map)
        .bindPopup('HABB');

    L.marker([6.734, 44.253]).addTo(map)
        .bindPopup('HAKD');

    L.marker([8.234, 43.5673]).addTo(map)
        .bindPopup('nan');

    L.marker([5.93513, 43.5786]).addTo(map)
        .bindPopup('HAGO');

    L.marker([6.98444, 46.4214]).addTo(map)
        .bindPopup('nan');

    L.marker([6.08333, 44.7667]).addTo(map)
        .bindPopup('HASL');

    L.marker([9.3325, 42.9121]).addTo(map)
        .bindPopup('HAJJ');

    L.marker([5.657, 44.35]).addTo(map)
        .bindPopup('HAKL');

    L.marker([6.9724, 45.3334]).addTo(map)
        .bindPopup('HAWR');

    L.marker([14.1468, 38.7728]).addTo(map)
        .bindPopup('HAAX');

    L.marker([14.25, 36.583]).addTo(map)
        .bindPopup('HAHU');

    L.marker([13.4674, 39.5335]).addTo(map)
        .bindPopup('HAMK');

    L.marker([14.0781, 38.2725]).addTo(map)
        .bindPopup('nan');

    L.marker([6.03939, 37.5905]).addTo(map)
        .bindPopup('HAAM');

    L.marker([7.067, 38.5]).addTo(map)
        .bindPopup('HALA');

    L.marker([5.78287, 36.562]).addTo(map)
        .bindPopup('HABC');

    L.marker([6.21667, 36.6667]).addTo(map)
        .bindPopup('HABU');

    L.marker([6.9571, 35.5547]).addTo(map)
        .bindPopup('HAMT');

    L.marker([5.8646, 35.7485]).addTo(map)
        .bindPopup('HAMR');

    L.marker([6.817, 37.75]).addTo(map)
        .bindPopup('HASD');

    L.marker([7.2024, 35.415]).addTo(map)
        .bindPopup('HATP');

    L.marker([6.26, 35.5184]).addTo(map)
        .bindPopup('HAMJ');

    L.marker([7.167, 37.167]).addTo(map)
        .bindPopup('HAWC');

    L.marker([61.0446, 28.1447]).addTo(map)
        .bindPopup('EFLP');

    L.marker([63.1271, 23.0514]).addTo(map)
        .bindPopup('EFKA');

    L.marker([62.4625, 22.3931]).addTo(map)
        .bindPopup('EFKJ');

    L.marker([62.6921, 22.8323]).addTo(map)
        .bindPopup('EFSI');

    L.marker([61.6866, 27.2018]).addTo(map)
        .bindPopup('EFMI');

    L.marker([61.9431, 28.9451]).addTo(map)
        .bindPopup('EFSA');

    L.marker([62.1711, 27.8686]).addTo(map)
        .bindPopup('EFVR');

    L.marker([64.2855, 27.6924]).addTo(map)
        .bindPopup('EFKI');

    L.marker([62.3995, 25.6783]).addTo(map)
        .bindPopup('EFJY');

    L.marker([61.856, 24.7867]).addTo(map)
        .bindPopup('EFHA');

    L.marker([60.8964, 26.9384]).addTo(map)
        .bindPopup('EFUT');

    L.marker([68.3626, 23.4243]).addTo(map)
        .bindPopup('EFET');

    L.marker([68.6073, 27.4053]).addTo(map)
        .bindPopup('EFIV');

    L.marker([65.7787, 24.5821]).addTo(map)
        .bindPopup('EFKE');

    L.marker([67.701, 24.8468]).addTo(map)
        .bindPopup('EFKT');

    L.marker([66.5648, 25.8304]).addTo(map)
        .bindPopup('EFRO');

    L.marker([67.395, 26.6191]).addTo(map)
        .bindPopup('EFSO');

    L.marker([61.4141, 23.6044]).addTo(map)
        .bindPopup('EFTP');

    L.marker([63.7212, 23.1431]).addTo(map)
        .bindPopup('EFKK');

    L.marker([63.0507, 21.7622]).addTo(map)
        .bindPopup('EFVA');

    L.marker([62.6629, 29.6075]).addTo(map)
        .bindPopup('EFJO');

    L.marker([62.1661, 30.0736]).addTo(map)
        .bindPopup('EFIT');

    L.marker([65.9876, 29.2394]).addTo(map)
        .bindPopup('EFKS');

    L.marker([64.9301, 25.3546]).addTo(map)
        .bindPopup('EFOU');

    L.marker([64.0547, 24.7253]).addTo(map)
        .bindPopup('EFYL');

    L.marker([63.0071, 27.7978]).addTo(map)
        .bindPopup('EFKU');

    L.marker([61.4617, 21.8]).addTo(map)
        .bindPopup('EFPO');

    L.marker([60.3172, 24.9633]).addTo(map)
        .bindPopup('EFHK');

    L.marker([60.2546, 25.0428]).addTo(map)
        .bindPopup('EFHF');

    L.marker([60.6544, 24.8811]).addTo(map)
        .bindPopup('EFHV');

    L.marker([60.1222, 19.8982]).addTo(map)
        .bindPopup('EFMA');

    L.marker([60.5141, 22.2628]).addTo(map)
        .bindPopup('EFTU');

    L.marker([-16.7481, -179.667]).addTo(map)
        .bindPopup('NFNH');

    L.marker([-17.7554, 177.443]).addTo(map)
        .bindPopup('NFFN');

    L.marker([-18.257, 178.068]).addTo(map)
        .bindPopup('NFND');

    L.marker([-18.0433, 178.559]).addTo(map)
        .bindPopup('NFNA');

    L.marker([-17.7433, -179.342]).addTo(map)
        .bindPopup('NFCI');

    L.marker([-17.617, 179.017]).addTo(map)
        .bindPopup('NFNW');

    L.marker([-19.0581, 178.157]).addTo(map)
        .bindPopup('NFKD');

    L.marker([-17.3458, 179.422]).addTo(map)
        .bindPopup('NFNO');

    L.marker([-17.7111, 178.759]).addTo(map)
        .bindPopup('NFNB');

    L.marker([-18.1992, -178.817]).addTo(map)
        .bindPopup('NFNK');

    L.marker([-18.5667, 179.951]).addTo(map)
        .bindPopup('NFMO');

    L.marker([-18.1156, 179.34]).addTo(map)
        .bindPopup('NFNG');

    L.marker([-20.6589, -178.741]).addTo(map)
        .bindPopup('NFOL');

    L.marker([-17.269, -178.976]).addTo(map)
        .bindPopup('NFVB');

    L.marker([-16.4494, 179.74]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.8598, 178.623]).addTo(map)
        .bindPopup('NFNU');

    L.marker([-16.4667, 179.34]).addTo(map)
        .bindPopup('NFNL');

    L.marker([-16.5337, 179.976]).addTo(map)
        .bindPopup('NFFR');

    L.marker([-12.4825, 177.071]).addTo(map)
        .bindPopup('NFNR');

    L.marker([-16.8028, 179.341]).addTo(map)
        .bindPopup('NFNS');

    L.marker([-16.6906, -179.877]).addTo(map)
        .bindPopup('NFNM');

    L.marker([-16.943, 177.368]).addTo(map)
        .bindPopup('nan');

    L.marker([-17.7358, 177.129]).addTo(map)
        .bindPopup('NFCS');

    L.marker([-17.7543, 177.437]).addTo(map)
        .bindPopup('nan');

    L.marker([-17.6731, 177.098]).addTo(map)
        .bindPopup('NFMA');

    L.marker([-18.0677, 177.315]).addTo(map)
        .bindPopup('nan');

    L.marker([-17.7779, 177.197]).addTo(map)
        .bindPopup('NFFO');

    L.marker([-16.966, 177.368]).addTo(map)
        .bindPopup('nan');

    L.marker([-17.5, 177.842]).addTo(map)
        .bindPopup('NFNV');

    L.marker([-18.5125, 177.639]).addTo(map)
        .bindPopup('NFVL');

    L.marker([-16.7589, 177.545]).addTo(map)
        .bindPopup('NFSW');

    L.marker([62.0636, -7.27722]).addTo(map)
        .bindPopup('EKVG');

    L.marker([-51.8228, -58.4472]).addTo(map)
        .bindPopup('EGYP');

    L.marker([-51.6857, -57.7776]).addTo(map)
        .bindPopup('SFAL');

    L.marker([7.46187, 151.843]).addTo(map)
        .bindPopup('PTKK');

    L.marker([5.35698, 162.958]).addTo(map)
        .bindPopup('PTSA');

    L.marker([6.9851, 158.209]).addTo(map)
        .bindPopup('PTPN');

    L.marker([10.0198, 139.79]).addTo(map)
        .bindPopup('nan');

    L.marker([9.49891, 138.083]).addTo(map)
        .bindPopup('PTYA');

    L.marker([45.0883, 6.08472]).addTo(map)
        .bindPopup('LFHU');

    L.marker([44.8914, 2.42194]).addTo(map)
        .bindPopup('LFLW');

    L.marker([45.7867, 3.16917]).addTo(map)
        .bindPopup('LFLC');

    L.marker([45.6381, 5.88023]).addTo(map)
        .bindPopup('LFLB');

    L.marker([45.3967, 6.63472]).addTo(map)
        .bindPopup('LFLJ');

    L.marker([45.5406, 4.29639]).addTo(map)
        .bindPopup('LFMH');

    L.marker([45.3629, 5.32937]).addTo(map)
        .bindPopup('LFLS');

    L.marker([45.0807, 3.76289]).addTo(map)
        .bindPopup('LFHP');

    L.marker([45.7272, 4.94427]).addTo(map)
        .bindPopup('LFLY');

    L.marker([45.7256, 5.08111]).addTo(map)
        .bindPopup('LFLL');

    L.marker([46.2226, 2.36396]).addTo(map)
        .bindPopup('LFBK');

    L.marker([45.407, 6.57794]).addTo(map)
        .bindPopup('LFKX');

    L.marker([45.8208, 6.65222]).addTo(map)
        .bindPopup('LFHM');

    L.marker([45.9308, 6.10639]).addTo(map)
        .bindPopup('LFLP');

    L.marker([44.5442, 4.37219]).addTo(map)
        .bindPopup('LFHO');

    L.marker([46.0583, 4.00139]).addTo(map)
        .bindPopup('LFLO');

    L.marker([44.9216, 4.9699]).addTo(map)
        .bindPopup('LFLU');

    L.marker([46.1697, 3.40374]).addTo(map)
        .bindPopup('LFLV');

    L.marker([46.2056, 5.29167]).addTo(map)
        .bindPopup('LFHS');

    L.marker([46.5344, 3.42167]).addTo(map)
        .bindPopup('LFHY');

    L.marker([47.8502, 3.49711]).addTo(map)
        .bindPopup('LFLA');

    L.marker([47.2689, 5.09]).addTo(map)
        .bindPopup('LFSD');

    L.marker([47.0427, 5.43506]).addTo(map)
        .bindPopup('LFGJ');

    L.marker([47.0026, 3.11333]).addTo(map)
        .bindPopup('LFQG');

    L.marker([46.4125, 4.01326]).addTo(map)
        .bindPopup('LFLN');

    L.marker([48.4479, -4.41854]).addTo(map)
        .bindPopup('LFRB');

    L.marker([48.5877, -2.07996]).addTo(map)
        .bindPopup('LFRD');

    L.marker([48.7544, -3.47166]).addTo(map)
        .bindPopup('LFRO');

    L.marker([48.5303, -4.15164]).addTo(map)
        .bindPopup('LFRJ');

    L.marker([47.7606, -3.44]).addTo(map)
        .bindPopup('LFRH');

    L.marker([48.6032, -3.81578]).addTo(map)
        .bindPopup('LFRU');

    L.marker([48.0695, -1.73479]).addTo(map)
        .bindPopup('LFRN');

    L.marker([48.5378, -2.85444]).addTo(map)
        .bindPopup('LFRT');

    L.marker([47.975, -4.16779]).addTo(map)
        .bindPopup('LFRQ');

    L.marker([47.7233, -2.71856]).addTo(map)
        .bindPopup('LFRV');

    L.marker([47.0581, 2.37028]).addTo(map)
        .bindPopup('LFLD');

    L.marker([46.8603, 1.72111]).addTo(map)
        .bindPopup('LFLX');

    L.marker([47.9878, 1.76056]).addTo(map)
        .bindPopup('LFOZ');

    L.marker([47.4322, 0.727606]).addTo(map)
        .bindPopup('LFOT');

    L.marker([41.9236, 8.80292]).addTo(map)
        .bindPopup('LFKJ');

    L.marker([42.5527, 9.48373]).addTo(map)
        .bindPopup('LFKB');

    L.marker([42.5244, 8.79306]).addTo(map)
        .bindPopup('LFKC');

    L.marker([41.5006, 9.09778]).addTo(map)
        .bindPopup('LFKF');

    L.marker([41.6606, 8.88975]).addTo(map)
        .bindPopup('LFKO');

    L.marker([41.9244, 9.406]).addTo(map)
        .bindPopup('LFKS');

    L.marker([48.1099, 7.35901]).addTo(map)
        .bindPopup('LFGA');

    L.marker([48.6921, 6.23046]).addTo(map)
        .bindPopup('LFSN');

    L.marker([48.325, 6.06998]).addTo(map)
        .bindPopup('LFSG');

    L.marker([48.9821, 6.25132]).addTo(map)
        .bindPopup('LFJL');

    L.marker([49.0717, 6.13167]).addTo(map)
        .bindPopup('LFSF');

    L.marker([49.31, 4.05]).addTo(map)
        .bindPopup('LFSR');

    L.marker([48.5383, 7.62823]).addTo(map)
        .bindPopup('LFST');

    L.marker([47.8168, 6.38111]).addTo(map)
        .bindPopup('LFSZ');

    L.marker([49.7827, 4.64118]).addTo(map)
        .bindPopup('LFQV');

    L.marker([49.9715, 2.69766]).addTo(map)
        .bindPopup('LFAQ');

    L.marker([50.9621, 1.95476]).addTo(map)
        .bindPopup('LFAC');

    L.marker([49.2535, 2.51914]).addTo(map)
        .bindPopup('LFPC');

    L.marker([50.6184, 2.64224]).addTo(map)
        .bindPopup('LFQT');

    L.marker([50.5633, 3.08689]).addTo(map)
        .bindPopup('LFQQ');

    L.marker([50.5174, 1.62059]).addTo(map)
        .bindPopup('LFAT');

    L.marker([49.0097, 2.54778]).addTo(map)
        .bindPopup('LFPG');

    L.marker([48.7519, 2.10619]).addTo(map)
        .bindPopup('LFPN');

    L.marker([49.6501, -1.47028]).addTo(map)
        .bindPopup('LFRC');

    L.marker([49.1733, -0.45]).addTo(map)
        .bindPopup('LFRK');

    L.marker([49.3653, 0.154306]).addTo(map)
        .bindPopup('LFRG');

    L.marker([49.8825, 1.08528]).addTo(map)
        .bindPopup('LFAB');

    L.marker([49.0287, 1.21986]).addTo(map)
        .bindPopup('LFOE');

    L.marker([48.8831, -1.56417]).addTo(map)
        .bindPopup('LFRF');

    L.marker([49.5339, 0.088056]).addTo(map)
        .bindPopup('LFOH');

    L.marker([49.3842, 1.1748]).addTo(map)
        .bindPopup('LFOP');

    L.marker([44.1747, 0.590556]).addTo(map)
        .bindPopup('LFBA');

    L.marker([45.7292, 0.221456]).addTo(map)
        .bindPopup('LFBU');

    L.marker([43.4683, -1.53111]).addTo(map)
        .bindPopup('LFBZ');

    L.marker([44.8283, -0.715556]).addTo(map)
        .bindPopup('LFBD');

    L.marker([45.0397, 1.48556]).addTo(map)
        .bindPopup('LFSL');

    L.marker([45.6583, -0.3175]).addTo(map)
        .bindPopup('LFBG');

    L.marker([44.8253, 0.518611]).addTo(map)
        .bindPopup('LFBE');

    L.marker([45.8628, 1.17944]).addTo(map)
        .bindPopup('LFBL');

    L.marker([46.1792, -1.19528]).addTo(map)
        .bindPopup('LFBH');

    L.marker([46.3135, -0.394529]).addTo(map)
        .bindPopup('LFBN');

    L.marker([45.1981, 0.815556]).addTo(map)
        .bindPopup('LFBX');

    L.marker([46.5877, 0.306666]).addTo(map)
        .bindPopup('LFBI');

    L.marker([43.38, -0.418611]).addTo(map)
        .bindPopup('LFBP');

    L.marker([45.8878, -0.983056]).addTo(map)
        .bindPopup('LFDN');

    L.marker([45.6281, -0.9725]).addTo(map)
        .bindPopup('LFCY');

    L.marker([43.3235, 3.3539]).addTo(map)
        .bindPopup('LFMU');

    L.marker([43.216, 2.30632]).addTo(map)
        .bindPopup('LFMK');

    L.marker([43.5563, 2.28918]).addTo(map)
        .bindPopup('LFCK');

    L.marker([43.7574, 4.41635]).addTo(map)
        .bindPopup('LFTW');

    L.marker([43.9139, 2.11306]).addTo(map)
        .bindPopup('LFCI');

    L.marker([43.1787, -0.006439]).addTo(map)
        .bindPopup('LFBT');

    L.marker([44.5021, 3.53282]).addTo(map)
        .bindPopup('LFNB');

    L.marker([43.5762, 3.96301]).addTo(map)
        .bindPopup('LFMT');

    L.marker([42.7404, 2.87067]).addTo(map)
        .bindPopup('LFMP');

    L.marker([44.4079, 2.48267]).addTo(map)
        .bindPopup('LFCR');

    L.marker([43.6291, 1.36382]).addTo(map)
        .bindPopup('LFBO');

    L.marker([44.3514, 1.47528]).addTo(map)
        .bindPopup('LFCC');

    L.marker([47.5603, -0.312222]).addTo(map)
        .bindPopup('LFJR');

    L.marker([47.0821, -0.877064]).addTo(map)
        .bindPopup('LFOU');

    L.marker([46.7019, -1.37863]).addTo(map)
        .bindPopup('LFRI');

    L.marker([46.7186, -2.39111]).addTo(map)
        .bindPopup('LFEY');

    L.marker([47.2894, -2.34639]).addTo(map)
        .bindPopup('LFRE');

    L.marker([47.9486, 0.201667]).addTo(map)
        .bindPopup('LFRM');

    L.marker([46.4769, -1.72278]).addTo(map)
        .bindPopup('LFOO');

    L.marker([48.0314, -0.742986]).addTo(map)
        .bindPopup('LFOV');

    L.marker([47.1532, -1.61073]).addTo(map)
        .bindPopup('LFRS');

    L.marker([47.3106, -2.15667]).addTo(map)
        .bindPopup('LFRZ');

    L.marker([43.9073, 4.90183]).addTo(map)
        .bindPopup('LFMV');

    L.marker([44.3872, 6.60919]).addTo(map)
        .bindPopup('LFMR');

    L.marker([43.542, 6.95348]).addTo(map)
        .bindPopup('LFMD');

    L.marker([43.2525, 5.78519]).addTo(map)
        .bindPopup('LFMQ');

    L.marker([44.455, 6.03778]).addTo(map)
        .bindPopup('LFNA');

    L.marker([43.2054, 6.482]).addTo(map)
        .bindPopup('LFTZ');

    L.marker([43.4393, 5.22142]).addTo(map)
        .bindPopup('LFML');

    L.marker([43.6584, 7.21587]).addTo(map)
        .bindPopup('LFMN');

    L.marker([43.5244, 4.94167]).addTo(map)
        .bindPopup('LFMI');

    L.marker([43.5056, 5.36778]).addTo(map)
        .bindPopup('LFMA');

    L.marker([44.7017, 6.60028]).addTo(map)
        .bindPopup('LFNC');

    L.marker([43.0973, 6.14603]).addTo(map)
        .bindPopup('LFTH');

    L.marker([0.458611, 9.41222]).addTo(map)
        .bindPopup('FOOL');

    L.marker([0.7, 9.98333]).addTo(map)
        .bindPopup('nan');

    L.marker([0.3, 9.5]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.13967, 13.9036]).addTo(map)
        .bindPopup('FOGA');

    L.marker([-1.5724, 14.2878]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.533, 13.267]).addTo(map)
        .bindPopup('FOOD');

    L.marker([-1.65616, 13.438]).addTo(map)
        .bindPopup('FOON');

    L.marker([-0.665214, 13.6731]).addTo(map)
        .bindPopup('FOGQ');

    L.marker([-0.0166667, 11.4]).addTo(map)
        .bindPopup('nan');

    L.marker([-0.0833333, 11.4667]).addTo(map)
        .bindPopup('nan');

    L.marker([-0.183, 10.75]).addTo(map)
        .bindPopup('FOGJ');

    L.marker([-0.704389, 10.2457]).addTo(map)
        .bindPopup('FOGR');

    L.marker([0.08333, 11.0833]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.283, 10.617]).addTo(map)
        .bindPopup('FOGF');

    L.marker([-2.4, 11.367]).addTo(map)
        .bindPopup('FOGE');

    L.marker([-1.883, 11.933]).addTo(map)
        .bindPopup('FOGG');

    L.marker([-1.73333, 10.2167]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.84514, 11.0567]).addTo(map)
        .bindPopup('FOGM');

    L.marker([-2.433, 11.0]).addTo(map)
        .bindPopup('FOGI');

    L.marker([-3.45842, 10.6741]).addTo(map)
        .bindPopup('FOOY');

    L.marker([-2.85, 11.017]).addTo(map)
        .bindPopup('FOOT');

    L.marker([-0.1075, 11.9438]).addTo(map)
        .bindPopup('FOGB');

    L.marker([-2.78528, 10.0472]).addTo(map)
        .bindPopup('nan');

    L.marker([1.017, 13.933]).addTo(map)
        .bindPopup('FOOE');

    L.marker([0.579211, 12.8909]).addTo(map)
        .bindPopup('FOOK');

    L.marker([-0.6035, 12.2608]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.18461, 12.4413]).addTo(map)
        .bindPopup('FOGK');

    L.marker([-0.826667, 12.7486]).addTo(map)
        .bindPopup('FOOR');

    L.marker([-0.545, 9.444]).addTo(map)
        .bindPopup('FOGW');

    L.marker([-0.666667, 9.45]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.1713, 10.2088]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.9223, 9.3092]).addTo(map)
        .bindPopup('FOOI');

    L.marker([-1.57473, 9.26269]).addTo(map)
        .bindPopup('FOOH');

    L.marker([-2.98333, 10.3]).addTo(map)
        .bindPopup('nan');

    L.marker([-0.711739, 8.75438]).addTo(map)
        .bindPopup('FOOG');

    L.marker([-1.35, 9.33333]).addTo(map)
        .bindPopup('nan');

    L.marker([2.07564, 11.4932]).addTo(map)
        .bindPopup('FOOB');

    L.marker([1.0085, 10.7552]).addTo(map)
        .bindPopup('nan');

    L.marker([2.15, 12.133]).addTo(map)
        .bindPopup('FOGV');

    L.marker([0.783, 11.55]).addTo(map)
        .bindPopup('FOOM');

    L.marker([1.54311, 11.5814]).addTo(map)
        .bindPopup('FOGO');

    L.marker([51.6117, -0.808333]).addTo(map)
        .bindPopup('EGTB');

    L.marker([50.4228, -4.10583]).addTo(map)
        .bindPopup('EGHD');

    L.marker([50.6781, -1.10944]).addTo(map)
        .bindPopup('EGHJ');

    L.marker([51.3239, -0.8475]).addTo(map)
        .bindPopup('EGLK');

    L.marker([52.3426, 0.772939]).addTo(map)
        .bindPopup('EGXH');

    L.marker([51.6164, -1.09583]).addTo(map)
        .bindPopup('EGUB');

    L.marker([52.4539, -1.74803]).addTo(map)
        .bindPopup('EGBB');

    L.marker([53.7717, -3.02861]).addTo(map)
        .bindPopup('EGNH');

    L.marker([50.78, -1.8425]).addTo(map)
        .bindPopup('EGHH');

    L.marker([51.3308, 0.0325]).addTo(map)
        .bindPopup('EGKB');

    L.marker([51.3827, -2.71909]).addTo(map)
        .bindPopup('EGGD');

    L.marker([54.1286, -3.2675]).addTo(map)
        .bindPopup('EGNL');

    L.marker([51.75, -1.58362]).addTo(map)
        .bindPopup('EGVN');

    L.marker([54.9375, -2.80917]).addTo(map)
        .bindPopup('EGNC');

    L.marker([52.205, 0.175]).addTo(map)
        .bindPopup('EGSC');

    L.marker([52.3697, -1.47972]).addTo(map)
        .bindPopup('EGBE');

    L.marker([53.4805, -1.01066]).addTo(map)
        .bindPopup('EGCN');

    L.marker([52.8311, -1.32806]).addTo(map)
        .bindPopup('EGNX');

    L.marker([50.7344, -3.41389]).addTo(map)
        .bindPopup('EGTE');

    L.marker([51.2758, -0.776333]).addTo(map)
        .bindPopup('EGLF');

    L.marker([51.6822, -1.79003]).addTo(map)
        .bindPopup('EGVA');

    L.marker([51.6681, -2.05694]).addTo(map)
        .bindPopup('EGBP');

    L.marker([51.8942, -2.16722]).addTo(map)
        .bindPopup('EGBJ');

    L.marker([54.0489, -1.25275]).addTo(map)
        .bindPopup('EGXU');

    L.marker([53.5744, -0.350833]).addTo(map)
        .bindPopup('EGNJ');

    L.marker([54.0833, -4.62333]).addTo(map)
        .bindPopup('EGNS');

    L.marker([49.9133, -6.29167]).addTo(map)
        .bindPopup('EGHE');

    L.marker([52.6484, 0.550692]).addTo(map)
        .bindPopup('EGYM');

    L.marker([51.2136, -0.138611]).addTo(map)
        .bindPopup('EGKR');

    L.marker([53.8659, -1.66057]).addTo(map)
        .bindPopup('EGNM');

    L.marker([51.5053, 0.055278]).addTo(map)
        .bindPopup('EGLC');

    L.marker([50.1028, -5.67056]).addTo(map)
        .bindPopup('EGHC');

    L.marker([51.1481, -0.190278]).addTo(map)
        .bindPopup('EGKK');

    L.marker([52.4908, -1.1312]).addTo(map)
        .bindPopup('EG74');

    L.marker([51.4775, -0.461389]).addTo(map)
        .bindPopup('EGLL');

    L.marker([52.4093, 0.561]).addTo(map)
        .bindPopup('EGUL');

    L.marker([53.3336, -2.84972]).addTo(map)
        .bindPopup('EGGP');

    L.marker([51.8747, -0.368333]).addTo(map)
        .bindPopup('EGGW');

    L.marker([51.5051, -1.99343]).addTo(map)
        .bindPopup('EGDL');

    L.marker([50.9561, 0.939167]).addTo(map)
        .bindPopup('EGMD');

    L.marker([53.3537, -2.27495]).addTo(map)
        .bindPopup('EGCC');

    L.marker([52.3619, 0.486406]).addTo(map)
        .bindPopup('EGUN');

    L.marker([54.5092, -1.42941]).addTo(map)
        .bindPopup('EGNV');

    L.marker([55.0375, -1.69167]).addTo(map)
        .bindPopup('EGNT');

    L.marker([51.553, -0.418167]).addTo(map)
        .bindPopup('EGWU');

    L.marker([52.92, -1.07917]).addTo(map)
        .bindPopup('EGBN');

    L.marker([50.4406, -4.99541]).addTo(map)
        .bindPopup('EGHQ');

    L.marker([52.6758, 1.28278]).addTo(map)
        .bindPopup('EGSH');

    L.marker([51.2341, -0.942825]).addTo(map)
        .bindPopup('EGVO');

    L.marker([52.3053, -0.793056]).addTo(map)
        .bindPopup('EGBK');

    L.marker([51.8369, -1.32]).addTo(map)
        .bindPopup('EGTK');

    L.marker([53.093, -0.166014]).addTo(map)
        .bindPopup('EGXC');

    L.marker([52.0908, 0.131944]).addTo(map)
        .bindPopup('EGSU');

    L.marker([51.1872, -1.03361]).addTo(map)
        .bindPopup('EGHL');

    L.marker([50.8594, -0.759167]).addTo(map)
        .bindPopup('EGHR');

    L.marker([52.3572, -0.107833]).addTo(map)
        .bindPopup('EGUY');

    L.marker([51.3519, 0.503333]).addTo(map)
        .bindPopup('EGTO');

    L.marker([51.5703, 0.693333]).addTo(map)
        .bindPopup('EGMC');

    L.marker([50.9503, -1.3568]).addTo(map)
        .bindPopup('EGHI');

    L.marker([53.3078, -0.550833]).addTo(map)
        .bindPopup('EGXP');

    L.marker([51.885, 0.235]).addTo(map)
        .bindPopup('EGSS');

    L.marker([51.2862, -1.78202]).addTo(map)
        .bindPopup('EGDJ');

    L.marker([53.1662, -0.523811]).addTo(map)
        .bindPopup('EGXW');

    L.marker([51.0094, -2.63882]).addTo(map)
        .bindPopup('EGDY');

    L.marker([49.4347, -2.60194]).addTo(map)
        .bindPopup('EGJB');

    L.marker([49.7067, -2.21444]).addTo(map)
        .bindPopup('EGJA');

    L.marker([51.3422, 1.34611]).addTo(map)
        .bindPopup('EGMH');

    L.marker([53.745, -2.88389]).addTo(map)
        .bindPopup('EGNO');

    L.marker([54.6575, -6.21583]).addTo(map)
        .bindPopup('EGAA');

    L.marker([54.6181, -5.8725]).addTo(map)
        .bindPopup('EGAC');

    L.marker([55.0544, -7.02]).addTo(map)
        .bindPopup('EGQB');

    L.marker([54.3989, -7.65167]).addTo(map)
        .bindPopup('EGAB');

    L.marker([55.0428, -7.16111]).addTo(map)
        .bindPopup('EGAE');

    L.marker([52.7294, -0.651389]).addTo(map)
        .bindPopup('EGXJ');

    L.marker([57.2019, -2.19778]).addTo(map)
        .bindPopup('EGPD');

    L.marker([56.3729, -2.86844]).addTo(map)
        .bindPopup('EGQL');

    L.marker([57.4811, -7.36278]).addTo(map)
        .bindPopup('EGPL');

    L.marker([57.0228, -7.44306]).addTo(map)
        .bindPopup('EGPR');

    L.marker([55.4372, -5.68639]).addTo(map)
        .bindPopup('EGEC');

    L.marker([56.6019, -6.61778]).addTo(map)
        .bindPopup('nan');

    L.marker([56.0575, -6.24306]).addTo(map)
        .bindPopup('nan');

    L.marker([56.4525, -3.02583]).addTo(map)
        .bindPopup('EGPN');

    L.marker([57.869, -4.023]).addTo(map)
        .bindPopup('nan');

    L.marker([55.95, -3.3725]).addTo(map)
        .bindPopup('EGPH');

    L.marker([59.1906, -2.77222]).addTo(map)
        .bindPopup('EGED');

    L.marker([59.5358, -1.62806]).addTo(map)
        .bindPopup('EGEF');

    L.marker([60.1217, -2.0532]).addTo(map)
        .bindPopup('nan');

    L.marker([57.6494, -3.56064]).addTo(map)
        .bindPopup('EGQK');

    L.marker([55.8719, -4.43306]).addTo(map)
        .bindPopup('EGPF');

    L.marker([55.6819, -6.25667]).addTo(map)
        .bindPopup('EGPI');

    L.marker([57.5425, -4.0475]).addTo(map)
        .bindPopup('EGPE');

    L.marker([58.9578, -2.905]).addTo(map)
        .bindPopup('EGPA');

    L.marker([57.7052, -3.33917]).addTo(map)
        .bindPopup('EGQS');

    L.marker([59.8814, -1.29389]).addTo(map)
        .bindPopup('EGPB');

    L.marker([60.1919, -1.24361]).addTo(map)
        .bindPopup('EGET');

    L.marker([59.2503, -2.57667]).addTo(map)
        .bindPopup('EGES');

    L.marker([59.3675, -2.43444]).addTo(map)
        .bindPopup('EGEN');

    L.marker([56.4635, -5.39967]).addTo(map)
        .bindPopup('EGEO');

    L.marker([60.4252, -0.75]).addTo(map)
        .bindPopup('nan');

    L.marker([55.5094, -4.58667]).addTo(map)
        .bindPopup('EGPK');

    L.marker([59.3517, -2.90028]).addTo(map)
        .bindPopup('EGEP');

    L.marker([56.4392, -3.37222]).addTo(map)
        .bindPopup('EGPT');

    L.marker([60.3217, -1.69306]).addTo(map)
        .bindPopup('nan');

    L.marker([57.2414, -5.90966]).addTo(map)
        .bindPopup('EGEI');

    L.marker([59.1553, -2.64139]).addTo(map)
        .bindPopup('EGER');

    L.marker([58.2156, -6.33111]).addTo(map)
        .bindPopup('EGPO');

    L.marker([56.4992, -6.86917]).addTo(map)
        .bindPopup('EGPU');

    L.marker([60.7469, -0.854722]).addTo(map)
        .bindPopup('EGPW');

    L.marker([60.3775, -0.925556]).addTo(map)
        .bindPopup('EGEH');

    L.marker([58.4589, -3.09306]).addTo(map)
        .bindPopup('EGPC');

    L.marker([59.3503, -2.95]).addTo(map)
        .bindPopup('EGEW');

    L.marker([51.5194, -2.59361]).addTo(map)
        .bindPopup('EGTG');

    L.marker([53.1781, -2.97778]).addTo(map)
        .bindPopup('EGNR');

    L.marker([51.3967, -3.34333]).addTo(map)
        .bindPopup('EGFF');

    L.marker([51.8331, -4.96111]).addTo(map)
        .bindPopup('EGFE');

    L.marker([51.6053, -4.06783]).addTo(map)
        .bindPopup('EGFH');

    L.marker([53.2481, -4.53534]).addTo(map)
        .bindPopup('EGOV');

    L.marker([50.8356, -0.297222]).addTo(map)
        .bindPopup('EGKA');

    L.marker([12.0042, -61.7862]).addTo(map)
        .bindPopup('TGPY');

    L.marker([12.4761, -61.4728]).addTo(map)
        .bindPopup('nan');

    L.marker([42.8582, 41.1281]).addTo(map)
        .bindPopup('UGSS');

    L.marker([41.6103, 41.5997]).addTo(map)
        .bindPopup('UGSB');

    L.marker([42.1767, 42.4826]).addTo(map)
        .bindPopup('UGKO');

    L.marker([41.6692, 44.9547]).addTo(map)
        .bindPopup('UGTB');

    L.marker([4.81981, -52.3604]).addTo(map)
        .bindPopup('SOCA');

    L.marker([4.28583, -54.3731]).addTo(map)
        .bindPopup('SOGS');

    L.marker([5.48306, -54.0344]).addTo(map)
        .bindPopup('SOOM');

    L.marker([3.6575, -54.0372]).addTo(map)
        .bindPopup('SOOA');

    L.marker([3.8976, -51.8041]).addTo(map)
        .bindPopup('SOOG');

    L.marker([4.31472, -52.1317]).addTo(map)
        .bindPopup('SOOR');

    L.marker([3.61361, -53.2042]).addTo(map)
        .bindPopup('SOOS');

    L.marker([6.71456, -1.59082]).addTo(map)
        .bindPopup('DGSI');

    L.marker([7.36183, -2.32876]).addTo(map)
        .bindPopup('DGSN');

    L.marker([5.60519, -0.166786]).addTo(map)
        .bindPopup('DGAA');

    L.marker([9.55719, -0.863214]).addTo(map)
        .bindPopup('DGLE');

    L.marker([4.89606, -1.77476]).addTo(map)
        .bindPopup('DGTK');

    L.marker([36.1512, -5.34966]).addTo(map)
        .bindPopup('LXGB');

    L.marker([69.2432, -51.0571]).addTo(map)
        .bindPopup('BGJN');

    L.marker([70.7342, -52.6962]).addTo(map)
        .bindPopup('BGUQ');

    L.marker([72.7902, -56.1306]).addTo(map)
        .bindPopup('BGUK');

    L.marker([77.4886, -69.3887]).addTo(map)
        .bindPopup('BGQQ');

    L.marker([76.5312, -68.7032]).addTo(map)
        .bindPopup('BGTL');

    L.marker([70.6804, -52.1116]).addTo(map)
        .bindPopup('BGUM');

    L.marker([61.1605, -45.426]).addTo(map)
        .bindPopup('BGBW');

    L.marker([68.8228, -51.1734]).addTo(map)
        .bindPopup('BGCH');

    L.marker([68.7218, -52.7847]).addTo(map)
        .bindPopup('BGAA');

    L.marker([70.7431, -22.6505]).addTo(map)
        .bindPopup('BGCO');

    L.marker([64.1909, -51.6781]).addTo(map)
        .bindPopup('BGGH');

    L.marker([62.0147, -49.6709]).addTo(map)
        .bindPopup('BGPT');

    L.marker([65.5736, -37.1236]).addTo(map)
        .bindPopup('BGKK');

    L.marker([66.9513, -53.7293]).addTo(map)
        .bindPopup('BGSS');

    L.marker([65.4125, -52.9394]).addTo(map)
        .bindPopup('BGMQ');

    L.marker([67.0122, -50.7116]).addTo(map)
        .bindPopup('BGSF');

    L.marker([13.338, -16.6522]).addTo(map)
        .bindPopup('GBYD');

    L.marker([10.9658, -14.2811]).addTo(map)
        .bindPopup('GUOK');

    L.marker([12.5727, -13.3585]).addTo(map)
        .bindPopup('GUSB');

    L.marker([9.57689, -13.612]).addTo(map)
        .bindPopup('GUCY');

    L.marker([10.0355, -10.7698]).addTo(map)
        .bindPopup('GUFH');

    L.marker([10.3506, -13.5692]).addTo(map)
        .bindPopup('GUFA');

    L.marker([11.433, -9.167]).addTo(map)
        .bindPopup('GUSI');

    L.marker([10.4484, -9.22876]).addTo(map)
        .bindPopup('GUXN');

    L.marker([9.16056, -10.1244]).addTo(map)
        .bindPopup('GUKU');

    L.marker([11.3261, -12.2868]).addTo(map)
        .bindPopup('GULB');

    L.marker([8.48186, -9.52507]).addTo(map)
        .bindPopup('GUMA');

    L.marker([7.80602, -8.7018]).addTo(map)
        .bindPopup('GUNZ');

    L.marker([16.0133, -61.7422]).addTo(map)
        .bindPopup('TFFB');

    L.marker([16.2969, -61.0844]).addTo(map)
        .bindPopup('TFFA');

    L.marker([15.8687, -61.27]).addTo(map)
        .bindPopup('TFFM');

    L.marker([15.8644, -61.5806]).addTo(map)
        .bindPopup('TFFS');

    L.marker([16.2653, -61.5318]).addTo(map)
        .bindPopup('TFFR');

    L.marker([16.2578, -61.2625]).addTo(map)
        .bindPopup('TFFC');

    L.marker([-1.41028, 5.62194]).addTo(map)
        .bindPopup('FGAB');

    L.marker([3.75527, 8.70872]).addTo(map)
        .bindPopup('FGSL');

    L.marker([1.90547, 9.80568]).addTo(map)
        .bindPopup('FGBT');

    L.marker([0.9125, 9.3304]).addTo(map)
        .bindPopup('nan');

    L.marker([1.68533, 11.0244]).addTo(map)
        .bindPopup('FGMY');

    L.marker([40.8559, 25.9563]).addTo(map)
        .bindPopup('LGAL');

    L.marker([40.9133, 24.6192]).addTo(map)
        .bindPopup('LGKV');

    L.marker([37.9364, 23.9445]).addTo(map)
        .bindPopup('LGAV');

    L.marker([36.2743, 23.017]).addTo(map)
        .bindPopup('LGKC');

    L.marker([38.602, 21.3512]).addTo(map)
        .bindPopup('LGAG');

    L.marker([38.1511, 21.4256]).addTo(map)
        .bindPopup('LGRX');

    L.marker([37.9207, 21.2926]).addTo(map)
        .bindPopup('LGAD');

    L.marker([40.4463, 21.2822]).addTo(map)
        .bindPopup('LGKA');

    L.marker([40.2861, 21.8408]).addTo(map)
        .bindPopup('LGKZ');

    L.marker([39.6019, 19.9117]).addTo(map)
        .bindPopup('LGKR');

    L.marker([38.1201, 20.5005]).addTo(map)
        .bindPopup('LGKF');

    L.marker([38.9255, 20.7653]).addTo(map)
        .bindPopup('LGPZ');

    L.marker([37.7509, 20.8843]).addTo(map)
        .bindPopup('LGZA');

    L.marker([39.6964, 20.8225]).addTo(map)
        .bindPopup('LGIO');

    L.marker([40.5197, 22.9709]).addTo(map)
        .bindPopup('LGTS');

    L.marker([35.5317, 24.1497]).addTo(map)
        .bindPopup('LGSA');

    L.marker([35.3397, 25.1803]).addTo(map)
        .bindPopup('LGIR');

    L.marker([35.2161, 26.1013]).addTo(map)
        .bindPopup('LGST');

    L.marker([35.4214, 27.146]).addTo(map)
        .bindPopup('LGKP');

    L.marker([36.9633, 26.9406]).addTo(map)
        .bindPopup('LGKY');

    L.marker([37.4351, 25.3481]).addTo(map)
        .bindPopup('LGMK');

    L.marker([37.0811, 25.3681]).addTo(map)
        .bindPopup('LGNX');

    L.marker([37.4228, 24.9509]).addTo(map)
        .bindPopup('LGSO');

    L.marker([36.3992, 25.4793]).addTo(map)
        .bindPopup('LGSR');

    L.marker([36.5799, 26.3758]).addTo(map)
        .bindPopup('LGPL');

    L.marker([36.7933, 27.0917]).addTo(map)
        .bindPopup('LGKO');

    L.marker([35.4214, 26.91]).addTo(map)
        .bindPopup('LGKS');

    L.marker([36.1417, 29.5764]).addTo(map)
        .bindPopup('LGKJ');

    L.marker([37.1849, 26.8003]).addTo(map)
        .bindPopup('LGLE');

    L.marker([36.6969, 24.4769]).addTo(map)
        .bindPopup('LGML');

    L.marker([37.0205, 25.1132]).addTo(map)
        .bindPopup('LGPA');

    L.marker([36.4054, 28.0862]).addTo(map)
        .bindPopup('LGRP');

    L.marker([37.2988, 23.149]).addTo(map)
        .bindPopup('LGHL');

    L.marker([37.0683, 22.0255]).addTo(map)
        .bindPopup('LGKL');

    L.marker([36.9739, 22.5263]).addTo(map)
        .bindPopup('LGSP');

    L.marker([38.9676, 24.4872]).addTo(map)
        .bindPopup('LGSY');

    L.marker([39.1771, 23.5037]).addTo(map)
        .bindPopup('LGSK');

    L.marker([39.6503, 22.4655]).addTo(map)
        .bindPopup('LGLR');

    L.marker([39.2196, 22.7943]).addTo(map)
        .bindPopup('LGBL');

    L.marker([37.6827, 26.3471]).addTo(map)
        .bindPopup('LGIK');

    L.marker([38.3432, 26.1406]).addTo(map)
        .bindPopup('LGHI');

    L.marker([39.9171, 25.2363]).addTo(map)
        .bindPopup('LGLM');

    L.marker([39.0567, 26.5983]).addTo(map)
        .bindPopup('LGMT');

    L.marker([37.69, 26.9117]).addTo(map)
        .bindPopup('LGSM');

    L.marker([15.469, -90.4067]).addTo(map)
        .bindPopup('MGCB');

    L.marker([15.992, -90.4453]).addTo(map)
        .bindPopup('MGRB');

    L.marker([14.8309, -89.5209]).addTo(map)
        .bindPopup('nan');

    L.marker([14.1069, -90.8175]).addTo(map)
        .bindPopup('nan');

    L.marker([13.9362, -90.8358]).addTo(map)
        .bindPopup('MGSJ');

    L.marker([14.5817, -90.5267]).addTo(map)
        .bindPopup('MGGT');

    L.marker([15.3274, -91.4624]).addTo(map)
        .bindPopup('MGHT');

    L.marker([15.6684, -88.9618]).addTo(map)
        .bindPopup('MGRD');

    L.marker([15.7309, -88.5838]).addTo(map)
        .bindPopup('MGPB');

    L.marker([17.4612, -90.0537]).addTo(map)
        .bindPopup('MGCR');

    L.marker([17.6124, -89.6884]).addTo(map)
        .bindPopup('nan');

    L.marker([16.9138, -89.8664]).addTo(map)
        .bindPopup('MGTK');

    L.marker([16.3258, -89.4161]).addTo(map)
        .bindPopup('MGPP');

    L.marker([17.3939, -89.6327]).addTo(map)
        .bindPopup('nan');

    L.marker([14.8656, -91.502]).addTo(map)
        .bindPopup('MGQZ');

    L.marker([14.6942, -91.8825]).addTo(map)
        .bindPopup('MGCT');

    L.marker([15.0122, -91.1506]).addTo(map)
        .bindPopup('MGQC');

    L.marker([15.9975, -90.7417]).addTo(map)
        .bindPopup('MGPG');

    L.marker([14.521, -91.6973]).addTo(map)
        .bindPopup('MGRT');

    L.marker([14.5833, -90.5275]).addTo(map)
        .bindPopup('nan');

    L.marker([13.4834, 144.796]).addTo(map)
        .bindPopup('PGUM');

    L.marker([13.584, 144.93]).addTo(map)
        .bindPopup('PGUA');

    L.marker([11.8948, -15.6537]).addTo(map)
        .bindPopup('GGOV');

    L.marker([11.2974, -15.8381]).addTo(map)
        .bindPopup('GGBU');

    L.marker([7.7, -59.1667]).addTo(map)
        .bindPopup('nan');

    L.marker([7.37012, -60.488]).addTo(map)
        .bindPopup('SYBR');

    L.marker([7.48811, -60.1848]).addTo(map)
        .bindPopup('SYMR');

    L.marker([8.333, -59.633]).addTo(map)
        .bindPopup('nan');

    L.marker([8.2, -59.7833]).addTo(map)
        .bindPopup('SYMB');

    L.marker([6.35886, -58.6552]).addTo(map)
        .bindPopup('SYBT');

    L.marker([5.70811, -60.2942]).addTo(map)
        .bindPopup('SYIB');

    L.marker([5.86534, -60.6142]).addTo(map)
        .bindPopup('SYKM');

    L.marker([6.46667, -59.1667]).addTo(map)
        .bindPopup('nan');

    L.marker([5.81545, -61.0554]).addTo(map)
        .bindPopup('SYPR');

    L.marker([6.49855, -58.2541]).addTo(map)
        .bindPopup('SYCJ');

    L.marker([6.80628, -58.1059]).addTo(map)
        .bindPopup('SYGO');

    L.marker([5.8599, -57.1489]).addTo(map)
        .bindPopup('nan');

    L.marker([6.66667, -60.85]).addTo(map)
        .bindPopup('nan');

    L.marker([5.2684, -58.995]).addTo(map)
        .bindPopup('SYKZ');

    L.marker([5.33333, -60.3333]).addTo(map)
        .bindPopup('nan');

    L.marker([2.9913, -59.51]).addTo(map)
        .bindPopup('SYSC');

    L.marker([4.89817, -59.817]).addTo(map)
        .bindPopup('SYMK');

    L.marker([5.17275, -59.4915]).addTo(map)
        .bindPopup('SYKA');

    L.marker([4.64916, -59.8322]).addTo(map)
        .bindPopup('SYKT');

    L.marker([5.27749, -59.1511]).addTo(map)
        .bindPopup('SYMD');

    L.marker([4.48333, -59.6833]).addTo(map)
        .bindPopup('SYMM');

    L.marker([4.72527, -60.035]).addTo(map)
        .bindPopup('SYOR');

    L.marker([4.6975, -59.7125]).addTo(map)
        .bindPopup('nan');

    L.marker([2.48653, -59.3134]).addTo(map)
        .bindPopup('SYAH');

    L.marker([4.03333, -59.5333]).addTo(map)
        .bindPopup('SYKS');

    L.marker([3.75194, -59.3097]).addTo(map)
        .bindPopup('SYKR');

    L.marker([3.37276, -59.7894]).addTo(map)
        .bindPopup('SYLT');

    L.marker([2.39393, -59.441]).addTo(map)
        .bindPopup('SYLP');

    L.marker([3.95944, -59.1242]).addTo(map)
        .bindPopup('SYAN');

    L.marker([22.3089, 113.915]).addTo(map)
        .bindPopup('VHHH');

    L.marker([15.7425, -86.853]).addTo(map)
        .bindPopup('MHLC');

    L.marker([15.7759, -87.4758]).addTo(map)
        .bindPopup('MHTE');

    L.marker([15.9392, -85.1372]).addTo(map)
        .bindPopup('MHIR');

    L.marker([14.3819, -87.6211]).addTo(map)
        .bindPopup('nan');

    L.marker([15.65, -85.983]).addTo(map)
        .bindPopup('nan');

    L.marker([15.9268, -85.9382]).addTo(map)
        .bindPopup('MHTJ');

    L.marker([14.3824, -87.6212]).addTo(map)
        .bindPopup('MHSC');

    L.marker([14.9149, -89.0078]).addTo(map)
        .bindPopup('MHRU');

    L.marker([14.7779, -88.775]).addTo(map)
        .bindPopup('MHSR');

    L.marker([15.4422, -87.8988]).addTo(map)
        .bindPopup('nan');

    L.marker([15.4526, -87.9236]).addTo(map)
        .bindPopup('MHLM');

    L.marker([14.0609, -87.2172]).addTo(map)
        .bindPopup('MHTG');

    L.marker([15.4722, -84.3522]).addTo(map)
        .bindPopup('MHAH');

    L.marker([15.7631, -84.5436]).addTo(map)
        .bindPopup('nan');

    L.marker([15.3167, -83.5917]).addTo(map)
        .bindPopup('nan');

    L.marker([15.955, -84.9414]).addTo(map)
        .bindPopup('MHPC');

    L.marker([15.2622, -83.7812]).addTo(map)
        .bindPopup('MHPL');

    L.marker([14.2911, -88.175]).addTo(map)
        .bindPopup('MHLE');

    L.marker([16.4454, -85.9066]).addTo(map)
        .bindPopup('MHNJ');

    L.marker([16.3168, -86.523]).addTo(map)
        .bindPopup('MHRO');

    L.marker([16.1131, -86.8803]).addTo(map)
        .bindPopup('MHUT');

    L.marker([14.1619, -88.0344]).addTo(map)
        .bindPopup('MHMA');

    L.marker([14.2358, -88.4372]).addTo(map)
        .bindPopup('nan');

    L.marker([14.5735, -88.5958]).addTo(map)
        .bindPopup('MHGS');

    L.marker([14.917, -85.9]).addTo(map)
        .bindPopup('MHGE');

    L.marker([14.6526, -86.2203]).addTo(map)
        .bindPopup('MHJU');

    L.marker([15.0332, -86.6923]).addTo(map)
        .bindPopup('nan');

    L.marker([15.4456, -86.6753]).addTo(map)
        .bindPopup('MHCS');

    L.marker([15.5056, -86.5747]).addTo(map)
        .bindPopup('MHEA');

    L.marker([15.1275, -87.135]).addTo(map)
        .bindPopup('MHYR');

    L.marker([14.9072, -87.2634]).addTo(map)
        .bindPopup('MHUL');

    L.marker([42.5614, 18.2682]).addTo(map)
        .bindPopup('LDDU');

    L.marker([45.7429, 16.0688]).addTo(map)
        .bindPopup('LDZA');

    L.marker([44.8935, 13.9222]).addTo(map)
        .bindPopup('LDPL');

    L.marker([45.4627, 18.8102]).addTo(map)
        .bindPopup('LDOS');

    L.marker([44.5658, 14.3931]).addTo(map)
        .bindPopup('LDLO');

    L.marker([45.2169, 14.5703]).addTo(map)
        .bindPopup('LDRI');

    L.marker([43.2857, 16.6797]).addTo(map)
        .bindPopup('LDSB');

    L.marker([43.5389, 16.298]).addTo(map)
        .bindPopup('LDSP');

    L.marker([44.1083, 15.3467]).addTo(map)
        .bindPopup('LDZD');

    L.marker([18.6631, -74.1703]).addTo(map)
        .bindPopup('MTJE');

    L.marker([19.733, -72.1947]).addTo(map)
        .bindPopup('MTCH');

    L.marker([19.9336, -72.8486]).addTo(map)
        .bindPopup('MTPX');

    L.marker([18.58, -72.2925]).addTo(map)
        .bindPopup('MTPP');

    L.marker([18.2711, -73.7883]).addTo(map)
        .bindPopup('MTCA');

    L.marker([18.2411, -72.5185]).addTo(map)
        .bindPopup('MTJA');

    L.marker([45.9909, 18.241]).addTo(map)
        .bindPopup('LHPP');

    L.marker([47.4298, 19.2611]).addTo(map)
        .bindPopup('LHBP');

    L.marker([48.1369, 20.7914]).addTo(map)
        .bindPopup('LHMC');

    L.marker([47.4889, 21.6153]).addTo(map)
        .bindPopup('LHDC');

    L.marker([46.6864, 17.1591]).addTo(map)
        .bindPopup('LHSM');

    L.marker([5.52287, 95.4206]).addTo(map)
        .bindPopup('WITT');

    L.marker([3.73444, 96.7911]).addTo(map)
        .bindPopup('nan');

    L.marker([5.22668, 96.9503]).addTo(map)
        .bindPopup('WITM');

    L.marker([5.06951, 97.2592]).addTo(map)
        .bindPopup('WITL');

    L.marker([4.25, 96.217]).addTo(map)
        .bindPopup('WITC');

    L.marker([5.87413, 95.3397]).addTo(map)
        .bindPopup('WITN');

    L.marker([-8.74817, 115.167]).addTo(map)
        .bindPopup('WADD');

    L.marker([-6.12556, 106.656]).addTo(map)
        .bindPopup('WIII');

    L.marker([-6.33696, 106.765]).addTo(map)
        .bindPopup('WIHP');

    L.marker([-5.64444, 106.562]).addTo(map)
        .bindPopup('WIIG');

    L.marker([-3.8637, 102.339]).addTo(map)
        .bindPopup('WIPL');

    L.marker([-1.1278, 102.135]).addTo(map)
        .bindPopup('WIPI');

    L.marker([-0.352808, 102.335]).addTo(map)
        .bindPopup('WIBJ');

    L.marker([-5.72361, 112.679]).addTo(map)
        .bindPopup('WARW');

    L.marker([0.637119, 122.85]).addTo(map)
        .bindPopup('WAMG');

    L.marker([-0.864417, 121.623]).addTo(map)
        .bindPopup('nan');

    L.marker([1.1027, 121.414]).addTo(map)
        .bindPopup('WAMY');

    L.marker([-1.63802, 103.644]).addTo(map)
        .bindPopup('WIPA');

    L.marker([-2.093, 101.468]).addTo(map)
        .bindPopup('WIPH');

    L.marker([-2.54186, 101.088]).addTo(map)
        .bindPopup('WIPU');

    L.marker([1.0527, 103.393]).addTo(map)
        .bindPopup('WIBT');

    L.marker([-6.90063, 107.576]).addTo(map)
        .bindPopup('WICC');

    L.marker([-6.75614, 108.54]).addTo(map)
        .bindPopup('WICD');

    L.marker([-7.71989, 108.489]).addTo(map)
        .bindPopup('WICN');

    L.marker([-6.64892, 108.167]).addTo(map)
        .bindPopup('WICA');

    L.marker([-7.3466, 108.246]).addTo(map)
        .bindPopup('WICM');

    L.marker([-7.19484, 111.548]).addTo(map)
        .bindPopup('WARC');

    L.marker([-7.64506, 109.034]).addTo(map)
        .bindPopup('WAHL');

    L.marker([-5.80091, 110.478]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.46167, 109.417]).addTo(map)
        .bindPopup('WAHP');

    L.marker([-7.51609, 110.757]).addTo(map)
        .bindPopup('WARQ');

    L.marker([-6.97273, 110.375]).addTo(map)
        .bindPopup('WARS');

    L.marker([-7.90534, 110.057]).addTo(map)
        .bindPopup('WAHI');

    L.marker([-8.31015, 114.34]).addTo(map)
        .bindPopup('WADY');

    L.marker([-8.23806, 113.694]).addTo(map)
        .bindPopup('WARE');

    L.marker([-7.92656, 112.715]).addTo(map)
        .bindPopup('WARA');

    L.marker([-5.58333, 114.433]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.37983, 112.787]).addTo(map)
        .bindPopup('WARR');

    L.marker([-7.0242, 113.89]).addTo(map)
        .bindPopup('WART');

    L.marker([-1.81664, 109.963]).addTo(map)
        .bindPopup('WIOK');

    L.marker([-0.150711, 109.404]).addTo(map)
        .bindPopup('WIOO');

    L.marker([0.835578, 112.937]).addTo(map)
        .bindPopup('WIOP');

    L.marker([0.063619, 111.473]).addTo(map)
        .bindPopup('WIOS');

    L.marker([-3.44236, 114.763]).addTo(map)
        .bindPopup('WAOO');

    L.marker([-3.41241, 115.995]).addTo(map)
        .bindPopup('WAOC');

    L.marker([-3.29472, 116.165]).addTo(map)
        .bindPopup('WRBK');

    L.marker([-2.21656, 115.436]).addTo(map)
        .bindPopup('WAON');

    L.marker([-0.348869, 111.748]).addTo(map)
        .bindPopup('WIOG');

    L.marker([-2.7052, 111.673]).addTo(map)
        .bindPopup('WAOI');

    L.marker([-2.22513, 113.943]).addTo(map)
        .bindPopup('WAGG');

    L.marker([-2.49919, 112.975]).addTo(map)
        .bindPopup('WAOS');

    L.marker([-1.4694, 113.083]).addTo(map)
        .bindPopup('WAOW');

    L.marker([-0.374448, 117.249]).addTo(map)
        .bindPopup('WALS');

    L.marker([2.1555, 117.432]).addTo(map)
        .bindPopup('WALK');

    L.marker([-1.26827, 116.894]).addTo(map)
        .bindPopup('WALL');

    L.marker([0.119691, 117.475]).addTo(map)
        .bindPopup('WRLC');

    L.marker([0.8106, 114.531]).addTo(map)
        .bindPopup('WALJ');

    L.marker([-0.26667, 116.583]).addTo(map)
        .bindPopup('nan');

    L.marker([0.3847, 117.543]).addTo(map)
        .bindPopup('WRLA');

    L.marker([-1.91013, 116.202]).addTo(map)
        .bindPopup('WRLH');

    L.marker([-0.092973, 117.453]).addTo(map)
        .bindPopup('WALT');

    L.marker([3.45572, 117.867]).addTo(map)
        .bindPopup('WALV');

    L.marker([3.9028, 115.692]).addTo(map)
        .bindPopup('WRLB');

    L.marker([1.70449, 114.97]).addTo(map)
        .bindPopup('WRLP');

    L.marker([2.72305, 117.126]).addTo(map)
        .bindPopup('nan');

    L.marker([4.13333, 117.667]).addTo(map)
        .bindPopup('WRLF');

    L.marker([2.83583, 117.374]).addTo(map)
        .bindPopup('WAGD');

    L.marker([3.1707, 97.2869]).addTo(map)
        .bindPopup('WITA');

    L.marker([3.32667, 117.569]).addTo(map)
        .bindPopup('WALR');

    L.marker([3.34812, 106.258]).addTo(map)
        .bindPopup('WIOM');

    L.marker([-2.1622, 106.139]).addTo(map)
        .bindPopup('WIPK');

    L.marker([-2.74572, 107.755]).addTo(map)
        .bindPopup('WIKD');

    L.marker([1.12103, 104.119]).addTo(map)
        .bindPopup('WIDD');

    L.marker([3.90871, 108.388]).addTo(map)
        .bindPopup('WION');

    L.marker([0.922683, 104.532]).addTo(map)
        .bindPopup('WIDN');

    L.marker([-4.61114, 105.232]).addTo(map)
        .bindPopup('WIAG');

    L.marker([-5.24056, 105.176]).addTo(map)
        .bindPopup('WILL');

    L.marker([1.83833, 127.786]).addTo(map)
        .bindPopup('WAMA');

    L.marker([-0.635259, 127.502]).addTo(map)
        .bindPopup('WAPH');

    L.marker([-1.87579, 125.83]).addTo(map)
        .bindPopup('WAPE');

    L.marker([2.04599, 128.325]).addTo(map)
        .bindPopup('WAMR');

    L.marker([-2.08051, 125.967]).addTo(map)
        .bindPopup('WAPN');

    L.marker([-1.64263, 124.559]).addTo(map)
        .bindPopup('WAPT');

    L.marker([0.831414, 127.381]).addTo(map)
        .bindPopup('WAEE');

    L.marker([-3.348, 128.926]).addTo(map)
        .bindPopup('WAPA');

    L.marker([-3.71026, 128.089]).addTo(map)
        .bindPopup('WAPP');

    L.marker([-6.0662, 134.274]).addTo(map)
        .bindPopup('WAPK');

    L.marker([-5.77222, 134.212]).addTo(map)
        .bindPopup('WAPD');

    L.marker([-0.078889, 129.458]).addTo(map)
        .bindPopup('WAMJ');

    L.marker([1.18528, 127.896]).addTo(map)
        .bindPopup('WAMK');

    L.marker([-5.76028, 132.759]).addTo(map)
        .bindPopup('WAPF');

    L.marker([-3.23557, 127.1]).addTo(map)
        .bindPopup('WAPR');

    L.marker([-4.5214, 129.905]).addTo(map)
        .bindPopup('WAPC');

    L.marker([-3.8548, 126.701]).addTo(map)
        .bindPopup('WAPG');

    L.marker([-7.98861, 131.306]).addTo(map)
        .bindPopup('WAPI');

    L.marker([-2.8114, 129.484]).addTo(map)
        .bindPopup('WAPV');

    L.marker([-8.53965, 118.687]).addTo(map)
        .bindPopup('WADB');

    L.marker([-8.75732, 116.277]).addTo(map)
        .bindPopup('WADL');

    L.marker([-8.9889, 117.216]).addTo(map)
        .bindPopup('WADU');

    L.marker([-8.48904, 117.412]).addTo(map)
        .bindPopup('WADS');

    L.marker([-9.07305, 124.905]).addTo(map)
        .bindPopup('WATA');

    L.marker([-8.13234, 124.597]).addTo(map)
        .bindPopup('WATM');

    L.marker([-8.70743, 121.057]).addTo(map)
        .bindPopup('WRKB');

    L.marker([-8.84929, 121.661]).addTo(map)
        .bindPopup('WATE');

    L.marker([-10.1716, 123.671]).addTo(map)
        .bindPopup('WATT');

    L.marker([-8.48666, 119.889]).addTo(map)
        .bindPopup('WATO');

    L.marker([-8.27442, 123.002]).addTo(map)
        .bindPopup('WATL');

    L.marker([-8.3629, 123.438]).addTo(map)
        .bindPopup('WATW');

    L.marker([-8.64065, 122.237]).addTo(map)
        .bindPopup('WATC');

    L.marker([-8.59701, 120.477]).addTo(map)
        .bindPopup('WATG');

    L.marker([-10.7673, 123.075]).addTo(map)
        .bindPopup('WATR');

    L.marker([-10.4924, 121.848]).addTo(map)
        .bindPopup('WATS');

    L.marker([-9.40972, 119.244]).addTo(map)
        .bindPopup('WADT');

    L.marker([-9.66922, 120.302]).addTo(map)
        .bindPopup('WADW');

    L.marker([-1.3858, 133.874]).addTo(map)
        .bindPopup('WASG');

    L.marker([-2.53224, 133.439]).addTo(map)
        .bindPopup('WASO');

    L.marker([-2.92019, 132.267]).addTo(map)
        .bindPopup('WASF');

    L.marker([-0.400556, 129.895]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.1281, 132.161]).addTo(map)
        .bindPopup('WASI');

    L.marker([-1.3169, 132.286]).addTo(map)
        .bindPopup('WASU');

    L.marker([-0.637101, 133.128]).addTo(map)
        .bindPopup('WASE');

    L.marker([-3.64452, 133.696]).addTo(map)
        .bindPopup('WASK');

    L.marker([-0.891833, 134.049]).addTo(map)
        .bindPopup('WASR');

    L.marker([-2.1033, 133.516]).addTo(map)
        .bindPopup('WASB');

    L.marker([-1.58333, 133.333]).addTo(map)
        .bindPopup('WASM');

    L.marker([-0.423056, 130.773]).addTo(map)
        .bindPopup('WASN');

    L.marker([-1.49677, 134.175]).addTo(map)
        .bindPopup('WASC');

    L.marker([-0.894, 131.287]).addTo(map)
        .bindPopup('WASS');

    L.marker([-1.44472, 132.021]).addTo(map)
        .bindPopup('WAST');

    L.marker([-3.8832, 139.311]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.93333, 140.783]).addTo(map)
        .bindPopup('WAJA');

    L.marker([-1.19002, 136.108]).addTo(map)
        .bindPopup('WABB');

    L.marker([-3.6822, 138.676]).addTo(map)
        .bindPopup('WAJB');

    L.marker([-7.1759, 139.583]).addTo(map)
        .bindPopup('WAKE');

    L.marker([-4.16667, 140.85]).addTo(map)
        .bindPopup('WAJG');

    L.marker([-4.8557, 139.482]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.57695, 140.516]).addTo(map)
        .bindPopup('WAJJ');

    L.marker([-3.2705, 138.613]).addTo(map)
        .bindPopup('WAJC');

    L.marker([-3.7826, 139.386]).addTo(map)
        .bindPopup('WAJN');

    L.marker([-5.494, 138.083]).addTo(map)
        .bindPopup('nan');

    L.marker([-3.9259, 136.377]).addTo(map)
        .bindPopup('WABT');

    L.marker([-0.936325, 134.872]).addTo(map)
        .bindPopup('nan');

    L.marker([-3.97648, 137.622]).addTo(map)
        .bindPopup('WABL');

    L.marker([-3.7051, 138.2]).addTo(map)
        .bindPopup('WABE');

    L.marker([-3.684, 138.479]).addTo(map)
        .bindPopup('WABK');

    L.marker([-6.1851, 138.637]).addTo(map)
        .bindPopup('WAKM');

    L.marker([-6.5418, 139.332]).addTo(map)
        .bindPopup('WAKP');

    L.marker([-3.66667, 136.167]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.71075, 136.435]).addTo(map)
        .bindPopup('WABN');

    L.marker([-3.0795, 139.952]).addTo(map)
        .bindPopup('WAJL');

    L.marker([-3.7018, 137.957]).addTo(map)
        .bindPopup('WAJM');

    L.marker([-3.75, 138.667]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.75, 140.367]).addTo(map)
        .bindPopup('WAKD');

    L.marker([-8.52029, 140.418]).addTo(map)
        .bindPopup('WAKK');

    L.marker([-7.3147, 140.567]).addTo(map)
        .bindPopup('nan');

    L.marker([-3.36818, 135.496]).addTo(map)
        .bindPopup('WABI');

    L.marker([-3.822, 137.841]).addTo(map)
        .bindPopup('nan');

    L.marker([-3.9106, 136.231]).addTo(map)
        .bindPopup('WABR');

    L.marker([-4.9071, 140.628]).addTo(map)
        .bindPopup('WAJO');

    L.marker([-8.0946, 139.723]).addTo(map)
        .bindPopup('WAKO');

    L.marker([-3.9834, 136.083]).addTo(map)
        .bindPopup('WABD');

    L.marker([-3.6333, 140.958]).addTo(map)
        .bindPopup('WAJE');

    L.marker([-3.45, 140.779]).addTo(map)
        .bindPopup('WAJS');

    L.marker([-4.52828, 136.887]).addTo(map)
        .bindPopup('WABP');

    L.marker([-6.09922, 140.298]).addTo(map)
        .bindPopup('WAKT');

    L.marker([-3.9256, 138.456]).addTo(map)
        .bindPopup('nan');

    L.marker([-3.67565, 140.884]).addTo(map)
        .bindPopup('WAJU');

    L.marker([-3.73956, 137.032]).addTo(map)
        .bindPopup('WABV');

    L.marker([-3.235, 140.994]).addTo(map)
        .bindPopup('WAJR');

    L.marker([-4.04423, 136.278]).addTo(map)
        .bindPopup('WABG');

    L.marker([-4.10251, 138.957]).addTo(map)
        .bindPopup('WAVV');

    L.marker([-2.721, 134.506]).addTo(map)
        .bindPopup('WASW');

    L.marker([-5.6908, 139.35]).addTo(map)
        .bindPopup('WAKQ');

    L.marker([-1.87558, 136.241]).addTo(map)
        .bindPopup('WABO');

    L.marker([-1.86955, 138.75]).addTo(map)
        .bindPopup('WAJI');

    L.marker([1.60919, 101.434]).addTo(map)
        .bindPopup('WIBD');

    L.marker([0.460786, 101.445]).addTo(map)
        .bindPopup('WIBB');

    L.marker([1.37, 102.14]).addTo(map)
        .bindPopup('WIBS');

    L.marker([-0.479189, 104.579]).addTo(map)
        .bindPopup('WIDS');

    L.marker([-3.28, 102.917]).addTo(map)
        .bindPopup('WIPB');

    L.marker([-2.58333, 119.033]).addTo(map)
        .bindPopup('WAFJ');

    L.marker([-3.04474, 119.822]).addTo(map)
        .bindPopup('WAWT');

    L.marker([-3.083, 120.245]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.20333, 121.66]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.55803, 120.324]).addTo(map)
        .bindPopup('WAWM');

    L.marker([-2.5312, 121.358]).addTo(map)
        .bindPopup('WAWS');

    L.marker([-5.06163, 119.554]).addTo(map)
        .bindPopup('WAAA');

    L.marker([-1.03892, 122.772]).addTo(map)
        .bindPopup('WAMW');

    L.marker([-0.918542, 119.91]).addTo(map)
        .bindPopup('WAFF');

    L.marker([-1.41675, 120.658]).addTo(map)
        .bindPopup('WAMP');

    L.marker([1.12343, 120.794]).addTo(map)
        .bindPopup('WAMI');

    L.marker([-5.48688, 122.569]).addTo(map)
        .bindPopup('WAWB');

    L.marker([-4.08161, 122.418]).addTo(map)
        .bindPopup('WAWW');

    L.marker([-4.18109, 121.618]).addTo(map)
        .bindPopup('WAWP');

    L.marker([-4.76056, 122.569]).addTo(map)
        .bindPopup('WAWR');

    L.marker([-5.76457, 123.917]).addTo(map)
        .bindPopup('WA44');

    L.marker([1.4001, 99.4305]).addTo(map)
        .bindPopup('WIME');

    L.marker([-0.972896, 122.145]).addTo(map)
        .bindPopup('nan');

    L.marker([2.25973, 98.9919]).addTo(map)
        .bindPopup('WIMN');

    L.marker([1.55594, 98.8889]).addTo(map)
        .bindPopup('WIMS');

    L.marker([1.16638, 97.7047]).addTo(map)
        .bindPopup('WIMB');

    L.marker([3.64222, 98.8853]).addTo(map)
        .bindPopup('WIMM');

    L.marker([1.54926, 124.926]).addTo(map)
        .bindPopup('WAMM');

    L.marker([3.55917, 98.6711]).addTo(map)
        .bindPopup('WIMK');

    L.marker([4.00694, 126.673]).addTo(map)
        .bindPopup('WAMN');

    L.marker([3.68321, 125.528]).addTo(map)
        .bindPopup('WAMH');

    L.marker([2.66667, 98.9333]).addTo(map)
        .bindPopup('WIMP');

    L.marker([-0.786917, 100.281]).addTo(map)
        .bindPopup('WIPT');

    L.marker([0.845431, 100.37]).addTo(map)
        .bindPopup('WIDE');

    L.marker([-0.95, 100.75]).addTo(map)
        .bindPopup('WIBR');

    L.marker([-2.62353, 103.955]).addTo(map)
        .bindPopup('WIPV');

    L.marker([-3.28607, 103.88]).addTo(map)
        .bindPopup('WIPQ');

    L.marker([-2.89825, 104.7]).addTo(map)
        .bindPopup('WIPP');

    L.marker([-8.56056, 116.094]).addTo(map)
        .bindPopup('WADA');

    L.marker([-1.1593, 132.463]).addTo(map)
        .bindPopup('WASA');

    L.marker([-7.78818, 110.432]).addTo(map)
        .bindPopup('WIIJ');

    L.marker([52.702, -8.92482]).addTo(map)
        .bindPopup('EINN');

    L.marker([51.6686, -9.48417]).addTo(map)
        .bindPopup('EIBN');

    L.marker([51.8413, -8.49111]).addTo(map)
        .bindPopup('EICK');

    L.marker([55.0442, -8.341]).addTo(map)
        .bindPopup('EIDL');

    L.marker([54.9513, -7.67283]).addTo(map)
        .bindPopup('EILT');

    L.marker([53.4213, -6.27007]).addTo(map)
        .bindPopup('EIDW');

    L.marker([53.3002, -8.94159]).addTo(map)
        .bindPopup('EICM');

    L.marker([53.093, -9.56806]).addTo(map)
        .bindPopup('EIMN');

    L.marker([53.0647, -9.5109]).addTo(map)
        .bindPopup('EIIR');

    L.marker([53.1067, -9.65361]).addTo(map)
        .bindPopup('EIIM');

    L.marker([53.2303, -9.46778]).addTo(map)
        .bindPopup('EICA');

    L.marker([52.1809, -9.52378]).addTo(map)
        .bindPopup('EIKY');

    L.marker([52.6508, -7.29611]).addTo(map)
        .bindPopup('EIKK');

    L.marker([54.2228, -10.0308]).addTo(map)
        .bindPopup('EIBT');

    L.marker([53.9103, -8.81849]).addTo(map)
        .bindPopup('EIKN');

    L.marker([54.2802, -8.59921]).addTo(map)
        .bindPopup('EISG');

    L.marker([52.1872, -7.08696]).addTo(map)
        .bindPopup('EIWF');

    L.marker([31.287, 34.723]).addTo(map)
        .bindPopup('LLBS');

    L.marker([30.6217, 35.2033]).addTo(map)
        .bindPopup('LLEY');

    L.marker([29.5613, 34.9601]).addTo(map)
        .bindPopup('LLET');

    L.marker([29.7237, 35.0114]).addTo(map)
        .bindPopup('LLER');

    L.marker([30.7761, 34.6667]).addTo(map)
        .bindPopup('LLMR');

    L.marker([31.3282, 35.3886]).addTo(map)
        .bindPopup('LLMZ');

    L.marker([29.9403, 34.9358]).addTo(map)
        .bindPopup('LLOV');

    L.marker([31.2083, 35.0123]).addTo(map)
        .bindPopup('LLNV');

    L.marker([29.9011, 35.0675]).addTo(map)
        .bindPopup('LLYT');

    L.marker([33.2167, 35.6]).addTo(map)
        .bindPopup('LLKS');

    L.marker([32.981, 35.5719]).addTo(map)
        .bindPopup('LLIB');

    L.marker([32.8094, 35.0431]).addTo(map)
        .bindPopup('LLHA');

    L.marker([32.1147, 34.7822]).addTo(map)
        .bindPopup('LLSD');

    L.marker([32.0114, 34.8867]).addTo(map)
        .bindPopup('LLBG');

    L.marker([31.8647, 35.2192]).addTo(map)
        .bindPopup('OJJR');

    L.marker([9.15251, 92.8196]).addTo(map)
        .bindPopup('VOCX');

    L.marker([11.6412, 92.7297]).addTo(map)
        .bindPopup('VOPB');

    L.marker([28.4221, 79.4508]).addTo(map)
        .bindPopup('VIBY');

    L.marker([14.51, 78.7728]).addTo(map)
        .bindPopup('VOCP');

    L.marker([14.1493, 77.7911]).addTo(map)
        .bindPopup('VOPN');

    L.marker([17.1104, 81.8182]).addTo(map)
        .bindPopup('VORY');

    L.marker([13.6325, 79.5433]).addTo(map)
        .bindPopup('VOTP');

    L.marker([16.5304, 80.7968]).addTo(map)
        .bindPopup('VOBZ');

    L.marker([17.7212, 83.2245]).addTo(map)
        .bindPopup('VEVZ');

    L.marker([28.0661, 95.3356]).addTo(map)
        .bindPopup('VEPG');

    L.marker([28.1753, 94.802]).addTo(map)
        .bindPopup('VEAN');

    L.marker([27.9412, 96.1344]).addTo(map)
        .bindPopup('VETJ');

    L.marker([27.5883, 93.8281]).addTo(map)
        .bindPopup('VEZO');

    L.marker([27.9855, 94.2228]).addTo(map)
        .bindPopup('VEDZ');

    L.marker([27.4839, 95.0169]).addTo(map)
        .bindPopup('VEMN');

    L.marker([26.1061, 91.5859]).addTo(map)
        .bindPopup('VEGT');

    L.marker([27.2955, 94.0976]).addTo(map)
        .bindPopup('VELR');

    L.marker([24.0619, 91.6039]).addTo(map)
        .bindPopup('VEKW');

    L.marker([24.1317, 91.8142]).addTo(map)
        .bindPopup('VEKM');

    L.marker([24.9129, 92.9787]).addTo(map)
        .bindPopup('VEKU');

    L.marker([26.7315, 94.1755]).addTo(map)
        .bindPopup('VEJT');

    L.marker([26.1397, 89.91]).addTo(map)
        .bindPopup('VERU');

    L.marker([26.7091, 92.7847]).addTo(map)
        .bindPopup('VETZ');

    L.marker([26.1947, 85.9175]).addTo(map)
        .bindPopup('VEDH');

    L.marker([24.7443, 84.9512]).addTo(map)
        .bindPopup('VEGY');

    L.marker([26.1191, 85.3137]).addTo(map)
        .bindPopup('VEMZ');

    L.marker([25.5913, 85.088]).addTo(map)
        .bindPopup('VEPT');

    L.marker([30.6735, 76.7885]).addTo(map)
        .bindPopup('VICG');

    L.marker([19.0743, 82.0368]).addTo(map)
        .bindPopup('nan');

    L.marker([21.9884, 82.111]).addTo(map)
        .bindPopup('VEBU');

    L.marker([21.1804, 81.7388]).addTo(map)
        .bindPopup('VARP');

    L.marker([20.7131, 70.9211]).addTo(map)
        .bindPopup('nan');

    L.marker([20.4344, 72.8432]).addTo(map)
        .bindPopup('VADN');

    L.marker([28.5665, 77.1031]).addTo(map)
        .bindPopup('VIDP');

    L.marker([15.3808, 73.8314]).addTo(map)
        .bindPopup('VOGO');

    L.marker([23.0772, 72.6347]).addTo(map)
        .bindPopup('VAAH');

    L.marker([22.3362, 73.2263]).addTo(map)
        .bindPopup('VABO');

    L.marker([23.2878, 69.6702]).addTo(map)
        .bindPopup('VABJ');

    L.marker([21.7522, 72.1852]).addTo(map)
        .bindPopup('VABV');

    L.marker([21.3171, 70.2704]).addTo(map)
        .bindPopup('VAKS');

    L.marker([23.1127, 70.1003]).addTo(map)
        .bindPopup('VAKE');

    L.marker([22.4655, 70.0126]).addTo(map)
        .bindPopup('VAJM');

    L.marker([21.6487, 69.6572]).addTo(map)
        .bindPopup('VAPR');

    L.marker([22.3092, 70.7795]).addTo(map)
        .bindPopup('VARK');

    L.marker([21.1141, 72.7418]).addTo(map)
        .bindPopup('VASU');

    L.marker([29.1794, 75.7553]).addTo(map)
        .bindPopup('VIHR');

    L.marker([32.1651, 76.2634]).addTo(map)
        .bindPopup('VIGG');

    L.marker([31.8767, 77.1544]).addTo(map)
        .bindPopup('VIBR');

    L.marker([31.0818, 77.068]).addTo(map)
        .bindPopup('VISM');

    L.marker([32.6891, 74.8374]).addTo(map)
        .bindPopup('VIJU');

    L.marker([34.1359, 77.5465]).addTo(map)
        .bindPopup('VILH');

    L.marker([33.3779, 74.3152]).addTo(map)
        .bindPopup('nan');

    L.marker([33.9871, 74.7742]).addTo(map)
        .bindPopup('VISR');

    L.marker([23.834, 86.4253]).addTo(map)
        .bindPopup('VEDB');

    L.marker([23.3143, 85.3217]).addTo(map)
        .bindPopup('VERC');

    L.marker([22.8132, 86.1688]).addTo(map)
        .bindPopup('VEJS');

    L.marker([15.1628, 76.8828]).addTo(map)
        .bindPopup('VOBI');

    L.marker([13.1979, 77.7063]).addTo(map)
        .bindPopup('VOBL');

    L.marker([15.3617, 75.0849]).addTo(map)
        .bindPopup('VAHB');

    L.marker([12.9613, 74.8901]).addTo(map)
        .bindPopup('VOML');

    L.marker([15.8593, 74.6183]).addTo(map)
        .bindPopup('VABM');

    L.marker([12.23, 76.6558]).addTo(map)
        .bindPopup('VOMY');

    L.marker([15.175, 76.6349]).addTo(map)
        .bindPopup('VOJV');

    L.marker([11.1368, 75.9553]).addTo(map)
        .bindPopup('VOCL');

    L.marker([11.9186, 75.5472]).addTo(map)
        .bindPopup('VOKN');

    L.marker([10.152, 76.4019]).addTo(map)
        .bindPopup('VOCI');

    L.marker([8.48212, 76.9201]).addTo(map)
        .bindPopup('VOTV');

    L.marker([10.8237, 72.176]).addTo(map)
        .bindPopup('VOAT');

    L.marker([23.2875, 77.3374]).addTo(map)
        .bindPopup('VABP');

    L.marker([24.6547, 77.3473]).addTo(map)
        .bindPopup('VAGN');

    L.marker([26.2933, 78.2278]).addTo(map)
        .bindPopup('VIGR');

    L.marker([24.8172, 79.9186]).addTo(map)
        .bindPopup('VAKJ');

    L.marker([22.7218, 75.8011]).addTo(map)
        .bindPopup('VAID');

    L.marker([23.1778, 80.052]).addTo(map)
        .bindPopup('VAJB');

    L.marker([24.5034, 81.2203]).addTo(map)
        .bindPopup('nan');

    L.marker([24.5623, 80.8549]).addTo(map)
        .bindPopup('VIST');

    L.marker([20.699, 77.0586]).addTo(map)
        .bindPopup('VAAK');

    L.marker([19.0887, 72.8679]).addTo(map)
        .bindPopup('VABB');

    L.marker([20.1191, 73.9129]).addTo(map)
        .bindPopup('VAOZ');

    L.marker([19.8627, 75.3981]).addTo(map)
        .bindPopup('VAAU');

    L.marker([20.9614, 75.6192]).addTo(map)
        .bindPopup('VAJL');

    L.marker([16.6647, 74.2894]).addTo(map)
        .bindPopup('VAKP');

    L.marker([18.4115, 76.4647]).addTo(map)
        .bindPopup('VALT');

    L.marker([21.0922, 79.0472]).addTo(map)
        .bindPopup('VANP');

    L.marker([19.1833, 77.3167]).addTo(map)
        .bindPopup('VAND');

    L.marker([18.5821, 73.9197]).addTo(map)
        .bindPopup('VAPO');

    L.marker([17.0136, 73.3278]).addTo(map)
        .bindPopup('VARG');

    L.marker([19.6886, 74.3789]).addTo(map)
        .bindPopup('nan');

    L.marker([17.628, 75.9348]).addTo(map)
        .bindPopup('VASL');

    L.marker([24.76, 93.8967]).addTo(map)
        .bindPopup('VEIM');

    L.marker([25.7036, 91.9787]).addTo(map)
        .bindPopup('VEBI');

    L.marker([23.8406, 92.6197]).addTo(map)
        .bindPopup('VELP');

    L.marker([25.8839, 93.7711]).addTo(map)
        .bindPopup('VEMR');

    L.marker([20.2444, 85.8178]).addTo(map)
        .bindPopup('VEBS');

    L.marker([26.8887, 70.865]).addTo(map)
        .bindPopup('VIJR');

    L.marker([18.88, 82.552]).addTo(map)
        .bindPopup('VEJP');

    L.marker([22.2567, 84.8146]).addTo(map)
        .bindPopup('VERK');

    L.marker([11.968, 79.812]).addTo(map)
        .bindPopup('VOPC');

    L.marker([31.4331, 75.7606]).addTo(map)
        .bindPopup('VIAX');

    L.marker([31.7096, 74.7973]).addTo(map)
        .bindPopup('VIAR');

    L.marker([30.2701, 74.7558]).addTo(map)
        .bindPopup('VIBT');

    L.marker([32.2336, 75.6344]).addTo(map)
        .bindPopup('VIPK');

    L.marker([30.8547, 75.9526]).addTo(map)
        .bindPopup('VILD');

    L.marker([28.0706, 73.2072]).addTo(map)
        .bindPopup('VIBK');

    L.marker([26.8242, 75.8122]).addTo(map)
        .bindPopup('VIJP');

    L.marker([26.2511, 73.0489]).addTo(map)
        .bindPopup('VIJO');

    L.marker([26.6015, 74.8141]).addTo(map)
        .bindPopup('VIKG');

    L.marker([25.1602, 75.8456]).addTo(map)
        .bindPopup('VIKO');

    L.marker([24.6177, 73.8961]).addTo(map)
        .bindPopup('VAUD');

    L.marker([11.03, 77.0434]).addTo(map)
        .bindPopup('VOCB');

    L.marker([9.83451, 78.0934]).addTo(map)
        .bindPopup('VOMD');

    L.marker([12.99, 80.1693]).addTo(map)
        .bindPopup('VOMM');

    L.marker([11.613, 79.5274]).addTo(map)
        .bindPopup('VONV');

    L.marker([11.7833, 78.0656]).addTo(map)
        .bindPopup('VOSM');

    L.marker([8.72424, 78.0258]).addTo(map)
        .bindPopup('VOTK');

    L.marker([10.7224, 79.1016]).addTo(map)
        .bindPopup('VOTJ');

    L.marker([10.7654, 78.7097]).addTo(map)
        .bindPopup('VOTR');

    L.marker([17.4531, 78.4676]).addTo(map)
        .bindPopup('VOHY');

    L.marker([17.2313, 78.4299]).addTo(map)
        .bindPopup('VOHS');

    L.marker([18.701, 79.3923]).addTo(map)
        .bindPopup('VORG');

    L.marker([17.9144, 79.6022]).addTo(map)
        .bindPopup('VOWA');

    L.marker([23.887, 91.2404]).addTo(map)
        .bindPopup('VEAT');

    L.marker([24.3082, 92.0072]).addTo(map)
        .bindPopup('VEKR');

    L.marker([27.1558, 77.9609]).addTo(map)
        .bindPopup('VIAG');

    L.marker([26.7397, 83.4497]).addTo(map)
        .bindPopup('VEGK');

    L.marker([25.4401, 81.7339]).addTo(map)
        .bindPopup('VIAL');

    L.marker([26.4043, 80.4101]).addTo(map)
        .bindPopup('VIKA');

    L.marker([26.7606, 80.8893]).addTo(map)
        .bindPopup('VILK');

    L.marker([25.4524, 82.8593]).addTo(map)
        .bindPopup('VEBN');

    L.marker([30.1897, 78.1803]).addTo(map)
        .bindPopup('VIDN');

    L.marker([29.0334, 79.4737]).addTo(map)
        .bindPopup('VIPT');

    L.marker([22.6547, 88.4467]).addTo(map)
        .bindPopup('VECC');

    L.marker([26.3305, 89.4672]).addTo(map)
        .bindPopup('VECO');

    L.marker([26.6812, 88.3286]).addTo(map)
        .bindPopup('VEBD');

    L.marker([25.033, 88.133]).addTo(map)
        .bindPopup('VEMH');

    L.marker([23.6225, 87.243]).addTo(map)
        .bindPopup('VEDG');

    L.marker([25.2617, 88.7956]).addTo(map)
        .bindPopup('VEBG');

    L.marker([33.7856, 42.4412]).addTo(map)
        .bindPopup('ORAA');

    L.marker([33.3381, 43.5971]).addTo(map)
        .bindPopup('ORAT');

    L.marker([30.5491, 47.6621]).addTo(map)
        .bindPopup('ORMM');

    L.marker([31.9899, 44.4043]).addTo(map)
        .bindPopup('ORNI');

    L.marker([36.2376, 43.9632]).addTo(map)
        .bindPopup('ORER');

    L.marker([35.5617, 45.3167]).addTo(map)
        .bindPopup('ORSU');

    L.marker([33.2625, 44.2346]).addTo(map)
        .bindPopup('ORBI');

    L.marker([37.0988, 43.2666]).addTo(map)
        .bindPopup('ORBB');

    L.marker([35.4695, 44.3489]).addTo(map)
        .bindPopup('ORKK');

    L.marker([36.3058, 43.1474]).addTo(map)
        .bindPopup('ORBM');

    L.marker([35.7672, 43.1251]).addTo(map)
        .bindPopup('nan');

    L.marker([35.7761, 50.8267]).addTo(map)
        .bindPopup('OIIP');

    L.marker([38.3257, 48.4244]).addTo(map)
        .bindPopup('OITL');

    L.marker([39.6036, 47.8815]).addTo(map)
        .bindPopup('OITP');

    L.marker([10.4625, -66.0928]).addTo(map)
        .bindPopup('SVHG');

    L.marker([39.33, 44.43]).addTo(map)
        .bindPopup('OITU');

    L.marker([38.4275, 44.9736]).addTo(map)
        .bindPopup('OITK');

    L.marker([37.6681, 45.0687]).addTo(map)
        .bindPopup('OITR');

    L.marker([41.4147, 19.7206]).addTo(map)
        .bindPopup('LATI');

    L.marker([37.348, 46.1279]).addTo(map)
        .bindPopup('OITM');

    L.marker([38.1339, 46.235]).addTo(map)
        .bindPopup('OITT');

    L.marker([28.9448, 50.8346]).addTo(map)
        .bindPopup('OIBB');

    L.marker([29.84, 50.2728]).addTo(map)
        .bindPopup('OIBH');

    L.marker([36.7333, 45.15]).addTo(map)
        .bindPopup('OITH');

    L.marker([29.2603, 50.3239]).addTo(map)
        .bindPopup('OIBQ');

    L.marker([27.8205, 52.3522]).addTo(map)
        .bindPopup('OIBJ');

    L.marker([27.3796, 52.7377]).addTo(map)
        .bindPopup('OIBP');

    L.marker([32.2972, 50.8422]).addTo(map)
        .bindPopup('OIFS');

    L.marker([32.9289, 51.5611]).addTo(map)
        .bindPopup('OIFE');

    L.marker([32.7508, 51.8613]).addTo(map)
        .bindPopup('OIFM');

    L.marker([28.8918, 53.7233]).addTo(map)
        .bindPopup('OISF');

    L.marker([28.5867, 53.5791]).addTo(map)
        .bindPopup('OISJ');

    L.marker([27.3727, 53.1888]).addTo(map)
        .bindPopup('OISR');

    L.marker([27.6747, 54.3833]).addTo(map)
        .bindPopup('OISL');

    L.marker([29.5392, 52.5898]).addTo(map)
        .bindPopup('OISS');

    L.marker([37.3233, 49.6178]).addTo(map)
        .bindPopup('OIGG');

    L.marker([36.9094, 54.4013]).addTo(map)
        .bindPopup('OING');

    L.marker([37.3833, 55.452]).addTo(map)
        .bindPopup('OINE');

    L.marker([34.8692, 48.5525]).addTo(map)
        .bindPopup('OIHH');

    L.marker([35.2117, 48.6533]).addTo(map)
        .bindPopup('OIHS');

    L.marker([25.8757, 55.033]).addTo(map)
        .bindPopup('OIBA');

    L.marker([26.532, 54.8248]).addTo(map)
        .bindPopup('OIBL');

    L.marker([27.2183, 56.3778]).addTo(map)
        .bindPopup('OIKB');

    L.marker([26.7546, 55.9024]).addTo(map)
        .bindPopup('OIKQ');

    L.marker([27.1583, 56.1725]).addTo(map)
        .bindPopup('OIKP');

    L.marker([26.5262, 53.9802]).addTo(map)
        .bindPopup('OIBK');

    L.marker([26.8103, 53.3563]).addTo(map)
        .bindPopup('OIBV');

    L.marker([25.9089, 54.5394]).addTo(map)
        .bindPopup('OIBS');

    L.marker([33.5866, 46.4048]).addTo(map)
        .bindPopup('OICI');

    L.marker([29.0842, 58.45]).addTo(map)
        .bindPopup('OIKM');

    L.marker([28.7269, 57.6703]).addTo(map)
        .bindPopup('OIKJ');

    L.marker([30.2744, 56.9511]).addTo(map)
        .bindPopup('OIKK');

    L.marker([30.2977, 56.0511]).addTo(map)
        .bindPopup('OIKR');

    L.marker([29.5509, 55.6727]).addTo(map)
        .bindPopup('OIKY');

    L.marker([34.3459, 47.1581]).addTo(map)
        .bindPopup('OICC');

    L.marker([33.6678, 56.8927]).addTo(map)
        .bindPopup('OIMT');

    L.marker([32.8981, 59.2661]).addTo(map)
        .bindPopup('OIMB');

    L.marker([36.1681, 57.5952]).addTo(map)
        .bindPopup('OIMS');

    L.marker([36.5012, 61.0649]).addTo(map)
        .bindPopup('OIMC');

    L.marker([36.2352, 59.641]).addTo(map)
        .bindPopup('OIMM');

    L.marker([37.493, 57.3082]).addTo(map)
        .bindPopup('OIMN');

    L.marker([30.3711, 48.2283]).addTo(map)
        .bindPopup('OIAA');

    L.marker([30.7444, 49.6772]).addTo(map)
        .bindPopup('OIAG');

    L.marker([31.3374, 48.762]).addTo(map)
        .bindPopup('OIAW');

    L.marker([32.4344, 48.3976]).addTo(map)
        .bindPopup('OIAD');

    L.marker([30.5562, 49.1519]).addTo(map)
        .bindPopup('OIAM');

    L.marker([30.8352, 49.5349]).addTo(map)
        .bindPopup('OIAJ');

    L.marker([30.3376, 50.828]).addTo(map)
        .bindPopup('OIAH');

    L.marker([30.7005, 51.5451]).addTo(map)
        .bindPopup('OISY');

    L.marker([35.2459, 47.0092]).addTo(map)
        .bindPopup('OICS');

    L.marker([33.4354, 48.2829]).addTo(map)
        .bindPopup('OICK');

    L.marker([34.1381, 49.8473]).addTo(map)
        .bindPopup('OIHR');

    L.marker([36.6551, 52.3496]).addTo(map)
        .bindPopup('OINJ');

    L.marker([36.6633, 51.4647]).addTo(map)
        .bindPopup('OINN');

    L.marker([36.9099, 50.6796]).addTo(map)
        .bindPopup('OINR');

    L.marker([36.6358, 53.1936]).addTo(map)
        .bindPopup('OINZ');

    L.marker([36.2401, 50.0471]).addTo(map)
        .bindPopup('OIIK');

    L.marker([36.4253, 55.1042]).addTo(map)
        .bindPopup('OIMJ');

    L.marker([35.5911, 53.4951]).addTo(map)
        .bindPopup('OIIS');

    L.marker([31.0983, 61.5439]).addTo(map)
        .bindPopup('OIZB');

    L.marker([-13.1884, 48.988]).addTo(map)
        .bindPopup('FMNE');

    L.marker([-14.9994, 50.3202]).addTo(map)
        .bindPopup('FMNH');

    L.marker([-12.3494, 49.2917]).addTo(map)
        .bindPopup('FMNA');

    L.marker([-14.3681, 49.5108]).addTo(map)
        .bindPopup('nan');

    L.marker([27.2361, 60.72]).addTo(map)
        .bindPopup('OIZI');

    L.marker([-13.4848, 48.6327]).addTo(map)
        .bindPopup('FMNJ');

    L.marker([-13.3121, 48.3148]).addTo(map)
        .bindPopup('FMNN');

    L.marker([-14.2786, 50.1747]).addTo(map)
        .bindPopup('FMNS');

    L.marker([-13.3758, 50.0028]).addTo(map)
        .bindPopup('FMNV');

    L.marker([29.4757, 60.9062]).addTo(map)
        .bindPopup('OIZH');

    L.marker([25.4433, 60.3821]).addTo(map)
        .bindPopup('OIZC');

    L.marker([-14.6517, 49.6206]).addTo(map)
        .bindPopup('FMND');

    L.marker([35.4161, 51.1522]).addTo(map)
        .bindPopup('OIIE');

    L.marker([33.8953, 51.577]).addTo(map)
        .bindPopup('OIFK');

    L.marker([35.6892, 51.3134]).addTo(map)
        .bindPopup('OIII');

    L.marker([31.9049, 54.2765]).addTo(map)
        .bindPopup('OIYY');

    L.marker([36.7737, 48.3594]).addTo(map)
        .bindPopup('OITZ');

    L.marker([65.5164, -13.805]).addTo(map)
        .bindPopup('BIBF');

    L.marker([64.6442, -14.2828]).addTo(map)
        .bindPopup('BIDV');

    L.marker([64.2956, -15.2272]).addTo(map)
        .bindPopup('BIHN');

    L.marker([64.13, -21.9406]).addTo(map)
        .bindPopup('BIRK');

    L.marker([65.66, -18.0727]).addTo(map)
        .bindPopup('BIAR');

    L.marker([66.0219, -14.8244]).addTo(map)
        .bindPopup('BIBK');

    L.marker([64.79, -14.0228]).addTo(map)
        .bindPopup('BIBV');

    L.marker([65.2833, -14.4014]).addTo(map)
        .bindPopup('BIEG');

    L.marker([64.9317, -14.0606]).addTo(map)
        .bindPopup('BIFF');

    L.marker([66.5458, -18.0173]).addTo(map)
        .bindPopup('BIGR');

    L.marker([65.9523, -17.426]).addTo(map)
        .bindPopup('BIHU');

    L.marker([65.6558, -16.9181]).addTo(map)
        .bindPopup('BIRL');

    L.marker([65.1319, -13.7464]).addTo(map)
        .bindPopup('BINF');

    L.marker([66.0833, -18.6667]).addTo(map)
        .bindPopup('BIOF');

    L.marker([66.3108, -16.4667]).addTo(map)
        .bindPopup('BIKP');

    L.marker([66.4064, -15.9183]).addTo(map)
        .bindPopup('BIRG');

    L.marker([66.1333, -18.9167]).addTo(map)
        .bindPopup('BISI');

    L.marker([66.2185, -15.3356]).addTo(map)
        .bindPopup('BITN');

    L.marker([65.7206, -14.8506]).addTo(map)
        .bindPopup('BIVO');

    L.marker([65.6413, -23.5462]).addTo(map)
        .bindPopup('BIBD');

    L.marker([65.645, -20.2875]).addTo(map)
        .bindPopup('BIBL');

    L.marker([64.9114, -23.8231]).addTo(map)
        .bindPopup('BIRF');

    L.marker([65.5558, -23.965]).addTo(map)
        .bindPopup('BIPA');

    L.marker([65.7317, -19.5728]).addTo(map)
        .bindPopup('BIKR');

    L.marker([63.8747, -16.6411]).addTo(map)
        .bindPopup('BIFM');

    L.marker([63.4243, -20.2789]).addTo(map)
        .bindPopup('BIVM');

    L.marker([63.985, -22.6056]).addTo(map)
        .bindPopup('BIKF');

    L.marker([66.0142, -23.4417]).addTo(map)
        .bindPopup('nan');

    L.marker([65.9953, -21.3269]).addTo(map)
        .bindPopup('BIGJ');

    L.marker([65.7047, -21.6964]).addTo(map)
        .bindPopup('BIHK');

    L.marker([66.0581, -23.1353]).addTo(map)
        .bindPopup('BIIS');

    L.marker([65.4526, -22.2061]).addTo(map)
        .bindPopup('BIRE');

    L.marker([65.8703, -23.56]).addTo(map)
        .bindPopup('BITE');

    L.marker([64.9914, -23.2247]).addTo(map)
        .bindPopup('BIGF');

    L.marker([65.0581, -22.7942]).addTo(map)
        .bindPopup('BIST');

    L.marker([42.4317, 14.1811]).addTo(map)
        .bindPopup('LIBP');

    L.marker([42.3799, 13.3092]).addTo(map)
        .bindPopup('LIAP');

    L.marker([38.9972, 17.0802]).addTo(map)
        .bindPopup('LIBC');

    L.marker([38.0712, 15.6516]).addTo(map)
        .bindPopup('LICR');

    L.marker([38.9054, 16.2423]).addTo(map)
        .bindPopup('LICA');

    L.marker([40.886, 14.2908]).addTo(map)
        .bindPopup('LIRN');

    L.marker([40.6204, 14.9113]).addTo(map)
        .bindPopup('LIRI');

    L.marker([44.5354, 11.2887]).addTo(map)
        .bindPopup('LIPE');

    L.marker([44.1948, 12.0701]).addTo(map)
        .bindPopup('LIPK');

    L.marker([44.3639, 12.225]).addTo(map)
        .bindPopup('LIDR');

    L.marker([44.0203, 12.6117]).addTo(map)
        .bindPopup('LIPR');

    L.marker([46.0319, 12.5965]).addTo(map)
        .bindPopup('LIPA');

    L.marker([45.8275, 13.4722]).addTo(map)
        .bindPopup('LIPQ');

    L.marker([46.0322, 13.1868]).addTo(map)
        .bindPopup('LIPD');

    L.marker([41.8003, 12.2389]).addTo(map)
        .bindPopup('LIRF');

    L.marker([44.0506, 8.12743]).addTo(map)
        .bindPopup('LIMG');

    L.marker([44.4133, 8.8375]).addTo(map)
        .bindPopup('LIMJ');

    L.marker([45.6306, 8.72811]).addTo(map)
        .bindPopup('LIMC');

    L.marker([45.4289, 10.3306]).addTo(map)
        .bindPopup('LIPO');

    L.marker([43.6163, 13.3623]).addTo(map)
        .bindPopup('LIPY');

    L.marker([44.547, 7.62322]).addTo(map)
        .bindPopup('LIMZ');

    L.marker([45.2008, 7.64963]).addTo(map)
        .bindPopup('LIMF');

    L.marker([40.6576, 17.947]).addTo(map)
        .bindPopup('LIBR');

    L.marker([41.1389, 16.7606]).addTo(map)
        .bindPopup('LIBD');

    L.marker([41.4329, 15.535]).addTo(map)
        .bindPopup('LIBF');

    L.marker([40.2392, 18.1333]).addTo(map)
        .bindPopup('LIBN');

    L.marker([40.5175, 17.4032]).addTo(map)
        .bindPopup('LIBG');

    L.marker([40.6321, 8.29077]).addTo(map)
        .bindPopup('LIEA');

    L.marker([39.2515, 9.05428]).addTo(map)
        .bindPopup('LIEE');

    L.marker([39.3542, 8.97248]).addTo(map)
        .bindPopup('LIED');

    L.marker([39.8953, 8.64266]).addTo(map)
        .bindPopup('LIER');

    L.marker([40.8987, 9.51763]).addTo(map)
        .bindPopup('LIEO');

    L.marker([39.9188, 9.68298]).addTo(map)
        .bindPopup('LIET');

    L.marker([36.9946, 14.6072]).addTo(map)
        .bindPopup('LICB');

    L.marker([37.4668, 15.0664]).addTo(map)
        .bindPopup('LICC');

    L.marker([35.4979, 12.6181]).addTo(map)
        .bindPopup('LICD');

    L.marker([37.4017, 14.9224]).addTo(map)
        .bindPopup('LICZ');

    L.marker([38.176, 13.091]).addTo(map)
        .bindPopup('LICJ');

    L.marker([36.8165, 11.9689]).addTo(map)
        .bindPopup('LICG');

    L.marker([37.9114, 12.488]).addTo(map)
        .bindPopup('LICT');

    L.marker([42.7603, 10.2394]).addTo(map)
        .bindPopup('LIRJ');

    L.marker([43.81, 11.2051]).addTo(map)
        .bindPopup('LIRQ');

    L.marker([42.7597, 11.0719]).addTo(map)
        .bindPopup('LIRS');

    L.marker([43.8258, 10.5779]).addTo(map)
        .bindPopup('LIQL');

    L.marker([43.6839, 10.3927]).addTo(map)
        .bindPopup('LIRP');

    L.marker([43.2563, 11.255]).addTo(map)
        .bindPopup('LIQS');

    L.marker([46.4602, 11.3264]).addTo(map)
        .bindPopup('LIPB');

    L.marker([43.0959, 12.5132]).addTo(map)
        .bindPopup('LIRZ');

    L.marker([45.7385, 7.36872]).addTo(map)
        .bindPopup('LIMW');

    L.marker([46.1665, 12.2504]).addTo(map)
        .bindPopup('LIDB');

    L.marker([45.6484, 12.1944]).addTo(map)
        .bindPopup('LIPH');

    L.marker([45.5053, 12.3519]).addTo(map)
        .bindPopup('LIPZ');

    L.marker([45.5734, 11.5295]).addTo(map)
        .bindPopup('LIPT');

    L.marker([45.3957, 10.8885]).addTo(map)
        .bindPopup('LIPX');

    L.marker([49.2081, -2.19528]).addTo(map)
        .bindPopup('EGJJ');

    L.marker([17.9886, -76.8238]).addTo(map)
        .bindPopup('MKTP');

    L.marker([18.1988, -76.5345]).addTo(map)
        .bindPopup('MKKJ');

    L.marker([17.9357, -76.7875]).addTo(map)
        .bindPopup('MKJP');

    L.marker([18.5037, -77.9134]).addTo(map)
        .bindPopup('MKJS');

    L.marker([18.4042, -76.969]).addTo(map)
        .bindPopup('MKBS');

    L.marker([18.3428, -78.3321]).addTo(map)
        .bindPopup('MKNG');

    L.marker([29.6116, 35.0181]).addTo(map)
        .bindPopup('OJAQ');

    L.marker([31.9727, 35.9916]).addTo(map)
        .bindPopup('OJAM');

    L.marker([32.3564, 36.2592]).addTo(map)
        .bindPopup('OJMF');

    L.marker([30.1667, 35.7833]).addTo(map)
        .bindPopup('OJMN');

    L.marker([31.7226, 35.9932]).addTo(map)
        .bindPopup('OJAI');

    L.marker([34.8584, 136.805]).addTo(map)
        .bindPopup('RJGG');

    L.marker([35.255, 136.924]).addTo(map)
        .bindPopup('RJNA');

    L.marker([39.6156, 140.219]).addTo(map)
        .bindPopup('RJSK');

    L.marker([40.1919, 140.371]).addTo(map)
        .bindPopup('RJSR');

    L.marker([40.7347, 140.691]).addTo(map)
        .bindPopup('RJSA');

    L.marker([40.5564, 141.466]).addTo(map)
        .bindPopup('RJSH');

    L.marker([40.7032, 141.368]).addTo(map)
        .bindPopup('RJSM');

    L.marker([33.8272, 132.7]).addTo(map)
        .bindPopup('RJOM');

    L.marker([36.1428, 136.224]).addTo(map)
        .bindPopup('RJNF');

    L.marker([33.5859, 130.451]).addTo(map)
        .bindPopup('RJFF');

    L.marker([33.8459, 131.035]).addTo(map)
        .bindPopup('RJFR');

    L.marker([37.2274, 140.431]).addTo(map)
        .bindPopup('RJSF');

    L.marker([34.4361, 132.919]).addTo(map)
        .bindPopup('RJOA');

    L.marker([34.3669, 132.414]).addTo(map)
        .bindPopup('RJBH');

    L.marker([43.6708, 142.447]).addTo(map)
        .bindPopup('RJEC');

    L.marker([41.77, 140.822]).addTo(map)
        .bindPopup('RJCH');

    L.marker([43.041, 144.193]).addTo(map)
        .bindPopup('RJCK');

    L.marker([44.3039, 143.404]).addTo(map)
        .bindPopup('RJEB');

    L.marker([43.8806, 144.164]).addTo(map)
        .bindPopup('RJCM');

    L.marker([42.7333, 143.217]).addTo(map)
        .bindPopup('RJCB');

    L.marker([42.0717, 139.433]).addTo(map)
        .bindPopup('RJEO');

    L.marker([45.455, 141.039]).addTo(map)
        .bindPopup('RJCR');

    L.marker([45.242, 141.186]).addTo(map)
        .bindPopup('RJER');

    L.marker([43.5775, 144.96]).addTo(map)
        .bindPopup('RJCN');

    L.marker([45.4042, 141.801]).addTo(map)
        .bindPopup('RJCW');

    L.marker([35.5128, 134.787]).addTo(map)
        .bindPopup('RJBT');

    L.marker([36.1811, 140.415]).addTo(map)
        .bindPopup('RJAH');

    L.marker([36.3946, 136.407]).addTo(map)
        .bindPopup('RJNK');

    L.marker([37.2931, 136.962]).addTo(map)
        .bindPopup('RJNW');

    L.marker([39.4286, 141.135]).addTo(map)
        .bindPopup('RJSI');

    L.marker([34.2142, 134.016]).addTo(map)
        .bindPopup('RJOT');

    L.marker([28.4306, 129.713]).addTo(map)
        .bindPopup('RJKA');

    L.marker([28.3213, 129.928]).addTo(map)
        .bindPopup('RJKI');

    L.marker([31.8034, 130.719]).addTo(map)
        .bindPopup('RJFK');

    L.marker([30.3856, 130.659]).addTo(map)
        .bindPopup('RJFC');

    L.marker([27.4255, 128.701]).addTo(map)
        .bindPopup('RJKB');

    L.marker([27.044, 128.402]).addTo(map)
        .bindPopup('RORY');

    L.marker([27.8364, 128.881]).addTo(map)
        .bindPopup('RJKN');

    L.marker([30.6051, 130.991]).addTo(map)
        .bindPopup('RJFG');

    L.marker([35.4546, 139.45]).addTo(map)
        .bindPopup('RJTA');

    L.marker([33.5461, 133.669]).addTo(map)
        .bindPopup('RJOK');

    L.marker([32.4825, 130.159]).addTo(map)
        .bindPopup('RJDA');

    L.marker([32.8373, 130.855]).addTo(map)
        .bindPopup('RJFT');

    L.marker([38.1397, 140.917]).addTo(map)
        .bindPopup('RJSS');

    L.marker([31.8772, 131.449]).addTo(map)
        .bindPopup('RJFM');

    L.marker([36.1668, 137.923]).addTo(map)
        .bindPopup('RJAF');

    L.marker([32.6663, 128.833]).addTo(map)
        .bindPopup('RJFE');

    L.marker([33.749, 129.785]).addTo(map)
        .bindPopup('RJDB');

    L.marker([32.9169, 129.914]).addTo(map)
        .bindPopup('RJFU');

    L.marker([35.0833, 140.1]).addTo(map)
        .bindPopup('RJDU');

    L.marker([34.2849, 129.331]).addTo(map)
        .bindPopup('RJDT');

    L.marker([37.9559, 139.121]).addTo(map)
        .bindPopup('RJSN');

    L.marker([38.0602, 138.414]).addTo(map)
        .bindPopup('RJSD');

    L.marker([33.4794, 131.737]).addTo(map)
        .bindPopup('RJFO');

    L.marker([34.7569, 133.855]).addTo(map)
        .bindPopup('RJOB');

    L.marker([26.5925, 127.241]).addTo(map)
        .bindPopup('RORA');

    L.marker([26.3556, 127.768]).addTo(map)
        .bindPopup('RODN');

    L.marker([24.0589, 123.806]).addTo(map)
        .bindPopup('RORH');

    L.marker([26.722, 127.785]).addTo(map)
        .bindPopup('RORE');

    L.marker([24.3964, 124.245]).addTo(map)
        .bindPopup('ROIG');

    L.marker([26.1683, 127.293]).addTo(map)
        .bindPopup('ROKR');

    L.marker([25.9447, 131.327]).addTo(map)
        .bindPopup('RORK');

    L.marker([25.8465, 131.263]).addTo(map)
        .bindPopup('ROMD');

    L.marker([24.7828, 125.295]).addTo(map)
        .bindPopup('ROMY');

    L.marker([24.4669, 122.978]).addTo(map)
        .bindPopup('ROYN');

    L.marker([26.1958, 127.646]).addTo(map)
        .bindPopup('ROAH');

    L.marker([24.8267, 125.145]).addTo(map)
        .bindPopup('RORS');

    L.marker([24.6539, 124.675]).addTo(map)
        .bindPopup('RORT');

    L.marker([26.3635, 126.714]).addTo(map)
        .bindPopup('ROKJ');

    L.marker([34.4305, 135.23]).addTo(map)
        .bindPopup('RJBB');

    L.marker([33.1497, 130.302]).addTo(map)
        .bindPopup('RJFS');

    L.marker([34.6764, 131.79]).addTo(map)
        .bindPopup('RJOW');

    L.marker([35.4136, 132.89]).addTo(map)
        .bindPopup('RJOC');

    L.marker([34.796, 138.188]).addTo(map)
        .bindPopup('RJNS');

    L.marker([34.1328, 134.607]).addTo(map)
        .bindPopup('RJOS');

    L.marker([33.115, 139.786]).addTo(map)
        .bindPopup('RJTH');

    L.marker([35.5533, 139.781]).addTo(map)
        .bindPopup('RJTT');

    L.marker([24.784, 141.323]).addTo(map)
        .bindPopup('RJAW');

    L.marker([24.2897, 153.979]).addTo(map)
        .bindPopup('RJAM');

    L.marker([34.0736, 139.56]).addTo(map)
        .bindPopup('RJTQ');

    L.marker([35.7653, 140.386]).addTo(map)
        .bindPopup('RJAA');

    L.marker([34.782, 139.36]).addTo(map)
        .bindPopup('RJTO');

    L.marker([36.1811, 133.325]).addTo(map)
        .bindPopup('RJNO');

    L.marker([35.5301, 134.167]).addTo(map)
        .bindPopup('RJOR');

    L.marker([35.4922, 133.236]).addTo(map)
        .bindPopup('RJOH');

    L.marker([36.6483, 137.188]).addTo(map)
        .bindPopup('RJNT');

    L.marker([33.6622, 135.364]).addTo(map)
        .bindPopup('RJBD');

    L.marker([38.4119, 140.371]).addTo(map)
        .bindPopup('RJSC');

    L.marker([38.8122, 139.787]).addTo(map)
        .bindPopup('RJSY');

    L.marker([34.1439, 132.236]).addTo(map)
        .bindPopup('RJOI');

    L.marker([33.93, 131.279]).addTo(map)
        .bindPopup('RJDC');

    L.marker([0.666103, 36.1042]).addTo(map)
        .bindPopup('nan');

    L.marker([0.319638, 35.6626]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.31924, 36.9278]).addTo(map)
        .bindPopup('HKJK');

    L.marker([-0.463508, 39.6483]).addTo(map)
        .bindPopup('HKGA');

    L.marker([0.348333, 40.8817]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.64505, 37.2531]).addTo(map)
        .bindPopup('HKAM');

    L.marker([0.271342, 34.7873]).addTo(map)
        .bindPopup('HKKG');

    L.marker([-0.3899, 35.2421]).addTo(map)
        .bindPopup('HKKR');

    L.marker([-3.22931, 40.1017]).addTo(map)
        .bindPopup('HKML');

    L.marker([-3.80667, 39.7974]).addTo(map)
        .bindPopup('nan');

    L.marker([-0.086139, 34.7289]).addTo(map)
        .bindPopup('HKKI');

    L.marker([-4.29333, 39.5711]).addTo(map)
        .bindPopup('HKUK');

    L.marker([-0.062399, 37.041]).addTo(map)
        .bindPopup('HKNY');

    L.marker([-1.74383, 41.4843]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.96056, 41.2975]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.25242, 40.9131]).addTo(map)
        .bindPopup('HKLU');

    L.marker([3.933, 41.85]).addTo(map)
        .bindPopup('HKMA');

    L.marker([3.46972, 39.1014]).addTo(map)
        .bindPopup('HKMY');

    L.marker([2.34425, 38.0]).addTo(map)
        .bindPopup('HKMB');

    L.marker([0.165083, 38.1951]).addTo(map)
        .bindPopup('HKMK');

    L.marker([-3.98191, 39.7308]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.03483, 39.5942]).addTo(map)
        .bindPopup('HKMO');

    L.marker([-1.32172, 36.8148]).addTo(map)
        .bindPopup('HKNW');

    L.marker([-0.298067, 36.1593]).addTo(map)
        .bindPopup('HKNK');

    L.marker([-1.583, 35.25]).addTo(map)
        .bindPopup('HKKE');

    L.marker([-1.40611, 35.0081]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.27156, 34.9555]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.2635, 35.0275]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.40859, 35.1107]).addTo(map)
        .bindPopup('nan');

    L.marker([-0.364414, 36.9785]).addTo(map)
        .bindPopup('HKNI');

    L.marker([0.530583, 37.5342]).addTo(map)
        .bindPopup('HKSB');

    L.marker([-2.91061, 38.0652]).addTo(map)
        .bindPopup('HKKL');

    L.marker([-1.522, 40.004]).addTo(map)
        .bindPopup('HKHO');

    L.marker([3.21667, 35.9667]).addTo(map)
        .bindPopup('HKES');

    L.marker([3.49161, 35.8368]).addTo(map)
        .bindPopup('HKFG');

    L.marker([4.20412, 34.3482]).addTo(map)
        .bindPopup('HKLK');

    L.marker([3.41667, 35.8833]).addTo(map)
        .bindPopup('nan');

    L.marker([3.12197, 35.6087]).addTo(map)
        .bindPopup('HKLO');

    L.marker([2.75, 36.717]).addTo(map)
        .bindPopup('HKLY');

    L.marker([0.404458, 35.2389]).addTo(map)
        .bindPopup('HKEL');

    L.marker([0.971989, 34.9586]).addTo(map)
        .bindPopup('HKKT');

    L.marker([1.73324, 40.0916]).addTo(map)
        .bindPopup('HKWJ');

    L.marker([43.0613, 74.4776]).addTo(map)
        .bindPopup('UAFM');

    L.marker([40.609, 72.7933]).addTo(map)
        .bindPopup('UAFO');

    L.marker([13.0956, 103.224]).addTo(map)
        .bindPopup('VDBG');

    L.marker([12.2552, 104.564]).addTo(map)
        .bindPopup('VDKH');

    L.marker([10.6343, 104.162]).addTo(map)
        .bindPopup('nan');

    L.marker([11.6134, 102.997]).addTo(map)
        .bindPopup('VDKK');

    L.marker([12.488, 106.055]).addTo(map)
        .bindPopup('VDKT');

    L.marker([10.5797, 103.637]).addTo(map)
        .bindPopup('VDSV');

    L.marker([12.4636, 107.187]).addTo(map)
        .bindPopup('VDMK');

    L.marker([11.5466, 104.844]).addTo(map)
        .bindPopup('VDPP');

    L.marker([13.5319, 106.015]).addTo(map)
        .bindPopup('VDST');

    L.marker([12.5385, 104.149]).addTo(map)
        .bindPopup('nan');

    L.marker([13.7597, 104.972]).addTo(map)
        .bindPopup('nan');

    L.marker([13.73, 106.987]).addTo(map)
        .bindPopup('VDRK');

    L.marker([13.4107, 103.813]).addTo(map)
        .bindPopup('VDSR');

    L.marker([0.185278, 173.637]).addTo(map)
        .bindPopup('NGUK');

    L.marker([1.79861, 173.041]).addTo(map)
        .bindPopup('NGAB');

    L.marker([0.490833, 173.829]).addTo(map)
        .bindPopup('NGTB');

    L.marker([-2.61611, 176.803]).addTo(map)
        .bindPopup('NGTR');

    L.marker([3.08583, 172.811]).addTo(map)
        .bindPopup('NGTU');

    L.marker([-1.35472, 176.007]).addTo(map)
        .bindPopup('NGBR');

    L.marker([0.218611, 173.442]).addTo(map)
        .bindPopup('NGKT');

    L.marker([1.00361, 173.031]).addTo(map)
        .bindPopup('NGMA');

    L.marker([3.37444, 172.992]).addTo(map)
        .bindPopup('NGMN');

    L.marker([2.05861, 173.271]).addTo(map)
        .bindPopup('NGMK');

    L.marker([-1.31444, 176.41]).addTo(map)
        .bindPopup('NGNU');

    L.marker([-0.639722, 174.428]).addTo(map)
        .bindPopup('NGTO');

    L.marker([-1.79611, 175.526]).addTo(map)
        .bindPopup('NGON');

    L.marker([-1.22447, 174.776]).addTo(map)
        .bindPopup('NGTE');

    L.marker([-2.48583, 175.97]).addTo(map)
        .bindPopup('NGTM');

    L.marker([1.38164, 173.147]).addTo(map)
        .bindPopup('NGTA');

    L.marker([-1.47444, 175.064]).addTo(map)
        .bindPopup('NGTS');

    L.marker([-2.76812, -171.71]).addTo(map)
        .bindPopup('PCIS');

    L.marker([1.98616, -157.35]).addTo(map)
        .bindPopup('PLCH');

    L.marker([4.69836, -160.394]).addTo(map)
        .bindPopup('nan');

    L.marker([3.89944, -159.389]).addTo(map)
        .bindPopup('nan');

    L.marker([-12.1317, 44.4303]).addTo(map)
        .bindPopup('FMCV');

    L.marker([-11.5337, 43.2719]).addTo(map)
        .bindPopup('FMCH');

    L.marker([-11.7125, 43.2431]).addTo(map)
        .bindPopup('FMCN');

    L.marker([-12.2981, 43.7664]).addTo(map)
        .bindPopup('FMCI');

    L.marker([17.3112, -62.7187]).addTo(map)
        .bindPopup('TKPK');

    L.marker([17.2057, -62.5899]).addTo(map)
        .bindPopup('TKPN');

    L.marker([41.4285, 129.648]).addTo(map)
        .bindPopup('ZKHM');

    L.marker([39.7452, 127.474]).addTo(map)
        .bindPopup('ZKSD');

    L.marker([39.1668, 127.486]).addTo(map)
        .bindPopup('ZKWS');

    L.marker([40.1546, 124.532]).addTo(map)
        .bindPopup('ZKUJ');

    L.marker([39.2241, 125.67]).addTo(map)
        .bindPopup('ZKPY');

    L.marker([41.9071, 128.41]).addTo(map)
        .bindPopup('ZKSE');

    L.marker([35.1795, 128.938]).addTo(map)
        .bindPopup('RKPK');

    L.marker([36.717, 127.499]).addTo(map)
        .bindPopup('RKTU');

    L.marker([37.03, 127.885]).addTo(map)
        .bindPopup('RKTI');

    L.marker([36.704, 126.486]).addTo(map)
        .bindPopup('RKTP');

    L.marker([37.7536, 128.944]).addTo(map)
        .bindPopup('RKNN');

    L.marker([37.4412, 127.964]).addTo(map)
        .bindPopup('RKNW');

    L.marker([38.0613, 128.669]).addTo(map)
        .bindPopup('RKNY');

    L.marker([35.8781, 127.119]).addTo(map)
        .bindPopup('RKJU');

    L.marker([35.9038, 126.616]).addTo(map)
        .bindPopup('RKJK');

    L.marker([35.1232, 126.805]).addTo(map)
        .bindPopup('RKJJ');

    L.marker([34.9914, 126.383]).addTo(map)
        .bindPopup('RKJB');

    L.marker([34.8423, 127.617]).addTo(map)
        .bindPopup('RKJY');

    L.marker([37.4633, 126.44]).addTo(map)
        .bindPopup('RKSI');

    L.marker([37.0906, 127.03]).addTo(map)
        .bindPopup('RKSO');

    L.marker([37.2394, 127.007]).addTo(map)
        .bindPopup('RKSW');

    L.marker([35.1402, 128.696]).addTo(map)
        .bindPopup('RKPE');

    L.marker([35.0886, 128.072]).addTo(map)
        .bindPopup('RKPS');

    L.marker([35.988, 129.42]).addTo(map)
        .bindPopup('RKTH');

    L.marker([35.8969, 128.655]).addTo(map)
        .bindPopup('RKTN');

    L.marker([36.7771, 129.462]).addTo(map)
        .bindPopup('RKTL');

    L.marker([35.5935, 129.352]).addTo(map)
        .bindPopup('RKPU');

    L.marker([36.6304, 128.35]).addTo(map)
        .bindPopup('RKTY');

    L.marker([33.5113, 126.493]).addTo(map)
        .bindPopup('RKPC');

    L.marker([33.3996, 126.712]).addTo(map)
        .bindPopup('RKPD');

    L.marker([28.9348, 47.7919]).addTo(map)
        .bindPopup('OKAJ');

    L.marker([29.2266, 47.9689]).addTo(map)
        .bindPopup('OKBK');

    L.marker([19.687, -79.8828]).addTo(map)
        .bindPopup('MWCB');

    L.marker([19.2928, -81.3577]).addTo(map)
        .bindPopup('MWCR');

    L.marker([19.6602, -80.0888]).addTo(map)
        .bindPopup('MWCL');

    L.marker([46.1903, 80.8314]).addTo(map)
        .bindPopup('UAAL');

    L.marker([43.3521, 77.0405]).addTo(map)
        .bindPopup('UAAA');

    L.marker([43.3526, 76.8837]).addTo(map)
        .bindPopup('UAAR');

    L.marker([45.1262, 78.447]).addTo(map)
        .bindPopup('nan');

    L.marker([51.8517, 68.3633]).addTo(map)
        .bindPopup('nan');

    L.marker([48.3974, 70.1915]).addTo(map)
        .bindPopup('nan');

    L.marker([53.3291, 69.5946]).addTo(map)
        .bindPopup('UACK');

    L.marker([50.2458, 57.2067]).addTo(map)
        .bindPopup('UATT');

    L.marker([51.0222, 71.4669]).addTo(map)
        .bindPopup('UACC');

    L.marker([47.1219, 51.8214]).addTo(map)
        .bindPopup('UATG');

    L.marker([51.1508, 51.5431]).addTo(map)
        .bindPopup('UARR');

    L.marker([45.622, 63.2108]).addTo(map)
        .bindPopup('UAOL');

    L.marker([43.8601, 51.092]).addTo(map)
        .bindPopup('UATE');

    L.marker([42.3642, 69.4789]).addTo(map)
        .bindPopup('UAII');

    L.marker([51.591, 75.215]).addTo(map)
        .bindPopup('UASB');

    L.marker([52.195, 77.0739]).addTo(map)
        .bindPopup('UASP');

    L.marker([46.8933, 75.005]).addTo(map)
        .bindPopup('UAAH');

    L.marker([47.7083, 67.7333]).addTo(map)
        .bindPopup('UAKD');

    L.marker([49.6708, 73.3344]).addTo(map)
        .bindPopup('UAKK');

    L.marker([50.3186, 66.9528]).addTo(map)
        .bindPopup('UAUR');

    L.marker([53.2069, 63.5503]).addTo(map)
        .bindPopup('UAUU');

    L.marker([44.7069, 65.5925]).addTo(map)
        .bindPopup('UAOO');

    L.marker([50.3513, 80.2344]).addTo(map)
        .bindPopup('UASS');

    L.marker([47.4875, 84.8877]).addTo(map)
        .bindPopup('nan');

    L.marker([50.0366, 82.4942]).addTo(map)
        .bindPopup('UASK');

    L.marker([47.0911, 81.6652]).addTo(map)
        .bindPopup('nan');

    L.marker([54.7747, 69.1839]).addTo(map)
        .bindPopup('UACP');

    L.marker([42.8536, 71.3036]).addTo(map)
        .bindPopup('UADD');

    L.marker([14.7931, 107.045]).addTo(map)
        .bindPopup('VLAP');

    L.marker([20.2573, 100.437]).addTo(map)
        .bindPopup('VLHS');

    L.marker([17.9881, 102.563]).addTo(map)
        .bindPopup('VLKG');

    L.marker([15.1321, 105.781]).addTo(map)
        .bindPopup('VLPS');

    L.marker([20.4184, 104.067]).addTo(map)
        .bindPopup('VLSN');

    L.marker([17.4, 104.8]).addTo(map)
        .bindPopup('VLTK');

    L.marker([20.9606, 101.402]).addTo(map)
        .bindPopup('VLLN');

    L.marker([19.8973, 102.161]).addTo(map)
        .bindPopup('VLLB');

    L.marker([20.6827, 101.994]).addTo(map)
        .bindPopup('VLOS');

    L.marker([21.6475, 101.9]).addTo(map)
        .bindPopup('nan');

    L.marker([15.7094, 106.411]).addTo(map)
        .bindPopup('VLSV');

    L.marker([16.5566, 104.76]).addTo(map)
        .bindPopup('VLSK');

    L.marker([17.9883, 102.563]).addTo(map)
        .bindPopup('VLVT');

    L.marker([19.2436, 101.709]).addTo(map)
        .bindPopup('VLSB');

    L.marker([19.4402, 103.169]).addTo(map)
        .bindPopup('VLXK');

    L.marker([33.8209, 35.4884]).addTo(map)
        .bindPopup('OLBA');

    L.marker([34.5893, 36.0113]).addTo(map)
        .bindPopup('OLKA');

    L.marker([18.0999, -63.0472]).addTo(map)
        .bindPopup('TFFG');

    L.marker([14.0202, -60.9929]).addTo(map)
        .bindPopup('TLPC');

    L.marker([13.7332, -60.9526]).addTo(map)
        .bindPopup('TLPL');

    L.marker([7.33776, 81.6259]).addTo(map)
        .bindPopup('VCCG');

    L.marker([6.86, 81.8239]).addTo(map)
        .bindPopup('nan');

    L.marker([7.70576, 81.6788]).addTo(map)
        .bindPopup('VCCB');

    L.marker([7.8604, 80.6304]).addTo(map)
        .bindPopup('nan');

    L.marker([7.95667, 80.7285]).addTo(map)
        .bindPopup('VCCS');

    L.marker([7.2415, 80.7834]).addTo(map)
        .bindPopup('nan');

    L.marker([7.3251, 80.6422]).addTo(map)
        .bindPopup('nan');

    L.marker([6.95717, 80.7795]).addTo(map)
        .bindPopup('nan');

    L.marker([6.86, 80.584]).addTo(map)
        .bindPopup('nan');

    L.marker([7.92311, 81.5677]).addTo(map)
        .bindPopup('nan');

    L.marker([8.56, 81.22]).addTo(map)
        .bindPopup('nan');

    L.marker([8.53851, 81.1819]).addTo(map)
        .bindPopup('VCCT');

    L.marker([7.284, 81.644]).addTo(map)
        .bindPopup('nan');

    L.marker([8.30149, 80.4279]).addTo(map)
        .bindPopup('VCCA');

    L.marker([8.04981, 80.9814]).addTo(map)
        .bindPopup('VCCH');

    L.marker([8.273, 79.756]).addTo(map)
        .bindPopup('nan');

    L.marker([9.29975, 80.4486]).addTo(map)
        .bindPopup('nan');

    L.marker([9.79233, 80.0701]).addTo(map)
        .bindPopup('VCCJ');

    L.marker([6.431, 79.996]).addTo(map)
        .bindPopup('nan');

    L.marker([5.99019, 80.7331]).addTo(map)
        .bindPopup('nan');

    L.marker([6.12404, 81.103]).addTo(map)
        .bindPopup('nan');

    L.marker([6.28447, 81.1241]).addTo(map)
        .bindPopup('VCRI');

    L.marker([5.99368, 80.3203]).addTo(map)
        .bindPopup('VCCK');

    L.marker([6.2876, 81.2906]).addTo(map)
        .bindPopup('nan');

    L.marker([6.25449, 81.2352]).addTo(map)
        .bindPopup('VCCW');

    L.marker([6.92944, 79.8542]).addTo(map)
        .bindPopup('nan');

    L.marker([7.18076, 79.8841]).addTo(map)
        .bindPopup('VCBI');

    L.marker([7.1079, 79.8721]).addTo(map)
        .bindPopup('nan');

    L.marker([6.90659, 79.909]).addTo(map)
        .bindPopup('nan');

    L.marker([6.95, 79.93]).addTo(map)
        .bindPopup('nan');

    L.marker([6.55212, 79.9775]).addTo(map)
        .bindPopup('VCCN');

    L.marker([6.82199, 79.8862]).addTo(map)
        .bindPopup('VCCC');

    L.marker([5.90417, -10.0583]).addTo(map)
        .bindPopup('GLBU');

    L.marker([6.04565, -8.13872]).addTo(map)
        .bindPopup('GLTN');

    L.marker([4.571, -8.2076]).addTo(map)
        .bindPopup('nan');

    L.marker([4.66667, -8.43333]).addTo(map)
        .bindPopup('GLST');

    L.marker([8.3513, -10.2269]).addTo(map)
        .bindPopup('nan');

    L.marker([8.4, -9.767]).addTo(map)
        .bindPopup('GLVA');

    L.marker([6.23379, -10.3623]).addTo(map)
        .bindPopup('GLRB');

    L.marker([4.37902, -7.69695]).addTo(map)
        .bindPopup('GLCP');

    L.marker([7.36917, -9.99372]).addTo(map)
        .bindPopup('nan');

    L.marker([6.28906, -10.7587]).addTo(map)
        .bindPopup('GLMR');

    L.marker([5.47133, -9.58537]).addTo(map)
        .bindPopup('nan');

    L.marker([7.5, -8.6]).addTo(map)
        .bindPopup('GLNA');

    L.marker([6.4948, -8.873]).addTo(map)
        .bindPopup('nan');

    L.marker([5.03431, -9.0668]).addTo(map)
        .bindPopup('GLGE');

    L.marker([-28.8556, 28.0528]).addTo(map)
        .bindPopup('FXLR');

    L.marker([-29.1206, 28.5053]).addTo(map)
        .bindPopup('FXPG');

    L.marker([-29.2676, 28.5523]).addTo(map)
        .bindPopup('FXSS');

    L.marker([-29.8011, 27.2436]).addTo(map)
        .bindPopup('FXMF');

    L.marker([-29.4623, 27.5525]).addTo(map)
        .bindPopup('FXMM');

    L.marker([-29.8386, 28.06]).addTo(map)
        .bindPopup('FXSM');

    L.marker([-30.0217, 28.1969]).addTo(map)
        .bindPopup('FXNK');

    L.marker([-29.2818, 29.0728]).addTo(map)
        .bindPopup('FXMK');

    L.marker([-29.233, 28.883]).addTo(map)
        .bindPopup('FXTK');

    L.marker([-29.8908, 28.6556]).addTo(map)
        .bindPopup('FXLK');

    L.marker([-30.0389, 28.3703]).addTo(map)
        .bindPopup('FXSK');

    L.marker([-30.1117, 28.6719]).addTo(map)
        .bindPopup('FXQN');

    L.marker([-30.4075, 27.6933]).addTo(map)
        .bindPopup('FXQG');

    L.marker([-29.7829, 28.3167]).addTo(map)
        .bindPopup('FXLS');

    L.marker([-29.8408, 28.7764]).addTo(map)
        .bindPopup('FXMA');

    L.marker([-29.7309, 28.7689]).addTo(map)
        .bindPopup('FXSH');

    L.marker([-29.5228, 28.6158]).addTo(map)
        .bindPopup('FXTA');

    L.marker([54.6341, 25.2858]).addTo(map)
        .bindPopup('EYVI');

    L.marker([54.9639, 24.0848]).addTo(map)
        .bindPopup('EYKA');

    L.marker([55.9732, 21.0939]).addTo(map)
        .bindPopup('EYPA');

    L.marker([55.7294, 24.4608]).addTo(map)
        .bindPopup('EYPP');

    L.marker([55.8939, 23.395]).addTo(map)
        .bindPopup('EYSA');

    L.marker([49.6233, 6.20444]).addTo(map)
        .bindPopup('ELLX');

    L.marker([55.9447, 26.665]).addTo(map)
        .bindPopup('EVDA');

    L.marker([56.9236, 23.9711]).addTo(map)
        .bindPopup('EVRA');

    L.marker([56.5175, 21.0969]).addTo(map)
        .bindPopup('EVLA');

    L.marker([57.3578, 21.5442]).addTo(map)
        .bindPopup('EVVA');

    L.marker([31.861, 23.907]).addTo(map)
        .bindPopup('HLGN');

    L.marker([32.7887, 21.9643]).addTo(map)
        .bindPopup('HLLQ');

    L.marker([31.7749, 12.2501]).addTo(map)
        .bindPopup('HLZN');

    L.marker([29.1101, 15.9656]).addTo(map)
        .bindPopup('HLON');

    L.marker([24.1787, 23.314]).addTo(map)
        .bindPopup('HLKF');

    L.marker([30.3781, 19.5764]).addTo(map)
        .bindPopup('HLMB');

    L.marker([29.2132, 21.5924]).addTo(map)
        .bindPopup('HLNR');

    L.marker([32.0968, 20.2695]).addTo(map)
        .bindPopup('HLLB');

    L.marker([32.542, 22.745]).addTo(map)
        .bindPopup('nan');

    L.marker([25.1456, 10.1426]).addTo(map)
        .bindPopup('HLGT');

    L.marker([32.325, 15.061]).addTo(map)
        .bindPopup('HLMS');

    L.marker([30.1517, 9.71531]).addTo(map)
        .bindPopup('HLTD');

    L.marker([27.653, 14.272]).addTo(map)
        .bindPopup('nan');

    L.marker([26.987, 14.4725]).addTo(map)
        .bindPopup('HLLS');

    L.marker([31.0635, 16.595]).addTo(map)
        .bindPopup('HLGD');

    L.marker([32.8941, 13.276]).addTo(map)
        .bindPopup('HLLM');

    L.marker([32.6635, 13.159]).addTo(map)
        .bindPopup('HLLT');

    L.marker([32.9523, 12.0155]).addTo(map)
        .bindPopup('HLZW');

    L.marker([26.5675, 12.8231]).addTo(map)
        .bindPopup('HLUB');

    L.marker([32.4019, -6.31591]).addTo(map)
        .bindPopup('GMMD');

    L.marker([33.5533, -7.66139]).addTo(map)
        .bindPopup('GMMC');

    L.marker([33.3675, -7.58997]).addTo(map)
        .bindPopup('GMMN');

    L.marker([33.6554, -7.22145]).addTo(map)
        .bindPopup('GMMB');

    L.marker([31.9475, -4.39833]).addTo(map)
        .bindPopup('GMFK');

    L.marker([30.3203, -5.86667]).addTo(map)
        .bindPopup('GMAZ');

    L.marker([30.9391, -6.90943]).addTo(map)
        .bindPopup('GMMZ');

    L.marker([33.9273, -4.97796]).addTo(map)
        .bindPopup('GMFF');

    L.marker([33.8791, -5.51512]).addTo(map)
        .bindPopup('GMFM');

    L.marker([29.0267, -10.0503]).addTo(map)
        .bindPopup('nan');

    L.marker([29.3667, -10.1878]).addTo(map)
        .bindPopup('GMMF');

    L.marker([28.4482, -11.1613]).addTo(map)
        .bindPopup('GMAT');

    L.marker([34.9888, -3.02821]).addTo(map)
        .bindPopup('GMMW');

    L.marker([34.7872, -1.92399]).addTo(map)
        .bindPopup('GMFO');

    L.marker([32.5143, -1.98306]).addTo(map)
        .bindPopup('GMFB');

    L.marker([27.1517, -13.2192]).addTo(map)
        .bindPopup('GMML');

    L.marker([26.7318, -11.6847]).addTo(map)
        .bindPopup('GMMA');

    L.marker([23.7183, -15.932]).addTo(map)
        .bindPopup('GMMH');

    L.marker([31.6069, -8.0363]).addTo(map)
        .bindPopup('GMMX');

    L.marker([32.2731, -9.23694]).addTo(map)
        .bindPopup('GMMS');

    L.marker([34.2989, -6.59588]).addTo(map)
        .bindPopup('GMMY');

    L.marker([34.0515, -6.75152]).addTo(map)
        .bindPopup('GMME');

    L.marker([30.325, -9.41307]).addTo(map)
        .bindPopup('GMAD');

    L.marker([31.3975, -9.68167]).addTo(map)
        .bindPopup('GMMI');

    L.marker([35.1771, -3.83952]).addTo(map)
        .bindPopup('GMTA');

    L.marker([35.7269, -5.91689]).addTo(map)
        .bindPopup('GMTT');

    L.marker([35.5943, -5.32002]).addTo(map)
        .bindPopup('nan');

    L.marker([47.8431, 27.7772]).addTo(map)
        .bindPopup('LUBL');

    L.marker([46.9277, 28.931]).addTo(map)
        .bindPopup('LUKK');

    L.marker([42.839, 19.862]).addTo(map)
        .bindPopup('LYBR');

    L.marker([43.1167, 19.2333]).addTo(map)
        .bindPopup('nan');

    L.marker([42.3594, 19.2519]).addTo(map)
        .bindPopup('LYPG');

    L.marker([42.4047, 18.7233]).addTo(map)
        .bindPopup('LYTV');

    L.marker([-20.0158, 45.535]).addTo(map)
        .bindPopup('nan');

    L.marker([-19.8392, 47.0637]).addTo(map)
        .bindPopup('FMME');

    L.marker([-18.9175, 48.2182]).addTo(map)
        .bindPopup('FMFE');

    L.marker([-18.7969, 47.4788]).addTo(map)
        .bindPopup('FMMI');

    L.marker([-23.3508, 47.5817]).addTo(map)
        .bindPopup('FMSU');

    L.marker([-17.631, 47.7233]).addTo(map)
        .bindPopup('nan');

    L.marker([-18.7597, 46.0541]).addTo(map)
        .bindPopup('FMMX');

    L.marker([-12.4333, 49.1]).addTo(map)
        .bindPopup('nan');

    L.marker([-22.4047, 46.1649]).addTo(map)
        .bindPopup('FMSI');

    L.marker([-21.2018, 48.3583]).addTo(map)
        .bindPopup('FMSM');

    L.marker([-22.8053, 47.8206]).addTo(map)
        .bindPopup('FMSG');

    L.marker([-21.4416, 47.1117]).addTo(map)
        .bindPopup('FMSF');

    L.marker([-22.1197, 48.0217]).addTo(map)
        .bindPopup('FMSK');

    L.marker([-17.6867, 45.6239]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.7445, 44.4825]).addTo(map)
        .bindPopup('FMNQ');

    L.marker([-15.6725, 47.0617]).addTo(map)
        .bindPopup('nan');

    L.marker([-17.6925, 45.0888]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.1017, 45.3588]).addTo(map)
        .bindPopup('FMNO');

    L.marker([-14.6297, 47.7638]).addTo(map)
        .bindPopup('FMNL');

    L.marker([-15.6668, 46.3512]).addTo(map)
        .bindPopup('FMNM');

    L.marker([-18.05, 44.033]).addTo(map)
        .bindPopup('FMMO');

    L.marker([-16.7511, 47.619]).addTo(map)
        .bindPopup('FMNT');

    L.marker([-17.8501, 44.9205]).addTo(map)
        .bindPopup('FMMR');

    L.marker([-18.3451, 45.0156]).addTo(map)
        .bindPopup('nan');

    L.marker([-14.8988, 47.9939]).addTo(map)
        .bindPopup('FMNW');

    L.marker([-18.7013, 44.6149]).addTo(map)
        .bindPopup('FMMG');

    L.marker([-15.2, 48.483]).addTo(map)
        .bindPopup('FMNF');

    L.marker([-14.5443, 48.6914]).addTo(map)
        .bindPopup('nan');

    L.marker([-15.833, 48.8333]).addTo(map)
        .bindPopup('FMNX');

    L.marker([-16.0723, 47.6442]).addTo(map)
        .bindPopup('FMNP');

    L.marker([-16.45, 46.5667]).addTo(map)
        .bindPopup('nan');

    L.marker([-15.5843, 47.6236]).addTo(map)
        .bindPopup('FMNG');

    L.marker([-17.4761, 43.9728]).addTo(map)
        .bindPopup('FMMU');

    L.marker([-19.583, 48.803]).addTo(map)
        .bindPopup('FMMQ');

    L.marker([-17.0939, 49.8158]).addTo(map)
        .bindPopup('FMMS');

    L.marker([-18.1095, 49.3925]).addTo(map)
        .bindPopup('FMMT');

    L.marker([-19.3833, 48.95]).addTo(map)
        .bindPopup('FMMY');

    L.marker([-19.833, 48.8]).addTo(map)
        .bindPopup('FMMH');

    L.marker([-17.7954, 48.4426]).addTo(map)
        .bindPopup('FMMZ');

    L.marker([-15.4367, 49.6883]).addTo(map)
        .bindPopup('FMNR');

    L.marker([-16.1639, 49.7738]).addTo(map)
        .bindPopup('FMNC');

    L.marker([-24.6997, 44.7342]).addTo(map)
        .bindPopup('FMSY');

    L.marker([-23.733, 44.389]).addTo(map)
        .bindPopup('FMSV');

    L.marker([-19.6867, 44.5419]).addTo(map)
        .bindPopup('FMML');

    L.marker([-22.0661, 43.2596]).addTo(map)
        .bindPopup('nan');

    L.marker([-25.0381, 46.9561]).addTo(map)
        .bindPopup('FMSD');

    L.marker([-18.805, 45.2735]).addTo(map)
        .bindPopup('FMMK');

    L.marker([-21.4261, 44.3165]).addTo(map)
        .bindPopup('FMSJ');

    L.marker([-20.2847, 44.3176]).addTo(map)
        .bindPopup('FMMV');

    L.marker([-21.7539, 43.3755]).addTo(map)
        .bindPopup('FMSR');

    L.marker([-24.2357, 45.3045]).addTo(map)
        .bindPopup('FMSL');

    L.marker([-21.7, 43.733]).addTo(map)
        .bindPopup('FMSN');

    L.marker([-23.3834, 43.7285]).addTo(map)
        .bindPopup('FMST');

    L.marker([-22.2964, 44.5315]).addTo(map)
        .bindPopup('FMSZ');

    L.marker([-21.607, 45.136]).addTo(map)
        .bindPopup('FMSB');

    L.marker([-21.0463, 44.9404]).addTo(map)
        .bindPopup('FMSC');

    L.marker([-20.3554, 45.5434]).addTo(map)
        .bindPopup('FMMC');

    L.marker([-19.5628, 45.4508]).addTo(map)
        .bindPopup('FMMN');

    L.marker([7.27942, 168.826]).addTo(map)
        .bindPopup('nan');

    L.marker([7.56535, 168.962]).addTo(map)
        .bindPopup('nan');

    L.marker([7.45083, 168.55]).addTo(map)
        .bindPopup('nan');

    L.marker([10.2168, 169.983]).addTo(map)
        .bindPopup('nan');

    L.marker([7.00555, 171.657]).addTo(map)
        .bindPopup('nan');

    L.marker([7.13333, 171.917]).addTo(map)
        .bindPopup('nan');

    L.marker([8.14528, 171.173]).addTo(map)
        .bindPopup('nan');

    L.marker([11.5225, 165.565]).addTo(map)
        .bindPopup('nan');

    L.marker([5.64452, 169.12]).addTo(map)
        .bindPopup('nan');

    L.marker([4.5982, 168.752]).addTo(map)
        .bindPopup('nan');

    L.marker([11.3407, 162.328]).addTo(map)
        .bindPopup('PKMA');

    L.marker([7.74977, 168.978]).addTo(map)
        .bindPopup('nan');

    L.marker([5.90924, 169.637]).addTo(map)
        .bindPopup('nan');

    L.marker([9.31931, 166.848]).addTo(map)
        .bindPopup('nan');

    L.marker([9.33056, 166.82]).addTo(map)
        .bindPopup('nan');

    L.marker([8.72012, 167.732]).addTo(map)
        .bindPopup('PKWA');

    L.marker([7.7575, 168.236]).addTo(map)
        .bindPopup('nan');

    L.marker([9.45833, 170.239]).addTo(map)
        .bindPopup('nan');

    L.marker([8.92111, 166.265]).addTo(map)
        .bindPopup('nan');

    L.marker([9.82316, 169.308]).addTo(map)
        .bindPopup('nan');

    L.marker([7.06476, 171.272]).addTo(map)
        .bindPopup('PKMJ');

    L.marker([8.3027, 171.161]).addTo(map)
        .bindPopup('nan');

    L.marker([8.90056, 170.844]).addTo(map)
        .bindPopup('nan');

    L.marker([8.70444, 171.23]).addTo(map)
        .bindPopup('nan');

    L.marker([10.2833, 170.869]).addTo(map)
        .bindPopup('nan');

    L.marker([6.0404, 171.985]).addTo(map)
        .bindPopup('nan');

    L.marker([6.08333, 171.733]).addTo(map)
        .bindPopup('MLIP');

    L.marker([5.63167, 168.125]).addTo(map)
        .bindPopup('nan');

    L.marker([7.76291, 168.266]).addTo(map)
        .bindPopup('nan');

    L.marker([11.1572, 166.887]).addTo(map)
        .bindPopup('nan');

    L.marker([8.92806, 165.762]).addTo(map)
        .bindPopup('nan');

    L.marker([11.222, 169.852]).addTo(map)
        .bindPopup('nan');

    L.marker([10.1733, 166.003]).addTo(map)
        .bindPopup('nan');

    L.marker([41.18, 20.7423]).addTo(map)
        .bindPopup('LWOH');

    L.marker([41.9616, 21.6214]).addTo(map)
        .bindPopup('LWSK');

    L.marker([12.5335, -7.94994]).addTo(map)
        .bindPopup('GABS');

    L.marker([16.2484, -0.005456]).addTo(map)
        .bindPopup('GAGO');

    L.marker([15.133, -10.567]).addTo(map)
        .bindPopup('GAYE');

    L.marker([12.833, -11.25]).addTo(map)
        .bindPopup('GAKA');

    L.marker([14.4812, -11.4044]).addTo(map)
        .bindPopup('GAKY');

    L.marker([15.2381, -9.57611]).addTo(map)
        .bindPopup('GANR');

    L.marker([15.217, -7.267]).addTo(map)
        .bindPopup('GANK');

    L.marker([14.5128, -4.07956]).addTo(map)
        .bindPopup('GAMB');

    L.marker([13.4, -6.15]).addTo(map)
        .bindPopup('nan');

    L.marker([11.333, -5.7]).addTo(map)
        .bindPopup('GASK');

    L.marker([12.383, -5.467]).addTo(map)
        .bindPopup('GAKO');

    L.marker([16.3614, -3.59972]).addTo(map)
        .bindPopup('GAGM');

    L.marker([16.7305, -3.00758]).addTo(map)
        .bindPopup('GATB');

    L.marker([16.8152, 94.7799]).addTo(map)
        .bindPopup('VYPN');

    L.marker([17.6333, 95.4667]).addTo(map)
        .bindPopup('VBHD');

    L.marker([19.7692, 94.0261]).addTo(map)
        .bindPopup('VYAN');

    L.marker([18.8245, 95.266]).addTo(map)
        .bindPopup('VYPY');

    L.marker([24.269, 97.2462]).addTo(map)
        .bindPopup('VYBM');

    L.marker([25.3836, 97.3519]).addTo(map)
        .bindPopup('VYMK');

    L.marker([27.3299, 97.4263]).addTo(map)
        .bindPopup('VYPT');

    L.marker([19.6915, 97.2148]).addTo(map)
        .bindPopup('VYLK');

    L.marker([16.8937, 97.6746]).addTo(map)
        .bindPopup('VYPA');

    L.marker([18.0667, 97.4498]).addTo(map)
        .bindPopup('VYPP');

    L.marker([22.1747, 94.1344]).addTo(map)
        .bindPopup('VYGG');

    L.marker([21.4, 94.1333]).addTo(map)
        .bindPopup('VYKU');

    L.marker([20.1656, 94.9414]).addTo(map)
        .bindPopup('VYMW');

    L.marker([21.4492, 94.4869]).addTo(map)
        .bindPopup('VYPK');

    L.marker([21.4043, 95.1113]).addTo(map)
        .bindPopup('VYPU');

    L.marker([21.7, 94.1]).addTo(map)
        .bindPopup('VYHN');

    L.marker([21.7022, 95.9779]).addTo(map)
        .bindPopup('VYMD');

    L.marker([19.6235, 96.201]).addTo(map)
        .bindPopup('VYNT');

    L.marker([21.1788, 94.9302]).addTo(map)
        .bindPopup('VYBG');

    L.marker([21.9405, 96.0896]).addTo(map)
        .bindPopup('VYCZ');

    L.marker([16.4447, 97.6607]).addTo(map)
        .bindPopup('VYMM');

    L.marker([15.3, 97.867]).addTo(map)
        .bindPopup('VYYE');

    L.marker([20.1327, 92.8726]).addTo(map)
        .bindPopup('VYSW');

    L.marker([17.6, 94.5833]).addTo(map)
        .bindPopup('VYGW');

    L.marker([19.4264, 93.5348]).addTo(map)
        .bindPopup('VYKP');

    L.marker([18.8458, 93.6889]).addTo(map)
        .bindPopup('VYMN');

    L.marker([18.4607, 94.3001]).addTo(map)
        .bindPopup('VYTD');

    L.marker([24.8996, 94.914]).addTo(map)
        .bindPopup('VYHL');

    L.marker([25.9883, 95.6744]).addTo(map)
        .bindPopup('VYKI');

    L.marker([23.1888, 94.0511]).addTo(map)
        .bindPopup('VYKL');

    L.marker([22.2216, 95.0935]).addTo(map)
        .bindPopup('VYMY');

    L.marker([20.747, 96.792]).addTo(map)
        .bindPopup('VYHH');

    L.marker([21.3016, 99.636]).addTo(map)
        .bindPopup('VYKG');

    L.marker([22.9779, 97.7522]).addTo(map)
        .bindPopup('VYLS');

    L.marker([20.2967, 98.8989]).addTo(map)
        .bindPopup('VYMT');

    L.marker([23.0925, 96.6453]).addTo(map)
        .bindPopup('VYMO');

    L.marker([20.5168, 99.2568]).addTo(map)
        .bindPopup('VYMS');

    L.marker([20.8905, 97.7359]).addTo(map)
        .bindPopup('VYNS');

    L.marker([23.083, 97.383]).addTo(map)
        .bindPopup('VYNT');

    L.marker([20.4838, 99.9354]).addTo(map)
        .bindPopup('VYTL');

    L.marker([10.0493, 98.538]).addTo(map)
        .bindPopup('VYKT');

    L.marker([12.4398, 98.6215]).addTo(map)
        .bindPopup('VYME');

    L.marker([14.1039, 98.2036]).addTo(map)
        .bindPopup('VYDW');

    L.marker([11.1494, 98.7359]).addTo(map)
        .bindPopup('VYBP');

    L.marker([16.9073, 96.1332]).addTo(map)
        .bindPopup('VYYY');

    L.marker([47.4654, 101.478]).addTo(map)
        .bindPopup('ZMTG');

    L.marker([48.9933, 89.9225]).addTo(map)
        .bindPopup('ZMUL');

    L.marker([46.1633, 100.704]).addTo(map)
        .bindPopup('ZMBH');

    L.marker([48.855, 103.476]).addTo(map)
        .bindPopup('ZMBN');

    L.marker([48.1357, 114.646]).addTo(map)
        .bindPopup('ZMCD');

    L.marker([48.5756, 116.939]).addTo(map)
        .bindPopup('nan');

    L.marker([45.7381, 106.269]).addTo(map)
        .bindPopup('ZMMG');

    L.marker([48.7389, 98.2941]).addTo(map)
        .bindPopup('ZMTL');

    L.marker([46.3764, 96.2211]).addTo(map)
        .bindPopup('ZMAT');

    L.marker([47.7093, 96.5258]).addTo(map)
        .bindPopup('ZMDN');

    L.marker([47.3049, 110.609]).addTo(map)
        .bindPopup('ZMUH');

    L.marker([46.1006, 91.5842]).addTo(map)
        .bindPopup('ZMBS');

    L.marker([47.9541, 91.6282]).addTo(map)
        .bindPopup('ZMKD');

    L.marker([50.436, 100.14]).addTo(map)
        .bindPopup('ZMHG');

    L.marker([49.6633, 100.099]).addTo(map)
        .bindPopup('ZMMN');

    L.marker([43.5917, 104.43]).addTo(map)
        .bindPopup('ZMDZ');

    L.marker([48.9831, 104.151]).addTo(map)
        .bindPopup('nan');

    L.marker([46.2503, 102.802]).addTo(map)
        .bindPopup('ZMAH');

    L.marker([46.9258, 102.773]).addTo(map)
        .bindPopup('ZMHU');

    L.marker([47.2467, 102.826]).addTo(map)
        .bindPopup('ZMHH');

    L.marker([43.7493, 104.115]).addTo(map)
        .bindPopup('ZMBR');

    L.marker([46.6603, 113.285]).addTo(map)
        .bindPopup('ZMBU');

    L.marker([47.6516, 106.822]).addTo(map)
        .bindPopup('ZMCK');

    L.marker([47.8431, 106.767]).addTo(map)
        .bindPopup('ZMUB');

    L.marker([50.0666, 91.9383]).addTo(map)
        .bindPopup('ZMUG');

    L.marker([22.1496, 113.592]).addTo(map)
        .bindPopup('VMMC');

    L.marker([14.1743, 145.243]).addTo(map)
        .bindPopup('PGRO');

    L.marker([15.119, 145.729]).addTo(map)
        .bindPopup('PGSN');

    L.marker([14.9992, 145.619]).addTo(map)
        .bindPopup('PGWT');

    L.marker([14.591, -61.0032]).addTo(map)
        .bindPopup('TFFF');

    L.marker([20.5068, -13.0432]).addTo(map)
        .bindPopup('GQPA');

    L.marker([16.59, -11.4062]).addTo(map)
        .bindPopup('GQNF');

    L.marker([16.6333, -14.2]).addTo(map)
        .bindPopup('GQNE');

    L.marker([20.9331, -17.03]).addTo(map)
        .bindPopup('GQPP');

    L.marker([16.1595, -13.5076]).addTo(map)
        .bindPopup('GQNK');

    L.marker([15.1797, -12.2073]).addTo(map)
        .bindPopup('GQNS');

    L.marker([19.733, -14.3832]).addTo(map)
        .bindPopup('GQNJ');

    L.marker([16.7113, -9.63788]).addTo(map)
        .bindPopup('GQNA');

    L.marker([17.1667, -13.95]).addTo(map)
        .bindPopup('nan');

    L.marker([16.0333, -12.6]).addTo(map)
        .bindPopup('GQNU');

    L.marker([18.31, -15.9697]).addTo(map)
        .bindPopup('GQNO');

    L.marker([17.233, -10.817]).addTo(map)
        .bindPopup('GQNT');

    L.marker([17.75, -12.5]).addTo(map)
        .bindPopup('GQNL');

    L.marker([18.45, -9.517]).addTo(map)
        .bindPopup('GQNC');

    L.marker([18.5701, -11.4235]).addTo(map)
        .bindPopup('GQND');

    L.marker([20.5055, -12.3978]).addTo(map)
        .bindPopup('nan');

    L.marker([16.622, -7.3166]).addTo(map)
        .bindPopup('GQNI');

    L.marker([22.667, -12.733]).addTo(map)
        .bindPopup('GQPF');

    L.marker([22.7564, -12.4836]).addTo(map)
        .bindPopup('GQPZ');

    L.marker([16.233, -8.167]).addTo(map)
        .bindPopup('GQNH');

    L.marker([17.533, -14.683]).addTo(map)
        .bindPopup('GQNB');

    L.marker([16.7914, -62.1933]).addTo(map)
        .bindPopup('TRPG');

    L.marker([35.8575, 14.4775]).addTo(map)
        .bindPopup('LMML');

    L.marker([-20.4302, 57.6836]).addTo(map)
        .bindPopup('FIMP');

    L.marker([-19.7577, 63.361]).addTo(map)
        .bindPopup('FIMR');

    L.marker([5.1561, 73.1302]).addTo(map)
        .bindPopup('VRMD');

    L.marker([5.82222, 73.4747]).addTo(map)
        .bindPopup('nan');

    L.marker([3.47056, 72.8358]).addTo(map)
        .bindPopup('VRMV');

    L.marker([0.488131, 72.9969]).addTo(map)
        .bindPopup('VRMT');

    L.marker([-0.309722, 73.435]).addTo(map)
        .bindPopup('VRMF');

    L.marker([6.16111, 73.2872]).addTo(map)
        .bindPopup('nan');

    L.marker([6.74423, 73.1705]).addTo(map)
        .bindPopup('VRMH');

    L.marker([4.19183, 73.5291]).addTo(map)
        .bindPopup('VRMM');

    L.marker([0.7324, 73.4336]).addTo(map)
        .bindPopup('VRMO');

    L.marker([1.85917, 73.5219]).addTo(map)
        .bindPopup('VRMK');

    L.marker([5.7083, 73.025]).addTo(map)
        .bindPopup('VREI');

    L.marker([-0.693342, 73.1556]).addTo(map)
        .bindPopup('VRMG');

    L.marker([2.211, 73.1533]).addTo(map)
        .bindPopup('VRNT');

    L.marker([-15.6791, 34.974]).addTo(map)
        .bindPopup('FWCL');

    L.marker([-10.55, 33.8]).addTo(map)
        .bindPopup('FWCD');

    L.marker([-9.95357, 33.893]).addTo(map)
        .bindPopup('FWKA');

    L.marker([-13.0146, 33.4686]).addTo(map)
        .bindPopup('FWKG');

    L.marker([-12.0758, 34.7372]).addTo(map)
        .bindPopup('FWLK');

    L.marker([-13.7894, 33.781]).addTo(map)
        .bindPopup('FWKI');

    L.marker([-14.3069, 35.1325]).addTo(map)
        .bindPopup('FWCM');

    L.marker([-14.483, 35.267]).addTo(map)
        .bindPopup('FWMG');

    L.marker([-14.0836, 34.9197]).addTo(map)
        .bindPopup('FWMY');

    L.marker([-14.8386, 35.3014]).addTo(map)
        .bindPopup('nan');

    L.marker([-11.4447, 34.0118]).addTo(map)
        .bindPopup('FWUU');

    L.marker([-12.5183, 34.1319]).addTo(map)
        .bindPopup('FWDW');

    L.marker([-13.7559, 34.5842]).addTo(map)
        .bindPopup('FWSM');

    L.marker([21.7056, -102.318]).addTo(map)
        .bindPopup('MMAS');

    L.marker([26.7272, -113.559]).addTo(map)
        .bindPopup('MX86');

    L.marker([25.0538, -111.615]).addTo(map)
        .bindPopup('nan');

    L.marker([28.0261, -114.024]).addTo(map)
        .bindPopup('MMGR');

    L.marker([24.0727, -110.362]).addTo(map)
        .bindPopup('MMLP');

    L.marker([25.9892, -111.348]).addTo(map)
        .bindPopup('MMLT');

    L.marker([26.9053, -111.971]).addTo(map)
        .bindPopup('MMMG');

    L.marker([23.575, -109.536]).addTo(map)
        .bindPopup('MMPL');

    L.marker([27.0692, -111.962]).addTo(map)
        .bindPopup('nan');

    L.marker([27.2966, -112.938]).addTo(map)
        .bindPopup('nan');

    L.marker([23.1518, -109.721]).addTo(map)
        .bindPopup('MMSD');

    L.marker([27.0927, -112.099]).addTo(map)
        .bindPopup('nan');

    L.marker([25.0552, -111.687]).addTo(map)
        .bindPopup('nan');

    L.marker([28.9786, -113.561]).addTo(map)
        .bindPopup('nan');

    L.marker([31.7953, -116.603]).addTo(map)
        .bindPopup('MMES');

    L.marker([32.6306, -115.242]).addTo(map)
        .bindPopup('MMML');

    L.marker([30.9302, -114.809]).addTo(map)
        .bindPopup('MMSF');

    L.marker([30.5288, -115.946]).addTo(map)
        .bindPopup('nan');

    L.marker([32.5411, -116.97]).addTo(map)
        .bindPopup('MMTJ');

    L.marker([18.6537, -91.799]).addTo(map)
        .bindPopup('MMCE');

    L.marker([19.8168, -90.5003]).addTo(map)
        .bindPopup('MMCP');

    L.marker([16.1767, -92.0506]).addTo(map)
        .bindPopup('MMCO');

    L.marker([17.5332, -92.0155]).addTo(map)
        .bindPopup('MMPQ');

    L.marker([14.7943, -92.37]).addTo(map)
        .bindPopup('MMTP');

    L.marker([16.5636, -93.0225]).addTo(map)
        .bindPopup('MMTG');

    L.marker([31.6361, -106.429]).addTo(map)
        .bindPopup('MMCS');

    L.marker([28.7029, -105.965]).addTo(map)
        .bindPopup('MMCU');

    L.marker([30.3974, -107.875]).addTo(map)
        .bindPopup('MMCG');

    L.marker([29.3329, -101.099]).addTo(map)
        .bindPopup('MMCC');

    L.marker([26.9557, -101.47]).addTo(map)
        .bindPopup('MMMV');

    L.marker([28.6274, -100.535]).addTo(map)
        .bindPopup('MMPG');

    L.marker([25.5495, -100.929]).addTo(map)
        .bindPopup('MMIO');

    L.marker([25.5683, -103.411]).addTo(map)
        .bindPopup('MMTC');

    L.marker([19.277, -103.577]).addTo(map)
        .bindPopup('MMIA');

    L.marker([19.1448, -104.559]).addTo(map)
        .bindPopup('MMZO');

    L.marker([24.1242, -104.528]).addTo(map)
        .bindPopup('MMDO');

    L.marker([20.9935, -101.481]).addTo(map)
        .bindPopup('MMLO');

    L.marker([20.546, -100.887]).addTo(map)
        .bindPopup('MMCY');

    L.marker([16.7571, -99.754]).addTo(map)
        .bindPopup('MMAA');

    L.marker([17.6016, -101.461]).addTo(map)
        .bindPopup('MMZH');

    L.marker([20.5218, -103.311]).addTo(map)
        .bindPopup('MMGL');

    L.marker([21.2581, -101.944]).addTo(map)
        .bindPopup('nan');

    L.marker([20.6801, -105.254]).addTo(map)
        .bindPopup('MMPR');

    L.marker([19.5748, -99.2888]).addTo(map)
        .bindPopup('MMJC');

    L.marker([19.4363, -99.0721]).addTo(map)
        .bindPopup('MMMX');

    L.marker([19.7553, -99.0164]).addTo(map)
        .bindPopup('MMSM');

    L.marker([19.3371, -99.566]).addTo(map)
        .bindPopup('MMTO');

    L.marker([19.0934, -102.394]).addTo(map)
        .bindPopup('nan');

    L.marker([18.0017, -102.221]).addTo(map)
        .bindPopup('MMLC');

    L.marker([19.8499, -101.025]).addTo(map)
        .bindPopup('MMMM');

    L.marker([19.3967, -102.039]).addTo(map)
        .bindPopup('MMPN');

    L.marker([20.045, -102.276]).addTo(map)
        .bindPopup('MMZM');

    L.marker([18.8348, -99.2613]).addTo(map)
        .bindPopup('MMCB');

    L.marker([21.4195, -104.843]).addTo(map)
        .bindPopup('MMEP');

    L.marker([25.7785, -100.107]).addTo(map)
        .bindPopup('MMMY');

    L.marker([25.8656, -100.237]).addTo(map)
        .bindPopup('MMAN');

    L.marker([15.7753, -96.2626]).addTo(map)
        .bindPopup('MMBT');

    L.marker([16.4493, -95.0937]).addTo(map)
        .bindPopup('MMIT');

    L.marker([16.9999, -96.7266]).addTo(map)
        .bindPopup('MMOX');

    L.marker([15.8769, -97.0891]).addTo(map)
        .bindPopup('MMPS');

    L.marker([16.2126, -95.2016]).addTo(map)
        .bindPopup('MMSZ');

    L.marker([19.1581, -98.3714]).addTo(map)
        .bindPopup('MMPB');

    L.marker([18.4972, -97.4199]).addTo(map)
        .bindPopup('MMHC');

    L.marker([20.6173, -100.186]).addTo(map)
        .bindPopup('MMQT');

    L.marker([18.5047, -88.3268]).addTo(map)
        .bindPopup('MMCM');

    L.marker([21.0365, -86.8771]).addTo(map)
        .bindPopup('MMUN');

    L.marker([20.5224, -86.9256]).addTo(map)
        .bindPopup('MMCZ');

    L.marker([21.245, -86.74]).addTo(map)
        .bindPopup('MMIM');

    L.marker([20.6225, -87.0822]).addTo(map)
        .bindPopup('nan');

    L.marker([20.2273, -87.4382]).addTo(map)
        .bindPopup('nan');

    L.marker([22.2543, -100.931]).addTo(map)
        .bindPopup('MMSP');

    L.marker([22.0383, -98.8065]).addTo(map)
        .bindPopup('MMTN');

    L.marker([24.7645, -107.475]).addTo(map)
        .bindPopup('MMCL');

    L.marker([25.6852, -109.081]).addTo(map)
        .bindPopup('MMLM');

    L.marker([23.1614, -106.266]).addTo(map)
        .bindPopup('MMMZ');

    L.marker([27.3926, -109.833]).addTo(map)
        .bindPopup('MMCN');

    L.marker([31.0662, -110.098]).addTo(map)
        .bindPopup('MMCA');

    L.marker([27.969, -110.925]).addTo(map)
        .bindPopup('MMGM');

    L.marker([29.0959, -111.048]).addTo(map)
        .bindPopup('MMHO');

    L.marker([31.2261, -110.976]).addTo(map)
        .bindPopup('MMNG');

    L.marker([31.352, -113.305]).addTo(map)
        .bindPopup('MMPE');

    L.marker([32.4453, -114.798]).addTo(map)
        .bindPopup('nan');

    L.marker([27.0357, -108.948]).addTo(map)
        .bindPopup('nan');

    L.marker([17.997, -92.8174]).addTo(map)
        .bindPopup('MMVA');

    L.marker([23.7033, -98.9565]).addTo(map)
        .bindPopup('MMCV');

    L.marker([25.7699, -97.5253]).addTo(map)
        .bindPopup('MMMA');

    L.marker([22.7432, -99.0174]).addTo(map)
        .bindPopup('MMDM');

    L.marker([27.4439, -99.5705]).addTo(map)
        .bindPopup('MMNL');

    L.marker([26.0089, -98.2285]).addTo(map)
        .bindPopup('MMRX');

    L.marker([22.2964, -97.8659]).addTo(map)
        .bindPopup('MMTM');

    L.marker([19.4751, -96.7975]).addTo(map)
        .bindPopup('MMJA');

    L.marker([18.1034, -94.5807]).addTo(map)
        .bindPopup('MMMT');

    L.marker([20.6027, -97.4608]).addTo(map)
        .bindPopup('MMPA');

    L.marker([19.1459, -96.1873]).addTo(map)
        .bindPopup('MMVR');

    L.marker([20.6413, -88.4462]).addTo(map)
        .bindPopup('MMCT');

    L.marker([20.937, -89.6577]).addTo(map)
        .bindPopup('MMMD');

    L.marker([21.1557, -88.1729]).addTo(map)
        .bindPopup('nan');

    L.marker([22.8971, -102.687]).addTo(map)
        .bindPopup('MMZC');

    L.marker([1.64131, 103.67]).addTo(map)
        .bindPopup('WMKJ');

    L.marker([2.383, 103.867]).addTo(map)
        .bindPopup('WMAU');

    L.marker([1.58333, 110.483]).addTo(map)
        .bindPopup('nan');

    L.marker([5.95, 102.083]).addTo(map)
        .bindPopup('nan');

    L.marker([6.18967, 100.398]).addTo(map)
        .bindPopup('WMKA');

    L.marker([6.32973, 99.7287]).addTo(map)
        .bindPopup('WMKL');

    L.marker([6.16685, 102.293]).addTo(map)
        .bindPopup('WMKC');

    L.marker([2.26336, 102.252]).addTo(map)
        .bindPopup('WMKM');

    L.marker([3.77539, 103.209]).addTo(map)
        .bindPopup('WMKD');

    L.marker([4.33028, 102.395]).addTo(map)
        .bindPopup('WMAN');

    L.marker([2.81818, 104.16]).addTo(map)
        .bindPopup('WMBT');

    L.marker([4.56797, 101.092]).addTo(map)
        .bindPopup('WMKI');

    L.marker([4.24472, 100.553]).addTo(map)
        .bindPopup('WMPA');

    L.marker([4.2222, 100.699]).addTo(map)
        .bindPopup('WMBA');

    L.marker([4.867, 100.717]).addTo(map)
        .bindPopup('WMBI');

    L.marker([5.46592, 100.391]).addTo(map)
        .bindPopup('WMKB');

    L.marker([5.29714, 100.277]).addTo(map)
        .bindPopup('WMKP');

    L.marker([5.93721, 116.051]).addTo(map)
        .bindPopup('WBKK');

    L.marker([4.4, 115.717]).addTo(map)
        .bindPopup('WBKN');

    L.marker([5.35749, 116.162]).addTo(map)
        .bindPopup('WBKG');

    L.marker([6.9225, 116.836]).addTo(map)
        .bindPopup('WBKT');

    L.marker([7.37157, 113.844]).addTo(map)
        .bindPopup('nan');

    L.marker([5.30068, 115.25]).addTo(map)
        .bindPopup('WBKL');

    L.marker([5.03225, 118.324]).addTo(map)
        .bindPopup('WBKD');

    L.marker([5.9993, 117.4]).addTo(map)
        .bindPopup('WBKP');

    L.marker([5.95, 116.667]).addTo(map)
        .bindPopup('WBKR');

    L.marker([5.9009, 118.059]).addTo(map)
        .bindPopup('WBKS');

    L.marker([4.45, 118.583]).addTo(map)
        .bindPopup('WBKA');

    L.marker([4.733, 116.467]).addTo(map)
        .bindPopup('WBKO');

    L.marker([5.08333, 115.55]).addTo(map)
        .bindPopup('nan');

    L.marker([5.08778, 119.094]).addTo(map)
        .bindPopup('WBKH');

    L.marker([5.62861, 117.126]).addTo(map)
        .bindPopup('WBKE');

    L.marker([5.40257, 118.658]).addTo(map)
        .bindPopup('WBKM');

    L.marker([4.32016, 118.128]).addTo(map)
        .bindPopup('WBKW');

    L.marker([3.73389, 115.479]).addTo(map)
        .bindPopup('WBGZ');

    L.marker([3.974, 115.618]).addTo(map)
        .bindPopup('WBGQ');

    L.marker([2.65, 113.767]).addTo(map)
        .bindPopup('WBGC');

    L.marker([1.81361, 109.763]).addTo(map)
        .bindPopup('WBGN');

    L.marker([3.12385, 113.02]).addTo(map)
        .bindPopup('WBGB');

    L.marker([1.4847, 110.347]).addTo(map)
        .bindPopup('WBGG');

    L.marker([2.01052, 112.931]).addTo(map)
        .bindPopup('WBGP');

    L.marker([3.202, 115.402]).addTo(map)
        .bindPopup('nan');

    L.marker([3.421, 115.154]).addTo(map)
        .bindPopup('WBGF');

    L.marker([3.3, 114.783]).addTo(map)
        .bindPopup('WBGL');

    L.marker([4.8083, 115.01]).addTo(map)
        .bindPopup('WBGJ');

    L.marker([4.217, 115.6]).addTo(map)
        .bindPopup('WBGD');

    L.marker([4.55222, 115.494]).addTo(map)
        .bindPopup('WBGU');

    L.marker([4.84917, 115.408]).addTo(map)
        .bindPopup('WBGW');

    L.marker([2.90639, 112.08]).addTo(map)
        .bindPopup('WBGK');

    L.marker([4.17898, 114.329]).addTo(map)
        .bindPopup('WBGM');

    L.marker([4.32201, 113.987]).addTo(map)
        .bindPopup('WBGR');

    L.marker([4.04833, 114.805]).addTo(map)
        .bindPopup('WBMU');

    L.marker([3.967, 115.05]).addTo(map)
        .bindPopup('WBGI');

    L.marker([2.2616, 111.985]).addTo(map)
        .bindPopup('WBGS');

    L.marker([1.20872, 111.453]).addTo(map)
        .bindPopup('WBGY');

    L.marker([2.17784, 111.202]).addTo(map)
        .bindPopup('WBTM');

    L.marker([2.74558, 101.71]).addTo(map)
        .bindPopup('WMKK');

    L.marker([3.13058, 101.549]).addTo(map)
        .bindPopup('WMSA');

    L.marker([4.53722, 103.427]).addTo(map)
        .bindPopup('WMKE');

    L.marker([5.76528, 103.007]).addTo(map)
        .bindPopup('WMPR');

    L.marker([5.38264, 103.103]).addTo(map)
        .bindPopup('WMKN');

    L.marker([-12.3502, 40.6023]).addTo(map)
        .bindPopup('FQIB');

    L.marker([-15.0331, 40.6717]).addTo(map)
        .bindPopup('FQLU');

    L.marker([-10.7506, 40.4702]).addTo(map)
        .bindPopup('nan');

    L.marker([-13.1219, 39.0528]).addTo(map)
        .bindPopup('nan');

    L.marker([-11.6729, 39.5631]).addTo(map)
        .bindPopup('FQMD');

    L.marker([-11.3618, 40.3549]).addTo(map)
        .bindPopup('FQMP');

    L.marker([-11.073, 39.68]).addTo(map)
        .bindPopup('nan');

    L.marker([-12.9918, 40.524]).addTo(map)
        .bindPopup('FQPB');

    L.marker([-24.5206, 32.9653]).addTo(map)
        .bindPopup('nan');

    L.marker([-25.0378, 33.6274]).addTo(map)
        .bindPopup('FQXA');

    L.marker([-21.8533, 35.4383]).addTo(map)
        .bindPopup('nan');

    L.marker([-21.5411, 35.4729]).addTo(map)
        .bindPopup('nan');

    L.marker([-22.1342, 35.4436]).addTo(map)
        .bindPopup('nan');

    L.marker([-21.708, 35.4528]).addTo(map)
        .bindPopup('nan');

    L.marker([-23.8764, 35.4085]).addTo(map)
        .bindPopup('FQIN');

    L.marker([-21.9672, 35.4247]).addTo(map)
        .bindPopup('nan');

    L.marker([-22.0184, 35.3133]).addTo(map)
        .bindPopup('FQVL');

    L.marker([-19.1513, 33.429]).addTo(map)
        .bindPopup('FQCH');

    L.marker([-25.9971, 32.9294]).addTo(map)
        .bindPopup('FQIA');

    L.marker([-25.9208, 32.5726]).addTo(map)
        .bindPopup('FQMA');

    L.marker([-26.8286, 32.8377]).addTo(map)
        .bindPopup('FQPO');

    L.marker([-15.6103, 37.6814]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.1819, 39.9452]).addTo(map)
        .bindPopup('FQAG');

    L.marker([-15.1056, 39.2818]).addTo(map)
        .bindPopup('FQNP');

    L.marker([-16.75, 39.2167]).addTo(map)
        .bindPopup('nan');

    L.marker([-14.4882, 40.7122]).addTo(map)
        .bindPopup('FQNC');

    L.marker([-14.815, 36.53]).addTo(map)
        .bindPopup('FQCB');

    L.marker([-13.274, 35.2663]).addTo(map)
        .bindPopup('FQLC');

    L.marker([-19.7964, 34.9076]).addTo(map)
        .bindPopup('FQBR');

    L.marker([-17.8331, 35.3341]).addTo(map)
        .bindPopup('nan');

    L.marker([-18.41, 35.0045]).addTo(map)
        .bindPopup('nan');

    L.marker([-21.615, 35.338]).addTo(map)
        .bindPopup('nan');

    L.marker([-18.2929, 35.9345]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.1048, 33.6402]).addTo(map)
        .bindPopup('FQTT');

    L.marker([-17.1833, 37.95]).addTo(map)
        .bindPopup('nan');

    L.marker([-18.59, 36.4489]).addTo(map)
        .bindPopup('nan');

    L.marker([-18.4139, 36.1068]).addTo(map)
        .bindPopup('nan');

    L.marker([-17.3087, 37.5]).addTo(map)
        .bindPopup('nan');

    L.marker([-17.267, 38.167]).addTo(map)
        .bindPopup('nan');

    L.marker([-17.8555, 36.8691]).addTo(map)
        .bindPopup('FQQL');

    L.marker([-15.5062, 36.9904]).addTo(map)
        .bindPopup('nan');

    L.marker([-22.4622, 14.98]).addTo(map)
        .bindPopup('FYAR');

    L.marker([-21.0233, 16.4528]).addTo(map)
        .bindPopup('FYME');

    L.marker([-22.6619, 14.5681]).addTo(map)
        .bindPopup('FYSM');

    L.marker([-22.9799, 14.6453]).addTo(map)
        .bindPopup('FYWB');

    L.marker([-24.5128, 15.7467]).addTo(map)
        .bindPopup('FYSS');

    L.marker([-27.995, 17.5966]).addTo(map)
        .bindPopup('FYAA');

    L.marker([-28.0297, 18.7385]).addTo(map)
        .bindPopup('FYKB');

    L.marker([-26.5398, 18.1114]).addTo(map)
        .bindPopup('FYKT');

    L.marker([-26.6874, 15.2429]).addTo(map)
        .bindPopup('FYLZ');

    L.marker([-28.5847, 16.4467]).addTo(map)
        .bindPopup('FYOG');

    L.marker([-27.8764, 16.6478]).addTo(map)
        .bindPopup('FYSA');

    L.marker([-18.1181, 21.6244]).addTo(map)
        .bindPopup('nan');

    L.marker([-17.9565, 19.7194]).addTo(map)
        .bindPopup('FYRU');

    L.marker([-22.6122, 17.0804]).addTo(map)
        .bindPopup('FYWE');

    L.marker([-22.0106, 17.37]).addTo(map)
        .bindPopup('FYMG');

    L.marker([-22.1833, 18.5333]).addTo(map)
        .bindPopup('FYNG');

    L.marker([-22.4799, 17.4709]).addTo(map)
        .bindPopup('FYWH');

    L.marker([-18.0614, 13.8505]).addTo(map)
        .bindPopup('FYOP');

    L.marker([-19.9713, 13.0249]).addTo(map)
        .bindPopup('FYTE');

    L.marker([-22.5044, 18.9731]).addTo(map)
        .bindPopup('FYGB');

    L.marker([-17.797, 15.6993]).addTo(map)
        .bindPopup('FYOS');

    L.marker([-17.8782, 15.9526]).addTo(map)
        .bindPopup('FYOA');

    L.marker([-19.0285, 16.4585]).addTo(map)
        .bindPopup('FYHI');

    L.marker([-18.8064, 16.9272]).addTo(map)
        .bindPopup('FYNA');

    L.marker([-19.1492, 15.9119]).addTo(map)
        .bindPopup('FYOO');

    L.marker([-18.8128, 17.0594]).addTo(map)
        .bindPopup('FYMO');

    L.marker([-19.2619, 17.7325]).addTo(map)
        .bindPopup('FYTM');

    L.marker([-19.6022, 18.1227]).addTo(map)
        .bindPopup('FYGF');

    L.marker([-20.4347, 16.6608]).addTo(map)
        .bindPopup('FYOW');

    L.marker([-18.1167, 23.3933]).addTo(map)
        .bindPopup('FYLS');

    L.marker([-17.6344, 24.1767]).addTo(map)
        .bindPopup('FYKM');

    L.marker([-18.0303, 22.1897]).addTo(map)
        .bindPopup('FYOE');

    L.marker([-19.7206, 163.661]).addTo(map)
        .bindPopup('NWWC');

    L.marker([-21.0543, 164.837]).addTo(map)
        .bindPopup('NWWD');

    L.marker([-20.5463, 164.256]).addTo(map)
        .bindPopup('NWWK');

    L.marker([-21.3164, 164.999]).addTo(map)
        .bindPopup('NWWQ');

    L.marker([-20.2892, 164.099]).addTo(map)
        .bindPopup('NWWP');

    L.marker([-20.79, 165.259]).addTo(map)
        .bindPopup('NWWU');

    L.marker([-22.2583, 166.473]).addTo(map)
        .bindPopup('NWWM');

    L.marker([-22.5889, 167.456]).addTo(map)
        .bindPopup('NWWE');

    L.marker([-22.0146, 166.213]).addTo(map)
        .bindPopup('NWWW');

    L.marker([-21.0961, 167.804]).addTo(map)
        .bindPopup('NWWA');

    L.marker([-20.7748, 167.24]).addTo(map)
        .bindPopup('NWWL');

    L.marker([-21.4817, 168.038]).addTo(map)
        .bindPopup('NWWR');

    L.marker([-20.6406, 166.573]).addTo(map)
        .bindPopup('NWWV');

    L.marker([16.966, 8.00011]).addTo(map)
        .bindPopup('DRZA');

    L.marker([18.7904, 7.36595]).addTo(map)
        .bindPopup('DRZL');

    L.marker([13.5025, 7.12675]).addTo(map)
        .bindPopup('DRRM');

    L.marker([13.4815, 2.18361]).addTo(map)
        .bindPopup('DRRN');

    L.marker([14.8757, 5.26536]).addTo(map)
        .bindPopup('DRRT');

    L.marker([13.779, 8.98376]).addTo(map)
        .bindPopup('DRZR');

    L.marker([-29.0416, 167.939]).addTo(map)
        .bindPopup('YSNF');

    L.marker([9.00679, 7.26317]).addTo(map)
        .bindPopup('DNAA');

    L.marker([9.63983, 8.86905]).addTo(map)
        .bindPopup('DNJO');

    L.marker([9.25755, 12.4304]).addTo(map)
        .bindPopup('DNYO');

    L.marker([4.8725, 8.093]).addTo(map)
        .bindPopup('DNAI');

    L.marker([10.4828, 9.744]).addTo(map)
        .bindPopup('nan');

    L.marker([7.70388, 8.61394]).addTo(map)
        .bindPopup('DNMK');

    L.marker([11.8553, 13.0809]).addTo(map)
        .bindPopup('DNMA');

    L.marker([4.97602, 8.3472]).addTo(map)
        .bindPopup('DNCA');

    L.marker([6.20417, 6.66528]).addTo(map)
        .bindPopup('DNAS');

    L.marker([5.59611, 5.81778]).addTo(map)
        .bindPopup('DNSU');

    L.marker([6.31698, 5.5995]).addTo(map)
        .bindPopup('DNBE');

    L.marker([6.47427, 7.56196]).addTo(map)
        .bindPopup('DNEN');

    L.marker([10.2983, 10.8964]).addTo(map)
        .bindPopup('DNGO');

    L.marker([5.42706, 7.20603]).addTo(map)
        .bindPopup('DNIM');

    L.marker([10.696, 7.32011]).addTo(map)
        .bindPopup('DNKA');

    L.marker([11.1302, 7.68581]).addTo(map)
        .bindPopup('DNZA');

    L.marker([12.0476, 8.52462]).addTo(map)
        .bindPopup('DNKN');

    L.marker([13.0078, 7.66045]).addTo(map)
        .bindPopup('nan');

    L.marker([8.44021, 4.49392]).addTo(map)
        .bindPopup('DNIL');

    L.marker([6.57737, 3.32116]).addTo(map)
        .bindPopup('DNMM');

    L.marker([9.65217, 6.46226]).addTo(map)
        .bindPopup('DNMN');

    L.marker([7.24674, 5.30101]).addTo(map)
        .bindPopup('DNAK');

    L.marker([7.36246, 3.97833]).addTo(map)
        .bindPopup('DNIB');

    L.marker([5.01549, 6.94959]).addTo(map)
        .bindPopup('DNPO');

    L.marker([4.84611, 7.02139]).addTo(map)
        .bindPopup('nan');

    L.marker([12.9163, 5.20719]).addTo(map)
        .bindPopup('DNSO');

    L.marker([14.0315, -84.6243]).addTo(map)
        .bindPopup('MNBZ');

    L.marker([14.0472, -83.3867]).addTo(map)
        .bindPopup('MNPC');

    L.marker([13.8897, -84.4089]).addTo(map)
        .bindPopup('MNRT');

    L.marker([13.7272, -84.7778]).addTo(map)
        .bindPopup('MNSI');

    L.marker([14.7392, -83.9694]).addTo(map)
        .bindPopup('MNWP');

    L.marker([11.991, -83.7741]).addTo(map)
        .bindPopup('MNBL');

    L.marker([11.6667, -84.45]).addTo(map)
        .bindPopup('MNNG');

    L.marker([12.1629, -83.0638]).addTo(map)
        .bindPopup('MNCI');

    L.marker([12.1415, -86.1682]).addTo(map)
        .bindPopup('MNMG');

    L.marker([11.1334, -84.77]).addTo(map)
        .bindPopup('MNSC');

    L.marker([11.4275, -86.0334]).addTo(map)
        .bindPopup('MNCE');

    L.marker([53.1197, 6.57944]).addTo(map)
        .bindPopup('EHGG');

    L.marker([52.4603, 5.52722]).addTo(map)
        .bindPopup('EHLE');

    L.marker([53.2286, 5.76056]).addTo(map)
        .bindPopup('EHLW');

    L.marker([50.9117, 5.77014]).addTo(map)
        .bindPopup('EHBK');

    L.marker([51.4501, 5.37453]).addTo(map)
        .bindPopup('EHEH');

    L.marker([51.5674, 4.93183]).addTo(map)
        .bindPopup('EHGR');

    L.marker([51.6564, 5.70861]).addTo(map)
        .bindPopup('EHVK');

    L.marker([51.4491, 4.34203]).addTo(map)
        .bindPopup('EHWO');

    L.marker([52.3086, 4.76389]).addTo(map)
        .bindPopup('EHAM');

    L.marker([52.9234, 4.78062]).addTo(map)
        .bindPopup('EHKD');

    L.marker([52.2758, 6.88917]).addTo(map)
        .bindPopup('EHTW');

    L.marker([52.1273, 5.27619]).addTo(map)
        .bindPopup('EHSB');

    L.marker([51.9569, 4.43722]).addTo(map)
        .bindPopup('EHRD');

    L.marker([60.1939, 11.1004]).addTo(map)
        .bindPopup('ENGM');

    L.marker([60.7911, 9.04867]).addTo(map)
        .bindPopup('ENKL');

    L.marker([69.9761, 23.3717]).addTo(map)
        .bindPopup('ENAT');

    L.marker([70.6005, 29.6914]).addTo(map)
        .bindPopup('ENBS');

    L.marker([70.8714, 29.0342]).addTo(map)
        .bindPopup('ENBV');

    L.marker([70.4867, 22.1397]).addTo(map)
        .bindPopup('ENHK');

    L.marker([70.6797, 23.6686]).addTo(map)
        .bindPopup('ENHF');

    L.marker([71.0097, 25.9836]).addTo(map)
        .bindPopup('ENHV');

    L.marker([69.7258, 29.8913]).addTo(map)
        .bindPopup('ENKR');

    L.marker([70.0688, 24.9735]).addTo(map)
        .bindPopup('ENNA');

    L.marker([71.0297, 27.8267]).addTo(map)
        .bindPopup('ENMH');

    L.marker([70.3554, 31.0449]).addTo(map)
        .bindPopup('ENSS');

    L.marker([70.0653, 29.8447]).addTo(map)
        .bindPopup('ENVD');

    L.marker([60.8181, 11.068]).addTo(map)
        .bindPopup('ENHA');

    L.marker([60.2934, 5.21814]).addTo(map)
        .bindPopup('ENBR');

    L.marker([59.7919, 5.34085]).addTo(map)
        .bindPopup('ENSO');

    L.marker([62.5625, 6.1197]).addTo(map)
        .bindPopup('ENAL');

    L.marker([62.18, 6.0741]).addTo(map)
        .bindPopup('ENOV');

    L.marker([63.1118, 7.82452]).addTo(map)
        .bindPopup('ENKB');

    L.marker([62.7447, 7.2625]).addTo(map)
        .bindPopup('ENML');

    L.marker([63.4578, 10.924]).addTo(map)
        .bindPopup('ENVA');

    L.marker([69.2925, 16.1442]).addTo(map)
        .bindPopup('ENAN');

    L.marker([65.4611, 12.2175]).addTo(map)
        .bindPopup('ENBN');

    L.marker([67.2692, 14.3653]).addTo(map)
        .bindPopup('ENBO');

    L.marker([68.4913, 16.6781]).addTo(map)
        .bindPopup('ENEV');

    L.marker([68.1525, 13.6094]).addTo(map)
        .bindPopup('ENLK');

    L.marker([65.784, 13.2149]).addTo(map)
        .bindPopup('ENMS');

    L.marker([66.3639, 14.3014]).addTo(map)
        .bindPopup('ENRA');

    L.marker([68.4369, 17.3867]).addTo(map)
        .bindPopup('ENNK');

    L.marker([67.5278, 12.1033]).addTo(map)
        .bindPopup('ENRS');

    L.marker([68.5788, 15.0334]).addTo(map)
        .bindPopup('ENSK');

    L.marker([65.9568, 12.4689]).addTo(map)
        .bindPopup('ENST');

    L.marker([68.2433, 14.6692]).addTo(map)
        .bindPopup('ENSH');

    L.marker([61.0156, 9.28806]).addTo(map)
        .bindPopup('ENFG');

    L.marker([59.3788, 10.7854]).addTo(map)
        .bindPopup('ENRY');

    L.marker([59.3453, 5.20836]).addTo(map)
        .bindPopup('ENHD');

    L.marker([58.8767, 5.63778]).addTo(map)
        .bindPopup('ENZV');

    L.marker([61.3911, 5.75694]).addTo(map)
        .bindPopup('ENBL');

    L.marker([61.5836, 5.02472]).addTo(map)
        .bindPopup('ENFL');

    L.marker([61.83, 6.10583]).addTo(map)
        .bindPopup('ENSD');

    L.marker([61.1561, 7.13778]).addTo(map)
        .bindPopup('ENSG');

    L.marker([63.6989, 9.604]).addTo(map)
        .bindPopup('ENOL');

    L.marker([64.4722, 11.5786]).addTo(map)
        .bindPopup('ENNM');

    L.marker([62.5784, 11.3423]).addTo(map)
        .bindPopup('ENRO');

    L.marker([64.8383, 11.1461]).addTo(map)
        .bindPopup('ENRM');

    L.marker([59.5657, 9.21222]).addTo(map)
        .bindPopup('ENNO');

    L.marker([59.185, 9.56694]).addTo(map)
        .bindPopup('ENSN');

    L.marker([69.0558, 18.5404]).addTo(map)
        .bindPopup('ENDU');

    L.marker([69.7868, 20.9594]).addTo(map)
        .bindPopup('ENSR');

    L.marker([69.6833, 18.9189]).addTo(map)
        .bindPopup('ENTC');

    L.marker([58.2042, 8.08537]).addTo(map)
        .bindPopup('ENCN');

    L.marker([59.1867, 10.2586]).addTo(map)
        .bindPopup('ENTO');

    L.marker([27.6966, 85.3591]).addTo(map)
        .bindPopup('VNKT');

    L.marker([28.2, 85.583]).addTo(map)
        .bindPopup('VNLT');

    L.marker([29.502, 81.669]).addTo(map)
        .bindPopup('VNBR');

    L.marker([28.1036, 81.667]).addTo(map)
        .bindPopup('VNNG');

    L.marker([28.586, 81.636]).addTo(map)
        .bindPopup('VNSK');

    L.marker([28.2128, 83.6663]).addTo(map)
        .bindPopup('VNBL');

    L.marker([28.7804, 83.723]).addTo(map)
        .bindPopup('VNJS');

    L.marker([28.6414, 84.0892]).addTo(map)
        .bindPopup('VNMA');

    L.marker([28.2009, 83.9821]).addTo(map)
        .bindPopup('VNPK');

    L.marker([26.7088, 85.9224]).addTo(map)
        .bindPopup('VNJP');

    L.marker([27.394, 86.0614]).addTo(map)
        .bindPopup('VNRC');

    L.marker([28.9857, 82.8191]).addTo(map)
        .bindPopup('VNDP');

    L.marker([29.9711, 81.8189]).addTo(map)
        .bindPopup('VNST');

    L.marker([29.2742, 82.1933]).addTo(map)
        .bindPopup('VNJL');

    L.marker([27.1474, 87.0508]).addTo(map)
        .bindPopup('VNBJ');

    L.marker([26.4815, 87.264]).addTo(map)
        .bindPopup('VNVT');

    L.marker([26.5101, 86.7339]).addTo(map)
        .bindPopup('VNRB');

    L.marker([27.315, 87.1933]).addTo(map)
        .bindPopup('VNTR');

    L.marker([27.5057, 83.4163]).addTo(map)
        .bindPopup('VNBW');

    L.marker([29.2631, 80.936]).addTo(map)
        .bindPopup('VNDT');

    L.marker([28.9632, 80.1479]).addTo(map)
        .bindPopup('VNMN');

    L.marker([26.5708, 88.0796]).addTo(map)
        .bindPopup('VNCG');

    L.marker([27.3509, 87.6953]).addTo(map)
        .bindPopup('VNTJ');

    L.marker([27.6781, 84.4294]).addTo(map)
        .bindPopup('VNBP');

    L.marker([28.0385, 84.4664]).addTo(map)
        .bindPopup('VNGK');

    L.marker([27.5774, 84.2288]).addTo(map)
        .bindPopup('VNMG');

    L.marker([27.1595, 84.9801]).addTo(map)
        .bindPopup('VNSI');

    L.marker([28.1111, 82.2942]).addTo(map)
        .bindPopup('VNDG');

    L.marker([28.2673, 82.7565]).addTo(map)
        .bindPopup('VNRP');

    L.marker([28.627, 82.195]).addTo(map)
        .bindPopup('VNRK');

    L.marker([27.6263, 86.2306]).addTo(map)
        .bindPopup('VNJI');

    L.marker([27.2531, 86.67]).addTo(map)
        .bindPopup('VNLD');

    L.marker([27.6869, 86.7297]).addTo(map)
        .bindPopup('VNLK');

    L.marker([27.5178, 86.5845]).addTo(map)
        .bindPopup('VNPL');

    L.marker([27.3035, 86.5504]).addTo(map)
        .bindPopup('VNRT');

    L.marker([27.8112, 86.7123]).addTo(map)
        .bindPopup('VNSB');

    L.marker([29.4653, 80.5492]).addTo(map)
        .bindPopup('VNBT');

    L.marker([29.539, 81.1854]).addTo(map)
        .bindPopup('VNBG');

    L.marker([29.6692, 80.5484]).addTo(map)
        .bindPopup('VNDL');

    L.marker([28.7533, 80.5819]).addTo(map)
        .bindPopup('VNDH');

    L.marker([29.2366, 81.2153]).addTo(map)
        .bindPopup('VNSR');

    L.marker([28.5219, 81.123]).addTo(map)
        .bindPopup('VNTP');

    L.marker([-0.547458, 166.919]).addTo(map)
        .bindPopup('ANYN');

    L.marker([-19.079, -169.926]).addTo(map)
        .bindPopup('NIUE');

    L.marker([-37.0081, 174.792]).addTo(map)
        .bindPopup('NZAA');

    L.marker([-37.0297, 174.973]).addTo(map)
        .bindPopup('NZAR');

    L.marker([-36.7917, 175.509]).addTo(map)
        .bindPopup('NZCX');

    L.marker([-36.2414, 175.472]).addTo(map)
        .bindPopup('NZGB');

    L.marker([-36.8089, 175.086]).addTo(map)
        .bindPopup('NZKE');

    L.marker([-38.1092, 176.317]).addTo(map)
        .bindPopup('NZRO');

    L.marker([-37.6719, 176.196]).addTo(map)
        .bindPopup('NZTG');

    L.marker([-37.9206, 176.914]).addTo(map)
        .bindPopup('NZWK');

    L.marker([-43.9033, 171.797]).addTo(map)
        .bindPopup('NZAS');

    L.marker([-43.4894, 172.532]).addTo(map)
        .bindPopup('NZCH');

    L.marker([-43.9067, 170.128]).addTo(map)
        .bindPopup('NZGT');

    L.marker([-42.425, 173.605]).addTo(map)
        .bindPopup('NZKI');

    L.marker([-44.3028, 171.225]).addTo(map)
        .bindPopup('NZTU');

    L.marker([-44.235, 170.118]).addTo(map)
        .bindPopup('NZUK');

    L.marker([-43.81, -176.457]).addTo(map)
        .bindPopup('NZCI');

    L.marker([-38.6633, 177.978]).addTo(map)
        .bindPopup('NZGS');

    L.marker([-39.4658, 176.87]).addTo(map)
        .bindPopup('NZNR');

    L.marker([-39.0069, 177.407]).addTo(map)
        .bindPopup('NZWO');

    L.marker([-40.206, 175.388]).addTo(map)
        .bindPopup('NZOH');

    L.marker([-40.3206, 175.617]).addTo(map)
        .bindPopup('NZPM');

    L.marker([-39.9622, 175.025]).addTo(map)
        .bindPopup('NZWU');

    L.marker([-41.5183, 173.87]).addTo(map)
        .bindPopup('NZWB');

    L.marker([-41.3461, 173.956]).addTo(map)
        .bindPopup('NZPN');

    L.marker([-41.2983, 173.221]).addTo(map)
        .bindPopup('NZNS');

    L.marker([-35.9397, 173.894]).addTo(map)
        .bindPopup('NZDA');

    L.marker([-35.07, 173.285]).addTo(map)
        .bindPopup('NZKT');

    L.marker([-35.2628, 173.912]).addTo(map)
        .bindPopup('NZKK');

    L.marker([-35.4511, 173.817]).addTo(map)
        .bindPopup('NZKO');

    L.marker([-35.7683, 174.365]).addTo(map)
        .bindPopup('NZWR');

    L.marker([-45.2117, 169.373]).addTo(map)
        .bindPopup('NZLX');

    L.marker([-45.9281, 170.198]).addTo(map)
        .bindPopup('NZDN');

    L.marker([-44.97, 171.082]).addTo(map)
        .bindPopup('NZOU');

    L.marker([-44.7222, 169.246]).addTo(map)
        .bindPopup('NZWF');

    L.marker([-45.0211, 168.739]).addTo(map)
        .bindPopup('NZQN');

    L.marker([-46.4124, 168.313]).addTo(map)
        .bindPopup('NZNV');

    L.marker([-44.6733, 167.923]).addTo(map)
        .bindPopup('NZMF');

    L.marker([-43.765, 170.133]).addTo(map)
        .bindPopup('NZMC');

    L.marker([-46.8997, 168.101]).addTo(map)
        .bindPopup('NZRC');

    L.marker([-45.5331, 167.65]).addTo(map)
        .bindPopup('NZMO');

    L.marker([-43.3631, 170.134]).addTo(map)
        .bindPopup('nan');

    L.marker([-39.0086, 174.179]).addTo(map)
        .bindPopup('NZNP');

    L.marker([-40.8133, 172.775]).addTo(map)
        .bindPopup('NZTK');

    L.marker([-41.1233, 172.989]).addTo(map)
        .bindPopup('NZMK');

    L.marker([-37.8667, 175.332]).addTo(map)
        .bindPopup('NZHN');

    L.marker([-37.7344, 175.742]).addTo(map)
        .bindPopup('NZMA');

    L.marker([-37.8047, 174.86]).addTo(map)
        .bindPopup('NZRA');

    L.marker([-38.1811, 174.708]).addTo(map)
        .bindPopup('nan');

    L.marker([-38.2367, 175.892]).addTo(map)
        .bindPopup('NZTO');

    L.marker([-37.1567, 175.55]).addTo(map)
        .bindPopup('NZTH');

    L.marker([-38.7397, 176.084]).addTo(map)
        .bindPopup('NZAP');

    L.marker([-36.8317, 175.679]).addTo(map)
        .bindPopup('NZWT');

    L.marker([-40.9733, 175.634]).addTo(map)
        .bindPopup('NZMS');

    L.marker([-40.9047, 174.989]).addTo(map)
        .bindPopup('NZPP');

    L.marker([-41.3272, 174.805]).addTo(map)
        .bindPopup('NZWN');

    L.marker([-42.4617, 171.19]).addTo(map)
        .bindPopup('NZGM');

    L.marker([-42.7136, 170.985]).addTo(map)
        .bindPopup('NZHK');

    L.marker([-41.7381, 171.581]).addTo(map)
        .bindPopup('NZWS');

    L.marker([22.4919, 57.3839]).addTo(map)
        .bindPopup('nan');

    L.marker([23.5933, 58.2844]).addTo(map)
        .bindPopup('OOMS');

    L.marker([21.383, 57.05]).addTo(map)
        .bindPopup('OOGB');

    L.marker([24.2411, 55.7847]).addTo(map)
        .bindPopup('OOBR');

    L.marker([19.8731, 56.0678]).addTo(map)
        .bindPopup('nan');

    L.marker([19.5019, 57.6342]).addTo(map)
        .bindPopup('nan');

    L.marker([19.4749, 57.3083]).addTo(map)
        .bindPopup('nan');

    L.marker([19.3864, 56.4014]).addTo(map)
        .bindPopup('nan');

    L.marker([22.3548, 56.4841]).addTo(map)
        .bindPopup('OOFD');

    L.marker([22.805, 55.3734]).addTo(map)
        .bindPopup('OOLK');

    L.marker([24.386, 56.6254]).addTo(map)
        .bindPopup('OOSH');

    L.marker([-6.32183, 145.071]).addTo(map)
        .bindPopup('AYNO');

    L.marker([25.6142, 56.2444]).addTo(map)
        .bindPopup('nan');

    L.marker([26.171, 56.2406]).addTo(map)
        .bindPopup('OOKB');

    L.marker([23.6406, 57.4875]).addTo(map)
        .bindPopup('OORQ');

    L.marker([20.6754, 58.8905]).addTo(map)
        .bindPopup('OOMA');

    L.marker([22.533, 59.483]).addTo(map)
        .bindPopup('OOSR');

    L.marker([-8.64202, 25.2529]).addTo(map)
        .bindPopup('FZSB');

    L.marker([18.4507, -68.9118]).addTo(map)
        .bindPopup('MDLR');

    L.marker([18.136, 55.1821]).addTo(map)
        .bindPopup('OOMX');

    L.marker([17.0387, 54.0913]).addTo(map)
        .bindPopup('OOSA');

    L.marker([17.666, 54.0246]).addTo(map)
        .bindPopup('OOTH');

    L.marker([9.34085, -82.2508]).addTo(map)
        .bindPopup('MPBO');

    L.marker([9.45896, -82.5151]).addTo(map)
        .bindPopup('MPCH');

    L.marker([8.26806, -82.8649]).addTo(map)
        .bindPopup('nan');

    L.marker([8.391, -82.435]).addTo(map)
        .bindPopup('MPDA');

    L.marker([8.37588, -80.1279]).addTo(map)
        .bindPopup('MPSM');

    L.marker([9.35664, -79.8674]).addTo(map)
        .bindPopup('MPEJ');

    L.marker([9.2226, -78.0236]).addTo(map)
        .bindPopup('nan');

    L.marker([7.583, -78.2]).addTo(map)
        .bindPopup('nan');

    L.marker([8.1072, -77.7252]).addTo(map)
        .bindPopup('nan');

    L.marker([8.0644, -78.3673]).addTo(map)
        .bindPopup('nan');

    L.marker([7.51778, -78.1572]).addTo(map)
        .bindPopup('MPJE');

    L.marker([9.1851, -77.9841]).addTo(map)
        .bindPopup('nan');

    L.marker([8.9453, -77.7331]).addTo(map)
        .bindPopup('nan');

    L.marker([9.06667, -78.0167]).addTo(map)
        .bindPopup('nan');

    L.marker([9.1383, -77.9339]).addTo(map)
        .bindPopup('nan');

    L.marker([8.40667, -78.1417]).addTo(map)
        .bindPopup('MPLP');

    L.marker([8.667, -77.418]).addTo(map)
        .bindPopup('MPOA');

    L.marker([9.30518, -78.2359]).addTo(map)
        .bindPopup('nan');

    L.marker([8.1528, -77.687]).addTo(map)
        .bindPopup('nan');

    L.marker([8.017, -78.2]).addTo(map)
        .bindPopup('nan');

    L.marker([9.4185, -78.4896]).addTo(map)
        .bindPopup('nan');

    L.marker([9.1283, -77.9337]).addTo(map)
        .bindPopup('nan');

    L.marker([7.98784, -80.4097]).addTo(map)
        .bindPopup('MPCE');

    L.marker([7.55688, -80.0233]).addTo(map)
        .bindPopup('nan');

    L.marker([8.43166, -77.9652]).addTo(map)
        .bindPopup('nan');

    L.marker([8.91479, -79.5996]).addTo(map)
        .bindPopup('MPHO');

    L.marker([9.31347, -79.1016]).addTo(map)
        .bindPopup('nan');

    L.marker([9.4446, -78.5888]).addTo(map)
        .bindPopup('nan');

    L.marker([8.4693, -79.0016]).addTo(map)
        .bindPopup('nan');

    L.marker([9.4496, -78.9795]).addTo(map)
        .bindPopup('MPWN');

    L.marker([8.4566, -78.9339]).addTo(map)
        .bindPopup('nan');

    L.marker([8.62876, -79.0347]).addTo(map)
        .bindPopup('nan');

    L.marker([8.97334, -79.5556]).addTo(map)
        .bindPopup('MPMG');

    L.marker([9.07136, -79.3835]).addTo(map)
        .bindPopup('MPTO');

    L.marker([9.558, -78.947]).addTo(map)
        .bindPopup('MPVR');

    L.marker([8.2622, -79.078]).addTo(map)
        .bindPopup('nan');

    L.marker([9.52, -79.03]).addTo(map)
        .bindPopup('nan');

    L.marker([8.0856, -80.9453]).addTo(map)
        .bindPopup('MPSA');

    L.marker([-6.20181, -77.8561]).addTo(map)
        .bindPopup('SPPY');

    L.marker([-6.39231, -77.5012]).addTo(map)
        .bindPopup('SPLN');

    L.marker([-9.34744, -77.5984]).addTo(map)
        .bindPopup('SPHZ');

    L.marker([-9.14961, -78.5238]).addTo(map)
        .bindPopup('SPEO');

    L.marker([-13.7064, -73.3504]).addTo(map)
        .bindPopup('SPHY');

    L.marker([-16.3411, -71.5831]).addTo(map)
        .bindPopup('SPQU');

    L.marker([-13.1548, -74.2044]).addTo(map)
        .bindPopup('SPHO');

    L.marker([-10.7292, -73.7667]).addTo(map)
        .bindPopup('SPAY');

    L.marker([-7.13918, -78.4894]).addTo(map)
        .bindPopup('SPJR');

    L.marker([-5.59248, -78.774]).addTo(map)
        .bindPopup('SPJE');

    L.marker([-9.87881, -76.2048]).addTo(map)
        .bindPopup('SPNC');

    L.marker([-13.2333, -70.7533]).addTo(map)
        .bindPopup('SPIL');

    L.marker([-11.8549, -72.9393]).addTo(map)
        .bindPopup('nan');

    L.marker([-12.0219, -77.1143]).addTo(map)
        .bindPopup('SPIM');

    L.marker([-9.133, -75.95]).addTo(map)
        .bindPopup('SPGM');

    L.marker([-14.854, -74.9615]).addTo(map)
        .bindPopup('SPZA');

    L.marker([-13.7449, -76.2203]).addTo(map)
        .bindPopup('SPSO');

    L.marker([-15.3525, -75.1372]).addTo(map)
        .bindPopup('SPJN');

    L.marker([-11.7831, -75.4734]).addTo(map)
        .bindPopup('SPJJ');

    L.marker([-11.3254, -74.5356]).addTo(map)
        .bindPopup('SPMF');

    L.marker([-8.08141, -79.1088]).addTo(map)
        .bindPopup('SPRU');

    L.marker([-6.78748, -79.8281]).addTo(map)
        .bindPopup('SPHI');

    L.marker([-11.9833, -77.0]).addTo(map)
        .bindPopup('SPMR');

    L.marker([-2.79613, -76.4666]).addTo(map)
        .bindPopup('nan');

    L.marker([-13.5357, -71.9388]).addTo(map)
        .bindPopup('SPZO');

    L.marker([-3.78474, -73.3088]).addTo(map)
        .bindPopup('SPQT');

    L.marker([-3.80601, -75.0393]).addTo(map)
        .bindPopup('SPDR');

    L.marker([-5.89377, -76.1182]).addTo(map)
        .bindPopup('SPMS');

    L.marker([-11.4116, -69.4887]).addTo(map)
        .bindPopup('SPBR');

    L.marker([-12.6136, -69.2286]).addTo(map)
        .bindPopup('SPTU');

    L.marker([-11.898, -69.0625]).addTo(map)
        .bindPopup('SPSY');

    L.marker([-17.695, -71.344]).addTo(map)
        .bindPopup('SPLO');

    L.marker([-5.20575, -80.6164]).addTo(map)
        .bindPopup('SPUR');

    L.marker([-4.57664, -81.2541]).addTo(map)
        .bindPopup('SPYL');

    L.marker([-15.4671, -70.1582]).addTo(map)
        .bindPopup('SPJL');

    L.marker([-7.06056, -76.5822]).addTo(map)
        .bindPopup('SPBL');

    L.marker([-7.1691, -76.7286]).addTo(map)
        .bindPopup('SPJI');

    L.marker([-6.01889, -76.9883]).addTo(map)
        .bindPopup('SPBB');

    L.marker([-6.06786, -77.16]).addTo(map)
        .bindPopup('SPJA');

    L.marker([-6.96003, -76.7684]).addTo(map)
        .bindPopup('SPOA');

    L.marker([-6.50874, -76.3732]).addTo(map)
        .bindPopup('SPST');

    L.marker([-18.0533, -70.2758]).addTo(map)
        .bindPopup('SPTN');

    L.marker([-3.55253, -80.3814]).addTo(map)
        .bindPopup('SPME');

    L.marker([-11.683, -69.333]).addTo(map)
        .bindPopup('SPAR');

    L.marker([-8.37794, -74.5743]).addTo(map)
        .bindPopup('SPCL');

    L.marker([-22.6373, -152.806]).addTo(map)
        .bindPopup('NTAM');

    L.marker([-22.4341, -151.361]).addTo(map)
        .bindPopup('NTAR');

    L.marker([-23.8852, -147.662]).addTo(map)
        .bindPopup('NTAV');

    L.marker([-23.3654, -149.524]).addTo(map)
        .bindPopup('NTAT');

    L.marker([-9.76879, -139.011]).addTo(map)
        .bindPopup('NTMN');

    L.marker([-8.7956, -140.229]).addTo(map)
        .bindPopup('NTMD');

    L.marker([-8.93611, -139.552]).addTo(map)
        .bindPopup('NTMU');

    L.marker([-9.35167, -140.078]).addTo(map)
        .bindPopup('NTMP');

    L.marker([-16.4444, -151.751]).addTo(map)
        .bindPopup('NTTB');

    L.marker([-16.6872, -151.022]).addTo(map)
        .bindPopup('NTTH');

    L.marker([-16.4265, -152.244]).addTo(map)
        .bindPopup('NTTP');

    L.marker([-17.5537, -149.607]).addTo(map)
        .bindPopup('NTAA');

    L.marker([-16.7229, -151.466]).addTo(map)
        .bindPopup('NTTR');

    L.marker([-17.0133, -149.587]).addTo(map)
        .bindPopup('NTTE');

    L.marker([-17.3526, -145.51]).addTo(map)
        .bindPopup('NTGA');

    L.marker([-14.4281, -146.257]).addTo(map)
        .bindPopup('NTHE');

    L.marker([-15.5736, -146.415]).addTo(map)
        .bindPopup('NTGD');

    L.marker([-15.2483, -146.617]).addTo(map)
        .bindPopup('NTGU');

    L.marker([-16.6867, -145.329]).addTo(map)
        .bindPopup('NTKF');

    L.marker([-16.0541, -145.657]).addTo(map)
        .bindPopup('NTGF');

    L.marker([-15.8199, -140.887]).addTo(map)
        .bindPopup('NTGB');

    L.marker([-15.9922, -140.165]).addTo(map)
        .bindPopup('NTKH');

    L.marker([-23.0799, -134.89]).addTo(map)
        .bindPopup('NTGJ');

    L.marker([-17.5447, -142.614]).addTo(map)
        .bindPopup('NTGH');

    L.marker([-18.0748, -140.946]).addTo(map)
        .bindPopup('NTTO');

    L.marker([-15.7808, -145.124]).addTo(map)
        .bindPopup('NTKA');

    L.marker([-15.6633, -146.885]).addTo(map)
        .bindPopup('NTGK');

    L.marker([-16.3394, -144.403]).addTo(map)
        .bindPopup('NTKT');

    L.marker([-16.5839, -143.658]).addTo(map)
        .bindPopup('NTGM');

    L.marker([-14.8681, -148.717]).addTo(map)
        .bindPopup('NTGV');

    L.marker([-14.1768, -141.267]).addTo(map)
        .bindPopup('NTGN');

    L.marker([-16.1191, -146.368]).addTo(map)
        .bindPopup('NTKN');

    L.marker([-19.285, -138.772]).addTo(map)
        .bindPopup('NTGW');

    L.marker([-14.8095, -138.813]).addTo(map)
        .bindPopup('NTGP');

    L.marker([-18.2956, -137.017]).addTo(map)
        .bindPopup('NTGQ');

    L.marker([-18.4659, -136.44]).addTo(map)
        .bindPopup('NTGE');

    L.marker([-14.9543, -147.661]).addTo(map)
        .bindPopup('NTTG');

    L.marker([-15.4853, -145.47]).addTo(map)
        .bindPopup('NTKK');

    L.marker([-16.045, -142.477]).addTo(map)
        .bindPopup('NTKO');

    L.marker([-15.1196, -148.231]).addTo(map)
        .bindPopup('NTGC');

    L.marker([-15.8547, -142.268]).addTo(map)
        .bindPopup('NTKM');

    L.marker([-14.7095, -145.246]).addTo(map)
        .bindPopup('NTGT');

    L.marker([-17.3553, -138.445]).addTo(map)
        .bindPopup('NTGO');

    L.marker([-14.4558, -145.025]).addTo(map)
        .bindPopup('NTKR');

    L.marker([-21.8586, -138.82]).addTo(map)
        .bindPopup('NTTX');

    L.marker([-18.78, -138.853]).addTo(map)
        .bindPopup('NTUV');

    L.marker([-14.4368, -146.07]).addTo(map)
        .bindPopup('NTGI');

    L.marker([-20.7897, -138.57]).addTo(map)
        .bindPopup('NTGY');

    L.marker([-17.49, -149.762]).addTo(map)
        .bindPopup('NTTM');

    L.marker([-20.7, -143.047]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.2423, -151.834]).addTo(map)
        .bindPopup('NTTU');

    L.marker([-5.42232, 154.673]).addTo(map)
        .bindPopup('AYBK');

    L.marker([-4.49972, 154.226]).addTo(map)
        .bindPopup('AYIA');

    L.marker([-6.30542, 155.728]).addTo(map)
        .bindPopup('AYIQ');

    L.marker([-10.1956, 148.739]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.0254, 146.8]).addTo(map)
        .bindPopup('nan');

    L.marker([-8.64, 146.508]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.15381, 147.66]).addTo(map)
        .bindPopup('AYEF');

    L.marker([-8.2538, 146.975]).addTo(map)
        .bindPopup('AYER');

    L.marker([-8.54928, 147.086]).addTo(map)
        .bindPopup('AYFA');

    L.marker([-8.1286, 146.872]).addTo(map)
        .bindPopup('AYGF');

    L.marker([-9.13658, 147.598]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.2457, 142.177]).addTo(map)
        .bindPopup('AYHH');

    L.marker([-8.401, 146.277]).addTo(map)
        .bindPopup('nan');

    L.marker([-8.15069, 146.834]).addTo(map)
        .bindPopup('AYKH');

    L.marker([-8.5289, 147.46]).addTo(map)
        .bindPopup('AYJO');

    L.marker([-9.13592, 147.669]).addTo(map)
        .bindPopup('AYKQ');

    L.marker([-8.06511, 147.332]).addTo(map)
        .bindPopup('AYRA');

    L.marker([-8.27161, 147.072]).addTo(map)
        .bindPopup('AYEA');

    L.marker([-8.45072, 147.209]).addTo(map)
        .bindPopup('AYOP');

    L.marker([-8.2799, 146.277]).addTo(map)
        .bindPopup('AYLS');

    L.marker([-8.07139, 146.155]).addTo(map)
        .bindPopup('AYMP');

    L.marker([-9.1908, 147.622]).addTo(map)
        .bindPopup('AYMA');

    L.marker([-8.67436, 147.262]).addTo(map)
        .bindPopup('AYQQ');

    L.marker([-8.817, 146.524]).addTo(map)
        .bindPopup('AYRK');

    L.marker([-8.3038, 147.166]).addTo(map)
        .bindPopup('AYQO');

    L.marker([-8.16972, 146.194]).addTo(map)
        .bindPopup('AYTY');

    L.marker([-8.35667, 146.989]).addTo(map)
        .bindPopup('AYTI');

    L.marker([-8.54583, 147.253]).addTo(map)
        .bindPopup('AYWT');

    L.marker([-6.02429, 144.971]).addTo(map)
        .bindPopup('AYCH');

    L.marker([-6.4921, 144.823]).addTo(map)
        .bindPopup('AYRI');

    L.marker([-6.5427, 155.342]).addTo(map)
        .bindPopup('nan');

    L.marker([-3.3834, 153.281]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.44833, 152.082]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.5609, 154.962]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.52772, 151.573]).addTo(map)
        .bindPopup('AYGL');

    L.marker([-5.7568, 155.15]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.6525, 151.507]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.2655, 155.305]).addTo(map)
        .bindPopup('nan');

    L.marker([-3.1995, 151.908]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.7828, 154.74]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.965, 155.36]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.1431, 154.593]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.52749, 155.712]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.7, 152.75]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.57778, 151.792]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.147, 153.019]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.02343, 153.657]).addTo(map)
        .bindPopup('AYMV');

    L.marker([-6.12, 155.39]).addTo(map)
        .bindPopup('nan');

    L.marker([-3.4075, 154.738]).addTo(map)
        .bindPopup('AYNI');

    L.marker([-4.79473, 151.696]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.57761, 155.771]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.2096, 152.439]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.34046, 152.38]).addTo(map)
        .bindPopup('AYTK');

    L.marker([-6.22056, 155.571]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.5765, 155.049]).addTo(map)
        .bindPopup('AYSH');

    L.marker([-4.358, 151.533]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.52989, 153.054]).addTo(map)
        .bindPopup('AYZI');

    L.marker([-4.98083, 152.01]).addTo(map)
        .bindPopup('AYXO');

    L.marker([-6.2015, 155.063]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.6552, 155.433]).addTo(map)
        .bindPopup('AYVO');

    L.marker([-6.72917, 155.683]).addTo(map)
        .bindPopup('AYUI');

    L.marker([-4.97472, 151.297]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.8603, 155.222]).addTo(map)
        .bindPopup('AYWQ');

    L.marker([-4.05583, 144.074]).addTo(map)
        .bindPopup('nan');

    L.marker([-3.58383, 143.669]).addTo(map)
        .bindPopup('AYWK');

    L.marker([-7.13722, 145.745]).addTo(map)
        .bindPopup('AYAN');

    L.marker([-6.25, 145.967]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.33806, 145.904]).addTo(map)
        .bindPopup('AYAY');

    L.marker([-5.74222, 145.227]).addTo(map)
        .bindPopup('AYDI');

    L.marker([-5.7, 145.367]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.858, 145.705]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.08169, 145.392]).addTo(map)
        .bindPopup('AYGA');

    L.marker([-7.3984, 145.883]).addTo(map)
        .bindPopup('AYOK');

    L.marker([-5.83278, 145.097]).addTo(map)
        .bindPopup('AYLG');

    L.marker([-5.73117, 144.846]).addTo(map)
        .bindPopup('AYOL');

    L.marker([-5.7181, 145.24]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.9736, 145.885]).addTo(map)
        .bindPopup('AYMW');

    L.marker([-6.2412, 145.242]).addTo(map)
        .bindPopup('AYNY');

    L.marker([-6.179, 144.96]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.46667, 145.532]).addTo(map)
        .bindPopup('AYTR');

    L.marker([-7.0214, 145.966]).addTo(map)
        .bindPopup('AYUC');

    L.marker([-5.5276, 145.371]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.79686, 145.892]).addTo(map)
        .bindPopup('AYWO');

    L.marker([-5.6433, 143.895]).addTo(map)
        .bindPopup('AYWD');

    L.marker([-5.1457, 144.731]).addTo(map)
        .bindPopup('AYAO');

    L.marker([-7.89756, 145.396]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.96361, 145.771]).addTo(map)
        .bindPopup('AYKM');

    L.marker([-7.42438, 144.25]).addTo(map)
        .bindPopup('AYKK');

    L.marker([-4.59667, 143.523]).addTo(map)
        .bindPopup('AYQA');

    L.marker([-7.42035, 143.122]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.12583, 144.324]).addTo(map)
        .bindPopup('AYSK');

    L.marker([-7.6217, 142.868]).addTo(map)
        .bindPopup('AYSS');

    L.marker([-7.49686, 144.82]).addTo(map)
        .bindPopup('AYBA');

    L.marker([-6.98944, 145.075]).addTo(map)
        .bindPopup('AYWB');

    L.marker([-4.124, 144.853]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.578, 146.339]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.7403, 145.952]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.4033, 145.206]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.4917, 145.802]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.74708, 145.007]).addTo(map)
        .bindPopup('AYJS');

    L.marker([-4.557, 145.94]).addTo(map)
        .bindPopup('AYKR');

    L.marker([-5.20708, 145.789]).addTo(map)
        .bindPopup('AYMD');

    L.marker([-5.837, 146.453]).addTo(map)
        .bindPopup('AYNA');

    L.marker([-5.62714, 146.463]).addTo(map)
        .bindPopup('AYSD');

    L.marker([-5.8335, 145.934]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.8961, 145.321]).addTo(map)
        .bindPopup('AYWH');

    L.marker([-2.06189, 147.424]).addTo(map)
        .bindPopup('AYMO');

    L.marker([-1.39444, 144.171]).addTo(map)
        .bindPopup('AYYM');

    L.marker([-1.5504, 145.017]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.93083, 149.386]).addTo(map)
        .bindPopup('AYAG');

    L.marker([-10.3115, 150.334]).addTo(map)
        .bindPopup('AYGN');

    L.marker([-8.50582, 151.081]).addTo(map)
        .bindPopup('AYKA');

    L.marker([-10.6892, 152.838]).addTo(map)
        .bindPopup('AYMS');

    L.marker([-9.6701, 150.79]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.30333, 150.319]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.3508, 146.194]).addTo(map)
        .bindPopup('AYAX');

    L.marker([-5.73111, 148.445]).addTo(map)
        .bindPopup('AYUM');

    L.marker([-5.86361, 146.492]).addTo(map)
        .bindPopup('AYBC');

    L.marker([-6.34722, 146.942]).addTo(map)
        .bindPopup('AYBG');

    L.marker([-6.433, 146.825]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.74361, 147.021]).addTo(map)
        .bindPopup('AYBP');

    L.marker([-7.6693, 146.759]).addTo(map)
        .bindPopup('AYBR');

    L.marker([-7.21629, 146.65]).addTo(map)
        .bindPopup('AYBU');

    L.marker([-6.39694, 146.882]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.7243, 147.867]).addTo(map)
        .bindPopup('AYNS');

    L.marker([-6.14472, 147.107]).addTo(map)
        .bindPopup('AYDE');

    L.marker([-6.1546, 146.677]).addTo(map)
        .bindPopup('AYDN');

    L.marker([-6.9179, 146.105]).addTo(map)
        .bindPopup('AYEN');

    L.marker([-6.62175, 147.854]).addTo(map)
        .bindPopup('AYFI');

    L.marker([-6.0532, 145.959]).addTo(map)
        .bindPopup('AYGP');

    L.marker([-7.87563, 147.141]).addTo(map)
        .bindPopup('AYGI');

    L.marker([-7.98071, 147.213]).addTo(map)
        .bindPopup('AYGG');

    L.marker([-6.555, 146.248]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.4223, 146.428]).addTo(map)
        .bindPopup('AYHE');

    L.marker([-7.39299, 146.003]).addTo(map)
        .bindPopup('AYHU');

    L.marker([-6.22663, 147.244]).addTo(map)
        .bindPopup('AYID');

    L.marker([-6.7524, 146.107]).addTo(map)
        .bindPopup('AYII');

    L.marker([-6.15547, 147.191]).addTo(map)
        .bindPopup('AYKB');

    L.marker([-7.53889, 145.905]).addTo(map)
        .bindPopup('AYNB');

    L.marker([-6.2239, 147.215]).addTo(map)
        .bindPopup('AYOE');

    L.marker([-6.275, 146.27]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.64925, 145.957]).addTo(map)
        .bindPopup('AYKD');

    L.marker([-6.01, 147.49]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.83467, 146.533]).addTo(map)
        .bindPopup('AYRO');

    L.marker([-6.3819, 146.986]).addTo(map)
        .bindPopup('AYNM');

    L.marker([-6.362, 146.71]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.6015, 146.181]).addTo(map)
        .bindPopup('AYYR');

    L.marker([-6.09, 147.012]).addTo(map)
        .bindPopup('AYYE');

    L.marker([-7.50025, 146.034]).addTo(map)
        .bindPopup('AYKT');

    L.marker([-5.7204, 148.057]).addTo(map)
        .bindPopup('AYLB');

    L.marker([-6.5698, 146.726]).addTo(map)
        .bindPopup('AYNZ');

    L.marker([-6.38461, 147.369]).addTo(map)
        .bindPopup('AYLT');

    L.marker([-7.22314, 146.227]).addTo(map)
        .bindPopup('AYLN');

    L.marker([-6.3917, 146.343]).addTo(map)
        .bindPopup('AYLP');

    L.marker([-5.3604, 147.018]).addTo(map)
        .bindPopup('AYLX');

    L.marker([-6.3344, 146.646]).addTo(map)
        .bindPopup('AYLO');

    L.marker([-6.345, 147.591]).addTo(map)
        .bindPopup('AYSX');

    L.marker([-6.53222, 147.651]).addTo(map)
        .bindPopup('AYMJ');

    L.marker([-6.47167, 147.441]).addTo(map)
        .bindPopup('AYMI');

    L.marker([-7.21167, 146.019]).addTo(map)
        .bindPopup('AYMC');

    L.marker([-7.74, 147.59]).addTo(map)
        .bindPopup('AYMB');

    L.marker([-6.46675, 147.364]).addTo(map)
        .bindPopup('AYOG');

    L.marker([-7.82778, 147.081]).addTo(map)
        .bindPopup('AYOM');

    L.marker([-6.44514, 147.516]).addTo(map)
        .bindPopup('AYPD');

    L.marker([-7.13444, 146.156]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.7, 147.133]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.07528, 146.811]).addTo(map)
        .bindPopup('AYSP');

    L.marker([-7.75, 146.927]).addTo(map)
        .bindPopup('AYXI');

    L.marker([-5.5965, 147.811]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.28464, 147.581]).addTo(map)
        .bindPopup('AYEW');

    L.marker([-6.13956, 147.279]).addTo(map)
        .bindPopup('AYSW');

    L.marker([-6.0908, 147.596]).addTo(map)
        .bindPopup('AYQS');

    L.marker([-5.9553, 146.559]).addTo(map)
        .bindPopup('AYTP');

    L.marker([-7.6808, 146.55]).addTo(map)
        .bindPopup('AYTZ');

    L.marker([-6.8498, 146.355]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.0695, 146.127]).addTo(map)
        .bindPopup('AYTS');

    L.marker([-7.4463, 146.107]).addTo(map)
        .bindPopup('AYTW');

    L.marker([-6.8519, 146.802]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.96171, 147.198]).addTo(map)
        .bindPopup('AYWS');

    L.marker([-6.1325, 146.468]).addTo(map)
        .bindPopup('AYWC');

    L.marker([-7.34556, 146.719]).addTo(map)
        .bindPopup('AYWU');

    L.marker([-7.548, 146.188]).addTo(map)
        .bindPopup('AYXE');

    L.marker([-6.95222, 146.616]).addTo(map)
        .bindPopup('AYZA');

    L.marker([-9.14222, 148.391]).addTo(map)
        .bindPopup('AYAF');

    L.marker([-8.97917, 148.104]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.88333, 149.483]).addTo(map)
        .bindPopup('nan');

    L.marker([-10.2992, 149.338]).addTo(map)
        .bindPopup('nan');

    L.marker([-10.3432, 149.641]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.10778, 147.667]).addTo(map)
        .bindPopup('AYBD');

    L.marker([-9.13333, 147.533]).addTo(map)
        .bindPopup('nan');

    L.marker([-10.1798, 148.379]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.67, 150.02]).addTo(map)
        .bindPopup('nan');

    L.marker([-8.43194, 147.843]).addTo(map)
        .bindPopup('nan');

    L.marker([-8.17736, 147.809]).addTo(map)
        .bindPopup('nan');

    L.marker([-10.7009, 150.722]).addTo(map)
        .bindPopup('AYDO');

    L.marker([-9.46185, 147.921]).addTo(map)
        .bindPopup('AYDR');

    L.marker([-8.2, 147.85]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.1234, 148.042]).addTo(map)
        .bindPopup('AYEO');

    L.marker([-9.447, 148.763]).addTo(map)
        .bindPopup('AYEB');

    L.marker([-9.87433, 150.954]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.2263, 148.495]).addTo(map)
        .bindPopup('AYGC');

    L.marker([-9.0021, 148.236]).addTo(map)
        .bindPopup('AYGX');

    L.marker([-10.2251, 150.488]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.78333, 148.1]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.5107, 150.525]).addTo(map)
        .bindPopup('nan');

    L.marker([-8.3614, 147.84]).addTo(map)
        .bindPopup('nan');

    L.marker([-8.5284, 147.931]).addTo(map)
        .bindPopup('nan');

    L.marker([-10.0736, 148.218]).addTo(map)
        .bindPopup('nan');

    L.marker([-10.5815, 150.593]).addTo(map)
        .bindPopup('nan');

    L.marker([-10.2908, 149.519]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.47375, 148.329]).addTo(map)
        .bindPopup('AYNJ');

    L.marker([-9.14356, 147.684]).addTo(map)
        .bindPopup('AYNC');

    L.marker([-9.25445, 147.621]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.98417, 149.729]).addTo(map)
        .bindPopup('nan');

    L.marker([-10.5833, 151.083]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.7469, 149.477]).addTo(map)
        .bindPopup('AYPQ');

    L.marker([-9.44338, 147.22]).addTo(map)
        .bindPopup('AYPY');

    L.marker([-9.99, 149.477]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.63292, 148.048]).addTo(map)
        .bindPopup('AYYO');

    L.marker([-9.97111, 149.832]).addTo(map)
        .bindPopup('AYRE');

    L.marker([-10.171, 148.823]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.59306, 148.636]).addTo(map)
        .bindPopup('AYSF');

    L.marker([-10.3833, 149.833]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.07356, 148.389]).addTo(map)
        .bindPopup('AYSG');

    L.marker([-10.5628, 150.691]).addTo(map)
        .bindPopup('AYCS');

    L.marker([-9.032, 147.45]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.1586, 148.069]).addTo(map)
        .bindPopup('AYTF');

    L.marker([-9.5162, 148.559]).addTo(map)
        .bindPopup('AYUE');

    L.marker([-9.0746, 147.574]).addTo(map)
        .bindPopup('nan');

    L.marker([-10.0954, 150.083]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.6425, 149.304]).addTo(map)
        .bindPopup('AYBZ');

    L.marker([-3.6695, 152.438]).addTo(map)
        .bindPopup('AYNX');

    L.marker([-1.65395, 149.976]).addTo(map)
        .bindPopup('AYEE');

    L.marker([-2.5794, 150.808]).addTo(map)
        .bindPopup('AYKV');

    L.marker([-3.04361, 152.629]).addTo(map)
        .bindPopup('AYKY');

    L.marker([-2.81139, 151.991]).addTo(map)
        .bindPopup('AYMZ');

    L.marker([-1.5, 149.667]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.66222, 151.998]).addTo(map)
        .bindPopup('AYSE');

    L.marker([-2.395, 150.236]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.6053, 149.711]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.546, 150.455]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.3375, 149.156]).addTo(map)
        .bindPopup('AYWG');

    L.marker([-9.20153, 148.264]).addTo(map)
        .bindPopup('nan');

    L.marker([-8.88468, 147.731]).addTo(map)
        .bindPopup('AYKO');

    L.marker([-8.80454, 148.309]).addTo(map)
        .bindPopup('AYGR');

    L.marker([-9.07595, 149.32]).addTo(map)
        .bindPopup('AYTU');

    L.marker([-6.39639, 143.854]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.67667, 142.54]).addTo(map)
        .bindPopup('AYPE');

    L.marker([-4.21567, 142.823]).addTo(map)
        .bindPopup('AYAT');

    L.marker([-7.8485, 143.243]).addTo(map)
        .bindPopup('AYBF');

    L.marker([-6.60646, 143.9]).addTo(map)
        .bindPopup('AYEV');

    L.marker([-6.32, 142.489]).addTo(map)
        .bindPopup('AYHB');

    L.marker([-6.9406, 143.059]).addTo(map)
        .bindPopup('AYHO');

    L.marker([-3.69838, 143.058]).addTo(map)
        .bindPopup('AYHF');

    L.marker([-6.23333, 143.483]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.2714, 143.595]).addTo(map)
        .bindPopup('AYOQ');

    L.marker([-5.6952, 142.744]).addTo(map)
        .bindPopup('AYOW');

    L.marker([-5.84061, 143.507]).addTo(map)
        .bindPopup('AYNN');

    L.marker([-9.00653, 142.698]).addTo(map)
        .bindPopup('AYLI');

    L.marker([-6.0682, 142.86]).addTo(map)
        .bindPopup('AYOO');

    L.marker([-5.3883, 142.498]).addTo(map)
        .bindPopup('AYKG');

    L.marker([-8.5336, 142.505]).addTo(map)
        .bindPopup('AYDL');

    L.marker([-8.63018, 142.824]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.13508, 143.276]).addTo(map)
        .bindPopup('AYKU');

    L.marker([-7.97701, 142.824]).addTo(map)
        .bindPopup('AYKW');

    L.marker([-8.6883, 143.618]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.4923, 143.488]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.14774, 143.657]).addTo(map)
        .bindPopup('AYMN');

    L.marker([-5.979, 143.359]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.979, 143.169]).addTo(map)
        .bindPopup('AYPO');

    L.marker([-8.70917, 142.65]).addTo(map)
        .bindPopup('AYMQ');

    L.marker([-5.13, 143.483]).addTo(map)
        .bindPopup('AYRM');

    L.marker([-6.36333, 143.238]).addTo(map)
        .bindPopup('AYMR');

    L.marker([-6.1454, 143.453]).addTo(map)
        .bindPopup('nan');

    L.marker([-8.05, 142.933]).addTo(map)
        .bindPopup('AYBM');

    L.marker([-5.3725, 142.976]).addTo(map)
        .bindPopup('AYPB');

    L.marker([-6.49917, 143.51]).addTo(map)
        .bindPopup('AYPJ');

    L.marker([-5.8429, 142.828]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.4792, 143.124]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.0165, 143.133]).addTo(map)
        .bindPopup('AYVM');

    L.marker([-5.845, 142.948]).addTo(map)
        .bindPopup('AYTA');

    L.marker([-8.5411, 142.65]).addTo(map)
        .bindPopup('AYUR');

    L.marker([-6.9523, 142.656]).addTo(map)
        .bindPopup('AYWF');

    L.marker([-8.2836, 142.87]).addTo(map)
        .bindPopup('AYIW');

    L.marker([-6.00972, 150.369]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.33056, 151.008]).addTo(map)
        .bindPopup('AYBL');

    L.marker([-4.88333, 149.133]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.45896, 148.432]).addTo(map)
        .bindPopup('AYCG');

    L.marker([-6.1518, 150.626]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.22592, 152.944]).addTo(map)
        .bindPopup('AYGJ');

    L.marker([-6.27111, 150.331]).addTo(map)
        .bindPopup('AYGT');

    L.marker([-5.46217, 150.405]).addTo(map)
        .bindPopup('AYHK');

    L.marker([-5.5536, 149.19]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.19217, 149.548]).addTo(map)
        .bindPopup('AYKC');

    L.marker([-8.6285, 151.327]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.53194, 149.734]).addTo(map)
        .bindPopup('AYLL');

    L.marker([-6.1364, 149.118]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.63333, 151.383]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.96453, 151.162]).addTo(map)
        .bindPopup('AYSL');

    L.marker([-5.9701, 148.854]).addTo(map)
        .bindPopup('AYSV');

    L.marker([-11.3311, 153.203]).addTo(map)
        .bindPopup('AYTG');

    L.marker([-5.2726, 150.009]).addTo(map)
        .bindPopup('AYVL');

    L.marker([-6.0178, 150.956]).addTo(map)
        .bindPopup('AYUZ');

    L.marker([-9.3376, 150.509]).addTo(map)
        .bindPopup('AYWJ');

    L.marker([-4.68952, 149.44]).addTo(map)
        .bindPopup('AYIX');

    L.marker([-6.0491, 149.337]).addTo(map)
        .bindPopup('nan');

    L.marker([-3.19819, 142.431]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.6926, 141.303]).addTo(map)
        .bindPopup('AYVN');

    L.marker([-4.6, 143.5]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.90417, 144.636]).addTo(map)
        .bindPopup('nan');

    L.marker([-1.46056, 143.065]).addTo(map)
        .bindPopup('AYND');

    L.marker([-6.37317, 144.637]).addTo(map)
        .bindPopup('AYBO');

    L.marker([-5.807, 144.623]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.80662, 144.715]).addTo(map)
        .bindPopup('AYCB');

    L.marker([-6.56778, 144.703]).addTo(map)
        .bindPopup('AYNE');

    L.marker([-5.82679, 144.296]).addTo(map)
        .bindPopup('AYMH');

    L.marker([-5.4875, 144.607]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.2903, 144.707]).addTo(map)
        .bindPopup('AYKJ');

    L.marker([-5.38167, 143.925]).addTo(map)
        .bindPopup('AYAQ');

    L.marker([-4.6204, 143.452]).addTo(map)
        .bindPopup('AYDK');

    L.marker([-5.86667, 144.667]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.386, 144.108]).addTo(map)
        .bindPopup('AYPG');

    L.marker([-5.33444, 144.257]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.27861, 144.545]).addTo(map)
        .bindPopup('AYSJ');

    L.marker([-3.8821, 143.673]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.5766, 144.651]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.19663, 143.519]).addTo(map)
        .bindPopup('AYTV');

    L.marker([-4.0949, 143.384]).addTo(map)
        .bindPopup('AYYL');

    L.marker([-6.23417, 144.665]).addTo(map)
        .bindPopup('AYAE');

    L.marker([-1.73611, 142.837]).addTo(map)
        .bindPopup('AYVW');

    L.marker([-5.10972, 143.918]).addTo(map)
        .bindPopup('AYYK');

    L.marker([-6.06556, 141.095]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.34278, 141.268]).addTo(map)
        .bindPopup('AYAK');

    L.marker([-3.5605, 142.217]).addTo(map)
        .bindPopup('AYGU');

    L.marker([-4.10111, 141.67]).addTo(map)
        .bindPopup('AYAA');

    L.marker([-3.586, 141.214]).addTo(map)
        .bindPopup('AYAM');

    L.marker([-3.14361, 142.347]).addTo(map)
        .bindPopup('AYAI');

    L.marker([-8.00611, 142.748]).addTo(map)
        .bindPopup('AYAW');

    L.marker([-5.28611, 142.033]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.23726, 141.106]).addTo(map)
        .bindPopup('AYET');

    L.marker([-5.52639, 141.745]).addTo(map)
        .bindPopup('AYBQ');

    L.marker([-8.85806, 141.259]).addTo(map)
        .bindPopup('AYBH');

    L.marker([-5.3633, 141.655]).addTo(map)
        .bindPopup('nan');

    L.marker([-3.02167, 141.165]).addTo(map)
        .bindPopup('AYBI');

    L.marker([-9.08676, 143.208]).addTo(map)
        .bindPopup('AYDU');

    L.marker([-6.30861, 141.906]).addTo(map)
        .bindPopup('AYDB');

    L.marker([56.7417, 23.8911]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.0412, 141.678]).addTo(map)
        .bindPopup('AYEL');

    L.marker([-4.61047, 141.96]).addTo(map)
        .bindPopup('AYFR');

    L.marker([-5.208, 141.699]).addTo(map)
        .bindPopup('AYFE');

    L.marker([-6.3933, 142.441]).addTo(map)
        .bindPopup('AYFU');

    L.marker([-6.1028, 141.739]).addTo(map)
        .bindPopup('AYGS');

    L.marker([-5.2808, 141.541]).addTo(map)
        .bindPopup('AYUP');

    L.marker([-3.58317, 141.589]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.28086, 142.421]).addTo(map)
        .bindPopup('AYML');

    L.marker([-3.90224, 141.171]).addTo(map)
        .bindPopup('AYGV');

    L.marker([-3.328, 141.157]).addTo(map)
        .bindPopup('AYIO');

    L.marker([-3.60056, 141.052]).addTo(map)
        .bindPopup('AYTO');

    L.marker([-5.671, 141.03]).addTo(map)
        .bindPopup('AYIM');

    L.marker([-4.62806, 141.094]).addTo(map)
        .bindPopup('AYYP');

    L.marker([-5.37236, 141.624]).addTo(map)
        .bindPopup('AYUY');

    L.marker([-3.47684, 142.041]).addTo(map)
        .bindPopup('AYLU');

    L.marker([-7.00992, 141.494]).addTo(map)
        .bindPopup('nan');

    L.marker([-4.85594, 141.22]).addTo(map)
        .bindPopup('nan');

    L.marker([-2.8337, 141.626]).addTo(map)
        .bindPopup('nan');

    L.marker([-8.71411, 141.644]).addTo(map)
        .bindPopup('AYEH');

    L.marker([-4.90306, 141.621]).addTo(map)
        .bindPopup('AYIY');

    L.marker([-4.3615, 141.785]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.66667, 141.117]).addTo(map)
        .bindPopup('nan');

    L.marker([-6.294, 142.234]).addTo(map)
        .bindPopup('ATNR');

    L.marker([-7.59062, 141.324]).addTo(map)
        .bindPopup('AYOB');

    L.marker([-5.2261, 142.226]).addTo(map)
        .bindPopup('AYOJ');

    L.marker([-5.55667, 141.033]).addTo(map)
        .bindPopup('AYOF');

    L.marker([-5.38972, 141.515]).addTo(map)
        .bindPopup('AYOV');

    L.marker([-2.91556, 141.297]).addTo(map)
        .bindPopup('AYZS');

    L.marker([-7.0226, 141.561]).addTo(map)
        .bindPopup('AYPC');

    L.marker([-5.89722, 141.272]).addTo(map)
        .bindPopup('AYRG');

    L.marker([-5.315, 141.752]).addTo(map)
        .bindPopup('AYSO');

    L.marker([-6.10444, 142.278]).addTo(map)
        .bindPopup('AYSA');

    L.marker([-2.99944, 142.044]).addTo(map)
        .bindPopup('AYZN');

    L.marker([-8.0466, 141.722]).addTo(map)
        .bindPopup('AYSU');

    L.marker([-5.27861, 141.226]).addTo(map)
        .bindPopup('AYTB');

    L.marker([-5.1173, 141.419]).addTo(map)
        .bindPopup('AYTH');

    L.marker([-5.12608, 141.642]).addTo(map)
        .bindPopup('AYTE');

    L.marker([-5.24367, 142.165]).addTo(map)
        .bindPopup('AYTN');

    L.marker([-4.7748, 141.013]).addTo(map)
        .bindPopup('AYQL');

    L.marker([-5.614, 141.042]).addTo(map)
        .bindPopup('AYTT');

    L.marker([-3.67665, 142.484]).addTo(map)
        .bindPopup('AYNU');

    L.marker([-6.12571, 141.282]).addTo(map)
        .bindPopup('AYKI');

    L.marker([-8.6184, 141.138]).addTo(map)
        .bindPopup('AYXW');

    L.marker([-8.78822, 142.882]).addTo(map)
        .bindPopup('AYXP');

    L.marker([-3.88399, 141.792]).addTo(map)
        .bindPopup('AYED');

    L.marker([8.9515, 125.479]).addTo(map)
        .bindPopup('RPME');

    L.marker([11.6794, 122.376]).addTo(map)
        .bindPopup('RPVK');

    L.marker([11.9245, 121.954]).addTo(map)
        .bindPopup('RPVE');

    L.marker([13.1575, 123.735]).addTo(map)
        .bindPopup('RPLP');

    L.marker([10.766, 121.933]).addTo(map)
        .bindPopup('RPVS');

    L.marker([15.7293, 121.5]).addTo(map)
        .bindPopup('RPUR');

    L.marker([16.1941, 122.065]).addTo(map)
        .bindPopup('nan');

    L.marker([14.7944, 120.271]).addTo(map)
        .bindPopup('RPLB');

    L.marker([20.4513, 121.98]).addTo(map)
        .bindPopup('RPUO');

    L.marker([16.3751, 120.62]).addTo(map)
        .bindPopup('RPUB');

    L.marker([9.66544, 123.854]).addTo(map)
        .bindPopup('RPVT');

    L.marker([7.7538, 125.033]).addTo(map)
        .bindPopup('nan');

    L.marker([18.1811, 121.745]).addTo(map)
        .bindPopup('RPLH');

    L.marker([17.6434, 121.733]).addTo(map)
        .bindPopup('RPUT');

    L.marker([14.1292, 122.98]).addTo(map)
        .bindPopup('RPUD');

    L.marker([13.5849, 123.27]).addTo(map)
        .bindPopup('RPUN');

    L.marker([9.25352, 124.707]).addTo(map)
        .bindPopup('RPMH');

    L.marker([11.5977, 122.752]).addTo(map)
        .bindPopup('RPVR');

    L.marker([13.5764, 124.206]).addTo(map)
        .bindPopup('RPUV');

    L.marker([14.4954, 120.904]).addTo(map)
        .bindPopup('RPLS');

    L.marker([10.3075, 123.979]).addTo(map)
        .bindPopup('RPVM');

    L.marker([6.94909, 126.274]).addTo(map)
        .bindPopup('RPMQ');

    L.marker([7.12552, 125.646]).addTo(map)
        .bindPopup('RPMD');

    L.marker([16.4458, 122.207]).addTo(map)
        .bindPopup('nan');

    L.marker([18.1781, 120.532]).addTo(map)
        .bindPopup('RPLI');

    L.marker([11.4595, 123.251]).addTo(map)
        .bindPopup('RPSG');

    L.marker([10.833, 122.493]).addTo(map)
        .bindPopup('RPVI');

    L.marker([16.9299, 121.753]).addTo(map)
        .bindPopup('RPUY');

    L.marker([16.5956, 120.303]).addTo(map)
        .bindPopup('RPUS');

    L.marker([8.13049, 124.215]).addTo(map)
        .bindPopup('RPMI');

    L.marker([11.058, 124.565]).addTo(map)
        .bindPopup('RPVO');

    L.marker([11.228, 125.028]).addTo(map)
        .bindPopup('RPVA');

    L.marker([7.16524, 124.21]).addTo(map)
        .bindPopup('RPMC');

    L.marker([7.61722, 124.059]).addTo(map)
        .bindPopup('RPMM');

    L.marker([13.361, 121.826]).addTo(map)
        .bindPopup('RPUW');

    L.marker([12.3697, 123.63]).addTo(map)
        .bindPopup('RPVJ');

    L.marker([13.8554, 120.105]).addTo(map)
        .bindPopup('RPLU');

    L.marker([13.2081, 120.605]).addTo(map)
        .bindPopup('RPUM');

    L.marker([12.3615, 121.047]).addTo(map)
        .bindPopup('RPUH');

    L.marker([8.6122, 124.456]).addTo(map)
        .bindPopup('RPMY');

    L.marker([8.17851, 123.842]).addTo(map)
        .bindPopup('RPMO');

    L.marker([14.5086, 121.02]).addTo(map)
        .bindPopup('RPLL');

    L.marker([6.36682, 124.751]).addTo(map)
        .bindPopup('RPMA');

    L.marker([10.7764, 123.015]).addTo(map)
        .bindPopup('RPVB');

    L.marker([9.33371, 123.3]).addTo(map)
        .bindPopup('RPVD');

    L.marker([12.5024, 124.636]).addTo(map)
        .bindPopup('RPVF');

    L.marker([11.8553, 119.938]).addTo(map)
        .bindPopup('nan');

    L.marker([10.8581, 121.069]).addTo(map)
        .bindPopup('RPLO');

    L.marker([11.2024, 119.416]).addTo(map)
        .bindPopup('RPEN');

    L.marker([9.74212, 118.759]).addTo(map)
        .bindPopup('RPVP');

    L.marker([10.8187, 119.508]).addTo(map)
        .bindPopup('RPSD');

    L.marker([10.525, 119.274]).addTo(map)
        .bindPopup('RPSV');

    L.marker([12.1215, 120.1]).addTo(map)
        .bindPopup('RPVV');

    L.marker([12.1211, 120.099]).addTo(map)
        .bindPopup('nan');

    L.marker([15.186, 120.56]).addTo(map)
        .bindPopup('RPLC');

    L.marker([14.4194, 122.039]).addTo(map)
        .bindPopup('RPLE');

    L.marker([12.311, 122.085]).addTo(map)
        .bindPopup('RPVU');

    L.marker([12.0727, 124.545]).addTo(map)
        .bindPopup('RPVC');

    L.marker([12.0721, 124.546]).addTo(map)
        .bindPopup('nan');

    L.marker([6.058, 125.096]).addTo(map)
        .bindPopup('RPMR');

    L.marker([6.6739, 124.058]).addTo(map)
        .bindPopup('nan');

    L.marker([6.05367, 121.011]).addTo(map)
        .bindPopup('RPMJ');

    L.marker([5.558, 120.833]).addTo(map)
        .bindPopup('nan');

    L.marker([9.8591, 126.014]).addTo(map)
        .bindPopup('RPNS');

    L.marker([9.75584, 125.481]).addTo(map)
        .bindPopup('RPMS');

    L.marker([7.61194, 126.569]).addTo(map)
        .bindPopup('nan');

    L.marker([8.19595, 126.322]).addTo(map)
        .bindPopup('RPMF');

    L.marker([9.07211, 126.171]).addTo(map)
        .bindPopup('RPMW');

    L.marker([7.014, 118.496]).addTo(map)
        .bindPopup('RPMU');

    L.marker([5.04699, 119.743]).addTo(map)
        .bindPopup('RPMN');

    L.marker([7.78556, 122.602]).addTo(map)
        .bindPopup('RPMV');

    L.marker([8.60198, 123.342]).addTo(map)
        .bindPopup('RPMG');

    L.marker([7.71048, 122.161]).addTo(map)
        .bindPopup('PRNO');

    L.marker([7.83073, 123.461]).addTo(map)
        .bindPopup('RPMP');

    L.marker([6.92242, 122.06]).addTo(map)
        .bindPopup('RPMZ');

    L.marker([34.339, 73.5086]).addTo(map)
        .bindPopup('OPMF');

    L.marker([33.8497, 73.7981]).addTo(map)
        .bindPopup('OPRT');

    L.marker([33.0501, 73.6384]).addTo(map)
        .bindPopup('OPMA');

    L.marker([28.8783, 64.3998]).addTo(map)
        .bindPopup('OPDB');

    L.marker([25.2333, 62.3295]).addTo(map)
        .bindPopup('OPGD');

    L.marker([25.0678, 61.8054]).addTo(map)
        .bindPopup('OPJI');

    L.marker([27.7906, 66.6473]).addTo(map)
        .bindPopup('OPKH');

    L.marker([30.3555, 68.6135]).addTo(map)
        .bindPopup('OPLL');

    L.marker([29.539, 66.0233]).addTo(map)
        .bindPopup('nan');

    L.marker([25.2747, 64.586]).addTo(map)
        .bindPopup('OPOR');

    L.marker([26.9545, 64.1325]).addTo(map)
        .bindPopup('OPPG');

    L.marker([25.2905, 63.3451]).addTo(map)
        .bindPopup('OPPI');

    L.marker([31.3584, 69.4636]).addTo(map)
        .bindPopup('OPZB');

    L.marker([29.0469, 62.1968]).addTo(map)
        .bindPopup('nan');

    L.marker([29.5712, 67.8479]).addTo(map)
        .bindPopup('OPSB');

    L.marker([28.6451, 69.1769]).addTo(map)
        .bindPopup('OPSU');

    L.marker([28.9642, 61.5954]).addTo(map)
        .bindPopup('nan');

    L.marker([25.9864, 63.0302]).addTo(map)
        .bindPopup('OPTU');

    L.marker([30.2514, 66.9378]).addTo(map)
        .bindPopup('OPQT');

    L.marker([35.4267, 74.0817]).addTo(map)
        .bindPopup('OPCL');

    L.marker([35.9188, 74.3336]).addTo(map)
        .bindPopup('OPGT');

    L.marker([35.3355, 75.536]).addTo(map)
        .bindPopup('OPSD');

    L.marker([33.5607, 72.8516]).addTo(map)
        .bindPopup('OPIS');

    L.marker([32.9729, 70.5279]).addTo(map)
        .bindPopup('OPBN');

    L.marker([35.8866, 71.8006]).addTo(map)
        .bindPopup('OPCH');

    L.marker([31.9094, 70.8966]).addTo(map)
        .bindPopup('OPDI');

    L.marker([33.57, 71.44]).addTo(map)
        .bindPopup('OPKT');

    L.marker([33.9021, 70.0716]).addTo(map)
        .bindPopup('OPPC');

    L.marker([33.9939, 71.5146]).addTo(map)
        .bindPopup('OPPS');

    L.marker([34.8136, 72.3528]).addTo(map)
        .bindPopup('OPSS');

    L.marker([33.9861, 72.6114]).addTo(map)
        .bindPopup('OPTA');

    L.marker([32.3047, 69.5704]).addTo(map)
        .bindPopup('OPWN');

    L.marker([33.8691, 72.4009]).addTo(map)
        .bindPopup('nan');

    L.marker([29.3481, 71.718]).addTo(map)
        .bindPopup('OPBW');

    L.marker([32.0561, 72.9484]).addTo(map)
        .bindPopup('nan');

    L.marker([29.961, 70.4859]).addTo(map)
        .bindPopup('OPDG');

    L.marker([32.6031, 74.0771]).addTo(map)
        .bindPopup('nan');

    L.marker([31.5216, 74.4036]).addTo(map)
        .bindPopup('OPLA');

    L.marker([31.365, 72.9948]).addTo(map)
        .bindPopup('OPFA');

    L.marker([30.2032, 71.4191]).addTo(map)
        .bindPopup('OPMT');

    L.marker([32.5631, 71.5707]).addTo(map)
        .bindPopup('OPMI');

    L.marker([28.3839, 70.2796]).addTo(map)
        .bindPopup('OPRK');

    L.marker([32.0486, 72.665]).addTo(map)
        .bindPopup('OPSR');

    L.marker([32.5356, 74.3639]).addTo(map)
        .bindPopup('OPST');

    L.marker([31.8894, 72.3917]).addTo(map)
        .bindPopup('OPSW');

    L.marker([24.8415, 68.8384]).addTo(map)
        .bindPopup('OPTH');

    L.marker([26.7408, 67.6666]).addTo(map)
        .bindPopup('OPDD');

    L.marker([25.3181, 68.3661]).addTo(map)
        .bindPopup('OPKD');

    L.marker([28.2842, 68.4497]).addTo(map)
        .bindPopup('OPJA');

    L.marker([27.1667, 69.3167]).addTo(map)
        .bindPopup('nan');

    L.marker([24.9065, 67.1608]).addTo(map)
        .bindPopup('OPKC');

    L.marker([27.3352, 68.1431]).addTo(map)
        .bindPopup('OPMJ');

    L.marker([25.6828, 69.0728]).addTo(map)
        .bindPopup('OPMP');

    L.marker([26.9662, 68.8781]).addTo(map)
        .bindPopup('OPSW');

    L.marker([27.722, 68.7917]).addTo(map)
        .bindPopup('OPSK');

    L.marker([26.4731, 67.7172]).addTo(map)
        .bindPopup('OPSN');

    L.marker([26.2194, 68.3901]).addTo(map)
        .bindPopup('OPNH');

    L.marker([26.7109, 67.6673]).addTo(map)
        .bindPopup('nan');

    L.marker([51.1027, 16.8858]).addTo(map)
        .bindPopup('EPWR');

    L.marker([53.0968, 17.9777]).addTo(map)
        .bindPopup('EPBY');

    L.marker([51.7219, 19.3981]).addTo(map)
        .bindPopup('EPLL');

    L.marker([52.0008, 23.1325]).addTo(map)
        .bindPopup('EPBP');

    L.marker([51.2403, 22.7136]).addTo(map)
        .bindPopup('EPLB');

    L.marker([52.1385, 15.7986]).addTo(map)
        .bindPopup('EPZG');

    L.marker([50.0777, 19.7848]).addTo(map)
        .bindPopup('EPKK');

    L.marker([51.3892, 21.2133]).addTo(map)
        .bindPopup('EPRA');

    L.marker([52.1657, 20.9671]).addTo(map)
        .bindPopup('EPWA');

    L.marker([52.4511, 20.6518]).addTo(map)
        .bindPopup('EPMO');

    L.marker([50.11, 22.019]).addTo(map)
        .bindPopup('EPRZ');

    L.marker([54.3776, 18.4662]).addTo(map)
        .bindPopup('EPGD');

    L.marker([50.885, 19.2047]).addTo(map)
        .bindPopup('EPRU');

    L.marker([50.4743, 19.08]).addTo(map)
        .bindPopup('EPKT');

    L.marker([53.4819, 20.9377]).addTo(map)
        .bindPopup('EPSY');

    L.marker([52.421, 16.8263]).addTo(map)
        .bindPopup('EPPO');

    L.marker([54.0425, 16.2656]).addTo(map)
        .bindPopup('EPKZ');

    L.marker([53.5847, 14.9022]).addTo(map)
        .bindPopup('EPSC');

    L.marker([46.7629, -56.1731]).addTo(map)
        .bindPopup('LFVP');

    L.marker([47.0955, -56.3803]).addTo(map)
        .bindPopup('LFVM');

    L.marker([18.4394, -66.0018]).addTo(map)
        .bindPopup('TJSJ');

    L.marker([18.0083, -66.563]).addTo(map)
        .bindPopup('TJPS');

    L.marker([18.4568, -66.0981]).addTo(map)
        .bindPopup('TJIG');

    L.marker([31.2464, 34.2761]).addTo(map)
        .bindPopup('LVGZ');

    L.marker([38.0789, -7.9324]).addTo(map)
        .bindPopup('LPBJ');

    L.marker([41.5871, -8.44514]).addTo(map)
        .bindPopup('LPBR');

    L.marker([41.8578, -6.70713]).addTo(map)
        .bindPopup('LPBG');

    L.marker([40.1576, -8.46984]).addTo(map)
        .bindPopup('LPCO');

    L.marker([37.0144, -7.96591]).addTo(map)
        .bindPopup('LPFR');

    L.marker([37.1493, -8.58396]).addTo(map)
        .bindPopup('LPPM');

    L.marker([38.725, -9.35523]).addTo(map)
        .bindPopup('LPCS');

    L.marker([38.7813, -9.13592]).addTo(map)
        .bindPopup('LPPT');

    L.marker([37.9417, -8.8173]).addTo(map)
        .bindPopup('LPSI');

    L.marker([41.2356, -8.67806]).addTo(map)
        .bindPopup('LPPR');

    L.marker([32.6979, -16.7745]).addTo(map)
        .bindPopup('LPMA');

    L.marker([33.0734, -16.35]).addTo(map)
        .bindPopup('LPPS');

    L.marker([39.6715, -31.1136]).addTo(map)
        .bindPopup('LPCR');

    L.marker([39.4553, -31.1314]).addTo(map)
        .bindPopup('LPFL');

    L.marker([39.0922, -28.0298]).addTo(map)
        .bindPopup('LPGR');

    L.marker([38.5199, -28.7159]).addTo(map)
        .bindPopup('LPHR');

    L.marker([37.7412, -25.6979]).addTo(map)
        .bindPopup('LPPD');

    L.marker([38.5543, -28.4413]).addTo(map)
        .bindPopup('LPPI');

    L.marker([38.6655, -28.1758]).addTo(map)
        .bindPopup('LPSJ');

    L.marker([36.9714, -25.1706]).addTo(map)
        .bindPopup('LPAZ');

    L.marker([38.7618, -27.0908]).addTo(map)
        .bindPopup('LPLA');

    L.marker([41.7224, -7.46306]).addTo(map)
        .bindPopup('LPCH');

    L.marker([41.2743, -7.72047]).addTo(map)
        .bindPopup('LPVR');

    L.marker([40.7255, -7.88899]).addTo(map)
        .bindPopup('LPVZ');

    L.marker([7.36731, 134.544]).addTo(map)
        .bindPopup('PTRO');

    L.marker([-21.0452, -57.8825]).addTo(map)
        .bindPopup('SGOL');

    L.marker([-22.295, -57.8663]).addTo(map)
        .bindPopup('nan');

    L.marker([-25.4545, -54.8427]).addTo(map)
        .bindPopup('SGES');

    L.marker([-22.64, -55.83]).addTo(map)
        .bindPopup('SGPJ');

    L.marker([-22.05, -60.62]).addTo(map)
        .bindPopup('SGME');

    L.marker([-22.3605, -60.0536]).addTo(map)
        .bindPopup('SGFI');

    L.marker([-25.24, -57.52]).addTo(map)
        .bindPopup('SGAS');

    L.marker([-20.2246, -58.1792]).addTo(map)
        .bindPopup('SGBN');

    L.marker([-23.4424, -57.4273]).addTo(map)
        .bindPopup('SGCO');

    L.marker([-20.9046, -57.9271]).addTo(map)
        .bindPopup('nan');

    L.marker([-22.1591, -57.9426]).addTo(map)
        .bindPopup('nan');

    L.marker([-27.2274, -55.8375]).addTo(map)
        .bindPopup('SGEN');

    L.marker([-27.3706, -56.8541]).addTo(map)
        .bindPopup('SGAY');

    L.marker([-26.8812, -58.318]).addTo(map)
        .bindPopup('SGPI');

    L.marker([25.2611, 51.5651]).addTo(map)
        .bindPopup('OTBD');

    L.marker([25.2731, 51.6081]).addTo(map)
        .bindPopup('OTHH');

    L.marker([25.1173, 51.315]).addTo(map)
        .bindPopup('OTBH');

    L.marker([-20.8871, 55.5103]).addTo(map)
        .bindPopup('FMEE');

    L.marker([-21.3209, 55.425]).addTo(map)
        .bindPopup('FMEP');

    L.marker([46.1766, 21.262]).addTo(map)
        .bindPopup('LRAR');

    L.marker([46.5219, 26.9103]).addTo(map)
        .bindPopup('LRBC');

    L.marker([47.0253, 21.9025]).addTo(map)
        .bindPopup('LROD');

    L.marker([45.42, 22.2533]).addTo(map)
        .bindPopup('LRCS');

    L.marker([46.7852, 23.6862]).addTo(map)
        .bindPopup('LRCL');

    L.marker([44.3622, 28.4883]).addTo(map)
        .bindPopup('LRCK');

    L.marker([44.3181, 23.8886]).addTo(map)
        .bindPopup('LRCV');

    L.marker([47.1785, 27.6206]).addTo(map)
        .bindPopup('LRIA');

    L.marker([44.5711, 26.085]).addTo(map)
        .bindPopup('LROP');

    L.marker([47.6606, 23.4673]).addTo(map)
        .bindPopup('LRBM');

    L.marker([46.4677, 24.4125]).addTo(map)
        .bindPopup('LRTM');

    L.marker([47.7033, 22.8857]).addTo(map)
        .bindPopup('LRSM');

    L.marker([45.7856, 24.0913]).addTo(map)
        .bindPopup('LRSB');

    L.marker([47.6875, 26.3541]).addTo(map)
        .bindPopup('LRSV');

    L.marker([45.8099, 21.3379]).addTo(map)
        .bindPopup('LRTR');

    L.marker([45.0625, 28.7143]).addTo(map)
        .bindPopup('LRTC');

    L.marker([44.8184, 20.3091]).addTo(map)
        .bindPopup('LYBE');

    L.marker([44.9353, 20.2575]).addTo(map)
        .bindPopup('LYBT');

    L.marker([43.3373, 21.8537]).addTo(map)
        .bindPopup('LYNI');

    L.marker([43.898, 19.6972]).addTo(map)
        .bindPopup('LYUZ');

    L.marker([51.9667, 85.8333]).addTo(map)
        .bindPopup('UNBG');

    L.marker([53.3638, 83.5385]).addTo(map)
        .bindPopup('UNBB');

    L.marker([50.4254, 127.412]).addTo(map)
        .bindPopup('UHBB');

    L.marker([53.4733, 125.795]).addTo(map)
        .bindPopup('UHBI');

    L.marker([55.2842, 124.779]).addTo(map)
        .bindPopup('UHBW');

    L.marker([64.6003, 40.7167]).addTo(map)
        .bindPopup('ULAA');

    L.marker([65.03, 35.7333]).addTo(map)
        .bindPopup('ULAS');

    L.marker([61.2358, 46.6975]).addTo(map)
        .bindPopup('ULKK');

    L.marker([64.896, 45.723]).addTo(map)
        .bindPopup('ULAL');

    L.marker([46.2833, 48.0063]).addTo(map)
        .bindPopup('URWA');

    L.marker([53.9381, 58.34]).addTo(map)
        .bindPopup('UWUB');

    L.marker([56.1069, 54.3472]).addTo(map)
        .bindPopup('UWUF');

    L.marker([54.44, 53.3883]).addTo(map)
        .bindPopup('UWUK');

    L.marker([54.5575, 55.8744]).addTo(map)
        .bindPopup('UWUU');

    L.marker([50.6438, 36.5901]).addTo(map)
        .bindPopup('UUOB');

    L.marker([53.2142, 34.1764]).addTo(map)
        .bindPopup('UUBP');

    L.marker([59.8764, 111.044]).addTo(map)
        .bindPopup('UECT');

    L.marker([51.8078, 107.438]).addTo(map)
        .bindPopup('UIUU');

    L.marker([43.3883, 45.6986]).addTo(map)
        .bindPopup('URMG');

    L.marker([55.3058, 61.5033]).addTo(map)
        .bindPopup('USCC');

    L.marker([53.3931, 58.7557]).addTo(map)
        .bindPopup('USCM');

    L.marker([64.7349, 177.741]).addTo(map)
        .bindPopup('UHMA');

    L.marker([67.845, 166.14]).addTo(map)
        .bindPopup('UHMK');

    L.marker([64.667, 170.417]).addTo(map)
        .bindPopup('UHMO');

    L.marker([64.3781, -173.243]).addTo(map)
        .bindPopup('UHMD');

    L.marker([69.7833, 170.597]).addTo(map)
        .bindPopup('UHMP');

    L.marker([56.0903, 47.3473]).addTo(map)
        .bindPopup('UWKS');

    L.marker([42.8168, 47.6523]).addTo(map)
        .bindPopup('URML');

    L.marker([43.3223, 45.0126]).addTo(map)
        .bindPopup('URMS');

    L.marker([56.3706, 101.698]).addTo(map)
        .bindPopup('UIBB');

    L.marker([61.275, 108.03]).addTo(map)
        .bindPopup('UIKE');

    L.marker([52.268, 104.389]).addTo(map)
        .bindPopup('UIII');

    L.marker([56.9394, 40.9408]).addTo(map)
        .bindPopup('UUBI');

    L.marker([57.773, 108.064]).addTo(map)
        .bindPopup('UIKK');

    L.marker([57.8661, 114.243]).addTo(map)
        .bindPopup('UIKB');

    L.marker([58.1361, 102.565]).addTo(map)
        .bindPopup('UIBS');

    L.marker([56.8567, 105.73]).addTo(map)
        .bindPopup('UITT');

    L.marker([43.5129, 43.6366]).addTo(map)
        .bindPopup('URMN');

    L.marker([54.89, 20.5926]).addTo(map)
        .bindPopup('UMKK');

    L.marker([46.3739, 44.3309]).addTo(map)
        .bindPopup('URWI');

    L.marker([54.55, 36.3667]).addTo(map)
        .bindPopup('UUBC');

    L.marker([53.1679, 158.454]).addTo(map)
        .bindPopup('UHPP');

    L.marker([61.8852, 34.1547]).addTo(map)
        .bindPopup('ULPB');

    L.marker([55.2701, 86.1072]).addTo(map)
        .bindPopup('UNEE');

    L.marker([53.8114, 86.8772]).addTo(map)
        .bindPopup('UNWW');

    L.marker([52.38, 140.448]).addTo(map)
        .bindPopup('UHNB');

    L.marker([48.927, 140.034]).addTo(map)
        .bindPopup('UHKM');

    L.marker([48.528, 135.188]).addTo(map)
        .bindPopup('UHHH');

    L.marker([50.409, 136.934]).addTo(map)
        .bindPopup('UHKK');

    L.marker([53.155, 140.65]).addTo(map)
        .bindPopup('UHNN');

    L.marker([59.4101, 143.057]).addTo(map)
        .bindPopup('UHOO');

    L.marker([53.74, 91.385]).addTo(map)
        .bindPopup('UNAA');

    L.marker([63.6869, 66.6986]).addTo(map)
        .bindPopup('USHQ');

    L.marker([63.921, 65.0305]).addTo(map)
        .bindPopup('nan');

    L.marker([61.0285, 69.0861]).addTo(map)
        .bindPopup('USHH');

    L.marker([63.1988, 64.4393]).addTo(map)
        .bindPopup('USHI');

    L.marker([62.1904, 74.5338]).addTo(map)
        .bindPopup('USRK');

    L.marker([59.6551, 67.43]).addTo(map)
        .bindPopup('USHK');

    L.marker([61.1083, 72.65]).addTo(map)
        .bindPopup('USRN');

    L.marker([60.9493, 76.4836]).addTo(map)
        .bindPopup('USNN');

    L.marker([62.11, 65.615]).addTo(map)
        .bindPopup('USHN');

    L.marker([61.3266, 63.6019]).addTo(map)
        .bindPopup('USHS');

    L.marker([62.1586, 77.3289]).addTo(map)
        .bindPopup('USNR');

    L.marker([61.3437, 73.4018]).addTo(map)
        .bindPopup('USRR');

    L.marker([60.1033, 64.8267]).addTo(map)
        .bindPopup('USHU');

    L.marker([58.5033, 49.3483]).addTo(map)
        .bindPopup('USKK');

    L.marker([66.0548, 60.1103]).addTo(map)
        .bindPopup('UUYI');

    L.marker([65.1211, 57.1308]).addTo(map)
        .bindPopup('UUYP');

    L.marker([61.647, 50.8451]).addTo(map)
        .bindPopup('UUYY');

    L.marker([63.5669, 53.8047]).addTo(map)
        .bindPopup('UUYH');

    L.marker([66.0047, 57.3672]).addTo(map)
        .bindPopup('UUYS');

    L.marker([65.4373, 52.2003]).addTo(map)
        .bindPopup('UUYX');

    L.marker([67.4886, 63.9931]).addTo(map)
        .bindPopup('UUYW');

    L.marker([57.7969, 41.0194]).addTo(map)
        .bindPopup('UUBA');

    L.marker([45.0021, 37.3473]).addTo(map)
        .bindPopup('URKA');

    L.marker([43.4499, 39.9566]).addTo(map)
        .bindPopup('URSS');

    L.marker([46.68, 38.21]).addTo(map)
        .bindPopup('nan');

    L.marker([44.5821, 38.0125]).addTo(map)
        .bindPopup('URKG');

    L.marker([45.0347, 39.1705]).addTo(map)
        .bindPopup('URKK');

    L.marker([44.4016, 37.7779]).addTo(map)
        .bindPopup('nan');

    L.marker([56.2683, 90.5708]).addTo(map)
        .bindPopup('UNKS');

    L.marker([73.5178, 80.3797]).addTo(map)
        .bindPopup('UODD');

    L.marker([58.4742, 92.1125]).addTo(map)
        .bindPopup('UNII');

    L.marker([71.9781, 102.491]).addTo(map)
        .bindPopup('UOHH');

    L.marker([67.4372, 86.6219]).addTo(map)
        .bindPopup('UOII');

    L.marker([56.1729, 92.4933]).addTo(map)
        .bindPopup('UNKL');

    L.marker([69.3111, 87.3322]).addTo(map)
        .bindPopup('UOOO');

    L.marker([61.5897, 89.994]).addTo(map)
        .bindPopup('UNIP');

    L.marker([65.7972, 87.9353]).addTo(map)
        .bindPopup('UOTT');

    L.marker([55.4753, 65.4156]).addTo(map)
        .bindPopup('USUU');

    L.marker([51.7506, 36.2956]).addTo(map)
        .bindPopup('UUOK');

    L.marker([59.98, 30.5883]).addTo(map)
        .bindPopup('ULSS');

    L.marker([59.8003, 30.2625]).addTo(map)
        .bindPopup('ULLI');

    L.marker([52.7028, 39.5378]).addTo(map)
        .bindPopup('UUOL');

    L.marker([59.911, 150.72]).addTo(map)
        .bindPopup('UHMM');

    L.marker([29.1667, 70.4333]).addTo(map)
        .bindPopup('UHMW');

    L.marker([56.7006, 47.9047]).addTo(map)
        .bindPopup('UWKJ');

    L.marker([54.1251, 45.2123]).addTo(map)
        .bindPopup('UWPS');

    L.marker([55.6226, 38.0661]).addTo(map)
        .bindPopup('UUBB');

    L.marker([55.9728, 37.4147]).addTo(map)
        .bindPopup('UUEE');

    L.marker([55.8783, 38.0617]).addTo(map)
        .bindPopup('UUMU');

    L.marker([55.5117, 37.5072]).addTo(map)
        .bindPopup('UUMO');

    L.marker([55.5533, 38.15]).addTo(map)
        .bindPopup('UUBW');

    L.marker([67.4633, 33.5883]).addTo(map)
        .bindPopup('ULMK');

    L.marker([68.7817, 32.7508]).addTo(map)
        .bindPopup('ULMM');

    L.marker([69.7633, 61.5564]).addTo(map)
        .bindPopup('ULDD');

    L.marker([67.64, 53.1219]).addTo(map)
        .bindPopup('ULAM');

    L.marker([68.8485, 58.2014]).addTo(map)
        .bindPopup('ULDW');

    L.marker([58.4933, 31.2417]).addTo(map)
        .bindPopup('ULNN');

    L.marker([56.2301, 43.784]).addTo(map)
        .bindPopup('UWGG');

    L.marker([55.0126, 82.6507]).addTo(map)
        .bindPopup('UNNT');

    L.marker([54.967, 73.3105]).addTo(map)
        .bindPopup('UNOO');

    L.marker([51.0725, 58.5956]).addTo(map)
        .bindPopup('UWOR');

    L.marker([51.7958, 55.4567]).addTo(map)
        .bindPopup('UWOO');

    L.marker([52.9347, 36.0022]).addTo(map)
        .bindPopup('UUOR');

    L.marker([53.1106, 45.0211]).addTo(map)
        .bindPopup('UWPP');

    L.marker([57.9145, 56.0212]).addTo(map)
        .bindPopup('USPP');

    L.marker([45.8413, 137.674]).addTo(map)
        .bindPopup('UHTG');

    L.marker([44.2726, 135.029]).addTo(map)
        .bindPopup('nan');

    L.marker([44.815, 136.292]).addTo(map)
        .bindPopup('UHWP');

    L.marker([43.399, 132.148]).addTo(map)
        .bindPopup('UHWW');

    L.marker([57.7839, 28.3956]).addTo(map)
        .bindPopup('ULOO');

    L.marker([56.3811, 30.6081]).addTo(map)
        .bindPopup('ULOL');

    L.marker([47.2583, 39.8183]).addTo(map)
        .bindPopup('URRR');

    L.marker([47.4939, 39.9247]).addTo(map)
        .bindPopup('URRP');

    L.marker([47.1983, 38.8492]).addTo(map)
        .bindPopup('URRT');

    L.marker([47.6821, 42.0728]).addTo(map)
        .bindPopup('URRY');

    L.marker([54.5559, 39.8552]).addTo(map)
        .bindPopup('UUWR');

    L.marker([58.6028, 125.409]).addTo(map)
        .bindPopup('UEEA');

    L.marker([68.5566, 146.232]).addTo(map)
        .bindPopup('UESG');

    L.marker([67.648, 134.695]).addTo(map)
        .bindPopup('nan');

    L.marker([70.6231, 147.902]).addTo(map)
        .bindPopup('UESO');

    L.marker([68.7406, 161.338]).addTo(map)
        .bindPopup('UESS');

    L.marker([69.3925, 139.89]).addTo(map)
        .bindPopup('nan');

    L.marker([62.1035, 129.545]).addTo(map)
        .bindPopup('UEMM');

    L.marker([71.6977, 128.903]).addTo(map)
        .bindPopup('UEST');

    L.marker([62.789, 136.855]).addTo(map)
        .bindPopup('UEMH');

    L.marker([62.5347, 114.039]).addTo(map)
        .bindPopup('UERR');

    L.marker([66.4509, 143.262]).addTo(map)
        .bindPopup('UEMA');

    L.marker([56.9139, 124.914]).addTo(map)
        .bindPopup('UELL');

    L.marker([63.295, 118.337]).addTo(map)
        .bindPopup('UENN');

    L.marker([60.3975, 120.471]).addTo(map)
        .bindPopup('UEMO');

    L.marker([68.515, 112.48]).addTo(map)
        .bindPopup('UERO');

    L.marker([66.4004, 112.03]).addTo(map)
        .bindPopup('UERP');

    L.marker([67.4805, 153.736]).addTo(map)
        .bindPopup('UESK');

    L.marker([67.792, 130.394]).addTo(map)
        .bindPopup('UEBS');

    L.marker([62.185, 117.635]).addTo(map)
        .bindPopup('UENS');

    L.marker([71.9279, 114.08]).addTo(map)
        .bindPopup('UERS');

    L.marker([70.011, 135.645]).addTo(map)
        .bindPopup('UEBT');

    L.marker([60.7206, 114.826]).addTo(map)
        .bindPopup('UERL');

    L.marker([60.357, 134.435]).addTo(map)
        .bindPopup('UEMU');

    L.marker([64.55, 143.115]).addTo(map)
        .bindPopup('UEMT');

    L.marker([63.4581, 120.269]).addTo(map)
        .bindPopup('UENI');

    L.marker([63.7567, 121.693]).addTo(map)
        .bindPopup('UENW');

    L.marker([62.0933, 129.771]).addTo(map)
        .bindPopup('UEEE');

    L.marker([66.7965, 123.361]).addTo(map)
        .bindPopup('UEVV');

    L.marker([65.7485, 150.889]).addTo(map)
        .bindPopup('UESU');

    L.marker([44.92, 147.622]).addTo(map)
        .bindPopup('UHSB');

    L.marker([43.9584, 145.683]).addTo(map)
        .bindPopup('UHSM');

    L.marker([49.1903, 142.083]).addTo(map)
        .bindPopup('UHSK');

    L.marker([45.2564, 147.955]).addTo(map)
        .bindPopup('UHSI');

    L.marker([51.7801, 143.139]).addTo(map)
        .bindPopup('UHSN');

    L.marker([53.52, 142.89]).addTo(map)
        .bindPopup('UHSH');

    L.marker([46.8887, 142.718]).addTo(map)
        .bindPopup('UHSS');

    L.marker([50.6692, 142.761]).addTo(map)
        .bindPopup('UHSO');

    L.marker([53.5049, 50.1643]).addTo(map)
        .bindPopup('UWWW');

    L.marker([51.8583, 47.7456]).addTo(map)
        .bindPopup('UWSB');

    L.marker([51.7128, 46.1711]).addTo(map)
        .bindPopup('nan');

    L.marker([51.565, 46.0467]).addTo(map)
        .bindPopup('UWSS');

    L.marker([43.2051, 44.6066]).addTo(map)
        .bindPopup('URMO');

    L.marker([54.824, 32.025]).addTo(map)
        .bindPopup('UUBS');

    L.marker([44.2251, 43.0819]).addTo(map)
        .bindPopup('URMM');

    L.marker([45.1092, 42.1128]).addTo(map)
        .bindPopup('URMT');

    L.marker([56.7431, 60.8027]).addTo(map)
        .bindPopup('USSS');

    L.marker([52.8061, 41.4828]).addTo(map)
        .bindPopup('UUOT');

    L.marker([55.6062, 49.2787]).addTo(map)
        .bindPopup('UWKD');

    L.marker([55.5647, 52.0925]).addTo(map)
        .bindPopup('UWKE');

    L.marker([54.64, 52.8017]).addTo(map)
        .bindPopup('UWKB');

    L.marker([60.7094, 77.66]).addTo(map)
        .bindPopup('UNSS');

    L.marker([56.3803, 85.2083]).addTo(map)
        .bindPopup('UNTT');

    L.marker([54.239, 37.6]).addTo(map)
        .bindPopup('UUBT');

    L.marker([56.8247, 35.7577]).addTo(map)
        .bindPopup('UUEM');

    L.marker([57.1896, 65.3243]).addTo(map)
        .bindPopup('USTR');

    L.marker([58.1358, 68.2319]).addTo(map)
        .bindPopup('USTO');

    L.marker([51.6694, 94.4006]).addTo(map)
        .bindPopup('UNKY');

    L.marker([56.8281, 53.4575]).addTo(map)
        .bindPopup('USII');

    L.marker([54.2683, 48.2267]).addTo(map)
        .bindPopup('UWLL');

    L.marker([54.401, 48.8027]).addTo(map)
        .bindPopup('UWLW');

    L.marker([59.2736, 38.0158]).addTo(map)
        .bindPopup('ULWC');

    L.marker([59.2825, 39.9444]).addTo(map)
        .bindPopup('ULWW');

    L.marker([48.7825, 44.3455]).addTo(map)
        .bindPopup('URWW');

    L.marker([60.7883, 46.26]).addTo(map)
        .bindPopup('ULWU');

    L.marker([51.8142, 39.2296]).addTo(map)
        .bindPopup('UUOO');

    L.marker([70.3153, 68.3336]).addTo(map)
        .bindPopup('USDB');

    L.marker([65.717, 82.455]).addTo(map)
        .bindPopup('USDP');

    L.marker([63.1833, 75.27]).addTo(map)
        .bindPopup('USRO');

    L.marker([66.0694, 76.5203]).addTo(map)
        .bindPopup('USMU');

    L.marker([65.4809, 72.6989]).addTo(map)
        .bindPopup('USMM');

    L.marker([71.2192, 72.0522]).addTo(map)
        .bindPopup('USDA');

    L.marker([66.5908, 66.611]).addTo(map)
        .bindPopup('USDD');

    L.marker([64.9308, 77.8181]).addTo(map)
        .bindPopup('USDS');

    L.marker([65.96, 78.437]).addTo(map)
        .bindPopup('USDU');

    L.marker([68.483, 73.567]).addTo(map)
        .bindPopup('USDK');

    L.marker([57.5607, 40.1574]).addTo(map)
        .bindPopup('UUDL');

    L.marker([58.1042, 38.9294]).addTo(map)
        .bindPopup('UUBK');

    L.marker([52.0263, 113.306]).addTo(map)
        .bindPopup('UIAA');

    L.marker([-1.5, 29.633]).addTo(map)
        .bindPopup('HRYU');

    L.marker([-1.6772, 29.2589]).addTo(map)
        .bindPopup('HRYG');

    L.marker([-2.46224, 28.9079]).addTo(map)
        .bindPopup('HRZA');

    L.marker([-2.59583, 29.7367]).addTo(map)
        .bindPopup('HRYI');

    L.marker([-1.96863, 30.1395]).addTo(map)
        .bindPopup('HRYR');

    L.marker([20.2961, 41.6343]).addTo(map)
        .bindPopup('OEBA');

    L.marker([30.9066, 41.1382]).addTo(map)
        .bindPopup('OERR');

    L.marker([29.6264, 43.4906]).addTo(map)
        .bindPopup('OERF');

    L.marker([31.6922, 38.7315]).addTo(map)
        .bindPopup('OETR');

    L.marker([29.7851, 40.1]).addTo(map)
        .bindPopup('OESK');

    L.marker([31.4124, 37.2789]).addTo(map)
        .bindPopup('OEGT');

    L.marker([24.5534, 39.7051]).addTo(map)
        .bindPopup('OEMA');

    L.marker([26.48, 38.1289]).addTo(map)
        .bindPopup('OEAO');

    L.marker([24.1442, 38.0634]).addTo(map)
        .bindPopup('OEYN');

    L.marker([26.3028, 43.7744]).addTo(map)
        .bindPopup('OEGS');

    L.marker([26.35, 44.833]).addTo(map)
        .bindPopup('OEZL');

    L.marker([24.0627, 47.5805]).addTo(map)
        .bindPopup('OEPS');

    L.marker([24.4499, 44.1212]).addTo(map)
        .bindPopup('OEDW');

    L.marker([24.9576, 46.6988]).addTo(map)
        .bindPopup('OERK');

    L.marker([20.4647, 45.6196]).addTo(map)
        .bindPopup('OESL');

    L.marker([20.5043, 45.1996]).addTo(map)
        .bindPopup('OEWD');

    L.marker([28.3352, 46.1251]).addTo(map)
        .bindPopup('OEPA');

    L.marker([26.2654, 50.152]).addTo(map)
        .bindPopup('OEDR');

    L.marker([26.4712, 49.7979]).addTo(map)
        .bindPopup('OEDF');

    L.marker([25.2853, 49.4852]).addTo(map)
        .bindPopup('OEAH');

    L.marker([27.9009, 45.5282]).addTo(map)
        .bindPopup('OEKK');

    L.marker([18.2404, 42.6566]).addTo(map)
        .bindPopup('OEAB');

    L.marker([19.9844, 42.6209]).addTo(map)
        .bindPopup('OEBH');

    L.marker([18.2973, 42.8035]).addTo(map)
        .bindPopup('OEKM');

    L.marker([27.4379, 41.6863]).addTo(map)
        .bindPopup('OEHL');

    L.marker([16.9011, 42.5858]).addTo(map)
        .bindPopup('OEGN');

    L.marker([21.6796, 39.1565]).addTo(map)
        .bindPopup('OEJN');

    L.marker([21.483, 40.5434]).addTo(map)
        .bindPopup('OETF');

    L.marker([17.6114, 44.4192]).addTo(map)
        .bindPopup('OENG');

    L.marker([17.4669, 47.1214]).addTo(map)
        .bindPopup('OESH');

    L.marker([26.1986, 36.4764]).addTo(map)
        .bindPopup('OEWJ');

    L.marker([27.9276, 35.2887]).addTo(map)
        .bindPopup('OENN');

    L.marker([28.3654, 36.6189]).addTo(map)
        .bindPopup('OETB');

    L.marker([-9.167, 159.833]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.108, 160.149]).addTo(map)
        .bindPopup('AGTI');

    L.marker([-9.09282, 159.218]).addTo(map)
        .bindPopup('AGGY');

    L.marker([-6.71194, 156.396]).addTo(map)
        .bindPopup('AGGC');

    L.marker([-7.3305, 157.585]).addTo(map)
        .bindPopup('AGKG');

    L.marker([-9.86833, 160.411]).addTo(map)
        .bindPopup('AGGJ');

    L.marker([-9.428, 160.055]).addTo(map)
        .bindPopup('AGGH');

    L.marker([-8.36051, 160.775]).addTo(map)
        .bindPopup('AGKW');

    L.marker([-9.7475, 159.839]).addTo(map)
        .bindPopup('AGGI');

    L.marker([-10.6758, 162.205]).addTo(map)
        .bindPopup('AGNA');

    L.marker([-9.64167, 161.425]).addTo(map)
        .bindPopup('AGGP');

    L.marker([-8.1075, 159.577]).addTo(map)
        .bindPopup('AGGF');

    L.marker([-11.4179, -58.7082]).addTo(map)
        .bindPopup('AGJO');

    L.marker([-7.58556, 158.731]).addTo(map)
        .bindPopup('AGGV');

    L.marker([-10.4497, 161.898]).addTo(map)
        .bindPopup('AGGK');

    L.marker([-10.848, 162.454]).addTo(map)
        .bindPopup('AGGT');

    L.marker([-9.86054, 161.98]).addTo(map)
        .bindPopup('AGAR');

    L.marker([-9.19139, 160.949]).addTo(map)
        .bindPopup('AGAF');

    L.marker([-8.70257, 160.682]).addTo(map)
        .bindPopup('AGGA');

    L.marker([-8.87333, 161.011]).addTo(map)
        .bindPopup('AGAT');

    L.marker([-8.86981, 161.004]).addTo(map)
        .bindPopup('nan');

    L.marker([-9.16667, 161.067]).addTo(map)
        .bindPopup('nan');

    L.marker([-5.515, 159.528]).addTo(map)
        .bindPopup('AGGQ');

    L.marker([-9.414, 161.358]).addTo(map)
        .bindPopup('nan');

    L.marker([-11.3022, 159.798]).addTo(map)
        .bindPopup('AGGB');

    L.marker([-11.5339, 160.063]).addTo(map)
        .bindPopup('AGGR');

    L.marker([-9.86167, 160.825]).addTo(map)
        .bindPopup('AGGU');

    L.marker([-10.7203, 165.795]).addTo(map)
        .bindPopup('AGGL');

    L.marker([-6.99075, 155.887]).addTo(map)
        .bindPopup('AGGE');

    L.marker([-8.56203, 158.119]).addTo(map)
        .bindPopup('AGBT');

    L.marker([-8.57889, 157.876]).addTo(map)
        .bindPopup('AGGS');

    L.marker([-7.57583, 156.597]).addTo(map)
        .bindPopup('AGEV');

    L.marker([-8.73917, 158.203]).addTo(map)
        .bindPopup('AGOK');

    L.marker([-8.09778, 156.864]).addTo(map)
        .bindPopup('AGGN');

    L.marker([-8.0262, 156.948]).addTo(map)
        .bindPopup('AGKU');

    L.marker([-7.41694, 155.565]).addTo(map)
        .bindPopup('AGGO');

    L.marker([-8.32797, 157.263]).addTo(map)
        .bindPopup('AGGM');

    L.marker([-8.16806, 157.643]).addTo(map)
        .bindPopup('AGRM');

    L.marker([-8.12639, 157.143]).addTo(map)
        .bindPopup('AGRC');

    L.marker([-7.983, 157.567]).addTo(map)
        .bindPopup('nan');

    L.marker([-7.91278, 156.706]).addTo(map)
        .bindPopup('AGBA');

    L.marker([-8.5085, 157.69]).addTo(map)
        .bindPopup('nan');

    L.marker([-3.72472, 55.2053]).addTo(map)
        .bindPopup('FSSB');

    L.marker([-3.80222, 55.6669]).addTo(map)
        .bindPopup('FSSD');

    L.marker([-5.6967, 53.6558]).addTo(map)
        .bindPopup('FSDR');

    L.marker([-4.583, 55.95]).addTo(map)
        .bindPopup('FSSF');

    L.marker([-4.31929, 55.6914]).addTo(map)
        .bindPopup('FSPP');

    L.marker([-4.67434, 55.5218]).addTo(map)
        .bindPopup('FSIA');

    L.marker([10.5292, 32.5006]).addTo(map)
        .bindPopup('HSFA');

    L.marker([11.7859, 34.3367]).addTo(map)
        .bindPopup('HSDZ');

    L.marker([11.4023, 26.1186]).addTo(map)
        .bindPopup('nan');

    L.marker([14.3836, 33.5264]).addTo(map)
        .bindPopup('HSWD');

    L.marker([14.925, 35.878]).addTo(map)
        .bindPopup('HSKG');

    L.marker([14.133, 35.317]).addTo(map)
        .bindPopup('HSGF');

    L.marker([15.3875, 36.3288]).addTo(map)
        .bindPopup('HSKA');

    L.marker([15.3556, 35.7278]).addTo(map)
        .bindPopup('HSNW');

    L.marker([15.5895, 32.5532]).addTo(map)
        .bindPopup('HSSK');

    L.marker([13.6149, 25.3246]).addTo(map)
        .bindPopup('HSFS');

    L.marker([19.1539, 30.4301]).addTo(map)
        .bindPopup('HSDN');

    L.marker([18.0146, 30.9595]).addTo(map)
        .bindPopup('HSDB');

    L.marker([18.4433, 31.8433]).addTo(map)
        .bindPopup('HSMN');

    L.marker([21.8027, 31.5216]).addTo(map)
        .bindPopup('HSSW');

    L.marker([19.4336, 37.2341]).addTo(map)
        .bindPopup('HSPN');

    L.marker([17.7103, 34.057]).addTo(map)
        .bindPopup('HSAT');

    L.marker([12.533, 35.067]).addTo(map)
        .bindPopup('HSGG');

    L.marker([12.0535, 24.9562]).addTo(map)
        .bindPopup('HSNN');

    L.marker([11.1994, 28.5231]).addTo(map)
        .bindPopup('nan');

    L.marker([13.1532, 30.2327]).addTo(map)
        .bindPopup('HSOB');

    L.marker([11.138, 29.7011]).addTo(map)
        .bindPopup('HSLI');

    L.marker([12.667, 28.333]).addTo(map)
        .bindPopup('HSNH');

    L.marker([13.4817, 22.4672]).addTo(map)
        .bindPopup('HSGN');

    L.marker([12.9437, 23.5631]).addTo(map)
        .bindPopup('HSZA');

    L.marker([13.183, 32.733]).addTo(map)
        .bindPopup('HSKI');

    L.marker([56.2667, 15.265]).addTo(map)
        .bindPopup('ESDF');

    L.marker([60.422, 15.5152]).addTo(map)
        .bindPopup('ESSD');

    L.marker([61.8697, 12.6894]).addTo(map)
        .bindPopup('ESUE');

    L.marker([60.9579, 14.5114]).addTo(map)
        .bindPopup('ESKM');

    L.marker([60.5933, 16.9514]).addTo(map)
        .bindPopup('ESSK');

    L.marker([61.7681, 17.0807]).addTo(map)
        .bindPopup('ESNH');

    L.marker([61.2615, 17.0991]).addTo(map)
        .bindPopup('ESNY');

    L.marker([57.6628, 18.3462]).addTo(map)
        .bindPopup('ESSV');

    L.marker([56.6911, 12.8202]).addTo(map)
        .bindPopup('ESMT');

    L.marker([62.0478, 14.4229]).addTo(map)
        .bindPopup('ESND');

    L.marker([63.1944, 14.5003]).addTo(map)
        .bindPopup('ESNZ');

    L.marker([57.7576, 14.0687]).addTo(map)
        .bindPopup('ESGJ');

    L.marker([57.5258, 15.8233]).addTo(map)
        .bindPopup('ESSF');

    L.marker([56.6855, 16.2876]).addTo(map)
        .bindPopup('ESMQ');

    L.marker([57.3505, 16.498]).addTo(map)
        .bindPopup('ESMO');

    L.marker([57.78, 16.5236]).addTo(map)
        .bindPopup('ESSW');

    L.marker([56.9291, 14.728]).addTo(map)
        .bindPopup('ESMX');

    L.marker([65.5903, 19.2819]).addTo(map)
        .bindPopup('ESNX');

    L.marker([67.1324, 20.8146]).addTo(map)
        .bindPopup('ESNG');

    L.marker([67.822, 20.3368]).addTo(map)
        .bindPopup('ESNQ');

    L.marker([65.5438, 22.122]).addTo(map)
        .bindPopup('ESPA');

    L.marker([67.2456, 23.0689]).addTo(map)
        .bindPopup('ESUP');

    L.marker([59.3459, 14.4959]).addTo(map)
        .bindPopup('ESKK');

    L.marker([59.2237, 15.038]).addTo(map)
        .bindPopup('ESOE');

    L.marker([58.4062, 15.6805]).addTo(map)
        .bindPopup('ESSL');

    L.marker([58.5863, 16.2506]).addTo(map)
        .bindPopup('ESSP');

    L.marker([56.2961, 12.8471]).addTo(map)
        .bindPopup('ESTA');

    L.marker([55.9217, 14.0855]).addTo(map)
        .bindPopup('ESMK');

    L.marker([59.3511, 16.7084]).addTo(map)
        .bindPopup('ESSU');

    L.marker([59.6519, 17.9186]).addTo(map)
        .bindPopup('ESSA');

    L.marker([60.0201, 13.5789]).addTo(map)
        .bindPopup('ESOH');

    L.marker([59.4447, 13.3374]).addTo(map)
        .bindPopup('ESOK');

    L.marker([61.1591, 12.8407]).addTo(map)
        .bindPopup('nan');

    L.marker([60.1576, 12.9913]).addTo(map)
        .bindPopup('ESST');

    L.marker([65.8061, 15.0828]).addTo(map)
        .bindPopup('ESUT');

    L.marker([64.5483, 18.7162]).addTo(map)
        .bindPopup('ESNL');

    L.marker([64.6248, 21.0769]).addTo(map)
        .bindPopup('ESNS');

    L.marker([64.9609, 17.6966]).addTo(map)
        .bindPopup('ESUD');

    L.marker([63.7918, 20.2828]).addTo(map)
        .bindPopup('ESNU');

    L.marker([64.5791, 16.8336]).addTo(map)
        .bindPopup('ESNV');

    L.marker([63.0486, 17.7689]).addTo(map)
        .bindPopup('ESNK');

    L.marker([63.4083, 18.99]).addTo(map)
        .bindPopup('ESNO');

    L.marker([62.5281, 17.4439]).addTo(map)
        .bindPopup('ESNN');

    L.marker([57.6628, 12.2798]).addTo(map)
        .bindPopup('ESGG');

    L.marker([57.7747, 11.8704]).addTo(map)
        .bindPopup('ESGP');

    L.marker([58.4564, 13.9727]).addTo(map)
        .bindPopup('ESGR');

    L.marker([58.4655, 13.1744]).addTo(map)
        .bindPopup('ESGL');

    L.marker([58.3181, 12.345]).addTo(map)
        .bindPopup('ESGT');

    L.marker([1.36042, 103.91]).addTo(map)
        .bindPopup('WSAP');

    L.marker([1.35019, 103.994]).addTo(map)
        .bindPopup('WSSS');

    L.marker([1.38726, 103.709]).addTo(map)
        .bindPopup('WSAT');

    L.marker([1.41695, 103.868]).addTo(map)
        .bindPopup('WSSL');

    L.marker([-7.9696, -14.3937]).addTo(map)
        .bindPopup('FHAW');

    L.marker([-15.9577, -5.64594]).addTo(map)
        .bindPopup('FHSH');

    L.marker([78.2461, 15.4656]).addTo(map)
        .bindPopup('ENSB');

    L.marker([48.3394, 19.7358]).addTo(map)
        .bindPopup('LZLU');

    L.marker([48.6378, 19.1341]).addTo(map)
        .bindPopup('LZSL');

    L.marker([48.1702, 17.2127]).addTo(map)
        .bindPopup('LZIB');

    L.marker([45.4734, 13.615]).addTo(map)
        .bindPopup('LJPZ');

    L.marker([48.6631, 21.2411]).addTo(map)
        .bindPopup('LZKZ');

    L.marker([46.4799, 15.6861]).addTo(map)
        .bindPopup('LJMB');

    L.marker([49.0297, 21.3156]).addTo(map)
        .bindPopup('LZPW');

    L.marker([49.0736, 20.2411]).addTo(map)
        .bindPopup('LZTT');

    L.marker([46.2237, 14.4576]).addTo(map)
        .bindPopup('LJLJ');

    L.marker([48.6252, 17.8284]).addTo(map)
        .bindPopup('LZPP');

    L.marker([49.2315, 18.6135]).addTo(map)
        .bindPopup('LZZI');

    L.marker([7.89129, -11.1766]).addTo(map)
        .bindPopup('GFKE');

    L.marker([8.61047, -11.0454]).addTo(map)
        .bindPopup('GFYE');

    L.marker([9.63832, -11.5156]).addTo(map)
        .bindPopup('GFKB');

    L.marker([7.53242, -12.5189]).addTo(map)
        .bindPopup('GFBN');

    L.marker([7.767, -12.383]).addTo(map)
        .bindPopup('GFGK');

    L.marker([7.9444, -11.761]).addTo(map)
        .bindPopup('GFBO');

    L.marker([8.61644, -13.1955]).addTo(map)
        .bindPopup('GFLL');

    L.marker([8.39713, -13.1291]).addTo(map)
        .bindPopup('GFHA');

    L.marker([14.7397, -17.4902]).addTo(map)
        .bindPopup('GOOY');

    L.marker([14.1469, -16.0513]).addTo(map)
        .bindPopup('GOOK');

    L.marker([12.5723, -12.2203]).addTo(map)
        .bindPopup('GOTK');

    L.marker([12.8985, -14.9681]).addTo(map)
        .bindPopup('GODK');

    L.marker([15.5936, -13.3228]).addTo(map)
        .bindPopup('GOSM');

    L.marker([16.683, -14.967]).addTo(map)
        .bindPopup('GOSP');

    L.marker([16.433, -15.65]).addTo(map)
        .bindPopup('GOSR');

    L.marker([16.0508, -16.4632]).addTo(map)
        .bindPopup('GOSS');

    L.marker([14.8473, -12.4683]).addTo(map)
        .bindPopup('GOTB');

    L.marker([13.052, -12.7272]).addTo(map)
        .bindPopup('nan');

    L.marker([13.0468, -13.2954]).addTo(map)
        .bindPopup('GOTS');

    L.marker([13.7368, -13.6531]).addTo(map)
        .bindPopup('GOTT');

    L.marker([14.67, -17.0733]).addTo(map)
        .bindPopup('GOBD');

    L.marker([12.3953, -16.748]).addTo(map)
        .bindPopup('GOGS');

    L.marker([12.5556, -16.2818]).addTo(map)
        .bindPopup('GOGG');

    L.marker([9.9463, 43.1495]).addTo(map)
        .bindPopup('nan');

    L.marker([2.01444, 45.3047]).addTo(map)
        .bindPopup('HCMM');

    L.marker([11.9582, 50.748]).addTo(map)
        .bindPopup('HCMA');

    L.marker([11.2753, 49.1494]).addTo(map)
        .bindPopup('HCMF');

    L.marker([10.3, 50.233]).addTo(map)
        .bindPopup('HCMS');

    L.marker([11.494, 49.9085]).addTo(map)
        .bindPopup('HCMC');

    L.marker([9.517, 49.083]).addTo(map)
        .bindPopup('HCMG');

    L.marker([3.10222, 43.6286]).addTo(map)
        .bindPopup('HCMB');

    L.marker([6.0958, 46.6375]).addTo(map)
        .bindPopup('nan');

    L.marker([2.33611, 42.3078]).addTo(map)
        .bindPopup('HCMD');

    L.marker([3.32294, 42.2131]).addTo(map)
        .bindPopup('nan');

    L.marker([3.8124, 42.5459]).addTo(map)
        .bindPopup('HCMJ');

    L.marker([-0.377353, 42.4592]).addTo(map)
        .bindPopup('HCMK');

    L.marker([5.36667, 48.5167]).addTo(map)
        .bindPopup('HCMO');

    L.marker([6.78083, 47.4547]).addTo(map)
        .bindPopup('HCMR');

    L.marker([8.45794, 48.5674]).addTo(map)
        .bindPopup('nan');

    L.marker([8.104, 49.82]).addTo(map)
        .bindPopup('HCME');

    L.marker([10.6421, 47.388]).addTo(map)
        .bindPopup('HCMU');

    L.marker([36.084, -115.154]).addTo(map)
        .bindPopup('nan');

    L.marker([9.5275, 45.5549]).addTo(map)
        .bindPopup('HCMV');

    L.marker([10.3892, 44.9411]).addTo(map)
        .bindPopup('HCMI');

    L.marker([9.51321, 44.0824]).addTo(map)
        .bindPopup('HCMH');

    L.marker([5.86583, -56.3275]).addTo(map)
        .bindPopup('SMCO');

    L.marker([5.51272, -54.0501]).addTo(map)
        .bindPopup('SMBN');

    L.marker([5.6076, -54.4003]).addTo(map)
        .bindPopup('SMMO');

    L.marker([5.84113, -56.6733]).addTo(map)
        .bindPopup('SMWA');

    L.marker([5.95556, -57.0394]).addTo(map)
        .bindPopup('SMNI');

    L.marker([5.45283, -55.1878]).addTo(map)
        .bindPopup('SMJP');

    L.marker([5.81108, -55.1907]).addTo(map)
        .bindPopup('SMZO');

    L.marker([3.89868, -55.5779]).addTo(map)
        .bindPopup('SMCA');

    L.marker([4.21751, -55.4471]).addTo(map)
        .bindPopup('nan');

    L.marker([4.00571, -55.4816]).addTo(map)
        .bindPopup('nan');

    L.marker([4.11136, -54.6728]).addTo(map)
        .bindPopup('SMDA');

    L.marker([3.15, -55.717]).addTo(map)
        .bindPopup('SMTP');

    L.marker([4.37611, -55.4071]).addTo(map)
        .bindPopup('SMDO');

    L.marker([3.34528, -55.4425]).addTo(map)
        .bindPopup('SMPA');

    L.marker([4.35, -54.4167]).addTo(map)
        .bindPopup('SMST');

    L.marker([5.21528, -57.1853]).addTo(map)
        .bindPopup('SMWS');

    L.marker([4.87201, 31.6011]).addTo(map)
        .bindPopup('HJJJ');

    L.marker([6.825, 29.669]).addTo(map)
        .bindPopup('HSMK');

    L.marker([10.0536, 32.9594]).addTo(map)
        .bindPopup('nan');

    L.marker([9.55897, 31.6522]).addTo(map)
        .bindPopup('HSSM');

    L.marker([7.72583, 27.975]).addTo(map)
        .bindPopup('HSWW');

    L.marker([1.66294, 7.41174]).addTo(map)
        .bindPopup('FPPR');

    L.marker([0.378175, 6.71215]).addTo(map)
        .bindPopup('FPST');

    L.marker([13.6959, -89.1151]).addTo(map)
        .bindPopup('MSSS');

    L.marker([13.4408, -89.0556]).addTo(map)
        .bindPopup('MSLP');

    L.marker([18.041, -63.1089]).addTo(map)
        .bindPopup('TNCM');

    L.marker([37.0206, 41.1914]).addTo(map)
        .bindPopup('OSKL');

    L.marker([35.4011, 35.9487]).addTo(map)
        .bindPopup('OSLK');

    L.marker([35.2854, 40.176]).addTo(map)
        .bindPopup('OSDZ');

    L.marker([33.4115, 36.5156]).addTo(map)
        .bindPopup('OSDI');

    L.marker([36.1807, 37.2244]).addTo(map)
        .bindPopup('OSAP');

    L.marker([34.5574, 38.3169]).addTo(map)
        .bindPopup('OSPR');

    L.marker([-26.529, 31.3075]).addTo(map)
        .bindPopup('FDMS');

    L.marker([38.1421, 128.598]).addTo(map)
        .bindPopup('FDSK');

    L.marker([21.4445, -71.1423]).addTo(map)
        .bindPopup('MBGT');

    L.marker([21.826, -71.8025]).addTo(map)
        .bindPopup('MBMC');

    L.marker([21.9175, -71.9396]).addTo(map)
        .bindPopup('MBNC');

    L.marker([21.8749, -72.0923]).addTo(map)
        .bindPopup('MBPI');

    L.marker([21.7736, -72.2659]).addTo(map)
        .bindPopup('MBPV');

    L.marker([21.333, -71.2]).addTo(map)
        .bindPopup('MBSY');

    L.marker([21.5157, -71.5285]).addTo(map)
        .bindPopup('MBSC');

    L.marker([13.2389, 18.3133]).addTo(map)
        .bindPopup('FTTI');

    L.marker([13.2782, 19.7103]).addTo(map)
        .bindPopup('nan');

    L.marker([17.9171, 19.1111]).addTo(map)
        .bindPopup('FTTY');

    L.marker([10.483, 16.717]).addTo(map)
        .bindPopup('FTTS');

    L.marker([11.0602, 17.9445]).addTo(map)
        .bindPopup('nan');

    L.marker([12.167, 18.675]).addTo(map)
        .bindPopup('FTTM');

    L.marker([12.383, 17.067]).addTo(map)
        .bindPopup('FTTK');

    L.marker([12.1337, 15.034]).addTo(map)
        .bindPopup('FTTJ');

    L.marker([14.1456, 15.3144]).addTo(map)
        .bindPopup('FTTU');

    L.marker([13.4433, 14.7394]).addTo(map)
        .bindPopup('FTTL');

    L.marker([8.62441, 16.0714]).addTo(map)
        .bindPopup('FTTD');

    L.marker([9.37806, 14.925]).addTo(map)
        .bindPopup('FTTP');

    L.marker([10.2881, 15.3811]).addTo(map)
        .bindPopup('FTTB');

    L.marker([9.14444, 18.3744]).addTo(map)
        .bindPopup('FTTA');

    L.marker([13.847, 20.8443]).addTo(map)
        .bindPopup('FTTC');

    L.marker([10.8903, 19.8172]).addTo(map)
        .bindPopup('nan');

    L.marker([11.034, 20.274]).addTo(map)
        .bindPopup('FTTN');

    L.marker([11.4773, 19.2874]).addTo(map)
        .bindPopup('nan');

    L.marker([9.3979, 16.3125]).addTo(map)
        .bindPopup('FTTH');

    L.marker([9.76733, 1.09125]).addTo(map)
        .bindPopup('DXNG');

    L.marker([6.16561, 1.25451]).addTo(map)
        .bindPopup('DXXX');

    L.marker([15.2295, 103.253]).addTo(map)
        .bindPopup('VTUO');

    L.marker([13.7553, 101.395]).addTo(map)
        .bindPopup('nan');

    L.marker([18.7668, 98.9626]).addTo(map)
        .bindPopup('VTCC');

    L.marker([19.9523, 99.8829]).addTo(map)
        .bindPopup('VTCT');

    L.marker([12.8325, 100.949]).addTo(map)
        .bindPopup('VTBF');

    L.marker([10.7112, 99.3617]).addTo(map)
        .bindPopup('VTSE');

    L.marker([16.4666, 102.784]).addTo(map)
        .bindPopup('VTUK');

    L.marker([8.09912, 98.9862]).addTo(map)
        .bindPopup('VTSG');

    L.marker([13.6811, 100.747]).addTo(map)
        .bindPopup('VTBS');

    L.marker([13.9126, 100.607]).addTo(map)
        .bindPopup('VTBD');

    L.marker([18.2709, 99.5042]).addTo(map)
        .bindPopup('VTCL');

    L.marker([17.4391, 101.722]).addTo(map)
        .bindPopup('VTUL');

    L.marker([14.9494, 100.643]).addTo(map)
        .bindPopup('VTBL');

    L.marker([19.3013, 97.9758]).addTo(map)
        .bindPopup('VTCH');

    L.marker([19.372, 98.437]).addTo(map)
        .bindPopup('nan');

    L.marker([14.102, 99.9172]).addTo(map)
        .bindPopup('VTBK');

    L.marker([17.3838, 104.643]).addTo(map)
        .bindPopup('VTUW');

    L.marker([14.9495, 102.313]).addTo(map)
        .bindPopup('VTUQ');

    L.marker([15.2773, 100.296]).addTo(map)
        .bindPopup('VTPI');

    L.marker([8.53962, 99.9447]).addTo(map)
        .bindPopup('VTSF');

    L.marker([18.8079, 100.783]).addTo(map)
        .bindPopup('VTCN');

    L.marker([6.51992, 101.743]).addTo(map)
        .bindPopup('VTSC');

    L.marker([6.78546, 101.154]).addTo(map)
        .bindPopup('VTSK');

    L.marker([16.676, 101.195]).addTo(map)
        .bindPopup('VTPB');

    L.marker([16.7829, 100.279]).addTo(map)
        .bindPopup('VTPP');

    L.marker([18.1322, 100.165]).addTo(map)
        .bindPopup('VTCP');

    L.marker([8.1132, 98.3169]).addTo(map)
        .bindPopup('VTSP');

    L.marker([12.6362, 99.9515]).addTo(map)
        .bindPopup('VTPH');

    L.marker([9.77762, 98.5855]).addTo(map)
        .bindPopup('VTSR');

    L.marker([12.6799, 101.005]).addTo(map)
        .bindPopup('VTBU');

    L.marker([16.1168, 103.774]).addTo(map)
        .bindPopup('VTUV');

    L.marker([17.1951, 104.119]).addTo(map)
        .bindPopup('VTUI');

    L.marker([6.93321, 100.393]).addTo(map)
        .bindPopup('VTSS');

    L.marker([7.18656, 100.608]).addTo(map)
        .bindPopup('VTSH');

    L.marker([17.238, 99.8182]).addTo(map)
        .bindPopup('VTPO');

    L.marker([9.1326, 99.1356]).addTo(map)
        .bindPopup('VTSB');

    L.marker([9.54779, 100.062]).addTo(map)
        .bindPopup('VTSM');

    L.marker([14.8683, 103.498]).addTo(map)
        .bindPopup('VTUJ');

    L.marker([16.6999, 98.5451]).addTo(map)
        .bindPopup('VTPM');

    L.marker([16.896, 99.2533]).addTo(map)
        .bindPopup('VTPT');

    L.marker([7.50874, 99.6166]).addTo(map)
        .bindPopup('VTST');

    L.marker([12.2746, 102.319]).addTo(map)
        .bindPopup('VTBO');

    L.marker([15.2513, 104.87]).addTo(map)
        .bindPopup('VTUU');

    L.marker([17.3864, 102.788]).addTo(map)
        .bindPopup('VTUD');

    L.marker([17.617, 100.1]).addTo(map)
        .bindPopup('VTPU');

    L.marker([38.5433, 68.825]).addTo(map)
        .bindPopup('UTDD');

    L.marker([37.8664, 68.8647]).addTo(map)
        .bindPopup('UTDT');

    L.marker([37.9881, 69.805]).addTo(map)
        .bindPopup('UTDK');

    L.marker([40.2154, 69.6947]).addTo(map)
        .bindPopup('UTDL');

    L.marker([-8.24313, 125.606]).addTo(map)
        .bindPopup('WPAT');

    L.marker([-8.48903, 126.401]).addTo(map)
        .bindPopup('WPEC');

    L.marker([-8.5464, 125.526]).addTo(map)
        .bindPopup('WPDL');

    L.marker([-8.34919, 127.051]).addTo(map)
        .bindPopup('nan');

    L.marker([-8.97224, 125.215]).addTo(map)
        .bindPopup('WPMN');

    L.marker([-9.19806, 124.343]).addTo(map)
        .bindPopup('WPOC');

    L.marker([-9.30331, 125.287]).addTo(map)
        .bindPopup('WPDB');

    L.marker([-8.8838, 126.373]).addTo(map)
        .bindPopup('WPVQ');

    L.marker([39.4806, 54.366]).addTo(map)
        .bindPopup('nan');

    L.marker([40.0633, 53.0072]).addTo(map)
        .bindPopup('UTAK');

    L.marker([37.9868, 58.361]).addTo(map)
        .bindPopup('UTAA');

    L.marker([41.7611, 59.8267]).addTo(map)
        .bindPopup('UTAT');

    L.marker([39.0833, 63.6133]).addTo(map)
        .bindPopup('UTAV');

    L.marker([37.6194, 61.8967]).addTo(map)
        .bindPopup('UTAM');

    L.marker([33.8769, 10.1033]).addTo(map)
        .bindPopup('DTTG');

    L.marker([34.422, 8.8225]).addTo(map)
        .bindPopup('DTTF');

    L.marker([36.98, 8.87694]).addTo(map)
        .bindPopup('DTKA');

    L.marker([33.875, 10.7755]).addTo(map)
        .bindPopup('DTTJ');

    L.marker([35.7581, 10.7547]).addTo(map)
        .bindPopup('DTMB');

    L.marker([34.718, 10.691]).addTo(map)
        .bindPopup('DTTX');

    L.marker([36.0758, 10.4386]).addTo(map)
        .bindPopup('DTNH');

    L.marker([31.7043, 9.25462]).addTo(map)
        .bindPopup('DTTR');

    L.marker([33.9397, 8.11056]).addTo(map)
        .bindPopup('DTTZ');

    L.marker([36.8511, 10.2272]).addTo(map)
        .bindPopup('DTTA');

    L.marker([-19.777, -174.341]).addTo(map)
        .bindPopup('NFTL');

    L.marker([-15.5708, -175.633]).addTo(map)
        .bindPopup('NFTO');

    L.marker([-15.9773, -173.791]).addTo(map)
        .bindPopup('NFTP');

    L.marker([-21.3783, -174.958]).addTo(map)
        .bindPopup('NFTE');

    L.marker([-21.2412, -175.15]).addTo(map)
        .bindPopup('NFTF');

    L.marker([-18.5853, -173.962]).addTo(map)
        .bindPopup('NFTV');

    L.marker([36.9822, 35.2804]).addTo(map)
        .bindPopup('LTAF');

    L.marker([37.0021, 35.4259]).addTo(map)
        .bindPopup('LTAG');

    L.marker([37.7314, 38.4689]).addTo(map)
        .bindPopup('LTCP');

    L.marker([38.7264, 30.6011]).addTo(map)
        .bindPopup('LTAH');

    L.marker([39.6545, 43.026]).addTo(map)
        .bindPopup('LTCO');

    L.marker([40.8294, 35.522]).addTo(map)
        .bindPopup('LTAP');

    L.marker([39.9498, 32.6886]).addTo(map)
        .bindPopup('LTAD');

    L.marker([40.1281, 32.995]).addTo(map)
        .bindPopup('LTAC');

    L.marker([36.8987, 30.8005]).addTo(map)
        .bindPopup('LTAI');

    L.marker([36.2992, 32.3006]).addTo(map)
        .bindPopup('LTFG');

    L.marker([37.815, 27.8953]).addTo(map)
        .bindPopup('LTBD');

    L.marker([40.318, 27.9777]).addTo(map)
        .bindPopup('LTBG');

    L.marker([39.6193, 27.926]).addTo(map)
        .bindPopup('LTBF');

    L.marker([39.5546, 27.0138]).addTo(map)
        .bindPopup('LTFD');

    L.marker([37.929, 41.1166]).addTo(map)
        .bindPopup('LTCJ');

    L.marker([38.8593, 40.596]).addTo(map)
        .bindPopup('LTCU');

    L.marker([40.2333, 29.0092]).addTo(map)
        .bindPopup('LTBE');

    L.marker([40.2552, 29.5626]).addTo(map)
        .bindPopup('LTBR');

    L.marker([40.1377, 26.4268]).addTo(map)
        .bindPopup('LTBH');

    L.marker([40.2045, 25.8833]).addTo(map)
        .bindPopup('LTFK');

    L.marker([37.7856, 29.7013]).addTo(map)
        .bindPopup('LTAY');

    L.marker([37.8939, 40.201]).addTo(map)
        .bindPopup('LTCC');

    L.marker([38.6069, 39.2914]).addTo(map)
        .bindPopup('LTCA');

    L.marker([39.7102, 39.527]).addTo(map)
        .bindPopup('LTCD');

    L.marker([39.9565, 41.1702]).addTo(map)
        .bindPopup('LTCE');

    L.marker([39.8099, 30.5194]).addTo(map)
        .bindPopup('LTBY');

    L.marker([39.7841, 30.5821]).addTo(map)
        .bindPopup('LTBI');

    L.marker([36.9472, 37.4787]).addTo(map)
        .bindPopup('LTAJ');

    L.marker([37.5497, 44.2381]).addTo(map)
        .bindPopup('LTCW');

    L.marker([36.3628, 36.2822]).addTo(map)
        .bindPopup('LTDA');

    L.marker([39.9766, 43.8766]).addTo(map)
        .bindPopup('LTCT');

    L.marker([37.8554, 30.3684]).addTo(map)
        .bindPopup('LTFC');

    L.marker([40.9769, 28.8146]).addTo(map)
        .bindPopup('LTBA');

    L.marker([41.2753, 28.7519]).addTo(map)
        .bindPopup('LTFM');

    L.marker([40.8986, 29.3092]).addTo(map)
        .bindPopup('LTFJ');

    L.marker([37.5388, 36.9535]).addTo(map)
        .bindPopup('LTCN');

    L.marker([40.5622, 43.115]).addTo(map)
        .bindPopup('LTCF');

    L.marker([41.3142, 33.7958]).addTo(map)
        .bindPopup('LTAL');

    L.marker([38.7704, 35.4954]).addTo(map)
        .bindPopup('LTAU');

    L.marker([40.735, 30.0833]).addTo(map)
        .bindPopup('LTBQ');

    L.marker([37.979, 32.5619]).addTo(map)
        .bindPopup('LTAN');

    L.marker([39.1131, 30.1281]).addTo(map)
        .bindPopup('LTBZ');

    L.marker([38.4353, 38.091]).addTo(map)
        .bindPopup('LTAT');

    L.marker([37.2233, 40.6317]).addTo(map)
        .bindPopup('LTCR');

    L.marker([37.2506, 27.6643]).addTo(map)
        .bindPopup('LTFE');

    L.marker([37.1401, 27.6697]).addTo(map)
        .bindPopup('LTBV');

    L.marker([36.7131, 28.7925]).addTo(map)
        .bindPopup('LTBS');

    L.marker([38.7478, 41.6612]).addTo(map)
        .bindPopup('LTCK');

    L.marker([38.7719, 34.5345]).addTo(map)
        .bindPopup('LTAZ');

    L.marker([40.966, 38.081]).addTo(map)
        .bindPopup('LTCB');

    L.marker([41.1692, 40.8289]).addTo(map)
        .bindPopup('LTFO');

    L.marker([41.2545, 36.5671]).addTo(map)
        .bindPopup('LTFH');

    L.marker([37.4457, 38.8956]).addTo(map)
        .bindPopup('LTCS');

    L.marker([37.0943, 38.8471]).addTo(map)
        .bindPopup('LTCH');

    L.marker([37.9789, 41.8404]).addTo(map)
        .bindPopup('LTCL');

    L.marker([42.0158, 35.0664]).addTo(map)
        .bindPopup('LTCM');

    L.marker([37.3647, 42.0582]).addTo(map)
        .bindPopup('LTCV');

    L.marker([39.8138, 36.9035]).addTo(map)
        .bindPopup('LTAR');

    L.marker([41.1382, 27.9191]).addTo(map)
        .bindPopup('LTBU');

    L.marker([40.3074, 36.3674]).addTo(map)
        .bindPopup('LTAW');

    L.marker([40.9951, 39.7897]).addTo(map)
        .bindPopup('LTCG');

    L.marker([38.6815, 29.4717]).addTo(map)
        .bindPopup('LTBO');

    L.marker([38.4682, 43.3323]).addTo(map)
        .bindPopup('LTCI');

    L.marker([41.5064, 32.0886]).addTo(map)
        .bindPopup('LTAS');

    L.marker([10.5954, -61.3372]).addTo(map)
        .bindPopup('TTPP');

    L.marker([11.1497, -60.8322]).addTo(map)
        .bindPopup('TTCP');

    L.marker([-8.525, 179.196]).addTo(map)
        .bindPopup('NGFU');

    L.marker([23.4618, 120.393]).addTo(map)
        .bindPopup('RCKU');

    L.marker([24.818, 120.939]).addTo(map)
        .bindPopup('RCPO');

    L.marker([24.0231, 121.618]).addTo(map)
        .bindPopup('RCYU');

    L.marker([20.7066, 116.721]).addTo(map)
        .bindPopup('RCLM');

    L.marker([22.5771, 120.35]).addTo(map)
        .bindPopup('RCKH');

    L.marker([24.4279, 118.359]).addTo(map)
        .bindPopup('RCBS');

    L.marker([26.1598, 119.958]).addTo(map)
        .bindPopup('RCFG');

    L.marker([26.2242, 120.003]).addTo(map)
        .bindPopup('RCMT');

    L.marker([23.2131, 119.418]).addTo(map)
        .bindPopup('RCCM');

    L.marker([23.5687, 119.628]).addTo(map)
        .bindPopup('RCQC');

    L.marker([23.3674, 119.503]).addTo(map)
        .bindPopup('RCWA');

    L.marker([22.0411, 120.73]).addTo(map)
        .bindPopup('RCKW');

    L.marker([22.7002, 120.482]).addTo(map)
        .bindPopup('RCDC');

    L.marker([24.2647, 120.621]).addTo(map)
        .bindPopup('RCMQ');

    L.marker([22.9504, 120.206]).addTo(map)
        .bindPopup('RCNN');

    L.marker([25.0694, 121.552]).addTo(map)
        .bindPopup('RCSS');

    L.marker([22.6739, 121.466]).addTo(map)
        .bindPopup('RCGI');

    L.marker([22.027, 121.535]).addTo(map)
        .bindPopup('RCLY');

    L.marker([22.755, 121.102]).addTo(map)
        .bindPopup('RCFN');

    L.marker([25.0777, 121.233]).addTo(map)
        .bindPopup('RCTP');

    L.marker([-3.36779, 36.6333]).addTo(map)
        .bindPopup('HTAR');

    L.marker([-3.37631, 35.8183]).addTo(map)
        .bindPopup('HTLM');

    L.marker([-6.87811, 39.2026]).addTo(map)
        .bindPopup('HTDA');

    L.marker([-6.17044, 35.7526]).addTo(map)
        .bindPopup('HTDO');

    L.marker([-2.81367, 32.1725]).addTo(map)
        .bindPopup('HTGE');

    L.marker([-7.66863, 35.7521]).addTo(map)
        .bindPopup('HTIR');

    L.marker([-1.332, 31.8212]).addTo(map)
        .bindPopup('HTBU');

    L.marker([-4.8862, 29.6709]).addTo(map)
        .bindPopup('HTKA');

    L.marker([-3.42941, 37.0745]).addTo(map)
        .bindPopup('HTKJ');

    L.marker([-5.25726, 39.8114]).addTo(map)
        .bindPopup('HTPE');

    L.marker([-8.91123, 39.5086]).addTo(map)
        .bindPopup('HTKI');

    L.marker([-9.85111, 39.7578]).addTo(map)
        .bindPopup('HTLI');

    L.marker([-10.3575, 38.7792]).addTo(map)
        .bindPopup('HTNA');

    L.marker([-2.16083, 34.2256]).addTo(map)
        .bindPopup('HTGR');

    L.marker([-1.503, 33.8021]).addTo(map)
        .bindPopup('HTMU');

    L.marker([-8.91994, 33.274]).addTo(map)
        .bindPopup('HTMB');

    L.marker([-6.22202, 39.2249]).addTo(map)
        .bindPopup('HTZA');

    L.marker([-10.3391, 40.1818]).addTo(map)
        .bindPopup('HTMT');

    L.marker([-10.733, 38.767]).addTo(map)
        .bindPopup('HTMI');

    L.marker([-2.44449, 32.9327]).addTo(map)
        .bindPopup('HTMW');

    L.marker([-9.35, 34.8]).addTo(map)
        .bindPopup('HTNJ');

    L.marker([-7.91748, 39.6685]).addTo(map)
        .bindPopup('HTMA');

    L.marker([-7.94889, 31.6103]).addTo(map)
        .bindPopup('HTSU');

    L.marker([-10.683, 35.583]).addTo(map)
        .bindPopup('HTSO');

    L.marker([-3.52133, 33.6155]).addTo(map)
        .bindPopup('HTMD');

    L.marker([-3.6093, 33.5035]).addTo(map)
        .bindPopup('HTSY');

    L.marker([-2.45806, 34.8225]).addTo(map)
        .bindPopup('HTSN');

    L.marker([-5.07639, 32.8333]).addTo(map)
        .bindPopup('HTTB');

    L.marker([-5.09236, 39.0712]).addTo(map)
        .bindPopup('HTTG');

    L.marker([45.3725, 36.4014]).addTo(map)
        .bindPopup('UKFK');

    L.marker([45.0522, 33.9751]).addTo(map)
        .bindPopup('UKFF');

    L.marker([49.4156, 31.9953]).addTo(map)
        .bindPopup('UKKE');

    L.marker([51.4033, 31.16]).addTo(map)
        .bindPopup('UKKL');

    L.marker([48.2593, 25.9808]).addTo(map)
        .bindPopup('UKLN');

    L.marker([48.3572, 35.1006]).addTo(map)
        .bindPopup('UKDD');

    L.marker([48.0433, 33.21]).addTo(map)
        .bindPopup('UKDR');

    L.marker([48.0736, 37.7397]).addTo(map)
        .bindPopup('UKCC');

    L.marker([48.7056, 37.6289]).addTo(map)
        .bindPopup('UKCK');

    L.marker([47.0761, 37.4496]).addTo(map)
        .bindPopup('UKCM');

    L.marker([48.8842, 24.6861]).addTo(map)
        .bindPopup('UKLI');

    L.marker([49.9248, 36.29]).addTo(map)
        .bindPopup('UKHH');

    L.marker([46.6758, 32.5064]).addTo(map)
        .bindPopup('UKOH');

    L.marker([49.3597, 26.9334]).addTo(map)
        .bindPopup('UKLH');

    L.marker([48.2669, 25.9672]).addTo(map)
        .bindPopup('nan');

    L.marker([48.5428, 32.285]).addTo(map)
        .bindPopup('UKKG');

    L.marker([50.4019, 30.4519]).addTo(map)
        .bindPopup('UKKK');

    L.marker([50.345, 30.8947]).addTo(map)
        .bindPopup('UKBB');

    L.marker([48.9003, 38.5417]).addTo(map)
        .bindPopup('nan');

    L.marker([48.4174, 39.3741]).addTo(map)
        .bindPopup('UKCW');

    L.marker([49.8125, 23.9561]).addTo(map)
        .bindPopup('UKLL');

    L.marker([47.0579, 31.9198]).addTo(map)
        .bindPopup('UKON');

    L.marker([46.4268, 30.6765]).addTo(map)
        .bindPopup('UKOO');

    L.marker([49.1342, 33.4766]).addTo(map)
        .bindPopup('nan');

    L.marker([13.6457, 16.5014]).addTo(map)
        .bindPopup('nan');

    L.marker([49.5686, 34.3972]).addTo(map)
        .bindPopup('UKHP');

    L.marker([50.6071, 26.1416]).addTo(map)
        .bindPopup('UKLR');

    L.marker([44.689, 33.571]).addTo(map)
        .bindPopup('UKFB');

    L.marker([50.8583, 34.7625]).addTo(map)
        .bindPopup('UKHS');

    L.marker([49.5242, 25.7001]).addTo(map)
        .bindPopup('UKLT');

    L.marker([49.2425, 28.6138]).addTo(map)
        .bindPopup('UKWW');

    L.marker([50.6784, 25.4872]).addTo(map)
        .bindPopup('UKLC');

    L.marker([48.6343, 22.2634]).addTo(map)
        .bindPopup('UKLU');

    L.marker([46.815, 36.7581]).addTo(map)
        .bindPopup('UKDB');

    L.marker([47.867, 35.3157]).addTo(map)
        .bindPopup('UKDE');

    L.marker([50.2706, 28.7386]).addTo(map)
        .bindPopup('UKKV');

    L.marker([3.05, 30.917]).addTo(map)
        .bindPopup('HUAR');

    L.marker([2.80556, 32.2718]).addTo(map)
        .bindPopup('HUGU');

    L.marker([0.45, 33.2]).addTo(map)
        .bindPopup('HUJI');

    L.marker([2.32872, 31.4997]).addTo(map)
        .bindPopup('HUKF');

    L.marker([0.042386, 32.4435]).addTo(map)
        .bindPopup('HUEN');

    L.marker([-0.7165, 29.6997]).addTo(map)
        .bindPopup('nan');

    L.marker([0.183, 30.1]).addTo(map)
        .bindPopup('HUKS');

    L.marker([1.75806, 31.7367]).addTo(map)
        .bindPopup('HUMI');

    L.marker([-0.555278, 30.5994]).addTo(map)
        .bindPopup('HUMA');

    L.marker([3.6444, 31.7628]).addTo(map)
        .bindPopup('nan');

    L.marker([2.32639, 31.4978]).addTo(map)
        .bindPopup('HUPA');

    L.marker([1.72769, 33.6228]).addTo(map)
        .bindPopup('HUSO');

    L.marker([0.683, 34.167]).addTo(map)
        .bindPopup('HUTO');

    L.marker([19.2821, 166.636]).addTo(map)
        .bindPopup('PWAK');

    L.marker([33.1065, -88.1978]).addTo(map)
        .bindPopup('KAIV');

    L.marker([32.9147, -85.963]).addTo(map)
        .bindPopup('KALX');

    L.marker([33.5882, -85.8581]).addTo(map)
        .bindPopup('KANB');

    L.marker([33.5699, -86.0509]).addTo(map)
        .bindPopup('KASN');

    L.marker([32.6151, -85.434]).addTo(map)
        .bindPopup('KAUO');

    L.marker([30.6268, -88.0681]).addTo(map)
        .bindPopup('KBFM');

    L.marker([33.5629, -86.7535]).addTo(map)
        .bindPopup('KBHM');

    L.marker([34.6527, -86.9454]).addTo(map)
        .bindPopup('KDCU');

    L.marker([31.3213, -85.4496]).addTo(map)
        .bindPopup('KDHN');

    L.marker([31.2997, -85.8999]).addTo(map)
        .bindPopup('KEDN');

    L.marker([31.9513, -85.1289]).addTo(map)
        .bindPopup('KEUF');

    L.marker([33.9726, -86.089]).addTo(map)
        .bindPopup('KGAD');

    L.marker([30.2905, -87.6718]).addTo(map)
        .bindPopup('KJKA');

    L.marker([34.1176, -87.9982]).addTo(map)
        .bindPopup('KHAB');

    L.marker([34.6372, -86.7751]).addTo(map)
        .bindPopup('KHSV');

    L.marker([34.6787, -86.6848]).addTo(map)
        .bindPopup('KHUA');

    L.marker([32.3006, -86.394]).addTo(map)
        .bindPopup('KMGM');

    L.marker([30.6912, -88.2428]).addTo(map)
        .bindPopup('KMOB');

    L.marker([34.7453, -87.6102]).addTo(map)
        .bindPopup('KMSL');

    L.marker([31.458, -87.351]).addTo(map)
        .bindPopup('KMVC');

    L.marker([32.3829, -86.3658]).addTo(map)
        .bindPopup('KMXF');

    L.marker([30.3891, -87.6353]).addTo(map)
        .bindPopup('KNBJ');

    L.marker([31.2757, -85.7134]).addTo(map)
        .bindPopup('KOZR');

    L.marker([33.5588, -86.2491]).addTo(map)
        .bindPopup('KPLR');

    L.marker([32.3439, -86.9878]).addTo(map)
        .bindPopup('KSEM');

    L.marker([33.2206, -87.6114]).addTo(map)
        .bindPopup('KTCL');

    L.marker([32.4919, -85.7756]).addTo(map)
        .bindPopup('nan');

    L.marker([31.8604, -86.0121]).addTo(map)
        .bindPopup('KTOI');

    L.marker([67.1063, -157.857]).addTo(map)
        .bindPopup('PAFM');

    L.marker([51.878, -176.646]).addTo(map)
        .bindPopup('PADK');

    L.marker([57.75, -152.494]).addTo(map)
        .bindPopup('PADQ');

    L.marker([33.4517, -79.5262]).addTo(map)
        .bindPopup('KPHH');

    L.marker([66.5518, -152.622]).addTo(map)
        .bindPopup('PFAL');

    L.marker([57.5036, -134.585]).addTo(map)
        .bindPopup('PAGN');

    L.marker([70.638, -159.995]).addTo(map)
        .bindPopup('PAWI');

    L.marker([52.2203, -174.206]).addTo(map)
        .bindPopup('PAAK');

    L.marker([60.9029, -161.231]).addTo(map)
        .bindPopup('PFAK');

    L.marker([56.9387, -154.183]).addTo(map)
        .bindPopup('PAKH');

    L.marker([58.6768, -156.649]).addTo(map)
        .bindPopup('PAKN');

    L.marker([68.1336, -151.743]).addTo(map)
        .bindPopup('PAKP');

    L.marker([56.8995, -154.248]).addTo(map)
        .bindPopup('nan');

    L.marker([61.1744, -149.996]).addTo(map)
        .bindPopup('PANC');

    L.marker([61.5816, -159.543]).addTo(map)
        .bindPopup('PANI');

    L.marker([55.0424, -131.572]).addTo(map)
        .bindPopup('PANT');

    L.marker([62.6467, -160.191]).addTo(map)
        .bindPopup('PANV');

    L.marker([57.4715, -153.815]).addTo(map)
        .bindPopup('nan');

    L.marker([60.9661, -149.126]).addTo(map)
        .bindPopup('nan');

    L.marker([68.1147, -145.579]).addTo(map)
        .bindPopup('PARC');

    L.marker([70.4673, -157.436]).addTo(map)
        .bindPopup('PATQ');

    L.marker([60.8667, -162.273]).addTo(map)
        .bindPopup('nan');

    L.marker([52.8284, 173.18]).addTo(map)
        .bindPopup('PAAT');

    L.marker([62.68, -164.66]).addTo(map)
        .bindPopup('nan');

    L.marker([63.5733, -156.149]).addTo(map)
        .bindPopup('nan');

    L.marker([60.7798, -161.838]).addTo(map)
        .bindPopup('PABE');

    L.marker([61.5361, -149.814]).addTo(map)
        .bindPopup('PAGQ');

    L.marker([63.9945, -145.722]).addTo(map)
        .bindPopup('PABI');

    L.marker([65.9816, -161.149]).addTo(map)
        .bindPopup('PABL');

    L.marker([58.5548, -155.777]).addTo(map)
        .bindPopup('nan');

    L.marker([59.3612, -155.259]).addTo(map)
        .bindPopup('PABM');

    L.marker([57.0888, -134.833]).addTo(map)
        .bindPopup('nan');

    L.marker([58.4552, -135.885]).addTo(map)
        .bindPopup('nan');

    L.marker([71.2854, -156.766]).addTo(map)
        .bindPopup('PABR');

    L.marker([60.4231, -146.146]).addTo(map)
        .bindPopup('nan');

    L.marker([70.134, -143.582]).addTo(map)
        .bindPopup('PABA');

    L.marker([66.9139, -151.529]).addTo(map)
        .bindPopup('PABT');

    L.marker([61.1722, -151.044]).addTo(map)
        .bindPopup('PABG');

    L.marker([64.0783, -141.113]).addTo(map)
        .bindPopup('nan');

    L.marker([55.2061, -162.725]).addTo(map)
        .bindPopup('PACD');

    L.marker([65.9077, -161.926]).addTo(map)
        .bindPopup('nan');

    L.marker([60.4918, -145.478]).addTo(map)
        .bindPopup('PACV');

    L.marker([65.5738, -144.783]).addTo(map)
        .bindPopup('PACE');

    L.marker([65.0518, -146.047]).addTo(map)
        .bindPopup('nan');

    L.marker([55.4788, -133.148]).addTo(map)
        .bindPopup('nan');

    L.marker([65.4855, -144.611]).addTo(map)
        .bindPopup('nan');

    L.marker([61.5791, -159.216]).addTo(map)
        .bindPopup('nan');

    L.marker([66.645, -143.74]).addTo(map)
        .bindPopup('PACI');

    L.marker([64.8979, -163.703]).addTo(map)
        .bindPopup('nan');

    L.marker([61.8679, -158.135]).addTo(map)
        .bindPopup('nan');

    L.marker([60.5439, -145.727]).addTo(map)
        .bindPopup('nan');

    L.marker([64.0713, -141.952]).addTo(map)
        .bindPopup('nan');

    L.marker([58.8337, -158.529]).addTo(map)
        .bindPopup('PFCL');

    L.marker([61.5829, -144.427]).addTo(map)
        .bindPopup('nan');

    L.marker([67.2522, -150.204]).addTo(map)
        .bindPopup('PACX');

    L.marker([60.1492, -164.286]).addTo(map)
        .bindPopup('PACK');

    L.marker([57.5149, -134.946]).addTo(map)
        .bindPopup('nan');

    L.marker([60.081, -142.495]).addTo(map)
        .bindPopup('PACY');

    L.marker([61.9412, -145.294]).addTo(map)
        .bindPopup('nan');

    L.marker([61.7803, -166.039]).addTo(map)
        .bindPopup('PACZ');

    L.marker([62.0712, -142.048]).addTo(map)
        .bindPopup('nan');

    L.marker([62.5635, -144.669]).addTo(map)
        .bindPopup('nan');

    L.marker([55.9663, -133.797]).addTo(map)
        .bindPopup('nan');

    L.marker([66.9433, -156.905]).addTo(map)
        .bindPopup('nan');

    L.marker([64.0504, -145.717]).addTo(map)
        .bindPopup('nan');

    L.marker([59.0447, -158.505]).addTo(map)
        .bindPopup('PADL');

    L.marker([60.5889, -152.162]).addTo(map)
        .bindPopup('nan');

    L.marker([66.0696, -162.766]).addTo(map)
        .bindPopup('PADE');

    L.marker([53.9001, -166.544]).addTo(map)
        .bindPopup('PADU');

    L.marker([64.7764, -141.151]).addTo(map)
        .bindPopup('PAEG');

    L.marker([55.9497, -133.661]).addTo(map)
        .bindPopup('nan');

    L.marker([61.251, -149.807]).addTo(map)
        .bindPopup('PAED');

    L.marker([60.2137, -162.044]).addTo(map)
        .bindPopup('PAEE');

    L.marker([58.1855, -157.375]).addTo(map)
        .bindPopup('PAII');

    L.marker([58.6464, -162.063]).addTo(map)
        .bindPopup('PAEH');

    L.marker([64.6657, -147.102]).addTo(map)
        .bindPopup('PAEI');

    L.marker([64.6147, -162.272]).addTo(map)
        .bindPopup('PFEL');

    L.marker([58.1952, -136.347]).addTo(map)
        .bindPopup('PAEL');

    L.marker([60.8938, -146.704]).addTo(map)
        .bindPopup('nan');

    L.marker([62.7861, -164.491]).addTo(map)
        .bindPopup('PAEM');

    L.marker([60.5731, -151.245]).addTo(map)
        .bindPopup('PAEN');

    L.marker([64.5473, -149.074]).addTo(map)
        .bindPopup('PANN');

    L.marker([58.4205, -135.449]).addTo(map)
        .bindPopup('nan');

    L.marker([64.8151, -147.856]).addTo(map)
        .bindPopup('PAFA');

    L.marker([57.5322, -135.213]).addTo(map)
        .bindPopup('nan');

    L.marker([64.8375, -147.614]).addTo(map)
        .bindPopup('PAFB');

    L.marker([62.4526, -157.989]).addTo(map)
        .bindPopup('nan');

    L.marker([58.2544, -134.898]).addTo(map)
        .bindPopup('PANR');

    L.marker([61.2664, -149.653]).addTo(map)
        .bindPopup('PAFR');

    L.marker([62.5093, -153.892]).addTo(map)
        .bindPopup('PAFW');

    L.marker([66.5715, -145.25]).addTo(map)
        .bindPopup('PFYU');

    L.marker([64.7362, -156.937]).addTo(map)
        .bindPopup('PAGA');

    L.marker([63.7668, -171.733]).addTo(map)
        .bindPopup('PAGM');

    L.marker([68.4797, -149.49]).addTo(map)
        .bindPopup('PAGB');

    L.marker([59.747, -158.875]).addTo(map)
        .bindPopup('nan');

    L.marker([62.1549, -145.457]).addTo(map)
        .bindPopup('PAGK');

    L.marker([64.5505, -163.007]).addTo(map)
        .bindPopup('PAGL');

    L.marker([65.4021, -161.281]).addTo(map)
        .bindPopup('PAGZ');

    L.marker([59.1174, -161.577]).addTo(map)
        .bindPopup('nan');

    L.marker([58.4253, -135.707]).addTo(map)
        .bindPopup('PAGS');

    L.marker([57.4122, -133.438]).addTo(map)
        .bindPopup('nan');

    L.marker([62.1883, -159.775]).addTo(map)
        .bindPopup('PAHC');

    L.marker([55.8014, -160.899]).addTo(map)
        .bindPopup('nan');

    L.marker([66.2161, -155.669]).addTo(map)
        .bindPopup('nan');

    L.marker([63.9958, -144.693]).addTo(map)
        .bindPopup('nan');

    L.marker([58.0961, -135.41]).addTo(map)
        .bindPopup('PAOH');

    L.marker([59.2438, -135.524]).addTo(map)
        .bindPopup('PAHN');

    L.marker([59.6456, -151.477]).addTo(map)
        .bindPopup('PAHO');

    L.marker([61.5239, -166.147]).addTo(map)
        .bindPopup('PAHP');

    L.marker([65.6979, -156.351]).addTo(map)
        .bindPopup('PAHL');

    L.marker([66.0411, -154.263]).addTo(map)
        .bindPopup('PAHU');

    L.marker([58.1274, -134.756]).addTo(map)
        .bindPopup('nan');

    L.marker([55.2063, -132.828]).addTo(map)
        .bindPopup('PAHY');

    L.marker([55.4816, -132.646]).addTo(map)
        .bindPopup('nan');

    L.marker([66.976, -160.437]).addTo(map)
        .bindPopup('PAIK');

    L.marker([59.969, -141.662]).addTo(map)
        .bindPopup('nan');

    L.marker([59.324, -155.902]).addTo(map)
        .bindPopup('PAIG');

    L.marker([52.9416, -168.849]).addTo(map)
        .bindPopup('PAKO');

    L.marker([59.7544, -154.911]).addTo(map)
        .bindPopup('PAIL');

    L.marker([65.8305, -144.076]).addTo(map)
        .bindPopup('PACR');

    L.marker([60.782, -161.743]).addTo(map)
        .bindPopup('nan');

    L.marker([60.4827, -149.719]).addTo(map)
        .bindPopup('nan');

    L.marker([58.355, -134.576]).addTo(map)
        .bindPopup('PAJN');

    L.marker([56.973, -133.946]).addTo(map)
        .bindPopup('PAFE');

    L.marker([64.3191, -158.741]).addTo(map)
        .bindPopup('PAKV');

    L.marker([66.274, -145.824]).addTo(map)
        .bindPopup('nan');

    L.marker([55.9291, -131.572]).addTo(map)
        .bindPopup('nan');

    L.marker([56.2956, -158.401]).addTo(map)
        .bindPopup('nan');

    L.marker([56.0032, -132.842]).addTo(map)
        .bindPopup('nan');

    L.marker([56.3112, -158.536]).addTo(map)
        .bindPopup('nan');

    L.marker([53.4029, -167.52]).addTo(map)
        .bindPopup('nan');

    L.marker([56.255, -158.775]).addTo(map)
        .bindPopup('nan');

    L.marker([63.5677, -155.989]).addTo(map)
        .bindPopup('nan');

    L.marker([57.8059, -152.374]).addTo(map)
        .bindPopup('PAKD');

    L.marker([59.3521, -151.925]).addTo(map)
        .bindPopup('nan');

    L.marker([59.3568, -157.471]).addTo(map)
        .bindPopup('nan');

    L.marker([54.8474, -163.41]).addTo(map)
        .bindPopup('PAKF');

    L.marker([59.7266, -157.259]).addTo(map)
        .bindPopup('PAJZ');

    L.marker([62.8952, -160.066]).addTo(map)
        .bindPopup('nan');

    L.marker([61.4551, -142.381]).addTo(map)
        .bindPopup('nan');

    L.marker([55.8975, -159.489]).addTo(map)
        .bindPopup('nan');

    L.marker([64.9395, -161.154]).addTo(map)
        .bindPopup('PAKK');

    L.marker([58.1909, -152.37]).addTo(map)
        .bindPopup('nan');

    L.marker([59.9608, -162.881]).addTo(map)
        .bindPopup('PADY');

    L.marker([60.9048, -161.422]).addTo(map)
        .bindPopup('nan');

    L.marker([64.4166, -156.82]).addTo(map)
        .bindPopup('nan');

    L.marker([57.367, -154.028]).addTo(map)
        .bindPopup('nan');

    L.marker([58.8112, -158.559]).addTo(map)
        .bindPopup('nan');

    L.marker([61.5363, -160.341]).addTo(map)
        .bindPopup('PALG');

    L.marker([59.1281, -156.859]).addTo(map)
        .bindPopup('nan');

    L.marker([57.5351, -153.978]).addTo(map)
        .bindPopup('PALB');

    L.marker([55.5792, -133.076]).addTo(map)
        .bindPopup('PAKW');

    L.marker([58.9902, -159.05]).addTo(map)
        .bindPopup('PAMB');

    L.marker([57.0256, -154.146]).addTo(map)
        .bindPopup('nan');

    L.marker([59.4499, -157.328]).addTo(map)
        .bindPopup('PANW');

    L.marker([63.0306, -163.533]).addTo(map)
        .bindPopup('PFKO');

    L.marker([57.1615, -154.23]).addTo(map)
        .bindPopup('nan');

    L.marker([57.9254, -152.497]).addTo(map)
        .bindPopup('nan');

    L.marker([56.3519, -133.623]).addTo(map)
        .bindPopup('nan');

    L.marker([65.2537, -166.859]).addTo(map)
        .bindPopup('PAPC');

    L.marker([59.933, -164.031]).addTo(map)
        .bindPopup('PAKI');

    L.marker([58.4901, -152.582]).addTo(map)
        .bindPopup('nan');

    L.marker([55.906, -159.163]).addTo(map)
        .bindPopup('PAPE');

    L.marker([57.9301, -153.041]).addTo(map)
        .bindPopup('nan');

    L.marker([54.1338, -165.779]).addTo(map)
        .bindPopup('nan');

    L.marker([62.0605, -163.302]).addTo(map)
        .bindPopup('PASM');

    L.marker([55.688, -132.537]).addTo(map)
        .bindPopup('nan');

    L.marker([59.9632, -158.477]).addTo(map)
        .bindPopup('nan');

    L.marker([55.3556, -131.714]).addTo(map)
        .bindPopup('PAKT');

    L.marker([65.3313, -166.466]).addTo(map)
        .bindPopup('PFKT');

    L.marker([60.8744, -162.524]).addTo(map)
        .bindPopup('PFKA');

    L.marker([55.1163, -162.266]).addTo(map)
        .bindPopup('PAVC');

    L.marker([67.7362, -164.563]).addTo(map)
        .bindPopup('PAVL');

    L.marker([55.2963, -133.243]).addTo(map)
        .bindPopup('nan');

    L.marker([59.8765, -163.169]).addTo(map)
        .bindPopup('PAGG');

    L.marker([59.7551, -161.845]).addTo(map)
        .bindPopup('PAQH');

    L.marker([57.7701, -153.549]).addTo(map)
        .bindPopup('nan');

    L.marker([60.7903, -161.444]).addTo(map)
        .bindPopup('PFKW');

    L.marker([55.5374, -132.398]).addTo(map)
        .bindPopup('nan');

    L.marker([57.5671, -154.45]).addTo(map)
        .bindPopup('PAKY');

    L.marker([64.8761, -157.727]).addTo(map)
        .bindPopup('PFKU');

    L.marker([57.553, -153.746]).addTo(map)
        .bindPopup('nan');

    L.marker([65.467, -148.653]).addTo(map)
        .bindPopup('nan');

    L.marker([58.9821, -155.121]).addTo(map)
        .bindPopup('PAKL');

    L.marker([63.886, -152.302]).addTo(map)
        .bindPopup('PAMH');

    L.marker([70.9107, -153.242]).addTo(map)
        .bindPopup('PALN');

    L.marker([68.8751, -166.11]).addTo(map)
        .bindPopup('PALU');

    L.marker([61.3591, -155.44]).addTo(map)
        .bindPopup('nan');

    L.marker([62.9529, -155.606]).addTo(map)
        .bindPopup('PAMC');

    L.marker([63.7326, -148.911]).addTo(map)
        .bindPopup('PAIN');

    L.marker([59.4499, -146.307]).addTo(map)
        .bindPopup('PAMD');

    L.marker([61.8643, -162.026]).addTo(map)
        .bindPopup('PADM');

    L.marker([64.9976, -150.644]).addTo(map)
        .bindPopup('PAML');

    L.marker([65.1437, -149.37]).addTo(map)
        .bindPopup('nan');

    L.marker([47.777, 10.623]).addTo(map)
        .bindPopup('nan');

    L.marker([62.0954, -163.682]).addTo(map)
        .bindPopup('PAMO');

    L.marker([61.2135, -149.844]).addTo(map)
        .bindPopup('PAMR');

    L.marker([55.131, -131.578]).addTo(map)
        .bindPopup('PAMM');

    L.marker([64.8068, -147.762]).addTo(map)
        .bindPopup('PABK');

    L.marker([61.4371, -142.904]).addTo(map)
        .bindPopup('PAMX');

    L.marker([61.3357, -142.687]).addTo(map)
        .bindPopup('nan');

    L.marker([60.3714, -166.271]).addTo(map)
        .bindPopup('PAMY');

    L.marker([60.0773, -147.992]).addTo(map)
        .bindPopup('PFCB');

    L.marker([63.0186, -154.358]).addTo(map)
        .bindPopup('PAFS');

    L.marker([60.0207, -151.591]).addTo(map)
        .bindPopup('nan');

    L.marker([55.8496, -133.228]).addTo(map)
        .bindPopup('nan');

    L.marker([56.0075, -161.16]).addTo(map)
        .bindPopup('PAOU');

    L.marker([60.471, -164.701]).addTo(map)
        .bindPopup('PAGT');

    L.marker([58.7329, -157.02]).addTo(map)
        .bindPopup('nan');

    L.marker([59.9802, -154.839]).addTo(map)
        .bindPopup('PANO');

    L.marker([70.21, -151.006]).addTo(map)
        .bindPopup('PAQT');

    L.marker([64.7293, -158.074]).addTo(map)
        .bindPopup('PANU');

    L.marker([60.9056, -162.44]).addTo(map)
        .bindPopup('nan');

    L.marker([66.9123, -156.897]).addTo(map)
        .bindPopup('PAOB');

    L.marker([57.2181, -153.27]).addTo(map)
        .bindPopup('nan');

    L.marker([64.5122, -165.445]).addTo(map)
        .bindPopup('PAOM');

    L.marker([60.5414, -165.087]).addTo(map)
        .bindPopup('PAOO');

    L.marker([57.8853, -152.846]).addTo(map)
        .bindPopup('KORI');

    L.marker([62.9613, -141.929]).addTo(map)
        .bindPopup('PAOR');

    L.marker([66.8179, -161.019]).addTo(map)
        .bindPopup('PFNO');

    L.marker([66.8847, -162.599]).addTo(map)
        .bindPopup('PAOT');

    L.marker([61.5949, -149.089]).addTo(map)
        .bindPopup('PAAQ');

    L.marker([58.9065, -157.714]).addTo(map)
        .bindPopup('PAOC');

    L.marker([59.7896, -154.124]).addTo(map)
        .bindPopup('nan');

    L.marker([57.9552, -136.236]).addTo(map)
        .bindPopup('nan');

    L.marker([59.3483, -151.832]).addTo(map)
        .bindPopup('nan');

    L.marker([68.3488, -166.799]).addTo(map)
        .bindPopup('PAPO');

    L.marker([57.5804, -157.572]).addTo(map)
        .bindPopup('PAPN');

    L.marker([69.7329, -163.005]).addTo(map)
        .bindPopup('PPIZ');

    L.marker([60.7029, -161.778]).addTo(map)
        .bindPopup('PAPK');

    L.marker([56.006, -160.561]).addTo(map)
        .bindPopup('PAAL');

    L.marker([66.8141, -150.644]).addTo(map)
        .bindPopup('PAPR');

    L.marker([56.3288, -133.61]).addTo(map)
        .bindPopup('nan');

    L.marker([61.9346, -162.9]).addTo(map)
        .bindPopup('nan');

    L.marker([56.8017, -132.945]).addTo(map)
        .bindPopup('PAPG');

    L.marker([60.2017, -154.326]).addTo(map)
        .bindPopup('PALJ');

    L.marker([55.803, -133.597]).addTo(map)
        .bindPopup('nan');

    L.marker([56.2468, -134.648]).addTo(map)
        .bindPopup('PAAP');

    L.marker([56.9591, -158.633]).addTo(map)
        .bindPopup('PAPH');

    L.marker([59.0114, -161.82]).addTo(map)
        .bindPopup('PAPM');

    L.marker([56.381, -134.651]).addTo(map)
        .bindPopup('nan');

    L.marker([60.6853, -147.919]).addTo(map)
        .bindPopup('nan');

    L.marker([64.7272, -155.47]).addTo(map)
        .bindPopup('PARY');

    L.marker([68.0321, -162.899]).addTo(map)
        .bindPopup('PADG');

    L.marker([61.7881, -157.35]).addTo(map)
        .bindPopup('nan');

    L.marker([65.5079, -150.141]).addTo(map)
        .bindPopup('nan');

    L.marker([61.7789, -161.319]).addTo(map)
        .bindPopup('PARS');

    L.marker([70.1947, -148.465]).addTo(map)
        .bindPopup('PASC');

    L.marker([61.8453, -165.571]).addTo(map)
        .bindPopup('PACM');

    L.marker([55.315, -160.523]).addTo(map)
        .bindPopup('PASD');

    L.marker([56.8863, -134.158]).addTo(map)
        .bindPopup('nan');

    L.marker([59.4601, -135.316]).addTo(map)
        .bindPopup('PAGY');

    L.marker([66.8881, -157.162]).addTo(map)
        .bindPopup('PAGH');

    L.marker([66.2496, -166.089]).addTo(map)
        .bindPopup('PASH');

    L.marker([62.6923, -159.569]).addTo(map)
        .bindPopup('PAHX');

    L.marker([57.0471, -135.362]).addTo(map)
        .bindPopup('PASI');

    L.marker([64.3711, -161.224]).addTo(map)
        .bindPopup('PFSH');

    L.marker([61.9653, -151.191]).addTo(map)
        .bindPopup('PASW');

    L.marker([61.7005, -157.166]).addTo(map)
        .bindPopup('PASL');

    L.marker([63.4901, -162.11]).addTo(map)
        .bindPopup('PAMK');

    L.marker([61.812, -147.507]).addTo(map)
        .bindPopup('PASP');

    L.marker([57.1673, -170.22]).addTo(map)
        .bindPopup('PASN');

    L.marker([64.5605, -164.446]).addTo(map)
        .bindPopup('nan');

    L.marker([59.4424, -151.704]).addTo(map)
        .bindPopup('PASO');

    L.marker([61.7897, -156.589]).addTo(map)
        .bindPopup('nan');

    L.marker([56.5783, -169.662]).addTo(map)
        .bindPopup('PAPB');

    L.marker([63.6864, -170.493]).addTo(map)
        .bindPopup('PASA');

    L.marker([66.0172, -149.055]).addTo(map)
        .bindPopup('nan');

    L.marker([61.0974, -155.574]).addTo(map)
        .bindPopup('PASV');

    L.marker([60.1269, -149.419]).addTo(map)
        .bindPopup('PAWD');

    L.marker([62.5206, -164.848]).addTo(map)
        .bindPopup('nan');

    L.marker([60.4757, -151.034]).addTo(map)
        .bindPopup('PASX');

    L.marker([52.7123, 174.114]).addTo(map)
        .bindPopup('PASY');

    L.marker([58.3733, -152.202]).addTo(map)
        .bindPopup('nan');

    L.marker([65.1744, -152.109]).addTo(map)
        .bindPopup('PATA');

    L.marker([62.9932, -156.029]).addTo(map)
        .bindPopup('nan');

    L.marker([63.1339, -142.519]).addTo(map)
        .bindPopup('nan');

    L.marker([60.8714, -146.69]).addTo(map)
        .bindPopup('nan');

    L.marker([62.3205, -150.094]).addTo(map)
        .bindPopup('PATK');

    L.marker([57.7797, -135.218]).addTo(map)
        .bindPopup('nan');

    L.marker([55.9371, -133.327]).addTo(map)
        .bindPopup('nan');

    L.marker([63.3295, -142.954]).addTo(map)
        .bindPopup('PFTO');

    L.marker([58.4897, -133.943]).addTo(map)
        .bindPopup('nan');

    L.marker([65.2404, -166.339]).addTo(map)
        .bindPopup('PATE');

    L.marker([63.3939, -153.269]).addTo(map)
        .bindPopup('nan');

    L.marker([62.8944, -155.977]).addTo(map)
        .bindPopup('PATL');

    L.marker([61.0968, -160.969]).addTo(map)
        .bindPopup('nan');

    L.marker([65.5631, -167.922]).addTo(map)
        .bindPopup('PATC');

    L.marker([60.5755, -165.272]).addTo(map)
        .bindPopup('nan');

    L.marker([59.0528, -160.397]).addTo(map)
        .bindPopup('PATG');

    L.marker([63.3744, -143.336]).addTo(map)
        .bindPopup('nan');

    L.marker([59.0756, -160.273]).addTo(map)
        .bindPopup('nan');

    L.marker([65.6793, -164.799]).addTo(map)
        .bindPopup('nan');

    L.marker([61.0767, -151.138]).addTo(map)
        .bindPopup('nan');

    L.marker([57.4254, -157.74]).addTo(map)
        .bindPopup('nan');

    L.marker([57.7304, -153.321]).addTo(map)
        .bindPopup('nan');

    L.marker([57.5279, -157.399]).addTo(map)
        .bindPopup('nan');

    L.marker([63.3315, -149.127]).addTo(map)
        .bindPopup('PAST');

    L.marker([69.3711, -152.136]).addTo(map)
        .bindPopup('PAUM');

    L.marker([63.8884, -160.799]).addTo(map)
        .bindPopup('PAUN');

    L.marker([65.9928, -153.704]).addTo(map)
        .bindPopup('PAIM');

    L.marker([70.3308, -149.598]).addTo(map)
        .bindPopup('PAKU');

    L.marker([61.5409, -165.6]).addTo(map)
        .bindPopup('PAVA');

    L.marker([61.1339, -146.248]).addTo(map)
        .bindPopup('PAVD');

    L.marker([67.0087, -146.366]).addTo(map)
        .bindPopup('PAVE');

    L.marker([65.6226, -168.095]).addTo(map)
        .bindPopup('PAIW');

    L.marker([63.516, -162.278]).addTo(map)
        .bindPopup('nan');

    L.marker([66.3622, -147.407]).addTo(map)
        .bindPopup('PAWB');

    L.marker([67.5045, -148.483]).addTo(map)
        .bindPopup('PALR');

    L.marker([55.3499, -131.677]).addTo(map)
        .bindPopup('nan');

    L.marker([55.9033, -130.01]).addTo(map)
        .bindPopup('nan');

    L.marker([59.2826, -158.618]).addTo(map)
        .bindPopup('nan');

    L.marker([66.6001, -159.986]).addTo(map)
        .bindPopup('PASK');

    L.marker([55.6013, -131.637]).addTo(map)
        .bindPopup('nan');

    L.marker([55.7396, -132.255]).addTo(map)
        .bindPopup('nan');

    L.marker([64.6892, -163.413]).addTo(map)
        .bindPopup('PAWM');

    L.marker([60.6903, -161.979]).addTo(map)
        .bindPopup('PANA');

    L.marker([61.7542, -150.052]).addTo(map)
        .bindPopup('PAUO');

    L.marker([56.4843, -132.37]).addTo(map)
        .bindPopup('PAWG');

    L.marker([55.5296, -133.642]).addTo(map)
        .bindPopup('nan');

    L.marker([61.1821, -149.863]).addTo(map)
        .bindPopup('PACS');

    L.marker([67.4046, -150.123]).addTo(map)
        .bindPopup('nan');

    L.marker([58.7034, -157.008]).addTo(map)
        .bindPopup('PFWS');

    L.marker([67.5661, -162.975]).addTo(map)
        .bindPopup('PAWN');

    L.marker([60.3353, -162.667]).addTo(map)
        .bindPopup('nan');

    L.marker([61.5717, -149.54]).addTo(map)
        .bindPopup('PAWS');

    L.marker([56.1163, -133.122]).addTo(map)
        .bindPopup('nan');

    L.marker([60.9391, -164.641]).addTo(map)
        .bindPopup('PAEW');

    L.marker([55.9163, -131.801]).addTo(map)
        .bindPopup('nan');

    L.marker([59.5033, -139.66]).addTo(map)
        .bindPopup('PAYA');

    L.marker([60.9807, -159.994]).addTo(map)
        .bindPopup('nan');

    L.marker([32.4096, -111.218]).addTo(map)
        .bindPopup('KAVQ');

    L.marker([33.3078, -111.655]).addTo(map)
        .bindPopup('KIWA');

    L.marker([34.5959, -113.17]).addTo(map)
        .bindPopup('nan');

    L.marker([31.364, -109.883]).addTo(map)
        .bindPopup('nan');

    L.marker([33.4204, -112.686]).addTo(map)
        .bindPopup('KBXK');

    L.marker([32.9528, -109.21]).addTo(map)
        .bindPopup('KCFT');

    L.marker([32.9549, -111.767]).addTo(map)
        .bindPopup('KCGZ');

    L.marker([34.73, -112.035]).addTo(map)
        .bindPopup('nan');

    L.marker([32.2454, -109.895]).addTo(map)
        .bindPopup('nan');

    L.marker([31.3426, -109.506]).addTo(map)
        .bindPopup('KDGL');

    L.marker([32.1665, -110.883]).addTo(map)
        .bindPopup('KDMA');

    L.marker([31.469, -109.604]).addTo(map)
        .bindPopup('KDUG');

    L.marker([33.6883, -112.083]).addTo(map)
        .bindPopup('KDVT');

    L.marker([31.5885, -110.344]).addTo(map)
        .bindPopup('KFHU');

    L.marker([35.1385, -111.671]).addTo(map)
        .bindPopup('KFLG');

    L.marker([35.9524, -112.147]).addTo(map)
        .bindPopup('KGCN');

    L.marker([35.9904, -113.816]).addTo(map)
        .bindPopup('nan');

    L.marker([33.3531, -110.667]).addTo(map)
        .bindPopup('nan');

    L.marker([33.4225, -112.376]).addTo(map)
        .bindPopup('KGYR');

    L.marker([34.9407, -110.138]).addTo(map)
        .bindPopup('nan');

    L.marker([34.5711, -114.358]).addTo(map)
        .bindPopup('KHII');

    L.marker([35.1574, -114.56]).addTo(map)
        .bindPopup('KIFP');

    L.marker([35.2595, -113.938]).addTo(map)
        .bindPopup('KIGM');

    L.marker([35.0219, -110.723]).addTo(map)
        .bindPopup('KINW');

    L.marker([32.86, -114.397]).addTo(map)
        .bindPopup('KLGF');

    L.marker([33.535, -112.383]).addTo(map)
        .bindPopup('KLUF');

    L.marker([33.4608, -111.728]).addTo(map)
        .bindPopup('KFFZ');

    L.marker([36.7164, -110.228]).addTo(map)
        .bindPopup('nan');

    L.marker([36.8116, -111.642]).addTo(map)
        .bindPopup('nan');

    L.marker([32.5106, -111.328]).addTo(map)
        .bindPopup('KMZJ');

    L.marker([31.4177, -110.848]).addTo(map)
        .bindPopup('KOLS');

    L.marker([36.9261, -111.448]).addTo(map)
        .bindPopup('KPGA');

    L.marker([35.5713, -113.293]).addTo(map)
        .bindPopup('nan');

    L.marker([33.4343, -112.012]).addTo(map)
        .bindPopup('KPHX');

    L.marker([34.2568, -111.339]).addTo(map)
        .bindPopup('KPAN');

    L.marker([34.6545, -112.42]).addTo(map)
        .bindPopup('KPRC');

    L.marker([35.7917, -110.423]).addTo(map)
        .bindPopup('nan');

    L.marker([32.8548, -109.635]).addTo(map)
        .bindPopup('KSAD');

    L.marker([33.6229, -111.911]).addTo(map)
        .bindPopup('KSDL');

    L.marker([34.8486, -111.788]).addTo(map)
        .bindPopup('KSEZ');

    L.marker([34.5186, -109.379]).addTo(map)
        .bindPopup('KSJN');

    L.marker([34.2655, -110.006]).addTo(map)
        .bindPopup('KSOW');

    L.marker([36.0928, -111.383]).addTo(map)
        .bindPopup('nan');

    L.marker([32.1161, -110.941]).addTo(map)
        .bindPopup('KTUS');

    L.marker([34.4528, -110.115]).addTo(map)
        .bindPopup('KTYL');

    L.marker([35.6506, -112.148]).addTo(map)
        .bindPopup('nan');

    L.marker([33.8125, -109.987]).addTo(map)
        .bindPopup('nan');

    L.marker([32.6566, -114.606]).addTo(map)
        .bindPopup('KNYL');

    L.marker([33.228, -93.217]).addTo(map)
        .bindPopup('KAGO');

    L.marker([36.1247, -90.9251]).addTo(map)
        .bindPopup('KARG');

    L.marker([35.1351, -90.2344]).addTo(map)
        .bindPopup('KAWM');

    L.marker([35.7262, -91.6473]).addTo(map)
        .bindPopup('KBVX');

    L.marker([35.9643, -89.944]).addTo(map)
        .bindPopup('KBYH');

    L.marker([33.6228, -92.7634]).addTo(map)
        .bindPopup('KCDH');

    L.marker([36.2649, -91.5626]).addTo(map)
        .bindPopup('KCVK');

    L.marker([33.1783, -91.8802]).addTo(map)
        .bindPopup('KCRT');

    L.marker([33.221, -92.8133]).addTo(map)
        .bindPopup('KELD');

    L.marker([34.942, -90.775]).addTo(map)
        .bindPopup('KFCY');

    L.marker([36.2909, -92.5903]).addTo(map)
        .bindPopup('KFLP');

    L.marker([35.3366, -94.3674]).addTo(map)
        .bindPopup('KFSM');

    L.marker([36.0051, -94.1701]).addTo(map)
        .bindPopup('KFYV');

    L.marker([34.5766, -90.6762]).addTo(map)
        .bindPopup('KHEE');

    L.marker([35.9404, -89.8308]).addTo(map)
        .bindPopup('KHKA');

    L.marker([34.478, -93.0962]).addTo(map)
        .bindPopup('KHOT');

    L.marker([36.2615, -93.1547]).addTo(map)
        .bindPopup('KHRO');

    L.marker([35.8317, -90.6464]).addTo(map)
        .bindPopup('KJBR');

    L.marker([34.7294, -92.2243]).addTo(map)
        .bindPopup('KLIT');

    L.marker([34.9169, -92.1497]).addTo(map)
        .bindPopup('KLRF');

    L.marker([35.1389, -92.9092]).addTo(map)
        .bindPopup('KMPJ');

    L.marker([35.8944, -90.1546]).addTo(map)
        .bindPopup('KMXA');

    L.marker([34.1731, -91.9356]).addTo(map)
        .bindPopup('KPBF');

    L.marker([36.0629, -90.5078]).addTo(map)
        .bindPopup('KPGR');

    L.marker([36.3723, -94.1069]).addTo(map)
        .bindPopup('KROG');

    L.marker([34.5995, -91.575]).addTo(map)
        .bindPopup('KSGT');

    L.marker([36.1919, -94.49]).addTo(map)
        .bindPopup('KSLG');

    L.marker([36.1764, -94.1193]).addTo(map)
        .bindPopup('KASG');

    L.marker([35.2106, -91.7375]).addTo(map)
        .bindPopup('KSRC');

    L.marker([33.4537, -93.991]).addTo(map)
        .bindPopup('KTXK');

    L.marker([36.3689, -92.4705]).addTo(map)
        .bindPopup('KBPK');

    L.marker([36.2819, -94.3068]).addTo(map)
        .bindPopup('KXNA');

    L.marker([40.9781, -124.109]).addTo(map)
        .bindPopup('KACV');

    L.marker([40.2662, -120.153]).addTo(map)
        .bindPopup('KAHC');

    L.marker([38.2132, -122.281]).addTo(map)
        .bindPopup('KAPC');

    L.marker([34.5753, -117.186]).addTo(map)
        .bindPopup('KAPV');

    L.marker([38.9548, -121.082]).addTo(map)
        .bindPopup('KAUN');

    L.marker([33.4049, -118.416]).addTo(map)
        .bindPopup('KAVX');

    L.marker([39.1361, -121.437]).addTo(map)
        .bindPopup('KBAB');

    L.marker([35.4336, -119.057]).addTo(map)
        .bindPopup('KBFL');

    L.marker([37.3731, -118.364]).addTo(map)
        .bindPopup('KBIH');

    L.marker([33.6192, -114.717]).addTo(map)
        .bindPopup('KBLH');

    L.marker([39.275, -120.71]).addTo(map)
        .bindPopup('KBLU');

    L.marker([33.9231, -116.851]).addTo(map)
        .bindPopup('KBNG');

    L.marker([34.2007, -118.359]).addTo(map)
        .bindPopup('KBUR');

    L.marker([32.9929, -115.517]).addTo(map)
        .bindPopup('KBWC');

    L.marker([33.259, -116.321]).addTo(map)
        .bindPopup('nan');

    L.marker([35.2805, -116.63]).addTo(map)
        .bindPopup('KBYS');

    L.marker([40.5749, -122.408]).addTo(map)
        .bindPopup('nan');

    L.marker([34.1116, -117.688]).addTo(map)
        .bindPopup('KCCB');

    L.marker([37.9897, -122.057]).addTo(map)
        .bindPopup('KCCR');

    L.marker([41.7802, -124.237]).addTo(map)
        .bindPopup('KCEC');

    L.marker([39.7954, -121.858]).addTo(map)
        .bindPopup('KCIC');

    L.marker([38.9906, -122.901]).addTo(map)
        .bindPopup('nan');

    L.marker([33.1283, -117.28]).addTo(map)
        .bindPopup('KCRQ');

    L.marker([36.1631, -120.294]).addTo(map)
        .bindPopup('nan');

    L.marker([33.1315, -115.521]).addTo(map)
        .bindPopup('KCLR');

    L.marker([33.9747, -117.637]).addTo(map)
        .bindPopup('KCNO');

    L.marker([38.0304, -120.415]).addTo(map)
        .bindPopup('nan');

    L.marker([33.89, -118.244]).addTo(map)
        .bindPopup('KCPM');

    L.marker([36.1025, -119.595]).addTo(map)
        .bindPopup('KCRO');

    L.marker([32.6695, -115.513]).addTo(map)
        .bindPopup('KCXL');

    L.marker([34.8537, -116.787]).addTo(map)
        .bindPopup('KDAG');

    L.marker([36.4638, -116.881]).addTo(map)
        .bindPopup('nan');

    L.marker([34.9054, -117.884]).addTo(map)
        .bindPopup('KEDW');

    L.marker([34.7663, -114.623]).addTo(map)
        .bindPopup('KEED');

    L.marker([40.8034, -124.113]).addTo(map)
        .bindPopup('KEKA');

    L.marker([34.0861, -118.035]).addTo(map)
        .bindPopup('KEMT');

    L.marker([36.7762, -119.718]).addTo(map)
        .bindPopup('KFAT');

    L.marker([36.7324, -119.82]).addTo(map)
        .bindPopup('KFCH');

    L.marker([39.4743, -123.796]).addTo(map)
        .bindPopup('nan');

    L.marker([33.872, -117.98]).addTo(map)
        .bindPopup('KFUL');

    L.marker([39.9439, -120.945]).addTo(map)
        .bindPopup('nan');

    L.marker([37.5134, -122.501]).addTo(map)
        .bindPopup('KHAF');

    L.marker([33.9228, -118.335]).addTo(map)
        .bindPopup('KHHR');

    L.marker([36.8933, -121.41]).addTo(map)
        .bindPopup('KCVH');

    L.marker([33.734, -117.023]).addTo(map)
        .bindPopup('KHMT');

    L.marker([37.6592, -122.122]).addTo(map)
        .bindPopup('KHWD');

    L.marker([32.8342, -115.579]).addTo(map)
        .bindPopup('KIPL');

    L.marker([35.6588, -117.83]).addTo(map)
        .bindPopup('KIYK');

    L.marker([36.228, -121.122]).addTo(map)
        .bindPopup('KKIC');

    L.marker([33.9425, -118.408]).addTo(map)
        .bindPopup('KLAX');

    L.marker([33.8177, -118.152]).addTo(map)
        .bindPopup('KLGB');

    L.marker([34.6656, -120.468]).addTo(map)
        .bindPopup('KLPC');

    L.marker([37.0629, -120.869]).addTo(map)
        .bindPopup('KLSN');

    L.marker([37.6934, -121.82]).addTo(map)
        .bindPopup('KLVK');

    L.marker([36.9886, -120.112]).addTo(map)
        .bindPopup('KMAE');

    L.marker([38.6676, -121.401]).addTo(map)
        .bindPopup('KMCC');

    L.marker([37.2847, -120.514]).addTo(map)
        .bindPopup('KMCE');

    L.marker([37.3805, -120.568]).addTo(map)
        .bindPopup('KMER');

    L.marker([38.5539, -121.298]).addTo(map)
        .bindPopup('KMHR');

    L.marker([41.2632, -122.272]).addTo(map)
        .bindPopup('nan');

    L.marker([35.0594, -118.152]).addTo(map)
        .bindPopup('KMHV');

    L.marker([35.5074, -119.192]).addTo(map)
        .bindPopup('KMIT');

    L.marker([37.6241, -118.838]).addTo(map)
        .bindPopup('KMMH');

    L.marker([37.6258, -120.954]).addTo(map)
        .bindPopup('KMOD');

    L.marker([36.587, -121.843]).addTo(map)
        .bindPopup('KMRY');

    L.marker([32.8157, -117.14]).addTo(map)
        .bindPopup('KMYF');

    L.marker([39.0978, -121.57]).addTo(map)
        .bindPopup('KMYV');

    L.marker([32.8292, -115.672]).addTo(map)
        .bindPopup('KNJK');

    L.marker([32.8684, -117.143]).addTo(map)
        .bindPopup('KNKX');

    L.marker([36.333, -119.952]).addTo(map)
        .bindPopup('KNLC');

    L.marker([40.7193, -123.928]).addTo(map)
        .bindPopup('nan');

    L.marker([38.1436, -122.556]).addTo(map)
        .bindPopup('KDVO');

    L.marker([37.408, -121.109]).addTo(map)
        .bindPopup('KNRC');

    L.marker([32.5667, -117.117]).addTo(map)
        .bindPopup('KNRS');

    L.marker([34.1203, -119.121]).addTo(map)
        .bindPopup('KNTD');

    L.marker([37.4161, -122.049]).addTo(map)
        .bindPopup('KNUQ');

    L.marker([39.8185, -120.353]).addTo(map)
        .bindPopup('nan');

    L.marker([32.6992, -117.215]).addTo(map)
        .bindPopup('KNZY');

    L.marker([37.7213, -122.221]).addTo(map)
        .bindPopup('KOAK');

    L.marker([36.6819, -121.762]).addTo(map)
        .bindPopup('KOAR');

    L.marker([33.2173, -117.354]).addTo(map)
        .bindPopup('KOKB');

    L.marker([37.7563, -120.8]).addTo(map)
        .bindPopup('nan');

    L.marker([34.056, -117.601]).addTo(map)
        .bindPopup('KONT');

    L.marker([39.4878, -121.622]).addTo(map)
        .bindPopup('KOVE');

    L.marker([34.2008, -119.207]).addTo(map)
        .bindPopup('KOXR');

    L.marker([37.4611, -122.115]).addTo(map)
        .bindPopup('KPAO');

    L.marker([34.6294, -118.085]).addTo(map)
        .bindPopup('KPMD');

    L.marker([34.0916, -117.782]).addTo(map)
        .bindPopup('KPOC');

    L.marker([35.6729, -120.627]).addTo(map)
        .bindPopup('KPRB');

    L.marker([33.8297, -116.507]).addTo(map)
        .bindPopup('KPSP');

    L.marker([36.0296, -119.063]).addTo(map)
        .bindPopup('KPTV');

    L.marker([38.7242, -120.753]).addTo(map)
        .bindPopup('KPVF');

    L.marker([-51.6867, -57.7785]).addTo(map)
        .bindPopup('nan');

    L.marker([33.9519, -117.445]).addTo(map)
        .bindPopup('KRAL');

    L.marker([34.2638, -116.856]).addTo(map)
        .bindPopup('nan');

    L.marker([33.5742, -117.128]).addTo(map)
        .bindPopup('nan');

    L.marker([40.1507, -122.252]).addTo(map)
        .bindPopup('KRBL');

    L.marker([40.509, -122.293]).addTo(map)
        .bindPopup('KRDD');

    L.marker([37.3329, -121.819]).addTo(map)
        .bindPopup('KRHV');

    L.marker([33.9897, -117.411]).addTo(map)
        .bindPopup('KRIR');

    L.marker([33.8807, -117.259]).addTo(map)
        .bindPopup('KRIV');

    L.marker([37.5109, -120.04]).addTo(map)
        .bindPopup('KMPI');

    L.marker([41.7304, -122.546]).addTo(map)
        .bindPopup('nan');

    L.marker([38.5125, -121.493]).addTo(map)
        .bindPopup('KSAC');

    L.marker([32.7336, -117.19]).addTo(map)
        .bindPopup('KSAN');

    L.marker([33.2414, -115.952]).addTo(map)
        .bindPopup('KSAS');

    L.marker([34.4262, -119.84]).addTo(map)
        .bindPopup('KSBA');

    L.marker([34.0954, -117.235]).addTo(map)
        .bindPopup('KSBD');

    L.marker([35.2368, -120.642]).addTo(map)
        .bindPopup('KSBP');

    L.marker([37.8942, -121.238]).addTo(map)
        .bindPopup('KSCK');

    L.marker([32.5723, -116.98]).addTo(map)
        .bindPopup('KSDM');

    L.marker([32.8262, -116.972]).addTo(map)
        .bindPopup('KSEE');

    L.marker([37.619, -122.375]).addTo(map)
        .bindPopup('KSFO');

    L.marker([41.7781, -122.473]).addTo(map)
        .bindPopup('KSIY');

    L.marker([37.3626, -121.929]).addTo(map)
        .bindPopup('KSJC');

    L.marker([38.6954, -121.591]).addTo(map)
        .bindPopup('KSMF');

    L.marker([34.0158, -118.451]).addTo(map)
        .bindPopup('KSMO');

    L.marker([34.8989, -120.457]).addTo(map)
        .bindPopup('KSMX');

    L.marker([33.6757, -117.868]).addTo(map)
        .bindPopup('KSNA');

    L.marker([36.6628, -121.606]).addTo(map)
        .bindPopup('KSNS');

    L.marker([34.9157, -81.9565]).addTo(map)
        .bindPopup('KSPA');

    L.marker([34.6068, -120.076]).addTo(map)
        .bindPopup('KIZA');

    L.marker([37.5119, -122.25]).addTo(map)
        .bindPopup('KSQL');

    L.marker([38.06, -122.51]).addTo(map)
        .bindPopup('nan');

    L.marker([38.509, -122.813]).addTo(map)
        .bindPopup('KSTS');

    L.marker([33.995, -80.3613]).addTo(map)
        .bindPopup('KSMS');

    L.marker([38.2627, -121.927]).addTo(map)
        .bindPopup('KSUU');

    L.marker([40.3757, -120.573]).addTo(map)
        .bindPopup('KSVE');

    L.marker([34.0606, -119.915]).addTo(map)
        .bindPopup('KSZN');

    L.marker([34.3472, -119.061]).addTo(map)
        .bindPopup('KSZP');

    L.marker([39.32, -120.14]).addTo(map)
        .bindPopup('KTRK');

    L.marker([36.1563, -119.326]).addTo(map)
        .bindPopup('KTLR');

    L.marker([34.1316, -115.946]).addTo(map)
        .bindPopup('KTNP');

    L.marker([33.8034, -118.34]).addTo(map)
        .bindPopup('KTOA');

    L.marker([35.8125, -117.327]).addTo(map)
        .bindPopup('nan');

    L.marker([33.6267, -116.16]).addTo(map)
        .bindPopup('KTRM');

    L.marker([35.135, -118.439]).addTo(map)
        .bindPopup('KTSP');

    L.marker([38.8939, -119.995]).addTo(map)
        .bindPopup('KTVL');

    L.marker([33.7484, -116.275]).addTo(map)
        .bindPopup('KUDD');

    L.marker([39.126, -123.201]).addTo(map)
        .bindPopup('KUKI');

    L.marker([34.7373, -120.584]).addTo(map)
        .bindPopup('KVBG');

    L.marker([34.5975, -117.383]).addTo(map)
        .bindPopup('KVCV');

    L.marker([36.3187, -119.393]).addTo(map)
        .bindPopup('KVIS');

    L.marker([34.2098, -118.49]).addTo(map)
        .bindPopup('KVNY');

    L.marker([34.2593, -118.413]).addTo(map)
        .bindPopup('KWHP');

    L.marker([34.7411, -118.219]).addTo(map)
        .bindPopup('KWJF');

    L.marker([39.5164, -122.218]).addTo(map)
        .bindPopup('KWLW');

    L.marker([36.9357, -121.79]).addTo(map)
        .bindPopup('KWVI');

    L.marker([38.9697, -104.813]).addTo(map)
        .bindPopup('KAFF');

    L.marker([40.1756, -103.222]).addTo(map)
        .bindPopup('KAKO');

    L.marker([37.4349, -105.867]).addTo(map)
        .bindPopup('KALS');

    L.marker([37.2032, -107.869]).addTo(map)
        .bindPopup('nan');

    L.marker([39.5701, -104.849]).addTo(map)
        .bindPopup('KAPA');

    L.marker([39.2232, -106.869]).addTo(map)
        .bindPopup('KASE');

    L.marker([39.7017, -104.752]).addTo(map)
        .bindPopup('KBKF');

    L.marker([39.9088, -105.117]).addTo(map)
        .bindPopup('KBJC');

    L.marker([37.303, -108.628]).addTo(map)
        .bindPopup('KCEZ');

    L.marker([40.4952, -107.522]).addTo(map)
        .bindPopup('KCAG');

    L.marker([38.428, -105.106]).addTo(map)
        .bindPopup('nan');

    L.marker([38.8058, -104.701]).addTo(map)
        .bindPopup('KCOS');

    L.marker([38.8519, -106.928]).addTo(map)
        .bindPopup('nan');

    L.marker([39.8617, -104.673]).addTo(map)
        .bindPopup('KDEN');

    L.marker([37.1515, -107.754]).addTo(map)
        .bindPopup('KDRO');

    L.marker([39.6426, -106.918]).addTo(map)
        .bindPopup('KEGE');

    L.marker([38.6784, -104.757]).addTo(map)
        .bindPopup('KFCS');

    L.marker([40.4518, -105.011]).addTo(map)
        .bindPopup('KFNL');

    L.marker([39.1224, -108.527]).addTo(map)
        .bindPopup('KGJT');

    L.marker([38.5339, -106.933]).addTo(map)
        .bindPopup('KGUC');

    L.marker([39.5083, -107.311]).addTo(map)
        .bindPopup('KGWS');

    L.marker([40.4374, -104.633]).addTo(map)
        .bindPopup('KGXY');

    L.marker([40.4812, -107.218]).addTo(map)
        .bindPopup('KHDN');

    L.marker([38.0697, -102.688]).addTo(map)
        .bindPopup('KLAA');

    L.marker([39.2748, -103.666]).addTo(map)
        .bindPopup('KLIC');

    L.marker([39.2203, -106.317]).addTo(map)
        .bindPopup('KLXV');

    L.marker([38.5098, -107.894]).addTo(map)
        .bindPopup('KMTJ');

    L.marker([37.2863, -107.056]).addTo(map)
        .bindPopup('KPSO');

    L.marker([38.2891, -104.497]).addTo(map)
        .bindPopup('KPUB');

    L.marker([39.5263, -107.727]).addTo(map)
        .bindPopup('KRIL');

    L.marker([40.0932, -108.763]).addTo(map)
        .bindPopup('nan');

    L.marker([40.5163, -106.866]).addTo(map)
        .bindPopup('KSBS');

    L.marker([38.5383, -106.049]).addTo(map)
        .bindPopup('KANK');

    L.marker([40.6153, -103.265]).addTo(map)
        .bindPopup('KSTK');

    L.marker([37.2594, -104.341]).addTo(map)
        .bindPopup('KTAD');

    L.marker([37.9538, -107.908]).addTo(map)
        .bindPopup('KTEX');

    L.marker([40.0394, -105.226]).addTo(map)
        .bindPopup('KBDU');

    L.marker([38.8317, -107.646]).addTo(map)
        .bindPopup('nan');

    L.marker([41.9392, -72.6833]).addTo(map)
        .bindPopup('KBDL');

    L.marker([41.1635, -73.1262]).addTo(map)
        .bindPopup('KBDR');

    L.marker([41.3715, -73.4822]).addTo(map)
        .bindPopup('KDXR');

    L.marker([41.3301, -72.0451]).addTo(map)
        .bindPopup('KGON');

    L.marker([41.7367, -72.6494]).addTo(map)
        .bindPopup('KHFD');

    L.marker([41.2637, -72.8868]).addTo(map)
        .bindPopup('KHVN');

    L.marker([41.4786, -73.1352]).addTo(map)
        .bindPopup('KOXC');

    L.marker([39.1295, -75.466]).addTo(map)
        .bindPopup('KDOV');

    L.marker([38.6892, -75.3589]).addTo(map)
        .bindPopup('KGED');

    L.marker([39.6787, -75.6065]).addTo(map)
        .bindPopup('KILG');

    L.marker([29.7275, -85.0275]).addTo(map)
        .bindPopup('KAAF');

    L.marker([26.1526, -81.7753]).addTo(map)
        .bindPopup('KAPF');

    L.marker([27.5912, -81.5278]).addTo(map)
        .bindPopup('KAVO');

    L.marker([26.3785, -80.1077]).addTo(map)
        .bindPopup('KBCT');

    L.marker([27.9434, -81.7834]).addTo(map)
        .bindPopup('KBOW');

    L.marker([29.1342, -83.0505]).addTo(map)
        .bindPopup('KCDK');

    L.marker([30.7788, -86.5221]).addTo(map)
        .bindPopup('KCEW');

    L.marker([27.9767, -82.7587]).addTo(map)
        .bindPopup('KCLW');

    L.marker([28.2349, -80.6101]).addTo(map)
        .bindPopup('KCOF');

    L.marker([28.3416, -80.6855]).addTo(map)
        .bindPopup('KCOI');

    L.marker([30.3363, -81.5144]).addTo(map)
        .bindPopup('KCRG');

    L.marker([29.6355, -83.1048]).addTo(map)
        .bindPopup('KCTY');

    L.marker([29.1799, -81.0581]).addTo(map)
        .bindPopup('KDAB');

    L.marker([30.4001, -86.4715]).addTo(map)
        .bindPopup('KDTS');

    L.marker([30.3571, -85.7954]).addTo(map)
        .bindPopup('KECP');

    L.marker([30.6504, -86.5229]).addTo(map)
        .bindPopup('KEGI');

    L.marker([24.5561, -81.7596]).addTo(map)
        .bindPopup('KEYW');

    L.marker([26.0726, -80.1527]).addTo(map)
        .bindPopup('KFLL');

    L.marker([26.5866, -81.8633]).addTo(map)
        .bindPopup('KFMY');

    L.marker([27.4951, -80.3683]).addTo(map)
        .bindPopup('KFPR');

    L.marker([30.0693, -83.5806]).addTo(map)
        .bindPopup('nan');

    L.marker([26.1973, -80.1707]).addTo(map)
        .bindPopup('KFXE');

    L.marker([28.0629, -81.7533]).addTo(map)
        .bindPopup('KGIF');

    L.marker([29.6901, -82.2718]).addTo(map)
        .bindPopup('KGNV');

    L.marker([25.4886, -80.3836]).addTo(map)
        .bindPopup('KHST');

    L.marker([26.0012, -80.2407]).addTo(map)
        .bindPopup('KHWO');

    L.marker([26.4332, -81.401]).addTo(map)
        .bindPopup('KIMM');

    L.marker([28.2898, -81.4371]).addTo(map)
        .bindPopup('KISM');

    L.marker([30.4941, -81.6879]).addTo(map)
        .bindPopup('KJAX');

    L.marker([28.2213, -82.3745]).addTo(map)
        .bindPopup('nan');

    L.marker([27.9889, -82.0186]).addTo(map)
        .bindPopup('KLAL');

    L.marker([30.182, -82.5769]).addTo(map)
        .bindPopup('KLCQ');

    L.marker([28.8231, -81.8087]).addTo(map)
        .bindPopup('KLEE');

    L.marker([26.593, -80.0851]).addTo(map)
        .bindPopup('KLNA');

    L.marker([27.8493, -82.5212]).addTo(map)
        .bindPopup('KMCF');

    L.marker([28.4294, -81.309]).addTo(map)
        .bindPopup('KMCO');

    L.marker([25.7932, -80.2906]).addTo(map)
        .bindPopup('KMIA');

    L.marker([28.1028, -80.6453]).addTo(map)
        .bindPopup('KMLB');

    L.marker([25.7783, -80.1703]).addTo(map)
        .bindPopup('nan');

    L.marker([25.995, -81.6725]).addTo(map)
        .bindPopup('KMKY');

    L.marker([24.7261, -81.0514]).addTo(map)
        .bindPopup('KMTH');

    L.marker([30.3539, -81.8719]).addTo(map)
        .bindPopup('KNEN');

    L.marker([30.2358, -81.6806]).addTo(map)
        .bindPopup('KNIP');

    L.marker([30.3527, -87.3186]).addTo(map)
        .bindPopup('KNPA');

    L.marker([24.5758, -81.6889]).addTo(map)
        .bindPopup('KNQX');

    L.marker([30.3911, -81.4247]).addTo(map)
        .bindPopup('KNRB');

    L.marker([30.7242, -87.0219]).addTo(map)
        .bindPopup('KNSE');

    L.marker([30.4694, -87.3381]).addTo(map)
        .bindPopup('KNUN');

    L.marker([27.2628, -80.8498]).addTo(map)
        .bindPopup('KOBE');

    L.marker([25.3254, -80.2748]).addTo(map)
        .bindPopup('nan');

    L.marker([29.1726, -82.2242]).addTo(map)
        .bindPopup('KOCF');

    L.marker([25.907, -80.2784]).addTo(map)
        .bindPopup('KOPF');

    L.marker([28.5455, -81.3329]).addTo(map)
        .bindPopup('KORL');

    L.marker([30.0696, -85.5754]).addTo(map)
        .bindPopup('KPAM');

    L.marker([26.6832, -80.0956]).addTo(map)
        .bindPopup('KPBI');

    L.marker([26.9202, -81.9905]).addTo(map)
        .bindPopup('KPGD');

    L.marker([26.785, -80.6934]).addTo(map)
        .bindPopup('KPHK');

    L.marker([27.9102, -82.6874]).addTo(map)
        .bindPopup('KPIE');

    L.marker([30.4734, -87.1866]).addTo(map)
        .bindPopup('KPNS');

    L.marker([26.2471, -80.1111]).addTo(map)
        .bindPopup('KPMP');

    L.marker([26.5362, -81.7552]).addTo(map)
        .bindPopup('KRSW');

    L.marker([27.4564, -81.3424]).addTo(map)
        .bindPopup('KSEF');

    L.marker([28.7776, -81.2375]).addTo(map)
        .bindPopup('KSFB');

    L.marker([27.7651, -82.627]).addTo(map)
        .bindPopup('KSPG');

    L.marker([27.3954, -82.5544]).addTo(map)
        .bindPopup('KSRQ');

    L.marker([27.1817, -80.2211]).addTo(map)
        .bindPopup('KSUA');

    L.marker([28.5148, -80.7992]).addTo(map)
        .bindPopup('KTIX');

    L.marker([30.3965, -84.3503]).addTo(map)
        .bindPopup('KTLH');

    L.marker([25.6479, -80.4328]).addTo(map)
        .bindPopup('KTMB');

    L.marker([25.8618, -80.897]).addTo(map)
        .bindPopup('KTNT');

    L.marker([27.9755, -82.5332]).addTo(map)
        .bindPopup('KTPA');

    L.marker([27.9156, -82.4493]).addTo(map)
        .bindPopup('KTPF');

    L.marker([29.9592, -81.3398]).addTo(map)
        .bindPopup('KSGJ');

    L.marker([27.0716, -82.4403]).addTo(map)
        .bindPopup('KVNC');

    L.marker([30.4832, -86.5254]).addTo(map)
        .bindPopup('KVPS');

    L.marker([30.2187, -81.8767]).addTo(map)
        .bindPopup('KVQQ');

    L.marker([27.6556, -80.4179]).addTo(map)
        .bindPopup('KVRB');

    L.marker([28.2282, -82.1559]).addTo(map)
        .bindPopup('KZPH');

    L.marker([31.5355, -84.1945]).addTo(map)
        .bindPopup('KABY');

    L.marker([33.3699, -81.9645]).addTo(map)
        .bindPopup('KAGS');

    L.marker([33.9486, -83.3263]).addTo(map)
        .bindPopup('KAHN');

    L.marker([33.6367, -84.4281]).addTo(map)
        .bindPopup('KATL');

    L.marker([31.2491, -82.3955]).addTo(map)
        .bindPopup('KAYS');

    L.marker([30.9715, -84.6374]).addTo(map)
        .bindPopup('KBGE');

    L.marker([31.2588, -81.4665]).addTo(map)
        .bindPopup('KBQK');

    L.marker([32.5163, -84.9389]).addTo(map)
        .bindPopup('KCSG');

    L.marker([32.5644, -82.9853]).addTo(map)
        .bindPopup('KDBN');

    L.marker([33.4665, -82.0394]).addTo(map)
        .bindPopup('KDNL');

    L.marker([34.7229, -84.8702]).addTo(map)
        .bindPopup('KDNN');

    L.marker([33.7791, -84.5214]).addTo(map)
        .bindPopup('KFTY');

    L.marker([34.2726, -83.8302]).addTo(map)
        .bindPopup('KGVL');

    L.marker([33.0089, -85.0726]).addTo(map)
        .bindPopup('KLGC');

    L.marker([31.8891, -81.5623]).addTo(map)
        .bindPopup('KLHW');

    L.marker([32.3373, -84.9913]).addTo(map)
        .bindPopup('KLSF');

    L.marker([33.9781, -83.9624]).addTo(map)
        .bindPopup('KLZU');

    L.marker([32.8221, -83.562]).addTo(map)
        .bindPopup('KMAC');

    L.marker([32.6928, -83.6492]).addTo(map)
        .bindPopup('KMCN');

    L.marker([33.9154, -84.5163]).addTo(map)
        .bindPopup('KMGE');

    L.marker([31.0849, -83.8033]).addTo(map)
        .bindPopup('KMGR');

    L.marker([33.1542, -83.2407]).addTo(map)
        .bindPopup('KMLJ');

    L.marker([32.0946, -82.8822]).addTo(map)
        .bindPopup('KMQW');

    L.marker([31.1378, -83.7042]).addTo(map)
        .bindPopup('KMUL');

    L.marker([33.8756, -84.302]).addTo(map)
        .bindPopup('KPDK');

    L.marker([32.8407, -84.8824]).addTo(map)
        .bindPopup('KPIM');

    L.marker([34.3506, -85.158]).addTo(map)
        .bindPopup('KRMG');

    L.marker([32.1276, -81.2021]).addTo(map)
        .bindPopup('KSAV');

    L.marker([31.1518, -81.3913]).addTo(map)
        .bindPopup('KSSI');

    L.marker([32.01, -81.1457]).addTo(map)
        .bindPopup('KSVN');

    L.marker([31.5585, -83.8957]).addTo(map)
        .bindPopup('KSYV');

    L.marker([32.4827, -81.7369]).addTo(map)
        .bindPopup('KTBR');

    L.marker([31.429, -83.4885]).addTo(map)
        .bindPopup('KTMA');

    L.marker([34.5938, -83.2958]).addTo(map)
        .bindPopup('KTOC');

    L.marker([30.9016, -83.8813]).addTo(map)
        .bindPopup('KTVI');

    L.marker([30.9678, -83.193]).addTo(map)
        .bindPopup('KVAD');

    L.marker([32.1927, -82.3712]).addTo(map)
        .bindPopup('KVDI');

    L.marker([30.7825, -83.2767]).addTo(map)
        .bindPopup('KVLD');

    L.marker([33.9829, -83.6674]).addTo(map)
        .bindPopup('KWDR');

    L.marker([32.6401, -83.5919]).addTo(map)
        .bindPopup('KWRB');

    L.marker([22.0228, -159.785]).addTo(map)
        .bindPopup('PHBK');

    L.marker([19.7601, -155.554]).addTo(map)
        .bindPopup('PHSF');

    L.marker([-14.2172, -169.425]).addTo(map)
        .bindPopup('NSFQ');

    L.marker([21.5795, -158.197]).addTo(map)
        .bindPopup('PHDH');

    L.marker([21.4835, -158.04]).addTo(map)
        .bindPopup('PHHI');

    L.marker([21.3206, -157.924]).addTo(map)
        .bindPopup('PHNL');

    L.marker([20.7956, -156.014]).addTo(map)
        .bindPopup('PHHN');

    L.marker([22.2092, -159.446]).addTo(map)
        .bindPopup('nan');

    L.marker([19.7214, -155.048]).addTo(map)
        .bindPopup('PHTO');

    L.marker([20.9629, -156.673]).addTo(map)
        .bindPopup('PHJH');

    L.marker([21.3074, -158.07]).addTo(map)
        .bindPopup('PHJR');

    L.marker([19.7388, -156.046]).addTo(map)
        .bindPopup('PHKO');

    L.marker([21.976, -159.339]).addTo(map)
        .bindPopup('PHLI');

    L.marker([20.7856, -156.951]).addTo(map)
        .bindPopup('PHNY');

    L.marker([21.211, -156.974]).addTo(map)
        .bindPopup('PHLU');

    L.marker([28.2017, -177.381]).addTo(map)
        .bindPopup('PMDY');

    L.marker([21.1529, -157.096]).addTo(map)
        .bindPopup('PHMK');

    L.marker([20.0013, -155.668]).addTo(map)
        .bindPopup('PHMU');

    L.marker([21.4505, -157.768]).addTo(map)
        .bindPopup('PHNG');

    L.marker([20.8986, -156.43]).addTo(map)
        .bindPopup('PHOG');

    L.marker([21.8969, -159.603]).addTo(map)
        .bindPopup('PHPA');

    L.marker([20.2653, -155.86]).addTo(map)
        .bindPopup('PHUP');

    L.marker([19.9205, -155.861]).addTo(map)
        .bindPopup('nan');

    L.marker([43.5644, -116.223]).addTo(map)
        .bindPopup('KBOI');

    L.marker([42.5426, -113.772]).addTo(map)
        .bindPopup('KBYI');

    L.marker([44.523, -114.218]).addTo(map)
        .bindPopup('KLLJ');

    L.marker([47.7743, -116.82]).addTo(map)
        .bindPopup('KCOE');

    L.marker([44.1666, -112.226]).addTo(map)
        .bindPopup('nan');

    L.marker([42.9172, -114.765]).addTo(map)
        .bindPopup('KGNG');

    L.marker([44.4938, -116.016]).addTo(map)
        .bindPopup('nan');

    L.marker([43.5136, -112.071]).addTo(map)
        .bindPopup('KIDA');

    L.marker([45.9426, -116.123]).addTo(map)
        .bindPopup('KGIC');

    L.marker([46.3745, -117.015]).addTo(map)
        .bindPopup('KLWS');

    L.marker([42.1666, -112.297]).addTo(map)
        .bindPopup('KMLD');

    L.marker([43.0436, -115.872]).addTo(map)
        .bindPopup('KMUO');

    L.marker([44.8897, -116.101]).addTo(map)
        .bindPopup('KMYL');

    L.marker([42.9098, -112.596]).addTo(map)
        .bindPopup('KPIH');

    L.marker([43.8339, -111.805]).addTo(map)
        .bindPopup('KRXE');

    L.marker([45.1238, -113.881]).addTo(map)
        .bindPopup('KSMN');

    L.marker([43.5044, -114.296]).addTo(map)
        .bindPopup('KSUN');

    L.marker([42.4818, -114.488]).addTo(map)
        .bindPopup('KTWF');

    L.marker([38.8903, -90.046]).addTo(map)
        .bindPopup('KALN');

    L.marker([41.7719, -88.4757]).addTo(map)
        .bindPopup('KARR');

    L.marker([41.2309, -89.6157]).addTo(map)
        .bindPopup('nan');

    L.marker([38.5452, -89.8352]).addTo(map)
        .bindPopup('KBLV');

    L.marker([40.4771, -88.9159]).addTo(map)
        .bindPopup('KBMI');

    L.marker([37.0645, -89.2196]).addTo(map)
        .bindPopup('KCIR');

    L.marker([40.0392, -88.2781]).addTo(map)
        .bindPopup('KCMI');

    L.marker([38.5707, -90.1562]).addTo(map)
        .bindPopup('KCPS');

    L.marker([39.8346, -88.8657]).addTo(map)
        .bindPopup('KDEC');

    L.marker([40.1992, -87.5959]).addTo(map)
        .bindPopup('KDNV');

    L.marker([41.9078, -88.2486]).addTo(map)
        .bindPopup('KDPA');

    L.marker([41.6103, -90.5883]).addTo(map)
        .bindPopup('KDVN');

    L.marker([38.5151, -89.0911]).addTo(map)
        .bindPopup('KENL');

    L.marker([40.4599, -91.4285]).addTo(map)
        .bindPopup('KEOK');

    L.marker([42.2462, -89.582]).addTo(map)
        .bindPopup('KFEP');

    L.marker([40.938, -90.4311]).addTo(map)
        .bindPopup('KGBG');

    L.marker([38.8362, -89.3784]).addTo(map)
        .bindPopup('KGRE');

    L.marker([37.8113, -88.5503]).addTo(map)
        .bindPopup('KHSB');

    L.marker([39.7707, -90.238]).addTo(map)
        .bindPopup('KIJX');

    L.marker([41.0714, -87.8463]).addTo(map)
        .bindPopup('KIKK');

    L.marker([41.5178, -88.1755]).addTo(map)
        .bindPopup('KJOT');

    L.marker([41.6073, -88.0962]).addTo(map)
        .bindPopup('KLOT');

    L.marker([38.7643, -87.6055]).addTo(map)
        .bindPopup('KLWV');

    L.marker([37.7781, -89.252]).addTo(map)
        .bindPopup('KMDH');

    L.marker([41.7861, -87.7525]).addTo(map)
        .bindPopup('KMDW');

    L.marker([41.4485, -90.5075]).addTo(map)
        .bindPopup('KMLI');

    L.marker([40.5201, -90.6524]).addTo(map)
        .bindPopup('KMQB');

    L.marker([39.4779, -88.2792]).addTo(map)
        .bindPopup('KMTO');

    L.marker([38.3219, -88.8535]).addTo(map)
        .bindPopup('KMVN');

    L.marker([37.755, -89.0111]).addTo(map)
        .bindPopup('KMWA');

    L.marker([38.7207, -88.1749]).addTo(map)
        .bindPopup('KOLY');

    L.marker([41.9786, -87.9047]).addTo(map)
        .bindPopup('KORD');

    L.marker([40.6642, -89.6933]).addTo(map)
        .bindPopup('KPIA');

    L.marker([42.1953, -89.0972]).addTo(map)
        .bindPopup('KRFD');

    L.marker([38.1489, -89.6987]).addTo(map)
        .bindPopup('KSAR');

    L.marker([38.6429, -88.9642]).addTo(map)
        .bindPopup('KSLO');

    L.marker([39.8441, -89.6779]).addTo(map)
        .bindPopup('KSPI');

    L.marker([41.7428, -89.6763]).addTo(map)
        .bindPopup('KSQI');

    L.marker([42.4222, -87.8679]).addTo(map)
        .bindPopup('KUGN');

    L.marker([39.9427, -91.1946]).addTo(map)
        .bindPopup('KUIN');

    L.marker([38.9915, -89.1662]).addTo(map)
        .bindPopup('KVLA');

    L.marker([41.3519, -89.1531]).addTo(map)
        .bindPopup('KVYS');

    L.marker([40.1086, -85.613]).addTo(map)
        .bindPopup('KAID');

    L.marker([41.6397, -85.0835]).addTo(map)
        .bindPopup('KANQ');

    L.marker([38.84, -86.4454]).addTo(map)
        .bindPopup('KBFR');

    L.marker([39.146, -86.6167]).addTo(map)
        .bindPopup('KBMG');

    L.marker([39.6985, -85.1297]).addTo(map)
        .bindPopup('KCEV');

    L.marker([39.2619, -85.8963]).addTo(map)
        .bindPopup('KBAK');

    L.marker([41.7194, -86.0032]).addTo(map)
        .bindPopup('KEKM');

    L.marker([38.037, -87.5324]).addTo(map)
        .bindPopup('KEVV');

    L.marker([38.5062, -86.6369]).addTo(map)
        .bindPopup('KFRH');

    L.marker([40.9785, -85.1951]).addTo(map)
        .bindPopup('KFWA');

    L.marker([26.6319, -78.3592]).addTo(map)
        .bindPopup('VOGB');

    L.marker([39.7903, -85.7361]).addTo(map)
        .bindPopup('KGFD');

    L.marker([41.5264, -85.7929]).addTo(map)
        .bindPopup('KGSH');

    L.marker([40.6481, -86.1521]).addTo(map)
        .bindPopup('KGUS');

    L.marker([39.3445, -85.2583]).addTo(map)
        .bindPopup('KHLB');

    L.marker([38.249, -86.9537]).addTo(map)
        .bindPopup('KHNB');

    L.marker([39.7173, -86.2944]).addTo(map)
        .bindPopup('KIND');

    L.marker([40.7587, -87.4282]).addTo(map)
        .bindPopup('nan');

    L.marker([40.4123, -86.9369]).addTo(map)
        .bindPopup('KLAF');

    L.marker([41.5725, -86.7345]).addTo(map)
        .bindPopup('KPPO');

    L.marker([38.7589, -85.4655]).addTo(map)
        .bindPopup('KIMS');

    L.marker([41.7033, -86.8212]).addTo(map)
        .bindPopup('KMGC');

    L.marker([40.2423, -85.3959]).addTo(map)
        .bindPopup('KMIE');

    L.marker([40.4899, -85.6797]).addTo(map)
        .bindPopup('KMZZ');

    L.marker([40.5282, -86.059]).addTo(map)
        .bindPopup('KOKK');

    L.marker([38.8514, -87.4997]).addTo(map)
        .bindPopup('nan');

    L.marker([41.3651, -86.3005]).addTo(map)
        .bindPopup('nan');

    L.marker([41.0656, -86.1817]).addTo(map)
        .bindPopup('KRCR');

    L.marker([39.7572, -84.8428]).addTo(map)
        .bindPopup('KRID');

    L.marker([40.9479, -87.1826]).addTo(map)
        .bindPopup('KRZL');

    L.marker([41.7087, -86.3173]).addTo(map)
        .bindPopup('KSBN');

    L.marker([38.9236, -85.9074]).addTo(map)
        .bindPopup('KSER');

    L.marker([39.1147, -87.4483]).addTo(map)
        .bindPopup('KSIV');

    L.marker([41.1434, -85.1528]).addTo(map)
        .bindPopup('KSMD');

    L.marker([41.454, -87.0071]).addTo(map)
        .bindPopup('KVPZ');

    L.marker([41.4073, -95.0469]).addTo(map)
        .bindPopup('KAIO');

    L.marker([42.5571, -92.4003]).addTo(map)
        .bindPopup('KALO');

    L.marker([41.992, -93.6218]).addTo(map)
        .bindPopup('KAMW');

    L.marker([43.0779, -94.272]).addTo(map)
        .bindPopup('KAXA');

    L.marker([42.0496, -93.8476]).addTo(map)
        .bindPopup('KBNW');

    L.marker([40.7832, -91.1255]).addTo(map)
        .bindPopup('KBRL');

    L.marker([41.2592, -95.7606]).addTo(map)
        .bindPopup('KCBF');

    L.marker([43.0726, -92.6108]).addTo(map)
        .bindPopup('KCCY');

    L.marker([41.8847, -91.7108]).addTo(map)
        .bindPopup('KCID');

    L.marker([42.0462, -94.789]).addTo(map)
        .bindPopup('KCIN');

    L.marker([41.0214, -94.3633]).addTo(map)
        .bindPopup('KCSQ');

    L.marker([41.8311, -90.3291]).addTo(map)
        .bindPopup('KCWI');

    L.marker([42.402, -90.7095]).addTo(map)
        .bindPopup('KDBQ');

    L.marker([43.2755, -91.7394]).addTo(map)
        .bindPopup('KDEH');

    L.marker([41.9864, -95.3807]).addTo(map)
        .bindPopup('KDNS');

    L.marker([41.534, -93.6631]).addTo(map)
        .bindPopup('KDSM');

    L.marker([42.4366, -93.8689]).addTo(map)
        .bindPopup('KEBS');

    L.marker([42.0102, -94.3426]).addTo(map)
        .bindPopup('KEFW');

    L.marker([43.4074, -94.7464]).addTo(map)
        .bindPopup('KEST');

    L.marker([41.0533, -91.9789]).addTo(map)
        .bindPopup('KFFL');

    L.marker([40.6593, -91.3268]).addTo(map)
        .bindPopup('KFSW');

    L.marker([42.5515, -94.1926]).addTo(map)
        .bindPopup('KFOD');

    L.marker([43.2347, -93.6241]).addTo(map)
        .bindPopup('KFXY');

    L.marker([42.7237, -93.2263]).addTo(map)
        .bindPopup('KHPT');

    L.marker([42.7361, -94.2452]).addTo(map)
        .bindPopup('nan');

    L.marker([40.7218, -95.0264]).addTo(map)
        .bindPopup('KICL');

    L.marker([42.3325, -95.445]).addTo(map)
        .bindPopup('KIDG');

    L.marker([42.4708, -93.27]).addTo(map)
        .bindPopup('KIFA');

    L.marker([41.6392, -91.5465]).addTo(map)
        .bindPopup('KIOW');

    L.marker([42.778, -96.1937]).addTo(map)
        .bindPopup('KLRJ');

    L.marker([43.1578, -93.3313]).addTo(map)
        .bindPopup('KMCW');

    L.marker([42.1128, -92.9178]).addTo(map)
        .bindPopup('KMIW');

    L.marker([40.9466, -91.5111]).addTo(map)
        .bindPopup('KMPZ');

    L.marker([41.3678, -91.1482]).addTo(map)
        .bindPopup('KMUT');

    L.marker([42.2263, -91.1635]).addTo(map)
        .bindPopup('KMXO');

    L.marker([41.3032, -95.8941]).addTo(map)
        .bindPopup('KOMA');

    L.marker([41.0048, -93.3096]).addTo(map)
        .bindPopup('KOOA');

    L.marker([41.1066, -92.4479]).addTo(map)
        .bindPopup('KOTM');

    L.marker([36.2456, -90.9553]).addTo(map)
        .bindPopup('KPOH');

    L.marker([41.828, -94.1599]).addTo(map)
        .bindPopup('KPRO');

    L.marker([43.3875, -95.1392]).addTo(map)
        .bindPopup('nan');

    L.marker([42.5973, -95.2407]).addTo(map)
        .bindPopup('KSLB');

    L.marker([43.1655, -95.2028]).addTo(map)
        .bindPopup('KSPW');

    L.marker([42.4026, -96.3844]).addTo(map)
        .bindPopup('KSUX');

    L.marker([41.6744, -93.0217]).addTo(map)
        .bindPopup('KTNU');

    L.marker([43.2805, -91.4695]).addTo(map)
        .bindPopup('nan');

    L.marker([37.1585, -98.0796]).addTo(map)
        .bindPopup('KANY');

    L.marker([37.6945, -97.215]).addTo(map)
        .bindPopup('KBEC');

    L.marker([39.4275, -101.047]).addTo(map)
        .bindPopup('KCBK');

    L.marker([37.6486, -97.2506]).addTo(map)
        .bindPopup('KCEA');

    L.marker([37.094, -95.5719]).addTo(map)
        .bindPopup('KCFV');

    L.marker([39.5493, -97.6523]).addTo(map)
        .bindPopup('KCNK');

    L.marker([37.6688, -95.4851]).addTo(map)
        .bindPopup('KCNU');

    L.marker([37.7634, -99.9656]).addTo(map)
        .bindPopup('KDDC');

    L.marker([37.7741, -96.8176]).addTo(map)
        .bindPopup('KEQA');

    L.marker([38.3321, -96.1912]).addTo(map)
        .bindPopup('KEMP');

    L.marker([38.0582, -97.2745]).addTo(map)
        .bindPopup('KEWK');

    L.marker([39.3683, -94.9147]).addTo(map)
        .bindPopup('KFLV');

    L.marker([38.9509, -95.6636]).addTo(map)
        .bindPopup('KFOE');

    L.marker([39.0553, -96.7645]).addTo(map)
        .bindPopup('KFRI');

    L.marker([37.7984, -94.7694]).addTo(map)
        .bindPopup('KFSK');

    L.marker([38.3443, -98.8592]).addTo(map)
        .bindPopup('KGBD');

    L.marker([37.9275, -100.724]).addTo(map)
        .bindPopup('KGCK');

    L.marker([39.3706, -101.699]).addTo(map)
        .bindPopup('KGLD');

    L.marker([39.3788, -99.8315]).addTo(map)
        .bindPopup('KHLC');

    L.marker([38.0655, -97.8606]).addTo(map)
        .bindPopup('KHUT');

    L.marker([38.8422, -99.2732]).addTo(map)
        .bindPopup('KHYS');

    L.marker([37.6219, -97.2682]).addTo(map)
        .bindPopup('KIAB');

    L.marker([37.6499, -97.4331]).addTo(map)
        .bindPopup('KICT');

    L.marker([37.1584, -95.7784]).addTo(map)
        .bindPopup('KIDP');

    L.marker([38.8309, -94.8903]).addTo(map)
        .bindPopup('KIXD');

    L.marker([37.0442, -100.96]).addTo(map)
        .bindPopup('KLBL');

    L.marker([39.0112, -95.2166]).addTo(map)
        .bindPopup('KLWC');

    L.marker([38.3428, -98.2269]).addTo(map)
        .bindPopup('KLYO');

    L.marker([39.141, -96.6708]).addTo(map)
        .bindPopup('KMHK');

    L.marker([38.3524, -97.6913]).addTo(map)
        .bindPopup('KMPR');

    L.marker([38.8476, -94.7376]).addTo(map)
        .bindPopup('KOJC');

    L.marker([37.3299, -95.5062]).addTo(map)
        .bindPopup('KPPF');

    L.marker([37.4478, -94.7311]).addTo(map)
        .bindPopup('KPTS');

    L.marker([37.7016, -98.7469]).addTo(map)
        .bindPopup('KPTT');

    L.marker([38.8721, -98.8118]).addTo(map)
        .bindPopup('KRSL');

    L.marker([38.791, -97.6522]).addTo(map)
        .bindPopup('KSLN');

    L.marker([39.0687, -95.6225]).addTo(map)
        .bindPopup('KTOP');

    L.marker([37.1686, -97.0376]).addTo(map)
        .bindPopup('KWLD');

    L.marker([37.8143, -85.4996]).addTo(map)
        .bindPopup('KBRY');

    L.marker([36.9645, -86.4197]).addTo(map)
        .bindPopup('KBWG');

    L.marker([36.6646, -88.3728]).addTo(map)
        .bindPopup('KCEY');

    L.marker([39.0488, -84.6678]).addTo(map)
        .bindPopup('KCVG');

    L.marker([37.686, -85.925]).addTo(map)
        .bindPopup('KEKX');

    L.marker([38.1825, -84.9047]).addTo(map)
        .bindPopup('KFFT');

    L.marker([37.9071, -85.9721]).addTo(map)
        .bindPopup('KFTK');

    L.marker([37.0318, -85.9537]).addTo(map)
        .bindPopup('KGLW');

    L.marker([36.6686, -87.4962]).addTo(map)
        .bindPopup('KHOP');

    L.marker([38.0365, -84.6059]).addTo(map)
        .bindPopup('KLEX');

    L.marker([38.228, -85.6637]).addTo(map)
        .bindPopup('KLOU');

    L.marker([37.0822, -84.0849]).addTo(map)
        .bindPopup('KLOZ');

    L.marker([37.7401, -87.1668]).addTo(map)
        .bindPopup('KOWB');

    L.marker([37.0608, -88.7738]).addTo(map)
        .bindPopup('KPAH');

    L.marker([37.5618, -82.5664]).addTo(map)
        .bindPopup('KPBX');

    L.marker([38.1744, -85.736]).addTo(map)
        .bindPopup('KSDF');

    L.marker([37.0534, -84.6159]).addTo(map)
        .bindPopup('KSME');

    L.marker([31.3274, -92.5498]).addTo(map)
        .bindPopup('KAEX');

    L.marker([30.0378, -91.8839]).addTo(map)
        .bindPopup('KARA');

    L.marker([32.5018, -93.6627]).addTo(map)
        .bindPopup('KBAD');

    L.marker([29.8661, -90.0222]).addTo(map)
        .bindPopup('nan');

    L.marker([30.5332, -91.1496]).addTo(map)
        .bindPopup('KBTR');

    L.marker([30.8137, -89.865]).addTo(map)
        .bindPopup('KBXA');

    L.marker([30.2106, -93.1432]).addTo(map)
        .bindPopup('KCWF');

    L.marker([30.8317, -93.3399]).addTo(map)
        .bindPopup('KDRI');

    L.marker([32.5402, -93.745]).addTo(map)
        .bindPopup('KDTN');

    L.marker([31.3949, -92.2958]).addTo(map)
        .bindPopup('KESF');

    L.marker([29.5665, -90.6604]).addTo(map)
        .bindPopup('KHUM');

    L.marker([30.1261, -93.2233]).addTo(map)
        .bindPopup('KLCH');

    L.marker([30.2053, -91.9876]).addTo(map)
        .bindPopup('KLFT');

    L.marker([32.5109, -92.0377]).addTo(map)
        .bindPopup('KMLU');

    L.marker([29.9934, -90.258]).addTo(map)
        .bindPopup('KMSY');

    L.marker([29.8253, -90.035]).addTo(map)
        .bindPopup('KNBG');

    L.marker([30.0424, -90.0283]).addTo(map)
        .bindPopup('KNEW');

    L.marker([30.5584, -92.0994]).addTo(map)
        .bindPopup('KOPL');

    L.marker([31.0448, -93.1917]).addTo(map)
        .bindPopup('KPOE');

    L.marker([29.7095, -91.339]).addTo(map)
        .bindPopup('KPTN');

    L.marker([32.5144, -92.5917]).addTo(map)
        .bindPopup('KRSN');

    L.marker([32.4466, -93.8256]).addTo(map)
        .bindPopup('KSHV');

    L.marker([30.4663, -92.4238]).addTo(map)
        .bindPopup('nan');

    L.marker([44.3206, -69.7973]).addTo(map)
        .bindPopup('KAUG');

    L.marker([44.8074, -68.8281]).addTo(map)
        .bindPopup('KBGR');

    L.marker([44.45, -68.3615]).addTo(map)
        .bindPopup('KBHB');

    L.marker([46.8715, -68.0179]).addTo(map)
        .bindPopup('KCAR');

    L.marker([43.9911, -70.9479]).addTo(map)
        .bindPopup('KIZG');

    L.marker([46.1231, -67.7921]).addTo(map)
        .bindPopup('KHUL');

    L.marker([43.9614, -69.7126]).addTo(map)
        .bindPopup('KIWI');

    L.marker([44.0485, -70.2835]).addTo(map)
        .bindPopup('KLEW');

    L.marker([46.9504, -67.8859]).addTo(map)
        .bindPopup('nan');

    L.marker([45.6478, -68.6856]).addTo(map)
        .bindPopup('KMLT');

    L.marker([43.8922, -69.9386]).addTo(map)
        .bindPopup('KBXM');

    L.marker([44.9528, -68.6743]).addTo(map)
        .bindPopup('KOLD');

    L.marker([44.7155, -69.8665]).addTo(map)
        .bindPopup('KOWK');

    L.marker([45.2007, -67.5644]).addTo(map)
        .bindPopup('KPNN');

    L.marker([46.689, -68.0448]).addTo(map)
        .bindPopup('KPQI');

    L.marker([43.6462, -70.3093]).addTo(map)
        .bindPopup('KPWM');

    L.marker([44.0601, -69.0992]).addTo(map)
        .bindPopup('KRKD');

    L.marker([43.3939, -70.708]).addTo(map)
        .bindPopup('KSFM');

    L.marker([47.2855, -68.3128]).addTo(map)
        .bindPopup('KFVE');

    L.marker([44.5332, -69.6755]).addTo(map)
        .bindPopup('KWVL');

    L.marker([38.8108, -76.867]).addTo(map)
        .bindPopup('KADW');

    L.marker([38.9429, -76.5684]).addTo(map)
        .bindPopup('KANP');

    L.marker([39.4662, -76.1688]).addTo(map)
        .bindPopup('KAPG');

    L.marker([39.1753, -76.6683]).addTo(map)
        .bindPopup('KBWI');

    L.marker([39.6154, -78.7609]).addTo(map)
        .bindPopup('KCBE');

    L.marker([38.5393, -76.0304]).addTo(map)
        .bindPopup('KCGE');

    L.marker([38.9806, -76.9223]).addTo(map)
        .bindPopup('KCGS');

    L.marker([38.8042, -76.069]).addTo(map)
        .bindPopup('KESN');

    L.marker([39.4176, -77.3743]).addTo(map)
        .bindPopup('KFDK');

    L.marker([39.0854, -76.7594]).addTo(map)
        .bindPopup('KFME');

    L.marker([39.1683, -77.166]).addTo(map)
        .bindPopup('KGAI');

    L.marker([39.7079, -77.7295]).addTo(map)
        .bindPopup('KHGR');

    L.marker([38.3154, -76.5501]).addTo(map)
        .bindPopup('nan');

    L.marker([39.3257, -76.4138]).addTo(map)
        .bindPopup('KMTN');

    L.marker([38.286, -76.4118]).addTo(map)
        .bindPopup('KNHK');

    L.marker([38.3104, -75.124]).addTo(map)
        .bindPopup('KOXB');

    L.marker([38.3405, -75.5103]).addTo(map)
        .bindPopup('KSBY');

    L.marker([41.2531, -70.0602]).addTo(map)
        .bindPopup('KACK');

    L.marker([18.45, -66.6753]).addTo(map)
        .bindPopup('TJAB');

    L.marker([42.1578, -72.7156]).addTo(map)
        .bindPopup('KBAF');

    L.marker([42.47, -71.289]).addTo(map)
        .bindPopup('KBED');

    L.marker([42.3643, -71.0052]).addTo(map)
        .bindPopup('KBOS');

    L.marker([18.4949, -67.1294]).addTo(map)
        .bindPopup('TJBQ');

    L.marker([42.5842, -70.9165]).addTo(map)
        .bindPopup('KBVY');

    L.marker([18.3133, -65.3043]).addTo(map)
        .bindPopup('TJCP');

    L.marker([41.6761, -70.9569]).addTo(map)
        .bindPopup('KEWB');

    L.marker([18.3089, -65.6619]).addTo(map)
        .bindPopup('TJFA');

    L.marker([41.6584, -70.5214]).addTo(map)
        .bindPopup('KFMH');

    L.marker([42.1842, -73.4032]).addTo(map)
        .bindPopup('KGBR');

    L.marker([42.55, -72.0161]).addTo(map)
        .bindPopup('KGDM');

    L.marker([18.1381, -65.8013]).addTo(map)
        .bindPopup('nan');

    L.marker([41.6693, -70.2804]).addTo(map)
        .bindPopup('KHYA');

    L.marker([42.7172, -71.1234]).addTo(map)
        .bindPopup('KLWM');

    L.marker([18.2557, -67.1485]).addTo(map)
        .bindPopup('TJMZ');

    L.marker([42.4618, -71.5184]).addTo(map)
        .bindPopup('nan');

    L.marker([41.3931, -70.6143]).addTo(map)
        .bindPopup('KMVY');

    L.marker([42.3432, -71.509]).addTo(map)
        .bindPopup('nan');

    L.marker([18.2453, -65.6434]).addTo(map)
        .bindPopup('TJRV');

    L.marker([42.2673, -71.8757]).addTo(map)
        .bindPopup('KORH');

    L.marker([42.1905, -71.1729]).addTo(map)
        .bindPopup('KOWD');

    L.marker([42.2233, -72.3114]).addTo(map)
        .bindPopup('nan');

    L.marker([42.4268, -73.2929]).addTo(map)
        .bindPopup('KPSF');

    L.marker([42.0719, -70.2214]).addTo(map)
        .bindPopup('KPVC');

    L.marker([41.909, -70.7288]).addTo(map)
        .bindPopup('KPYM');

    L.marker([42.282, -72.2148]).addTo(map)
        .bindPopup('nan');

    L.marker([18.1348, -65.4936]).addTo(map)
        .bindPopup('TJVQ');

    L.marker([44.9886, -85.1984]).addTo(map)
        .bindPopup('KACB');

    L.marker([41.8677, -84.0773]).addTo(map)
        .bindPopup('KADG');

    L.marker([43.3221, -84.688]).addTo(map)
        .bindPopup('KAMN');

    L.marker([45.0781, -83.5603]).addTo(map)
        .bindPopup('KAPN');

    L.marker([42.223, -83.7456]).addTo(map)
        .bindPopup('KARB');

    L.marker([42.2349, -85.5521]).addTo(map)
        .bindPopup('KAZO');

    L.marker([42.1286, -86.4285]).addTo(map)
        .bindPopup('KBEH');

    L.marker([42.3073, -85.2515]).addTo(map)
        .bindPopup('KBTL');

    L.marker([44.2753, -85.4189]).addTo(map)
        .bindPopup('KCAD');

    L.marker([46.2508, -84.4724]).addTo(map)
        .bindPopup('KCIU');

    L.marker([47.1684, -88.4891]).addTo(map)
        .bindPopup('KCMX');

    L.marker([46.0093, -83.7439]).addTo(map)
        .bindPopup('KDRM');

    L.marker([42.2125, -83.3533]).addTo(map)
        .bindPopup('KDTW');

    L.marker([44.3128, -83.4223]).addTo(map)
        .bindPopup('nan');

    L.marker([45.7227, -87.0937]).addTo(map)
        .bindPopup('KESC');

    L.marker([42.9654, -83.7436]).addTo(map)
        .bindPopup('KFNT');

    L.marker([43.9706, -84.475]).addTo(map)
        .bindPopup('KGDW');

    L.marker([45.0135, -84.7036]).addTo(map)
        .bindPopup('KGLR');

    L.marker([42.8808, -85.5228]).addTo(map)
        .bindPopup('KGRR');

    L.marker([41.9598, -85.5934]).addTo(map)
        .bindPopup('KHAI');

    L.marker([42.7959, -86.162]).addTo(map)
        .bindPopup('KHLM');

    L.marker([44.3598, -84.6711]).addTo(map)
        .bindPopup('KHTL');

    L.marker([45.8184, -88.1145]).addTo(map)
        .bindPopup('KIMT');

    L.marker([41.8133, -85.439]).addTo(map)
        .bindPopup('KIRS');

    L.marker([45.9746, -86.1718]).addTo(map)
        .bindPopup('KISQ');

    L.marker([46.5275, -90.1314]).addTo(map)
        .bindPopup('KIWD');

    L.marker([42.2598, -84.4594]).addTo(map)
        .bindPopup('KJXN');

    L.marker([42.7787, -84.5874]).addTo(map)
        .bindPopup('KLAN');

    L.marker([43.9625, -86.4079]).addTo(map)
        .bindPopup('KLDM');

    L.marker([44.2724, -86.2469]).addTo(map)
        .bindPopup('KMBL');

    L.marker([43.5329, -84.0796]).addTo(map)
        .bindPopup('KMBS');

    L.marker([45.8649, -84.6373]).addTo(map)
        .bindPopup('KMCD');

    L.marker([43.1695, -86.2382]).addTo(map)
        .bindPopup('KMKG');

    L.marker([45.1267, -87.6384]).addTo(map)
        .bindPopup('KMNM');

    L.marker([43.6217, -84.7375]).addTo(map)
        .bindPopup('KMOP');

    L.marker([46.3536, -87.3954]).addTo(map)
        .bindPopup('KSAW');

    L.marker([42.6135, -82.8369]).addTo(map)
        .bindPopup('KMTC');

    L.marker([41.8359, -86.2252]).addTo(map)
        .bindPopup('nan');

    L.marker([44.4516, -83.3941]).addTo(map)
        .bindPopup('KOSC');

    L.marker([42.911, -82.5289]).addTo(map)
        .bindPopup('KPHN');

    L.marker([45.5709, -84.7967]).addTo(map)
        .bindPopup('KPLN');

    L.marker([42.6655, -83.4201]).addTo(map)
        .bindPopup('KPTK');

    L.marker([43.9, -85.5167]).addTo(map)
        .bindPopup('KRCT');

    L.marker([44.7414, -85.5822]).addTo(map)
        .bindPopup('KTVC');

    L.marker([43.4588, -83.4455]).addTo(map)
        .bindPopup('KCFS');

    L.marker([44.2448, -84.1798]).addTo(map)
        .bindPopup('nan');

    L.marker([43.7226, -85.5041]).addTo(map)
        .bindPopup('KRQB');

    L.marker([43.6815, -93.3672]).addTo(map)
        .bindPopup('KAEL');

    L.marker([43.665, -92.9334]).addTo(map)
        .bindPopup('KAUM');

    L.marker([45.8663, -95.3947]).addTo(map)
        .bindPopup('KAXN');

    L.marker([45.3319, -95.6506]).addTo(map)
        .bindPopup('KBBB');

    L.marker([48.7284, -94.6122]).addTo(map)
        .bindPopup('KBDE');

    L.marker([47.5094, -94.9337]).addTo(map)
        .bindPopup('KBJI');

    L.marker([46.3983, -94.1381]).addTo(map)
        .bindPopup('KBRD');

    L.marker([47.8417, -96.6216]).addTo(map)
        .bindPopup('KCKN');

    L.marker([46.8421, -92.1936]).addTo(map)
        .bindPopup('KDLH');

    L.marker([46.8252, -95.8857]).addTo(map)
        .bindPopup('KDTL');

    L.marker([47.4251, -92.4985]).addTo(map)
        .bindPopup('KEVM');

    L.marker([44.3284, -93.3125]).addTo(map)
        .bindPopup('KFBL');

    L.marker([44.8272, -93.4571]).addTo(map)
        .bindPopup('KFCM');

    L.marker([46.2844, -96.1567]).addTo(map)
        .bindPopup('KFFM');

    L.marker([43.6439, -94.4156]).addTo(map)
        .bindPopup('KFRM');

    L.marker([47.2111, -93.5098]).addTo(map)
        .bindPopup('KGPZ');

    L.marker([47.8383, -90.3829]).addTo(map)
        .bindPopup('KCKC');

    L.marker([47.3866, -92.839]).addTo(map)
        .bindPopup('KHIB');

    L.marker([45.1177, -95.1304]).addTo(map)
        .bindPopup('KBDH');

    L.marker([48.5662, -93.4031]).addTo(map)
        .bindPopup('KINL');

    L.marker([47.8245, -91.8307]).addTo(map)
        .bindPopup('KELO');

    L.marker([45.062, -93.3539]).addTo(map)
        .bindPopup('KMIC');

    L.marker([43.65, -94.9867]).addTo(map)
        .bindPopup('KMJQ');

    L.marker([44.2216, -93.9187]).addTo(map)
        .bindPopup('KMKT');

    L.marker([44.4505, -95.8219]).addTo(map)
        .bindPopup('KMML');

    L.marker([45.5704, -95.9684]).addTo(map)
        .bindPopup('KMOX');

    L.marker([44.882, -93.2218]).addTo(map)
        .bindPopup('KMSP');

    L.marker([44.9691, -95.7103]).addTo(map)
        .bindPopup('KMVE');

    L.marker([43.9134, -95.1094]).addTo(map)
        .bindPopup('KMWM');

    L.marker([43.9868, -95.7826]).addTo(map)
        .bindPopup('KDVP');

    L.marker([44.0772, -91.7083]).addTo(map)
        .bindPopup('KONA');

    L.marker([43.6559, -95.584]).addTo(map)
        .bindPopup('KOTG');

    L.marker([44.1234, -93.2606]).addTo(map)
        .bindPopup('KOWA');

    L.marker([46.9006, -95.0731]).addTo(map)
        .bindPopup('KPKD');

    L.marker([48.856, -95.697]).addTo(map)
        .bindPopup('KROX');

    L.marker([48.9414, -95.3484]).addTo(map)
        .bindPopup('KRRT');

    L.marker([43.9083, -92.5]).addTo(map)
        .bindPopup('KRST');

    L.marker([44.5472, -95.0823]).addTo(map)
        .bindPopup('KRWF');

    L.marker([45.5466, -94.0599]).addTo(map)
        .bindPopup('KSTC');

    L.marker([44.9345, -93.06]).addTo(map)
        .bindPopup('KSTP');

    L.marker([44.4755, -93.0163]).addTo(map)
        .bindPopup('KSYN');

    L.marker([48.0657, -96.185]).addTo(map)
        .bindPopup('KTVF');

    L.marker([44.3196, -94.5023]).addTo(map)
        .bindPopup('KULM');

    L.marker([30.4104, -88.9244]).addTo(map)
        .bindPopup('KBIX');

    L.marker([33.6438, -88.4438]).addTo(map)
        .bindPopup('KCBM');

    L.marker([34.2997, -90.5123]).addTo(map)
        .bindPopup('KCKM');

    L.marker([34.915, -88.6035]).addTo(map)
        .bindPopup('KCRX');

    L.marker([32.4387, -90.1031]).addTo(map)
        .bindPopup('KMBO');

    L.marker([33.4829, -90.9856]).addTo(map)
        .bindPopup('KGLH');

    L.marker([30.4073, -89.0701]).addTo(map)
        .bindPopup('KGPT');

    L.marker([33.4503, -88.5914]).addTo(map)
        .bindPopup('KGTR');

    L.marker([33.4943, -90.0847]).addTo(map)
        .bindPopup('KGWO');

    L.marker([31.2648, -89.2528]).addTo(map)
        .bindPopup('KHBG');

    L.marker([31.6137, -91.2973]).addTo(map)
        .bindPopup('KHEZ');

    L.marker([32.3345, -90.2222]).addTo(map)
        .bindPopup('KHKS');

    L.marker([32.3112, -90.0759]).addTo(map)
        .bindPopup('KJAN');

    L.marker([33.1462, -89.0625]).addTo(map)
        .bindPopup('KLMS');

    L.marker([31.6726, -89.1722]).addTo(map)
        .bindPopup('KLUL');

    L.marker([31.1785, -90.4719]).addTo(map)
        .bindPopup('KMCB');

    L.marker([32.3326, -88.7519]).addTo(map)
        .bindPopup('KMEI');

    L.marker([34.2315, -90.2896]).addTo(map)
        .bindPopup('KMMS');

    L.marker([34.9787, -89.7869]).addTo(map)
        .bindPopup('KOLV');

    L.marker([33.09, -89.5409]).addTo(map)
        .bindPopup('KOSX');

    L.marker([30.786, -89.5045]).addTo(map)
        .bindPopup('nan');

    L.marker([30.4628, -88.5292]).addTo(map)
        .bindPopup('KPQL');

    L.marker([31.4671, -89.3371]).addTo(map)
        .bindPopup('KPIB');

    L.marker([32.9549, -90.8459]).addTo(map)
        .bindPopup('nan');

    L.marker([34.2681, -88.7699]).addTo(map)
        .bindPopup('KTUP');

    L.marker([33.4654, -88.3803]).addTo(map)
        .bindPopup('KUBS');

    L.marker([34.3843, -89.5368]).addTo(map)
        .bindPopup('KUOX');

    L.marker([34.681, -90.3467]).addTo(map)
        .bindPopup('KUTA');

    L.marker([32.2393, -90.9284]).addTo(map)
        .bindPopup('KVKS');

    L.marker([38.096, -92.5495]).addTo(map)
        .bindPopup('KAIZ');

    L.marker([36.5321, -93.2005]).addTo(map)
        .bindPopup('KBBG');

    L.marker([38.2898, -94.3401]).addTo(map)
        .bindPopup('KBUM');

    L.marker([37.2253, -89.5708]).addTo(map)
        .bindPopup('KCGI');

    L.marker([38.8181, -92.2196]).addTo(map)
        .bindPopup('KCOU');

    L.marker([38.7074, -93.1759]).addTo(map)
        .bindPopup('KDMO');

    L.marker([36.8065, -94.391]).addTo(map)
        .bindPopup('KEOS');

    L.marker([37.7611, -90.4286]).addTo(map)
        .bindPopup('KFAM');

    L.marker([40.0935, -92.5449]).addTo(map)
        .bindPopup('KIRK');

    L.marker([38.5912, -92.1561]).addTo(map)
        .bindPopup('KJEF');

    L.marker([37.1518, -94.4983]).addTo(map)
        .bindPopup('KJLN');

    L.marker([59.4332, -154.804]).addTo(map)
        .bindPopup('PFKK');

    L.marker([36.2259, -90.0366]).addTo(map)
        .bindPopup('KTKX');

    L.marker([36.6006, -89.9922]).addTo(map)
        .bindPopup('KMAW');

    L.marker([39.4639, -92.427]).addTo(map)
        .bindPopup('KMBY');

    L.marker([39.2976, -94.7139]).addTo(map)
        .bindPopup('KMCI');

    L.marker([39.0958, -93.2029]).addTo(map)
        .bindPopup('KMHL');

    L.marker([39.1232, -94.5928]).addTo(map)
        .bindPopup('KMKC');

    L.marker([37.853, -94.3045]).addTo(map)
        .bindPopup('KNVD');

    L.marker([36.3058, 43.1474]).addTo(map)
        .bindPopup('nan');

    L.marker([36.6259, -93.2289]).addTo(map)
        .bindPopup('KPLK');

    L.marker([36.7739, -90.3249]).addTo(map)
        .bindPopup('KPOF');

    L.marker([37.2457, -93.3886]).addTo(map)
        .bindPopup('KSGF');

    L.marker([36.8989, -89.5618]).addTo(map)
        .bindPopup('KSIK');

    L.marker([39.7719, -94.9097]).addTo(map)
        .bindPopup('KSTJ');

    L.marker([38.7487, -90.37]).addTo(map)
        .bindPopup('KSTL');

    L.marker([38.6621, -90.652]).addTo(map)
        .bindPopup('KSUS');

    L.marker([38.7303, -93.5479]).addTo(map)
        .bindPopup('KSZL');

    L.marker([37.7416, -92.1407]).addTo(map)
        .bindPopup('KTBN');

    L.marker([40.0836, -93.5908]).addTo(map)
        .bindPopup('KTRX');

    L.marker([38.1274, -91.7695]).addTo(map)
        .bindPopup('KVIH');

    L.marker([38.4278, -92.8752]).addTo(map)
        .bindPopup('nan');

    L.marker([45.4725, -105.454]).addTo(map)
        .bindPopup('nan');

    L.marker([45.8077, -108.543]).addTo(map)
        .bindPopup('KBIL');

    L.marker([45.9548, -112.497]).addTo(map)
        .bindPopup('KBTM');

    L.marker([45.7775, -111.153]).addTo(map)
        .bindPopup('KBZN');

    L.marker([48.6084, -112.376]).addTo(map)
        .bindPopup('KCTB');

    L.marker([45.2554, -112.553]).addTo(map)
        .bindPopup('KDLN');

    L.marker([46.6208, -113.205]).addTo(map)
        .bindPopup('nan');

    L.marker([48.3105, -114.256]).addTo(map)
        .bindPopup('KGPI');

    L.marker([47.1387, -104.807]).addTo(map)
        .bindPopup('KGDV');

    L.marker([48.2125, -106.615]).addTo(map)
        .bindPopup('KGGW');

    L.marker([47.482, -111.371]).addTo(map)
        .bindPopup('KGTF');

    L.marker([46.6068, -111.983]).addTo(map)
        .bindPopup('KHLN');

    L.marker([48.543, -109.762]).addTo(map)
        .bindPopup('KHVR');

    L.marker([47.3288, -106.953]).addTo(map)
        .bindPopup('KJDN');

    L.marker([45.6994, -110.448]).addTo(map)
        .bindPopup('KLVM');

    L.marker([47.0493, -109.467]).addTo(map)
        .bindPopup('KLWT');

    L.marker([48.3669, -107.919]).addTo(map)
        .bindPopup('nan');

    L.marker([46.428, -105.886]).addTo(map)
        .bindPopup('KMLS');

    L.marker([46.9163, -114.091]).addTo(map)
        .bindPopup('KMSO');

    L.marker([48.0945, -105.575]).addTo(map)
        .bindPopup('KOLF');

    L.marker([48.7903, -104.534]).addTo(map)
        .bindPopup('KPWD');

    L.marker([46.4751, -108.541]).addTo(map)
        .bindPopup('KRPX');

    L.marker([48.5407, -111.871]).addTo(map)
        .bindPopup('KSBX');

    L.marker([47.7069, -104.193]).addTo(map)
        .bindPopup('KSDY');

    L.marker([47.5735, -115.281]).addTo(map)
        .bindPopup('KTHM');

    L.marker([44.6884, -111.118]).addTo(map)
        .bindPopup('KWYS');

    L.marker([40.3395, -99.9065]).addTo(map)
        .bindPopup('nan');

    L.marker([42.0532, -102.804]).addTo(map)
        .bindPopup('KAIA');

    L.marker([42.5792, -99.993]).addTo(map)
        .bindPopup('KANW');

    L.marker([41.4365, -99.6422]).addTo(map)
        .bindPopup('KBBW');

    L.marker([41.874, -103.596]).addTo(map)
        .bindPopup('KBFF');

    L.marker([40.3013, -96.7541]).addTo(map)
        .bindPopup('KBIE');

    L.marker([41.7767, -99.1497]).addTo(map)
        .bindPopup('KBUB');

    L.marker([42.8376, -103.095]).addTo(map)
        .bindPopup('KCDR');

    L.marker([40.727, -99.0068]).addTo(map)
        .bindPopup('KEAR');

    L.marker([40.8675, -96.11]).addTo(map)
        .bindPopup('nan');

    L.marker([40.183, -97.1693]).addTo(map)
        .bindPopup('KFBY');

    L.marker([41.4491, -96.5202]).addTo(map)
        .bindPopup('KFET');

    L.marker([40.9675, -98.3096]).addTo(map)
        .bindPopup('KGRI');

    L.marker([42.806, -102.175]).addTo(map)
        .bindPopup('KGRN');

    L.marker([40.4521, -99.3365]).addTo(map)
        .bindPopup('KHDE');

    L.marker([40.6053, -98.4279]).addTo(map)
        .bindPopup('KHSI');

    L.marker([40.5093, -101.621]).addTo(map)
        .bindPopup('KIML');

    L.marker([41.1262, -100.684]).addTo(map)
        .bindPopup('KLBF');

    L.marker([40.851, -96.7592]).addTo(map)
        .bindPopup('KLNK');

    L.marker([40.791, -99.7773]).addTo(map)
        .bindPopup('KLXN');

    L.marker([40.2063, -100.592]).addTo(map)
        .bindPopup('KMCK');

    L.marker([42.0422, -101.059]).addTo(map)
        .bindPopup('KMHN');

    L.marker([41.195, -96.1148]).addTo(map)
        .bindPopup('KMLE');

    L.marker([41.1183, -95.9125]).addTo(map)
        .bindPopup('KOFF');

    L.marker([41.9855, -97.4351]).addTo(map)
        .bindPopup('KOFK');

    L.marker([41.1195, -101.77]).addTo(map)
        .bindPopup('KOGA');

    L.marker([41.401, -102.355]).addTo(map)
        .bindPopup('KOKS');

    L.marker([41.448, -97.3426]).addTo(map)
        .bindPopup('KOLU');

    L.marker([42.4699, -98.6881]).addTo(map)
        .bindPopup('KONL');

    L.marker([41.6103, -96.6299]).addTo(map)
        .bindPopup('KSCB');

    L.marker([41.1013, -102.985]).addTo(map)
        .bindPopup('KSNY');

    L.marker([42.8578, -100.548]).addTo(map)
        .bindPopup('KVTN');

    L.marker([39.468, -117.195]).addTo(map)
        .bindPopup('nan');

    L.marker([40.599, -116.874]).addTo(map)
        .bindPopup('KBAM');

    L.marker([35.9475, -114.861]).addTo(map)
        .bindPopup('nan');

    L.marker([36.8611, -116.787]).addTo(map)
        .bindPopup('KBTY');

    L.marker([39.1922, -119.734]).addTo(map)
        .bindPopup('KCXP');

    L.marker([36.6194, -116.033]).addTo(map)
        .bindPopup('KDRA');

    L.marker([40.8249, -115.792]).addTo(map)
        .bindPopup('KEKO');

    L.marker([39.2997, -114.842]).addTo(map)
        .bindPopup('KELY');

    L.marker([39.6042, -116.005]).addTo(map)
        .bindPopup('nan');

    L.marker([39.0041, -119.158]).addTo(map)
        .bindPopup('nan');

    L.marker([39.4991, -118.749]).addTo(map)
        .bindPopup('KFLX');

    L.marker([38.9241, -117.959]).addTo(map)
        .bindPopup('KGAB');

    L.marker([35.9728, -115.134]).addTo(map)
        .bindPopup('KHND');

    L.marker([38.5444, -118.634]).addTo(map)
        .bindPopup('KHTH');

    L.marker([36.5872, -115.673]).addTo(map)
        .bindPopup('KINS');

    L.marker([41.976, -114.658]).addTo(map)
        .bindPopup('nan');

    L.marker([36.0801, -115.152]).addTo(map)
        .bindPopup('KLAS');

    L.marker([40.0664, -118.565]).addTo(map)
        .bindPopup('KLOL');

    L.marker([36.2362, -115.034]).addTo(map)
        .bindPopup('KLSV');

    L.marker([41.1171, -114.922]).addTo(map)
        .bindPopup('KLWL');

    L.marker([39.0003, -119.751]).addTo(map)
        .bindPopup('KMEV');

    L.marker([36.835, -114.055]).addTo(map)
        .bindPopup('nan');

    L.marker([39.4166, -118.701]).addTo(map)
        .bindPopup('KNFL');

    L.marker([39.4991, -119.768]).addTo(map)
        .bindPopup('KRNO');

    L.marker([38.0602, -117.087]).addTo(map)
        .bindPopup('KTPH');

    L.marker([36.9458, -116.038]).addTo(map)
        .bindPopup('KUCC');

    L.marker([36.2107, -115.194]).addTo(map)
        .bindPopup('KVGT');

    L.marker([40.8966, -117.806]).addTo(map)
        .bindPopup('KWMC');

    L.marker([37.7988, -116.781]).addTo(map)
        .bindPopup('KTNX');

    L.marker([42.8051, -72.003]).addTo(map)
        .bindPopup('KAFN');

    L.marker([42.7817, -71.5148]).addTo(map)
        .bindPopup('KASH');

    L.marker([44.5754, -71.1759]).addTo(map)
        .bindPopup('KBML');

    L.marker([43.3704, -72.3687]).addTo(map)
        .bindPopup('KCNH');

    L.marker([43.2027, -71.5023]).addTo(map)
        .bindPopup('KCON');

    L.marker([42.8984, -72.2708]).addTo(map)
        .bindPopup('KEEN');

    L.marker([44.7925, -71.1642]).addTo(map)
        .bindPopup('KERR');

    L.marker([44.3676, -71.5445]).addTo(map)
        .bindPopup('KHIE');

    L.marker([43.5727, -71.4189]).addTo(map)
        .bindPopup('KLCI');

    L.marker([43.6261, -72.3042]).addTo(map)
        .bindPopup('KLEB');

    L.marker([42.9326, -71.4357]).addTo(map)
        .bindPopup('KMHT');

    L.marker([40.4625, -74.3306]).addTo(map)
        .bindPopup('nan');

    L.marker([43.0779, -70.8233]).addTo(map)
        .bindPopup('KPSM');

    L.marker([39.4576, -74.5772]).addTo(map)
        .bindPopup('KACY');

    L.marker([40.1869, -74.1249]).addTo(map)
        .bindPopup('KBLM');

    L.marker([40.8752, -74.2814]).addTo(map)
        .bindPopup('KCDW');

    L.marker([40.6925, -74.1686]).addTo(map)
        .bindPopup('KEWR');

    L.marker([40.5244, -74.5984]).addTo(map)
        .bindPopup('nan');

    L.marker([40.6174, -74.2446]).addTo(map)
        .bindPopup('KLDJ');

    L.marker([39.9429, -74.8457]).addTo(map)
        .bindPopup('KVAY');

    L.marker([39.3678, -75.0722]).addTo(map)
        .bindPopup('KMIV');

    L.marker([39.9275, -74.2924]).addTo(map)
        .bindPopup('KMJX');

    L.marker([40.7994, -74.4149]).addTo(map)
        .bindPopup('KMMU');

    L.marker([40.0333, -74.3533]).addTo(map)
        .bindPopup('KNEL');

    L.marker([40.3992, -74.6589]).addTo(map)
        .bindPopup('nan');

    L.marker([40.8501, -74.0608]).addTo(map)
        .bindPopup('KTEB');

    L.marker([40.2767, -74.8135]).addTo(map)
        .bindPopup('KTTN');

    L.marker([40.0156, -74.5917]).addTo(map)
        .bindPopup('KWRI');

    L.marker([39.0085, -74.9083]).addTo(map)
        .bindPopup('KWWD');

    L.marker([35.0402, -106.609]).addTo(map)
        .bindPopup('KABQ');

    L.marker([32.8399, -105.991]).addTo(map)
        .bindPopup('KALM');

    L.marker([32.8525, -104.468]).addTo(map)
        .bindPopup('KATS');

    L.marker([36.422, -105.29]).addTo(map)
        .bindPopup('KAXX');

    L.marker([36.4462, -103.167]).addTo(map)
        .bindPopup('KCAO');

    L.marker([32.3375, -104.263]).addTo(map)
        .bindPopup('KCNM');

    L.marker([34.4251, -103.079]).addTo(map)
        .bindPopup('KCVN');

    L.marker([34.3828, -103.322]).addTo(map)
        .bindPopup('KCVS');

    L.marker([32.2623, -107.721]).addTo(map)
        .bindPopup('KDMN');

    L.marker([36.03, -106.046]).addTo(map)
        .bindPopup('nan');

    L.marker([36.7412, -108.23]).addTo(map)
        .bindPopup('KFMN');

    L.marker([34.4834, -104.217]).addTo(map)
        .bindPopup('KFSU');

    L.marker([35.1673, -107.902]).addTo(map)
        .bindPopup('KGNT');

    L.marker([35.5111, -108.789]).addTo(map)
        .bindPopup('KGUP');

    L.marker([32.7668, -103.209]).addTo(map)
        .bindPopup('nan');

    L.marker([32.8525, -106.107]).addTo(map)
        .bindPopup('KHMN');

    L.marker([32.6875, -103.217]).addTo(map)
        .bindPopup('KHOB');

    L.marker([35.8798, -106.269]).addTo(map)
        .bindPopup('KLAM');

    L.marker([32.2894, -106.922]).addTo(map)
        .bindPopup('KLRU');

    L.marker([32.3335, -108.692]).addTo(map)
        .bindPopup('KLSB');

    L.marker([35.6542, -105.142]).addTo(map)
        .bindPopup('KLVS');

    L.marker([34.024, -106.898]).addTo(map)
        .bindPopup('KONM');

    L.marker([33.3016, -104.531]).addTo(map)
        .bindPopup('KROW');

    L.marker([36.7415, -104.502]).addTo(map)
        .bindPopup('KRTN');

    L.marker([33.4628, -105.535]).addTo(map)
        .bindPopup('KSRR');

    L.marker([35.6171, -106.089]).addTo(map)
        .bindPopup('KSAF');

    L.marker([32.6365, -108.156]).addTo(map)
        .bindPopup('KSVC');

    L.marker([35.1828, -103.603]).addTo(map)
        .bindPopup('KTCC');

    L.marker([33.2369, -107.272]).addTo(map)
        .bindPopup('KTCS');

    L.marker([36.4582, -105.672]).addTo(map)
        .bindPopup('KSKX');

    L.marker([32.3415, -106.403]).addTo(map)
        .bindPopup('KWSD');

    L.marker([42.7483, -73.8017]).addTo(map)
        .bindPopup('KALB');

    L.marker([43.9919, -76.0217]).addTo(map)
        .bindPopup('KART');

    L.marker([44.312, -75.9003]).addTo(map)
        .bindPopup('nan');

    L.marker([42.2087, -75.9798]).addTo(map)
        .bindPopup('KBGM');

    L.marker([42.9405, -78.7322]).addTo(map)
        .bindPopup('KBUF');

    L.marker([42.6292, -74.891]).addTo(map)
        .bindPopup('nan');

    L.marker([40.9151, -72.7919]).addTo(map)
        .bindPopup('nan');

    L.marker([42.5926, -76.2149]).addTo(map)
        .bindPopup('nan');

    L.marker([42.4933, -79.272]).addTo(map)
        .bindPopup('KDKK');

    L.marker([42.5709, -77.7131]).addTo(map)
        .bindPopup('KDSV');

    L.marker([42.1599, -76.8916]).addTo(map)
        .bindPopup('KELM');

    L.marker([42.1095, -77.99]).addTo(map)
        .bindPopup('KELZ');

    L.marker([41.2513, -72.0316]).addTo(map)
        .bindPopup('nan');

    L.marker([40.8437, -72.6318]).addTo(map)
        .bindPopup('KFOK');

    L.marker([40.7288, -73.4134]).addTo(map)
        .bindPopup('KFRG');

    L.marker([43.3412, -73.6103]).addTo(map)
        .bindPopup('KGFL');

    L.marker([42.2913, -73.7103]).addTo(map)
        .bindPopup('nan');

    L.marker([41.067, -73.7076]).addTo(map)
        .bindPopup('KHPN');

    L.marker([40.9596, -72.2518]).addTo(map)
        .bindPopup('KHTO');

    L.marker([43.1073, -78.9462]).addTo(map)
        .bindPopup('KIAG');

    L.marker([40.7952, -73.1002]).addTo(map)
        .bindPopup('KISP');

    L.marker([42.491, -76.4584]).addTo(map)
        .bindPopup('KITH');

    L.marker([40.6397, -73.7789]).addTo(map)
        .bindPopup('KJFK');

    L.marker([42.1534, -79.258]).addTo(map)
        .bindPopup('KJHW');

    L.marker([40.775, -73.875]).addTo(map)
        .bindPopup('KLGA');

    L.marker([44.2645, -73.9619]).addTo(map)
        .bindPopup('KLKP');

    L.marker([41.51, -74.2646]).addTo(map)
        .bindPopup('KMGJ');

    L.marker([44.9358, -74.8456]).addTo(map)
        .bindPopup('KMSS');

    L.marker([41.7016, -74.795]).addTo(map)
        .bindPopup('KMSV');

    L.marker([41.0765, -71.9208]).addTo(map)
        .bindPopup('KMTP');

    L.marker([44.6819, -75.4655]).addTo(map)
        .bindPopup('KOGS');

    L.marker([42.5666, -75.5241]).addTo(map)
        .bindPopup('KOIC');

    L.marker([42.2422, -78.3716]).addTo(map)
        .bindPopup('KOLE');

    L.marker([42.5247, -75.0644]).addTo(map)
        .bindPopup('nan');

    L.marker([44.6509, -73.4681]).addTo(map)
        .bindPopup('KPBG');

    L.marker([41.6266, -73.8842]).addTo(map)
        .bindPopup('KPOU');

    L.marker([43.2338, -75.407]).addTo(map)
        .bindPopup('KRME');

    L.marker([43.1189, -77.6724]).addTo(map)
        .bindPopup('KROC');

    L.marker([44.9917, -73.3635]).addTo(map)
        .bindPopup('nan');

    L.marker([42.8525, -73.9289]).addTo(map)
        .bindPopup('KSCH');

    L.marker([44.3853, -74.2062]).addTo(map)
        .bindPopup('KSLK');

    L.marker([41.5042, -74.1047]).addTo(map)
        .bindPopup('KSWF');

    L.marker([42.3026, -75.416]).addTo(map)
        .bindPopup('nan');

    L.marker([43.1112, -76.1063]).addTo(map)
        .bindPopup('KSYR');

    L.marker([40.8219, -72.8694]).addTo(map)
        .bindPopup('KHWV');

    L.marker([35.4362, -82.5418]).addTo(map)
        .bindPopup('KAVL');

    L.marker([35.214, -80.9431]).addTo(map)
        .bindPopup('KCLT');

    L.marker([34.9756, -78.3646]).addTo(map)
        .bindPopup('KCTZ');

    L.marker([36.2535, -75.7885]).addTo(map)
        .bindPopup('nan');

    L.marker([36.2606, -76.1746]).addTo(map)
        .bindPopup('KECG');

    L.marker([36.0277, -76.5671]).addTo(map)
        .bindPopup('KEDE');

    L.marker([35.073, -77.0429]).addTo(map)
        .bindPopup('KEWN');

    L.marker([34.9912, -78.8803]).addTo(map)
        .bindPopup('KFAY');

    L.marker([35.1318, -78.9367]).addTo(map)
        .bindPopup('KFBG');

    L.marker([36.0182, -75.6713]).addTo(map)
        .bindPopup('KFFA');

    L.marker([35.3394, -77.9606]).addTo(map)
        .bindPopup('KGSB');

    L.marker([36.0978, -79.9373]).addTo(map)
        .bindPopup('KGSO');

    L.marker([35.0363, -79.4978]).addTo(map)
        .bindPopup('KHFF');

    L.marker([35.7411, -81.3895]).addTo(map)
        .bindPopup('KHKY');

    L.marker([35.2328, -75.6178]).addTo(map)
        .bindPopup('KHSE');

    L.marker([36.2228, -81.0983]).addTo(map)
        .bindPopup('KUKF');

    L.marker([34.2706, -77.9026]).addTo(map)
        .bindPopup('KILM');

    L.marker([36.1337, -80.222]).addTo(map)
        .bindPopup('KINT');

    L.marker([35.3314, -77.6088]).addTo(map)
        .bindPopup('KISO');

    L.marker([34.6099, -79.0594]).addTo(map)
        .bindPopup('KLBT');

    L.marker([36.0233, -78.3303]).addTo(map)
        .bindPopup('KLHZ');

    L.marker([35.919, -75.6955]).addTo(map)
        .bindPopup('KMQI');

    L.marker([35.8202, -81.6114]).addTo(map)
        .bindPopup('KMRN');

    L.marker([34.7919, -79.3658]).addTo(map)
        .bindPopup('KMEB');

    L.marker([34.8292, -77.6121]).addTo(map)
        .bindPopup('KOAJ');

    L.marker([35.5705, -77.0498]).addTo(map)
        .bindPopup('KOCW');

    L.marker([35.6352, -77.3853]).addTo(map)
        .bindPopup('KPGV');

    L.marker([35.1709, -79.0145]).addTo(map)
        .bindPopup('KPOB');

    L.marker([35.2138, -80.6701]).addTo(map)
        .bindPopup('nan');

    L.marker([35.8776, -78.7875]).addTo(map)
        .bindPopup('KRDU');

    L.marker([35.8563, -77.8919]).addTo(map)
        .bindPopup('KRWI');

    L.marker([36.4395, -77.7093]).addTo(map)
        .bindPopup('KRZZ');

    L.marker([35.2374, -79.3912]).addTo(map)
        .bindPopup('KSOP');

    L.marker([35.6459, -80.5203]).addTo(map)
        .bindPopup('KRUQ');

    L.marker([35.7653, -80.9539]).addTo(map)
        .bindPopup('KSVH');

    L.marker([35.3878, -80.7091]).addTo(map)
        .bindPopup('KJQF');

    L.marker([46.0239, -99.3526]).addTo(map)
        .bindPopup('KASY');

    L.marker([46.7727, -100.746]).addTo(map)
        .bindPopup('KBIS');

    L.marker([46.1655, -103.301]).addTo(map)
        .bindPopup('KBPP');

    L.marker([46.7974, -102.802]).addTo(map)
        .bindPopup('KDIK');

    L.marker([48.1142, -98.9088]).addTo(map)
        .bindPopup('KDVL');

    L.marker([46.9207, -96.8158]).addTo(map)
        .bindPopup('KFAR');

    L.marker([47.9493, -97.1761]).addTo(map)
        .bindPopup('KGFK');

    L.marker([48.1779, -103.642]).addTo(map)
        .bindPopup('KISN');

    L.marker([46.9297, -98.6782]).addTo(map)
        .bindPopup('KJMS');

    L.marker([48.4156, -101.358]).addTo(map)
        .bindPopup('KMIB');

    L.marker([48.2594, -101.28]).addTo(map)
        .bindPopup('KMOT');

    L.marker([48.9425, -97.2408]).addTo(map)
        .bindPopup('KPMB');

    L.marker([47.9611, -97.4012]).addTo(map)
        .bindPopup('KRDR');

    L.marker([48.3805, -102.898]).addTo(map)
        .bindPopup('nan');

    L.marker([46.2441, -96.6074]).addTo(map)
        .bindPopup('KBWP');

    L.marker([48.2597, -103.751]).addTo(map)
        .bindPopup('KXWA');

    L.marker([41.0375, -81.4669]).addTo(map)
        .bindPopup('KAKR');

    L.marker([40.7069, -84.0267]).addTo(map)
        .bindPopup('KAOH');

    L.marker([39.211, -82.2314]).addTo(map)
        .bindPopup('KUNI');

    L.marker([40.4934, -84.2989]).addTo(map)
        .bindPopup('KAXV');

    L.marker([40.8748, -81.8883]).addTo(map)
        .bindPopup('KBJJ');

    L.marker([41.5175, -81.6833]).addTo(map)
        .bindPopup('KBKL');

    L.marker([40.9161, -81.4422]).addTo(map)
        .bindPopup('KCAK');

    L.marker([41.5651, -81.4864]).addTo(map)
        .bindPopup('KCGF');

    L.marker([41.4117, -81.8498]).addTo(map)
        .bindPopup('KCLE');

    L.marker([39.998, -82.8919]).addTo(map)
        .bindPopup('KCMH');

    L.marker([39.9024, -84.2194]).addTo(map)
        .bindPopup('KDAY');

    L.marker([41.3375, -84.4288]).addTo(map)
        .bindPopup('KDFI');

    L.marker([41.0135, -83.6687]).addTo(map)
        .bindPopup('KFDY');

    L.marker([39.8261, -84.0483]).addTo(map)
        .bindPopup('KFFO');

    L.marker([40.7534, -82.7238]).addTo(map)
        .bindPopup('KGQQ');

    L.marker([39.3638, -84.522]).addTo(map)
        .bindPopup('KHAO');

    L.marker([38.4193, -82.4943]).addTo(map)
        .bindPopup('KHTW');

    L.marker([39.4279, -83.7921]).addTo(map)
        .bindPopup('KILN');

    L.marker([41.778, -80.6955]).addTo(map)
        .bindPopup('KHZY');

    L.marker([39.8138, -82.9278]).addTo(map)
        .bindPopup('KLCK');

    L.marker([41.684, -81.3897]).addTo(map)
        .bindPopup('KLNN');

    L.marker([39.1033, -84.4186]).addTo(map)
        .bindPopup('KLUK');

    L.marker([40.8214, -82.5166]).addTo(map)
        .bindPopup('KMFD');

    L.marker([39.589, -84.2249]).addTo(map)
        .bindPopup('KMGY');

    L.marker([40.6162, -83.0635]).addTo(map)
        .bindPopup('KMNN');

    L.marker([39.531, -84.3953]).addTo(map)
        .bindPopup('KMWO');

    L.marker([40.0798, -83.073]).addTo(map)
        .bindPopup('KOSU');

    L.marker([39.5023, -84.7844]).addTo(map)
        .bindPopup('KOXD');

    L.marker([40.4709, -81.4197]).addTo(map)
        .bindPopup('KPHD');

    L.marker([38.8405, -82.8473]).addTo(map)
        .bindPopup('KPMH');

    L.marker([39.8403, -83.8402]).addTo(map)
        .bindPopup('KSGH');

    L.marker([41.4333, -82.6522]).addTo(map)
        .bindPopup('KSKY');

    L.marker([41.5649, -83.4823]).addTo(map)
        .bindPopup('KTDZ');

    L.marker([41.5868, -83.8078]).addTo(map)
        .bindPopup('KTOL');

    L.marker([41.2607, -80.6791]).addTo(map)
        .bindPopup('KYNG');

    L.marker([39.9444, -81.8921]).addTo(map)
        .bindPopup('KZZV');

    L.marker([34.303, -97.0196]).addTo(map)
        .bindPopup('KADM');

    L.marker([34.8043, -96.6713]).addTo(map)
        .bindPopup('KADH');

    L.marker([34.147, -97.1227]).addTo(map)
        .bindPopup('nan');

    L.marker([34.1926, -95.6499]).addTo(map)
        .bindPopup('nan');

    L.marker([34.698, -99.3385]).addTo(map)
        .bindPopup('KAXS');

    L.marker([36.7625, -96.0112]).addTo(map)
        .bindPopup('KBVO');

    L.marker([36.7959, -97.317]).addTo(map)
        .bindPopup('KBKN');

    L.marker([35.0974, -97.9677]).addTo(map)
        .bindPopup('KCHK');

    L.marker([36.7439, -98.1231]).addTo(map)
        .bindPopup('KCKA');

    L.marker([35.5383, -98.9327]).addTo(map)
        .bindPopup('KCLK');

    L.marker([35.3398, -99.2005]).addTo(map)
        .bindPopup('KCSM');

    L.marker([35.9499, -96.7731]).addTo(map)
        .bindPopup('KCUH');

    L.marker([33.9423, -96.3945]).addTo(map)
        .bindPopup('KDUA');

    L.marker([34.4709, -97.9599]).addTo(map)
        .bindPopup('KDUC');

    L.marker([35.4308, -99.3943]).addTo(map)
        .bindPopup('KELK');

    L.marker([36.3392, -97.9165]).addTo(map)
        .bindPopup('KEND');

    L.marker([34.352, -98.9839]).addTo(map)
        .bindPopup('KFDR');

    L.marker([34.6498, -98.4022]).addTo(map)
        .bindPopup('KFSI');

    L.marker([36.2955, -99.7764]).addTo(map)
        .bindPopup('KGAG');

    L.marker([35.8498, -97.4156]).addTo(map)
        .bindPopup('KGOK');

    L.marker([36.6851, -101.508]).addTo(map)
        .bindPopup('KGUY');

    L.marker([34.9913, -99.0513]).addTo(map)
        .bindPopup('KHBR');

    L.marker([34.0348, -95.5419]).addTo(map)
        .bindPopup('KHHW');

    L.marker([34.5677, -98.4166]).addTo(map)
        .bindPopup('KLAW');

    L.marker([34.6671, -99.2667]).addTo(map)
        .bindPopup('KLTS');

    L.marker([36.9092, -94.8875]).addTo(map)
        .bindPopup('KMIO');

    L.marker([35.6565, -95.3667]).addTo(map)
        .bindPopup('KMKO');

    L.marker([34.8824, -95.7835]).addTo(map)
        .bindPopup('KMLC');

    L.marker([36.5776, -94.8619]).addTo(map)
        .bindPopup('nan');

    L.marker([35.3931, -97.6007]).addTo(map)
        .bindPopup('KOKC');

    L.marker([35.6681, -95.9487]).addTo(map)
        .bindPopup('KOKM');

    L.marker([35.2456, -97.4721]).addTo(map)
        .bindPopup('KOUN');

    L.marker([36.732, -97.0998]).addTo(map)
        .bindPopup('KPNC');

    L.marker([35.5342, -97.6471]).addTo(map)
        .bindPopup('KPWA');

    L.marker([35.0216, -94.6213]).addTo(map)
        .bindPopup('KRKR');

    L.marker([36.0396, -95.9846]).addTo(map)
        .bindPopup('KRVS');

    L.marker([35.3579, -96.9428]).addTo(map)
        .bindPopup('KSNL');

    L.marker([35.7896, -96.6557]).addTo(map)
        .bindPopup('KSUD');

    L.marker([36.1612, -97.0857]).addTo(map)
        .bindPopup('KSWO');

    L.marker([35.4147, -97.3866]).addTo(map)
        .bindPopup('KTIK');

    L.marker([36.1984, -95.8881]).addTo(map)
        .bindPopup('KTUL');

    L.marker([36.3792, -97.7911]).addTo(map)
        .bindPopup('KWDG');

    L.marker([36.438, -99.5227]).addTo(map)
        .bindPopup('KWWR');

    L.marker([42.1903, -122.661]).addTo(map)
        .bindPopup('nan');

    L.marker([46.158, -123.879]).addTo(map)
        .bindPopup('KAST');

    L.marker([43.0865, -124.408]).addTo(map)
        .bindPopup('nan');

    L.marker([44.8373, -117.809]).addTo(map)
        .bindPopup('KBKE');

    L.marker([43.5919, -118.955]).addTo(map)
        .bindPopup('KBNO');

    L.marker([42.0746, -124.29]).addTo(map)
        .bindPopup('KBOK');

    L.marker([42.5794, -121.879]).addTo(map)
        .bindPopup('nan');

    L.marker([44.4972, -123.29]).addTo(map)
        .bindPopup('KCVO');

    L.marker([45.6769, -121.879]).addTo(map)
        .bindPopup('KCZK');

    L.marker([45.6185, -121.167]).addTo(map)
        .bindPopup('KDLS');

    L.marker([44.1246, -123.212]).addTo(map)
        .bindPopup('KEUG');

    L.marker([43.9828, -124.111]).addTo(map)
        .bindPopup('nan');

    L.marker([42.4134, -124.424]).addTo(map)
        .bindPopup('nan');

    L.marker([42.5101, -123.388]).addTo(map)
        .bindPopup('nan');

    L.marker([45.8282, -119.259]).addTo(map)
        .bindPopup('KHRI');

    L.marker([45.5404, -122.95]).addTo(map)
        .bindPopup('KHIO');

    L.marker([44.4042, -118.963]).addTo(map)
        .bindPopup('KGCD');

    L.marker([45.2902, -118.007]).addTo(map)
        .bindPopup('KLGD');

    L.marker([42.1611, -120.399]).addTo(map)
        .bindPopup('KLKV');

    L.marker([42.1561, -121.733]).addTo(map)
        .bindPopup('KLMT');

    L.marker([44.6702, -121.155]).addTo(map)
        .bindPopup('nan');

    L.marker([42.3742, -122.873]).addTo(map)
        .bindPopup('KMFR');

    L.marker([44.0205, -117.014]).addTo(map)
        .bindPopup('KONO');

    L.marker([44.5804, -124.058]).addTo(map)
        .bindPopup('KONP');

    L.marker([43.4171, -124.246]).addTo(map)
        .bindPopup('KOTH');

    L.marker([45.4182, -123.814]).addTo(map)
        .bindPopup('KTMK');

    L.marker([45.6951, -118.841]).addTo(map)
        .bindPopup('KPDT');

    L.marker([45.5887, -122.598]).addTo(map)
        .bindPopup('KPDX');

    L.marker([45.1998, -123.962]).addTo(map)
        .bindPopup('KPFC');

    L.marker([44.287, -120.904]).addTo(map)
        .bindPopup('nan');

    L.marker([43.2388, -123.356]).addTo(map)
        .bindPopup('KRBG');

    L.marker([44.2541, -121.15]).addTo(map)
        .bindPopup('KRDM');

    L.marker([42.5777, -117.885]).addTo(map)
        .bindPopup('KREO');

    L.marker([44.9095, -123.003]).addTo(map)
        .bindPopup('KSLE');

    L.marker([43.8763, -121.453]).addTo(map)
        .bindPopup('nan');

    L.marker([45.5494, -122.401]).addTo(map)
        .bindPopup('KTTD');

    L.marker([40.6521, -75.4408]).addTo(map)
        .bindPopup('KABE');

    L.marker([40.3544, -79.9302]).addTo(map)
        .bindPopup('KAGC');

    L.marker([40.2964, -78.32]).addTo(map)
        .bindPopup('KAOO');

    L.marker([41.3385, -75.7234]).addTo(map)
        .bindPopup('KAVP');

    L.marker([40.1375, -75.2651]).addTo(map)
        .bindPopup('KLOM');

    L.marker([41.8031, -78.6401]).addTo(map)
        .bindPopup('KBFD');

    L.marker([40.7725, -80.3914]).addTo(map)
        .bindPopup('KBVI');

    L.marker([40.7769, -79.9497]).addTo(map)
        .bindPopup('KBTP');

    L.marker([39.979, -75.8655]).addTo(map)
        .bindPopup('KMQS');

    L.marker([41.1783, -78.8987]).addTo(map)
        .bindPopup('KDUJ');

    L.marker([40.333, -75.1223]).addTo(map)
        .bindPopup('KDYL');

    L.marker([42.0831, -80.1739]).addTo(map)
        .bindPopup('KERI');

    L.marker([41.0358, -75.1606]).addTo(map)
        .bindPopup('nan');

    L.marker([41.3779, -79.8604]).addTo(map)
        .bindPopup('KFKL');

    L.marker([39.8409, -77.2742]).addTo(map)
        .bindPopup('nan');

    L.marker([40.2171, -76.8515]).addTo(map)
        .bindPopup('KCXY');

    L.marker([40.9868, -75.9949]).addTo(map)
        .bindPopup('KHZL');

    L.marker([40.6322, -79.1055]).addTo(map)
        .bindPopup('KIDI');

    L.marker([41.2418, -76.9211]).addTo(map)
        .bindPopup('KIPT');

    L.marker([40.3161, -78.8339]).addTo(map)
        .bindPopup('KJST');

    L.marker([40.2759, -79.4048]).addTo(map)
        .bindPopup('KLBE');

    L.marker([41.1356, -77.4223]).addTo(map)
        .bindPopup('KLHV');

    L.marker([40.1217, -76.2961]).addTo(map)
        .bindPopup('KLNS');

    L.marker([40.1935, -76.7634]).addTo(map)
        .bindPopup('KMDT');

    L.marker([41.6265, -80.2147]).addTo(map)
        .bindPopup('KGKJ');

    L.marker([41.1375, -75.3789]).addTo(map)
        .bindPopup('KMPO');

    L.marker([40.4348, -76.5694]).addTo(map)
        .bindPopup('KMUI');

    L.marker([39.8719, -75.2411]).addTo(map)
        .bindPopup('KPHL');

    L.marker([40.4915, -80.2329]).addTo(map)
        .bindPopup('KPIT');

    L.marker([40.0819, -75.0106]).addTo(map)
        .bindPopup('KPNE');

    L.marker([40.8835, -78.0863]).addTo(map)
        .bindPopup('KPSB');

    L.marker([39.859, -75.2996]).addTo(map)
        .bindPopup('nan');

    L.marker([40.2396, -75.5567]).addTo(map)
        .bindPopup('KPTW');

    L.marker([40.3785, -75.9652]).addTo(map)
        .bindPopup('KRDG');

    L.marker([40.6774, -77.6268]).addTo(map)
        .bindPopup('KRVL');

    L.marker([40.8493, -77.8487]).addTo(map)
        .bindPopup('KUNV');

    L.marker([40.8206, -76.8639]).addTo(map)
        .bindPopup('KSEG');

    L.marker([41.4125, -78.5026]).addTo(map)
        .bindPopup('KOYM');

    L.marker([39.917, -76.873]).addTo(map)
        .bindPopup('KTHV');

    L.marker([40.4352, -75.3819]).addTo(map)
        .bindPopup('KUKT');

    L.marker([39.9001, -80.1331]).addTo(map)
        .bindPopup('KWAY');

    L.marker([41.2972, -75.8512]).addTo(map)
        .bindPopup('KWBW');

    L.marker([40.1365, -80.2902]).addTo(map)
        .bindPopup('KAFJ');

    L.marker([41.1681, -71.5778]).addTo(map)
        .bindPopup('KBID');

    L.marker([41.5971, -71.4121]).addTo(map)
        .bindPopup('KOQU');

    L.marker([41.5324, -71.2815]).addTo(map)
        .bindPopup('KUUU');

    L.marker([41.7326, -71.4204]).addTo(map)
        .bindPopup('KPVD');

    L.marker([41.9208, -71.4914]).addTo(map)
        .bindPopup('KSFZ');

    L.marker([41.3496, -71.8034]).addTo(map)
        .bindPopup('KWST');

    L.marker([33.6494, -81.685]).addTo(map)
        .bindPopup('KAIK');

    L.marker([34.4946, -82.7094]).addTo(map)
        .bindPopup('KAND');

    L.marker([32.4122, -80.6344]).addTo(map)
        .bindPopup('KARW');

    L.marker([33.2578, -81.3883]).addTo(map)
        .bindPopup('KBNL');

    L.marker([34.6217, -79.7344]).addTo(map)
        .bindPopup('KBBP');

    L.marker([33.9388, -81.1195]).addTo(map)
        .bindPopup('KCAE');

    L.marker([34.2836, -80.5649]).addTo(map)
        .bindPopup('KCDN');

    L.marker([34.6719, -82.8865]).addTo(map)
        .bindPopup('KCEU');

    L.marker([32.8986, -80.0405]).addTo(map)
        .bindPopup('KCHS');

    L.marker([33.8117, -78.7239]).addTo(map)
        .bindPopup('KCRE');

    L.marker([33.9705, -80.9952]).addTo(map)
        .bindPopup('KCUB');

    L.marker([34.4491, -79.3686]).addTo(map)
        .bindPopup('KDLC');

    L.marker([34.1854, -79.7239]).addTo(map)
        .bindPopup('KFLO');

    L.marker([34.7583, -82.3764]).addTo(map)
        .bindPopup('KGYH');

    L.marker([33.3117, -79.3196]).addTo(map)
        .bindPopup('KGGE');

    L.marker([34.8479, -82.35]).addTo(map)
        .bindPopup('KGMU');

    L.marker([34.2487, -82.1591]).addTo(map)
        .bindPopup('KGRD');

    L.marker([34.8957, -82.2189]).addTo(map)
        .bindPopup('KGSP');

    L.marker([34.7129, -79.957]).addTo(map)
        .bindPopup('KCQW');

    L.marker([32.2244, -80.6975]).addTo(map)
        .bindPopup('KHXD');

    L.marker([34.4031, -80.1192]).addTo(map)
        .bindPopup('KHVS');

    L.marker([33.9208, -80.8013]).addTo(map)
        .bindPopup('KMMT');

    L.marker([33.6797, -78.9283]).addTo(map)
        .bindPopup('KMYR');

    L.marker([33.4568, -80.8595]).addTo(map)
        .bindPopup('KOGB');

    L.marker([32.921, -80.6406]).addTo(map)
        .bindPopup('KRBW');

    L.marker([34.9878, -81.0572]).addTo(map)
        .bindPopup('KUZA');

    L.marker([33.9727, -80.4706]).addTo(map)
        .bindPopup('KSSC');

    L.marker([40.2249, -83.3519]).addTo(map)
        .bindPopup('nan');

    L.marker([45.4491, -98.4218]).addTo(map)
        .bindPopup('KABR');

    L.marker([44.914, -97.1547]).addTo(map)
        .bindPopup('KATY');

    L.marker([44.3048, -96.8169]).addTo(map)
        .bindPopup('KBKX');

    L.marker([43.3089, -96.571]).addTo(map)
        .bindPopup('nan');

    L.marker([43.582, -96.7419]).addTo(map)
        .bindPopup('KFSD');

    L.marker([44.3852, -98.2285]).addTo(map)
        .bindPopup('KHON');

    L.marker([45.9187, -102.106]).addTo(map)
        .bindPopup('KLEM');

    L.marker([34.81, -82.7029]).addTo(map)
        .bindPopup('KLQK');

    L.marker([45.5465, -100.408]).addTo(map)
        .bindPopup('KMBG');

    L.marker([43.7748, -98.0386]).addTo(map)
        .bindPopup('KMHE');

    L.marker([44.0486, -101.599]).addTo(map)
        .bindPopup('KPHP');

    L.marker([44.3827, -100.286]).addTo(map)
        .bindPopup('KPIR');

    L.marker([44.0453, -103.057]).addTo(map)
        .bindPopup('KRAP');

    L.marker([44.145, -103.104]).addTo(map)
        .bindPopup('KRCA');

    L.marker([44.4803, -103.783]).addTo(map)
        .bindPopup('KSPF');

    L.marker([45.8152, -97.7431]).addTo(map)
        .bindPopup('KBTN');

    L.marker([44.016, -97.0859]).addTo(map)
        .bindPopup('KMDS');

    L.marker([43.0225, -102.511]).addTo(map)
        .bindPopup('KIEN');

    L.marker([42.9167, -97.3859]).addTo(map)
        .bindPopup('KYKN');

    L.marker([35.0607, -85.5853]).addTo(map)
        .bindPopup('KAPT');

    L.marker([36.1245, -86.6782]).addTo(map)
        .bindPopup('KBNA');

    L.marker([35.0353, -85.2038]).addTo(map)
        .bindPopup('KCHA');

    L.marker([36.6219, -87.415]).addTo(map)
        .bindPopup('KCKV');

    L.marker([35.9513, -85.085]).addTo(map)
        .bindPopup('KCSV');

    L.marker([35.0597, -86.564]).addTo(map)
        .bindPopup('KFYM');

    L.marker([36.193, -82.8151]).addTo(map)
        .bindPopup('KGCY');

    L.marker([35.8374, -87.4454]).addTo(map)
        .bindPopup('KGHM');

    L.marker([35.8578, -83.5287]).addTo(map)
        .bindPopup('KGKT');

    L.marker([35.0424, -89.9767]).addTo(map)
        .bindPopup('KMEM');

    L.marker([35.5999, -88.9156]).addTo(map)
        .bindPopup('KMKL');

    L.marker([35.3973, -84.5626]).addTo(map)
        .bindPopup('KMMI');

    L.marker([36.1795, -83.3752]).addTo(map)
        .bindPopup('KMOR');

    L.marker([36.009, -86.5201]).addTo(map)
        .bindPopup('KMQY');

    L.marker([35.5541, -87.1789]).addTo(map)
        .bindPopup('KMRC');

    L.marker([35.3567, -89.8703]).addTo(map)
        .bindPopup('KNQA');

    L.marker([36.3382, -88.3829]).addTo(map)
        .bindPopup('KPHT');

    L.marker([35.9223, -84.6897]).addTo(map)
        .bindPopup('KRKW');

    L.marker([35.6987, -85.8438]).addTo(map)
        .bindPopup('KRNC');

    L.marker([35.5601, -86.4425]).addTo(map)
        .bindPopup('KSYI');

    L.marker([35.3801, -86.2464]).addTo(map)
        .bindPopup('KTHA');

    L.marker([36.4752, -82.4074]).addTo(map)
        .bindPopup('KTRI');

    L.marker([35.811, -83.994]).addTo(map)
        .bindPopup('KTYS');

    L.marker([36.3818, -88.9854]).addTo(map)
        .bindPopup('KUCY');

    L.marker([35.2051, -85.8981]).addTo(map)
        .bindPopup('KUOS');

    L.marker([32.4113, -99.6819]).addTo(map)
        .bindPopup('KABI');

    L.marker([31.6113, -97.2305]).addTo(map)
        .bindPopup('KACT');

    L.marker([32.9686, -96.8364]).addTo(map)
        .bindPopup('KADS');

    L.marker([32.9876, -97.3188]).addTo(map)
        .bindPopup('KAFW');

    L.marker([30.3842, -103.684]).addTo(map)
        .bindPopup('nan');

    L.marker([27.7409, -98.0269]).addTo(map)
        .bindPopup('KALI');

    L.marker([35.2194, -101.706]).addTo(map)
        .bindPopup('KAMA');

    L.marker([32.5205, -94.3078]).addTo(map)
        .bindPopup('KASL');

    L.marker([30.1945, -97.6699]).addTo(map)
        .bindPopup('KAUS');

    L.marker([28.9733, -95.8635]).addTo(map)
        .bindPopup('KBYY');

    L.marker([31.1793, -99.3239]).addTo(map)
        .bindPopup('KBBD');

    L.marker([35.7009, -101.394]).addTo(map)
        .bindPopup('KBGD');

    L.marker([31.8495, -106.38]).addTo(map)
        .bindPopup('KBIF');

    L.marker([32.719, -98.891]).addTo(map)
        .bindPopup('KBKD');

    L.marker([30.0707, -94.2158]).addTo(map)
        .bindPopup('KBMT');

    L.marker([29.9508, -94.0207]).addTo(map)
        .bindPopup('KBPT');

    L.marker([25.9068, -97.4259]).addTo(map)
        .bindPopup('KBRO');

    L.marker([31.7936, -98.9565]).addTo(map)
        .bindPopup('KBWD');

    L.marker([28.9822, -95.5797]).addTo(map)
        .bindPopup('nan');

    L.marker([31.4151, -102.363]).addTo(map)
        .bindPopup('nan');

    L.marker([34.4338, -100.288]).addTo(map)
        .bindPopup('KCDS');

    L.marker([30.7157, -96.3314]).addTo(map)
        .bindPopup('KCFD');

    L.marker([30.5886, -96.3638]).addTo(map)
        .bindPopup('KCLL');

    L.marker([31.6378, -97.0741]).addTo(map)
        .bindPopup('KCNW');

    L.marker([31.8411, -99.4036]).addTo(map)
        .bindPopup('KCOM');

    L.marker([28.4567, -99.2203]).addTo(map)
        .bindPopup('KCOT');

    L.marker([27.7704, -97.5012]).addTo(map)
        .bindPopup('KCRP');

    L.marker([32.0281, -96.4006]).addTo(map)
        .bindPopup('KCRS');

    L.marker([27.7218, -97.5121]).addTo(map)
        .bindPopup('nan');

    L.marker([30.3518, -95.4145]).addTo(map)
        .bindPopup('KCXO');

    L.marker([28.5222, -99.8236]).addTo(map)
        .bindPopup('KCZT');

    L.marker([32.8471, -96.8518]).addTo(map)
        .bindPopup('KDAL');

    L.marker([32.8968, -97.038]).addTo(map)
        .bindPopup('KDFW');

    L.marker([36.0226, -102.547]).addTo(map)
        .bindPopup('KDHT');

    L.marker([29.3595, -100.778]).addTo(map)
        .bindPopup('KDLF');

    L.marker([29.3742, -100.927]).addTo(map)
        .bindPopup('KDRT');

    L.marker([30.0618, -95.5528]).addTo(map)
        .bindPopup('KDWH');

    L.marker([32.4208, -99.8546]).addTo(map)
        .bindPopup('KDYS');

    L.marker([29.6073, -95.1588]).addTo(map)
        .bindPopup('KEFD');

    L.marker([28.8572, -100.512]).addTo(map)
        .bindPopup('nan');

    L.marker([29.6006, -96.3219]).addTo(map)
        .bindPopup('KELA');

    L.marker([31.8072, -106.378]).addTo(map)
        .bindPopup('KELP');

    L.marker([29.9767, -99.0857]).addTo(map)
        .bindPopup('KERV');

    L.marker([32.4135, -98.8098]).addTo(map)
        .bindPopup('KETN');

    L.marker([30.321, -94.0735]).addTo(map)
        .bindPopup('nan');

    L.marker([30.9157, -102.916]).addTo(map)
        .bindPopup('KFST');

    L.marker([32.8198, -97.3624]).addTo(map)
        .bindPopup('KFTW');

    L.marker([32.7692, -97.4415]).addTo(map)
        .bindPopup('KNFW');

    L.marker([32.384, -94.7115]).addTo(map)
        .bindPopup('KGGG');

    L.marker([33.6514, -97.197]).addTo(map)
        .bindPopup('KGLE');

    L.marker([29.2653, -94.8604]).addTo(map)
        .bindPopup('KGLS');

    L.marker([31.0672, -97.8289]).addTo(map)
        .bindPopup('KGRK');

    L.marker([33.0678, -96.0653]).addTo(map)
        .bindPopup('KGVT');

    L.marker([32.2126, -101.522]).addTo(map)
        .bindPopup('KBPG');

    L.marker([31.1387, -97.7145]).addTo(map)
        .bindPopup('KHLR');

    L.marker([29.6454, -95.2789]).addTo(map)
        .bindPopup('KHOU');

    L.marker([29.7861, -94.9527]).addTo(map)
        .bindPopup('KHPY');

    L.marker([26.2285, -97.6544]).addTo(map)
        .bindPopup('KHRL');

    L.marker([30.7469, -95.5872]).addTo(map)
        .bindPopup('KUTS');

    L.marker([29.9844, -95.3414]).addTo(map)
        .bindPopup('KIAH');

    L.marker([31.0858, -97.6865]).addTo(map)
        .bindPopup('KILE');

    L.marker([31.7796, -103.201]).addTo(map)
        .bindPopup('KINK');

    L.marker([30.9057, -101.892]).addTo(map)
        .bindPopup('nan');

    L.marker([29.8182, -95.6726]).addTo(map)
        .bindPopup('KIWS');

    L.marker([30.8857, -94.0349]).addTo(map)
        .bindPopup('KJAS');

    L.marker([30.5113, -99.7635]).addTo(map)
        .bindPopup('KJCT');

    L.marker([30.2518, -98.6225]).addTo(map)
        .bindPopup('nan');

    L.marker([31.8693, -95.2174]).addTo(map)
        .bindPopup('KJSO');

    L.marker([33.8578, -98.4904]).addTo(map)
        .bindPopup('KCWC');

    L.marker([33.6636, -101.823]).addTo(map)
        .bindPopup('KLBB');

    L.marker([31.234, -94.75]).addTo(map)
        .bindPopup('KLFK');

    L.marker([29.1086, -95.4621]).addTo(map)
        .bindPopup('KLBX');

    L.marker([27.5438, -99.4616]).addTo(map)
        .bindPopup('KLRD');

    L.marker([31.9425, -102.202]).addTo(map)
        .bindPopup('KMAF');

    L.marker([32.0365, -102.101]).addTo(map)
        .bindPopup('KMDD');

    L.marker([26.1758, -98.2386]).addTo(map)
        .bindPopup('KMFE');

    L.marker([28.323, -96.464]).addTo(map)
        .bindPopup('nan');

    L.marker([31.5825, -102.909]).addTo(map)
        .bindPopup('nan');

    L.marker([32.8981, -79.7828]).addTo(map)
        .bindPopup('KOSA');

    L.marker([30.3711, -104.018]).addTo(map)
        .bindPopup('KMRF');

    L.marker([32.7816, -98.0602]).addTo(map)
        .bindPopup('KMWL');

    L.marker([27.6926, -97.2911]).addTo(map)
        .bindPopup('KNGP');

    L.marker([27.7027, -97.4389]).addTo(map)
        .bindPopup('KNGW');

    L.marker([28.3624, -97.6619]).addTo(map)
        .bindPopup('nan');

    L.marker([27.5072, -97.8097]).addTo(map)
        .bindPopup('KNQI');

    L.marker([31.578, -94.7095]).addTo(map)
        .bindPopup('KOCH');

    L.marker([33.3522, -98.7915]).addTo(map)
        .bindPopup('KONY');

    L.marker([30.7353, -101.203]).addTo(map)
        .bindPopup('KOZA');

    L.marker([31.3824, -103.511]).addTo(map)
        .bindPopup('KPEQ');

    L.marker([33.7141, -96.6737]).addTo(map)
        .bindPopup('KGYI');

    L.marker([35.613, -100.996]).addTo(map)
        .bindPopup('KPPA');

    L.marker([33.6366, -95.4508]).addTo(map)
        .bindPopup('KPRX');

    L.marker([31.7797, -95.7063]).addTo(map)
        .bindPopup('KPSN');

    L.marker([28.7275, -96.251]).addTo(map)
        .bindPopup('KPSX');

    L.marker([34.1681, -101.717]).addTo(map)
        .bindPopup('KPVW');

    L.marker([32.6809, -96.8682]).addTo(map)
        .bindPopup('KRBD');

    L.marker([30.6316, -96.9897]).addTo(map)
        .bindPopup('KRCK');

    L.marker([33.5903, -102.037]).addTo(map)
        .bindPopup('nan');

    L.marker([28.2886, -97.318]).addTo(map)
        .bindPopup('KRFG');

    L.marker([32.4526, -98.6828]).addTo(map)
        .bindPopup('nan');

    L.marker([28.0868, -97.0446]).addTo(map)
        .bindPopup('KRKP');

    L.marker([29.5297, -98.2789]).addTo(map)
        .bindPopup('KRND');

    L.marker([29.5337, -98.4698]).addTo(map)
        .bindPopup('KSAT');

    L.marker([32.2153, -98.1777]).addTo(map)
        .bindPopup('KSEP');

    L.marker([29.6223, -95.6565]).addTo(map)
        .bindPopup('KSGR');

    L.marker([31.3577, -100.496]).addTo(map)
        .bindPopup('KSJT');

    L.marker([29.3842, -98.5811]).addTo(map)
        .bindPopup('KSKF');

    L.marker([33.1598, -95.6211]).addTo(map)
        .bindPopup('KSLR');

    L.marker([32.6934, -100.95]).addTo(map)
        .bindPopup('KSNK');

    L.marker([33.9888, -98.4919]).addTo(map)
        .bindPopup('KSPS');

    L.marker([29.337, -98.4711]).addTo(map)
        .bindPopup('KSSF');

    L.marker([32.4674, -100.467]).addTo(map)
        .bindPopup('KSWW');

    L.marker([35.1699, -101.826]).addTo(map)
        .bindPopup('KTDW');

    L.marker([31.1525, -97.4078]).addTo(map)
        .bindPopup('KTPL');

    L.marker([32.7092, -96.2674]).addTo(map)
        .bindPopup('KTRL');

    L.marker([32.3541, -95.4024]).addTo(map)
        .bindPopup('KTYR');

    L.marker([29.2113, -99.7436]).addTo(map)
        .bindPopup('KUVA');

    L.marker([28.8526, -96.9185]).addTo(map)
        .bindPopup('KVCT');

    L.marker([31.0578, -104.784]).addTo(map)
        .bindPopup('KVHN');

    L.marker([32.7463, -97.6824]).addTo(map)
        .bindPopup('KWEA');

    L.marker([29.2543, -96.1544]).addTo(map)
        .bindPopup('KARM');

    L.marker([34.2257, -99.2838]).addTo(map)
        .bindPopup('nan');

    L.marker([37.7064, -112.145]).addTo(map)
        .bindPopup('KBCE');

    L.marker([37.5833, -109.483]).addTo(map)
        .bindPopup('KBDG');

    L.marker([37.5458, -110.713]).addTo(map)
        .bindPopup('nan');

    L.marker([41.5524, -112.062]).addTo(map)
        .bindPopup('KBMC');

    L.marker([40.8694, -111.927]).addTo(map)
        .bindPopup('KBTF');

    L.marker([37.701, -113.099]).addTo(map)
        .bindPopup('KCDC');

    L.marker([38.755, -109.755]).addTo(map)
        .bindPopup('KCNY');

    L.marker([40.1994, -112.937]).addTo(map)
        .bindPopup('KDPG');

    L.marker([39.3806, -112.508]).addTo(map)
        .bindPopup('KDTA');

    L.marker([40.7187, -114.031]).addTo(map)
        .bindPopup('KENV');

    L.marker([38.9583, -112.363]).addTo(map)
        .bindPopup('KFOM');

    L.marker([37.0167, -110.201]).addTo(map)
        .bindPopup('nan');

    L.marker([41.124, -111.973]).addTo(map)
        .bindPopup('KHIF');

    L.marker([38.418, -110.704]).addTo(map)
        .bindPopup('KHVE');

    L.marker([37.0106, -112.531]).addTo(map)
        .bindPopup('KKNB');

    L.marker([41.7912, -111.852]).addTo(map)
        .bindPopup('KLGU');

    L.marker([38.6097, -112.986]).addTo(map)
        .bindPopup('KMLF');

    L.marker([39.5266, -111.476]).addTo(map)
        .bindPopup('nan');

    L.marker([37.9324, -109.341]).addTo(map)
        .bindPopup('nan');

    L.marker([39.7388, -111.872]).addTo(map)
        .bindPopup('nan');

    L.marker([39.3291, -111.615]).addTo(map)
        .bindPopup('nan');

    L.marker([41.1959, -112.012]).addTo(map)
        .bindPopup('KOGD');

    L.marker([37.8452, -112.392]).addTo(map)
        .bindPopup('nan');

    L.marker([39.6139, -110.751]).addTo(map)
        .bindPopup('KPUC');

    L.marker([40.2192, -111.723]).addTo(map)
        .bindPopup('KPVU');

    L.marker([38.7364, -112.099]).addTo(map)
        .bindPopup('KRIF');

    L.marker([40.2783, -110.051]).addTo(map)
        .bindPopup('nan');

    L.marker([38.9614, -110.227]).addTo(map)
        .bindPopup('nan');

    L.marker([39.0291, -111.838]).addTo(map)
        .bindPopup('nan');

    L.marker([37.0364, -113.51]).addTo(map)
        .bindPopup('KSGU');

    L.marker([40.7884, -111.978]).addTo(map)
        .bindPopup('KSLC');

    L.marker([40.4409, -109.51]).addTo(map)
        .bindPopup('KVEL');

    L.marker([44.4719, -73.1533]).addTo(map)
        .bindPopup('KBTV');

    L.marker([44.8888, -72.2292]).addTo(map)
        .bindPopup('KEFK');

    L.marker([44.5691, -72.018]).addTo(map)
        .bindPopup('KCDA');

    L.marker([44.2035, -72.5623]).addTo(map)
        .bindPopup('KMPV');

    L.marker([44.5346, -72.614]).addTo(map)
        .bindPopup('KMVL');

    L.marker([43.5294, -72.9496]).addTo(map)
        .bindPopup('KRUT');

    L.marker([43.3436, -72.5173]).addTo(map)
        .bindPopup('KVSF');

    L.marker([38.0689, -77.3183]).addTo(map)
        .bindPopup('KAPH');

    L.marker([37.2076, -80.4078]).addTo(map)
        .bindPopup('KBCB');

    L.marker([37.0742, -77.9575]).addTo(map)
        .bindPopup('KBKT');

    L.marker([38.1386, -78.4529]).addTo(map)
        .bindPopup('KCHO');

    L.marker([38.715, -77.181]).addTo(map)
        .bindPopup('KDAA');

    L.marker([36.5729, -79.3361]).addTo(map)
        .bindPopup('KDAN');

    L.marker([38.8522, -77.0378]).addTo(map)
        .bindPopup('KDCA');

    L.marker([38.3325, -77.0372]).addTo(map)
        .bindPopup('KNDY');

    L.marker([37.1325, -76.6088]).addTo(map)
        .bindPopup('KFAF');

    L.marker([36.6981, -76.9038]).addTo(map)
        .bindPopup('KFKN');

    L.marker([38.9175, -78.2535]).addTo(map)
        .bindPopup('KFRR');

    L.marker([38.156, -78.1658]).addTo(map)
        .bindPopup('KGVE');

    L.marker([37.9514, -79.8339]).addTo(map)
        .bindPopup('KHSP');

    L.marker([38.9445, -77.4558]).addTo(map)
        .bindPopup('KIAD');

    L.marker([37.0829, -76.3605]).addTo(map)
        .bindPopup('KLFI');

    L.marker([36.9875, -82.53]).addTo(map)
        .bindPopup('KLNP');

    L.marker([38.0098, -77.9701]).addTo(map)
        .bindPopup('KLKU');

    L.marker([36.7728, -77.7943]).addTo(map)
        .bindPopup('KLVL');

    L.marker([37.3267, -79.2004]).addTo(map)
        .bindPopup('KLYH');

    L.marker([37.6469, -75.7611]).addTo(map)
        .bindPopup('KMFV');

    L.marker([38.7214, -77.5154]).addTo(map)
        .bindPopup('KHEF');

    L.marker([36.9376, -76.2893]).addTo(map)
        .bindPopup('KNGU');

    L.marker([36.8207, -76.0335]).addTo(map)
        .bindPopup('KNTU');

    L.marker([38.5017, -77.3053]).addTo(map)
        .bindPopup('KNYG');

    L.marker([36.8946, -76.2012]).addTo(map)
        .bindPopup('KORF');

    L.marker([37.1319, -76.493]).addTo(map)
        .bindPopup('KPHF');

    L.marker([37.1373, -80.6785]).addTo(map)
        .bindPopup('KPSK');

    L.marker([37.1838, -77.5074]).addTo(map)
        .bindPopup('KPTB');

    L.marker([37.5052, -77.3197]).addTo(map)
        .bindPopup('KRIC');

    L.marker([37.3255, -79.9754]).addTo(map)
        .bindPopup('KROA');

    L.marker([38.2638, -78.8964]).addTo(map)
        .bindPopup('KSHD');

    L.marker([36.6871, -82.0333]).addTo(map)
        .bindPopup('KVJI');

    L.marker([37.9402, -75.4664]).addTo(map)
        .bindPopup('KWAL');

    L.marker([39.1435, -78.1444]).addTo(map)
        .bindPopup('KOKV');

    L.marker([46.0949, -118.288]).addTo(map)
        .bindPopup('KALW');

    L.marker([47.53, -122.302]).addTo(map)
        .bindPopup('KBFI');

    L.marker([48.7928, -122.538]).addTo(map)
        .bindPopup('KBLI');

    L.marker([48.579, -122.826]).addTo(map)
        .bindPopup('nan');

    L.marker([48.5978, -122.998]).addTo(map)
        .bindPopup('nan');

    L.marker([48.1202, -123.5]).addTo(map)
        .bindPopup('KCLM');

    L.marker([46.677, -122.983]).addTo(map)
        .bindPopup('KCLS');

    L.marker([48.4901, -122.832]).addTo(map)
        .bindPopup('nan');

    L.marker([48.6167, -123.003]).addTo(map)
        .bindPopup('nan');

    L.marker([48.4998, -122.814]).addTo(map)
        .bindPopup('nan');

    L.marker([47.3989, -120.207]).addTo(map)
        .bindPopup('KEAT');

    L.marker([47.033, -120.531]).addTo(map)
        .bindPopup('KELN');

    L.marker([47.3076, -119.516]).addTo(map)
        .bindPopup('KEPH');

    L.marker([48.7082, -122.91]).addTo(map)
        .bindPopup('KORS');

    L.marker([47.2542, -121.186]).addTo(map)
        .bindPopup('KESW');

    L.marker([48.5373, -123.01]).addTo(map)
        .bindPopup('nan');

    L.marker([48.522, -123.024]).addTo(map)
        .bindPopup('KFHR');

    L.marker([47.922, -119.083]).addTo(map)
        .bindPopup('nan');

    L.marker([47.6199, -117.534]).addTo(map)
        .bindPopup('KGEG');

    L.marker([47.0792, -122.581]).addTo(map)
        .bindPopup('KGRF');

    L.marker([46.9712, -123.937]).addTo(map)
        .bindPopup('KHQM');

    L.marker([47.7548, -122.259]).addTo(map)
        .bindPopup('nan');

    L.marker([46.118, -122.898]).addTo(map)
        .bindPopup('KKLS');

    L.marker([47.629, -122.339]).addTo(map)
        .bindPopup('nan');

    L.marker([48.4839, -122.938]).addTo(map)
        .bindPopup('nan');

    L.marker([48.4709, -122.421]).addTo(map)
        .bindPopup('KBVS');

    L.marker([47.2077, -119.32]).addTo(map)
        .bindPopup('KMWH');

    L.marker([48.3518, -122.656]).addTo(map)
        .bindPopup('KNUW');

    L.marker([48.2515, -122.674]).addTo(map)
        .bindPopup('KOKH');

    L.marker([46.9694, -122.903]).addTo(map)
        .bindPopup('KOLM');

    L.marker([48.4644, -119.518]).addTo(map)
        .bindPopup('KOMK');

    L.marker([48.499, -122.662]).addTo(map)
        .bindPopup('nan');

    L.marker([47.9063, -122.282]).addTo(map)
        .bindPopup('KPAE');

    L.marker([46.2647, -119.119]).addTo(map)
        .bindPopup('KPSC');

    L.marker([47.734, -122.647]).addTo(map)
        .bindPopup('nan');

    L.marker([46.7439, -117.11]).addTo(map)
        .bindPopup('KPUW');

    L.marker([47.4902, -122.765]).addTo(map)
        .bindPopup('KPWT');

    L.marker([48.6123, -123.139]).addTo(map)
        .bindPopup('nan');

    L.marker([46.3056, -119.304]).addTo(map)
        .bindPopup('KRLD');

    L.marker([47.4931, -122.216]).addTo(map)
        .bindPopup('KRNT');

    L.marker([48.6457, -122.868]).addTo(map)
        .bindPopup('nan');

    L.marker([47.449, -122.309]).addTo(map)
        .bindPopup('KSEA');

    L.marker([47.6828, -117.323]).addTo(map)
        .bindPopup('KSFF');

    L.marker([47.2336, -123.148]).addTo(map)
        .bindPopup('KSHN');

    L.marker([47.6151, -117.656]).addTo(map)
        .bindPopup('KSKA');

    L.marker([48.0981, -123.187]).addTo(map)
        .bindPopup('nan');

    L.marker([48.6729, -123.176]).addTo(map)
        .bindPopup('nan');

    L.marker([47.1377, -122.476]).addTo(map)
        .bindPopup('KTCM');

    L.marker([46.4772, -122.806]).addTo(map)
        .bindPopup('KTDO');

    L.marker([47.2679, -122.578]).addTo(map)
        .bindPopup('KTIW');

    L.marker([48.0538, -122.811]).addTo(map)
        .bindPopup('nan');

    L.marker([47.9366, -124.563]).addTo(map)
        .bindPopup('KUIL');

    L.marker([48.7118, -123.018]).addTo(map)
        .bindPopup('nan');

    L.marker([48.6179, -122.953]).addTo(map)
        .bindPopup('nan');

    L.marker([46.5682, -120.544]).addTo(map)
        .bindPopup('KYKM');

    L.marker([37.7873, -81.1242]).addTo(map)
        .bindPopup('KBKW');

    L.marker([37.2958, -81.2077]).addTo(map)
        .bindPopup('KBLF');

    L.marker([39.2966, -80.2281]).addTo(map)
        .bindPopup('KCKB');

    L.marker([38.3731, -81.5932]).addTo(map)
        .bindPopup('KCRW');

    L.marker([38.8894, -79.8571]).addTo(map)
        .bindPopup('KEKN');

    L.marker([39.9487, -80.7595]).addTo(map)
        .bindPopup('nan');

    L.marker([40.175, -80.6463]).addTo(map)
        .bindPopup('KHLG');

    L.marker([38.3667, -82.558]).addTo(map)
        .bindPopup('KHTS');

    L.marker([37.8583, -80.3995]).addTo(map)
        .bindPopup('KLWB');

    L.marker([39.6429, -79.9163]).addTo(map)
        .bindPopup('KMGW');

    L.marker([39.4019, -77.9846]).addTo(map)
        .bindPopup('KMRB');

    L.marker([39.2808, -79.3374]).addTo(map)
        .bindPopup('nan');

    L.marker([38.9949, -79.1459]).addTo(map)
        .bindPopup('nan');

    L.marker([39.3451, -81.4392]).addTo(map)
        .bindPopup('KPKB');

    L.marker([45.2811, -92.3754]).addTo(map)
        .bindPopup('KAHH');

    L.marker([45.9279, -89.7309]).addTo(map)
        .bindPopup('KARV');

    L.marker([46.5485, -90.919]).addTo(map)
        .bindPopup('KASX');

    L.marker([44.2581, -88.5191]).addTo(map)
        .bindPopup('KATW');

    L.marker([44.9262, -89.6266]).addTo(map)
        .bindPopup('KAUW');

    L.marker([44.6138, -88.7313]).addTo(map)
        .bindPopup('KCLI');

    L.marker([43.9583, -90.7379]).addTo(map)
        .bindPopup('KCMY');

    L.marker([44.7776, -89.6668]).addTo(map)
        .bindPopup('KCWA');

    L.marker([44.8658, -91.4843]).addTo(map)
        .bindPopup('KEAU');

    L.marker([45.9323, -89.2683]).addTo(map)
        .bindPopup('KEGV');

    L.marker([42.5957, -87.9278]).addTo(map)
        .bindPopup('KENW');

    L.marker([43.4222, -88.1279]).addTo(map)
        .bindPopup('KETB');

    L.marker([43.7712, -88.4884]).addTo(map)
        .bindPopup('KFLD');

    L.marker([44.4851, -88.1296]).addTo(map)
        .bindPopup('KGRB');

    L.marker([45.7981, -92.6644]).addTo(map)
        .bindPopup('KGTG');

    L.marker([46.0252, -91.4443]).addTo(map)
        .bindPopup('KHYR');

    L.marker([44.3603, -89.839]).addTo(map)
        .bindPopup('KISW');

    L.marker([42.6203, -89.0416]).addTo(map)
        .bindPopup('KJVL');

    L.marker([43.2117, -90.1816]).addTo(map)
        .bindPopup('KLNR');

    L.marker([43.879, -91.2567]).addTo(map)
        .bindPopup('KLSE');

    L.marker([45.101, -90.3033]).addTo(map)
        .bindPopup('KMDZ');

    L.marker([44.6369, -90.1893]).addTo(map)
        .bindPopup('KMFI');

    L.marker([42.9472, -87.8966]).addTo(map)
        .bindPopup('KMKE');

    L.marker([43.1399, -89.3375]).addTo(map)
        .bindPopup('KMSN');

    L.marker([44.1288, -87.6806]).addTo(map)
        .bindPopup('KMTW');

    L.marker([43.1104, -88.0344]).addTo(map)
        .bindPopup('KMWC');

    L.marker([45.31, -92.6919]).addTo(map)
        .bindPopup('KOEO');

    L.marker([43.9844, -88.557]).addTo(map)
        .bindPopup('KOSH');

    L.marker([43.0193, -91.1237]).addTo(map)
        .bindPopup('KPDC');

    L.marker([45.955, -90.4244]).addTo(map)
        .bindPopup('KPKF');

    L.marker([45.543, -90.2793]).addTo(map)
        .bindPopup('nan');

    L.marker([42.7606, -87.8152]).addTo(map)
        .bindPopup('KRAC');

    L.marker([45.6312, -89.4675]).addTo(map)
        .bindPopup('KRHI');

    L.marker([45.419, -91.7735]).addTo(map)
        .bindPopup('KRPD');

    L.marker([45.1483, -92.5381]).addTo(map)
        .bindPopup('KRNH');

    L.marker([45.1989, -89.7129]).addTo(map)
        .bindPopup('KRRL');

    L.marker([43.7696, -87.8514]).addTo(map)
        .bindPopup('KSBM');

    L.marker([44.5452, -89.5303]).addTo(map)
        .bindPopup('KSTE');

    L.marker([44.8437, -87.4215]).addTo(map)
        .bindPopup('KSUE');

    L.marker([46.6897, -92.0947]).addTo(map)
        .bindPopup('KSUW');

    L.marker([43.041, -88.2371]).addTo(map)
        .bindPopup('KUES');

    L.marker([43.4266, -88.7032]).addTo(map)
        .bindPopup('KUNU');

    L.marker([43.939, -90.2534]).addTo(map)
        .bindPopup('KVOK');

    L.marker([42.6149, -88.3896]).addTo(map)
        .bindPopup('nan');

    L.marker([42.7112, -110.942]).addTo(map)
        .bindPopup('KAFO');

    L.marker([42.5851, -110.111]).addTo(map)
        .bindPopup('KBPI');

    L.marker([44.3811, -106.722]).addTo(map)
        .bindPopup('KBYG');

    L.marker([44.5202, -109.024]).addTo(map)
        .bindPopup('KCOD');

    L.marker([42.908, -106.464]).addTo(map)
        .bindPopup('KCPR');

    L.marker([41.1557, -104.812]).addTo(map)
        .bindPopup('KCYS');

    L.marker([42.7972, -105.386]).addTo(map)
        .bindPopup('KDGW');

    L.marker([42.0555, -104.929]).addTo(map)
        .bindPopup('KEAN');

    L.marker([43.8854, -104.318]).addTo(map)
        .bindPopup('KECS');

    L.marker([41.8241, -110.557]).addTo(map)
        .bindPopup('KEMM');

    L.marker([41.2748, -111.035]).addTo(map)
        .bindPopup('KEVW');

    L.marker([41.3919, -110.407]).addTo(map)
        .bindPopup('KFBR');

    L.marker([44.3489, -105.539]).addTo(map)
        .bindPopup('KGCC');

    L.marker([44.5168, -108.083]).addTo(map)
        .bindPopup('KGEY');

    L.marker([43.6073, -110.738]).addTo(map)
        .bindPopup('KJAC');

    L.marker([41.3121, -105.675]).addTo(map)
        .bindPopup('KLAR');

    L.marker([42.8152, -108.73]).addTo(map)
        .bindPopup('KLND');

    L.marker([42.7538, -104.405]).addTo(map)
        .bindPopup('KLSK');

    L.marker([44.8672, -108.793]).addTo(map)
        .bindPopup('KPOY');

    L.marker([42.7955, -109.807]).addTo(map)
        .bindPopup('KPNA');

    L.marker([43.0642, -108.46]).addTo(map)
        .bindPopup('KRIW');

    L.marker([41.5942, -109.065]).addTo(map)
        .bindPopup('KRKS');

    L.marker([41.8056, -107.2]).addTo(map)
        .bindPopup('KRWL');

    L.marker([41.4449, -106.824]).addTo(map)
        .bindPopup('KSAA');

    L.marker([44.7692, -106.98]).addTo(map)
        .bindPopup('KSHR');

    L.marker([43.7136, -108.39]).addTo(map)
        .bindPopup('KTHP');

    L.marker([42.0645, -104.153]).addTo(map)
        .bindPopup('KTOR');

    L.marker([43.9657, -107.951]).addTo(map)
        .bindPopup('KWRL');

    L.marker([-30.4007, -56.5079]).addTo(map)
        .bindPopup('SUAG');

    L.marker([-30.3333, -57.0833]).addTo(map)
        .bindPopup('SUBU');

    L.marker([-32.3379, -54.2167]).addTo(map)
        .bindPopup('SUMO');

    L.marker([-34.4564, -57.7706]).addTo(map)
        .bindPopup('SUCA');

    L.marker([-33.3589, -56.4992]).addTo(map)
        .bindPopup('SUDU');

    L.marker([-34.8551, -55.0943]).addTo(map)
        .bindPopup('SULS');

    L.marker([-34.8384, -56.0308]).addTo(map)
        .bindPopup('SUMU');

    L.marker([-32.3633, -58.0619]).addTo(map)
        .bindPopup('SUPU');

    L.marker([-30.9746, -55.4762]).addTo(map)
        .bindPopup('SURV');

    L.marker([-31.767, -54.617]).addTo(map)
        .bindPopup('SUVO');

    L.marker([-31.4385, -57.9853]).addTo(map)
        .bindPopup('SUSO');

    L.marker([-31.749, -55.9258]).addTo(map)
        .bindPopup('SUTB');

    L.marker([-33.1957, -54.3472]).addTo(map)
        .bindPopup('SUTR');

    L.marker([41.2579, 69.2812]).addTo(map)
        .bindPopup('UTTT');

    L.marker([40.7277, 72.294]).addTo(map)
        .bindPopup('UTKA');

    L.marker([41.6139, 64.2332]).addTo(map)
        .bindPopup('UTSN');

    L.marker([39.775, 64.4833]).addTo(map)
        .bindPopup('UTSB');

    L.marker([40.3588, 71.745]).addTo(map)
        .bindPopup('UTKF');

    L.marker([40.9846, 71.5567]).addTo(map)
        .bindPopup('UTFN');

    L.marker([40.1172, 65.1708]).addTo(map)
        .bindPopup('UTSA');

    L.marker([38.8336, 65.9215]).addTo(map)
        .bindPopup('UTSK');

    L.marker([42.4884, 59.6233]).addTo(map)
        .bindPopup('UTNN');

    L.marker([39.7005, 66.9838]).addTo(map)
        .bindPopup('UTSS');

    L.marker([37.2867, 67.31]).addTo(map)
        .bindPopup('UTST');

    L.marker([41.5843, 60.6417]).addTo(map)
        .bindPopup('UTNU');

    L.marker([12.9884, -61.262]).addTo(map)
        .bindPopup('TVSB');

    L.marker([12.699, -61.3424]).addTo(map)
        .bindPopup('TVSC');

    L.marker([12.8879, -61.1802]).addTo(map)
        .bindPopup('TVSM');

    L.marker([12.587, -61.397]).addTo(map)
        .bindPopup('nan');

    L.marker([12.6001, -61.4119]).addTo(map)
        .bindPopup('TVSU');

    L.marker([13.1443, -61.2109]).addTo(map)
        .bindPopup('TVSA');

    L.marker([5.61999, -67.6061]).addTo(map)
        .bindPopup('SVPA');

    L.marker([9.43023, -64.4707]).addTo(map)
        .bindPopup('SVAN');

    L.marker([10.1111, -64.6922]).addTo(map)
        .bindPopup('SVBC');

    L.marker([9.57, -62.4367]).addTo(map)
        .bindPopup('nan');

    L.marker([8.94515, -64.1511]).addTo(map)
        .bindPopup('SVST');

    L.marker([7.08333, -69.5333]).addTo(map)
        .bindPopup('SVEZ');

    L.marker([7.23333, -70.8]).addTo(map)
        .bindPopup('SVGD');

    L.marker([6.23333, -67.4336]).addTo(map)
        .bindPopup('nan');

    L.marker([7.56667, -70.1833]).addTo(map)
        .bindPopup('SVPT');

    L.marker([7.88332, -67.444]).addTo(map)
        .bindPopup('SVSR');

    L.marker([8.615, -70.2142]).addTo(map)
        .bindPopup('SVBI');

    L.marker([7.80351, -71.1657]).addTo(map)
        .bindPopup('SVSB');

    L.marker([6.23199, -62.8544]).addTo(map)
        .bindPopup('SVCN');

    L.marker([8.12216, -63.537]).addTo(map)
        .bindPopup('SVCB');

    L.marker([7.62551, -66.1628]).addTo(map)
        .bindPopup('SVCD');

    L.marker([6.73333, -61.5833]).addTo(map)
        .bindPopup('SVED');

    L.marker([4.33632, -61.7396]).addTo(map)
        .bindPopup('SVIC');

    L.marker([10.7944, -63.9816]).addTo(map)
        .bindPopup('SVIE');

    L.marker([5.633, -61.783]).addTo(map)
        .bindPopup('SVKA');

    L.marker([5.75, -62.416]).addTo(map)
        .bindPopup('SVKM');

    L.marker([4.56667, -61.4833]).addTo(map)
        .bindPopup('nan');

    L.marker([8.28853, -62.7604]).addTo(map)
        .bindPopup('SVPR');

    L.marker([4.555, -61.15]).addTo(map)
        .bindPopup('SVSE');

    L.marker([7.24938, -61.5289]).addTo(map)
        .bindPopup('SVTM');

    L.marker([5.33333, -62.7667]).addTo(map)
        .bindPopup('SVUM');

    L.marker([10.25, -67.6494]).addTo(map)
        .bindPopup('SVBS');

    L.marker([10.4805, -68.073]).addTo(map)
        .bindPopup('SVPC');

    L.marker([10.1497, -67.9284]).addTo(map)
        .bindPopup('SVVA');

    L.marker([9.97924, -62.2286]).addTo(map)
        .bindPopup('SVPE');

    L.marker([9.08899, -62.0942]).addTo(map)
        .bindPopup('SVTC');

    L.marker([11.4149, -69.6809]).addTo(map)
        .bindPopup('SVCR');

    L.marker([11.7808, -70.1515]).addTo(map)
        .bindPopup('SVJC');

    L.marker([8.92466, -67.4171]).addTo(map)
        .bindPopup('SVCL');

    L.marker([9.22203, -65.9936]).addTo(map)
        .bindPopup('SVVP');

    L.marker([10.0427, -69.3586]).addTo(map)
        .bindPopup('SVBM');

    L.marker([10.1756, -70.0652]).addTo(map)
        .bindPopup('SVCO');

    L.marker([8.58208, -71.161]).addTo(map)
        .bindPopup('SVMD');

    L.marker([8.62414, -71.6727]).addTo(map)
        .bindPopup('SVVG');

    L.marker([11.95, -66.67]).addTo(map)
        .bindPopup('SVRS');

    L.marker([9.75453, -63.1474]).addTo(map)
        .bindPopup('SVMT');

    L.marker([10.9126, -63.9666]).addTo(map)
        .bindPopup('SVMG');

    L.marker([9.55338, -69.2379]).addTo(map)
        .bindPopup('SVAC');

    L.marker([9.02694, -69.7551]).addTo(map)
        .bindPopup('SVGU');

    L.marker([10.4503, -64.1305]).addTo(map)
        .bindPopup('SVCU');

    L.marker([10.66, -63.2617]).addTo(map)
        .bindPopup('SVCP');

    L.marker([10.5741, -62.3127]).addTo(map)
        .bindPopup('SVGI');

    L.marker([8.23917, -72.271]).addTo(map)
        .bindPopup('SVLF');

    L.marker([7.80132, -72.2029]).addTo(map)
        .bindPopup('SVPM');

    L.marker([7.56538, -72.0351]).addTo(map)
        .bindPopup('SVSO');

    L.marker([7.84083, -72.4397]).addTo(map)
        .bindPopup('SVSA');

    L.marker([9.34048, -70.5841]).addTo(map)
        .bindPopup('SVVL');

    L.marker([10.6012, -66.9912]).addTo(map)
        .bindPopup('SVMI');

    L.marker([10.2787, -68.7552]).addTo(map)
        .bindPopup('SVSP');

    L.marker([10.3307, -71.3225]).addTo(map)
        .bindPopup('SVON');

    L.marker([8.75814, -72.5363]).addTo(map)
        .bindPopup('SVCG');

    L.marker([10.124, -71.238]).addTo(map)
        .bindPopup('nan');

    L.marker([10.5582, -71.7279]).addTo(map)
        .bindPopup('SVMC');

    L.marker([8.97455, -71.9433]).addTo(map)
        .bindPopup('SVSZ');

    L.marker([18.4448, -64.543]).addTo(map)
        .bindPopup('TUPJ');

    L.marker([18.7272, -64.3297]).addTo(map)
        .bindPopup('TUPA');

    L.marker([18.45, -64.6]).addTo(map)
        .bindPopup('nan');

    L.marker([18.45, -64.5833]).addTo(map)
        .bindPopup('nan');

    L.marker([18.4464, -64.4275]).addTo(map)
        .bindPopup('TUPW');

    L.marker([18.3315, -64.796]).addTo(map)
        .bindPopup('nan');

    L.marker([18.3386, -64.9407]).addTo(map)
        .bindPopup('nan');

    L.marker([17.7472, -64.7049]).addTo(map)
        .bindPopup('nan');

    L.marker([18.3373, -64.9734]).addTo(map)
        .bindPopup('TIST');

    L.marker([17.7019, -64.7986]).addTo(map)
        .bindPopup('TISX');

    L.marker([10.3301, 105.473]).addTo(map)
        .bindPopup('nan');

    L.marker([11.9787, 107.564]).addTo(map)
        .bindPopup('nan');

    L.marker([8.73183, 106.633]).addTo(map)
        .bindPopup('VVCS');

    L.marker([10.3725, 107.095]).addTo(map)
        .bindPopup('VVVT');

    L.marker([13.955, 109.042]).addTo(map)
        .bindPopup('VVPC');

    L.marker([9.17767, 105.178]).addTo(map)
        .bindPopup('VVCM');

    L.marker([10.0851, 105.712]).addTo(map)
        .bindPopup('VVCT');

    L.marker([16.0439, 108.199]).addTo(map)
        .bindPopup('VVDN');

    L.marker([12.6683, 108.12]).addTo(map)
        .bindPopup('VVBM');

    L.marker([21.3975, 103.008]).addTo(map)
        .bindPopup('VVDB');

    L.marker([14.0045, 108.017]).addTo(map)
        .bindPopup('VVPK');

    L.marker([21.2212, 105.807]).addTo(map)
        .bindPopup('VVNB');

    L.marker([20.8194, 106.725]).addTo(map)
        .bindPopup('VVCI');

    L.marker([10.8188, 106.652]).addTo(map)
        .bindPopup('VVTS');

    L.marker([11.9982, 109.219]).addTo(map)
        .bindPopup('VVCR');

    L.marker([12.2275, 109.192]).addTo(map)
        .bindPopup('VVNT');

    L.marker([10.1698, 103.993]).addTo(map)
        .bindPopup('VVPQ');

    L.marker([9.95803, 105.132]).addTo(map)
        .bindPopup('VVRG');

    L.marker([14.35, 108.017]).addTo(map)
        .bindPopup('nan');

    L.marker([11.75, 108.367]).addTo(map)
        .bindPopup('VVDL');

    L.marker([18.7376, 105.671]).addTo(map)
        .bindPopup('VVVH');

    L.marker([11.6335, 108.952]).addTo(map)
        .bindPopup('VVPR');

    L.marker([13.0496, 109.334]).addTo(map)
        .bindPopup('VVTH');

    L.marker([17.515, 106.591]).addTo(map)
        .bindPopup('VVDH');

    L.marker([27.0522, 86.8619]).addTo(map)
        .bindPopup('nan');

    L.marker([15.4033, 108.706]).addTo(map)
        .bindPopup('VVCA');

    L.marker([15.1155, 108.772]).addTo(map)
        .bindPopup('nan');

    L.marker([21.1178, 107.414]).addTo(map)
        .bindPopup('VVVD');

    L.marker([9.5814, 105.96]).addTo(map)
        .bindPopup('nan');

    L.marker([21.217, 104.033]).addTo(map)
        .bindPopup('VVNS');

    L.marker([19.9017, 105.468]).addTo(map)
        .bindPopup('VVTX');

    L.marker([16.4015, 107.703]).addTo(map)
        .bindPopup('VVPB');

    L.marker([10.2509, 105.945]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.265, 167.924]).addTo(map)
        .bindPopup('NVSF');

    L.marker([-16.4611, 167.829]).addTo(map)
        .bindPopup('NVSL');

    L.marker([-16.0797, 167.401]).addTo(map)
        .bindPopup('NVSP');

    L.marker([-16.439, 168.257]).addTo(map)
        .bindPopup('NVSI');

    L.marker([-16.4864, 167.447]).addTo(map)
        .bindPopup('NVSX');

    L.marker([-16.3297, 168.301]).addTo(map)
        .bindPopup('NVSU');

    L.marker([-15.8656, 168.172]).addTo(map)
        .bindPopup('NVSO');

    L.marker([-15.3067, 167.967]).addTo(map)
        .bindPopup('NVSG');

    L.marker([-15.0, 168.083]).addTo(map)
        .bindPopup('NVSN');

    L.marker([-15.472, 167.835]).addTo(map)
        .bindPopup('NVSR');

    L.marker([-15.4708, 168.152]).addTo(map)
        .bindPopup('NVSH');

    L.marker([-15.412, 167.691]).addTo(map)
        .bindPopup('NVSW');

    L.marker([-14.8817, 166.558]).addTo(map)
        .bindPopup('NVSZ');

    L.marker([-15.505, 167.22]).addTo(map)
        .bindPopup('NVSS');

    L.marker([-17.0903, 168.343]).addTo(map)
        .bindPopup('NVSE');

    L.marker([-16.5842, 168.159]).addTo(map)
        .bindPopup('NVSM');

    L.marker([-16.8911, 168.551]).addTo(map)
        .bindPopup('NVST');

    L.marker([-17.54, 168.442]).addTo(map)
        .bindPopup('NVVQ');

    L.marker([-17.6993, 168.32]).addTo(map)
        .bindPopup('NVVV');

    L.marker([-16.7961, 168.177]).addTo(map)
        .bindPopup('NVSV');

    L.marker([-20.2492, 169.771]).addTo(map)
        .bindPopup('NVVA');

    L.marker([-19.2346, 169.601]).addTo(map)
        .bindPopup('NVVB');

    L.marker([-18.7694, 169.001]).addTo(map)
        .bindPopup('NVVD');

    L.marker([-19.5164, 170.232]).addTo(map)
        .bindPopup('NVVF');

    L.marker([-18.8564, 169.283]).addTo(map)
        .bindPopup('NVVI');

    L.marker([-19.4551, 169.224]).addTo(map)
        .bindPopup('NVVW');

    L.marker([-13.666, 167.712]).addTo(map)
        .bindPopup('NVSA');

    L.marker([-13.8517, 167.537]).addTo(map)
        .bindPopup('NVSC');

    L.marker([-13.328, 166.638]).addTo(map)
        .bindPopup('NVSD');

    L.marker([-14.2181, 167.587]).addTo(map)
        .bindPopup('NVSQ');

    L.marker([-14.3114, -178.066]).addTo(map)
        .bindPopup('NLWF');

    L.marker([-13.2383, -176.199]).addTo(map)
        .bindPopup('NLWW');

    L.marker([-13.7423, -172.258]).addTo(map)
        .bindPopup('NSMA');

    L.marker([-13.5051, -172.628]).addTo(map)
        .bindPopup('NSAU');

    L.marker([-13.83, -172.008]).addTo(map)
        .bindPopup('NSFA');

    L.marker([-13.8487, -171.74]).addTo(map)
        .bindPopup('NSFI');

    L.marker([13.9376, 45.6592]).addTo(map)
        .bindPopup('nan');

    L.marker([13.9376, 45.6592]).addTo(map)
        .bindPopup('nan');

    L.marker([13.9368, 45.657]).addTo(map)
        .bindPopup('OYMS');

    L.marker([13.6858, 44.1389]).addTo(map)
        .bindPopup('ODAL');

    L.marker([12.8295, 45.0288]).addTo(map)
        .bindPopup('OYAA');

    L.marker([14.106, 45.4411]).addTo(map)
        .bindPopup('OYBI');

    L.marker([14.753, 42.9763]).addTo(map)
        .bindPopup('OYHD');

    L.marker([15.3633, 42.605]).addTo(map)
        .bindPopup('OYKM');

    L.marker([16.1917, 52.175]).addTo(map)
        .bindPopup('OYGD');

    L.marker([15.417, 51.683]).addTo(map)
        .bindPopup('OYQN');

    L.marker([15.4792, 44.2197]).addTo(map)
        .bindPopup('nan');

    L.marker([15.9661, 48.7883]).addTo(map)
        .bindPopup('OYSY');

    L.marker([14.6626, 49.375]).addTo(map)
        .bindPopup('OYRN');

    L.marker([12.6307, 53.9058]).addTo(map)
        .bindPopup('OYSQ');

    L.marker([16.0108, 43.1767]).addTo(map)
        .bindPopup('ODAS');

    L.marker([15.4692, 45.3269]).addTo(map)
        .bindPopup('OYMB');

    L.marker([14.867, 45.55]).addTo(map)
        .bindPopup('nan');

    L.marker([17.3467, 44.6217]).addTo(map)
        .bindPopup('nan');

    L.marker([16.967, 43.733]).addTo(map)
        .bindPopup('OYSH');

    L.marker([15.4764, 44.2197]).addTo(map)
        .bindPopup('OYSN');

    L.marker([14.45, 47.283]).addTo(map)
        .bindPopup('nan');

    L.marker([14.5513, 46.8262]).addTo(map)
        .bindPopup('OYAT');

    L.marker([14.782, 45.7201]).addTo(map)
        .bindPopup('OYBN');

    L.marker([13.686, 44.1391]).addTo(map)
        .bindPopup('OYTZ');

    L.marker([-12.8047, 45.2811]).addTo(map)
        .bindPopup('FMCZ');

    L.marker([-33.5542, 26.8777]).addTo(map)
        .bindPopup('FAPA');

    L.marker([-32.8971, 27.2791]).addTo(map)
        .bindPopup('FABE');

    L.marker([-32.1567, 25.6456]).addTo(map)
        .bindPopup('FACD');

    L.marker([-33.0356, 27.8259]).addTo(map)
        .bindPopup('FAEL');

    L.marker([-31.6059, 29.5198]).addTo(map)
        .bindPopup('FAPJ');

    L.marker([-31.2833, 29.9667]).addTo(map)
        .bindPopup('nan');

    L.marker([-31.25, 29.833]).addTo(map)
        .bindPopup('FAMW');

    L.marker([-33.9849, 25.6173]).addTo(map)
        .bindPopup('FAPE');

    L.marker([-31.5464, 28.6734]).addTo(map)
        .bindPopup('FAUT');

    L.marker([-31.9202, 26.8822]).addTo(map)
        .bindPopup('FAQT');

    L.marker([-29.0927, 26.3024]).addTo(map)
        .bindPopup('FABL');

    L.marker([-28.8231, 27.9089]).addTo(map)
        .bindPopup('FAFB');

    L.marker([-28.2351, 29.1062]).addTo(map)
        .bindPopup('FAHR');

    L.marker([-29.3178, 26.8228]).addTo(map)
        .bindPopup('FATN');

    L.marker([-27.9968, 26.6633]).addTo(map)
        .bindPopup('FAWM');

    L.marker([-25.9863, 28.1401]).addTo(map)
        .bindPopup('FAGC');

    L.marker([-25.9385, 27.9261]).addTo(map)
        .bindPopup('FALA');

    L.marker([-26.1392, 28.246]).addTo(map)
        .bindPopup('FAOR');

    L.marker([-25.6539, 28.2242]).addTo(map)
        .bindPopup('FAWB');

    L.marker([-26.2425, 28.1512]).addTo(map)
        .bindPopup('FAGM');

    L.marker([-25.83, 28.2225]).addTo(map)
        .bindPopup('FAWK');

    L.marker([-28.3684, 32.2481]).addTo(map)
        .bindPopup('FADK');

    L.marker([-29.6144, 31.1197]).addTo(map)
        .bindPopup('FALE');

    L.marker([-28.72, 31.89]).addTo(map)
        .bindPopup('FAEM');

    L.marker([-28.0166, 32.2752]).addTo(map)
        .bindPopup('FAHL');

    L.marker([-28.5817, 29.7497]).addTo(map)
        .bindPopup('FALY');

    L.marker([-30.8574, 30.343]).addTo(map)
        .bindPopup('FAMG');

    L.marker([-27.6261, 32.0443]).addTo(map)
        .bindPopup('FAMU');

    L.marker([-27.7706, 29.9769]).addTo(map)
        .bindPopup('FANC');

    L.marker([-29.649, 30.3987]).addTo(map)
        .bindPopup('FAPM');

    L.marker([-27.8494, 32.3097]).addTo(map)
        .bindPopup('FADQ');

    L.marker([-28.741, 32.0921]).addTo(map)
        .bindPopup('FARB');

    L.marker([-28.3206, 31.4165]).addTo(map)
        .bindPopup('FAUL');

    L.marker([-29.7706, 31.0584]).addTo(map)
        .bindPopup('FAVG');

    L.marker([-27.7869, 30.7964]).addTo(map)
        .bindPopup('FAVY');

    L.marker([-22.679, 29.0555]).addTo(map)
        .bindPopup('FAAL');

    L.marker([-23.7267, 27.6883]).addTo(map)
        .bindPopup('FAER');

    L.marker([-23.2833, 30.65]).addTo(map)
        .bindPopup('FAGI');

    L.marker([-24.3686, 31.0487]).addTo(map)
        .bindPopup('FAHS');

    L.marker([-24.7777, 31.3855]).addTo(map)
        .bindPopup('nan');

    L.marker([-24.593, 31.4151]).addTo(map)
        .bindPopup('nan');

    L.marker([-23.0619, 29.8647]).addTo(map)
        .bindPopup('FALO');

    L.marker([-24.7478, 31.4743]).addTo(map)
        .bindPopup('FALD');

    L.marker([-23.8244, 30.3293]).addTo(map)
        .bindPopup('FATZ');

    L.marker([-22.356, 29.9862]).addTo(map)
        .bindPopup('FAMS');

    L.marker([-24.1903, 31.3864]).addTo(map)
        .bindPopup('nan');

    L.marker([-23.9372, 31.1554]).addTo(map)
        .bindPopup('FAPH');

    L.marker([-23.8453, 29.4586]).addTo(map)
        .bindPopup('FAPP');

    L.marker([-23.0769, 30.3836]).addTo(map)
        .bindPopup('FATH');

    L.marker([-22.6193, 30.1756]).addTo(map)
        .bindPopup('nan');

    L.marker([-24.7854, 31.3549]).addTo(map)
        .bindPopup('FAUS');

    L.marker([-24.8181, 31.5446]).addTo(map)
        .bindPopup('FAMD');

    L.marker([-24.9474, 31.4488]).addTo(map)
        .bindPopup('nan');

    L.marker([-25.0501, 31.1319]).addTo(map)
        .bindPopup('FAHW');

    L.marker([-25.4403, 31.93]).addTo(map)
        .bindPopup('FAKP');

    L.marker([-25.43, 31.5767]).addTo(map)
        .bindPopup('FAMN');

    L.marker([-25.3832, 31.1056]).addTo(map)
        .bindPopup('FAKN');

    L.marker([-24.389, 31.326]).addTo(map)
        .bindPopup('FANG');

    L.marker([-25.5, 30.9138]).addTo(map)
        .bindPopup('FANS');

    L.marker([-24.9609, 31.5887]).addTo(map)
        .bindPopup('FASZ');

    L.marker([-24.5336, 31.3]).addTo(map)
        .bindPopup('nan');

    L.marker([-26.5241, 29.1701]).addTo(map)
        .bindPopup('FASC');

    L.marker([-26.8711, 26.718]).addTo(map)
        .bindPopup('FAKD');

    L.marker([-25.7984, 25.548]).addTo(map)
        .bindPopup('FAMM');

    L.marker([-25.3338, 27.1734]).addTo(map)
        .bindPopup('FAPN');

    L.marker([-26.671, 27.0819]).addTo(map)
        .bindPopup('FAPS');

    L.marker([-27.5472, 24.1725]).addTo(map)
        .bindPopup('FARI');

    L.marker([-26.9824, 24.7288]).addTo(map)
        .bindPopup('FAVB');

    L.marker([-29.2818, 18.8139]).addTo(map)
        .bindPopup('FAAG');

    L.marker([-28.575, 16.5333]).addTo(map)
        .bindPopup('FAAB');

    L.marker([-30.1878, 17.2792]).addTo(map)
        .bindPopup('nan');

    L.marker([-28.8028, 24.7652]).addTo(map)
        .bindPopup('FAKM');

    L.marker([-29.6884, 17.094]).addTo(map)
        .bindPopup('FAKZ');

    L.marker([-27.4567, 23.4114]).addTo(map)
        .bindPopup('FAKU');

    L.marker([-28.3601, 23.4391]).addTo(map)
        .bindPopup('FALC');

    L.marker([-29.6836, 22.7706]).addTo(map)
        .bindPopup('FAPK');

    L.marker([-29.6893, 17.9396]).addTo(map)
        .bindPopup('FASB');

    L.marker([-27.6486, 22.9993]).addTo(map)
        .bindPopup('FASS');

    L.marker([-28.3991, 21.2602]).addTo(map)
        .bindPopup('FAUP');

    L.marker([-33.9648, 18.6017]).addTo(map)
        .bindPopup('FACT');

    L.marker([-34.0056, 22.3789]).addTo(map)
        .bindPopup('FAGG');

    L.marker([-34.1583, 22.0586]).addTo(map)
        .bindPopup('FAMO');

    L.marker([-33.607, 22.189]).addTo(map)
        .bindPopup('FAOH');

    L.marker([-34.5549, 20.2507]).addTo(map)
        .bindPopup('FAOB');

    L.marker([-34.0882, 23.3287]).addTo(map)
        .bindPopup('FAPG');

    L.marker([-33.8122, 19.9028]).addTo(map)
        .bindPopup('FARS');

    L.marker([-32.9689, 18.1603]).addTo(map)
        .bindPopup('FALW');

    L.marker([-31.641, 18.5448]).addTo(map)
        .bindPopup('FAVR');

    L.marker([-15.6334, 29.6036]).addTo(map)
        .bindPopup('nan');

    L.marker([-12.5728, 27.8939]).addTo(map)
        .bindPopup('nan');

    L.marker([-12.9005, 28.1499]).addTo(map)
        .bindPopup('FLSO');

    L.marker([-12.9981, 28.6649]).addTo(map)
        .bindPopup('FLND');

    L.marker([-13.5583, 32.5872]).addTo(map)
        .bindPopup('FLCP');

    L.marker([-13.2589, 31.9366]).addTo(map)
        .bindPopup('FLMF');

    L.marker([-11.137, 28.8726]).addTo(map)
        .bindPopup('FLMA');

    L.marker([-15.3308, 28.4526]).addTo(map)
        .bindPopup('FLLS');

    L.marker([-15.7255, 29.3021]).addTo(map)
        .bindPopup('nan');

    L.marker([-13.537, 23.1081]).addTo(map)
        .bindPopup('FLZB');

    L.marker([-12.1737, 26.3651]).addTo(map)
        .bindPopup('FLSW');

    L.marker([-10.2167, 31.1333]).addTo(map)
        .bindPopup('FLKS');

    L.marker([-8.85917, 31.3364]).addTo(map)
        .bindPopup('FLBA');

    L.marker([-8.525, 30.663]).addTo(map)
        .bindPopup('FLKY');

    L.marker([-17.8218, 25.8227]).addTo(map)
        .bindPopup('FLLI');

    L.marker([-15.9658, 25.9333]).addTo(map)
        .bindPopup('FLNA');

    L.marker([-14.9983, 22.6454]).addTo(map)
        .bindPopup('FLKL');

    L.marker([-14.8, 24.783]).addTo(map)
        .bindPopup('FLKO');

    L.marker([-14.3748, 23.2495]).addTo(map)
        .bindPopup('FLLK');

    L.marker([-15.2545, 23.1623]).addTo(map)
        .bindPopup('FLMG');

    L.marker([-17.4763, 24.3047]).addTo(map)
        .bindPopup('FLSS');

    L.marker([-16.113, 23.2982]).addTo(map)
        .bindPopup('FLSN');

    L.marker([-20.0174, 28.6179]).addTo(map)
        .bindPopup('FVBU');

    L.marker([-17.9318, 31.0928]).addTo(map)
        .bindPopup('FVHA');

    L.marker([-20.2067, 32.6283]).addTo(map)
        .bindPopup('FVCH');

    L.marker([-18.9975, 32.6272]).addTo(map)
        .bindPopup('FVMU');

    L.marker([-16.817, 28.35]).addTo(map)
        .bindPopup('nan');

    L.marker([-16.5198, 28.885]).addTo(map)
        .bindPopup('FVKB');

    L.marker([-21.0081, 31.5786]).addTo(map)
        .bindPopup('FVCZ');

    L.marker([-21.231, 32.3336]).addTo(map)
        .bindPopup('FVMH');

    L.marker([-20.0553, 30.8591]).addTo(map)
        .bindPopup('FVMV');

    L.marker([-18.6299, 27.021]).addTo(map)
        .bindPopup('FVWN');

    L.marker([-18.0959, 25.839]).addTo(map)
        .bindPopup('FVFA');

    L.marker([-18.363, 26.5198]).addTo(map)
        .bindPopup('FVWT');

    L.marker([-19.4364, 29.8619]).addTo(map)
        .bindPopup('FVTL');



});
