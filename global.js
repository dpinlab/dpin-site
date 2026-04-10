lucide.createIcons();

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

mobileMenuBtn.addEventListener('click', () => {
    const isActive = mainNav.classList.contains('active');
    if (isActive) {
        mainNav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
    } else {
        mainNav.classList.add('active');
        mobileMenuBtn.innerHTML = '<i data-lucide="x"></i>';
    }
    lucide.createIcons();
});

// Tabs dos Squads
const squadTabs = document.querySelectorAll('.squad-tab-btn');
const squadPanes = document.querySelectorAll('.squad-pane');

squadTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        squadTabs.forEach(t => t.classList.remove('active'));
        squadPanes.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetId = tab.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});