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
        "firstName": firstName,
        "lastName": lastName,
        "age": age,
        "address": address,
        "email": email,
        "phone": phone,
        "pw": pw
    }

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