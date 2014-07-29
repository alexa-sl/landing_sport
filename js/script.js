Placeholdem( document.querySelectorAll( '[placeholder]' ) );

$(function() {
    var name, email,
        submit = $('.submit'),
        result_name, result_email,
        reg_name =  /^[a-zA-Z-а-яА-Я\s]+$/,
        reg_email = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    submit.on('click', function() {
        name = $('.name').val();
        email = $('.email').val();
        result_name =   reg_name.test(name);
        result_email =   reg_email.test(email);

        if (!(result_name && name != 'Введите Ваше имя')) {
            alert('Пожалуйста, введите ваше имя!');
        }
        if (!(result_email)) {
            alert('Пожалуйста, введите ваш адрес E-mail!');
        }
    })
});