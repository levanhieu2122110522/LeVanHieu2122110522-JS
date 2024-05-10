function validateForm() {
    var studentID = document.getElementById("studentID").value;
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var className = document.getElementById("className").value;
    var errorTable = document.getElementById("errorTable");
    var errorTableBody = document.getElementById("errorTableBody");

    var isValid = true;
    errorTableBody.innerHTML = "";

    // Kiểm tra Mã SV
    if (!studentID.match(/^21\d{8}$/)) {
        appendErrorRow(1, "Mã SV không hợp lệ.");
        isValid = false;
    }

    // Kiểm tra Họ Tên
    if (fullName.trim() === "") {
        appendErrorRow(2, "Họ Tên không được để trống.");
        isValid = false;
    }

    // Kiểm tra Email
    if (!email.match(/^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/)) {
        appendErrorRow(3, "Email không hợp lệ.");
        isValid = false;
    }

    // Kiểm tra Điện Thoại
    if (!phoneNumber.match(/^0(32|33|34|35|36|37|38|39|56|58|59|70|76|77|78|79|81|82|83|84|85|86|88|89|91|94|96|97|98|99)\d{7}$/)) {
        appendErrorRow(4, "Điện Thoại không hợp lệ.");
        isValid = false;
    }

    // Kiểm tra Lớp
    if (!className.match(/^CCQ.{5,6}[12]$/)) {
        appendErrorRow(5, "Lớp không hợp lệ.");
        isValid = false;
    }

    if (!isValid) {
        errorTable.style.display = "block";
        return false;
    }

    return true;
}
function appendErrorRow(line, errorMessage) {
    var errorTableBody = document.getElementById("errorTableBody");
    var newRow = errorTableBody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell
