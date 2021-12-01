function NewUser($scope) {
	console.log("A");
	$scope.submit = function () {
		console.log("B");
		//Make sure to change the host and port to match the URL
		var query = "http://localhost:3000/create/newuser?";
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
	};
}

/*
function submitForm() {
	let firstName = $("#firstName").val();
	let lastName = $("#lastName").val();
	let age = $("#userAge").val();
	let address = $("#userAddress").val();
	let email = $("#userEmail").val();
	let phone = $("#userTel").val();
	let pw = $("#userPassword").val();

	// Create JSON Object
	let user = {
		firstName: firstName,
		lastName: lastName,
		age: age,
		address: address,
		email: email,
		phone: phone,
		pw: pw,
	};

	$("#jFirstName").text(user.firstName);
	$("#jLastName").html(user.lastName);
	$("#jAge").html(user.age);
	$("#jAddress").html(user.address);
	$("#jPhone").html(user.phone);
	$("#jEmail").html(user.email);

	// Disable all Form Fields
	let fields = document.getElementsByClassName("form-control");
	for (let i = 0; i < fields.length; i++) {
		fields[i].disabled = true;
	}
}
*/
