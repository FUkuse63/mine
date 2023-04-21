const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent default form submission

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const date = document.getElementById("date").value;

  // Create workbook and worksheet
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet([{ Name: name, Email: email, Phone: phone, Address: address, Date: date }]);

  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, "Bookings");

  // Export workbook as Excel file
  XLSX.writeFile(workbook, "bookings.xlsx", { bookType: "xlsx", type: "binary" });

  // Display success message
  alert("Booking submitted successfully!");
  bookingForm.reset(); // Reset form
});
