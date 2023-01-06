export const CardName = 'wde-card';
export class Card extends HTMLElement {
    constructor(){
        super();
        this.classList.add('bg-slate-900')
        this.classList.add('text-slate-50')
        this.classList.add('block')
        this.classList.add('block')

        this.classList.add('w-full')
        this.classList.add('p-3')
        this.classList.add('rounded-md')
        // this.classList.add('bg-amber-200')
    }
}