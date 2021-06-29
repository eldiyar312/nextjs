import React from 'react'
import styled from 'styled-components'

export default function Button(props) {

    const Button = styled.button`
        background: ${props => props.primary ? "palevioletred" : "white"};
        color: ${props => props.primary ? "white" : "palevioletred"};
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        cursor: pointer;
    `;

    return(
        <Button {...props}>{props.children}</Button>
    )
}