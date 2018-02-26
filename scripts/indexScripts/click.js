$(document).ready(function(){
   $("#addItemInList").click(function () {
       var item = $("#inputItemInList");
       $("#productList").append('<li class="itemList">'+item.val()+'<button class="btn-remove redBackground whiteText" type="button" value="remove">X</button></li>');
       item.val('');
   });
   $(".btn-remove").click(function () {
       $(this).parents('.itemList').remove();
   })

});
