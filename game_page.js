player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score =0;
player2_score =0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML =player2_score;
document.getElementById("player2_name").innerHTML = player2_score;

document.getElementById("player_question").innerHTML =  "Question turn -" + player1_name;
document.getElementById("player_answer").innerHTML =  "Answer turn -" + player2_name;

function send() {
 number_1=   document.getElementById("number_1").value;
 number_2=   document.getElementById("number_2").value;
 actual_answer= parseInt(number_1) * parseInt(number_2);
 question_word = "<h4 id='word_display'>"+number_1+"X"+number_2+"</h4>";
 input_box = "<br>Answer: <input type=''text id='input_checkbox'>";
 check_button ="<br> <br> <button onclick='check()' class='btn btn-info'>Check</button>";
 row=question_word + input_box +check_button;
 document.getElementById("output").innerHTML=row;
 document.getElementById("number_1").value="";
 document.getElementById("number_2").value="";
}