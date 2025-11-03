document.addEventListener('DOMContentLoaded', function() {
    // 技能进度条动画
    const skillLevels = document.querySelectorAll('.skill-level');

    // 使用IntersectionObserver来检测元素是否进入视口
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 获取data-level属性并设置宽度
                const level = entry.target.getAttribute('data-level');
                entry.target.style.width = level;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    // 观察每个技能进度条
    skillLevels.forEach(skill => {
        observer.observe(skill);
    });

    // 个人介绍卡片点击效果
    const pointCards = document.querySelectorAll('.point-card');
    
    pointCards.forEach(card => {
        card.addEventListener('click', function() {
            // 创建点击波纹效果
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            
            // 设置波纹初始位置和大小
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            // 添加到卡片
            this.appendChild(ripple);
            
            // 动画结束后移除波纹元素
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // 粒子背景增强效果
    const particlesContainer = document.querySelector('.particles');

    // 创建额外的粒子元素
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // 随机大小和位置
        const size = Math.random() * 5 + 1;
        const posX = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 20 + 10;

        // 设置样式
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;

        // 添加到容器
        particlesContainer.appendChild(particle);
    }

    // 添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});