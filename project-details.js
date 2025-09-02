const projectsData = {
    'pos-dashboard': {
        title: 'POS Monitoring Dashboard',
        subtitle: 'Real-time System Monitoring & Analytics',
        description: 'A comprehensive Point of Sale monitoring system designed to track uptime, downtime, and performance metrics in real-time. Built with modern web technologies to provide actionable insights for operational efficiency.',
        overview: [
            'The POS Monitoring Dashboard was developed to address the critical need for real-time monitoring of point-of-sale systems across multiple locations. This project combines advanced SQL querying with interactive data visualization to provide stakeholders with immediate insights into system performance.',
            'The dashboard features real-time status updates, historical performance tracking, automated alert systems, and comprehensive reporting capabilities. It has significantly improved operational response times and reduced system downtime through proactive monitoring.',
            'Key achievements include 40% reduction in average downtime, 60% faster issue identification, and comprehensive analytics that drove data-informed operational decisions.'
        ],
        technologies: [
            { name: 'SQL Server', icon: 'fas fa-database' },
            { name: 'JavaScript', icon: 'fab fa-js-square' },
            { name: 'Chart.js', icon: 'fas fa-chart-line' },
            { name: 'Real-time APIs', icon: 'fas fa-bolt' },
            { name: 'Responsive Design', icon: 'fas fa-mobile-alt' }
        ],
        features: [
            'Real-time system status monitoring',
            'Interactive performance dashboards',
            'Automated alert notifications',
            'Historical data analysis',
            'Multi-location support',
            'Custom reporting tools'
        ],
        gallery: [
            {
                title: 'Dashboard Overview',
                description: 'Main dashboard showing real-time system status and key metrics',
                icon: 'fas fa-tachometer-alt',
                background: 'dashboard-bg',
                image: 'images/JPOSDashboard.png'
            },
            {
                title: 'Analytics Panel',
                description: 'Detailed analytics with interactive charts and graphs',
                icon: 'fas fa-chart-bar',
                background: 'dashboard-bg',
                image: 'images/JPOSAnalytics.png'
            },
            {
                title: 'Alert System',
                description: 'Real-time notification system for system alerts',
                icon: 'fas fa-exclamation-triangle',
                background: 'dashboard-bg',
                image: 'images/JPOSAlert.png'
            },
            {
                title: 'Reporting Interface',
                description: 'Comprehensive reporting tools for data analysis',
                icon: 'fas fa-file-chart-pie',
                background: 'dashboard-bg',
                image: 'images/JPOSReport.png'
            }
        ],
        actions: [
            { text: 'View Live Demo', icon: 'fas fa-external-link-alt', type: 'primary', url: '#' },
            { text: 'View Source Code', icon: 'fab fa-github', type: 'secondary', url: '#' }
        ]
    },
    'lseed-insights': {
        title: 'LSEED Insight',
        subtitle: 'Analytics Platform for Social Enterprises and Mentors',
        description: 'A sophisticated analytics platform specifically designed for social enterprises, featuring automated reporting capabilities and interactive data visualization to drive impactful decision-making.',
        overview: [
            'LSEED Insights represents a breakthrough in social enterprise analytics, providing organizations with the tools they need to measure, analyze, and optimize their social impact. The platform combines automated data collection with intelligent reporting to streamline operations.',
            'The system features advanced data visualization, automated report generation, impact measurement tools, and stakeholder dashboards. It has enabled social enterprises to better understand their performance and communicate their impact effectively.',
            'This platform has been instrumental in helping organizations track their social impact metrics, optimize resource allocation, and demonstrate value to stakeholders through comprehensive analytics and reporting.'
        ],
        technologies: [
            { name: 'React.js', icon: 'fab fa-react' },
            { name: 'Node.js', icon: 'fab fa-node' },
            { name: 'PostgreSQL', icon: 'fas fa-database' },
            { name: 'Data Visualization', icon: 'fas fa-chart-pie' },
            { name: 'Automation APIs', icon: 'fas fa-cogs' },
            { name: 'Report Generation', icon: 'fas fa-file-pdf' }
        ],
        features: [
            'Automated data collection and processing',
            'Interactive impact visualization',
            'Stakeholder dashboard views',
            'Custom report generation',
            'Performance benchmarking',
            'Social impact measurement'
        ],
        gallery: [
            {
                title: 'Dashboard',
                description: 'Visual overview of social impact metrics and KPIs',
                icon: 'fas fa-heart',
                background: 'analytics-bg',
                image: 'images/dashboard.png'
            },
            {
                title: 'Financial Analytics',
                description: 'Interactive charts showing financial insights',
                icon: 'fas fa-chart-area',
                background: 'analytics-bg',
                image: 'images/FinancialAnalyticsPage.png'
            },
            {
                title: 'Report Builder',
                description: 'Automated report generation with customizable templates',
                icon: 'fas fa-file-contract',
                background: 'analytics-bg',
                image: 'images/SocialEnterprise.jpg'
            },
            {
                title: 'LISA Bot',
                description: 'Dedicated interface for stakeholder engagement and scheduling',
                icon: 'fas fa-users',
                background: 'analytics-bg',
                image: 'images/Bot via Telegram 1.png'
            }
        ],
        actions: [
            { text: 'View Case Study', icon: 'fas fa-book-open', type: 'primary', url: '#' },
            { text: 'Contact for Demo', icon: 'fas fa-envelope', type: 'secondary', url: '#contact' }
        ]
    },
    'api-integration': {
        title: 'Enterprise API Integration',
        subtitle: 'Scalable Backend Solutions',
        description: 'A robust API integration solution designed to connect disparate enterprise systems, enabling seamless data flow and improving operational efficiency across multiple platforms.',
        overview: [
            'The Enterprise API Integration project was developed to solve complex data synchronization challenges across multiple enterprise systems. This solution provides a unified interface for diverse data sources while maintaining high performance and reliability.',
            'The system features RESTful API design, real-time data synchronization, comprehensive error handling, and scalable architecture. It has successfully reduced data inconsistencies by 95% and improved system integration efficiency by 70%.',
            'Key technical achievements include implementing robust security protocols, developing comprehensive API documentation, and creating monitoring systems that ensure 99.9% uptime across all integrated services.'
        ],
        technologies: [
            { name: 'Node.js', icon: 'fab fa-node-js' },
            { name: 'Express.js', icon: 'fas fa-server' },
            { name: 'MongoDB', icon: 'fas fa-leaf' },
            { name: 'REST APIs', icon: 'fas fa-plug' },
            { name: 'Docker', icon: 'fab fa-docker' }
        ],
        features: [
            'RESTful API architecture',
            'Real-time data synchronization',
            'Comprehensive error handling',
            'API rate limiting and security',
            'Automated testing suite',
            'Performance monitoring'
        ],
        gallery: [
            {
                title: 'API Architecture',
                description: 'System architecture showing API endpoints and data flow',
                icon: 'fas fa-sitemap',
                background: 'api-bg',
                image: 'images/projects/api-integration/api-architecture.jpg'
            },
            {
                title: 'Integration Dashboard',
                description: 'Monitoring interface for API performance and health',
                icon: 'fas fa-network-wired',
                background: 'api-bg',
                image: 'images/projects/api-integration/integration-dashboard.jpg'
            },
            {
                title: 'Security Layer',
                description: 'Authentication and authorization implementation',
                icon: 'fas fa-shield-alt',
                background: 'api-bg',
                image: 'images/projects/api-integration/security-layer.jpg'
            },
            {
                title: 'Documentation Portal',
                description: 'Interactive API documentation and testing interface',
                icon: 'fas fa-book',
                background: 'api-bg',
                image: 'images/projects/api-integration/documentation-portal.jpg'
            }
        ],
        actions: [
            { text: 'View Documentation', icon: 'fas fa-book-open', type: 'primary', url: '#' },
            { text: 'GitHub Repository', icon: 'fab fa-github', type: 'secondary', url: '#' }
        ]
    }
};

