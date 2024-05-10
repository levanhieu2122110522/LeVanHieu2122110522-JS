
// Bài 3: Ứng dụng Tạo URL Friendly:

// Xây dựng một ứng dụng cho phép người dùng nhập vào một chuỗi và chuyển đổi chuỗi đó thành một chuỗi URL friendly

// - Loại bỏ khoảng trắng

// - Loại bỏ thẻ (tag)

// - Loại bỏ các ký tự đặc biệt

// - Thay thế khoảng trắng bằng dấu gạch dưới (_) hoặc dấu gạch ngang (-).

function removeSpace(str) {
    // Loại bỏ các thẻ HTML
    str = str.replace(/<[^>]*>/g, "");

    // Loại bỏ các ký tự đặc biệt
    str = str.replace(/[^\w\s]/g, "");

    // Loại bỏ khoảng trắng và thay thế bằng dấu gạch dưới (_) hoặc dấu gạch ngang (-)
    str = str.replace(/\s+/g, "-");

    // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
    str = str.trim();
    return str;
}

let str = " <a> <str=hahhahaha>Xin Chao Ban^ ";
console.log(str.length);

str = removeSpace(str);
console.log(str);