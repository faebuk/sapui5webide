sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ch/bkw/model/models",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("ch.bkw.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			var self = this;
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			//var oList = this.getView().byId("menuList");
			
			var url = "https://api.bkw.ch/mobile/v1/kantine/menuplan";
			
			jQuery.get(url, function(response){
				var newData = JSON.stringify(response);
				var newData2 = newData.replace(/(?:\\[rn])+/g, "\\n");
				
				var data = JSON.parse(newData2).restaurants.find(x => x.shortName === "Atrium");
				data.date = response.date;          

				var viewModel = new JSONModel();
				viewModel.setData(data);
				
				self.setModel(viewModel);
			});
			//$.get(url);
			
			
		}
	});

});