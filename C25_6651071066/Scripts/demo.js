// Câu 25: Tính tiền các món ăn của khách hàng
// (Giá của mỗi món được đặt trong thuộc tính value của thẻ <option>)
function tinhTien() {
    var dsMon = [];
    var tong = 0;
    var ids = ["thucan", "nuocuong"];

    for (var k = 0; k < ids.length; k++) {
        var opts = document.getElementById(ids[k]).options;
        for (var i = 0; i < opts.length; i++) {
            if (opts[i].selected) {
                var gia = parseInt(opts[i].value);
                dsMon.push({ ten: opts[i].text, gia: gia });
                tong += gia;
            }
        }
    }

    if (dsMon.length === 0) {
        alert("Vui lòng chọn ít nhất một món!");
        return;
    }

    var html = '<table class="kq"><tr><th>Các món đã dùng</th><th>Tiền</th></tr>';
    for (var j = 0; j < dsMon.length; j++) {
        html += "<tr><td>" + dsMon[j].ten + "</td><td>" + dsMon[j].gia + "</td></tr>";
    }

    // Ban đêm: cộng thêm 10% trên tổng tiền các món
    if (document.getElementById("dem").checked) {
        var phuThu = Math.round(tong * 0.1);
        html += "<tr><td>Phụ thu ban đêm (10%)</td><td>" + phuThu + "</td></tr>";
        tong += phuThu;
    }

    html += "<tr><td>Tổng tiền</td><td>" + tong + " đồng</td></tr></table>";
    document.getElementById("ketqua").innerHTML = html;
}
