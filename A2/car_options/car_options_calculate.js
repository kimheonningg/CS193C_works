function calculate_sum() {
    let sum = 0;
    var config_val = document.getElementsByName("configuration");
    for(var i = 0; i<config_val.length; i++){
        if(config_val[i].checked==true){
            sum = sum + parseInt(config_val[i].value);
        }
    }
    
    var fact_val = document.getElementsByName("factory_options");
    for(var i = 0; i<fact_val.length; i++){
        if(fact_val[i].checked==true){
            sum = sum + parseInt(fact_val[i].value);
        }
    }
    var deal_val = document.getElementsByName("dealer_options");
    for(var i = 0; i<deal_val.length; i++){
        if(deal_val[i].checked==true){
            sum = sum + parseInt(deal_val[i].value);
        }
    }
    
    let price_result = document.getElementById("total_price_res");
    price_result.value = sum;
}