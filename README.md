# blazortscomponentsample
A sample project of a Blazor component that wraps a TypeScript/JavaScript library, but interops with .NET.

(As a rule of thumb, avoid this wherever possible. Interop between Blazor/C# and TypeScript is slow, and loses you many features such as type safety and data binding.)

# Available features

This example shows you how to:

* use an existing JS/TS component (in this example case, [bootstrap-slider](https://github.com/seiyria/bootstrap-slider)) from a Blazor app
* take advantage of Razor and strong typing when building the initial markup
* pass a reference to the element (`ElementRef`) as well as to the object (`DotNetObjectRef`) on to TS
* use TS-side events to pass information back to the Blazor side

# Bugs / poor design

* some modules/imports/packages are redundant. For example, portions of Bootstrap come via libman, and others via npm.
* on a related level, there should probably be a single TS entry point so WebPack only creates a single bundle, rather than one bundle per component.

# Missing features

* the naming of the init functions is merely a convention; there should instead be a proper abstraction to make this cleaner
* there are no real affordances to help with data binding or change events
* it should be possible to share state using local storage
