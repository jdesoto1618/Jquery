
$(document).ready(function(){
  // $("#submit").click(function(){
  //   alert($("#question").val())
  // })
  $("#submit").click(function(){
    $("p").text($("#question").val())
    })
  $("#submit").click(function(){
    $("#question").val("")
  })
  $("#submit").click(function(){
    var a = ["Yup!", "Fuhgeddaboudit", "Maybe", "what would your mother do?",
    "what would an Australian do", "then do the opposite", "Go home","Get out!!!"]
    var p = Math.floor((Math.random()* 7))
    alert(a[p])
  })

})
