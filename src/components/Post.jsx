import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as  PostListData} from "../store/post-list-store";

function Post({p}) {

    console.log(p)
    const { deletePost } = useContext(PostListData)


  return (
    <>
        
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">{p.title} 
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDelete onClick={() => deletePost(p.id)}></MdDelete>
            </span>
          </h5>
          <p className="card-text">
            {p.body}
          </p>
          {p.tags.map((t) => <span key={t} className="badge text-bg-primary hashtag">{t}</span>)}
          <div class="alert alert-success reactions" role="alert">
            This Post has been reacted by {p.reactions.likes} People
        </div>
        </div>
      </div>
    </>
  );
}

export default Post;
