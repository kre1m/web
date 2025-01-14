window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();

    // URL фотографии
    img.src = 'https://static.auction.ru/offer_images/2016/11/29/10/big/S/sO8ARK6pu22/murom_vid_monastyrej.jpg';

    img.onload = function() {
        // Рисуем изображение на Canvas
        ctx.drawImage(img, 10, 10, canvas.width - 20, canvas.height - 20);

        // Добавляем рамку вокруг изображения
        ctx.lineWidth = 10;  // Толщина рамки
        ctx.strokeStyle = '#008080';  // Цвет рамки
        ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
    }
};