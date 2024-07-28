(function () {

    const popupOpenButton = document.getElementById('openPopup');
    setTimeout(() => {
        popupOpenButton.classList.add('show')
    },5000);

    const popup = document.getElementById('popUp');
    const overlay = document.getElementById('overlay')
    const closePopup = document.getElementById('closePopup')
    popupOpenButton.addEventListener('click', ()=> {
        popup.classList.add('active')
        overlay.classList.add('active')
    })
    closePopup.addEventListener('click', ()=> {
        popup.classList.remove('active')
        overlay.classList.remove('active')
    })
    overlay.addEventListener('click', ()=> {
        popup.classList.remove('active')
        overlay.classList.remove('active')
    })

    const formButton = document.getElementById('formButton');
    const inputs = [...document.getElementsByTagName('input')];
    inputs.forEach(item => {
        item.addEventListener('change', ()=> {
            if (item.value !== '') {
                formButton.removeAttribute('disabled')
            } else {
                formButton.setAttribute('disabled','disabled')
            }
        })
    })

    if (formButton) {
        formButton.addEventListener('click', () => {
            const form = $(this).closest('form');
            const actUrl = form.attr('action');
            $.ajax({
                url: actUrl,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function (data) {
                    sessionStorage.setItem('formButton', 'send');
                    console.log('Форма отправлена')
                },
                error: function () {

                }
            });

        })

    }


    const phone = document.getElementById('phone');
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    const mask = IMask(phone, maskOptions);






    const burgerButton = document.getElementById('burger');
    const menuMobile = document.getElementById('menuMobile');
    const closeMenuButton = document.getElementById('closeMenu');
    const linksMenu = document.getElementsByClassName('mobile-menu-item');
    burgerButton.addEventListener('click', () => {
        menuMobile.classList.toggle('active');
    })
    closeMenuButton.addEventListener('click', () => {
        menuMobile.classList.remove('active');
    })
    for (let i = 0; i <= linksMenu.length; i++) {
        linksMenu[i].addEventListener('click', () => {
            menuMobile.classList.remove('active');
        })
    }










})();