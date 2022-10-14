import { useState, useEffect } from 'react';
import SinglePost from './singlePost';
import AddPost from '../CRUD/addBlog/addPost';


const AllBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  //To be able to use Search Bar - to Keep a record of all users & filter
  const [allPosts, setAllPosts] = useState([]);

  const [seeAddBlog, setSeeAddBlog] = useState(false);

  const fetchAllPosts = () => {
    console.log('fetchAllPosts')
    fetch("http://localhost:8080/junctionPA")
      .then((response) => response.json())
      .then((singlePost) => {
        console.log(singlePost, "Testing");
        //by adding setAllCards, it allows us to see all the data returned to the cards for the search bar
        setAllPosts(singlePost);
        setPosts(singlePost);
      });
  };


  useEffect(fetchAllPosts, []);



  {/* around each card that has been mapped, set a state for current card and if current card == post 
  then just print out that one post, move ternary below return()
state that saves id, if id==post.id then print otherwise won't print...state to empty string, 
once you click set to specfic post id(would go with button) */}
  //if console.log(event)browser console will print an object, when you head to target->value you will see what you were typing, here the text is actually stored

  //FILTER FUNCTION - Search Bar
  const filterPosts = event => {
    // console.log(event.target.value);
    const value = event.target.value.toLowerCase();
    const filteredAllPosts = allPosts.filter(
      post => (`${post.author} ${post.title} ${post.post}`
        .toLowerCase()
        .includes(value))
    )
    //setPosts(filteredAllCards) is to  display the cards we want to display at the time
    setPosts(filteredAllPosts)
  }

  //POST Request - Posts
  const postPost = (newPost) => {
    return fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
  };

  //POST Request - Authors
  const postAuthor = (newAuthor) => {
    return fetch("http://localhost:8080/authors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAuthor),
    })

  };



  const handleInfo = async (newPost, newAuthor) => {
    console.log(newPost, 'Post is printing from allPost component')
    console.log(newAuthor, 'Author is printing from allPost component')
    const postPromise = postPost(newPost)
    const authorPromise = postAuthor(newAuthor)
    await Promise.all[postPromise, authorPromise]
    fetchAllPosts();
  }

  const handleSeeAddBlog = () => {
    setSeeAddBlog(!seeAddBlog)
  }

  return (
    <div>

      {/* SearchBar */}
      <input className='search-box' placeholder='Search' onInput={filterPosts}></input>
      <div className='allposts'>


        {posts.map((post, index) => {
          return (
            <SinglePost key={index} singlePost={post} />
          )
        }
        )}

        {/* {Object.keys(posts).map((index,post) => (
          <SinglePost key={index} singlePost={post} />
        ))
        } */}

      </div>
      {seeAddBlog ? (
        <div className='seeAddBlogButton'>
          <AddPost addNewSubmission={handleInfo} />
          <button className='addpostbutton' onClick={handleSeeAddBlog}> Close </button>
        </div>
      ) : (
        <div>
          <button className="addpostbutton" onClick={handleSeeAddBlog}> Add New Blog Post </button>
        </div>

      )}
    </div>
  );
}
export default AllBlogPosts;

