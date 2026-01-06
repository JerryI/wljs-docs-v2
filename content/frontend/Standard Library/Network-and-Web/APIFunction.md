# APIFunction

`APIFunction[{name1 -> type1, name2 -> type2, ...}, fun]` represents an API with parameters namei that evaluates the function fun whenever it is called.

`APIFunction[{name1 -> type1 -> default1, ...}, fun]` takes the value of the parameter namei to be defaulti if not specified.

`APIFunction[params, fun, fmt]` specifies that the result should be returned in format fmt.

## Examples

Create a simple API function:

```wolfram
api = APIFunction[{"x" -> "Integer"}, #x^2 &];
api[<|"x" -> 5|>]
(* 25 *)
```

API with default values:

```wolfram
APIFunction[{"name" -> "String" -> "World"}, "Hello, " <> #name &]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/APIFunction.html) for more details.*