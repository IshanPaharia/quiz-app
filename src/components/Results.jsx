const Results = ({qBank, userAnswers, handleRestart}) => {

    function calcScore() {
        let score = 0;
        // for (let i = 0; i < qBank.length; i++) {
        //     if(qBank[i]===userAnswers[i])
        //         score++;
        // }
        userAnswers.forEach((answer, index) => {
            if(answer === qBank[index].answer)
                score++;
        });
        return score
    }

    const score = calcScore();


    return <div>
        <h2>Quiz Completed</h2>
        <p>Your Score: {score}/{qBank.length}</p>
        <button className="restart-button" onClick={handleRestart}>Restart the quiz</button>
    </div>
}

export default Results;