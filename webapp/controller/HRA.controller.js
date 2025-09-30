var empId = "";
var type = "";
var name = "";
var request = ""; 
var position = "";
var dept = "";
var area = "";
var company = "";
var string = "";
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("HR.zclearance_hra.controller.HRA", {
		onInit: function () {
			debugger;
			var url = window.location.href;
			//var pieces = complete_url.split("?");
			var pieces = url.split("ccc");
			
			//var val = pieces[1];
			//var to = pieces[1].split("=");
			//var val = to[0];
		//	this.zrecord = pieces[1].slice(1, 10);
		
		if	(pieces.length === 2){
			string = pieces[1];
			this.zrecord = string.substr(1, 9);	
		}
		
			//var pieces = complete_url.split("/");  /*get the woritem id 
			//var val = pieces[6];
			var that = this;
			var oModel = that.getOwnerComponent().getModel();
			//var ccc = jQuery.sap.getUriParameters().get("ccc");
			var sPath = "/directManagerSet('" + this.zrecord + "')";
			
			oModel.read(sPath, {
				success: function (oData, response) {
					var oModel3 = new sap.ui.model.json.JSONModel(oData);
					var osf = that.getView().byId("idClearanceForm1");
					var osf1 = that.getView().byId("idForm2");
					osf.setModel(oModel3);
					osf1.setModel(oModel3);
					name = oData.Name;
					position = oData.Jobtitle;
					dept = oData.Department;
					area = oData.Zarea;
					company = oData.Zcompany;
				},
				error: function () {

					sap.m.MessageToast.show("No Data retreived");
				}

			});

		},
			onSave: function(){
			
			debugger;
			var check1 = this.getView().byId("id1").mProperties.selected;
			var check2 = this.getView().byId("id2").mProperties.selected;
		//	var check3 = this.getView().byId("id3").mProperties.selected;
		//	var check4 = this.getView().byId("id4").mProperties.selected;
			//var check5 = this.getView().byId("id5").mProperties.selected;
			this.text = this.getView().byId("idtext").getValue();
			var that = this;

			var oModel = that.getOwnerComponent().getModel();

			var Entry = {
				Zrecord: this.zrecord,
				ZhraAccomodation: check1,
				ZhraStationary: check2,
				ZhraComments: this.text
			};

			oModel.create("/hraApprovalSet",
				Entry, {
					success: function (data) {
						debugger;
						
						sap.m.MessageToast.show("Clearance Request updated", {
							duration: 3000, // default
							width: "15em", // default
							my: "CenterTop", // default
							at: "CenterTop", // default
							of: window, // default
							offset: "0 0", // default
							collision: "fit fit", // default
							onClose: null, // default
							autoClose: true, // default
							animationTimingFunction: "ease", // default
							animationDuration: 1000, // default
							closeOnBrowserNavigation: true // default
						});
					//	location.reload();
					},
					error: function (oError) {
						debugger;
						sap.m.MessageToast.show("Error while updating the request. Please try again", {
							duration: 3000, // default
							width: "15em", // default
							my: "CenterTop", // default
							at: "CenterTop", // default
							of: window, // default
							offset: "0 0", // default
							collision: "fit fit", // default
							onClose: null, // default
							autoClose: true, // default
							animationTimingFunction: "ease", // default
							animationDuration: 1000, // default
							closeOnBrowserNavigation: true // default
						});

					}

				});
		}
	});
});