import axios from 'axios'
import { action } from '../store'
import store from '../store/store'

const uri = 'https://simple-blog-api.crew.red'

const getPosts = async (update = false) => {

    const posts = store.getState().global.posts

    if( !update && posts ) return posts

    return await axios.get('/posts')
    .then( response => {

        if( response && response.data ){
            store.dispatch( action.global.setPosts(response.data) )
        }

        return response.data
    })
    .catch( error => {

        console.log(error)

        return null
    })
}

interface comment {
    id: number,
    postId: number,
    body: string
}

export interface post {
    id?: number,
    title: string,
    body: string,
    comments?: Array<comment>
}

const createPost = async (body: post) => {

    return await axios.post('/posts', body)
    .then( response => {

        if( response && response.data ){
            store.dispatch(action.global.setPosts(response.data))
        }

        return response.data
    } )
    .catch( error => {

        console.log(error)

        return null
    })
}

export const requests = {
    createPost,
    getPosts
} 

axios.defaults.baseURL = uri;
axios.defaults.headers.post['Content-Type'] = 'application/json';