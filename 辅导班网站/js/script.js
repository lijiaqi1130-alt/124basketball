// 返回顶部
window.onscroll = function(){
    let btn = document.getElementById("backTop");
    if(document.documentElement.scrollTop > 300){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
}
function backTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

// 表单验证
function checkMsg(){
    let name = document.getElementById("username").value.trim();
    let phone = document.getElementById("phone").value.trim();
    if(name === ""){
        alert("请输入您的姓名！");
        return false;
    }
    if(phone.length !== 11 || isNaN(phone)){
        alert("请输入正确的11位手机号！");
        return false;
    }
    alert("留言提交成功，我们会尽快联系您！");
    return true;
}