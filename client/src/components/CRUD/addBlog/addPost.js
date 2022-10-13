import { useState } from 'react';


const AddPost = ({ addPostCallback }) => {
  const [postForm, setPostForm] = useState({
    title: "",
    date: "",
    post: "",
  });


  //POSTS - create functions that handle the event of the user typing into the form
  const handleTitle = (event) => {
    const postTitle = event.target.value;
    setPostForm((post) => ({ ...post, title: postTitle }));
  };

  const handleDate = (event) => {
    const postDate = event.target.value;
    setPostForm((post) => ({ ...post, date: postDate }));
  };
  const handlePost = (event) => {
    const postPost = event.target.value;
    setPostForm((post) => ({ ...post, post: postPost }));
  };


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
        addPostCallback.addPost(data);
      });
  };

//addPost will be the props
  const handleAddPost = (e) => {
    e.preventDefault();
    postPost(postForm);
    setPostForm({
      title: "",
      date: "",
      post: ""
    })
  };
  

  return (
    <form onSubmit={handleAddPost} className="formborder" >
      <fieldset>

      <label>Title: </label>
        <input
          type="text"
          id="add-title"
          required
          value={postForm.title}
          onChange={handleTitle}
        />
        <br />

        <label>Post: </label>
        <input
          type="text"
          id="add-post"
          placeholder="Blog text goes here."
          value={postForm.post}
          onChange={handlePost}
        />
        <br />

        <label>Date: </label>
        <input
          type="date"
          id="add-date"
          value={postForm.date}
          onChange={handleDate}
        />
        <br />

      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPost;