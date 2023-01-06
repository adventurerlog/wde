export const ContainerName = 'wde-container';
export class Container extends HTMLElement {
    constructor(){
        super();
        const classes = ['container','mx-auto','mt-6','block']
        classes.forEach((cls)=>{
            this.classList.add(cls);
        })
    }
}