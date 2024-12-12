// Массив товаров
const products = [
    {
        title: "Подгузники-трусы Tena ProSkin Pants Normal Small, объем талии 65-85 см, 15 шт",
        price: "1000 ₽",
        imgSrc: "pics/product1.jpg",
        alt: "Продукт 1"
    },
    {
        title: "Подгузники-трусы Tena ProSkin Pants Normal Small, объем талии 65-85 см, 15 шт",
        price: "1500 ₽",
        imgSrc: "pics/product1.jpg",
        alt: "Продукт 2"
    },
    {
        title: "Подгузники-трусы Tena ProSkin Pants Normal Small, объем талии 65-85 см, 15 шт",
        price: "2000 ₽",
        imgSrc: "pics/product1.jpg",
        alt: "Продукт 3"
    },
    {
        title: "Подгузники-трусы Tena ProSkin Pants Normal Small, объем талии 65-85 см, 15 шт",
        price: "2500 ₽",
        imgSrc: "pics/product1.jpg",
        alt: "Продукт 4"
    },
    {
        title: "Подгузники-трусы Tena ProSkin Pants Normal Small, объем талии 65-85 см, 15 шт",
        price: "3000 ₽",
        imgSrc: "pics/product1.jpg",
        alt: "Продукт 5"
    },
    {
        title: "Подгузники-трусы Tena ProSkin Pants Normal Small, объем талии 65-85 см, 15 шт",
        price: "3500 ₽",
        imgSrc: "pics/product1.jpg",
        alt: "Продукт 6"
    }
];

// Функция для добавления товара на страницу
function addProductsToPage() {
    const productGrid = document.querySelector('.product-grid'); // Контейнер для продуктов
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.imgSrc}" alt="${product.alt}">
            </div>
            <div class="product-title">${product.title}</div>
            <div class="product-price">${product.price}</div>
        `;
        
        productGrid.appendChild(productCard);
    });
}

// Функция для проверки допустимых символов в поле поиска
function validateSearchInput() {
    const searchInput = document.querySelector('input[type="text"]');
    const searchButton = document.querySelector('button');
    const errorMessage = document.querySelector('.error-message');
    const regex = /^[A-Za-zА-Яа-я0-9+\-*/.,!?=:()]*$/;

    // Проверка, соответствует ли ввод регулярному выражению
    if (!regex.test(searchInput.value) && searchInput.value !== '') {
        // Подсвечиваем поле ввода красным
        searchInput.classList.add('error');
        
        // Добавляем сообщение об ошибке, если оно еще не существует
        if (!errorMessage) {
            const newErrorMessage = document.createElement('div');
            newErrorMessage.classList.add('error-message');
            newErrorMessage.textContent = 'Неверные символы в поле поиска';
            searchInput.parentElement.appendChild(newErrorMessage);
        }
    } else {
        // Убираем красное выделение с поля ввода
        searchInput.classList.remove('error');
        
        // Удаляем сообщение об ошибке, если оно существует
        if (errorMessage) {
            errorMessage.remove();
        }
    }
}

// Добавление товаров на страницу
document.addEventListener('DOMContentLoaded', () => {
    addProductsToPage();

    // Добавление обработчика на кнопку поиска
    const searchButton = document.querySelector('button');
    searchButton.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращаем отправку формы
        validateSearchInput();
    });

    // Дополнительно добавим обработчик на поле ввода, чтобы подсвечивать его сразу при наборе
    const searchInput = document.querySelector('input[type="text"]');
    searchInput.addEventListener('input', () => {
        validateSearchInput();
    });
});
