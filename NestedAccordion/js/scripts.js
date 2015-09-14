// Sort out a specific class
// Use that class to apply Javascript
// Create JavaScript code that can drop down additional text when clicked
// Insert class into a function executing the above
// Make it work

// var heading = document.querySelectorAll('h3.cbp-nttrigger');
//
// for (var i = 0; i < heading.length; i++) {
// //loops through the nodelist for class cbp-nttrigger
//  heading[i].addEventListener('click', function(){
//
//      var openAcc = document.querySelectorAll("li.cbp-ntopen");
//      if (openAcc.length > 0){
//        for (var i=0; i<openAcc.length; i++) {
//          openAcc[i].className= "";
//        };
//
//      } else{
//        document.querySelectorAll("li").className= "cbp-ntopen";
//      };
//
//    });
//
// };

//Working code:

// WORKS FOR BOTH OPEN AND CLOSE

// var heading = document.querySelector('.cbp-nttrigger');
//
// heading.addEventListener('click', function(){
//  if (document.querySelector("li").className === "cbp-ntopen"){
//    document.querySelector("li").className= "";
//  } else{
//    document.querySelector("li").className= "cbp-ntopen";
//  };
//
// });

// DOM needed:
//* _`getElementsByClass`_
//* _`.pop`_ and _`.push`_ possibly?

var heading - document.querySelectorAll('h3.cbp-nttrigger');

// loops through the nodelist for class cbp-nttrigger

heading[i].addEventListener('click', function(){
  var openAcc - document.querySelectorAll("li.cbp-ntopen");
  if (openAcc.length > 0){
    for (var i=0; i<openAcc.length; i++) {
    openAcc[i].className= "";
  }

  } else{
    document.querySelectorAll("li").className= "cbp-ntopen";
  };

 });
};
