The main differences with CPython
=================================

Differences due to the compiled, rather than interpreted nature of Transcrypt
-----------------------------------------------------------------------------

- Since Transcrypt is precompiled on the development machine, Python's exec and eval are not supported, but JavaScript's eval is.
- C++ style conditional compilation is supported through :ref:`pragmas <pragma_ifdef>`.
- Conditional import of modules is done by using conditional compilation rather than conditional statements.
- Source level debugging in the browser is available through the use of sourcemaps.
- Running a compiled Transcrypt program doesn't require a Python or Transcrypt interpreter. It only requires the runtime, which is about 20kB.

Differences due to the 'lean and mean' design goal
--------------------------------------------------

- Facilities like operator overloading, automatic truth value conversion and named parameters can be switched on and off locally using pragmas, to keep the generated code small.
- String formatting is done through the *format* method as it is considered most flexible. Using % for formatting isn't supported. There's currently no 'string formatting mini language'. Python 3.6 style string formatting may be supported in the future. In addition you can use all of JavaScript's string formatting facilities.
- Some methods of container types like list, set and dict, that duplicate functionality of other methods, have been left out of the core libraries. If needed they can be supplied in separate libraries.
- Metaclasses only support overloading the __new__ method, covering 90% of the use cases.
- The *super* keyword isn't supported, use explicit names of parent classes. The correct method resolution order is supported, also in case of multiple inheritance. Supporting *super* is still under discussion. It isn't hard, but doesn't have compelling benefits either. 
- While class and function decorators are supported, method decorators are not, with the exception of @classmethod.
- Currently only the  *, /, +, -, @, [], (), ==, !=, <, <=, >, and >= operators can be overloaded, covering almost all usecases.
- The 'with' statement can currently only be used for file-like objects.

Differences due to interoperability with JavaScript and JavaScript libraries
----------------------------------------------------------------------------

- Python objects, functions and methods and their JavaScript counterparts can in general be mixed freely without special syntax.
- Any amount of literal JavaScript can be included in-line or from a separate file using :ref:`\_\_pragma\_\_ ('js', ..., ...) <pragma_js>`.
- The print function can be used to print to a DOM element or to the browser console.
- The methods console.dir and console.log are also available when programming for the browser, as are in fact all JavaScript facilities, including the complete DOM-manipulation API.
- Certain identifiers are reserved in JavaScript. In most cases they still can be used in Transcrypt, since they are aliased to other identifiers. Identifiers and directory keys starting with 'py\_' are to be avoided, since many of them have special meaning in Transcrypt. It would have been possible to make clashes even more rare, by using e.g. @ and \_\_ in but this would have made the JavaScript code harder to read. Note that you can define a local alias yourself if you still want to use a reserved identifier.
- The name *type* cannot be used as an ordinary identifier.
- You can use 'require' to load JavaScript modules on the fly and access them just as you would from JavaScript.

Differences due to running Transcryp applications in the browser, rather than on the desktop
--------------------------------------------------------------------------------------------

- Transcrypt doesn't directly support the use of libraries written in C++ since, without special measures like compiling to asm.js, C++ doesn't run in the browser.
- The browser programming model is event driven, so Transcrypt programs are even driven, as are their JavaScript counterparts.
- Just like JavaScript, Transcrypt running in the browser cannot write to an ordinary disk file, due to security limitations. However, just like JavaScript, it can store and retrieve data using JSON and Ajax.
