sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({ viewName: "step3Go.App" }).then(function (oView) {
		oView.placeAt("content");
	});
});