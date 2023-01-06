import { Card, CardName } from "./card";
import { Container, ContainerName } from './container';
import { Column, ColumnName } from './column';
import { DropdownName, Dropdown } from './dropdown';

interface Component {
  class: any;
  name: string;
}
const components: Component[] = [
    { name: CardName, class: Card },
    { name: ContainerName, class: Container },
    { name: ColumnName, class: Column },
    {name: DropdownName, class: Dropdown}
];

export const defineComponents = () => {
  components.forEach((component) => {
    window.customElements.define(component.name, component.class);
  });
};
