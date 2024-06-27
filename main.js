let steps = 1;
let appData = {
    name: "",
    email: "",
    topics: [],
};

let title = document.querySelector(".title");
let content = document.querySelector(".content");
let btn = document.querySelector(".btn");
let currentStepText = document.querySelector("#current-step");
let stepBlocks = document.querySelectorAll(".step");

console.log(stepBlocks);

function addInputListeners() {
    let inputFields = document.querySelectorAll(".input");
    inputFields.forEach((input) =>
        input.addEventListener("input", (e) => {
            appData = { ...appData, [e.target.name]: e.target.value };
        })
    );
}

function addCheckboxListeners() {
    let checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (e) => {
            if (e.target.checked) {
                appData.topics.push(e.target.id);
            } else {
                appData.topics = appData.topics.filter(
                    (topic) => topic !== e.target.id
                );
            }
        });
    });
}

btn.addEventListener("click", () => {
    if (steps === 1) {
        title.innerText = "Which topics are you interested in?";
        currentStepText.innerText = "2";
        stepBlocks[0].classList.remove("active");

        stepBlocks[1].classList.add("active");
        stepBlocks[1].classList.add("filled");
        content.innerHTML = `
            <div class="form-second">
                <div class="form-second-group">
                    <input class="checkbox" id="Software Development" type="checkbox" />
                    <label class="checkbox-label" for="Software Development"> Software Development </label>
                </div>
                <div class="form-second-group">
                    <input class="checkbox" id="User Experience" type="checkbox" />
                    <label class="checkbox-label" for="User Experience"> User Experience </label>
                </div>
                <div class="form-second-group">
                    <input class="checkbox" id="Graphic Design" type="checkbox" />
                    <label class="checkbox-label" for="Graphic Design"> Graphic Design </label>
                </div>
            </div>
        `;
        addCheckboxListeners();
        steps++;
    } else if (steps === 2) {
        title.innerText = "Summary";
        stepBlocks[1].classList.remove("active");
        stepBlocks[2].classList.add("active");
        stepBlocks[2].classList.add("filled");
        currentStepText.innerText = "3";
        content.innerHTML = `
            <div class="summary">
                <div class="summary-group">
                    <p class="summary-label">Name: </p>
                    <p class="summary-value">${appData.name}</p>
                </div>
                <div class="summary-group">
                    <p class="summary-label">Email: </p>
                    <p class="summary-value">${appData.email}</p>
                </div>
                <div class="summary-group-topics">
                    <p class="summary-label">Topics: </p>
                    <ul class="summary-value-list">
                        ${appData.topics
                            .map(
                                (topic) =>
                                    `<li class="summary-value">${topic}</li>`
                            )
                            .join("")}
                    </ul>
                </div>
            </div>
        `;
        steps++;
    } else if (steps === 3) {
        title.innerText = "Register";
        currentStepText.innerText = "1";
        stepBlocks[2].classList.remove("active");
        stepBlocks[2].classList.remove("filled");
        stepBlocks[1].classList.remove("filled");
        stepBlocks[0].classList.add("active");

        content.innerHTML = `
            <div class="form">
                <div class="form-group">
                    <label class="label" for="name">Name</label>
                    <input
                        name="name"
                        class="input"
                        type="text"
                        id="name"
                        placeholder="enter your name"
                    />
                </div>
                <div class="form-group">
                    <label class="label" for="email">Email</label>
                    <input
                        name="email"
                        class="input"
                        type="email"
                        id="email"
                        placeholder="example@gmail.com"
                    />
                </div>
            </div>
        `;
        addInputListeners();
        steps = 1;
    }
});

addInputListeners();
addCheckboxListeners();
