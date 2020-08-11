import React, {useState} from "react";

const CreateNewPost = () => {
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleValueChange = e => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSubmission = e => {
    e.preventDefault();
    console.log(newPost);
  };

  return (
    <div>
      <div className="container">
        <h2>Add a post</h2>
        <div className="row">
          <form className="col s12" onSubmit={handleSubmission}>
            <div className="row">
              {/* <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label htmlFor="last_name">Last Name</label>
              </div> */}
              <div className="input-field col s12">
                <textarea
                  id="postTitle"
                  className="materialize-textarea"
                  name="title"
                  onChange={handleValueChange}
                ></textarea>
                <label htmlFor="postTitle">Title</label>
              </div>
              <div className="input-field col s12">
                <textarea
                  id="textarea1"
                  name="content"
                  className="materialize-textarea"
                  onChange={handleValueChange}
                ></textarea>
                <label htmlFor="textarea1">Content</label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPost;
