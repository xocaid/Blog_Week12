import BlogImage from "./blogImage";
import { useState } from "react";
const SinglePost = ({ singlePost }) => {

  //FLIPCARD
  const [flipPost, setFlipPost] = useState(true);

  //If Image is null in DB, set a default photo
  const [nullImage, setNullImage] = useState(null);

  //FLIPCARD
  const handleFlipPost = () => {
    setFlipPost(!flipPost)
  }


  return (
    <div className="singlePost">
      {flipPost ? (
        <div>
          <div className="card_image">
            <BlogImage img={singlePost.image ? singlePost.image : 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg'} alt={singlePost.id} />
          </div>

          <div className="card_title">
            {singlePost.title}
          </div>

          <div className="card_author">
            <p>Author: {singlePost.name}</p>
            <p>Date published: {new Date(singlePost.date).toLocaleString()}</p>
            {/* <p>Date published: {singlePost.date}</p> */}
          </div>

          <div className="card_body">
            <p>{singlePost.post.substring(0, 40)}...</p>
            {/* <p>{singlePost.post}</p> */}
            <button className='singlePost-btn' onClick={handleFlipPost}>Read More</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="card_image-full">
            <BlogImage img={singlePost.image ? singlePost.image : 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg'} alt={singlePost.id} />
          </div>
          <div className="card_body">
            <p>{singlePost.post}</p>
          </div>
          <button className='singlePost-btn' onClick={handleFlipPost}>Back</button>

        </div>
      )}
    </div>
  )

}
export default SinglePost;