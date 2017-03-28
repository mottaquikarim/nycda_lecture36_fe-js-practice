(function() {

    const home = document.querySelector('.js-home');
    const save = document.querySelector('.js-save');
    const edit = document.querySelector('.js-edit');
    const del = document.querySelector('.js-delete');

    home.addEventListener('click', e => e.preventDefault());
    save.addEventListener('click', e => alert('save!'));
    edit.addEventListener('click', e => alert('edit!'));
    del.addEventListener('click', e => alert('del!'));

})();
