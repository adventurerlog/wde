export const ColumnName = 'wde-column';
    export class Column extends HTMLElement {
        constructor(){
            super();
            
            const size = this.getAttribute('size')
            if(size){
                this.classList.add('grid')
                this.classList.add(`grid-cols-${size}`)
                this.classList.add('gap-4')
            }
        }
    }