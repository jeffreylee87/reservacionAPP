$("#add-btn").on("click", function(event) {
    event.preventDefault();

    var newReservation = {
      customerName: $("#reserve-name").val().trim(),
      phoneNumber: $("#reserve-phone").val().trim(),
      customerEmail: $("#reserve-email").val().trim(),
      customerID: $("#reserve-id").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/tables", newReservation)
      .then(function(data) {
        console.log(data);
        alert("Adding reservation...");
      });

  });