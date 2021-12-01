function submitForm() {
    let id = $("#p_id").val();
    let name = $("#p_name").val();
    let brand = $("#p_brand").val();
    let price = $("#p_price").val();
    let category = $("#p_cat").val();
    let theme = $("#p_theme").val();
    let src = $("#p_src").val();
    let desc_short = $("#p_desc_short").val();
    let desc_long = $("#p_desc_long").val();

    // Create JSON Object
    let product = {
        "id": id,
        "name": name,
        "brand": brand,
        "price": price,
        "category": category,
        "theme": theme,
        "src": src,
        "desc_short": desc_short,
        "desc_long": desc_long,
    }

    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];

        }
    }

    $("#j_id").html(product.id);
    $("#j_name").html(product.name);
    $("#j_brand").html(product.brand);
    $("#j_price").html(product.price);
    $("#j_cat").html(product.category);
    $("#j_theme").html(product.theme);
    $("#j_src").html(product.src);
    $("#j_desc_short").html(product.desc_short);
    $("#j_desc_long").html(product.desc_long);

    // // Disable all Form Fields
    // let fields = document.getElementsByClassName("form-control");
    // for (let i = 0; i < fields.length; i++) {
    //     fields[i].disabled = true;
    // }
}