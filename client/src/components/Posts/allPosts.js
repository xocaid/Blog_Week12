import { useState, useEffect } from 'react';
import SinglePost from './singlePost';
import AddBlogForm from '../CRUD/addBlog/addBlogForm';
import AddPost from '../CRUD/addBlog/notWorking';


const AllBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  //To be able to use Search Bar - to Keep a record of all users & filter
  const [allPosts, setAllPosts] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8080/junctionPA")
      .then((response) => response.json())
      .then((singlePost) => {
        //by adding setAllCards, it allows us to see all the data returned to the cards for the search bar
        setAllPosts(singlePost);
        setPosts(singlePost);
      });
  }, []);

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
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("From the post ", data);
          setPosts(data);
        });
    };

    //POST Request - Authors
    const postAuthor = (newAuthor) => {
      return fetch("http://localhost:8080/authors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAuthor),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("From the post ", data);
          setPosts(data);
        });
    };



  const handleInfo = (newPost, newAuthor) => {
    console.log(newPost, 'This is the parent')
    console.log(newAuthor, 'This is fomr the PARENT')
    postPost(newPost)
    postAuthor(newAuthor)
  }

  return (
    <div>

      {/* SearchBar */}
      <input className='search-box' placeholder='Search' onInput={filterPosts}></input>
      <div className='allposts'>


        {posts.map((post, index) => (
          <SinglePost key={index} singlePost={post} />
        )
        )}
      </div>
      <div>
        <AddBlogForm />

        <br />
        <h4>This is the AddPost displaying from allPosts component.</h4>
        <AddPost addpost={handleInfo}/>

      </div>
    </div>
  );
}
export default AllBlogPosts;

