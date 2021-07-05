const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const createPassword = require('./utils/createPassword')

program.version('1.0.0').description('Simple Password Generator')

// * adding commands

// program.command('generate').action(() => {
//     console.log('Generated')
// })

program
.option('-l,--length <number>', 'length of password','8')
.option('-s,--save', 'save password to passwords.txt')
.option('-nn,--no-numbers', 'remove numbers')
.option('-ns,--no-symbols', 'remove symbols')
.parse()

const {length, save, numbers, symbols} = program.opts()

// console.log(program.opts())
// * Get Generate Password

const generatedPassword = createPassword(length,numbers,symbols)

// * Copy to clipboard

clipboardy.writeSync(generatedPassword)



// Output generated pswd
console.log(chalk.blue('Generated Password:') + chalk.bold(generatedPassword))
console.log(chalk.yellow('Password copied to clipboard'))