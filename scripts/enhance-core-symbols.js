const fs = require('fs');
const path = require('path');

const symbolsDir = path.join(__dirname, '../content/frontend/Core Symbols');

// Read all .md files
const files = fs.readdirSync(symbolsDir).filter(f => f.endsWith('.md'));

console.log(`Found ${files.length} files to process`);

// Enhanced descriptions and examples for common symbols
const enhancements = {
  'Abs': {
    desc: 'Returns the absolute value of a number. For real numbers, it gives the magnitude. For complex numbers, it gives the modulus.',
    example: `Abs[-5]
(* 5 *)

Abs[3 + 4*I]
(* 5 *)`
  },
  'Accumulate': {
    desc: 'Returns a list of successive accumulated totals (cumulative sum) of elements in a list.',
    example: `Accumulate[{1, 2, 3, 4}]
(* {1, 3, 6, 10} *)

Accumulate[{a, b, c}]
(* {a, a + b, a + b + c} *)`
  },
  'AASTriangle': {
    desc: 'Constructs a triangle given two angles (α and β) and one side length (a), where side a is adjacent to only one of the given angles.',
    example: `AASTriangle[30 Degree, 60 Degree, 1]
(* Triangle with specified angles and side *)`
  },
  'Map': {
    desc: 'Applies a function to each element of a list. Map[f, list] or f /@ list applies f to each element.',
    example: `Map[f, {a, b, c}]
(* {f[a], f[b], f[c]} *)

(* Using shorthand notation *)
f /@ {1, 2, 3}
(* {f[1], f[2], f[3]} *)

Map[Sqrt, {1, 4, 9, 16}]
(* {1, 2, 3, 4} *)`
  },
  'Table': {
    desc: 'Generates a list by evaluating an expression with a variable taking on successive values.',
    example: `Table[i^2, {i, 5}]
(* {1, 4, 9, 16, 25} *)

Table[{i, i^2}, {i, 1, 4}]
(* {{1, 1}, {2, 4}, {3, 9}, {4, 16}} *)`
  },
  'Plot': {
    desc: 'Creates a 2D plot of a function over a specified range.',
    example: `Plot[Sin[x], {x, 0, 2 Pi}]
(* Generates a sine wave plot *)

Plot[{x^2, x^3}, {x, -2, 2}]
(* Plots multiple functions *)`
  },
  'Sin': {
    desc: 'Computes the sine of an angle (in radians).',
    example: `Sin[Pi/2]
(* 1 *)

Sin[30 Degree]
(* 1/2 *)`
  },
  'Cos': {
    desc: 'Computes the cosine of an angle (in radians).',
    example: `Cos[0]
(* 1 *)

Cos[60 Degree]
(* 1/2 *)`
  },
  'List': {
    desc: 'Represents a list of expressions. Lists are fundamental data structures in Wolfram Language.',
    example: `{1, 2, 3, 4, 5}
(* Creates a list *)

List[a, b, c]
(* {a, b, c} *)`
  },
  'Plus': {
    desc: 'Represents addition. Can add multiple arguments.',
    example: `Plus[1, 2, 3]
(* 6 *)

a + b + c
(* a + b + c *)`
  },
  'Times': {
    desc: 'Represents multiplication. Can multiply multiple arguments.',
    example: `Times[2, 3, 4]
(* 24 *)

a * b * c
(* a b c *)`
  },
  'Power': {
    desc: 'Raises the first argument to the power of the second argument.',
    example: `Power[2, 3]
(* 8 *)

x^n
(* x^n *)`
  },
  'Do': {
    desc: 'Evaluates an expression iteratively, useful for loops without returning values.',
    example: `Do[Print[i], {i, 3}]
(* Prints: 1, 2, 3 *)

Do[Print[i^2], {i, 1, 5, 2}]
(* Prints squares: 1, 9, 25 *)`
  },
  'If': {
    desc: 'Conditional expression that evaluates different branches based on a test.',
    example: `If[x > 0, "positive", "non-positive"]
(* Returns "positive" if x > 0 *)

If[2 < 1, a, b]
(* b *)`
  },
  'Function': {
    desc: 'Creates a pure (anonymous) function.',
    example: `Function[x, x^2]
(* Pure function that squares its argument *)

f = Function[{x, y}, x + y];
f[3, 4]
(* 7 *)

(* Using shorthand notation *)
(#^2 &)[5]
(* 25 *)`
  },
  'Module': {
    desc: 'Creates local variables that are lexically scoped.',
    example: `Module[{x = 5}, x^2]
(* 25 *)

Module[{a, b},
  a = 10;
  b = 20;
  a + b
]
(* 30 *)`
  },
  'Range': {
    desc: 'Generates a list of numbers in a specified range.',
    example: `Range[5]
(* {1, 2, 3, 4, 5} *)

Range[2, 8]
(* {2, 3, 4, 5, 6, 7, 8} *)

Range[0, 10, 2]
(* {0, 2, 4, 6, 8, 10} *)`
  },
  'Select': {
    desc: 'Selects elements from a list that satisfy a criterion.',
    example: `Select[{1, 2, 3, 4, 5, 6}, EvenQ]
(* {2, 4, 6} *)

Select[{-2, -1, 0, 1, 2}, Positive]
(* {1, 2} *)`
  },
  'Join': {
    desc: 'Joins multiple lists together.',
    example: `Join[{a, b}, {c, d, e}]
(* {a, b, c, d, e} *)

Join[{1, 2}, {3}, {4, 5, 6}]
(* {1, 2, 3, 4, 5, 6} *)`
  },
  'Length': {
    desc: 'Returns the number of elements in a list.',
    example: `Length[{a, b, c, d}]
(* 4 *)

Length[Range[100]]
(* 100 *)`
  },
  'Apply': {
    desc: 'Applies a function to a list of arguments. Apply[f, {a, b, c}] gives f[a, b, c].',
    example: `Apply[Plus, {1, 2, 3, 4}]
(* 10 *)

(* Using shorthand notation *)
Plus @@ {1, 2, 3}
(* 6 *)`
  },
  'Part': {
    desc: 'Extracts parts of expressions. Part[expr, i] or expr[[i]] gets the i-th part.',
    example: `{a, b, c, d}[[2]]
(* b *)

Part[{1, 2, 3, 4, 5}, 3]
(* 3 *)

{a, b, c}[[{1, 3}]]
(* {a, c} *)`
  },
  'Append': {
    desc: 'Adds an element to the end of a list.',
    example: `Append[{a, b, c}, d]
(* {a, b, c, d} *)

Append[{1, 2, 3}, 4]
(* {1, 2, 3, 4} *)`
  },
  'Prepend': {
    desc: 'Adds an element to the beginning of a list.',
    example: `Prepend[{b, c, d}, a]
(* {a, b, c, d} *)

Prepend[{2, 3, 4}, 1]
(* {1, 2, 3, 4} *)`
  },
  'Total': {
    desc: 'Computes the sum of all elements in a list.',
    example: `Total[{1, 2, 3, 4, 5}]
(* 15 *)

Total[{a, b, c}]
(* a + b + c *)`
  }
};

