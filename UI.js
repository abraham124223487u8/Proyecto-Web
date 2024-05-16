
export class UI {
    /**

     * @param {Object} product A new product Object
     */
    addProduct(product) {
      const productList = document.getElementById("product-list");
      const element = document.createElement("div");
      element.innerHTML = `
              <div class="card text-center mb-4">
                  <div class="card-body">
                      <strong>Product</strong>: ${product.name} -
                      <strong>Price</strong>: ${product.price} - 
                      <strong>Year</strong>: ${product.year}
                      <a href="#" class="btn btn-danger" name="delete">Delete</a>
                  </div>
              </div>
          `;
      productList.appendChild(element);
    }
 
    resetForm() {
      document.getElementById("product-form").reset();
    }
  
    deleteProduct(element) {
      if (element.name === "delete") {
        element.parentElement.parentElement.remove();
        this.showMessage("Product Deleted Succsssfully", "success");
      }
    }
  
    showMessage(message, cssClass) {
      const div = document.createElement("div");
      div.className = `alert alert-${cssClass} mt-2`;
      div.appendChild(document.createTextNode(message));

      const container = document.querySelector(".container");
      const app = document.querySelector("#App");
  

      container.insertBefore(div, app);
  
      setTimeout(function () {
        document.querySelector(".alert").remove();
      }, 3000);
    }
  }