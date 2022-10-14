import { useState } from 'react';


const AddPost = (props) => {
  //POSTS
  const [postForm, setPostForm] = useState({
    title: "",
    date: "",
    post: "",
  });

  const handleTitle = (e) => {
    const postTitle = e.target.value;
    setPostForm((post) => ({ ...post, title: postTitle }));
  };

  const handleDate = (e) => {
    const postDate = e.target.value;
    setPostForm((post) => ({ ...post, date: postDate }));
  };

  const handlePost = (e) => {
    const postPost = e.target.value;
    setPostForm((post) => ({ ...post, post: postPost }));
  };

  //AUTHORS
  const [authorForm, setAuthorForm] = useState({
    name: '',
    post_id: ''
  });

  const handleName = (e) => {
    const authorName = e.target.value;
    setAuthorForm((author) => ({ ...author, name: authorName }));
  };
  const handlePostId = (e) => {
    const authorPostId = e.target.value;
    setAuthorForm((author) => ({ ...author, post_id: authorPostId }));
  };

  //EVENT HANDLER
  const handleAddBlogEntry = (e) => {
    e.preventDefault();

    console.log(postForm);
    console.log(authorForm);
    props.addNewSubmission(postForm, authorForm);
  };


  return (
    <form onSubmit={handleAddBlogEntry} className="formborder" >
      <fieldset>
{/* ******************** POST - postForm ******************* */}

        <label>Title: </label>
        <input
          type="text"
          id="add-title"
          required
          value={postForm.title}
          onChange={handleTitle}
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
{/* ******************** AUTHOR - authorForm ******************* */}
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