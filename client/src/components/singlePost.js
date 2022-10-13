import PostId from "./postID";
import { useState } from "react";

const SinglePost = ({ singlePost }) => {

  //FLIPCARD
  const[flipCard, setFlipCard] = useState(true);


  //FLIPCARD
const handleFlipCard = () => {
  setFlipCard(!flipCard)
}


  return (
    <div className="card">
      {flipCard ? (
        <div>
      <div className="card_image">
        <img src={singlePost.image} alt={singlePost.id} />
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
        <button id="my-btn" onClick={handleFlipCard}>View More</button>
      </div>
      </div>
      ):(
        <div>
        <p>Testing</p>
        </div>
      )}
    </div>
  )

}
export default SinglePost;