// Bài 1: Xử lý chuỗi bất kỳ

// Yêu cầu:

// - Xóa bỏ các ký tự trắng ở đầu, cuối chuỗi và giữa 2 từ chỉ còn 1 khoảng trắng

// - Viết in HOA ký tự đầu mỗi từ trong chuỗi

// Chú ý: Trong bài sử dụng các hàm sau

// - trim(): Loại bỏ các ký tự trắng ở đầu và cuối chuỗi.

// - replace(): Thay thế một chuỗi con trong chuỗi bằng một chuỗi khác.

// - split(): Chia chuỗi thành một mảng các chuỗi con dựa trên một ký tự phân cách.

// - join(): Nối các chuỗi con trong một mảng thành một chuỗi mới.

// - charAt(): Trả về ký tự ở vị trí cụ thể trong chuỗi.

// - toUpperCase(): Chuyển đổi một ký tự sang chữ hoa.

// - slice(): Lấy một phần chuỗi con từ chuỗi gốc.
// ------------------------------------------------
function removeSpace(str) {
    // trim(): Loại bỏ các ký tự trắng ở đầu và cuối chuỗi.
    str = str.trim();
    // . replace(): Thay thế một chuỗi con trong chuỗi bằng một chuỗi khác.
    str = str.replace(/\s+/g, ' ');
    // chuyen chuoi ve in thhuong
    str = str.toLowerCase();
    //  toUpperCase(): Chuyển đổi một ký  dau sang ky tự sang chữ hoa.
    const arr=str.split(" ");
    // vong lap chuyen ky tu dau sang ky tu hoa
    for(let i=0;i<arr.length;i++)
        {
            arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        }
    str=arr.join(" ");

    return str;
}
let str = "  Xin   chao  baN  ";
console.log(str.length);
str=removeSpace(str)
console.log(str);