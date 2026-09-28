const form = document.getElementById("appointmentForm");
const userList = document.getElementById("userList");

const API_URL = "http://localhost:3000/users";

// POST - Add user
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  const user = {
    name,
    phone,
    email,
  };

  try {
    await axios.post(API_URL, user);

    form.reset();

    getUsers();
  } catch (error) {
    console.log(error);
  }
});

// GET - Display all users
async function getUsers() {
  try {
    const response = await axios.get(API_URL);

    const users = response.data;

    userList.innerHTML = "";

    users.forEach((user) => {
      const div = document.createElement("div");

      div.innerHTML = `
        <h3>${user.name}</h3>
        <p>Phone: ${user.phone}</p>
        <p>Email: ${user.email}</p>

        <button type="button" onclick="deleteUser(${user.id})">
          Delete
        </button>

        <hr>
      `;

      userList.appendChild(div);
    });
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(id) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);

    console.log(response.data);

    getUsers();
  } catch (error) {
    console.log(error);
  }
}

getUsers();
