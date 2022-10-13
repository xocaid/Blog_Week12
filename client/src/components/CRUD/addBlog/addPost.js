import { useState } from 'react';


const AddPost = (props) => {
  const [postForm, setPostForm] = useState({
    title: "",
    // author: "",
    date: "",
    post: "",
    // post_id: ""
  });

const [authorForm, setAuthorForm] = useState({
  author: '',
  post_id: ''
})
  //POSTS - create functions that handle the event of the user typing into the form
  const handleTitle = (event) => {
    const postTitle = event.target.value;
    setPostForm((post) => ({ ...post, title: postTitle }));
  };
  // const handleAuthor = (event) => {
  //   const postAuthor = event.target.value;
  //   setPostForm((post) => ({ ...post, author: postAuthor }));
  // };
  const handleDate = (event) => {
    const postDate = event.target.value;
    setPostForm((post) => ({ ...post, date: postDate }));
  };
  const handlePost = (event) => {
    const postPost = event.target.value;
    setPostForm((post) => ({ ...post, post: postPost }));
  };

  // const handlePostId = (event) => {
  //   const postPostId = event.target.value;
  //   setPostForm((post) => ({ ...post, post_id: postPostId }));
  // };

  //AUTHORS - create functions that handle the event of the user typing into the form
  const handleAuthor = (event) => {
    const postAuthor = event.target.value;
    setAuthorForm((post) => ({ ...post, author: postAuthor }));
  };
  const handlePostId = (event) => {
    const postPostId = event.target.value;
    setAuthorForm((post) => ({ ...post, post_id: postPostId }));
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
        props.addPost(data);
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
        props.addAuthor(data);
      });
  };

//addContact will be the props
  const handleAddContact = (e) => {
    e.preventDefault();
    postPost(postForm);
    postAuthor(authorForm);
    postAuthor(postAuthor);
    setPostForm({
      title: "",
      // author: "",
      date: "",
      post: "",
      // post_id: ""
    })
    setAuthorForm({
      author: "",
      post_id: ""
    })
  };
  

  return (
    <form onSubmit={handleAddContact} className="formborder" >
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

        <label>Author: </label>
        <input
          type="text"
          id="add-author"
          placeholder="Jane Smith"
          required
          value={postAuthor.author}
          onChange={handleAuthor}
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

        <label>Post: </label>
        <input
          type="text"
          id="add-post"
          placeholder="Blog text goes here."
          value={postForm.post}
          onChange={handlePost}
        />
        <br />

        <label>Post ID: </label>
        <input
          type="text"
          id="add-postID"
          placeholder="4"
          required
          value={postAuthor.post_id}
          onChange={handlePostId}
        />
        <br />

      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPost;