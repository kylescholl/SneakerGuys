$(document).ready(function () {
	console.log("ready!");
	/* load product stuff */

	const json = getProduct();
	const descShort_html = formatStringList(json.desc_short);

	$("#productImage").attr("src", json.src);
	$("#productName").html(json.brand + " - " + json.name);
	$("#productPrice").html("$" + json.price);
	$("#productDescShort").html(descShort_html);
	$("#productDescLong").html(json.desc_long);
	console.log(descShort_html);
});

function getProduct_() {
	var query = "http://localhost:3000/read/products/";
	query += $scope.productID;

	console.log(query);
	$scope.request = query;

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

function getProduct() {
	// Make DB call
	/*
    $.getJSON("#")
        .done(function(json) {

        });
    */
	// Hard code for now
	return {
		id: 0001,
		name: "Adidas Yeezy 350 v2 Boost Triple",
		brand: "Adidas",
		price: "220.00",
		category: "Running",
		theme: "Cream / White",
		src: "src/YZ.png",
		desc_short:
			"{li}The luminous colored adidas Yeezy Boost 350 V2 has a cream white upper, core white midsole, and a camouflaged “SPLY-350” branding across the stripe on the sides.{li}These originally released in late April of 2017 with a retail price of $220 and restocked in September of 2018.",
		desc_long:
			"The adidas Yeezy Boost 350 v2 is a decade-defining sneaker designed by Kanye West and adidas. Given that from one release to the next, the Yeezy inventory continues to sell out instantly, the sneaker has certainly captured the attention of the mainstream audience, and its demand is through the roof. From a constructional standpoint, they feature an elastic upper comprised of the Three Stripes' signature Primeknit material, while its bottom regions are comprised with rib-like molds that house its interior Boost midsole cushioning. Some of its earlier iterations were decorated with “SPLY-350” text hits on its traditional stripe, but variations in recent years have instead opted to keep things to a cleaner aesthetic.<br><br>Easily one of, if not the most popular adidas Yeezy shoe West has ever created, it made its official debut back in September 24th, 2016 with its grey and orange “Beluga” colorway. Since then the silhouette has gone on to release in a wide array of different colorways, as well as seen through to several restocks; all of which have sold out completely once arriving on the retail market. In 2019, adidas introduced “Reflective” versions of the silhouette which happen to be much more limited than the non-reflective styles as many of them were Yeezy Supply exclusives.<br><br>In terms of its some of its most popular colorways, the “Core Black/Red”, “Static Black Reflective”, and “Beluga Yeezy” have seemed to reach higher prices on the resell front, but other iterations such as the “Zebra Yeezy” “Triple Black” options have garnered a measurable amount of fans.<br><br>After an eventful Summer, the adidas Yeezy 350 v2 has prepared a number of 2020 and 2021 releases: this will include the bright “Natural,” the “Ash Pearl,” “Ash Stone,” and “Ash Blue.”",
	};
}

function formatStringList(s) {
	let s_ = "";
	const li = s.split("{li}");
	li.forEach((i) => {
		if (!!i) {
			s_ += "<li>" + i + "</li>";
		}
	});
	return s_;
}
