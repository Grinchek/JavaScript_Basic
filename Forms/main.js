function formHandler(event) {
    // припинити виконання форми
    event.preventDefault();

    const counter = document.getElementById("counter");

    const form = event.target;
    const params = {};

    params.text = form["text"].value;
    params.type = form["type"].value;
    params.color = form["color"].value;
    params.size = form["size"].value;
    params.check = form["checkBorder"].checked;
    params.borderColor = form["colorBorder"].value;
    params.id = counter.value++;

    form.reset();

    saveToLocalStorage(params);

    addFigure(params);
};

function saveToLocalStorage(params) {
    const jsonData = localStorage.getItem("figures");
    if (jsonData) {
        const data = JSON.parse(jsonData);
        data.push(params);
        localStorage.setItem("figures", JSON.stringify(data));
    } else {
        const data = [];
        data.push(params);
        localStorage.setItem("figures", JSON.stringify(data));
    }
}

function loadFigures() {
    const jsonData = localStorage.getItem("figures");
    if (jsonData) {
        const data = JSON.parse(jsonData);

        for (let item of data) {
            addFigure(item);
        }
    }
}

function addFigure(params) {
    // <div style="width: 100px; height: 100px; background-color: aquamarine;">Коло</div>
    const container = document.getElementById("figures");

    const figure = document.createElement("div");
    figure.classList.add("figure");
    figure.style.width = params.size + "px";
    figure.style["height"] = params.size + "px";
    figure.style.backgroundColor = params.color;
    figure.innerText = params.text;
    if (params.type === "circle") {
        figure.style.borderRadius = "50%";
    }

    figure.addEventListener("click", (event) => {
        deleteFigure(event, params.id);
    });

    if (params.check) {
        figure.style.border = `2px solid ${params.borderColor}`;
    }

    container.appendChild(figure);
}

function deleteFigure(event, id) {
    if (!event.shiftKey) {
        return;
    }

    const jsonData = localStorage.getItem("figures");

    if (jsonData) {
        let data = JSON.parse(jsonData);
        data = data.filter(f => f.id != id)
        localStorage.setItem("figures", JSON.stringify(data));
        location.reload();
    }
}

function borderHandler(event) {
    const checkbox = event.target;
    const borderColor = document.getElementById("colorBorder");

    if (checkbox.checked) {
        borderColor.hidden = false;
    } else {
        borderColor.hidden = true;
    }
}

loadFigures();