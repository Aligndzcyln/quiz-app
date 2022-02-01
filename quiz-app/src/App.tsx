import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions } from './API';
import { Difficulty } from './API';

const totalQuestions = 10;

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setuserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setgameOver] = useState(true);

  console.log(fetchQuizQuestions(totalQuestions, Difficulty.EASY))
  

  const startTrivia = async () => {

  }
  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {
    
  }
  const nextQuestion = () => {
    
  }
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading questions...</p>
      {/* <QuestionCard
      questionNumber={number + 1}
      totalQuestions={totalQuestions}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
