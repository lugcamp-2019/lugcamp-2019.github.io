///////////////////////////////////////////////////////////
//
//	Priser
// --------------------------------------------------------
var pris_camp_adult				= 720.00;
var pris_camp_young				= 720.00;
var pris_camp_child				= 400.00;
var pris_camp_smallchild			=   0.00;
var pris_slottet_adult				= 130.00;
var pris_slottet_young	= pris_slottet_child	=  50.00;
var pris_slottet_smallchild			=   0.00;
var pris_stjerne_adult				= 300-70;
var pris_stjerne_young	= pris_stjerne_child	= 200.00;
var pris_stjerne_smallchild			=   0.00;
// --------------------------------------------------------
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
