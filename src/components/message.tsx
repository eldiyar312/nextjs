import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import Comments from './comments'

export default function Message({ post }, props) {
    
    const router = useRouter()

    // Create a Wrapper component that'll render a <section> tag with some styles
    const Message = styled.div`
        background: papayawhip;
        border: 1px solid black;
        border-radius: 40px;
        margin-top: .5rem;
        margin-bottom: .5rem;
        max-width: 60%;
        min-width: 20%;
        padding: 10px;
        cursor: pointer;
    `;

    const Title = styled.h3`
        text-align: center;
        color: palevioletred;
        
    `;

    const Body = styled.p`
        text-align: center;
        color: palevioletred;
    `;

    const pushHandle = () => {

        if( !post && !post.id ) return


        router.push({ pathname: '/posts/'+post.id })
    }

    return (
        <>
            {post && (post.title || post.body) ?
                <Message {...props} onClick={pushHandle}>
                    <Title>{post.title}</Title>
                    <Body>{post.body}</Body>
                    {post.comments ? <Comments comments={post.comments}/>:<></>}
                </Message>
                :<></>
            }
        </>
    )
}