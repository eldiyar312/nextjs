import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { routes } from '../src/utils/routes'
import Message from '../src/components/message'
import { requests } from '../src/api'
import Button from '../src/components/button'
import store from '../src/store/store'

function Home({ posts }) {

    const router = useRouter()

    return (
        <Root>
            {posts && posts.length && posts.map(post => 
                <Message key={post.id} post={post}/>
            )}
            <StyledButton
                onClick={() => router.push(routes.createPost)}
            >
                new post +
            </StyledButton>
        </Root>
    )
}

export async function getServerSideProps(context) {

    const posts = await requests.getPosts()

    return {
        props: { posts }
    }
}

export default Home

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