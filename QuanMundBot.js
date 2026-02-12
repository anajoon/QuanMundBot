document.addEventListener("DOMContentLoaded", () => {
  const statusBox = document.getElementById("bot-status");
  const logBox = document.getElementById("bot-log");

  // سیستم لاگ حرفه‌ای
  function log(msg, type = "info") {
    const time = new Date().toLocaleTimeString();
    let color = "#93c5fd"; // آبی روشن

    if (type === "success") color = "#4ade80";
    if (type === "error") color = "#f87171";
    if (type === "warn") color = "#facc15";

    logBox.innerHTML += `
      <div style="margin-bottom:6px; color:${color}">
        [${time}] ${msg}
      </div>
    `;

    logBox.scrollTop = logBox.scrollHeight;
  }

  // وضعیت اولیه
  statusBox.innerText = "QuanMundBot بارگذاری شد ✔️";
  log("سیستم با موفقیت راه‌اندازی شد.", "success");
  log("در انتظار شروع شبیه‌سازی...", "info");

  // تابع عمومی برای استفاده در HTML
  window.startSimulation = () => {
    log("شبیه‌سازی آغاز شد...", "success");

    // نمونه‌ای از رفتار ربات (فعلاً تستی)
    simulateBot();
  };

  // شبیه‌سازی رفتار ربات
  function simulateBot() {
    log("در حال بررسی شرایط بازار...", "info");

    setTimeout(() => {
      log("دریافت داده‌های قیمت (نسخه تست)...", "info");
    }, 1000);

    setTimeout(() => {
      log("تحلیل روند بازار...", "info");
    }, 2000);

    setTimeout(() => {
      log("هیچ معامله‌ای انجام نشد (نسخه تست).", "warn");
    }, 3500);

    setTimeout(() => {
      log("شبیه‌سازی پایان یافت.", "success");
    }, 5000);
  }

});
