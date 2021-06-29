import React from 'react'
import { useRouter } from 'next/router'

import { post, requests } from '../../src/api/index'
import Message from '../../src/components/message'
import Button from '../../src/components/button'
import { routes } from '../../src/utils/routes'

interface props {
    post: post | null | undefined
}

function PostID({ post }: props ) {

    const router = useRouter()

    return (
        <div>
            <Button onClick={() => router.push(routes.home)}> 
                Go home
            </Button>

            <Message post={post}/>
        </div>
    )
}

export async function getServerSideProps(ctx) {

    const posts = await requests.getPosts()

    // == потому что id по разному бывает ('xsf-sd', '1', '3', '7v')
    const post = posts.find((post:post) => post.id == ctx.query.id)

    return {
        props: {post}
    }
}

export default PostID