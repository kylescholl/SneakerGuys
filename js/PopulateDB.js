var query = "http://localhost:3000/create/fill-db?";
query += "userName=" + $scope.UserName;
query += "&emailAddress=" + $scope.EmailAddress;
query += "&password=" + $scope.Password;

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
