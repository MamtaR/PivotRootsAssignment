$(document).ready(function(){
    var store;
    var storeyear
 $.ajax({
    type: "get",
    url: "/data.json",
    dataType: "json",
    crossDomain: true,
    success: function(data) {
        
        for (let i = 0; i < data[0].monthly.length; i++) {
            console.log(data[0].monthly[i].grade);
            $("#grade").append(`<option value='${data[0].monthly[i].grade}'>${data[0].monthly[i].grade}</option>`);
        }
        store = data;

        for (let l = 0; l < data[1].yearly.length; l++) {
            console.log(data[1].yearly[l].grade);
            $("#gradey").append(`<option value='${data[0].yearly[l].grade}'>${data[1].yearly[l].grade}</option>`);
        }
        storeyear = data;
    },
    error: function(){
        alert("json not found");
    }
});

$('#grade').on('change', function() {
   
    for (let j = 0; j < store[0].monthly.length; j++) {
        if(this.value== store[0].monthly[j].grade){
//5_sessions
            $("#mnth").html(`${store[0].monthly[j].boards.general['5_sessions'].valid} <br> ${store[0].monthly[j].boards.general['5_sessions'].refund}`);   
            $("#price").html(`Rs. ${store[0].monthly[j].boards.general['5_sessions'].price}`);
            $("#discount").html(`${store[0].monthly[j].boards.general['5_sessions'].discount}`);
            $("#perclass").html(`${store[0].monthly[j].boards.general['5_sessions'].per_class_price}`);

         
//10_sessions
            $("#mnth1").html(`${store[0].monthly[j].boards.general['10_sessions'].valid} <br> ${store[0].monthly[j].boards.general['10_sessions'].refund}`);   
            $("#price1").html(`Rs. ${store[0].monthly[j].boards.general['10_sessions'].price}`);
            $("#discount1").html(`${store[0].monthly[j].boards.general['10_sessions'].discount}`);
            $("#perclass1").html(`${store[0].monthly[j].boards.general['10_sessions'].per_class_price}`); 
            
//20_sessions            
            $("#mnth2").html(`${store[0].monthly[j].boards.general['20_sessions'].valid} <br> ${store[0].monthly[j].boards.general['10_sessions'].refund}`);   
            $("#price2").html(`Rs. ${store[0].monthly[j].boards.general['20_sessions'].price}`);
            $("#discount2").html(`${store[0].monthly[j].boards.general['20_sessions'].discount}`);
            $("#perclass2").html(`${store[0].monthly[j].boards.general['20_sessions'].per_class_price}`); 

//45_sessions
            $("#mnth3").html(`${store[0].monthly[j].boards.general['45_sessions'].valid} <br> ${store[0].monthly[j].boards.general['10_sessions'].refund}`);   
            $("#price3").html(`Rs. ${store[0].monthly[j].boards.general['45_sessions'].price}`);
            $("#discount3").html(`${store[0].monthly[j].boards.general['45_sessions'].discount}`);
            $("#perclass3").html(`${store[0].monthly[j].boards.general['45_sessions'].per_class_price}`); 
        }
        
        
    }


   
  });

  $('#gradey').on('change', function() {
   
    for (let l = 0; l < storeyear[0].yearly.length; l++) {
        if(this.value== storeyear[0].yearly[l].grade){

            console.log(storeyear[1].yearly[l].boards);
        }
    }
  });
});