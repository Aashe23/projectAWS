document.addEventListener("DOMContentLoaded", function () {
  const MyForm = document.querySelector("form");

  MyForm.addEventListener('submit', function (output) {
    output.preventDefault();

    console.log(output); // Check if this logs

    const fetchedName = output.target[0].value;
    const fetchedEmail = output.target[1].value;
    const fetchedMessage = output.target[2].value;

    console.log("Name:", fetchedName);
    console.log("Email:", fetchedEmail);
    console.log("Message:", fetchedMessage);

    fetch("https://kbi8cu7o4e.execute-api.us-east-1.amazonaws.com/Development/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        name: fetchedName, 
        email: fetchedEmail, 
        message: fetchedMessage 
      })
    }).then(response => {
      console.log("Data sent to API:", response.status);
    }).catch(error => {
      console.error("Error sending data:", error);
    });
  });
});
