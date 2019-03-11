const path = require('path')
const fs = require('fs')
const prettier = require('prettier')
const execSync = require('child_process').execSync
const chalk = require('chalk')

const files = fs.readdirSync(path.resolve(__dirname, './solutions'), 'utf-8')
const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf-8'))

files.forEach(filename => {
  const fullpath = path.join(__dirname, './solutions', filename)
  let file = fs.readFileSync(fullpath, 'utf-8')
  let newfile = file.replace(/console\.log\(.*\)/g, '')
  newfile = prettier.format(newfile, config)

  if (newfile === file) {
    console.log(filename + ' skipped')
  } else {
    fs.writeFileSync(fullpath, newfile)
    execSync(`git add "${fullpath}"`)
    console.log(chalk.green(filename + ' done'))
  }
})
