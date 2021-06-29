import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

import { post } from '../../src/api/index'
import Message from '../../src/components/message'
import Button from '../../src/components/button'

interface props {
    posts: Array<post>
}

function PostID({ posts }: props) {

    const [ post, setPost ] = useState(null)

    useEffect(() => {

        const post = posts.find((post:post) => post.id === +router.query.id)

        setPost(post)

    }, [posts])

    const router = useRouter()

    return (
        <div>
            <Button onClick={() => router.back()}> 
                Go back
            </Button>

            <Message post={post}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    posts: state.global.posts,
})

export default connect( mapStateToProps, null )( PostID )

PostID.getInitialProps = async (ctx) => {
    return {
        id: ctx.query.id
    }
}