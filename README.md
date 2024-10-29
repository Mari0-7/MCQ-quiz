# MCQ-quiz
A website to make a simple MCQ quiz.

You can try it [here](https://mcqquiz-test-1b1ab1.netlify.app/).

## Key Features:
### 1. Quiz app with a simple layout
### 2. Randomises questions and answers each time you access the site
### 3. A tally of your score and an option to go again at the end.

## How to use:
The website prompts a question that's randomly chosen from a number of questions, and then provides 4 answers with 1 of them being the correct one highlighted in green.
In case the user chooses a wrong answer, the right answer will be highlighted in green, while the incorrect one would be in red.
After completing the quiz, a total score will be displayed providing a metric of how well you've done, and an option to go again.
If you decide to go again, you'll be prompted to the questions in different order and the answers will be in a different order as well, that way you won't be able to memorise the questions' order nor their answers.

## Modification:
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
