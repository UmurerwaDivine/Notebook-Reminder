var chastine = function(one , two ){
 
}
$(document).ready(function(){

    $("form#test").submit(function(event){
      var chastine = parseInt($("input:radio[name=chastine]:checked").val());
      var chastine = parseInt($("input:radio[name=chastine]:checked").val());

      event.preventDefault();
       $(".final").show();