// Câu 24: Xuất thứ trong tuần bằng đối tượng Date
var tenThu = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

function xuatThu() {
    var ngay = parseInt(document.getElementById("ngay").value);
    var thang = parseInt(document.getElementById("thang").value);
    var nam = parseInt(document.getElementById("nam").value);

    if (isNaN(ngay) || isNaN(nam)) {
        alert("Vui lòng nhập ngày và năm hợp lệ!");
        return;
    }

    // Dùng setFullYear để năm nhỏ (vd: 50) không bị hiểu thành 1950
    var d = new Date(2000, 0, 1);
    d.setFullYear(nam, thang - 1, ngay);

    // Nếu ngày không tồn tại (vd 31/2) thì Date sẽ tự nhảy sang tháng khác
    if (d.getFullYear() !== nam || d.getMonth() !== thang - 1 || d.getDate() !== ngay) {
        alert("Ngày tháng năm không hợp lệ!");
        return;
    }

    document.getElementById("ketqua").innerHTML =
        tenThu[d.getDay()] + " Ngày " + ngay + " tháng " + thang + " năm " + nam;
}
