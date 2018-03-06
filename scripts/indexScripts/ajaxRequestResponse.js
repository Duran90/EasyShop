var BASE_URL = "/https://easyshoptelran.herokuapp.com/user";
$(document).ready(function () {
    BASE_URL + "/itemSearch?search=" + search
    var searchElement = $('#inputItemInList');
    var search = searchElement.val();
    searchElement.keyup(function () {
        if (search.length > 3) {
            $.ajax({url: BASE_URL + "/itemSearch?search=" + search}).then(function (response) {
                if (response.code == 200){
                    for(var key in response){
                        $("#searchResponse").append("<option value=\'"+response[key]+"\'></option>");
                    }
                }

            });
        }
        })

    $("#doneItemListBtn").click(function () {
        $.ajax()
    })
});

