import { html } from "../../node_modules/lit-html/lit-html.js";
import { editRecord, getItemById } from "../api/data.js";
import page from "../../node_modules/page/page.mjs";

const editTemplate = (data, onEdit, errorMsg) => html` <div
    class="row space-top"
  >
    <div class="col-md-12">
      <h1>Edit Furniture</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onEdit}>
    ${errorMsg
      ? html`<div class="col-md-12" style="color:red">${errorMsg}</div>`
      : ""}
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-make">Make</label>
          <input
            class="form-control"
            id="new-make"
            type="text"
            name="make"
            value="${data.make}"
          />
        </div>
        <div class="form-group has-success">
          <label class="form-control-label" for="new-model">Model</label>
          <input
            class="form-control is-valid"
            id="new-model"
            type="text"
            name="model"
            value="${data.model}"
          />
        </div>
        <div class="form-group has-danger">
          <label class="form-control-label" for="new-year">Year</label>
          <input
            class="form-control is-invalid"
            id="new-year"
            type="number"
            name="year"
            value="${data.year}"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-description"
            >Description</label
          >
          <input
            class="form-control"
            id="new-description"
            type="text"
            name="description"
            value="${data.description}"
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-price">Price</label>
          <input
            class="form-control"
            id="new-price"
            type="number"
            name="price"
            value="${data.price}"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-image">Image</label>
          <input
            class="form-control"
            id="new-image"
            type="text"
            name="img"
            value=${data.img}
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-material"
            >Material (optional)</label
          >
          <input
            class="form-control"
            id="new-material"
            type="text"
            name="material"
            value="${data.material}"
          />
        </div>
        <input type="submit" class="btn btn-info" value="Edit" />
      </div>
    </div>
  </form>`;

export async function editPage(ctx) {
  const id = ctx.params.id;
  const data = await getItemById(id);
  ctx.render(editTemplate(data, onEdit));

  async function onEdit(event) {
    event.preventDefault();
    const token = sessionStorage.getItem("authToken");
    if (token) {
      const formData = new FormData(event.target);

      const make = formData.get("make");
      const model = formData.get("model");
      const year = formData.get("year");
      const description = formData.get("description");
      const price = formData.get("price");
      const img = formData.get("img");
      const material = formData.get("material");

      const item = {
        make,
        model,
        year,
        description,
        price,
        img,
        material,
      };

      await editRecord(id, item);
      page.redirect(`/details/${id}`);
    } else {
      ctx.render(
        editTemplate(data, onEdit, "You must be logged in to be able to edit!")
      );
    }
  }
}
