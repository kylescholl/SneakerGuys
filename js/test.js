function Testing($scope) {
	$scope.userName = "kscholl";
	$scope.productID = 101;
	$scope.productName = "Yeezy 350 v2 Boost Triple";

	$scope.A = function () {
		console.log("A");

		var query = "http://localhost:3000/read/products/";
		query += $scope.test_input;

		console.log(query);

		$scope.request = query;
		// $scope.$apply();
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

	$scope.B = function () {
		console.log("B");

		var query = "http://localhost:3000/create/cart?";
		query += "userName=" + $scope.userName;
		query += "&productID=" + $scope.productID;
		query += "&productName=" + $scope.productName;

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
	};
}
