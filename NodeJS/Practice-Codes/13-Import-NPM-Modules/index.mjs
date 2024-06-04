import chalk from 'chalk';
import validator from 'validator';

console.log(chalk.green.underline.italic.inverse("Hello World!"));

const res = validator.isEmail("karm@abc.com");
console.log(res ? chalk.green.underline.italic.inverse(res) : chalk.red.underline.italic.inverse(res));

