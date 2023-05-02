'use strict'

class Product {
    #variable = [
        {
            title: 'Производитель №1',
            status: 0
        },
        {
            title: 'Производитель №2',
            status: 0
        },
        {
            title: 'Производитель №3',
            status: 0
        }
    ]
    constructor(){

    }
    get radio__group(){
        return document.querySelector('.radio__group');
    }

    generate(){
        this.radio__group.textContent = null;
        this.#variable.forEach((elem)=>{
            const li = `<li class="radio__item ${elem.status === 1 ? 'radio' : ''}"><span class="radio__img"></span> <span class="radio__text">${elem.title}</span> </li>`
            this.radio__group.insertAdjacentHTML('beforeend',li)
        })
    }
    useItem(event){
        let target = event.target.closest('.radio__item');
        let textLi = target.lastElementChild.textContent;
        this.#variable.map((item) =>{
            if(item.title === textLi && item.status === 0){
                item.status = 1;
            } else {
                item.status = 0
            }
        })
        this.generate();
       
    }

    init(){
        this.radio__group;
        this.generate();
        this.radio__group.addEventListener('click',this.useItem.bind(this))
    }
}

const o = new Product();

o.init();