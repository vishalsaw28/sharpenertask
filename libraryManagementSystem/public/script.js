const form = document.querySelector(".book-form");
const input = document.querySelector("#in1");
const API_URL = "http://localhost:5000/api";

async function fetchBooks() {
  try {
    const response = await fetch(`${API_URL}/books`);

    if (!response.ok) {
      throw new Error("Failed to fetch books.");
    }

    const books = await response.json();

    console.log("Books fetched:", books);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const bookName = input.value.trim();
  if (bookName === "") {
    alert("Please enter a book name.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: bookName,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to add book.");
    }

    const newBook = await response.json();

    console.log("Book added successfully:", newBook);

    input.value = "";

    // Refresh the book list
    fetchBooks();
  } catch (error) {
    console.error("Error adding book:", error);
    alert("Unable to add book. Please try again.");
  }
});
fetchBooks();
