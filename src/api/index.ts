import axios from 'axios'
import { action } from '../store'
import store from '../store/store'

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

const uri = 'https://simple-blog-api.crew.red'

/**
 * 
 * @param {boolean} update Для жёсткого обновления стейта
 * @returns {null || object} or
 */
const getPosts = async (update = false) => {

    const posts:Array<post> = store.getState().global.posts

    // если в стейте есть данные и не надо обновлять данные
    if( !update && posts ) return posts

    return await axios.get('/posts')
    .then( response => {

        if( response && response.data ){
            store.dispatch( action.global.setPosts(response.data.reverse()) )
        }

        return response.data
    })
    .catch( error => {

        console.log(error)

        return null
    })
}

const createPost = async (body: post) => {

    return await axios.post('/posts', body)
    .then( async response => {

        // жёстко обновляем данные
        await getPosts(true)

        return response.data
    })
    .catch( error => {

        console.log(error)

        return null
    })
}

const deletePost = async (postID: number) => {

    return await axios.delete(`/posts/${postID}`)
    .then( async response => {

        // жёстко обновляем данные
        await getPosts(true)

        return true
    })
    .catch( error => {

        console.log(error)

        return false
    })
}

export const requests = {
    createPost,
    getPosts,
    deletePost   
} 

axios.defaults.baseURL = uri;
axios.defaults.headers.post['Content-Type'] = 'application/json';