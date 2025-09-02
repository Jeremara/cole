document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark');
            themeToggleIcon.classList.replace('fa-moon', 'fa-sun');
        }

        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            if (document.documentElement.classList.contains('dark')) {
                themeToggleIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.theme = 'dark';
            } else {
                themeToggleIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.theme = 'light';
            }
        });

    // OS Detection
    function detectOS() {
        const userAgent = window.navigator.userAgent;
        let os = 'Unknown OS';
        let osClass = '';
        let osIcon = '';
        
        if (userAgent.indexOf('Windows') !== -1) {
            os = 'Windows';
            osClass = 'windows';
            osIcon = '<i class="fab fa-windows text-xl text-blue-600"></i>';
        } else if (userAgent.indexOf('Mac') !== -1) {
            os = 'macOS';
            osClass = 'macos';
            osIcon = '<i class="fab fa-apple text-xl text-gray-800"></i>';
        } else if (userAgent.indexOf('Linux') !== -1) {
            os = 'Linux';
            osClass = 'linux';
            osIcon = '<i class="fab fa-linux text-xl text-orange-600"></i>';
        } else if (userAgent.indexOf('Android') !== -1) {
            os = 'Android';
            osClass = 'android';
            osIcon = '<i class="fab fa-android text-xl text-green-600"></i>';
        } else if (userAgent.indexOf('iOS') !== -1 || userAgent.indexOf('iPhone') !== -1 || userAgent.indexOf('iPad') !== -1) {
            os = 'iOS';
            osClass = 'ios';
            osIcon = '<i class="fab fa-apple text-xl text-gray-800"></i>';
        }
        
        return { name: os, class: osClass, icon: osIcon };
    }

    // Apply OS detection results
    const detectedOS = detectOS();
    const osElement = document.getElementById('detected-os');
    if (osElement) {
        osElement.textContent = detectedOS.name;
    }

    // Highlight the appropriate download box
    const downloadBoxes = {
        windows: document.getElementById('windows-download'),
        macos: document.getElementById('macos-download'),
        linux: document.getElementById('linux-download')
    };

    // Map detected OS class to download box id
    const osToBoxMap = {
        windows: 'windows',
        macos: 'macos',
        linux: 'linux',
        android: 'linux',  // Default Android users to Linux
        ios: 'macos'       // Default iOS users to macOS
    };

    const relevantBox = osToBoxMap[detectedOS.class];
    if (relevantBox && downloadBoxes[relevantBox]) {
        downloadBoxes[relevantBox].classList.add('download-highlight');
    }

    // Download suggestion popup
    const downloadSuggestion = document.getElementById('download-suggestion');
    const popupOsName = document.getElementById('popup-os-name');
    const popupOsIcon = document.getElementById('popup-os-icon');
    const popupDownloadBtn = document.getElementById('popup-download-btn');
    const popupDismissBtn = document.getElementById('popup-dismiss-btn');
    const popupCloseBtn = document.getElementById('popup-close-btn');

    if (downloadSuggestion && popupOsName && popupOsIcon && popupDownloadBtn) {
        // Set OS name in popup
        popupOsName.textContent = detectedOS.name;
        
        // Set OS icon in popup
        popupOsIcon.innerHTML = detectedOS.icon;
        
        // Show popup after 5 seconds
        setTimeout(() => {
            downloadSuggestion.classList.add('show');
        }, 5000);
        
        // Close popup when dismiss or close button is clicked
        if (popupDismissBtn) {
            popupDismissBtn.addEventListener('click', () => {
                downloadSuggestion.classList.remove('show');
            });
        }
        
        if (popupCloseBtn) {
            popupCloseBtn.addEventListener('click', () => {
                downloadSuggestion.classList.remove('show');
            });
        }
        
        // Scroll to download section when download button is clicked
        popupDownloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const downloadSection = document.getElementById('download');
            if (downloadSection) {
                downloadSection.scrollIntoView({ behavior: 'smooth' });
                downloadSuggestion.classList.remove('show');
            }
        });
    }

    // Add accessibility features
    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#features';
    skipLink.className = 'skip-to-content';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA labels to interactive elements without accessible names
    const socialLinks = document.querySelectorAll('footer .fab');
    socialLinks.forEach(icon => {
        const parentLink = icon.closest('a');
        if (parentLink && !parentLink.getAttribute('aria-label')) {
            const socialNetwork = icon.className.split('fa-')[1].split(' ')[0];
            parentLink.setAttribute('aria-label', `Visit our ${socialNetwork} page`);
        }
    });
});