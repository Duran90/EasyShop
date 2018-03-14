var BASE_URL = "https://easyshoptelran.herokuapp.com/user";
var index = {};
var keyItem;
$(document).ready(function () {

    var searchElement = $('#inputItemInList');

    searchElement.keyup(function () {

            if(searchElement.val().length >2) {
                $.ajax({url: BASE_URL + "/itemsearch?search=" + searchElement.val()}).then(function (response) {
                    for (var key in response) {
                        if (key === "result") {
                            $("#searchResponse").children().remove();
                            var res = response[key];
                            for (var item in res) {
                                $("#searchResponse").append("<option value=\'" + res[item] + "\'>" + item + "</option>");
                               keyItem = res[item];
                               index[keyItem]=item;
                            }
                        }
                    }

                });

            }
    });

    // $("#doneItemListBtn").click(function () {
    //     $.ajax()
    // })
});

