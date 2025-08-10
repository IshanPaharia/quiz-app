import { useState } from "react";
import Results from "./Results";

const Quiz = () => {
    const qBank = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "What is the capital of Germany?",
            options: ["Paris", "Delhi", "Berlin", "Rome"],
            answer: "Berlin"
        },
        {
            question: "What is the capital of Italy?",
            options: ["New York", "Nagpur", "Berlin", "Rome"],
            answer: "Rome"
        }
    ]

    const initialAnswers = new Array(qBank.length).fill(null)

    const [userAnswers, setUserAnswers] = useState(initialAnswers)

    const [index, setIndex] = useState(0)

    const selectedAnswer = userAnswers[index]

    function handleSelectOption(option) {
        const newUserAnswer = [...userAnswers]
        newUserAnswer[index] = option
        setUserAnswers(newUserAnswer)
    }

    function handlePrevious() {
        setIndex(index-1)
    }

    function handleNext() {
        setIndex(index+1)
    }

    if(index === qBank.length) {
        return <Results  qBank={qBank} userAnswers={userAnswers} handleRestart={handleRestart}/>
    }

    function handleRestart() {
        setUserAnswers(initialAnswers)
        setIndex(0)
    }

    return <div>
        <h2>Question {index+1}</h2>
        <p className="question">{qBank[index].question}</p>
        {qBank[index].options.map((option) => (
            <button className={"option" + (selectedAnswer === option ? " selected" : "")} onClick={() => (handleSelectOption(option))}>{option}</button>
        ))}

        <div className="nav-buttons">
            <button onClick={handlePrevious} disabled={index === 0}>Previous</button>
            <button onClick={handleNext} disabled={!selectedAnswer}>{index === qBank.length-1 ? "Submit" : "Next"}</button>
        </div>
    </div>
}

export default Quiz;