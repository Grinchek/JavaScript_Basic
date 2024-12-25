const todoUrl = "https://jsonplaceholder.typicode.com/todos";
const usersUrl = "https://jsonplaceholder.typicode.com//users";
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);

    }
}
function displayUsers() {

    fetchData(usersUrl).then(users => {
        const userList = document.getElementById("list-tab");
        for (let i = 0; i < users.length; i++) {
            const user = document.createElement("a");
            user.classList = "list-group-item list-group-item-action";
            user.id = `${users[i].id}`;
            user.addEventListener("click", function (event) {
                event.preventDefault();
                selectHandler(user);
            })
            user.innerHTML = `${users[i].name}`;
            userList.appendChild(user);
        }

    });
}


function setActivate(selectedElement) {
    const links = document.querySelectorAll(".list-group a");
    links.forEach(link => {
        link.classList.remove("active");
    });

    selectedElement.classList.add("active");
}
function selectHandler(element) {

    setActivate(element);
    id = element.id;
    fetchData(todoUrl).then(todoes => {
        const todoList = document.getElementById("nav-tabContent");
        console.log(todoList);
        for (let i = 0; i < todoes.length; i++) {

            if (id == todoes[i].userId) {
                const todo = document.createElement("p");
                todo.innerHTML = `${todoes[i].title}`;
                if (todoes[i].completed) {
                    todo.innerHTML += `<br>Complited`;
                }
                else {
                    todo.innerHTML += `<br>Not complited`;
                }
                todoList.appendChild(todo);
            }
            else {
                console.log(element.id == todoes[i].userId);
            }

        }
    });
}
displayUsers();