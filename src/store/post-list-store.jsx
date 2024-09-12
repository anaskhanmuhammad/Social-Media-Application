import { Children, createContext, useReducer } from "react";


const DEFAULT_CONTEXT = {postList: [], addPost: () => {}, addInitialPosts: () => {}, deletePost: () => {}};

export const PostList = createContext(DEFAULT_CONTEXT);

function PostListReducer(currPostList, action) {
    let newPostList = currPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter(post => post.id !== action.payload.postId)
    }
    else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList]
    }
    else if (action.type === 'ADD_POSTS') {
        newPostList = action.payload.posts;
        console.log(newPostList)
    }
    return newPostList;
}

function PostListProvider({children}) {

    const [postList, dispatchPostList] = useReducer(PostListReducer, []);

    function addPost(userId, postTitle, postBody, reactions, tags) {
        dispatchPostList({type: 'ADD_POST', payload: {id: Date.now(), title: postTitle, body: postBody, reactions: reactions, userId: userId, tags: tags}})
    };

    function addInitialPosts(posts) {
        console.log(posts)
        dispatchPostList({type: 'ADD_POSTS', payload: {posts}})
        
    };

    function deletePost(postId) {
        dispatchPostList({type: 'DELETE_POST', payload: {postId}})
    };

    return <PostList.Provider value={{postList: postList, addPost: addPost, deletePost: deletePost, addInitialPosts: addInitialPosts}}>{children}</PostList.Provider>
}

// const DEFAULT_POST_LIST = []



export default PostListProvider;