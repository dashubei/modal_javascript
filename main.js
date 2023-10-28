'use strict';

{
    //詳細を見るをおしたらhiddenクラスをremoveする
    const open = document.getElementById('btn');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const bcg = document.getElementById('bcg');

    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        bcg.classList.remove('hidden');
    });

    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        bcg.classList.add('hidden');
    });

    bcg.addEventListener('click', () => {
        modal.classList.add('hidden');
        bcg.classList.add('hidden');
    });

    
}