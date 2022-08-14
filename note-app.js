const yargs = require('yargs')
const chalk = require('chalk')
const program = require('./program.js')
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title:{
            describe: 'Title of note',
            demandOption:'true',
            type: 'string',
        },
        body:{
            describe: 'Body of note',
            demandOption:'true',
            type: 'string',
        }
    },
    handler: function (argv) {
        program.ADD(argv.title,argv.body)
}}
)

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Title of note',
            demandOption:'true',
            type: 'string',
        }},
    handler: function(argv){
        program.REMOVE(argv.title)
    }
    
})

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function(){
    program.LIST()
}
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(argv){
        program.READ(argv.title)}
})
yargs.parse()