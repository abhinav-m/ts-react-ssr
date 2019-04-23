# React SSR boilerplate using typescript



## Notes:
* tsconfig.json file :The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project. A project is compiled in one of the following ways: 
* Using tsconfig.json
By invoking tsc with no input files, in which case the compiler searches for the tsconfig.json file starting in the current directory and continuing up the parent directory chain.
By invoking tsc with no input files and a --project (or just -p) command line option that specifies the path of a directory containing a tsconfig.json file, or a path to a valid .json file containing the configurations.

* To make the compiler understand and get typescript warnings, file names must be .tsx.
* Imports are different in ts files (eg, import * as React from "react")
* Types must be installed to leverage the types (--save-dev) , popular types are opensourced as DefinitelyTyped