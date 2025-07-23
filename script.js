// Переключение аккордеона
document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    // Функция закрытия всех элементов
    const closeAllItems = () => {
        accordionItems.forEach(item => {
            item.classList.remove('active');
        });
    };
    
    // Обработчик клика
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            closeAllItems();
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Открыть первую вкладку по умолчанию
    if (accordionItems.length > 0) {
        accordionItems[0].classList.add('active');
    }
});