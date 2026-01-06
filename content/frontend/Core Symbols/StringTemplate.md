# StringTemplate

`StringTemplate["string"]` yields a TemplateObject expression that represents a string template to be applied to arguments.

`StringTemplate[src]` uses File[...], URL[...] or CloudObject[...] as the source for the string template.

## Examples

Create and apply a template:

```wolfram
template = StringTemplate["Hello, `name`!"];
template[<|"name" -> "World"|>]
(* "Hello, World!" *)
```

Positional arguments:

```wolfram
StringTemplate["`` + `` = ``"][2, 3, 5]
(* "2 + 3 = 5" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringTemplate.html) for more details.*