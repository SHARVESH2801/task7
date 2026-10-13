
let inp = document.getElementById("inp");
let addBtn = document.getElementById("addBtn");
let missionList = document.getElementById("missionList");

let totalCount = document.getElementById("totalCount");
let completedCount = document.getElementById("completedCount");
let pendingCount = document.getElementById("pendingCount");

function updateCount() {
    let total = missionList.children.length;
    let completed = 0;

    for (let i = 0; i < total; i++) {
        if (missionList.children[i].classList.contains("done")) {
            completed++;
        }
    }

    totalCount.textContent = total;
    completedCount.textContent = completed;
    pendingCount.textContent = total - completed;
}

function addMission() {
    let name = inp.value;

    if (name.trim() == "") {
        alert("Please enter a mission");
    } else {
        let li = document.createElement("li");
        let text = document.createElement("span");
        let del = document.createElement("button");

        text.textContent = name;
        del.textContent = "Delete";
        del.className = "deleteBtn";

        text.onclick = function() {
            if (li.classList.contains("done")) {
                li.classList.remove("done");
            } else {
                li.classList.add("done");
            }

            updateCount();
        };

        del.onclick = function() {
            li.remove();
            updateCount();
        };

        li.appendChild(text);
        li.appendChild(del);
        missionList.appendChild(li);

        inp.value = "";

        updateCount();
    }
}

addBtn.onclick = addMission;

inp.onkeydown = function(event) {
    if (event.key == "Enter") {
        addMission();
    }
};

let colorBtn = document.getElementById("colorBtn");

colorBtn.onclick = function() {
    if (document.body.style.backgroundColor == "lightyellow") {
        document.body.style.backgroundColor = "lightblue";
    } else if (document.body.style.backgroundColor == "lightblue") {
        document.body.style.backgroundColor = "lightgreen";
    } else {
        document.body.style.backgroundColor = "lightyellow";
    }
};
