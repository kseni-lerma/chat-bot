
    // Переключение бокового меню
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const body = document.body;

    sidebarToggle.addEventListener('click', () => {
        body.classList.toggle('sidebar-open');

        // Обновляем иконку
        const icon = sidebarToggle.querySelector('i');
        if (body.classList.contains('sidebar-open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Переключение вкладок
    const menuItems = document.querySelectorAll('.menu-item');
    const contents = document.querySelectorAll('.content');
    const currentTabElement = document.getElementById('current-tab');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const tabName = this.querySelector('span').textContent;

            // Обновляем название текущей вкладки
            currentTabElement.textContent = tabName;

            // Убираем активный класс у всех пунктов меню
            menuItems.forEach(i => i.classList.remove('active'));
            // Добавляем активный класс текущему пункту
            this.classList.add('active');

            // Скрываем все вкладки контента
            contents.forEach(c => c.classList.remove('active'));
            // Показываем выбранную вкладку
            document.getElementById(tabId).classList.add('active');

            // На мобильных устройствах закрываем меню после выбора
            if (window.innerWidth <= 768) {
                body.classList.remove('sidebar-open');
                sidebarToggle.querySelector('i').classList.remove('fa-times');
                sidebarToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
    
