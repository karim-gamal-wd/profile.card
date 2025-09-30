 // Tooltips
tippy('.link', {
  placement: 'bottom',
});

// عناصر هنستخدمها
const toggle = document.querySelector('.js-change-theme');
const body = document.body;
const profile = document.getElementById('profile');

// إعداد الصور (واحدة للفاتح وواحدة للغامق)
const lightBg = "https://source.unsplash.com/1L71sPT5XKc";
const darkBg = "https://source.unsplash.com/collection/190727/1600x900"; // صورة بديلة من Unsplash

// دالة لتغيير الوضع
function toggleTheme() {
  const isDark = body.classList.contains('dark');

  if (isDark) {
    // الوضع الفاتح 🌙
    toggle.innerHTML = "🌙";
    body.classList.remove('dark');
    body.classList.add('light');
    body.style.backgroundImage = `url(${lightBg})`;
    profile.classList.remove('bg-gray-900', 'text-gray-100');
    profile.classList.add('bg-white', 'text-gray-900');
  } else {
    // الوضع الغامق ☀️
    toggle.innerHTML = "☀️";
    body.classList.remove('light');
    body.classList.add('dark');
    body.style.backgroundImage = `url(${darkBg})`;
    profile.classList.remove('bg-white', 'text-gray-900');
    profile.classList.add('bg-gray-900', 'text-gray-100');
  }
}

// أول تحميل يخلي الخلفية فاتحة
body.style.backgroundImage = `url(${lightBg})`;
body.classList.add('light');

// تشغيل عند الضغط
toggle.addEventListener('click', toggleTheme);