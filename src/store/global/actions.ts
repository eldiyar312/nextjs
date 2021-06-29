import globalTypes from './type'
import { post } from '../../api/index'

export const setPosts = ( posts: post | null ) => {
  return {
    type: globalTypes.SET_POSTS,
    posts
  }
}
