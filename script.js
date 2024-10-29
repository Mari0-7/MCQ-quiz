const questions = [
  {
    question: "Which syllable is typically stressed in two-syllable nouns?",
    answers: [
      { text: "First", correct: true },
      { text: "Second", correct: false },
      { text: "Both", correct: false },
      { text: "Neither", correct: false }
    ]
  },
  {
    question: "In two-syllable verbs, the stress is usually on the:",
    answers: [
      { text: "First syllable", correct: false },
      { text: "Second syllable", correct: true },
      { text: "Both syllables equally", correct: false },
      { text: "Depends on the word", correct: false }
    ]
  },
  {
    question: "Which ending often changes the stress pattern in a word?",
    answers: [
      { text: "-ed", correct: false },
      { text: "-ing", correct: false },
      { text: "-tion", correct: true },
      { text: "-ly", correct: false }
    ]
  },
  {
    question: "In words ending in -ic, the primary stress usually falls on the:",
    answers: [
      { text: "Syllable before the -ic", correct: true },
      { text: "Syllable with the -ic", correct: false },
      { text: "First syllable of the word", correct: false },
      { text: "Last syllable of the word", correct: false }
    ]
  },
  {
    question: "For words ending in -sion and -tion, the stress generally falls on:",
    answers: [
      { text: "The last syllable", correct: false },
      { text: "The syllable before the ending", correct: true },
      { text: "The first syllable", correct: false },
      { text: "The middle syllable", correct: false }
    ]
  },
  {
    question: "In three-syllable words ending in -ly, the stress usually falls on:",
    answers: [
      { text: "The first syllable", correct: true },
      { text: "The second syllable", correct: false },
      { text: "The third syllable", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "For words ending in -ate with three syllables, the stress is typically on the:",
    answers: [
      { text: "First syllable", correct: false },
      { text: "Second syllable", correct: true },
      { text: "Third syllable", correct: false },
      { text: "It varies", correct: false }
    ]
  },
  {
    question: "In compound nouns, the primary stress is usually on:",
    answers: [
      { text: "The first part", correct: true },
      { text: "The second part", correct: false },
      { text: "Both parts equally", correct: false },
      { text: "Neither part", correct: false }
    ]
  },
  {
    question: "In compound adjectives, the stress generally falls on:",
    answers: [
      { text: "The first part", correct: false },
      { text: "The second part", correct: true },
      { text: "Both parts equally", correct: false },
      { text: "It varies", correct: false }
    ]
  },
  {
    question: "Which syllable is stressed in the word 'photograph'?",
    answers: [
      { text: "First", correct: true },
      { text: "Second", correct: false },
      { text: "Third", correct: false },
      { text: "None", correct: false }
    ]
  },
  {
    question: "Which syllable is stressed in the word 'photography'?",
    answers: [
      { text: "First", correct: false },
      { text: "Second", correct: true },
      { text: "Third", correct: false },
      { text: "Fourth", correct: false }
    ]
  },
  {
    question: "For words ending in -ee, the stress typically falls on:",
    answers: [
      { text: "The first syllable", correct: false },
      { text: "The second syllable", correct: false },
      { text: "The third syllable", correct: false },
      { text: "The ending syllable", correct: true }
    ]
  },
  {
    question: "In words ending in -ese, the stress is usually on:",
    answers: [
      { text: "The first syllable", correct: false },
      { text: "The second syllable", correct: false },
      { text: "The ending syllable", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which syllable is stressed in the word 'develop'?",
    answers: [
      { text: "First", correct: false },
      { text: "Second", correct: true },
      { text: "Third", correct: false },
      { text: "Fourth", correct: false }
    ]
  },
  {
    question: "In the word 'development', the stress is on:",
    answers: [
      { text: "First syllable", correct: false },
      { text: "Second syllable", correct: false },
      { text: "Third syllable", correct: true },
      { text: "Fourth syllable", correct: false }
    ]
  },
  {
    question: "In compound verbs, the stress generally falls on:",
    answers: [
      { text: "The first part", correct: false },
      { text: "The second part", correct: true },
      { text: "Both parts equally", correct: false },
      { text: "It varies", correct: false }
    ]
  },
  {
    question: "Which syllable is stressed in the word 'engineer'?",
    answers: [
      { text: "First", correct: false },
      { text: "Second", correct: false },
      { text: "Third", correct: true },
      { text: "Fourth", correct: false }
    ]
  },
  {
    question: "For two-syllable adjectives, the stress usually falls on:",
    answers: [
      { text: "The first syllable", correct: true },
      { text: "The second syllable", correct: false },
      { text: "Both syllables equally", correct: false },
      { text: "Neither syllable", correct: false }
    ]
  },
  {
    question: "In three-syllable words ending in -ly, the stress typically falls on:",
    answers: [
      { text: "The first syllable", correct: true },
      { text: "The second syllable", correct: false },
      { text: "The third syllable", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which syllable is stressed in the word 'organization'?",
    answers: [
      { text: "First", correct: false },
      { text: "Second", correct: false },
      { text: "Third", correct: true },
      { text: "Fourth", correct: false }
    ]
  },
  {
    question: "In words with the -graphy ending, the primary stress is usually on:",
    answers: [
      { text: "The first syllable", correct: false },
      { text: "The second syllable", correct: false },
      { text: "The syllable before -graphy", correct: true },
      { text: "The -graphy part", correct: false }
    ]
  },
  {
    question: "Which syllable is stressed in the word 'academic'?",
    answers: [
      { text: "First", correct: false },
      { text: "Second", correct: false },
      { text: "Third", correct: false },
      { text: "Fourth", correct: true }
    ]
  },
  {
    question: "For two-syllable words that can be both nouns and verbs, the noun form is usually stressed on the:",
    answers: [
      { text: "First syllable", correct: true },
      { text: "Second syllable", correct: false },
      { text: "Both syllables equally", correct: false },
      { text: "It varies", correct: false }
    ]
  },
  {
    question: "In the word 'economics', the primary stress is on the:",
    answers: [
      { text: "First syllable", correct: false },
      { text: "Second syllable", correct: true },
      { text: "Third syllable", correct: false },
      { text: "Fourth syllable", correct: false }
    ]
  },
  {
    question: "Which syllable is stressed in the word 'democracy'?",
    answers: [
      { text: "First", correct: false },
      { text: "Second", correct: true },
      { text: "Third", correct: false },
      { text: "Fourth", correct: false }
    ]
  },
  {
    question: "In the word 'geography', the stress is on the:",
    answers: [
      { text: "First syllable", correct: false },
      { text: "Second syllable", correct: true },
      { text: "Third syllable", correct: false },
      { text: "Fourth syllable", correct: false }
    ]
  },{
    question: "Which syllable is stressed in the word 'recommend'?",
    answers: [
      { text: "First", correct: false },
      { text: "Second", correct: false },
      { text: "Third", correct: true },
      { text: "Fourth", correct: false }
    ]
  },
  {
    question: "In words ending in -ian, the primary stress is usually on:",
    answers: [
      { text: "The first syllable", correct: false },
      { text: "The second syllable", correct: false },
      { text: "The syllable before -ian", correct: true },
      { text: "The -ian part", correct: false }
    ]
  },
  {
    question: "Which syllable is stressed in the word 'communication'?",
    answers: [
      { text: "First", correct: false },
      { text: "Second", correct: false },
      { text: "Third", correct: false },
      { text: "Fourth", correct: true }
    ]
  },
  {
    question: "For words ending in -ment, the stress usually falls on:",
    answers: [
      { text: "The first syllable", correct: false },
      { text: "The second syllable", correct: false },
      { text: "The syllable before -ment", correct: true },
      { text: "The -ment part", correct: false }
    ]
  },
  {
    question: "Which consonant sound is often problematic for non-native speakers due to its similarity to /s/?",
    answers: [
      { text: "/θ/", correct: true },
      { text: "/ʃ/", correct: false },
      { text: "/ʒ/", correct: false },
      { text: "/ð/", correct: false }
    ]
  },
  {
    question: "Which of the following pairs includes a voiced and a voiceless consonant?",
    answers: [
      { text: "/p, b/", correct: false },
      { text: "/f, v/", correct: true },
      { text: "/t, d/", correct: false },
      { text: "/s, z/", correct: false }
    ]
  },
  {
    question: "The /ʒ/ sound is typically found in which word?",
    answers: [
      { text: "Vision", correct: true },
      { text: "Shine", correct: false },
      { text: "Chase", correct: false },
      { text: "Zigzag", correct: false }
    ]
  },
  {
    question: "Which consonant is problematic due to its presence in many English loanwords?",
    answers: [
      { text: "/ŋ/", correct: false },
      { text: "/ʧ/", correct: false },
      { text: "/ʤ/", correct: false },
      { text: "/ð/", correct: true }
    ]
  },
  {
    question: "Non-native speakers often confuse /v/ with which other consonant sound?",
    answers: [
      { text: "/w/", correct: true },
      { text: "/b/", correct: false },
      { text: "/p/", correct: false },
      { text: "/d/", correct: false }
    ]
  },
  {
    question: "Which consonant sound can be problematic because it does not exist in many other languages?",
    answers: [
      { text: "/h/", correct: true },
      { text: "/r/", correct: false },
      { text: "/l/", correct: false },
      { text: "/ʃ/", correct: false }
    ]
  },
  {
    question: "Which of the following consonants is a palatal sound?",
    answers: [
      { text: "/k/", correct: false },
      { text: "/g/", correct: false },
      { text: "/ʃ/", correct: true },
      { text: "/ʧ/", correct: false }
    ]
  },
  {
    question: "The /r/ sound in English is difficult for speakers of which language group?",
    answers: [
      { text: "Romance languages", correct: false },
      { text: "Germanic languages", correct: false },
      { text: "Asian languages", correct: true },
      { text: "Slavic languages", correct: false }
    ]
  },
  {
    question: "Which of the following words contains a problematic consonant for non-native English speakers?",
    answers: [
      { text: "Think", correct: true },
      { text: "Sing", correct: false },
      { text: "Bring", correct: false },
      { text: "Cling", correct: false }
    ]
  },
  {
    question: "Which consonant is known for its tap or flap articulation in American English?",
    answers: [
      { text: "/t/", correct: true },
      { text: "/d/", correct: false },
      { text: "/r/", correct: false },
      { text: "/ʃ/", correct: false }
    ]
  },
  {
    question: "Which consonant sound is problematic due to its similarity to /t/?",
    answers: [
      { text: "/ʧ/", correct: false },
      { text: "/d/", correct: true },
      { text: "/k/", correct: false },
      { text: "/p/", correct: false }
    ]
  },
  {
    question: "The /w/ sound can be difficult for speakers of which language due to its absence?",
    answers: [
      { text: "French", correct: false },
      { text: "Spanish", correct: false },
      { text: "Japanese", correct: true },
      { text: "German", correct: false }
    ]
  },
  {
    question: "Which consonant is often substituted with /d/ by non-native speakers?",
    answers: [
      { text: "/ð/", correct: true },
      { text: "/ʤ/", correct: false },
      { text: "/tʃ/", correct: false },
      { text: "/θ/", correct: false }
    ]
  },
  {
    question: "Which sound is often problematic because it is produced with the back of the tongue against the velum?",
    answers: [
      { text: "/k/", correct: false },
      { text: "/g/", correct: false },
      { text: "/ŋ/", correct: true },
      { text: "/h/", correct: false }
    ]
  },
  {
    question: "The /ʃ/ sound in English is often confused with which sound by non-native speakers?",
    answers: [
      { text: "/s/", correct: true },
      { text: "/ʒ/", correct: false },
      { text: "/z/", correct: false },
      { text: "/tʃ/", correct: false }
    ]
  },
  {
    question: "Which sound is problematic because it is not present in Spanish?",
    answers: [
      { text: "/v/", correct: false },
      { text: "/θ/", correct: true },
      { text: "/h/", correct: false },
      { text: "/ŋ/", correct: false }
    ]
  },
  {
    question: "Which of the following consonants is often confused with /d/ by Japanese speakers?",
    answers: [
      { text: "/t/", correct: false },
      { text: "/r/", correct: true },
      { text: "/l/", correct: false },
      { text: "/n/", correct: false }
    ]
  },
  {
    question: "Which consonant is known to be difficult for Arabic speakers due to its absence in Arabic?",
    answers: [
      { text: "/p/", correct: true },
      { text: "/b/", correct: false },
      { text: "/f/", correct: false },
      { text: "/v/", correct: false }
    ]
  },
  {
    question: "Which of the following sounds is problematic due to its aspirated nature in English?",
    answers: [
      { text: "/k/", correct: false },
      { text: "/g/", correct: false },
      { text: "/t/", correct: true },
      { text: "/d/", correct: false }
    ]
  },
  {
    question: "The /dʒ/ sound is found in which word and often problematic for non-native speakers?",
    answers: [
      { text: "Judge", correct: true },
      { text: "Jelly", correct: false },
      { text: "Gym", correct: false },
      { text: "Giant", correct: false }
    ]
  },
  {
    question: "Which sound is problematic because it is produced with both the upper teeth and the lower lip?",
    answers: [
      { text: "/v/", correct: true },
      { text: "/f/", correct: false },
      { text: "/b/", correct: false },
      { text: "/m/", correct: false }
    ]
  },
  {
    question: "Which of the following consonants is typically voiced?",
    answers: [
      { text: "/s/", correct: false },
      { text: "/z/", correct: true },
      { text: "/t/", correct: false },
      { text: "/ʃ/", correct: false }
    ]
  },
  {
    question: "Which consonant is often substituted with /s/ by non-native speakers?",
    answers: [
      { text: "/ʃ/", correct: true },
      { text: "/ʒ/", correct: false },
      { text: "/tʃ/", correct: false },
      { text: "/dʒ/", correct: false }
    ]
  },
  {
    question: "Which consonant is often replaced by /b/ by native Spanish speakers?",
    answers: [
      { text: "/v/", correct: true },
      { text: "/f/", correct: false },
      { text: "/p/", correct: false },
      { text: "/t/", correct: false }
    ]
  },
  {
    question: "The /r/ sound in British English can be problematic for speakers of which language due to its rhotic nature?",
    answers: [
      { text: "French", correct: false },
      { text: "German", correct: false },
      { text: "Russian", correct: false },
      { text: "Japanese", correct: true }
    ]
  },
  {
    question: "Which consonant sound can be challenging because it requires tongue curling?",
    answers: [
      { text: "/l/", correct: false },
      { text: "/r/", correct: true },
      { text: "/tʃ/", correct: false },
      { text: "/dʒ/", correct: false }
    ]
  },
  {
    question: "Which of the following is a voiced postalveolar fricative?",
    answers: [
      { text: "/ʃ/", correct: false },
      { text: "/ʒ/", correct: true },
      { text: "/s/", correct: false },
      { text: "/z/", correct: false }
    ]
  },
  {
    question: "Which sound is often confused with /l/ by Korean speakers?",
    answers: [
      { text: "/r/", correct: true },
      { text: "/w/", correct: false },
      { text: "/v/", correct: false },
      { text: "/z/", correct: false }
    ]
  },
  {
    question: "Which consonant sound does not exist in many other languages, making it difficult for non-native speakers?",
    answers: [
      { text: "/ʒ/", correct: false },
      { text: "/θ/", correct: true },
      { text: "/ð/", correct: false },
      { text: "/ŋ/", correct: false }
    ]
  },
  {
    question: "The /tʃ/ sound is typically found in which word and is often problematic for non-native speakers?",
    answers: [
      { text: "Church", correct: true },
      { text: "Shirt", correct: false },
      { text: "Push", correct: false },
      { text: "Batch", correct: false }
    ]
  }  
  ];
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  let currentQuestionIndex = 0;
  let score = 0;
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  const shuffledArray = shuffleArray(questions);
  function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
  }
  function refreshPage(){
    window.location.reload();
} 
  function showQuestion(){
  resetState();
  let currentQuestion = shuffledArray[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ", " + currentQuestion.question;
  currentQuestion.answers.forEach(answer => {
  const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButtons.appendChild(button);
  if(answer.correct){
  button.dataset.correct = answer.correct;
  }
  button.addEventListener("click",selectAnswer);
  });
  }
  function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
  answerButtons.removeChild(answerButtons.firstChild)
  }
  }
  
  function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
  selectedBtn.classList.add("correct");
  score++;
  }else{
  selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
  if(button.dataset.correct === "true"){button.classList.add("correct");
  }
  button.disabled = true;
  });
  nextButton.style.display = "block";
  }
  
  function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${shuffledArray.length}!`;
  nextButton.innerHTML = "Play again";
  nextButton.style.display = "block";
  }
  
  function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < shuffledArray.length){
  showQuestion();
  }else{
  showScore();
  }
  }
  
  nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < shuffledArray.length){
  handleNextButton();
  }else{
  startQuiz();
  }
  });
  startQuiz();