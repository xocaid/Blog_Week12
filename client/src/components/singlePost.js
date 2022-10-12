import PostId from "./postID";

const SinglePost = ({ singlePost }) => {

  return (
    <div className="card">
      <div className="card_image">
        <img src={singlePost.image} alt={singlePost.id}/>
        <PostId identification={singlePost.id} />
      </div>

      <div className="card_title">
        {singlePost.title}
      </div>
      <div className="card_author">
        <p>Author: {singlePost.author}</p>
        <p>{singlePost.date}</p>
      </div>
      <div className="card_body">
        <p>{singlePost.post}</p>
      </div>


    </div>
  )

}
export default SinglePost;