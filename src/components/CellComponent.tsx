import React from 'react';

import '../styles/Field.css'

interface CellProps {
    value: number | null
    color: string | undefined
}

const CellComponent = ({value, color}: CellProps) => {
    return (
        <div className={'field'} style={{backgroundColor: color}}>
            <span className={'field__number'}>{value}</span>
        </div>
    );
};

export default CellComponent;