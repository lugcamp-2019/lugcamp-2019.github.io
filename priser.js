///////////////////////////////////////////////////////////
//
//	Priser
//
var pris_camp_adult		= 700.00;
var pris_camp_young		= 700.00;
var pris_camp_child		= 300.00;
var pris_camp_smallchild	=   0.00;
var pris_slottet_adult		= 125.00;
var pris_slottet_young		=  45.00;	var pris_slottet_child = pris_slottet_young;
var pris_slottet_smallchild	=   0.00;
var pris_stjerne_adult		= 295-70;
var pris_stjerne_young		= 195.00;	var pris_stjerne_child = pris_stjerne_young;
var pris_stjerne_smallchild	=   0.00;
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//
//	Udfylding af diverse priser
//
function set_pris(el,pris) {
	el.innerHTML = pris;
	el.insertAdjacentHTML("afterend"," DKK");
}

x = document.getElementsByClassName("pris_camp_adult");		for (i = 0; i < x.length; i++) { set_pris(x[i],pris_camp_adult		); }
x = document.getElementsByClassName("pris_camp_young");		for (i = 0; i < x.length; i++) { set_pris(x[i],pris_camp_young		); }
x = document.getElementsByClassName("pris_camp_child");		for (i = 0; i < x.length; i++) { set_pris(x[i],pris_camp_child		); }
x = document.getElementsByClassName("pris_camp_smallchild");	for (i = 0; i < x.length; i++) { set_pris(x[i],pris_camp_smallchild	); }
x = document.getElementsByClassName("pris_slottet_adult");	for (i = 0; i < x.length; i++) { set_pris(x[i],pris_slottet_adult	); }
x = document.getElementsByClassName("pris_slottet_young");	for (i = 0; i < x.length; i++) { set_pris(x[i],pris_slottet_young	); }
x = document.getElementsByClassName("pris_slottet_child");	for (i = 0; i < x.length; i++) { set_pris(x[i],pris_slottet_child	); }
x = document.getElementsByClassName("pris_slottet_smallchild");	for (i = 0; i < x.length; i++) { set_pris(x[i],pris_slottet_smallchild	); }
x = document.getElementsByClassName("pris_stjerne_adult");	for (i = 0; i < x.length; i++) { set_pris(x[i],pris_stjerne_adult	); }
x = document.getElementsByClassName("pris_stjerne_young");	for (i = 0; i < x.length; i++) { set_pris(x[i],pris_stjerne_young	); }
x = document.getElementsByClassName("pris_stjerne_child");	for (i = 0; i < x.length; i++) { set_pris(x[i],pris_stjerne_child	); }
x = document.getElementsByClassName("pris_stjerne_smallchild");	for (i = 0; i < x.length; i++) { set_pris(x[i],pris_stjerne_smallchild	); }
x = document.getElementsByClassName("pris_stjerne_smallchild");	for (i = 0; i < x.length; i++) { set_pris(x[i],pris_stjerne_smallchild	); }
