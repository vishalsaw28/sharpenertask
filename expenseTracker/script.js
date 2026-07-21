let amount = document.getElementById("amount");
let description = document.getElementById("description");
let category = document.getElementById("category");
let addBtn = document.getElementById("addBtn");
let expenseList = document.getElementById("expenseList");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let editIndex = -1;

displayExpenses();

addBtn.addEventListener("click", function () {
  if (amount.value === "" || description.value === "") {
    alert("Please fill all the fields!");
    return;
  }

  let expense = {
    amount: amount.value,
    description: description.value,
    category: category.value,
  };

  if (editIndex === -1) {
    expenses.push(expense);
  } else {
    expenses[editIndex] = expense;
    editIndex = -1;
    addBtn.innerText = "Add Expense";
  }

  localStorage.setItem("expenses", JSON.stringify(expenses));

  clearInputs();

  displayExpenses();
});

function displayExpenses() {
  expenseList.innerHTML = "";

  expenses.forEach(function (expense, index) {
    let li = document.createElement("li");

    li.innerHTML = `
        <div>
          <strong>${expense.amount}</strong><br>
          ${expense.description}
          ${expense.category}
        </div>

        <div>
        <button class = "action-btn" onClick="editExpense(${index})">
        Edit
        </button>
        <button class = "action-btn" onClick="deleteExpense(${index})">
        Delete
        </button>
        </div>


        `;

    expenseList.appendChild(li);
  });
}

function deleteExpense(index) {
  expenses.splice(index, 1);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  displayExpenses();
}

function editExpense(index) {
  amount.value = expenses[index].amount;
  description.value = expenses[index].description;
  category.value = expenses[index].category;

  editIndex = index;

  addBtn.innerText = "Update Expense";
}

function clearInputs() {
  amount.value = "";
  description.value = "";
  category.value = "Food";
}
