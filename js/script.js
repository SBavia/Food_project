import tabs from './modules/tabs';
import modal from './modules/modal';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import cards from './modules/cards';
import timer from './modules/timer';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        field: '.offer__slider-inner',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
    });
    cards();
    timer('.timer', '2022-12-20');
});