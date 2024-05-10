function addCourse() {
    const courseNameInput = document.getElementById("courseName");
    const courseName = courseNameInput.value.trim();

    if (courseName === "") {
        alert("Vui lòng nhập tên môn học.");
        return;
    }

    const courseList = document.getElementById("courseList");
    const listItem = document.createElement("li");
    listItem.textContent = courseName;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Xóa";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
        listItem.remove();
    };

    listItem.appendChild(deleteButton);
    courseList.appendChild(listItem);

    courseNameInput.value = "";
}