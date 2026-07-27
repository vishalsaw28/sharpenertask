const API = "https://crudcrud.com/api/e6660621ebb3448cb5b4bf666168de5b/orders";

const form = document.getElementById("orderForm");
const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");
const table3 = document.getElementById("table3");

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(API)
    .then((response) => {
      response.data.forEach((order) => {
        displayOrder(order);
      });
    })

    .catch((err) => console.log(err));
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const order = {
    price: document.getElementById("price").value,
    dish: document.getElementById("dish").value,
    table: document.getElementById("table").value,
  };

  axios
    .post(API, order)
    .then((response) => {
      displayOrder(response.data);
      form.reset();
    })
    .catch((err) => console.log(err));
});

function displayOrder(order) {
  const li = document.createElement("li");

  li.innerHTML = `
       ${order.price} - ${order.dish}
       <button class = "delete-btn">
       Delete
       </button>
       `;

  li.querySelector("button").addEventListener("click", function () {
    axios
      .delete(`${API}/${order._id}`)
      .then(() => {
        li.remove();
      })
      .catch((err) => console.log(err));
  });

  if (order.table === "Table 1") {
    table1.appendChild(li);
  } else if (order.table === "Table 2") {
    table2.appendChild(li);
  } else {
    table3.appendChild(li);
  }
}
