$('#myonoffswitch').change(function () {

    if(this.checked){
        $('#optimal').hide();
        $('#economy').show();
    } else {
        $('#economy').hide();
        $('#optimal').show();
    }

});