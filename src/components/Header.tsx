import React from 'react';
import Score from "./Score";
import '../styles/Header.css'

interface HeaderProps {
    reset: () => void
}


const Header = ({reset}: HeaderProps) => {
    return (
        <div className={'header'}>
            <Score />
            <button className={'reset-btn'} onClick={() => reset()}>Reset</button>
        </div>
    );
};

export default Header;