var muted = false;

$(document).ready(function () {


    window.addEventListener("message", function (event) {
   
      if(event.data.type == "update") {
           $("#pid").text(event.data.id);
           $("#content").text("$ " + event.data.money.toLocaleString().replace(/,/g, '.'));
           $("#bankmoney").text("$ " + event.data.bank.toLocaleString().replace(/,/g, '.'));
           $("#schwarzmoney").text(event.data.black_money.toLocaleString().replace(/,/g, '.'));
           
      }
				    if (event.data.action == "muted") {
					if (event.data.muted == true) { 
					  $('#Ellipse_4').css('fill','rgba(210,0,0,1)');
					} else {
					  $('#Ellipse_4').css('fill','rgba(14,210,0,1)');
					}
						
					
					if (event.data.muted == false) {
						$('#Ellipse_4').css('fill','rgba(14,210,0,1)');
					}
        };
					if (event.data.action == "nomuted") {
					  $('#Ellipse_4').css('fill','rgba(14,210,0,1)');
        };

    });
});

function updateClock() {
    let today = new Date();

    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();

    let hours = addZero(today.getHours())
    let minutes = addZero(today.getMinutes())
    let seconds = addZero(today.getSeconds())

    let current_date = `${date}.${month}.${year} ${hours}:${minutes}:${seconds}`
    $("#infotext").text(current_date)
    setTimeout(updateClock, 1000);

}

function addZero(num) {
    return num < 10 ? `0${num}` : num
}

updateClock()
