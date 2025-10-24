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
            <p class="text-gray-600">Unity 2D, C#, Pixel Art</p>
          </div>
          <div class="text-center p-6 bg-orange-50 rounded-2xl">
            <i class="fas fa-laptop-code text-4xl text-primary mb-3"></i>
            <h3 class="font-bold text-xl">Full Stack</h3>
            <p class="text-gray-600">React, Node.js, SQL Server</p>
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
              ${['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map(s => `<span class="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">${s}</span>`).join('')}
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4 text-primary">Backend & Tools</h3>
            <div class="flex flex-wrap gap-2">
              ${['Node.js', 'Express', 'SQL Server', 'Git', 'VS Code'].map(s => `<span class="px-4 py-2 bg-orange-100 text-primary rounded-full text-sm font-medium">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      `,
      experience: `<h2 class="text-3xl font-bold mb-6">Kinh nghiệm</h2><p>FigureVerse, Chaos Swarm...</p>`,
      education: `<h2 class="text-3xl font-bold mb-6">Học vấn</h2><p>HUTECH, IBM, Cisco...</p>`
    };

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active', 'bg-primary', 'text-white'));
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.add('bg-gray-200', 'text-gray-700'));
        btn.classList.remove('bg-gray-200', 'text-gray-700');
        btn.classList.add('active', 'bg-primary', 'text-white');
        document.getElementById('tab-content').innerHTML = tabs[btn.dataset.tab];
      });
    });

    // Load default tab
    document.querySelector('.tab-btn.active').click();
  }

  // Blog posts
  if (document.getElementById('blog-container')) {
    const posts = [/* 9 bài như trước, đầy đủ code */];
    const container = document.getElementById('blog-container');
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
});

function showPost(id) {
  // Load bài viết chi tiết
}