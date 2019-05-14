sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"opensap/myapp/model/formatter"
], function (Controller, MessageToast, Filter, FilterOperator, formatter) {
	"use strict";

	return Controller.extend("opensap.myapp.controller.App", {
		
		formatter : formatter, 
		
		onShowHello : function () {
			//Read msg from i18n model
			var oBoundle = this.getView().getModel("i18n").getResourceBundle();
			console.log(oBoundle);
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			console.log(sRecipient);
			var sMsg = oBoundle.getText("helloMsg", [sRecipient]);
			
			//Show msg
			MessageToast.show(sMsg);
			//MessageToast.show("Hello openSAP");
		},
		
		onFilterProducts : function(oEvent){
			//built filter array
			var aFilter = [];
			// fetch event parameter
			var sQuery = oEvent.getParameter("query");
			console.log(sQuery);
			//retrive list control
			var oList = this.getView().byId("productsList");
			console.log(oList);
			// get Binding for aggregation  'items'
			var oBinding = oList.getBinding("items");
			console.log(oBinding);
			
			
			if (sQuery){
				aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
			}
			
			// apply filter. an empty filter array simply removes the filter
			// which will make all entries visible again
			oBinding.filter(aFilter);
		}
	});
});