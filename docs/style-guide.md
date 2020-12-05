# TypeScript Style Guide

Last updated: 2020-06-30 21:04:20  

1\.  [Types](#types)  
1.1\.  [Primitives](#primitives)  
1.2\.  [Complex](#complex)  
2\.  [References](#references)  
2.1\.  [Prefer const](#preferconst)  
2.2\.  [Prefer let](#preferlet)  
2.3\.  [Block scope](#blockscope)  
3\.  [Objects](#objects)  
3.1\.  [No new](#nonew)  
3.2\.  [Computed properties](#computedproperties)  
3.3\.  [Method shorthand](#methodshorthand)  
3.4\.  [Property value shorthand](#propertyvalueshorthand)  
3.5\.  [Quoted properties](#quotedproperties)  
3.6\.  [Object spread operator](#objectspreadoperator)  
4\.  [Arrays](#arrays)  
4.1\.  [No new](#nonew-1)  
4.2\.  [Array.push](#array.push)  
4.3\.  [Spread operator](#spreadoperator)  
4.4\.  [Convert from iterable](#convertfromiterable)  
4.5\.  [Multiple lines](#multiplelines)  
4.6\.  [Prefer for-of](#preferfor-of)  
4.7\.  [Don’t use iterators](#don’tuseiterators)  
5\.  [Destructuring](#destructuring)  
5.1\.  [Object](#object)  
5.2\.  [Array](#array)  
5.3\.  [Object over Array](#objectoverarray)  
6\.  [Strings](#strings)  
6.1\.  [Single quotes](#singlequotes)  
6.2\.  [No line split](#nolinesplit)  
6.3\.  [Use template literals](#usetemplateliterals)  
6.4\.  [No `eval`](#no`eval`)  
6.5\.  [No useless escape](#nouselessescape)  
7\.  [Functions](#functions)  
7.1\.  [Use arrow-function expressions](#usearrow-functionexpressions)  
7.2\.  [Wrap IIFE](#wrapiife)  
7.3\.  [No `arguments` parameter](#no`arguments`parameter)  
7.4\.  [Use rest syntax](#userestsyntax)  
7.5\.  [Default parameters](#defaultparameters)  
7.6\.  [Default parameters position](#defaultparametersposition)  
7.7\.  [Signature spacing](#signaturespacing)  
7.8\.  [Never mutate parameters](#nevermutateparameters)  
7.9\.  [Never reassign parameters](#neverreassignparameters)  
7.10\.  [Prefer spread over apply](#preferspreadoverapply)  
7.11\.  [Prefer single line signature](#prefersinglelinesignature)  
8\.  [Arrow Functions](#arrowfunctions)  
8.1\.  [Implicit return](#implicitreturn)  
8.2\.  [Avoid confusing syntax](#avoidconfusingsyntax)  
8.3\.  [Implicit return line break](#implicitreturnlinebreak)  
9\.  [Classes & Constructors](#classes&constructors)  
9.1\.  [No useless constructor](#nouselessconstructor)  
10\.  [Modules](#modules)  
10.1\.  [No export from import](#noexportfromimport)  
10.2\.  [No duplicate import](#noduplicateimport)  
10.3\.  [No mutable export](#nomutableexport)  
10.4\.  [Prefer default export](#preferdefaultexport)  
10.5\.  [Imports first](#importsfirst)  
10.6\.  [Import order](#importorder)  
11\.  [Properties](#properties)  
11.1\.  [Dot notation](#dotnotation)  
11.2\.  [Bracket notation for dynamic properties](#bracketnotationfordynamicproperties)  
11.3\.  [11.3](#11.3)  
12\.  [Variables](#variables)  
12.1\.  [Use `const`/`let`](#use`const`/`let`)  
12.2\.  [One variable assignment](#onevariableassignment)  
12.3\.  [Const first](#constfirst)  
12.4\.  [Define where used](#definewhereused)  
12.5\.  [Don't chain assignments](#don'tchainassignments)  
12.6\.  [No unary increments](#nounaryincrements)  
12.7\.  [No unused vars](#nounusedvars)  
13\.  [Comparison Operators & Equality](#comparisonoperators&equality)  
13.1\.  [Prefer triple-equal](#prefertriple-equal)  
13.2\.  [If evaluation](#ifevaluation)  
13.3\.  [Comparison shortcuts](#comparisonshortcuts)  
13.4\.  [Switch blocks](#switchblocks)  
13.5\.  [Nested ternaries](#nestedternaries)  
13.6\.  [No unneeded ternary](#nounneededternary)  
13.7\.  [No mixed operators](#nomixedoperators)  
14\.  [Blocks](#blocks)  
14.1\.  [Use braces](#usebraces)  
14.2\.  [Cuddled elses](#cuddledelses)  
14.3\.  [No unnecessary return](#nounnecessaryreturn)  
14.4\.  [No single line](#nosingleline)  
15\.  [Control Statements](#controlstatements)  
15.1\.  [Value selection](#valueselection)  
16\.  [Comments](#comments)  
16.1\.  [Single line comments](#singlelinecomments)  
16.2\.  [Multiline comments](#multilinecomments)  
16.3\.  [16.3](#16.3)  
16.4\.  [Action items](#actionitems)  
16.5\.  [Fixme](#fixme)  
16.6\.  [Todo](#todo)  
17\.  [Whitespace and line length](#whitespaceandlinelength)  
17.1\.  [Indentation](#indentation)  
17.2\.  [Space before blocks](#spacebeforeblocks)  
17.3\.  [Space around keywords](#spacearoundkeywords)  
17.4\.  [Infix operations](#infixoperations)  
17.5\.  [End with newline](#endwithnewline)  
17.6\.  [Chaining](#chaining)  
17.7\.  [Empty line after block](#emptylineafterblock)  
17.8\.  [Don't pad blocks](#don'tpadblocks)  
17.9\.  [No space in parentheses](#nospaceinparentheses)  
17.10\.  [No space in brackets](#nospaceinbrackets)  
17.11\.  [No space in braces](#nospaceinbraces)  
17.12\.  [Comma spacing](#commaspacing)  
17.13\.  [Function call spacing](#functioncallspacing)  
17.14\.  [Key-value spacing](#key-valuespacing)  
17.15\.  [No trailing whitespace](#notrailingwhitespace)  
17.16\.  [Line length](#linelength)  
18\.  [Commas](#commas)  
18.1\.  [No leading commas](#noleadingcommas)  
18.2\.  [No dangling comma](#nodanglingcomma)  
19\.  [Semicolons](#semicolons)  
19.1\.  [Use semicolons](#usesemicolons)  
20\.  [Type Casting & Coercion](#typecasting&coercion)  
20.1\.  [Explicit type coercion](#explicittypecoercion)  
20.2\.  [No new wrappers](#nonewwrappers)  
20.3\.  [Number coercion](#numbercoercion)  
20.4\.  [Boolean coercion](#booleancoercion)  
21\.  [Naming Conventions](#namingconventions)  
21.1\.  [Be descriptive](#bedescriptive)  
21.2\.  [Camelcase](#camelcase)  
21.3\.  [PascalCase classes](#pascalcaseclasses)  
21.4\.  [No trailing/leading underscores](#notrailing/leadingunderscores)  
21.5\.  [Naming `this`](#naming`this`)  
21.6\.  [Filenames](#filenames)  
21.7\.  [Acryonyms](#acryonyms)  
21.8\.  [Uppercase naming](#uppercasenaming)  
22\.  [Standard Library](#standardlibrary)  
22.1\.  [Use `Number.isNaN`](#use`number.isnan`)  
22.2\.  [Use `Number.isFinite`](#use`number.isfinite`)  
23\.  [Logging](#logging)  
23.1\.  [No console.log](#noconsole.log)  
24\.  [.prettierrc.yml](#.prettierrc.yml)  
25\.  [.eslintrc.js](#.eslintrc.js)  
26\.  [.eslintignore](#.eslintignore)  

<a name="types"></a>

## 1\. Types


<a name="primitives"></a>

### 1.1\. Primitives

When you access a primitive type you work directly on its value.

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`

```ts
const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9
```

> Symbols cannot be faithfully polyfilled, so they should not be used when targeting browsers/environments that don't support them natively.


<a name="complex"></a>

### 1.2\. Complex

When you access a complex type you work on a reference to its value.

- `object`
- `array`
- `function`

```ts
const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```
<a name="references"></a>

## 2\. References


<a name="preferconst"></a>

### 2.1\. Prefer const

Use `const` for all of your references; avoid using `var`.

> Why? This ensures that you can't reassign your references, which can lead to bugs and difficult to comprehend code.

```ts
// Bad
var a = 1;
var b = 2;

// Good
const a = 1;
const b = 2;
```


<a name="preferlet"></a>

### 2.2\. Prefer let

If you must reassign references, use `let` instead of `var`.

> Why? `let` is block-scoped rather than function-scoped like `var`.

```ts
// Bad
var count = 1;
if (true) {
   count += 1;
}

// Good
let count = 1;
if (true) {
   count += 1;
}
```


<a name="blockscope"></a>

### 2.3\. Block scope

Note that both `let` and `const` are block-scoped.

```ts
// Both const and let only exist in the blocks they are defined in.
{
   let a = 1;
   const b = 1;
}

console.log(a); // ReferenceError
console.log(b); // ReferenceError
```
<a name="objects"></a>

## 3\. Objects


<a name="nonew"></a>

### 3.1\. No new

Use the literal syntax for object creation.

```ts
// Bad
const item = new Object();

// Good
const item = {};
```


<a name="computedproperties"></a>

### 3.2\. Computed properties

Use computed property names when creating objects with dynamic property names.

> Why? They allow you to define all the properties of an object in one place.

```ts
const getKey = k => `a key named ${k}`;

// Bad
const obj = {
   id: 5,
   name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// Good
const obj = {
   id: 5,
   name: 'San Francisco',
   [getKey('enabled')]: true,
};
```


<a name="methodshorthand"></a>

### 3.3\. Method shorthand

```ts
// Bad
const atom = {
   value: 1,
   addValue: function (value) {
      return atom.value + value;
   }
};

// Good
const atom = {
   value: 1,
   addValue(value) {
      return atom.value + value;
   }
};
```


<a name="propertyvalueshorthand"></a>

### 3.4\. Property value shorthand

> Why? It is shorter and descriptive.

```ts
const lukeSkywalker = 'Luke Skywalker';

// Bad
const obj = {
   lukeSkywalker: lukeSkywalker
};

// Good
const obj = {
   lukeSkywalker
};
```


<a name="quotedproperties"></a>

### 3.5\. Quoted properties

Only quote properties that are invalid identifiers.

> Why? In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JavaScript engines.

```ts
// Bad
const bad = {
   'foo': 3,
   'bar': 4,
   'data-blah': 5
};

// Good
const good = {
   foo: 3,
   bar: 4,
   'data-blah': 5
};
```


<a name="objectspreadoperator"></a>

### 3.6\. Object spread operator

Prefer the object spread operator over [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.

```ts
// Very bad
const original = {a: 1, b: 2};
const copy = Object.assign(original, { c: 3 }); // This mutates `original` ಠ_ಠ
delete copy.a; // So does this

// Bad
const original = {a: 1, b: 2};
const copy = Object.assign({}, original, {c: 3}); // copy => {a: 1, b: 2, c: 3}

// Good
const original = {a: 1, b: 2};
const copy = {...original, c: 3}; // copy => {a: 1, b: 2, c: 3}

const {a, ...excludeA} = copy; // excludeA => { b: 2, c: 3 }
```
<a name="arrays"></a>

## 4\. Arrays


<a name="nonew-1"></a>

### 4.1\. No new

Use the literal syntax for array creation.

```ts
// Bad
const items = new Array<string>();

// Good
const items: string[] = [];
```


<a name="array.push"></a>

### 4.2\. Array.push

Use [Array.push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) instead of direct assignment to add items to an array.

```ts
const someStack: string[] = [];

// Bad
someStack[someStack.length] = 'abracadabra';

// Good
someStack.push('abracadabra');
```


<a name="spreadoperator"></a>

### 4.3\. Spread operator

Use array spreads `...` to copy arrays.

```ts
// Bad
const itemsCopy: string[] = [];

for (let i = 0; i < items.length; i += 1) {
   itemsCopy[i] = items[i];
}

// Good
const itemsCopy = [...items];
```


<a name="convertfromiterable"></a>

### 4.4\. Convert from iterable

Use the spread operator `...` instead of [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) to convert an iterable object to an array.

```ts
const uniqueNumbers = new Set<number>([1, 2, 3]);

// Good
const numbers = Array.from(uniqueNumbers);

// Best
const numbers = [...uniqueNumbers];
```


<a name="multiplelines"></a>

### 4.5\. Multiple lines

Use line breaks after open and before close array brackets if an array has multiple items.

```ts
// Bad
const arr = [
   [0, 1], [2, 3], [4, 5]
];

const objectInArray = [{
   id: 1
}, {
   id: 2
}];

const numberInArray = [
   1, 2
];

// Good
const arr = [
   [0, 1],
   [2, 3],
   [4, 5]
];

const objectInArray = [
   {
      id: 1
   },
   {
      id: 2
   }
];

const numberInArray = [
   1,
   2
];
```


<a name="preferfor-of"></a>

### 4.6\. Prefer for-of

Use a `for-of` loop instead of a standard `for` loop when the index is not needed.

> Why? A `for-of` loop is easier to implement and read when the index is not needed.

> Also - in a for ..of loop, `await` will work as expected whereas `await` in a forEach will not.

```ts
const items = ['🦄', '🌈''];

// Bad
for (let i = 0; i < items.length; i++) {
   console.log(items[i]);
}

// Good
for (const item of items) {
   console.log(item);
}
```


<a name="don’tuseiterators"></a>

### 4.7\. Don’t use iterators

Prefer JavaScript’s higher-order functions instead of loops like `for-in` or `for-of`

> Why? This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side effects.

> Use `map()` / `every()` / `filter()` / `find()` / `findIndex()` / `reduce()` / `some()` / ... to iterate over arrays, and `Object.keys()` / `Object.values()` / `Object.entries()` to produce arrays so you can iterate over objects.

```ts
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}
sum === 15;

// good
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
sum === 15;

// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;

// bad
const increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}

// good
const increasedByOne = [];
numbers.forEach((num) => {
  increasedByOne.push(num + 1);
});

// best (keeping it functional)
const increasedByOne = numbers.map((num) => num + 1);
```
<a name="destructuring"></a>

## 5\. Destructuring


<a name="object"></a>

### 5.1\. Object

Use object destructuring when accessing and using multiple properties of an object.

> Why? Destructuring saves you from creating temporary references for those properties.

```ts
// Bad
const getFullName = (user: User) => {
   const firstName = user.firstName;
   const lastName = user.lastName;

   return `${firstName} ${lastName}`;
};

// Good
const getFullName = (user: User) => {
   const {firstName, lastName} = user;

   return `${firstName} ${lastName}`;
};

// Best
const getFullName => ({firstName, lastName}: User) => {
   return `${firstName} ${lastName}`;
};
```


<a name="array"></a>

### 5.2\. Array

Use array destructuring.

```ts
const items = [1, 2, 3, 4];

// Bad
const first = items[0];
const second = items[1];

// Good
const [first, second] = items;
```


<a name="objectoverarray"></a>

### 5.3\. Object over Array

Use object destructuring for multiple return values, not array destructuring.

> Why? You can add new properties over time or change the order of things without breaking call sites.

```ts
// Bad
const processInput = (input: ProcessInput) => {
   // Then a miracle occurs
   return [left, right, top, bottom];
}

// The caller needs to think about the order of return data
const [left,, top] = processInput(input);

// Good
const processInput = (input: ProcessInput) => {
   // Then a miracle occurs
   return {
      left,
      right,
      top,
      bottom
   };
}

// The caller selects only the data they need
const {left, top} = processInput(input);
```

<a name="strings"></a>

## 6\. Strings


<a name="singlequotes"></a>

### 6.1\. Single quotes

Prefer single quotes for strings.

Only use single back-tick quotes when using template strings.  

Use double quotes if the string contains single quotes.

```ts
// Bad - template literals should contain interpolation or newlines
const name = `Capt. Janeway`;

// Good
const name = 'Capt. Janeway';

// Good
const name = `Capt. Janeway ${suffix}`;

// OK
const reaction = "No! That's impossible!"
```


<a name="nolinesplit"></a>

### 6.2\. No line split

Strings that cause the line to go over 120 characters should not be written across multiple lines using string concatenation.

> Why? Broken strings are painful to work with and make code less searchable.

```ts
// Bad
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// Bad
const errorMessage = 'This is a super long error that was thrown because ' +
   'of Batman. When you stop to think about how Batman had anything to do ' +
   'with this, you would get nowhere fast.';

// Bad
const errorMessage = [
   'This is a super long error that was thrown because',
   'of Batman. When you stop to think about how Batman had anything to do',
   'with this, you would get nowhere fast.'
].join(' ');

// Good
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
```


<a name="usetemplateliterals"></a>

### 6.3\. Use template literals

When programmatically building up strings, use template strings instead of concatenation.

> Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

```ts
// Bad
const sayHi = (name: string) => {
   return 'How are you, ' + name + '?';
};

// Bad
const sayHi = (name: string) => {
   return ['How are you, ', name, '?'].join();
};

// Bad
const sayHi = (name: string) => {
   return `How are you, ${ name }?`;
};

// Good
const sayHi = (name: string) => {
   return `How are you, ${name}?`;
};
```


<a name="no`eval`"></a>

### 6.4\. No `eval`

Never use `eval()` on a string, it opens too many vulnerabilities.


<a name="nouselessescape"></a>

### 6.5\. No useless escape

Do not unnecessarily escape characters in strings.

> Why? Backslashes harm readability, thus they should only be present when necessary.

```ts
// Bad
const foo = '\'this\' \i\s \"quoted\"';

// Good
const foo = '\'this\' is "quoted"';
const foo = `my name is '${name}'`;
```
<a name="functions"></a>

## 7\. Functions


<a name="usearrow-functionexpressions"></a>

### 7.1\. Use arrow-function expressions

Use arrow-function expressions instead of function declarations or function expressions.

> Why? Function declarations are hoisted, which means that it's easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability. If you find that a function's definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it's time to extract it to its own module!

```ts
// Bad
function foo() {
   // ...
}

// Bad
const foo = function() {
   // ...
};

// Good
const foo = () => {
   // ...
};
```


<a name="wrapiife"></a>

### 7.2\. Wrap IIFE

Wrap immediately invoked function expressions (IIFE) in parentheses.

> Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. In a world with modules everywhere, you almost never need an IIFE, except when using top-level-await.

```ts
// Immediately-invoked function expression (IIFE)
(() => {
   console.log('Welcome to the Internet. Please follow me.');
}());

(async () => {
   console.log('Welcome to the Internet. Please follow me.');

   await Promise.resolve('🦄');
}());
```


<a name="no`arguments`parameter"></a>

### 7.3\. No `arguments` parameter

Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope. Note that arrow-functions don't have a function scope and thus don't have `arguments` implicitely.

```ts
// Bad
function foo(name, options, arguments) {
   // ...
}

// Bad
const foo = (name, options, arguments) => {
   // ...
};

// Good
function foo(name, options, args) {
   // ...
}

// Best
const foo = (name, options, args) => {
   // ...
};
```


<a name="userestsyntax"></a>

### 7.4\. Use rest syntax

Never use `arguments`, opt to use rest syntax `...` instead.

> Why? `...` is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like `arguments`.

```ts
// Bad
function concatenateAll() {
   const args = Array.prototype.slice.call(arguments);

   return args.join('');
}

// Good
function concatenateAll(...args: string[]) {
   return args.join('');
}

// Best
const concatenateAll = (...args: string[]) => {
   return args.join('');
};
```


<a name="defaultparameters"></a>

### 7.5\. Default parameters

Use default parameter syntax rather than mutating function arguments.

```ts
// Really bad
const handleThings = (opts: Options) => {
   // No! We shouldn't mutate function arguments.
   // Double bad: if opts is falsy it'll be set to an object which may
   // be what you want but it can introduce subtle bugs.
   opts = opts || {};
   // ...
};

// Still bad
const handleThings = (opts: Options) => {
   if (!opts) {
      opts = {};
   }
   // ...
};

// Good
const handleThings = (opts: Options = {}) => {
   // ...
};
```


<a name="defaultparametersposition"></a>

### 7.6\. Default parameters position

Always put default parameters last.

```ts
// Bad
const handleThings = (opts: Options = {}, name?: string) => {
   // ...
};

// Good
const handleThings = (name?: string, opts: Options = {}) => {
   // ...
};
```


<a name="signaturespacing"></a>

### 7.7\. Signature spacing

> Why? Consistency is good, and you shouldn't have to add or remove a space when adding or removing a name.

```javascript
// Bad
const f = function(){};
const g = function (){};
const h = function () {};

// Good
const x = function() {};
const z = () => {};
```


<a name="nevermutateparameters"></a>

### 7.8\. Never mutate parameters

> Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

```ts
// Bad
const f1 = (obj: Options) => {
   obj.key = 1;
};

// Good
const f2 = (obj: Options) => {
   const options = {
      key: 1,
      ...obj
   };
};
```


<a name="neverreassignparameters"></a>

### 7.9\. Never reassign parameters

> Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the `arguments` object. It can also cause optimization issues, especially in V8.

```ts
// Bad
const f1 = (a: number) => {
   a = 1;
   // ...
};

const f2 = (a?: number) => {
   if (typeof a === 'undefined') {
      a = 1;
   }
   // ...
};

// Good
const f3 = (a?: number) => {
   const b = typeof a === 'undefined' ? 1 : a;
   // ...
};

// Best
const f4 = (a: number = 1) => {
   // ...
};
```


<a name="preferspreadoverapply"></a>

### 7.10\. Prefer spread over apply

Prefer the use of the spread operator `...` to call variadic functions.

> Why? It's cleaner, you don't need to supply a context, and you can not easily compose `new` with `apply`.

```ts
// Bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// Good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// Bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

// Good
new Date(...[2016, 8, 5]);
```


<a name="prefersinglelinesignature"></a>

### 7.11\. Prefer single line signature

Write function signature on a single line.

```javascript
// bad
const foo = (bar: string,
          baz: string,
          quux: Options) => {
   // ...
}

const foo = (
   bar: string,
   baz: string,
   quux: Options
) => {
   // ...
};

// Good
const foo = (bar: string, baz: string, quux: Options) => {
   // ...
};
```
<a name="arrowfunctions"></a>

## 8\. Arrow Functions


<a name="implicitreturn"></a>

### 8.1\. Implicit return

If the function body consists of a single statement returning an [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) without side effects, omit the braces and use the implicit return. Otherwise, keep the braces and use a `return` statement.

> Why? Syntactic sugar. It reads well when multiple functions are chained together.

```ts
// Bad
[1, 2, 3].map(number => {
   return `A string containing the ${number + 1}.`;
});

// Good
[1, 2, 3].map(number => `A string containing the ${number + 1}.`);

// Good
[1, 2, 3].map((number, index) => ({
   [index]: number
}));

// No implicit return with side effects
function foo(callback: () => boolean) {
   const val = callback();

   if (val === true) {
      // Do something if callback returns true
   }
}

let bool = false;

// Bad
foo(() => bool = true);

// Good
foo(() => {
   bool = true;
});
```


<a name="avoidconfusingsyntax"></a>

### 8.2\. Avoid confusing syntax

Avoid confusing arrow function syntax (`=>`) with comparison operators (`<=`, `>=`).

```javascript
// Bad
const itemHeight = (item: Item) => item.height <= 256 ? item.largeSize : item.smallSize;

// Bad
const itemHeight = (item: Item) => item.height >= 256 ? item.largeSize : item.smallSize;

// Good
const itemHeight = (item: Item) => (item.height <= 256 ? item.largeSize : item.smallSize);

// Good
const itemHeight = (item: Item) => {
   const {height, largeSize, smallSize} = item;

   return height <= 256 ? largeSize : smallSize;
};
```


<a name="implicitreturnlinebreak"></a>

### 8.3\. Implicit return line break

Enforce the location of arrow function bodies with implicit returns.

```ts
// Bad
foo =>
   bar;

foo =>
   (bar);

// Good
foo => bar;
foo => (bar);
foo => (
   bar
);
```
<a name="classes&constructors"></a>

## 9\. Classes & Constructors


<a name="nouselessconstructor"></a>

### 9.1\. No useless constructor

Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary.

```ts
// Bad
class Jedi {
   constructor() {}

   getName() {
      return this.name;
   }
}

// Bad
class Rey extends Jedi {
   constructor(...args) {
      super(...args);
   }

   getName() {
      return this.name;
   }
}

// Good
class Rey extends Jedi {
   constructor(...args) {
      super(...args);

      this.name = 'Rey';
   }

   getName() {
      return this.name;
   }
}
```
<a name="modules"></a>

## 10\. Modules


<a name="noexportfromimport"></a>

### 10.1\. No export from import

Do do not export directly from an import.

> Why? Although the one-liner is concise, having one clear way to import and one clear way to export makes things consistent.

```javascript
// Bad
export {rainbow as default} from './unicorn';

// Good
import {rainbow} from './unicorn';

export default rainbow;
```


<a name="noduplicateimport"></a>

### 10.2\. No duplicate import

Only import from a path in one place.

> Why? Having multiple lines that import from the same path can make code harder to maintain.

```ts
// Bad
import foo from 'foo';
// Some other imports
import {named1, named2} from 'foo';

// Good
import foo, {named1, named2} from 'foo';
```


<a name="nomutableexport"></a>

### 10.3\. No mutable export

Do not export mutable bindings.

> Why? Mutation should be avoided in general, but in particular when exporting mutable bindings. While this technique may be needed for some special cases, in general, only constant references should be exported.

```ts
// Bad
let foo = 3;

export {foo};

// Good
const foo = 3;

export {foo};
```


<a name="preferdefaultexport"></a>

### 10.4\. Prefer default export

In modules with a single export, prefer default export over named export.

> Why? To encourage more files that only ever export one thing, which is better for readability and maintainability.

```ts
// Bad
export function foo() {}

// Good
export default function foo() {}
```


<a name="importsfirst"></a>

### 10.5\. Imports first

Put all `import`s above non-import statements.

> Why? Since `import`s are hoisted, keeping them all at the top prevents surprising behavior.

```ts
// Bad
import foo from 'foo';
foo.init();

import bar from 'bar';

// Good
import foo from 'foo';
import bar from 'bar';

foo.init();
```


<a name="importorder"></a>

### 10.6\. Import order

Following order should be respected.
1. Standard library
2. External packages
3. Internal modules


```ts
// Bad
import foo from './foo';
import * as path from 'path';
import ow from 'ow';

// Good
import * as path from 'path';
import ow from 'ow';
import foo from './foo';
```
<a name="properties"></a>

## 11\. Properties


<a name="dotnotation"></a>

### 11.1\. Dot notation

Use dot notation when accessing properties.

```ts
const luke = {
   jedi: true,
   age: 28
};

// Bad
const isJedi = luke['jedi'];

// Good
const isJedi = luke.jedi;
```


<a name="bracketnotationfordynamicproperties"></a>

### 11.2\. Bracket notation for dynamic properties

Use bracket notation `[]` when accessing properties with a variable.

```ts
const luke = {
   jedi: true,
   age: 28
};

const getProp = (prop: string) => luke[prop];

const isJedi = getProp('jedi');
```


<a name="11.3"></a>

### 11.3\. [11.3](#es2016-properties--exponentiation-operator)

Use exponentiation operator `**` when calculating exponentiations.

```ts
// Bad
const binary = Math.pow(2, 10);

// Good
const binary = 2 ** 10;
```
<a name="variables"></a>

## 12\. Variables


<a name="use`const`/`let`"></a>

### 12.1\. Use `const`/`let`

Always use `const` or `let` to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that.

```ts
// Bad
superPower = new SuperPower();

// Good
const superPower = new SuperPower();
```


<a name="onevariableassignment"></a>

### 12.2\. One variable assignment

Use one `const` or `let` declaration per variable or assignment.

> Why? It's easier to add new variable declarations this way, and you never have to worry about swapping out a `;` for a `,` or introducing punctuation-only diffs. You can also step through each declaration with the debugger, instead of jumping through all of them at once.

```javascript
// Bad
const items = getItems(),
   goSportsTeam = true,
   dragonball = 'z';

// Bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
   goSportsTeam = true;
   dragonball = 'z';

// Good
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';
```


<a name="constfirst"></a>

### 12.3\. Const first

Group all your `const`s and then group all your `let`s.

> Why? This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

```ts
// Bad
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// Good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
```


<a name="definewhereused"></a>

### 12.4\. Define where used

Assign variables where you need them, but place them in a reasonable place.

> Why? `let` and `const` are block scoped and not function scoped.

```ts
// bad - unnecessary function call
const checkName = (hasName: string) => {
   const name = getName();

   if (hasName === 'test') {
      return false;
   }

   if (name === 'test') {
      this.setName('');

      return false;
   }

   return name;
};

const checkName = (hasName: string) => {
   if (hasName === 'test') {
      return false;
   }

   const name = getName();

   if (name === 'test') {
      this.setName('');

      return false;
   }

   return name;
};
```


<a name="don'tchainassignments"></a>

### 12.5\. Don't chain assignments

Don't chain variable assignments.

> Why? Chaining variable assignments creates implicit global variables.

```javascript
// Bad
(() => {
   // JavaScript interprets this as
   // let a = ( b = ( c = 1 ) );
   // The let keyword only applies to variable a; variables b and c become global variables.
   let a = b = c = 1;
}());

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// Good
(() => {
   let a = 1;
   let b = a;
   let c = a;
}());

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// The same applies for `const`
```


<a name="nounaryincrements"></a>

### 12.6\. No unary increments

Avoid using unary increments and decrements (`++`, `--`) except within `for`-loops.

> Why? Per the eslint documentation, unary increment and decrement statements are subject to automatic semicolon insertion and can cause silent errors with incrementing or decrementing values within an application. It is also more expressive to mutate your values with statements like `num += 1` instead of `num++` or `num ++`. Disallowing unary increment and decrement statements also prevents you from pre-incrementing/pre-decrementing values unintentionally which can also cause unexpected behavior in your programs.

```ts
// Bad
const array = [1, 2, 3];
let num = 1;
num++;
--num;

let sum = 0;
let truthyCount = 0;

for (let i = 0; i < array.length; i++) {
   let value = array[i];
   sum += value;

   if (value) {
      truthyCount++;
   }
}

// Good
const array = [1, 2, 3];
let num = 1;
num += 1;
num -= 1;

const sum = array.reduce((a, b) => a + b, 0);
const truthyCount = array.filter(Boolean).length;
```


<a name="nounusedvars"></a>

### 12.7\. No unused vars

Disallow unused variables.

> Why? Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers.

```ts
// Bad
var some_unused_var = 42;

// Write-only variables are not considered as used.
let y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
let z = 0;
z = z + 1;

// Unused function arguments.
const getX = (x: number, y: number) => x;

// Good
const getXPlusY = (x: number, y: number) => x * y;

let x = 1;
let y = a + 2;

alert(getXPlusY(x, y));

// 'type' is ignored even if unused because it has a rest property sibling.
// This is a form of extracting an object that omits the specified keys.
var {type, ...coords} = data;
// 'coords' is now the 'data' object without its 'type' property.
```

<a name="comparisonoperators&equality"></a>

## 13\. Comparison Operators & Equality


<a name="prefertriple-equal"></a>

### 13.1\. Prefer triple-equal

Use `===` and `!==` over `==` and `!=`.


<a name="ifevaluation"></a>

### 13.2\. If evaluation

Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:
- **Objects** evaluate to **true**
- **Undefined** evaluates to **false**
- **Null** evaluates to **false**
- **Booleans** evaluate to **the value of the boolean**
- **Numbers** evaluate to **false** if **+0, -0, or NaN**, otherwise **true**
- **Strings** evaluate to **false** if an empty string `''`, otherwise **true**

```ts
if ([0] && []) {
   // true
   // An array (even an empty one) is an object, objects will evaluate to true
}
```


<a name="comparisonshortcuts"></a>

### 13.3\. Comparison shortcuts

Use shortcuts for booleans, but explicit comparisons for strings and numbers.

```ts
// Bad
if (isValid === true) {
   // ...
}

// Good
if (isValid) {
   // ...
}

// Bad
if (name) {
   // ...
}

// Good
if (name !== '') {
   // ...
}

// Bad
if (collection.length) {
   // ...
}

// Good
if (collection.length > 0) {
   // ...
}
```


<a name="switchblocks"></a>

### 13.4\. Switch blocks

Use braces to create blocks in `case` and `default` clauses that contain lexical declarations (e.g. `let`, `const`, `function`, and `class`).

> Why? Lexical declarations are visible in the entire `switch` block but only get initialized when assigned, which only happens when its `case` is reached. This causes problems when multiple `case` clauses attempt to define the same thing.

```ts
// Bad
switch (foo) {
   case 1:
      let x = 1;
      break;
   case 2:
      const y = 2;
      break;
   case 3:
      function f() {
         // ...
      }
      break;
   default:
      class C {}
}

// Good
switch (foo) {
   case 1: {
      let x = 1;
      break;
   }
   case 2: {
      const y = 2;
      break;
   }
   case 3: {
      function f() {
         // ...
      }
      break;
   }
   case 4: {
      bar();
      break;
   }
   default: {
      class C {}
   }
}
```


<a name="nestedternaries"></a>

### 13.5\. Nested ternaries

Ternaries should not be nested and generally be single line expressions.

```javascript
// Bad
const foo = maybe1 > maybe2
   ? 'bar'
   : value1 > value2 ? 'baz' : null;

// Split into 2 separated ternary expressions
const maybeNull = value1 > value2 ? 'baz' : null;

// Good
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
```



<a name="nounneededternary"></a>

### 13.6\. No unneeded ternary

Avoid unneeded ternary statements.

```ts
// Bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;
const qux = a ? a : '🦄';

// Good
const foo = a || b;
const bar = !!c;
const baz = !c;
const qux = a || '🦄';
```


<a name="nomixedoperators"></a>

### 13.7\. No mixed operators

When mixing operators, enclose them in parentheses.

> Why? This improves readability and clarifies the developer's intention.

```ts
// Bad
const foo = a && b < 0 || c > 0 || d + 1 === 0;

// Bad
const bar = a ** b - 5 % d;

// Bad
// one may be confused into thinking (a || b) && c
if (a || b && c) {
   return d;
}

// Bad
const bar = a + b / c * d;

// Good
const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

// Good
const bar = (a ** b) - (5 % d);

// Good
if (a || (b && c)) {
   return d;
}

// Good
const bar = a + ((b / c) * d);
```


<a name="blocks"></a>

## 14\. Blocks


<a name="usebraces"></a>

### 14.1\. Use braces

Use braces with all blocks.

```ts
// Bad
if (test)
   return false;

// Bad
if (test) return false;

// Good
if (test) {
   return false;
}

// Bad
const foo = () => { return false; }

// Good
const bar = () => {
   return false;
}

// Good
cost bar = () => false;
```


<a name="cuddledelses"></a>

### 14.2\. Cuddled elses

If you're using blocks with `if` and `else`, put `else` on the same line as your `if` block's closing brace.

```ts
// Bad
if (test) {
   thing1();
   thing2();
}
else {
   thing3();
}

// Good
if (test) {
   thing1();
   thing2();
} else {
   thing3();
}
```


<a name="nounnecessaryreturn"></a>

### 14.3\. No unnecessary return

If an `if` block always executes a `return` statement, the subsequent `else` block is unnecessary. A `return` in an `else if` block following an `if` block that contains a `return` can be separated into multiple `if` blocks.

```ts
// Bad
const foo = () => {
   if (x) {
      return x;
   } else {
      return y;
   }
};

// Bad
const cats = () => {
   if (x) {
      return x;
   } else if (y) {
      return y;
   }
};

// Bad
const dogs = () => {
   if (x) {
      return x;
   } else {
      if (y) {
         return y;
      }
   }
};

// Good
const foo = () => {
   if (x) {
      return x;
   }

   return y;
};

// Good
const cats = () => {
   if (x) {
      return x;
   }

   if (y) {
      return y;
   }
};

// Good
const dogs => () => {
   if (x) {
      if (z) {
         return y;
      }
   } else {
      return z;
   }
};
```


<a name="nosingleline"></a>

### 14.4\. No single line

Write blocks always on multiple lines.

```ts
// Bad
if (test) return false;

// Bad
while(x > y) doOperation();

// Good
if (test) {
   return false;
}

// Good
while(x > y) {
   doOperation();
}
```
<a name="controlstatements"></a>

## 15\. Control Statements


<a name="valueselection"></a>

### 15.1\. Value selection

Don't use selection or ternary operators in place of control statements.

```ts
// Bad
!isRunning && startRunning();

// Bad
!isRunning ? startRunning() : printWarning();

// Good
if (!isRunning) {
   startRunning();
}

// Good
if (!isRunning) {
   startRunning();
} else {
   printWarning();
}
```
<a name="comments"></a>

## 16\. Comments


<a name="singlelinecomments"></a>

### 16.1\. Single line comments

Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it's on the first line of a block.

Start every comment with caps.

```ts
// Bad
const active = true;  // is current tab

// Good
// Is current tab
const active = true;

// Bad
const getType = () => {
   console.log('fetching type...');
   // Set the default type to 'no type'
   return this.type || 'no type';
};

// Bad
const getType = () => {
   console.log('fetching type...');

   // set the default type to 'no type'
   return this.type || 'no type';
};

// Good
const getType = () => {
   console.log('fetching type...');

   // Set the default type to 'no type'
   const type = this.type || 'no type';

   return type;
};

// Good
const getType = () => {
   // Set the default type to 'no type'
   return type = this.type || 'no type';
};
```


<a name="multilinecomments"></a>

### 16.2\. Multiline comments

Use `/** ... */` for multi-line comments.

```ts
// Bad
// Create a new element based on the passed in tag name.
//
// @param tag - Name of the tag.
const make => (tag: string) => {

   // ...

   return element;
};

// Good
/**
 * Create a new element based on the passed in tag name.
 *
 * @param tag - Name of the tag.
 */
const make => (tag: string) => {

   // ...

   return element;
};
```


<a name="16.3"></a>

### 16.3\. [16.3](#comments--spaces)

Start all comments with a space to make it easier to read.

```ts
// Bad
//Is current tab
const active = true;

// Good
// Is current tab
const active = true;

// Bad
/**
 *Create a new element based on the passed in tag name.
 *
 *@param tag - Name of the tag.
 */
const make => (tag: string) => {

   // ...

   return element;
};

// Good
/**
 * Create a new element based on the passed in tag name.
 *
 * @param tag - Name of the tag.
 */
const make => (tag: string) => {

   // ...

   return element;
};
```


<a name="actionitems"></a>

### 16.4\. Action items

Prefixing your comments with `FIXME` or `TODO` helps other developers quickly understand if you're pointing out a problem that needs to be revisited, or if you're suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are `FIXME: -- need to figure this out` or `TODO: -- need to implement`.


<a name="fixme"></a>

### 16.5\. Fixme

Use `// FIXME:` to annotate problems.

```ts
class Calculator extends Abacus {
   constructor() {
      super();

      // FIXME: shouldn't use a global here
      total = 0;
   }
}
```


<a name="todo"></a>

### 16.6\. Todo

Use `// TODO:` to annotate solutions to problems.

```ts
class Calculator extends Abacus {
   constructor() {
      super();

      // TODO: total should be configurable by an options param
      this.total = 0;
   }
}
```
<a name="whitespaceandlinelength"></a>

## 17\. Whitespace and line length

<a name="indentation"></a>

### 17.1\. Indentation

Use 2 spaces for indentation. Do not use tab characters.

```ts
// Good
const foo = () => {
∙∙let name;
};

// Bad
const baz = () => {
-⇥let name;
};
```


<a name="spacebeforeblocks"></a>

### 17.2\. Space before blocks

Place 1 space before the leading brace.

```ts
// Bad
const test = () =>{
  console.log('test');
};

// Good
const test = () => {
  console.log('test');
};

// Bad
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});

// Good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});
```


<a name="spacearoundkeywords"></a>

### 17.3\. Space around keywords

Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations. eslint: [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing.html)

```ts
// Bad
if(isJedi) {
  fight ();
}

// Good
if (isJedi) {
  fight();
}

// Bad
function fight () {
  console.log ('Swooosh!');
}

// Good
function fight() {
  console.log('Swooosh!');
}
```


<a name="infixoperations"></a>

### 17.4\. Infix operations

Add spaces between operands.

```ts
// Bad
const x=y+5;

// Bad
const x = y+5;

// Good
const x = y + 5;
```


<a name="endwithnewline"></a>

### 17.5\. End with newline

End files with a single newline character.

```ts
// bad
import {rainbow} from './unicorn';
// ...
export default rainbow;
```

```ts
// Bad
import {rainbow} from './unicorn';
// ...
export default rainbow;↵
↵
```

```ts
// Good
import {rainbow} from './unicorn';
// ...
export default rainbow;↵
```


<a name="chaining"></a>

### 17.6\. Chaining

Use indentation when making long method chains. Use a leading dot, which emphasizes that the line is a method call, not a new statement.

```ts
// Gad
$('#items').find('.selected').highlight().end().find('.open').updateCount();

// Bad
$('#items').
  find('.selected').
  highlight().
  end().
  find('.open').
  updateCount();

// Good
$('#items')
  .find('.selected')
  .highlight()
  .end()
  .find('.open')
  .updateCount();

// Bad
const leds = stage.selectAll('.led').data(data);

// Good
const leds = stage
  .selectAll('.led')
  .data(data);

// Bad
const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').classed('led', true)
  .attr('width', (radius + margin) * 2).append('svg:g')
  .attr('transform', `translate(${radius + margin},${radius + margin})`)
  .call(tron.led);

// Good
const leds = stage
  .selectAll('.led')
  .data(data)
  .enter()
  .append('svg:svg')
  .classed('led', true)
  .attr('width', (radius + margin) * 2)
  .append('svg:g')
  .attr('transform', `translate(${radius + margin},${radius + margin})`)
  .call(tron.led);

// good
const leds = stage.selectAll('.led').data(data);
```


<a name="emptylineafterblock"></a>

### 17.7\. Empty line after block

Leave a blank line after blocks and before the next statement.

```ts
// Bad
if (foo) {
  return bar;
}
return baz;

// Good
if (foo) {
  return bar;
}

return baz;

// Bad
const obj = {
  foo() {
    // ...
  },
  bar() {
    // ...
  }
};
return obj;

// Good
const obj = {
  foo() {
    // ...
  },
  bar() {
    // ...
  }
};

return obj;
```


<a name="don'tpadblocks"></a>

### 17.8\. Don't pad blocks

Do not pad your blocks with blank lines.

```javascript
// Bad
const bar = () => {

  console.log(foo);

};

// Bad
if (baz) {

  console.log(qux);
} else {
  console.log(foo);

}

// Bad
class Foo {

  constructor(bar: string) {
    //
  }
}

// Good
const bar = () => {
  console.log(foo);
};

// Good
if (baz) {
  console.log(qux);
} else {
  console.log(foo);
}
```


[17.9](#whitespace--no-multiple-blanks) No multiple empty lines

Do not use multiple blank lines to pad your code.

```javascript
// Bad
class Person {

  private age: number;


  constructor(private fullName: string, private email: string, birthday: Date) {
    this.setAge(birthday);
  }


  setAge(birthday: Date) {
    const today = new Date();


    const age = this.getAge(today, birthday);


    this.age = age;
  }


  private getAge(today: Date, birthday: Date) {
    // Calculate age
  }
}

// Good
class Person {
  private age: number;

  constructor(private fullName: string, private email: string, birthday: Date) {
    this.setAge(birthday);
  }

  setAge(birthday: Date) {
    const today = new Date();

    this.age = getAge(today, birthday);
  }

  private getAge(today: Date, birthday: Date) {
    // Calculate age
  }
}
```


<a name="nospaceinparentheses"></a>

### 17.9\. No space in parentheses

Do not add spaces inside parentheses.

```ts
// Bad
const bar = ( foo: string ) => {
  return foo;
};

// Good
const bar = (foo: string) => {
  return foo;
};

// Bad
if ( foo ) {
  console.log(foo);
}

// Good
if (foo) {
  console.log(foo);
}
```


<a name="nospaceinbrackets"></a>

### 17.10\. No space in brackets

Do not add spaces inside brackets.

```ts
// Bad
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// Good
const foo = [1, 2, 3];
console.log(foo[0]);
```


<a name="nospaceinbraces"></a>

### 17.11\. No space in braces

Add spaces inside curly braces.

```javascript
// Bad
const foo = { clark: 'kent' };

// Good
const foo = {clark: 'kent'};
```


<a name="commaspacing"></a>

### 17.12\. Comma spacing

Avoid spaces before commas and require a space after commas.

```ts
// Bad
const data = {unicorn: '🦄',rainbow:'🌈'};
const data = ['🦄' , '🌈'];

// Good
const data = {unicorn: '🦄', rainbow:'🌈'};
const data = ['🦄', '🌈'];
```


<a name="functioncallspacing"></a>

### 17.13\. Function call spacing

Avoid spaces between functions and their invocations.

```ts
// Bad
func ();

func
();

// Good
func();
```


<a name="key-valuespacing"></a>

### 17.14\. Key-value spacing

Enforce spacing between keys and values in object literal properties.

```ts
// Bad
const obj = {foo : 42};
const obj2 = {foo:42};

// Good
const obj = {foo: 42};
```


<a name="notrailingwhitespace"></a>

### 17.15\. No trailing whitespace

Avoid trailing spaces at the end of lines.


<a name="linelength"></a>

### 17.16\. Line length

Use 120 max line length.

> Why? Shorter lines are easier to read on laptops, github, pull requests and documentation code examples.

<a name="commas"></a>

## 18\. Commas


<a name="noleadingcommas"></a>

### 18.1\. No leading commas

Do not use leading commas.

```ts
// Bad
const story = [
   once
   , upon
   , aTime
];

// Good
const story = [
   once,
   upon,
   aTime
];

// Bad
const hero = {
   firstName: 'Ada'
   , lastName: 'Lovelace'
   , birthYear: 1815
   , superPower: 'computers'
};

// Good
const hero = {
   firstName: 'Ada',
   lastName: 'Lovelace',
   birthYear: 1815,
   superPower: 'computers'
};
```


<a name="nodanglingcomma"></a>

### 18.2\. No dangling comma

Do not use dangling commas.

```ts
// Bad
const hero = {
   firstName: 'Dana',
   lastName: 'Scully',
};

const heroes = [
   'Batman',
   'Superman',
];

// Good
const hero = {
   firstName: 'Dana',
   lastName: 'Scully'
};

const heroes = [
   'Batman',
   'Superman'
];

// Bad
function createHero(
   firstName: string,
   lastName: string,
   inventorOf: unknown,
) {
   // ...
}

// Good
function createHero(
   firstName: string,
   lastName: string,
   inventorOf: unknown
) {
   // ...
}
```
<a name="semicolons"></a>

## 19\. Semicolons


<a name="usesemicolons"></a>

### 19.1\. Use semicolons

> Why? When JavaScript encounters a line break without a semicolon, it uses a set of rules called [Automatic Semicolon Insertion](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion), also known as ASI, to determine whether or not it should regard that line break as the end of a statement, and (as the name implies) place a semicolon into your code before the line break if it thinks so. ASI contains a few eccentric behaviors, though, and your code will break if JavaScript misinterprets your line break. These rules will become more complicated as new features become a part of JavaScript. Explicitly terminating your statements and configuring your linter to catch missing semicolons will help prevent you from encountering issues.

```ts
// Bad - raises exception
const reaction = "No! That's impossible!"
(async function meanwhileOnTheFalcon() {
   // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
   // ...
}())

// Bad - returns `undefined` instead of the value on the next line - always happens when `return` is on a line by itself because of ASI!
const foo = () => {
   return
   'search your feelings, you know it to be foo'
};

// Good
const luke = {};
const leia = {};
[luke, leia].forEach((jedi) => {
   jedi.father = 'vader';
});

// Good
const reaction = "No! That's impossible!"
(async function meanwhileOnTheFalcon() {
   // handle `leia`, `lando`, `chewie`, `r2`, `c3p0`
   // ...
}());

// Good
const foo = () => {
   return 'search your feelings, you know it to be foo';
};
```

[Read more](https://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214#7365214).

<a name="typecasting&coercion"></a>

## 20\. Type Casting & Coercion


<a name="explicittypecoercion"></a>

### 20.1\. Explicit type coercion

Perform type coercion at the beginning of the statement.


<a name="nonewwrappers"></a>

### 20.2\. No new wrappers

> Why? The `new` keyword makes sure it returns an object, not the casted value.

```ts
// => this.reviewScore = 9;

// Bad
const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"

// Bad
const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

// Bad
const totalScore = this.reviewScore.toString(); // isn't guaranteed to return a string

// Good
const totalScore = String(this.reviewScore);
```


<a name="numbercoercion"></a>

### 20.3\. Number coercion

Use `Number` for type casting and `parseInt` always with a radix for parsing strings.

```ts
const inputValue = '4';

// Bad
const val = new Number(inputValue);

// Bad
const val = +inputValue;

// Bad
const val = inputValue >> 0;

// Bad
const val = parseInt(inputValue);

// Good
const val = Number(inputValue);

// Good
const val = parseInt(inputValue, 10);
```


<a name="booleancoercion"></a>

### 20.4\. Boolean coercion

Use `Boolean` for type casting.

```ts
const age = 0;

// Bad
const hasAge = new Boolean(age);

// Bad
const hasAge = !!age;

// Good
const hasAge = Boolean(age);
```
<a name="namingconventions"></a>

## 21\. Naming Conventions


<a name="bedescriptive"></a>

### 21.1\. Be descriptive

Avoid single letter names. Be descriptive with your naming.

```ts
// Bad
function q = () => {
   // ...
};

// Good
const query = () => {
   // ...
};
```


<a name="camelcase"></a>

### 21.2\. Camelcase

Use camelCase when naming objects, functions, and instances.

```ts
// Bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// Good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```


<a name="pascalcaseclasses"></a>

### 21.3\. PascalCase classes

Use PascalCase only when naming constructors, classes, enums and enum members. eslint: [`new-cap`](https://eslint.org/docs/rules/new-cap.html)

```ts
class user {
   private name: string;

   constructor(options: {name: string}) {
      this.name = options.name;
   }
}

const good = new user({
   name: 'nope',
});

// Good
class User {
   private name: string;

   constructor(options: {name: string}) {
      this.name = options.name;
   }
}

const good = new User({
   name: 'yup',
});


// Good
export enum MyEnum {
  MyEnumMember
}


```



<a name="notrailing/leadingunderscores"></a>

### 21.4\. No trailing/leading underscores

Do not use trailing or leading underscores.

> Why? JavaScript does not have the concept of privacy in terms of properties or methods. TypeScript does with it's `private` keyword, but it's still compiled away. Although a leading underscore is a common convention to mean `private`, in fact, these properties are fully public, and as such, are part of your public API contract. This convention might lead developers to wrongly think that a change won't count as breaking, or that tests aren't needed. tl;dr: if you want something to be “private”, it must not be observably present.

```ts
// Bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';
this._firstName = 'Panda';

// Good
this.firstName = 'Panda';
```


<a name="naming`this`"></a>

### 21.5\. Naming `this`

Don't save references to `this`. Use arrow functions or [Function#bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).

```ts
// Bad
function foo() {
   const self = this;

   return function () {
      console.log(self);
   };
}

// Bad
function foo() {
   const that = this;

   return function () {
      console.log(that);
   };
}

// Good
function foo() {
   return () => {
      console.log(this);
   };
}
```


<a name="filenames"></a>

### 21.6\. Filenames

A base filename should match the name of its default export and should be in kebab-case. Never import an `index` file directly.

```ts
// File 1 contents
class CheckBox {
   // ...
}

export default CheckBox;

// File 2 contents
export default function fortyTwo() {
   return 42;
}

// File 3 contents
export default function insideDirectory() {}

// In some other file
// Bad
import CheckBox from './CheckBox'; // PascalCase filename
import fortyTwo from './forty_two'; // Snake-case filename

// Bad
import index from './inside_directory/index'; // Requiring the index file explicitly
import insideDirectory from './inside-directory/index'; // Requiring the index file explicitly

// Good
import CheckBox from './check-box';
import fortyTwo from './forty-two';
import insideDirectory from './inside-directory';
```


<a name="acryonyms"></a>

### 21.7\. Acryonyms

Acronyms and initialisms should always be all uppercased, or all lowercased.

> Why? Names are for readability, not to appease a computer algorithm.

```ts
// Bad
import SmsContainer from './containers/sms-container';

// Bad
const HttpRequests = [
   // ...
];

// Good
import SMSContainer from './containers/sms-container';

// Good
const httpRequests = [
   // ...
];
```


<a name="uppercasenaming"></a>

### 21.8\. Uppercase naming

You may optionally uppercase a constant only if it (1) is exported, (2) is a `const` (it can not be reassigned), and (3) the programmer can trust it (and its nested properties) to never change.

> Why? This is an additional tool to assist in situations where the programmer would be unsure if a variable might ever change. UPPERCASE_VARIABLES are letting the programmer know that they can trust the variable (and its properties) not to change.

- What about all `const` variables? - This is unnecessary, so uppercasing should not be used for constants within a file. It should be used for exported constants however.
- What about exported objects? - Uppercase at the top level of export (e.g. `EXPORTED_OBJECT.key`) and maintain that all nested properties do not change.

```ts
// Bad
const PRIVATE_VARIABLE = 'should not be unnecessarily uppercased within a file';

// Bad
export const THING_TO_BE_CHANGED = 'should obviously not be uppercased';

// Bad
export let REASSIGNABLE_VARIABLE = 'do not use let with uppercase variables';

// ---

// Allowed but does not supply semantic value
export const apiKey = 'SOMEKEY';

// Better in most cases
export const API_KEY = 'SOMEKEY';

// ---

// Bad - unnecessarily uppercases key while adding no semantic value
export const MAPPING = {
   KEY: 'value'
};

// Good
export const MAPPING = {
   key: 'value'
};
```



<a name="standardlibrary"></a>

## 22\. Standard Library

The [Standard Library](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects) contains utilities that are functionally broken but remain for legacy reasons.


<a name="use`number.isnan`"></a>

### 22.1\. Use `Number.isNaN`

Use `Number.isNaN` instead of global `isNaN`.

> Why? The global `isNaN` coerces non-numbers to numbers, returning true for anything that coerces to NaN.

```ts
// Bad
isNaN('1.2'); // false
isNaN('1.2.3'); // true

// Good
Number.isNaN('1.2.3'); // false
Number.isNaN(Number('1.2.3')); // true
```


<a name="use`number.isfinite`"></a>

### 22.2\. Use `Number.isFinite`

Use `Number.isFinite` instead of global `isFinite`.

> Why? The global `isFinite` coerces non-numbers to numbers, returning true for anything that coerces to a finite number.

```ts
// Bad
isFinite('2e3'); // true

// Good
Number.isFinite('2e3'); // false
Number.isFinite(parseInt('2e3', 10)); // true
```

<a name="logging"></a>

## 23\. Logging

<a name="noconsole.log"></a>

### 23.1\. No console.log

Never use `console.log` in production code. Use a logging helper that can be configured with different levels of severity. Configure this logger using environment variables to never log in production environments.

> Why? Security. Loose lips sink ships.



<a name=".prettierrc.yml"></a>

## 24\. .prettierrc.yml


<a name=".eslintrc.js"></a>

## 25\. .eslintrc.js


<a name=".eslintignore"></a>

## 26\. .eslintignore

