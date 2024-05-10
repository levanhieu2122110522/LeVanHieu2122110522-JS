// Bài 2: Cắt chuỗi theo từ

// Yêu cầu:

// - Xử lý chuỗi không có khoảng trắng dư thừa dựa vào Bài 1

// - Cắt chuỗi từ vị trí đầu đến từ thứ n

function str_limit(str,limit=10) {

    //xoa tag HTML
    str=str.replace(/<[^>]>/g,"");
    //xoa ki tu trang 2 ben
    str = str.trim();
    //tim kiem 2 khoang trang
    str = str.replace(/\s+/g, ' ');
    //chuyen ve in hoa
    str = str.toLowerCase();
    //chuyen ki tu dau ve in hoa
    const mang =str.split(" ");
    const mangmoi=mang.slice(0,limit);
    str=mangmoi.join(" ");
    return str;
}
let str = `<p>Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document. To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other.`;
console.log(str.length);
str=str_limit(str)
console.log(str);