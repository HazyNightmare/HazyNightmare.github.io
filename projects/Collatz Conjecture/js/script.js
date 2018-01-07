// Init the count var that will hold the total number of steps it takes to get to 1
var count = 0;

// Grab the elements with jQuery when the page loads so they only need to be gotten once. Saves on load time and time later on
var submitButton = $("#submit"),
    tableBody = $(".tbody"),
    tableHStep = $(".tstep"),
    tableHResult = $(".tresult");

// Main function to calculate the Collatz Conjecture
function Collatz (number) {
  // Helps cut down on errors
  'use strict';
  // Increase the steps number to keep track of what step the function is on
  count += 1;

  // Disable the button so the user can't send multiple requests and crash their browser
  $(submitButton).addClass("disabled");
  // Add the step number and result number to the table. Using .append() so each one is on a new table row
  $(tableBody).append("<tr class=\"tableRow\"><td>" + count + "</td><td>" + number + "</td></tr>");

    // If the number is greater than 1 -- First Rule of Collatz Conjecture
    if (number > 1) {
      // If the number DOESN'T have a remainder after dividing by 2, the number must be even
      if (number % 2 === 0) {
        // Since we know the number is even, divide by 2
        number /= 2;
        // Now that we have a result, send the result into the Collatz function to processed down further
        Collatz(number);
      }
      // If the number DOES have a remainder after dividing by 2, the number must be odd
      else if (number % 2 !== 0) {
        // Since we know the number is odd, multiply by 3 and then add 1
        number = (number * 3) + 1;
        // Now that we have a result, send the result into the Collatz function to processed down further
        Collatz(number);
      }
      // If it's neither even, odd, nor 1, there must be an error on the client's side
      else {
        alert("There was an error. Make sure that JavaScript is enabled on the page and then try again.");
      }
    }
    // If the number is equal to 1, adjust the table header to have the total number of steps and final number
    else if (number <= 1) {
      $(tableHStep).text("Step          Total = " + count);
      $(tableHResult).text("Result          Final = " + number);
    }
    // Backup error catch
    else {
      alert("There was an error. Make sure that JavaScript is enabled on the page and then try again.");
    }
  // Set the count back to zero so the next test starts counting the steps at zero
  count = 0;
  // Remove the diabled class from the button so it can be used again to test
  $(submitButton).removeClass("disabled");
}

// When the test button is clicked, call an anonymous function
$(submitButton).click(function() {
  // Create a reference to the number in the input that the user can change
  var testNum = $("#number-to-test").val();
  // Remove any table rows from a previous test
  // If this is removed, the table will grow and contain the data from every test taken
  $(tableBody).children().remove(".tableRow");
  // Call the Collatz function with the user's number as an arg and will be processed in the function from there
  Collatz(testNum);
});
