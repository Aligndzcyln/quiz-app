import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <div>
      <div className="number">
        Question: {questionNumber} / {totalQuestions}
      </div>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {
            answers.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default QuestionCard;