// Generic template for symbols without specific enhancements
function generateEnhancedContent(symbolName, originalContent) {
  // Extract the basic description from original content
  const descMatch = originalContent.match(/```\n([^\n]+)\n```/);
  let basicDesc = descMatch ? descMatch[1].trim() : `${symbolName} is a Wolfram Language function.`;
  
  // Check if we have specific enhancement
  const enhancement = enhancements[symbolName];
  
  let description, example;
  
  if (enhancement) {
    description = enhancement.desc;
    example = enhancement.example;
  } else {
    // Generic enhancement - improve based on function name patterns
    if (basicDesc.includes('is a Wolfram Language function')) {
      description = `${symbolName} is a Wolfram Language symbol. See the official documentation for details.`;
    } else {
      // Use the extracted description
      description = basicDesc.replace(/^[a-zA-Z]+\[.*?\]/, symbolName);
    }
    
    // Generate a simple example based on the basic description
    const exampleMatch = basicDesc.match(/([a-zA-Z]+)\[([^\]]+)\]/);
    if (exampleMatch) {
      const funcName = exampleMatch[1];
      const args = exampleMatch[2];
      example = `${funcName}[${args}]
(* Evaluate to see result *)`;
    } else {
      example = `(* Example usage *)
${symbolName}[args]
(* Evaluate to see result *)`;
    }
  }
  
  // Build the new content
  const newContent = `# ${symbolName}

${description}

## Syntax

\`\`\`wolfram
${basicDesc}
\`\`\`

## Examples

\`\`\`wolfram
${example}
\`\`\`

---

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/${symbolName}.html) for more details and examples.*
`;
  
  return newContent;
}

// Process each file
let processed = 0;
let errors = 0;

files.forEach(file => {
  const filePath = path.join(symbolsDir, file);
  const symbolName = file.replace('.md', '');
  
  try {
    const originalContent = fs.readFileSync(filePath, 'utf8');
    const enhancedContent = generateEnhancedContent(symbolName, originalContent);
    fs.writeFileSync(filePath, enhancedContent, 'utf8');
    processed++;
    
    if (processed % 100 === 0) {
      console.log(`Processed ${processed} files...`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errors++;
  }
});

console.log(`\nCompleted!`);
console.log(`Successfully processed: ${processed} files`);
console.log(`Errors: ${errors} files`);
