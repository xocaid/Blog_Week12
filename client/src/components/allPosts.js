import { useState, useEffect } from 'react';



function BlogPost() {
  const [posts, setPosts] = useState([]);

  //Added for curentContact useState


  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((response) => response.json())
      .then((singlePost) => {
        setPosts(singlePost);
      });
  }, []);


  return (
    <div className='allposts'>
      {posts.map((post) => {
        { console.log(post) }
        return (
          <div className='post'>

            <p>{post.Text} </p>
            <p>{post.username} </p>
            <p>{post.time} </p>
            <br />

          </div>
        )

      }
      )}


    </div>

  );
}

export default BlogPost;