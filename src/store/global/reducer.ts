import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

import globalTypes from './type'
import { post } from '../../api/index'

export interface defaultStateI {
    posts: null | Array<post>,
}

const defaultState:defaultStateI = {
    posts: null,
}

const globalReducer = ( state = defaultState, action ) => {
    switch( action.type ){

        case globalTypes.SET_POSTS:
            {
                return {
                    ...state,
                    wposts: action.posts,
                }
            }
        default: {
            return state
        }
    }
}

export default globalReducer