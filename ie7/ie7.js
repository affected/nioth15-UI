/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-icons_window': '&#xe60f;',
		'icon-icons_thermometer2': '&#xe610;',
		'icon-icons_thermometer': '&#xe611;',
		'icon-icons_smiley1': '&#xe612;',
		'icon-icons_smiley0': '&#xe613;',
		'icon-icons_radiator': '&#xe614;',
		'icon-icons_history': '&#xe615;',
		'icon-icons_door': '&#xe616;',
		'icon-icons_cloud': '&#xe617;',
		'icon-icons_building': '&#xe618;',
		'icon-icons_alert': '&#xe619;',
		'icon-office_icons_tablet': '&#xe600;',
		'icon-office_icons_statistics': '&#xe601;',
		'icon-office_icons_smartphone': '&#xe602;',
		'icon-office_icons_search': '&#xe603;',
		'icon-office_icons_person': '&#xe604;',
		'icon-office_icons_paper': '&#xe605;',
		'icon-office_icons_notebook': '&#xe606;',
		'icon-office_icons_message': '&#xe607;',
		'icon-office_icons_loading': '&#xe608;',
		'icon-office_icons_laptop': '&#xe609;',
		'icon-office_icons_home': '&#xe60a;',
		'icon-office_icons_email': '&#xe60b;',
		'icon-office_icons_crayon': '&#xe60c;',
		'icon-office_icons_cloud': '&#xe60d;',
		'icon-office_icons_check': '&#xe60e;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
