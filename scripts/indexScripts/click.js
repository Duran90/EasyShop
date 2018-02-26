$(document).ready(function(){
    console.log("Done");
   $("#addItemInListBtn").click(function () {
       var item = $("#inputItemInList");
       if(!item.val() =="") {
           $("#productList").append('<li class="itemList">' + item.val() + '<button class="btn-remove redBackground whiteText" type="button" value="remove">X</button></li>');
           item.val('');
       }else {
           alert("Enter the name of the product!")};
        if($("#productList").children().length > 0){
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
        alert($("#productList").children().length)
    })


});
