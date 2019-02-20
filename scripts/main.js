//Get the time
function startTime() {
    
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();


    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;

    //Sets the speed of the time
    setTimeout(startTime, 500);
}

//Function to make sure the time is shown correctly
function checkTime(i) {
  if (i < 10) {i = "0" + i}
        return i;
}

//Execute the time
    startTime();
    checkTime();

var up = true;
var value = -80;
//Speed in km/s
var increment = 80;
//Distance to Mars
var max = 54600000;

//Function to calculate the distance  
function travelDistance()  {
    
    if (up == true && value <= max) {
        value += increment
        
   
    } 
    else {
        value = 54600001
        

    }
    
    document.getElementById('counter').innerHTML = 'km: ' + value + '<br /v>';
    document.getElementById('speed').innerHTML = increment + ' km / s <br /v>';
    
    status();
    
  }

//Set the speed of the function 
var setInterval;
setInterval(travelDistance, 1000);

//Run the travelDistance function 
travelDistance();

var down = true;
var fuel = 20780801;
var totalFuel = 20780801;
//Fuel consumption
var decrement = increment * 3;

//Create a function for Fuel
function fuelLosing() {
    
    if (down == true && fuel > 0) {
        fuel -= decrement
        } 
    else {
        down = false
        fuel = 0
    }
    
    var fuelPercentage = (fuel / totalFuel) * 100;
      
    document.getElementById('fuel').innerHTML = 'Gallons: ' + fuel + '<br /v>';
    document.getElementById('totalFuel').innerHTML = Math.round(fuelPercentage) + ' %';
}
    
//Set the speed of the fuel
setInterval(fuelLosing, 1000);

//Start a fuel function
fuelLosing();

function status() {
    
    var statusMessage
    
    if (value > -81 && value < 450) {
      statusMessage = 'We have started the flight. We are reaching Thermosphere. You might see Aurora now.' 
    }
    
    if (value > 451 && value < 790) {
      statusMessage = 'We have reached the end of Thermosphere. We are in Exosphere now.' 
    }
    
    if (value > 891 && value < 5450000) {
      statusMessage = 'We are reaching the end of Exosphere. From now on it is only us and space, take a good sleep! We will speak again when we are closer to Mars' 
    }
    
    if (value > 5450001 && value < 54599999) {
      statusMessage = 'We are reaching Mars, stay tuned.' 
    }
    
    if (value >= 54600000) {
        statusMessage = 'We reached Mars! Landing was great.' 
    }
    
    document.getElementById('statusMessage').innerHTML = statusMessage;  
}


