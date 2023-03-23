#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import readFile from '../src/index.js';
import genDiff from '../src/index.js';

const program = new Command();

program
.description('Compares two configuration files and shows a difference.')
.version('0.0.1', '-V, --version', 'output the version number')
.option('-f, --format <type>', 'output format')
.argument('<filepath1>', 'path to file1')
.argument('<filepath2>', 'path to file2')
.action((filepath1, filepath2) => {
    console.log(readFile(filepath1, filepath2));
});

program.parse(process.argv);