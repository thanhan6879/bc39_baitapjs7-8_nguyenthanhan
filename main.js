var listNumber = [];
function addNumber() {
    var number = document.getElementById("txtNumber").value * 1;
    listNumber.push(number);
    document.getElementById("infoListNumber").innerHTML = listNumber;
}

//1.Tổng các số dương trong mảng
function tongSoDuong() {
    var tong = 0;
    for (var i = 0; i < listNumber.length; i++) {
        tong += listNumber[i];
    }
    var result = "Tong cac so duong la: " + tong;
    document.getElementById("infoTongSoDuong").innerHTML = result;
}

//2 Đếm có bao nhiêu số dương trong mảng.
function demSoDuong() {
    if (listNumber.length > 0) {
        var dem = 0;
        for (var i = 0; i < listNumber.length; i++) {
            var item = listNumber[i];
            if (item > 0) {
                dem++;
            }
        }
        var result = "Có: " + dem + " số dương";
        document.getElementById("infoDemSoDuong").innerHTML = result;
    } else {
        alert("Vui lòng nhập số");
    }
}

//3 Tìm số nhỏ nhất trong mảng.
function soNhoNhat(array) {
    var min = listNumber[0];
    for (var i = 1; i < listNumber.length; i++) {
        if (min > listNumber[i]) {
            min = listNumber[i];
        }
    }
    var result = "Số nhỏ nhất trong mảng: " + min;
    document.getElementById("infoSoNhoNhat").innerHTML = result;
}

//4 Tìm số dương nhỏ nhất trong mảng.
function soDuongNhoNhat(array) {
    var min = listNumber[0];
    for (var i = 1; i < listNumber.length; i++) {
        if (min > listNumber[i]) {
            min = listNumber[i];
        }
    }
    var result = "Số dương nhỏ nhất trong mảng: " + min;
    document.getElementById("infoSoDuongNhoNhat").innerHTML = result;
}


//5 Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
function check(n) {
    var flag = 1;
    if (n % 2 == 0) flag = 0;
    return flag;
}
function soChanCuoiCung() {
    var last = listNumber[0];
    for (var i = listNumber.length - 1; i >= 0; i--) {
        if (check(listNumber[i]) == 1) return listNumber[i];
        last = listNumber[i];
    }
    var result = "Số chẵn cuối cùng: " + last;
    document.getElementById("infoSoChanCuoiCung").innerHTML = result;
}

//6 Đổi chỗ 2 giá trị trong mảng theo vị trí 
function interChangeSort(array) {
    for (let i = 0; i < listNumber.length - 1; i++) {
        for (let j = i + 1; j < listNumber.length; j++) {
            if (listNumber[j] < listNumber[i]) {
                let t = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = t;
            }
        }
    }
}

//7 Sắp xếp mảng theo thứ tự tăng dần.
function sapXepTangDan(array) {
    var increase = listNumber[0];
    for (var i = 0; i > 0; i++) {
        increase = listNumber.sort();
    }
    var result = "Tăng dần: " + increase;
    document.getElementById("infoSapXepTangDan").innerHTML = result;

}
//8 Tìm số nguyên tố đầu tiên trong mảng.
function SNT() {
    if (listNumber < 2)
        return 0;
    for (var i = 2; i < listNumber.length; i++)
        if (listNumber % i == 0)
            return 0;
    return 1;
}
function SNTDauTien() {
    for (var i = 0; i < listNumber.length; i++)
        if (SNT(listNumber[i]) == 1)
            return listNumber[i];
    return -1;
}

//9 Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
function checkSoNguyen() {
    var flag = 1;
    if (Math.ceil(n) != Math.floor(n)) flag = 0;
    return flag;
};
for (var i = 0; i < listNumber.length; i++) {
    check = checkSoNguyen(listNumber[i]);
    if (check == 1) {
        console.log(listNumber[i] + " ");
        total += listNumber[i];
    }
}
document.getElementById("infoCheckSoNguyen") + "Số nguyên: " + total;


//10 So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.