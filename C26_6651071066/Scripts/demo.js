// Câu 26: Tính can chi của năm âm lịch từ năm dương lịch
// Can: năm % 10 (0 = Canh, 1 = Tân, ..., 9 = Kỷ)
// Chi: năm % 12 (0 = Thân, 1 = Dậu, ..., 11 = Mùi)
var CAN = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
var CHI = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];

function tinhCanChi() {
    var oNam = document.getElementById("nam");
    var oKetQua = document.getElementById("canchi");
    var chuoi = oNam.value.trim();

    oKetQua.value = "";

    // Validate: chỉ chấp nhận số nguyên dương từ 1 đến 9999
    if (!/^\d+$/.test(chuoi) || parseInt(chuoi, 10) < 1 || parseInt(chuoi, 10) > 9999) {
        alert("Năm dương lịch phải là số nguyên từ 1 đến 9999!");
        oNam.focus();
        return;
    }

    var nam = parseInt(chuoi, 10);
    oKetQua.value = CAN[nam % 10] + " " + CHI[nam % 12];
}
