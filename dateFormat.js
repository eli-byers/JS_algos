var date = new Date("<%=quotes[i].created_at %>");
var hours = date.getHours();
var ampm = "am";
if (hours > 12){
hours -= 12;
ampm = "pm";
}
var min = date.getMinutes();
var month = date.getMonth() + 1;
switch (month) {
case 1: month = "January"; break;
case 2: month = "February"; break;
case 3: month = "March"; break;
case 4: month = "April"; break;
case 5: month = "May"; break;
case 6: month = "June"; break;
case 7: month = "July"; break;
case 8: month = "August"; break;
case 9: month = "September"; break;
case 10: month = "October"; break;
case 11: month = "November"; break;
case 12: month = "December"; break;
default: break;
}
var day = date.getDate();
var year = date.getFullYear();

var date_string = hours+":"+min+ampm+" "+month+" "+day+" "+year;

$("#<%= i %>").append(date_string);
