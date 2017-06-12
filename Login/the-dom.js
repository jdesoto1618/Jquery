var counter = 0;
$(document).ready(function() {
  $("button").click(function(){
    // alert($("#un").val() + " " + $("#pw").val())
    var user = $("#un").val();
    var pw = $("#pw").val();
    const unConstraint = /^(?!.*\d)(?=.*[a-zA-Z])(?!.*[!@#$%^&*])(?!.*\s).{6,15}$/;
    const constraint = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{6,15}$/;
    if (user.match(unConstraint)) {
      $("p").text("Your User ID is valid");
    } else {
      $("p").text("Your User ID is invalid");
      $("#un").val("");
      // counter++;
    }
    if (pw.match(constraint)) {
      $("p").append("<br/>").append("Your Password is valid")
    } else {
      $("p").append("<br/>").append("Your Password is invalid");
      $("#pw").val("");
    }
    counter+=1;
    console.log(counter);
    if (counter >= 3) {
      $("button").off("click")
      $("p").text("You've exceeded login attempts")
    }
  })
  })
