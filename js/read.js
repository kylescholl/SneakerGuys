function Testing($scope) {
    $scope.testA = function () {
        console.log("Test A");

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

    $scope.testB = function () {
        console.log("Test B");

        var query = "http://localhost:3000/read/products/";

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
}
