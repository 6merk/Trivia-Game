function check(){


var question 1 = document.quiz.question1.value;
var question 2 = document.quiz.question2.value;
var question 3 = document.quiz.question3.value;
var question 4 = document.quiz.question4.value;
var question 5 = document.quiz.question5.value;
var question 6 = document.quiz.question6.value;
var correct=0;
	
	if (question1=="Antarctica"){
		correct++;
	}
	if (question2=="Hypertext Transfer Protocol Secure"){
		correct++;
	}
	if (question3=="Ronald Reagan"){
		correct++;
	}
	if (question4=="Vitamin D"){
		correct++;
	}
	if (question5=="1976"){
		correct++;
	}
	if (question6=="Labrador Retriever"){
		correct++;
	}



document.getElementById("after_submit").style.visibility="visible";
document.getElementById("number_correct").innerHTML="You got " + correct + " correct.";

}


function myTimer() {
    alert('Game Over!');
}