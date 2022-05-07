import React from 'react';

import './Btn.css';

interface Props {
    text: string;
}

export const Btn = (props: Props) => (
    <button>{props.text}</button>
);
