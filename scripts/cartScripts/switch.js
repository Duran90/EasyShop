$('#myonoffswitch').change(function () {

    if(this.checked){
        $('#optimal').hide();
        $('#economy').show();
        //left-side
        $('#totalOptimal').hide();
        $('#totalEconomy').show();
        $('#yourEconomyOpacity').hide();
        $('#yourEconomy').show();
    } else {
        $('#economy').hide();
        $('#optimal').show();
        $('#totalEconomy').hide();
        $('#totalOptimal').show();
        $('#yourEconomy').hide();
        $('#yourEconomyOpacity').show();
    }

});