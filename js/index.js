angular
	.module("sneakerGuys", [])
	.controller("appController", function ($scope, $timeout) {
		$scope.productID_ = 1;
		$scope.jsonData = "";

		var data = "";

		$scope.productPageSegue = function () {
			window.location.href = "ProductPage.html";
		};

		$scope.addToCart = function () {
			let userName = "kscholl";
			// let product = $scope.getProduct($scope.productID_);
			var product = getProduct($scope.productID_);
			$scope.$apply();

			console.log("addToCart");
			console.log(product);
			console.log($scope.jsonData);

			console.log(data);

			var query = "http://localhost:3000/create/cart?";
			query += "userName=" + userName;
			query += "&productID=" + product.productID;

			console.log(query);

			// sendToDB(query);
		};

		function sendToDB(query) {
			let userName = "kscholl";
			var query = "http://localhost:3000/create/cart?";
			query += "userName=" + userName;
			query += "&productID=" + product.productID;

			console.log(query);

			$.ajax({
				url: query,
				crossDomain: true,
				dataType: "json",
				type: "GET",
			})
				.done(function (json) {
					$scope.response = json.result;
					$scope.$apply();
				})
				.fail(function () {
					alert("Error");
				});
		}

		function getProduct(id) {
			// $scope.getProduct = function (id) {
			var query = "http://localhost:3000/read/products/";
			query += id;

			console.log(query);

			var result = "";

			$scope.productID_ = 2;

			$.ajax({
				url: query,
				crossDomain: true,
				dataType: "json",
				type: "GET",
			})
				.done(function (json) {
					console.log(json);
					result = json;
					$scope.jsonData = json;
					return json;
					return JSON.stringify(json);
				})
				.fail(function () {
					alert("Error");
					$scope.jsonData = null;
					return null;
				});
			console.log("result", result);
			return "result";
		}

		$scope.manualAddToCart = function () {
			let userName_ = "kscholl";
			let productID_ = 101;
			// let product = $scope.getProduct($scope.productID_);
			var product = getProduct($scope.productID_);

			var query = "http://localhost:3000/create/cart?";
			query += "userName=" + userName_;
			query += "&productID=" + productID_;

			$.ajax({
				url: query,
				crossDomain: true,
				dataType: "json",
				type: "GET",
			})
				.done(function (json) {
					$scope.response = json.result;
					$scope.$apply();
				})
				.fail(function () {
					alert("Error");
				});
		};
	});
