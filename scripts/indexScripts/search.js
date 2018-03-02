$(document).ready(function () {
    var BASE_URL = "/https://easyshoptelran.herokuapp.com/user";
    var searchElement = $('#inputItemInList');
    var search = searchElement.val();
    searchElement.keyup(function () {
        if (search.length > 3) {
            $.ajax({
                type: "GET",
                url: BASE_URL + "/itemSearch?search=" + search,
                success: function (data) {
                    if (data.code = 200) {
                        for (var key in data) {
                            if (key === "barcode") {
                                $("#searchResponse").append("<div class='searchItem'><p>" + data[key] + "</p></div>").attr(id, key);
                            }
                        }
                    } else {
                        // TODO дописать код ошибки
                    }

                }
            })
        }
    })

});