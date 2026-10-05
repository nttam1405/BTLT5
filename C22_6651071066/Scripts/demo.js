// Câu 22: Nhân / chia hai số nhập từ form
function layHaiSo() {
    var a = parseFloat(document.getElementById("so1").value);
    var b = parseFloat(document.getElementById("so2").value);
    return [a, b];
}

function hienKetQua(giaTri) {
    document.getElementById("ketqua").innerHTML = giaTri;
}

function nhan() {
    var so = layHaiSo();
    if (isNaN(so[0]) || isNaN(so[1])) {
        hienKetQua("Vui lòng nhập hai số hợp lệ!");
        return;
    }
    hienKetQua(so[0] * so[1]);
}

function chia() {
    var so = layHaiSo();
    if (isNaN(so[0]) || isNaN(so[1])) {
        hienKetQua("Vui lòng nhập hai số hợp lệ!");
        return;
    }
    if (so[1] === 0) {
        hienKetQua("Không thể chia cho 0!");
        return;
    }
    hienKetQua(so[0] / so[1]);
}
