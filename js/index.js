document.addEventListener("DOMContentLoaded", () => {
    const mobileBtn = document.getElementById('mobile_button');
    const closeBtn = document.getElementById('close');
    const mobile = document.getElementById('mobile');
    mobileBtn.addEventListener("click", () => {
        mobile.setAttribute('style', 'transform: translateX(5%);')
    })

    closeBtn.addEventListener('click', () => {
        mobile.setAttribute('style', 'transform: translateX(-150%);')
    })
})