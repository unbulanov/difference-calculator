[![Actions Status](https://github.com/unbulanov/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/unbulanov/frontend-project-46/actions)
[![my_test](https://github.com/unbulanov/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/unbulanov/frontend-project-46/actions/workflows/nodejs.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/1a3b3c4efe7b91232555/maintainability)](https://codeclimate.com/github/unbulanov/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1a3b3c4efe7b91232555/test_coverage)](https://codeclimate.com/github/unbulanov/frontend-project-46/test_coverage)

CLI-utility that compares the differences between two files in ***JSON*** and ***Yaml*** extansion. The result of comparison can be displayed in three formats:
- stylish
- plain
- JSON

## System Requirements:
- Ubuntu or MacOs
- node v18.x
- commander v10.x
- make v4.3
- lodash v4.17

## Setup:
- To install, following commands for clone repository:
```
git clone git@github.com:unbulanov/frontend-project-46.git
cd frontend-project-46.git
```
- Install cli-utility:
```
make install
make link
```
- Usage:
```
Usage: genDiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Arguments:
  filepath1            path to file1
  filepath2            path to file2

Options:
  -V, --version        output the version number
  -f, --format <type>  output format
  -h, --help           display help for command
```


<a href="https://asciinema.org/a/t4HZEAAW0rHuLjJJGcmlI7zu6" target="_blank"><img src="https://asciinema.org/a/t4HZEAAW0rHuLjJJGcmlI7zu6.svg" /></a>

<a href="https://asciinema.org/a/lvFNl6j3v97Iwi7J3qs6hxJwm" target="_blank"><img src="https://asciinema.org/a/lvFNl6j3v97Iwi7J3qs6hxJwm.svg" /></a>

<a href="https://asciinema.org/a/a1Tx1i0Rzzakl7qKd52ZsxOJF" target="_blank"><img src="https://asciinema.org/a/a1Tx1i0Rzzakl7qKd52ZsxOJF.svg" /></a>

<a href="https://asciinema.org/a/3LOBKxwAfahZTS1QfYJ33oxGB" target="_blank"><img src="https://asciinema.org/a/3LOBKxwAfahZTS1QfYJ33oxGB.svg" /></a>