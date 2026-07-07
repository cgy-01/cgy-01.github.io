// --- Popup modal (WeChat QR etc.) ---
function pop(imageURL) {
    var tcMain = document.querySelector('.tc-img');
    if (imageURL) tcMain.src = imageURL;
    document.querySelector('.tc').classList.toggle('active');
    document.querySelector('.tc-main').classList.toggle('active');
}

document.querySelector('.tc').addEventListener('click', pop);
document.querySelector('.tc-main').addEventListener('click', function (e) {
    e.stopPropagation();
});
