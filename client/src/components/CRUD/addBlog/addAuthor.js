import { useState } from 'react';


const AddAuthor = ({ addAuthorCallback }) => {

const [authorForm, setAuthorForm] = useState({
  author: '',
  post_id: ''
})

  //AUTHORS - create functions that handle the event of the user typing into the form
  const handleAuthor = (event) => {
    const postAuthor = event.target.value;
    setAuthorForm((post) => ({ ...post, author: postAuthor }));
  };
  const handlePostId = (event) => {
    const postPostId = event.target.value;
    setAuthorForm((post) => ({ ...post, post_id: postPostId }));
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
        addAuthorCallback.addAuthor(data);
      });
  };

//addAuthor will be the props
  const handleAddAuthor = (e) => {
    e.preventDefault();
    postAuthor(authorForm);
    postAuthor(postAuthor);
    setAuthorForm({
      author: "",
      post_id: ""
    })
  };
  

  return (
    <form onSubmit={handleAddAuthor} className="formborder" >
      <fieldset>

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

export default AddAuthor;