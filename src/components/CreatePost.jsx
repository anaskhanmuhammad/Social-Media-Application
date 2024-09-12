import { useContext, useRef } from "react";
import { PostList as  PostListData} from "../store/post-list-store";

function CreatePost(params) {

    const { addPost } = useContext(PostListData)

    const UserIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const userId = UserIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(' ');

        UserIdElement.current.value = '';
        postTitleElement.current.value = '';
        postBodyElement.current.value = '';
        reactionsElement.current.value = '';
        tagsElement.current.value = '';

        addPost(userId, postTitle, postBody, reactions, tags);
    }

  return (
    <>
      <form className="create-post">

      <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter Your User ID
          </label>
          <input
            type="text"
            ref={UserIdElement}
            className="form-control"
            id="userId"
            placeholder="write the entire post here"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you feeling today"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            rows={4}
            ref={postBodyElement}
            className="form-control"
            id="body"
            placeholder="write the entire post here"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            How many people reacted to this post
          </label>
          <textarea
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            placeholder="write the no of reactions"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your tags here
          </label>
          <textarea
            type="text"
            rows={2}
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Enter all the tags with space"
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={(event) => handleSubmit(event)}>
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;
