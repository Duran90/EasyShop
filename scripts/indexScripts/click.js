$(document).ready(function(){
   $("#addItemInListBtn").click(function () {
       var item = $("#inputItemInList");
       var amount = $("#inputItemAmount");
       if (amount.val() == "") {
           alert("Enter Amount")
       }else if (!item.val() == "") {
           $("#productList").append('<li class="itemList" data-amount = \"' + amount.val() + '\">' + item.val()+
               '<span>'+amount.val()+'</span>' + ' qty' +
               '<sup><button class="btn-remove redBackground whiteText" type="button" value="remove">X</button></sup></li>');
           item.val('');
           amount.val('');

       } else {
           alert("Enter the name of the product!")
       }
       if ($("#productList").children().length > 0) {
           $("#doneItemListBtn").show();
       }

       $(".btn-remove").click(function () {
           $(this).parents(".itemList").remove();
           if($("#productList").children().length <=0){
               $("#doneItemListBtn").hide();
           }
       })
});
    $("#doneItemListBtn").click(function () {
        var itemList = $(".itemList");
        console.log(itemList.val());
        var doneList =[];
        for(var i = 0; i < itemList.length; i ++){
            doneList[i] = itemList.get
        }

    })


});
