//jshint esversion:6

exports.getDate = function () {
  const today = new Date(); // creates a Date object
  const options = { // creates an object containing our preferences for the format of our date
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options); // converts the date into an appropriate format using the options defined above and a locale



}

exports.getDay = function (){
  const today = new Date(); // creates a Date object
  const options = { // creates an object containing our preferences for the format of our date
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options); // converts the date into an appropriate format using the options defined above and a locale

}
