import React from 'react';
import './Question.css'; // Create and import a CSS file for styling

const Question = ({ question, onAnswerClick }) => {
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <div className="answers">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => onAnswerClick(answer.isCorrect)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
