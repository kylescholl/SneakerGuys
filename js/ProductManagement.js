function NewProduct($scope) {
    $scope.submit = function () {
        console.log($scope.src);
        let src = $scope.src ?? "#";

        var query = "http://localhost:3000/create/product?";
        query += "productID=" + $scope.productID;
        query += "&name=" + $scope.name;
        query += "&brand=" + $scope.brand;
        query += "&price=" + $scope.price;
        query += "&category=" + $scope.category;
        query += "&theme=" + $scope.theme;
        query += "&src=" + $scope.src;
        query += "&descShort=" + $scope.descShort;
        query += "&descLong=" + $scope.descLong;

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
