import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { requests } from '../../src/api'
import Button from '../../src/components/button'
import { routes } from '../../src/utils/routes'

export default function New() {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const router = useRouter()

    const titleHandler = e => {
        setTitle(e.target.value)
    }
    const bodyHandler = e => {
        setBody(e.target.value)
    }

    const cretePost = async () => {

        if( !title && !body ) return

        const data = { title, body }

        await requests.createPost(data)

        router.push(routes.home)
    }

    return (
        <div>
            <Button onClick={() => router.back()}> 
                Go back
            </Button>

            <AddBlock>
                <span>
                    <p>title: <input value={title} onChange={titleHandler} /></p>
                    <p>body: <textarea value={body} onChange={bodyHandler}/></p>
                </span>
                <Button onClick={cretePost}> 
                    add +
                </Button>
            </AddBlock>
        </div>
    )
}

const AddBlock = styled.div`
    display: flex;
    justify-content: center;
`