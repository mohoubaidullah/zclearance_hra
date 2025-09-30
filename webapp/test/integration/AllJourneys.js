/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"HR/zclearance_hra/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"HR/zclearance_hra/test/integration/pages/HRA",
	"HR/zclearance_hra/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "HR.zclearance_hra.view.",
		autoWait: true
	});
});