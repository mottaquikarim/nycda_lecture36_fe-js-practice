(function() {

    const templateName = document.querySelector('body').getAttribute('data-template-name');
    if (templateName === 'home') {
        const home = document.querySelector('.js-home');
        home.addEventListener('click', e => e.preventDefault());
    }
    else if (templateName === 'admin') {
        const save = document.querySelector('.js-save');
        const edit = document.querySelector('.js-edit');
        const del = document.querySelector('.js-delete');

        save.addEventListener('click', e => alert('save!'));
        edit.addEventListener('click', e => alert('edit!'));
        del.addEventListener('click', e => alert('del!'));
    }


})();
