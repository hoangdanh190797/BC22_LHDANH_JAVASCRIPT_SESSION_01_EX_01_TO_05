//Bài 01
//Đầu vào:
//  Số ngày làm
//  Lương 1 ngày: 100.000
//Xử lý:
//  Tạo biến soNgaylam
//  Tạo biến luongMotngay
//  Tạo biến soTienluong
//  In ra màn hình
//Đầu ra:
//  In kết quả

    // - Đầu vào
    var soNgaylam = 30;
    const soTienluongMotngay = 100000;
    // - Xử lý
    var soTienluongDuocnhan = soNgaylam * soTienluongMotngay;
  
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tienLuongthucNhan = currentFormat.format(soTienluongDuocnhan);
    // - Đầu ra
    console.log("Số tiền lương sau 30 ngày làm là: "+ tienLuongthucNhan + " vnđ");
  
  //Bài 02
  //Đầu vào:
  //  Nhập 5 số thực
  //Xử lý:
  //  Tạo biến cho số thực thứ 1
  //  Tạo biến cho số thực thứ 2
  //  Tạo biến cho số thực thứ 3
  //  Tạo biến cho số thực thứ 4
  //  Tạo biến cho số thực thứ 5
  //  (Tổng giá trị của 5 số) / 5 = kQua
  //Đầu ra:
  //  In kết quả ra màn hình
  
    // Đầu vào
    var soThucthu1 = 2;
    var soThucthu2 = 3;
    var soThucthu3 = 4;
    var soThucthu4 = 5;
    var soThucthu5 = 6;
    // Xử lý
    var kQuatBinh =
      (soThucthu1 + soThucthu2 + soThucthu3 + soThucthu4 + soThucthu5) / 5;
    // Đầu ra
    console.log("Giá trị trung bình của 5 số thực là: " + kQuatBinh);
  
  //Bài 03
  //Đầu vào:
  //  Nhập vào số tiền USD cần quy đổi ra VND
  //Xử lý:
  //  Tạo biến soTienuSd (Lấy giá trị)
  //  Tạo hằng số const MotUSDbang = 235000
  //  Tạo biến soTienVndSaukhiDoi = soTienuSd / MotUSBbang;
  //Đầu ra:
  // In ra kết quả ra màn hình

    //Đầu vào
    var soTienuSd = 100;
    const MotUSDbang = 23500;
    //Xử lý
    var soTienVndSaukhiDoi = soTienuSd * MotUSDbang;
  
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var tienBaibaVnD = currentFormat.format(soTienVndSaukhiDoi);
    //Đầu ra
    console.log("Số tiền Việt Nam đồng sau khi quy đổi 100 USD là: " + tienBaibaVnD + " vnđ");
  
  //Bài 04
  //Đầu vào:
  //  Chiều dài hình chữ nhật
  //  Chiều rộng hình chữ nhật
  //Xử lý:
  //  Tạo biến chiều dài
  //  Tạo biến chiều động
  //  Tạo biến chu vi = (dài + rộng)*2
  //  Tạo biến diện tích = dài * rộng
  //Đầu ra:
  //  In ra kết quả chu vi, diện tích
  
    //Đầu vào
    var chieuDai = 20;
    var chieuRong = 10;
    //Xử lý
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    //Đầu ra
    console.log("Chu vi hình chữ nhật là: " + chuVi + "m");
    console.log("Diện tích hình chữ nhật là: " + dienTich + "m2");
  
  //Bài 05
  //Đầu vào:
  //  Nhập vào 01 số có 02 chữ số
  //Xử lý:
  //  Tạo biến số vừa nhập
  //  Tạo biến lấy số ở hàng đơn vị của số vừa nhập
  //  Tạo biến lấy số ở hàng chục vị của số vừa nhập
  //  Tạo biến tổng = số hàng đơn vị + số hàng chục;
  //Đầu ra:
  // In kết quả ra màn hình

    //Đầu vào
    var soVuanhap = 44;
    //Xử lý
    var soHangdonVi = soVuanhap % 10;
    var soHangchuc = soVuanhap / 10;
    var soHangchucSaukhiLamtron = Math.round(soHangchuc);
    var tongHaihang = soHangchucSaukhiLamtron + soHangdonVi;
    //Đầu ra
    console.log("Tổng 2 ký số của số 44 là: " + tongHaihang);
  