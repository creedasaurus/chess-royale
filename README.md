# chess-royale
A better way to learn and challenge your Chess-playing AI bot!

The Artificial Intelligence class at [Utah Valley University](https://www.uvu.edu/) has been taught using a C# Windows Forms application framework for the past 10+ years. While it is completely still possible to build and use, the framework has some severe limitations and is also completely reliant on a decenlty specced computer running Windows and using a dated version of .NET. While grappling with re-learning C# and Visual Studio, I realized I was working more on learning those two things than I was learning the algorithms and strategies which the class was trying to teach.

### Goals
- To provide a completely cross-platform replacement Chess framework
- Language agnostic (provided someone writes and contributes the client for that language)
- Runnable in both GUI and CLI mode
- (eventually) play other students remotely on the same network or via a network relay

### Installation
- Require's node/npm at the moment: `npm install`
- Then run `npm start` (quick note: you will likely have to 'refresh' the electron browser after the webpack command builds -- this is a simple development bug I just haven't put much time into)

Hot reloading is enabled and anything UI can be changed and built out.

### Dependencies
__UI__
- [React Chess](https://github.com/rexxars/react-chess) at the moment, unless someone else makes something we can replace it with
