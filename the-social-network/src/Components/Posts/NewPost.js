import React from "react";

const NewPost = () => {
  return (
    <div>
      <h2>Add a post</h2>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate" />
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Last Name</label>
            </div>
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea"></textarea>
              <label for="textarea1">Textarea</label>
            </div>
          </div>
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
