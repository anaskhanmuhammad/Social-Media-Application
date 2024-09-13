import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as  PostListData} from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostList(params) {
    const {postList, addInitialPosts} = useContext(PostListData)

    const [fetching, setfetching] = useState(false)

    useEffect( () => {
        setfetching(true);

        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://dummyjson.com/posts', { signal })
        .then(res => res.json())
        .then(data => {
            addInitialPosts(data.posts);
            setfetching(false);
        });

        return () => {
            console.log("Cleaning the useEffect while the componenent is removing from the DOM");
            controller.abort();
        }
        
    }, [])



    

    const handleGetPost = () => {

    }

    return <>
    {fetching && <LoadingSpinner/>}
    {!fetching && postList.length === 0 && <center><WelcomeMessage onGetPostClick={handleGetPost}></WelcomeMessage></center>}
    {!fetching && postList.map((p) => <Post key={p.id} p={p}></Post>)}
        


    </>
}

export default PostList;