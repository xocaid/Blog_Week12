import { useState, useEffect } from 'react';

const BlogPost = () => {
  const [posts, setPosts] = useState([]);
  const [previewPost, setPreviewPost] = useState(true);


  //TOGGLE - View Blog Preview
  const handlePreviewPost = () => {
    setPreviewPost(!previewPost);
  };

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((response) => response.json())
      .then((singlePost) => {
        setPosts(singlePost);
      });
  }, []);
  {/* //around each card that has been mapped, set a state for current card and if current card == post 
  then just print out that one post, move ternary below return()
state that saves id, if id==post.id then print otherwise won't print...state to empty string, 
once you click set to specfic post id(would go with button) */}


  return (
    <div className='allposts'>

      {posts.map((post, index) => {
        return (
          <div className='post' key={index}>

            <p >{post.Text} </p>
            <p>{post.username} </p>
            <p>{post.time} </p>
            <button onClick={handlePreviewPost}>View more...</button>
            <br />
          </div>
        )
      }
      )}
    </div>
  );
}
export default BlogPost;


// return (
//   <div>

//     <div className='allposts'>

//       {posts.map((post, index) => {
//         return (
//           <div className='post' key={index}>
//             {previewPost ? (
//               <>
//                 <p >{post.Text} </p>
//                 <p>{post.username} </p>
//                 <p>{post.time} </p>
//                 <button onClick={handlePreviewPost}>View more...</button>
//                 <br />
//               </>
//             ) : (
//               <>
//                 <p>Testing</p>
//                 <button onClick={handlePreviewPost}>View more...</button>
//               </>
//             )}
//           </div>
//         )
//       }
//       )}
//     </div>

//   </div>
// );
// }
// export default BlogPost;