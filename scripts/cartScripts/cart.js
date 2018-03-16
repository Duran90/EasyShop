$(document).ready(function () {
    var logo = sessionStorage.getItem("request");
    logo = JSON.parse(logo);
    console.log(logo)
    AjaxCart;

});

function AjaxCart() {
    $.post(
        "https://easyshoptelran.herokuapp.com/user/result",
        // sessionStorage.getItem("request"),
        requestJson,
        function (responseData) {
            console.log(responseData)
        },
    );
}

