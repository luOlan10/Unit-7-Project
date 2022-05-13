$("button").click(function() {
    let Q1 = $(".questiononeinput").val();
    $(".fortune-display").append("By the end of " + Q1 + " ");


    let Q2 = $(".questiontwoinput").val();
    let a = (Q1 - 2022) * (Q2 * 12);
    $(".fortune-display").append("consistenly speading " + " " + a + " " + "a month");

    let questionthreeinput = $(".questionthreeinput").val();
    $(".fortune-display").append(" " + "on" + " " + questionthreeinput);
});