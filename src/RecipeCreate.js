import React from "react";
import "./RecipeCreate.css";

function RecipeCreate({ handleChange, formData, handleSubmit }) {
  return (
    <form name="create recipe" onSubmit={handleSubmit}>
      <fieldset>
        <table
          className="recipe-create-table"
          aria-label="Recipe Creation Form"
        >
          <tbody className="table-body">
            <tr>
              <td>
                <input
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                  required={true}
                  aria-required="true"
                ></input>
              </td>
              <td>
                <input
                  id="cuisine"
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  required={true}
                  aria-required="true"
                ></input>
              </td>
              <td>
                <input
                  id="photo"
                  name="photo"
                  placeholder="URL"
                  onChange={handleChange}
                  value={formData.photo}
                  type="url"
                  required={true}
                  aria-required="true"
                ></input>
              </td>
              <td>
                <textarea
                  placeholder="Ingredients"
                  id="ingredients"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  required={true}
                  aria-required="true"
                ></textarea>
              </td>
              <td>
                <textarea
                  placeholder="Preparation"
                  id="preparation"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  required={true}
                  aria-required="true"
                ></textarea>
              </td>
              <td>
                <button type="submit">Create</button>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </form>
  );
}

export default RecipeCreate;
