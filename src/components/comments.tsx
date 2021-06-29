import React from 'react'
import styled from 'styled-components'

export default function Comments({ comments }) {

    // Create a Wrapper component that'll render a <section> tag with some styles
    const CommentsBlock = styled.div`
        border: 1px solid black;
        border-radius: 40px;
        margin-top: .5rem;
        margin-bottom: .5rem;
        max-width: 60%;
        padding: 5px;
    `;

    const Body = styled.p`
        text-align: center;
        color: black;
    `;


    return (
        <>
            {comments && comments.length ? comments.map(comment => 
                {return comment.body ?
                    <CommentsBlock>
                        <Body>{comment.body}</Body>
                    </CommentsBlock>
                    :<></>
                }
            )
            : <></>
        }
        </>
    )
}