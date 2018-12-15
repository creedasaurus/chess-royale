const { ArgumentParser } = require('argparse');
const framework = require('../framework');

const parser = new ArgumentParser({
  version: '1.0.0',
  addHelp: true,
  description: 'Chess Royale! Let the best Chess AI Win!',
});

parser.addArgument(
  ['-f', '--fen'],
  {
    help: 'Starting fen string in quotes.',
  },
);

const args = parser.parseArgs();
console.dir(args);
console.log('running cli');
// framework(args.fen);
framework.printFenBoard(args.fen);
