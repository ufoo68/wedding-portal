const emailInput = document.querySelector("#email-form-input");
const emailSendButton = document.querySelector("#email-form-send-button");

emailSendButton.addEventListener("click", function () {
  const reply_to = emailInput.value;
  const isOk = confirm(`${reply_to}でアドレスを登録します。よろしいですか？`);
  if (isOk) {
    emailjs
      .send("service_x1ey1ax", "template_xfgnaqq", {
        reply_to,
      })
      .then(
        function () {
          alert("登録されたアドレスにメールが送信されました。内容の確認をお願いします。");
        },
        function (error) {
          console.error("Send email failed...", error);
          alert("メールの送信に失敗しました。アドレスの確認をお願いします。");
        }
      );
  }
});
