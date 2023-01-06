export const DropdownName = 'wde-dropdown';
    export class Dropdown extends HTMLElement {
        constructor(){
            super();
            this.innerHTML = `<select>
                <option> Work</option>  
                <option> Home</option>  
                <option> Etc.</option>  
            `
        }
    }