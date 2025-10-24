document.addEventListener('DOMContentLoaded', () => {
  // Wave animation
  const wave = document.querySelector('.animate-wave');
  if (wave) {
    setInterval(() => {
      wave.style.transform = 'rotate(20deg)';
      setTimeout(() => wave.style.transform = 'rotate(0deg)', 300);
    }, 3000);
  }

  // Tabs for introduce.html
  if (document.getElementById('tab-buttons')) {
    const tabs = {
      about: `
        <h2 class="text-3xl font-bold mb-6">Về tôi</h2>
        <p class="text-lg leading-relaxed mb-8">
          Tôi là một lập trình viên Full Stack trong lĩnh vực phát triển phần mềm. 
          Tôi có đam mê tạo ra những sản phẩm digital chất lượng cao và luôn tìm kiếm những thử thách mới.
        </p>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center p-6 bg-orange-50 rounded-2xl">
            <i class="fas fa-gamepad text-4xl text-primary mb-3"></i>
            <h3 class="font-bold text-xl">Game Developer</h3>
            <p class="text-gray-600">Unity 3D, Basic Game, Pixel Art</p>
          </div>
          <div class="text-center p-6 bg-orange-50 rounded-2xl">
            <i class="fas fa-laptop-code text-4xl text-primary mb-3"></i>
            <h3 class="font-bold text-xl">Full Stack</h3>
            <p class="text-gray-600">HTML, JavaScript, Node.js, SQL Server</p>
          </div>
          <div class="text-center p-6 bg-orange-50 rounded-2xl">
            <i class="fas fa-paint-brush text-4xl text-primary mb-3"></i>
            <h3 class="font-bold text-xl">UI/UX</h3>
            <p class="text-gray-600">Design, Responsive, Figma</p>
          </div>
        </div>
      `,

      skills: `
        <h2 class="text-3xl font-bold mb-6">Kỹ năng chuyên môn</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4 text-primary">Frontend</h3>
            <div class="flex flex-wrap gap-2">
              ${['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map(s => 
                `<span class="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">${s}</span>`
              ).join('')}
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4 text-primary">Backend & Tools</h3>
            <div class="flex flex-wrap gap-2">
              ${['Node.js', 'Express', 'SQL Server', 'Git', 'VS Code'].map(s => 
                `<span class="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">${s}</span>`
              ).join('')}
            </div>
          </div>
        </div>
      `,

      experience: `
        <h2 class="text-3xl font-bold mb-6">Kinh nghiệm</h2>
        <div class="space-y-6">
          <div class="border-l-4 border-primary pl-6">
            <h3 class="text-xl font-bold">Snake Game</h3>
            <p class="text-gray-600">Game basic – HTML</p>
          </div>
          <div class="border-l-4 border-primary pl-6">
            <h3 class="text-xl font-bold">Websiite học tiếng Anh</h3>
            <p class="text-gray-600">Học tập, nâng cao trình độ anh ngữ – ASP Net Core, AI</p>
          </div>
        </div>
      `,

      education: `
        <h2 class="text-3xl font-bold mb-6">Học vấn</h2>
        <div class="space-y-6">
          <div class="border-l-4 border-primary pl-6">
            <h3 class="text-xl font-bold">Đại học Công nghệ TP.HCM (HUTECH)</h3>
            <p class="text-gray-600">Cử nhân Công nghệ Thông tin – 2022–2026</p>
          </div>
          <div class="border-l-4 border-primary pl-6">
            <h3 class="text-xl font-bold">Developer tại nhà</h3>
            <p class="text-gray-600">Khóa học AI, Cloud Computing, Netacad</p>
          </div>
          <div class="border-l-4 border-primary pl-6">
            <h3 class="text-xl font-bold">Ielts learner tại Lisa Center</h3>
            <p class="text-gray-600">Ielts, English, Target 8.5</p>
          </div>
        </div>
      `,

      certificates: `
        <h2 class="text-3xl font-bold mb-6">Chứng chỉ Cisco Networking Academy</h2>
        <p class="text-lg text-gray-600 mb-8">
          Các chứng chỉ chính thức từ Cisco, được xác minh trên Credly.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Networking Basics -->
          <div class="bg-gradient-to-br from-white to-orange-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100">
            <div class="flex items-center gap-4 mb-3">
              <img src="https://images.credly.com/images/fc150033-91c3-4289-a541-f5839f1dd59d/networking-basics.png" 
                   alt="Networking Basics" class="w-20 h-20 object-contain rounded-lg shadow-md" 
                   onerror="this.src='https://via.placeholder.com/80?text=NET'">
              <div>
                <h3 class="font-bold text-lg">
                  <a href="https://www.credly.com/badges/fc150033-91c3-4289-a541-f5839f1dd59d" target="_blank" 
                     class="text-primary hover:underline">Networking Basics</a>
                </h3>
                <p class="text-sm text-gray-600">Cisco Networking Academy</p>
              </div>
            </div>
            <p class="text-sm text-gray-600">
              Cơ bản về mạng: TCP/IP, OSI model, cấu hình router/switch.
            </p>
            <p class="text-xs text-gray-500 mt-2">Cấp ngày: 2025</p>
          </div>

          <!-- JavaScript Essentials 1 -->
          <div class="bg-gradient-to-br from-white to-orange-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100">
            <div class="flex items-center gap-4 mb-3">
              <img src="https://images.credly.com/images/c280dfe3-5edf-48eb-83d2-f4962159dafd/javascript-essentials-1.png" 
                   alt="JavaScript Essentials 1" class="w-20 h-20 object-contain rounded-lg shadow-md" 
                   onerror="this.src='https://via.placeholder.com/80?text=JS1'">
              <div>
                <h3 class="font-bold text-lg">
                  <a href="https://www.credly.com/badges/c280dfe3-5edf-48eb-83d2-f4962159dafd" target="_blank" 
                     class="text-primary hover:underline">JavaScript Essentials 1</a>
                </h3>
                <p class="text-sm text-gray-600">Cisco Networking Academy</p>
              </div>
            </div>
            <p class="text-sm text-gray-600">
              Cú pháp JS cơ bản, DOM manipulation, xử lý sự kiện.
            </p>
            <p class="text-xs text-gray-500 mt-2">Cấp ngày: 2025</p>
          </div>

          <!-- JavaScript Essentials 2 -->
          <div class="bg-gradient-to-br from-white to-orange-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-orange-100">
            <div class="flex items-center gap-4 mb-3">
              <img src="https://images.credly.com/images/0be946b2-939c-43fe-b0c3-af7507540e7a/javascript-essentials-2.png" 
                   alt="JavaScript Essentials 2" class="w-20 h-20 object-contain rounded-lg shadow-md" 
                   onerror="this.src='https://via.placeholder.com/80?text=JS2'">
              <div>
                <h3 class="font-bold text-lg">
                  <a href="https://www.credly.com/earner/earned/badge/0be946b2-939c-43fe-b0c3-af7507540e7a" target="_blank" 
                     class="text-primary hover:underline">JavaScript Essentials 2</a>
                </h3>
                <p class="text-sm text-gray-600">Cisco Networking Academy</p>
              </div>
            </div>
            <p class="text-sm text-gray-600">
              Nâng cao: ES6+, async/await, error handling, modules.
            </p>
            <p class="text-xs text-gray-500 mt-2">Cấp ngày: 2025</p>
          </div>
        </div>

        <div class="mt-8 text-center">
          <a href="https://www.credly.com/users/pham-duchuy" target="_blank" 
             class="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            Xem tất cả chứng chỉ trên Credly <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      `
    };

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => {
          b.classList.remove('active', 'bg-primary', 'text-white');
          b.classList.add('bg-gray-200', 'text-gray-700');
        });
        btn.classList.remove('bg-gray-200', 'text-gray-700');
        btn.classList.add('active', 'bg-primary', 'text-white');
        document.getElementById('tab-content').innerHTML = tabs[btn.dataset.tab] || '<p>Chưa có nội dung.</p>';
      });
    });

    // Load default tab
    document.querySelector('.tab-btn.active')?.click();
  }

  // Blog posts (giữ nguyên nếu có)
  if (document.getElementById('blog-container')) {
    const posts = [
      // Dán 10 bài blog vào đây nếu cần
    ];
    const container = document.getElementById('blog-container');
    if (posts.length > 0) {
      container.innerHTML = `
        <div class="grid gap-8" id="blog-list">
          ${posts.map(p => `
            <article class="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all cursor-pointer" onclick="showPost(${p.id})">
              <span class="px-3 py-1 bg-primary text-white rounded-full text-xs font-bold">${p.tag}</span>
              <h3 class="text-2xl font-bold mt-3 mb-2">${p.title}</h3>
              <p class="text-gray-600 mb-4">${p.excerpt}</p>
              <p class="text-sm text-gray-500">${p.date} • ${p.time}</p>
            </article>
          `).join('')}
        </div>
        <article id="blog-detail" class="hidden bg-white p-10 rounded-3xl shadow-2xl"></article>
      `;
    }
  }
});

// Hàm hiển thị bài viết chi tiết (nếu cần)
function showPost(id) {
  const posts = []; // Dán dữ liệu bài viết nếu cần
  const post = posts.find(p => p.id === id);
  if (post) {
    document.getElementById('blog-list').classList.add('hidden');
    const detail = document.getElementById('blog-detail');
    detail.classList.remove('hidden');
    detail.innerHTML = `
      <button onclick="backToList()" class="mb-6 text-primary font-semibold hover:underline">
        ← Quay lại danh sách
      </button>
      <h1 class="text-4xl font-bold mb-6">${post.title}</h1>
      <div class="prose max-w-none">${post.content}</div>
    `;
  }
}

function backToList() {
  document.getElementById('blog-detail').classList.add('hidden');
  document.getElementById('blog-list').classList.remove('hidden');
}
// Fix tab-content undefined
if (document.getElementById('tab-content')) {
  // Nội dung tabs như cũ
}