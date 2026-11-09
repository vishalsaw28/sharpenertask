const form = document.querySelector(".book-form");
const input = document.querySelector("#in1");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const bookName = input.value.trim();
  if (bookName === "") {
    alert("Please enter a book name.");
    return;
  }
  const bookCard = document.createElement("div");
  bookCard.className = "book-card";
  const bookTitle = document.createElement("h3");
  bookTitle.textContent = bookName;
  console.log(bookTitle);
  bookCard.append(bookTitle);
  console.log(bookCard);

  const borrowedBookContainer = document.querySelector(
    ".borrowed-books-container",
  );
  input.value = "";

  const borrowedAt = new Date();
  const dueAt = borrowedAt.getTime() + 3600000;
  const dueDateObject = new Date(dueAt);

  const borrowDate = document.createElement("p");
  borrowDate.textContent = `Book issuing date: ${borrowedAt.toLocaleString()}`;

  const returnDate = document.createElement("p");
  returnDate.textContent = `Return Date: ${dueDateObject.toLocaleString()}`;

  bookCard.append(borrowDate, returnDate);

  const returnButton = document.createElement("button");
  returnButton.type = "button";
  returnButton.textContent = `Return Book`;

  const fine = document.createElement("h3");
  fine.textContent = `Current Fine: ₹0`;

  returnButton.addEventListener("click", () => {
    returnButton.disabled = true;

    const returnedAt = new Date();

    const overDueTime = returnedAt - dueDateObject;
    console.log(overDueTime);
    let finalAmount = 0;

    if (overDueTime > 0) {
      const overDueHours = Math.ceil(overDueTime / 3600000);
      finalAmount = overDueHours * 10;
      fine.textContent = `Final Fine: ₹${finalAmount}`;
    }
    if (finalAmount === 0) {
      const returnedBookContainer = document.querySelector(
        ".returned-book-container",
      );
      if (returnedBookContainer) {
        returnedBookContainer.appendChild(bookCard);
      }
    } else {
      const payFine = document.createElement("button");
      payFine.textContent = "Pay Fine";
      payFine.type = "button";
      bookCard.append(payFine);

      payFine.addEventListener("click", () => {
        payFine.textContent = `Fine Paid`;

        const returnedBookContainer = document.querySelector(
          ".returned-book-container",
        );

        returnedBookContainer.appendChild(bookCard);

        payFine.disabled = true;
      });
    }
  });

  bookCard.append(fine);
  bookCard.append(returnButton);
  borrowedBookContainer.appendChild(bookCard);
});
