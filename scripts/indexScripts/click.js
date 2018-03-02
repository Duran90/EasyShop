$(document).ready(function(){
    console.log("Done");
   $("#addItemInListBtn").click(function () {
       var item = $("#inputItemInList");
       if(!item.val() =="") {
           $("#productList").append('<li class="itemList">' + item.name +
               '<button class="btn-remove redBackground whiteText" type="button" value="remove">X</button></li>').attr(id,item.barcode);

           item.val('');

       }else {
           alert("Enter the name of the product!")}
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
        var itemList = $(".itemList");
        console.log(itemList.val());
        var doneList =[];
        for(var i = 0; i < itemList.length; i ++){
            doneList[i] = itemList.get
        }

    })


});
