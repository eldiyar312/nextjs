import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

import { routes } from '../src/utils/routes'
import Message from '../src/components/message'
import { requests } from '../src/api'
import Button from '../src/components/button'

function Home({ posts }) {

    const router = useRouter()

    useEffect(() => {

        (async () => {
            await requests.getPosts()
        })()

    }, [])

    return (
        <Root>
            {posts && posts.length && posts.map(post => 
                <Message key={post.id} post={post}/>
            )}
            <StyledButton onClick={() => router.push(routes.createPost)}>new post +</StyledButton>
        </Root>
    )
}

const mapStateToProps = (state) => ({
    posts: state.global.posts,
})

export default  connect( mapStateToProps, null )( Home )

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const StyledButton = styled(Button)`
    position: absolute;
    right: 0;
    top: 0;
`