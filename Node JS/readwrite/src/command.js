import yargs from "yargs";
import {hideBin} from 'yargs/helpers';

yargs(hideBin(process.argv))
    .command('curl <url>','fetch the contents of the URL', () => {}, (argv) => {
        console.log(argv)
    })
    .demandCommand(1)
    .parse()
