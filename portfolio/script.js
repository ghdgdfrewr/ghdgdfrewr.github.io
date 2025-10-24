document.addEventListener('DOMContentLoaded', () => {
  // ===== 1. WAVE ANIMATION (TRANG CHỦ) =====
  const wave = document.querySelector('.animate-wave');
  if (wave) {
    setInterval(() => {
      wave.style.transform = 'rotate(20deg)';
      setTimeout(() => wave.style.transform = 'rotate(0deg)', 300);
    }, 3000);
  }

  // ===== 2. RESPONSIVE SIDEBAR (MOBILE) =====
  const sidebar = document.getElementById('sidebar');
  const openBtn = document.getElementById('open-sidebar');
  const closeBtn = document.getElementById('close-sidebar');

  if (openBtn && closeBtn && sidebar) {
    openBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.remove('-translate-x-full');
    });

    closeBtn.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
    });

    // Đóng khi click ngoài
    document.addActiveListener('click', (e) => {
      if (!sidebar.contains(e.target) && !openBtn.contains(e.target) && !sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.add('-translate-x-full');
      }
    });
  }

  // ===== 3. TABS SYSTEM (introduce.html) =====
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
              <span class="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">ReactJS</span>
              <span class="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">JavaScript</span>
              <span class="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">HTML5</span>
              <span class="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">CSS3</span>
              <span class="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">Tailwind CSS</span>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4 text-primary">Backend & Tools</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">Node.js</span>
              <span class="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">Express</span>
              <span class="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">SQL Server</span>
              <span class="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">Git</span>
              <span class="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">VS Code</span>
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
            <h3 class="text-xl font-bold">Website học tiếng Anh</h3>
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
            <p class="text-sm text-gray-600">Cơ bản về mạng: TCP/IP, OSI model, cấu hình router/switch.</p>
            <p class="text-xs text-gray-500 mt-2">Cấp ngày: 2025</p>
          </div>
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
            <p class="text-sm text-gray-600">Cú pháp JS cơ bản, DOM manipulation, xử lý sự kiện.</p>
            <p class="text-xs text-gray-500 mt-2">Cấp ngày: 2025</p>
          </div>
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
            <p class="text-sm text-gray-600">Nâng cao: ES6+, async/await, error handling, modules.</p>
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

    // Xử lý click tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // Reset tất cả tab
        document.querySelectorAll('.tab-btn').forEach(b => {
          b.classList.remove('active', 'bg-primary', 'text-white');
          b.classList.add('bg-gray-200', 'text-gray-700');
        });
        // Active tab hiện tại
        btn.classList.remove('bg-gray-200', 'text-gray-700');
        btn.classList.add('active', 'bg-primary', 'text-white');
        // Render nội dung
        document.getElementById('tab-content').innerHTML = tabs[btn.dataset.tab] || '<p class="text-center text-gray-500">Chưa có nội dung.</p>';
      });
    });

    // Load tab mặc định
    const defaultTab = document.querySelector('.tab-btn.active');
    if (defaultTab) defaultTab.click();
    else document.querySelector('.tab-btn')?.click();
  }

  // ===== 4. BACK BUTTON (TẤT CẢ TRANG) =====
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      history.back();
    });
  });

  // ===== 5. BLOG SYSTEM (blog.html) – SẼ HOÀN THIỆN SAU =====
  // (Bạn có thể thêm dữ liệu bài viết vào đây)
});