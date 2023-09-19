sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("step2Steady.App", {
		onPress : function () {
			MessageToast.show("Hello App!");
		}
	});

});