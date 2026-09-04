// Veyma VIP - initial frontend shell.
// Firebase connection and secure Firestore rules will be added in the next step.

const params = new URLSearchParams(window.location.search);
const cardId = params.get("card");

const customerView = document.getElementById("customer-view");
const adminLogin = document.getElementById("admin-login");
const adminView = document.getElementById("admin-view");

function formatToman(value) {
  if (value === null || value === undefined || value === "") return "—";
  return Number(value).toLocaleString("fa-IR") + " تومان";
}

// Temporary screen logic only.
// Do not put real customer data in this file.
// Real customer data will come from Firebase after secure authentication/rules are connected.

if (!cardId) {
  document.getElementById("customer-name").textContent = "کارت شناسایی نشد";
  document.getElementById("purchase-count").textContent = "—";
  document.getElementById("purchase-total").textContent = "—";
  document.getElementById("reward").textContent = "—";
}

// These handlers are placeholders until Firebase Auth/Firestore is connected.
document.getElementById("google-login").addEventListener("click", () => {
  alert("ورود Google در مرحله اتصال Firebase فعال می‌شود.");
});

document.getElementById("logout").addEventListener("click", () => {
  adminView.classList.add("hidden");
  adminLogin.classList.remove("hidden");
});

document.getElementById("confirm-purchase").addEventListener("click", () => {
  const amount = document.getElementById("purchase-amount").value;
  if (!amount || Number(amount) <= 0) {
    alert("مبلغ خرید را وارد کنید.");
    return;
  }
  alert("ثبت واقعی خرید بعد از اتصال امن به Firebase انجام می‌شود.");
});

document.getElementById("save-settings").addEventListener("click", () => {
  const threshold = document.getElementById("threshold").value;
  const reward = document.getElementById("reward-amount").value;
  if (!threshold || Number(threshold) <= 0 || Number(reward) < 0) {
    alert("مقادیر تنظیمات را صحیح وارد کنید.");
    return;
  }
  alert("ذخیره واقعی تنظیمات بعد از اتصال Firebase انجام می‌شود.");
});
