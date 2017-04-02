
$( document ).ready(function(){

    $('#getweather').click(function(){

var city= $('#city').val();
if(city!=''){

    $.ajax({

url:'api.openweathermap.org/data/2.5/weather?q="+ city+ "&units=metric' + "&APPID=33585a41bbfeb05b336a9869e40097b0",

type:"GET",
dataType:"jsonp",
success:function(data){

  var widget= display(data);
  $("#display").html(widget);

$("#city").val('');

}


    });

  }
  else
  {
  $("#error").html('Must enter a value');
  
      
  }


    });
});
function display(data){

return  "<h2> Weather for"+ data.name +","+data.sys.country+"</h2>"+


        "<h2>Weather:"+ data.weather[0].main + "</h2>" +
        "<h2>Detail:"+ data.weather[0].description + "</h2>"+
        "<h2>Detail:"+ data.main.temp + "</h2>"+
        "<h2>Detail:"+ data.main.pressure+ "</h2>";

  }