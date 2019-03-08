var fitBounds = [
			[0.1,0.0],
			[90.0,90.0]
		];
var osmap;
var sat		= L.tileLayer('https://kartoteket.alslug.dk/images/proxy.php/map/sat/{z}/{y}/{x}', {
		maxZoom: 19,
		attribution: 'Tiles &copy; Esri '//&mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
		});
var streets	= L.tileLayer('https://kartoteket.alslug.dk/images/proxy.php/map/street/{z}/{x}/{y}', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		});
osmap = L.map('openstreetmap',{
				maxZoom: 20,
				layers:[streets]
				})
		.setView([54.9637944,9.6547830],10);
new L.control.layers({
			'Sat': sat,
			'Kort': streets
			})
		.addTo(osmap);
L.control.scale().addTo(osmap);

function setmarker(polygon,_color_,_title_) {
	p = L.polygon(polygon, {color: _color_, title:_title_});
	p.addTo(osmap);
	p.bindPopup(_title_);
	for(var i=0, len=polygon.length; i < len; i++){
		point = polygon[i];
//		fitBounds[0][0] = min(	fitBounds[0][0] , point[0]);
//		fitBounds[0][1] = min(	fitBounds[0][1] , point[1]);
//		fitBounds[1][0] = max(	fitBounds[1][0] , point[0]);
//		fitBounds[1][1] = max(	fitBounds[1][1] , point[1]);
		if (fitBounds[0][0] < point[0]) { fitBounds[0][0] = point[0]; }
		if (fitBounds[0][1] < point[1]) { fitBounds[0][1] = point[1]; }
		if (fitBounds[1][0] > point[0]) { fitBounds[1][0] = point[0]; }
		if (fitBounds[1][1] > point[1]) { fitBounds[1][1] = point[1]; }
	}
}

var _syd =	[54.9639261,9.6544978];
var _vest =	[54.9640147,9.6541702];
var _nord =	[54.9641027,9.6542424];
var offset = [(_nord[0]-_vest[0])*0.8,(_nord[1]-_vest[1])*0.8];

var alslug_s=	[_syd[0]+(_vest[0]-_syd[0])/3*1,	_vest[1]-(_vest[1]-_syd[1])/3*2];
var alslug_v=	[_syd[0]+(_vest[0]-_syd[0])/3*2,	_vest[1]-(_vest[1]-_syd[1])/3*1];
var alslug_n =	[alslug_v[0]+offset[0],alslug_v[1]+offset[1]];
var alslug_e =	[alslug_s[0]+offset[0],alslug_s[1]+offset[1]];

var bib_s=	[_syd[0]+(_vest[0]-_syd[0])/9*2,	_vest[1]-(_vest[1]-_syd[1])/9*7];
var bib_v=	[_syd[0]+(_vest[0]-_syd[0])/9*6,	_vest[1]-(_vest[1]-_syd[1])/9*3];
var bib_n =	[bib_v[0]+offset[0],bib_v[1]+offset[1]];
var bib_e =	[bib_s[0]+offset[0],bib_s[1]+offset[1]];
setmarker([	[54.9635583,9.6548926],	[54.9636260,9.6549501],	[54.9636938,9.6547084],	[54.9636271, 9.6546518]	],
								'red',	'Dining-area');
var kitchen_e = [54.9635327,9.6548693];
var kitchen_s = [54.9634586,9.6548063];
var nr8_v = 	[54.9635785,9.6543785];
offset = [(nr8_v[0]-kitchen_s[0])*0.33,(nr8_v[1]-kitchen_s[1])*0.33];
var kitchen_v = [kitchen_s[0]+offset[0],kitchen_s[1]+offset[1]];
var kitchen_n = [kitchen_e[0]+offset[0],kitchen_e[1]+offset[1]];
setmarker([	kitchen_e,kitchen_s,kitchen_v,kitchen_n],
								'red',	'Professional kitchen');
setmarker([	[54.9639617,9.6547191],	[54.9640286,9.6548037],	[54.9639510,9.6550907],	[54.96388,9.65504]	],
								'red',	'Gym'						+'<br/>'+
									'main computing-area'				);
setmarker([	bib_s,			bib_v,			bib_n,			bib_e			],
								'red',	'Former libray'					+'<br/>'+
									'downstarts'					+'<br/>'+
									'big meeting-room (or sleeping-room)'		);
setmarker([	alslug_s,		alslug_v,		alslug_n,		alslug_e		],
								'cyan',	'AlsLUGs space'					+'<br/>'+
									'upstarts'					+'<br/>'+
									'meeting-room with net/power on the tables'	+'<br/>'+
									'~20 seated people'				);
setmarker([	[54.9639617,9.6547191],	[54.9640286,9.6548037],	[54.9640705,9.6548381],	[54.9641139,9.6546778],	[54.9640083,9.6545912]	],
								'blue',	'Shower and toilets for the gym');
setmarker([	[54.96403,9.6551],	[54.96431,9.65526],	[54.96440,9.65489],	[54.96413,9.65464]	],
								'green','Area for tents');
var gaard_e = [54.9637946,9.6553371];
var gaard_n = [54.9639617,9.6547191];
setmarker([	[54.9635971,9.6551751],	gaard_e,	[(gaard_e[0]+gaard_n[0])/2,(gaard_e[1]+gaard_n[1])/2]	],
								'green',	'Area for caravans etc');
osmap.fitBounds(fitBounds);
