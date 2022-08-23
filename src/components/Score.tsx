import React, { useContext} from 'react';
import '../styles/Score.css'
import {ScoreContext} from "../ScoreContext";


const Score = () => {
    const score = useContext(ScoreContext)

    return (
        <div className={'score-main'}>
            <span className={'score-main__text'}>Score</span>
            <span className={'score-main__score'}>{score}</span>
        </div>
    );
};

export default Score;