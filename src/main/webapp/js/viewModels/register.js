/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define([ 'knockout', 'appController', 'ojs/ojmodule-element-utils', 'accUtils',
		'jquery' ], function(ko, app, moduleUtils, accUtils, $) {

	function RegisterViewModel() {
		var self = this;
		
		self.userName = ko.observable("pepe");
		self.email = ko.observable("pepe@pepe.com");
		self.pwd1 = ko.observable("pepe123");
		self.pwd2 = ko.observable("pepe123");
		self.picture=ko.observable();

		self.message = ko.observable();
		self.error = ko.observable();
		
		self.setPicture = function(widget, event) {
			var file = event.target.files[0];
			var reader = new FileReader();
			reader.onload = function () {
				self.picture ("data:image/png;base64," + btoa(reader.result));
			}
			reader.readAsBinaryString(file);
		}
		
		self.register = function() {
			var info = {
				userName : self.userName(),
				email : self.email(),
				pwd1 : self.pwd1(),
				pwd2 : self.pwd2(),
				picture : self.picture()
			};
			var data = {
					data : JSON.stringify(info),
					url : "user/register",
					type : "put",
					contentType : 'application/json',
					success : function(response) {
						if(response == "Email inválido"){
							self.error("Email inválido");
							self.message("");	
						}else {
							self.message(response);
							self.error("");	
						}
					},
					error : function(response) {
						self.message("");
						self.error(response.responseJSON.errorMessage);
					}
			};
			$.ajax(data);    	  
		}

		// Header Config
		self.headerConfig = ko.observable({
			'view' : [],
			'viewModel' : null
		});
		moduleUtils.createView({
			'viewPath' : 'views/header.html'
		}).then(function(view) {
			self.headerConfig({
				'view' : view,
				'viewModel' : app.getHeaderModel()
			})
		})

		self.connected = function() {
			accUtils.announce('Register page loaded.');
			document.title = "Registro";
			// Implement further logic if needed
		};

		self.disconnected = function() {
			// Implement if needed
		};

		self.transitionCompleted = function() {
			// Implement if needed
		};
	}

	return RegisterViewModel;
});
