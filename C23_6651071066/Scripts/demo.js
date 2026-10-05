// Câu 23: Tính lương tháng = Lương * Hệ số lương
function tinhLuong() {
    var luong = parseFloat(document.getElementById("luong").value);
    var heSo = parseFloat(document.getElementById("hesoluong").value);

    if (isNaN(luong) || luong < 0) {
        alert("Vui lòng nhập lương hợp lệ!");
        return;
    }

    document.getElementById("luongthang").value = Math.round(luong * heSo);
}
