/**
 * Constants
* */
export const moduleName = 'post';
export const appName = 'ssr';
const prefix = `${appName}/${moduleName}`;

export const SET_POSTS = `${prefix}/SET_POSTS`;

/**
* Reducer
* */
const initialState = {
    posts: null 
}
  
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
      default:
        return state
    }
  }
/**
 * Selectros
*/
/**
 * Custom Hooks
*/
/**
 * Action Creators
* */
export const setPosts = (posts) => ({
    type: SET_POSTS,
    posts
})
/**
 * Sagas
*/