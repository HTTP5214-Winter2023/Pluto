
var index;
var tests=[];
var answer;
$(function() {
    $.getJSON("./tests.json", loadTests);
    $("#error").hide();
    $("#answer_form").on("submit", function( event ){
        event.preventDefault();
        $("#error").hide();

        console.log($("#answer").val());
        if($("#answer").val() == tests[index].answer || !tests[index].answer){
            index++;
            loadTest();
        } 
        else {
            $("#error").fadeIn("fast","linear");

        }
        console.log(event);
    })
})

function loadTests(data) {
    tests=data.tests;
    index=3;
    loadTest();

}

function loadTest(){

    console.log(tests[index]);
    render(tests[index])
}

function render(test){
    $("#error").hide();
    if(!test.answer) $("#answer").hide();
    else $("#answer").show();

    $("#title").html(test.title);

    $("#content").html(test.content);
    $("#leadingVar").html(test.leadingVar);
    
    $("#answer").val( null );

    
}