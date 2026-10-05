// Câu 27: Xóa dòng tương ứng khi nhấn nút "Xóa"
function xoaDong(nut) {
    var dong = nut.parentNode.parentNode;             // <input> -> <td> -> <tr>
    document.getElementById("bang").deleteRow(dong.rowIndex);
}

// Tự cập nhật cột "Tổng" khi sửa số lượng hoặc đơn giá
function tinhTong(o) {
    var dong = o.parentNode.parentNode;
    var sl = parseFloat(dong.querySelector(".sl").value);
    var dg = parseFloat(dong.querySelector(".dg").value);
    dong.querySelector(".tong").value = (isNaN(sl) || isNaN(dg)) ? "" : sl * dg;
}
