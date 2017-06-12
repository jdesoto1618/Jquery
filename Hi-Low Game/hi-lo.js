$(document).ready(function(){
  // $(".submit").click(function() {
  //   var counter = 0;
  //   counter++;
  // })
  var comp = (Math.floor(Math.random()*50)+1);
  console.log(comp);
  var counter = 1;
  $(".submit").click(function() {
      var userGuess = $("input").val()
      // $("p").text(userGuess)
        if (userGuess < comp && counter <= 4) {
          $(".answers").append(userGuess + " is too low!").append("<br/>")
          $(".input").val("")
          counter++;
        } else if(userGuess > comp && counter <= 4) {
          $(".answers").append(userGuess + " is too high!").append("<br/>")
          $(".input").val("")
          counter++;
        } else if (userGuess == comp && counter <= 4) {
          $("p").text("You guessed the number!!!")
          $(".input").val("")
        } else if (userGuess != comp && counter > 4) {
          $("p").text("You ran out of tries")
          $(".input").val("")
          $(".submit").hide()
          $(".input").hide()
        }
        if (counter > 4) {
          $(".answers").css("color","red")
        }

  })
})

//
//
//
// function hiLow () {
//   var counter = 0;
//   var comp = (Math.floor(Math.random()*50)+1);
//   var userGuess = prompt("Guess a number from 1 to 50");
//   console.log(comp)
//   do {
//     if (userGuess < comp) {
//       console.log(userGuess + " was too low!")
//       userGuess = prompt("Guess a number from 1 to 50");
//       counter++;
//     } else if(parseInt(userGuess) > comp) {
//       console.log(userGuess + " was too high!");
//       userGuess = prompt("Guess a number from 1 to 50");
//       counter++;
//     }
//   } while (userGuess != comp && counter <= 4);
//   if (userGuess == comp) {
//     console.log("You guessed the number!!!")
//   } else if (userGuess != comp) {
//     console.log("You ran out of tries")
//   }
// }
