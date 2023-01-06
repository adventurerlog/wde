// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { argv } = require('process')
const capitalize = str => str.charAt(0).toUpperCase() + str.substr(1)
const template = name => {
  const cap = capitalize(name);
  return `export const ${cap}Name = 'wde-${name}';
    export class ${cap} extends HTMLElement {
        constructor(){
            super();
        }
    }`
}

const args = argv.splice(2)
const name = args[0];
// console.log(args,name);
fs.writeFileSync(`./src/components/${name}.ts`, template(name))
console.log(`created ${capitalize(name)} at ${name}.ts`);
