var moment = require('moment');
 
let date = moment().format("YYYY/MM/DD");
document.getElementById('date').innerHTML = date;
