$(document).ready(function(){
    console.log("Done");
   $("#addItemInListBtn").click(function () {
       var item = $("#inputItemInList");
       $("#productList").append('<li class="itemList">'+item.val()+'<button class="btn-remove redBackground whiteText" type="button" value="remove">X</button></li>');
       item.val('');
       $(".doneItemListBtn").show();
   });

});
