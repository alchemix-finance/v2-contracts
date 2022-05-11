import chalk from 'chalk';

let z = 0;
export const zebra = (txt: string) => {
    if (z % 2 == 0) {
        console.log(chalk.green(txt))
    } else {
        console.log(chalk.greenBright(txt))
    }
    z++;
}