import { useState } from 'react';


const AddPost = (props) => {
  const [postForm, setPostForm] = useState({
    title: "",
    date: "",
    post: "",
  });

  const [authorForm, setAuthorForm] = useState({
    name: '',
    post_id: ''
  })
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


  //AUTHORS - create functions that handle the event of the user typing into the form
  const handleName = (event) => {
    const postName = event.target.value;
    setAuthorForm((post) => ({ ...post, name: postName }));
  };
  const handlePostId = (event) => {
    const postPostId = event.target.value;
    setAuthorForm((post) => ({ ...post, post_id: postPostId }));
  };

  // //POST Request - Posts
  //   const postPost = (newPost) => {
  //     return fetch("http://localhost:8080/posts", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(newPost),
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log("From the post ", data);
  //         props.addPost(data);
  //       });
  //   };
  //   //POST Request - Authors
  //   const postAuthor = (newAuthor) => {
  //     return fetch("http://localhost:8080/authors", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(newAuthor),
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log("From the post ", data);
  //         props.addAuthor(data);
  //       });
  //   };

  // //ADD POST
  // const handleAddPost = (post) => {
  //   setPosts((post) => [...post, post]);
  // };
  // //ADD AUTHOR
  // const handleAddAuthor = (author) => {
  //   setPosts((author) => [...author, author]);
  // };

  //addContact will be the props
  const handleAddEntry = (e) => {
    e.preventDefault();
    console.log(postForm);
    console.log(authorForm);
    props.addpost(postForm, authorForm);
    // postPost(postForm);
    // setPostForm({
    //   title: "",
    //   date: "",
    //   post: "",
    // })

    // postAuthor(authorForm);
    // postAuthor(postAuthor);
    // setAuthorForm({
    //   name: "",
    //   post_id: ""
    // })
  };


  return (
    <form onSubmit={handleAddEntry} className="formborder" >
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
          value={authorForm.name}
          onChange={handleName}
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
          value={authorForm.post_id}
          onChange={handlePostId}
        />
        <br />

      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPost;