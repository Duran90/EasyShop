var BASE_URL = "https://easyshoptelran.herokuapp.com/user";
$(document).ready(function () {

    var searchElement = $('#inputItemInList');

    searchElement.keyup(function () {

            if(searchElement.val().length >3) {
                $.ajax({url: BASE_URL + "/itemsearch?search=" + searchElement.val()}).then(function (response) {
                    for (var key in response) {
                        if (key === "result") {
                            $("#searchResponse").children().remove();
                            var res = response[key];
                            for (var item in res)
                                $("#searchResponse").append("<option value=\'" + res[item] + "\'></option>");
                        }
                    }
                });

            }
    });

    // $("#doneItemListBtn").click(function () {
    //     $.ajax()
    // })
});

