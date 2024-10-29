# MCQ-quiz
A website to make a simple MCQ quiz.

The website prompts a question that's randomly chosen from a number of questions, and then provides 4 answers with 1 of them being the correct one highlighted in green.
In case the user chooses a wrong answer, the right answer will be highlighted in green, while the incorrect one would be in red.
After completing the quiz, a total score will be displayed providing a metric of how well you've done, and an option to go again.
If you decide to go again, you'll be prompted to the questions in different order and the answers will be in a different order as well, that way you won't be able to memorise the questions' order nor their answers.

If you wish to change or add questions and their answers, simply change the value of the questions and the answers inside the "const questions" in the JS file, and voila!

Example snippet:
```
{
    question: "//insert question here",
    answers: [
      { text: "//Insert Answer1", correct: //determine whether it's the correct answer (true) or not (false) },
      { text: "//Insert Answer2", correct: true },
      { text: "//Insert Answer3", correct: false },
      { text: "//Insert Answer4", correct: false }
    ]
  },
```
