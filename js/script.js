$(document).ready(function(){
$(".formbg").submit(function(event){
  var email= $("input.form-control").val();
  alert("Thank you " +email+ " for subscribing");
  event.preventDefault();
});
});
