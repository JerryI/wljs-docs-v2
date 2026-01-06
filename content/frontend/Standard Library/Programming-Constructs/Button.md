# Button

`Button[label, action]` represents a button labeled with `label` that evaluates `action` when clicked.

## Examples

Create interactive buttons:

```wolfram
Button["Click Me", Print["Hello!"]]

(* Button that updates a variable *)
DynamicModule[{x = 0},
  Column[{
    Dynamic[x],
    Button["Increment", x++]
  }]
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Button.html) for more details.*