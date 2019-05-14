sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"opensap/myapp/model/formatter"
], function (Controller, MessageToast, formatter) {
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
		}
	});
});