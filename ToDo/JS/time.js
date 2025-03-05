/* var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString(); */

  function updateDateTime() {
    var dt = new Date();

    // Format date as dd/mm/yyyy
    var day = String(dt.getDate()).padStart(2, '0');
    var month = String(dt.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    var year = dt.getFullYear();

    // Format time as hh:mm:ss
    var hours = String(dt.getHours()).padStart(2, '0');
    var minutes = String(dt.getMinutes()).padStart(2, '0');
    var seconds = String(dt.getSeconds()).padStart(2, '0');

    var formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    document.getElementById("datetime").innerHTML = formattedDateTime;
  }

  // Update the time every second
  setInterval(updateDateTime, 1000);

  // Initialize immediately
  updateDateTime();

