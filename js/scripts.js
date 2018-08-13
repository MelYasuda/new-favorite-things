$(document).ready(function(){
  $("#list1").submit(function(event){
  event.preventDefault();
    var list1Input = $("input#favorite1").val();
    var list2Input = $("input#favorite2").val();
    var list3Input = $("input#favorite3").val();
    var list4Input = $("input#favorite4").val();

    var favThings = [];
    favThings.push(list1Input, list2Input, list3Input, list4Input);
    $("#liOne").text(favThings[1]);
    $("#liTwo").text(favThings[0]);
    $("#liThree").text(favThings[2]);
    $("#liFour").text(favThings[3]);
    $("#textOutput").show();
    // $("#textOutput").text(favThings);
  });
});
