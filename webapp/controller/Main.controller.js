sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ch.bkw.controller.Main", {
		formatMenu: function(menu){
			console.log(menu);
			return "menu";
		}
	});

});