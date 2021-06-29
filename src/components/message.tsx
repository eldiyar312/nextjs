import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import Comments from './comments'
import { post, requests } from '../api'
import Button from './button'
import { routes } from '../utils/routes'

interface props {
    post: post | null | undefined
}

export default function Message({ post }: props, props) {
    
    const router = useRouter()

    const [click, setClick] = useState(false)

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

    const removePost = async (id) => {
        
        await requests.deletePost(id)

        router.push({ pathname: routes.home })
    }

    const clickHandler = async () => {

        setClick(true)

        await removePost(post.id)

        setClick(false)
    }

    return (
        <>
            {post && (post.title.length || post.body.length) ?
                <Message {...props}>
                    <div onClick={pushHandle}>
                        <Title>{post.title}</Title>
                        <Body>{post.body}</Body>
                        {post.comments ? <Comments comments={post.comments}/>:<></>}
                    </div>
                    <div>
                        {
                            click ?
                            <h3>load ...</h3>
                            :
                            <Button onClick={clickHandler}>Delete</Button>
                        }
                    </div>
                </Message>
                :<></>
            }
        </>
    )
}