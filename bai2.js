do {
    let n = parseInt(prompt("Nhập nhiệt độ hiện tại: "));
    if(n > 100){
        alert("Yêu cầu giảm nhiệt độ: ");
        let n = parseInt(prompt("Giảm nhiệt độ: "));
        alert("Nhiệt độ là : " + n);
        break;
    }
    else if(n < 20){
        alert("Yêu cầu tăng nhiệt độ: ");
        let n = parseInt(prompt("Tăng nhiệt độ: "));
        alert("Nhiệt độ là : " + n);
        break;
    }
    else{
        alert("Nhiệt độ là : " + n);
        break;
    }
}while (true);