let currentImageIndex = 0;
let currentGallery = [];

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');
    
    if (projectId && projectsData[projectId]) {
        loadProject(projectId);
        setupModalEvents();
        setupScrollTop();
    } else {
        window.location.href = 'index.html#projects';
    }
});

function loadProject(projectId) {
    const project = projectsData[projectId];
    
    const headerContent = document.getElementById('project-content');
    headerContent.innerHTML = `
        <h1 class="project-title fade-in">${project.title}</h1>
        <p class="project-subtitle fade-in">${project.subtitle}</p>
        <p class="project-description fade-in">${project.description}</p>
    `;
    
    loadGallery(project.gallery);
    loadOverview(project.overview);
    loadTechStack(project.technologies);
    loadFeatures(project.features);
    loadActions(project.actions);
    loadRelatedProjects(projectId);
    animateOnScroll();
}

function loadGallery(gallery) {
    const galleryContainer = document.getElementById('project-gallery');
    currentGallery = gallery;
    
    galleryContainer.innerHTML = gallery.map((item, index) => {
        const imageContent = item.image 
            ? `<img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
               <div class="gallery-icon-fallback" style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; font-size: var(--font-size-3xl); color: var(--accent-color);">
                   <i class="${item.icon}"></i>
               </div>`
            : `<i class="${item.icon}"></i>`;
            
        return `
            <div class="gallery-item fade-in" onclick="openModal(${index})">
                <div class="gallery-image ${item.background}">
                    ${imageContent}
                </div>
                <div class="gallery-caption">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
    }).join('');
}

function loadOverview(overview) {
    const overviewContainer = document.getElementById('project-overview');
    overviewContainer.innerHTML = overview.map(paragraph => 
        `<p>${paragraph}</p>`
    ).join('');
}

function loadTechStack(technologies) {
    const techContainer = document.getElementById('tech-stack');
    techContainer.innerHTML = technologies.map(tech => `
        <div class="tech-item">
            <i class="${tech.icon}"></i>
            ${tech.name}
        </div>
    `).join('');
}

function loadFeatures(features) {
    const featuresContainer = document.getElementById('features-list');
    featuresContainer.innerHTML = features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
}

function loadActions(actions) {
    const actionsContainer = document.getElementById('project-actions');
    actionsContainer.innerHTML = actions.map(action => `
        <a href="${action.url}" class="action-btn ${action.type}">
            <i class="${action.icon}"></i>
            ${action.text}
        </a>
    `).join('');
}

function loadRelatedProjects(currentProjectId) {
    const relatedContainer = document.getElementById('related-projects');
    const relatedProjects = Object.keys(projectsData)
        .filter(id => id !== currentProjectId)
        .slice(0, 3);
    
    relatedContainer.innerHTML = relatedProjects.map(projectId => {
        const project = projectsData[projectId];
        const mainGalleryItem = project.gallery[0];
        
        return `
            <a href="project-details.html?project=${projectId}" class="related-project fade-in">
                <div class="related-image ${mainGalleryItem.background}">
                    <i class="${mainGalleryItem.icon}"></i>
                </div>
                <div class="related-content">
                    <h3>${project.title}</h3>
                    <p>${project.subtitle}</p>
                </div>
            </a>
        `;
    }).join('');
}

function openModal(imageIndex) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    currentImageIndex = imageIndex;
    const galleryItem = currentGallery[imageIndex];
    
    modal.style.display = 'block';
    
    if (galleryItem.image) {
        modalImage.src = galleryItem.image;
        modalImage.alt = galleryItem.title;
        modalImage.style.display = 'block';
        modalCaption.innerHTML = `
            <div style="padding: 20px;">
                <h3 style="color: var(--text-primary); margin-bottom: 10px;">${galleryItem.title}</h3>
                <p>${galleryItem.description}</p>
            </div>
        `;
    } else {
        modalImage.style.display = 'none';
        modalCaption.innerHTML = `
            <div class="gallery-image ${galleryItem.background}" style="height: 400px; border-radius: 8px 8px 0 0;">
                <i class="${galleryItem.icon}"></i>
            </div>
            <div style="padding: 20px;">
                <h3 style="color: var(--text-primary); margin-bottom: 10px;">${galleryItem.title}</h3>
                <p>${galleryItem.description}</p>
            </div>
        `;
    }
    
    updateModalNavigation();
    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
    openModal(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
    openModal(currentImageIndex);
}

function updateModalNavigation() {
    const prevBtn = document.getElementById('modalPrev');
    const nextBtn = document.getElementById('modalNext');
    
    if (currentGallery.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';
    }
}

function setupModalEvents() {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.getElementById('modalPrev');
    const nextBtn = document.getElementById('modalNext');
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        }
    });
}

function setupScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const animatedElements = document.querySelectorAll('.gallery-item, .related-project, .project-info, .meta-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href^="#"]');
    if (target) {
        const href = target.getAttribute('href');
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }
});

function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    toggleMobileMenu();
});

function getCurrentProjectId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('project');
}

function updatePageTitle(projectId) {
    if (projectsData[projectId]) {
        document.title = `${projectsData[projectId].title} - Jean Mikael Mariano`;
    }
}

function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100px;">
                <div style="animation: spin 1s linear infinite; border: 2px solid var(--border-color); border-top: 2px solid var(--accent-color); border-radius: 50%; width: 30px; height: 30px;"></div>
            </div>
        `;
    }
}

function handleProjectNotFound() {
    const headerContent = document.getElementById('project-content');
    headerContent.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
            <i class="fas fa-exclamation-triangle" style="font-size: 4rem; color: var(--accent-color); margin-bottom: 20px;"></i>
            <h1 style="color: var(--text-primary); margin-bottom: 10px;">Project Not Found</h1>
            <p style="color: var(--text-secondary); margin-bottom: 30px;">The requested project could not be found.</p>
            <a href="index.html#projects" class="action-btn primary">
                <i class="fas fa-arrow-left"></i>
                Return to Projects
            </a>
        </div>
    `;
}

function lazyLoadGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                imageObserver.unobserve(item);
            }
        });
    });
    
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        imageObserver.observe(item);
    });
}

function ensureAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes shimmer {
            0%, 100% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
        }
        
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', function() {
    ensureAnimations();
    
    const animatableElements = document.querySelectorAll('.gallery-item, .related-project, .project-info, .meta-card');
    animatableElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});