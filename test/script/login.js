document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const userValue = username.value.trim();
    const passValue = password.value.trim();
  
    if (userValue === "") {
      alert("아이디를 입력하세요.");
      username.focus();
      return;
    }
  
    if (passValue === "") {
      alert("비밀번호를 입력하세요.");
      password.focus();
      return;
    }
  
    if (passValue.length < 4) {
      alert("비밀번호는 최소 4자 이상이어야 합니다.");
      password.focus();
      return;
    }
  
    const hasUpper = /[A-Z]/.test(passValue);
    const hasLower = /[a-z]/.test(passValue);
    const hasNumber = /\d/.test(passValue);
  
    if (!(hasUpper && hasLower && hasNumber)) {
      alert("비밀번호는 영문 대소문자와 숫자를 포함해야 합니다.");
      password.focus();
      return;
    }
  
    if (userValue === "admin" && passValue === "Aa12") {
      alert("로그인 성공");
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      username.focus();
    }
  });
  