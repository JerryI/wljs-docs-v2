# Key

`Key[key]` represents a key used to access a value in an association or a column in a Tabular object.

`Key[key][assoc]` extracts the value corresponding to key in the association assoc.

## Examples

Extract a value using Key:

```wolfram
assoc = <|"a" -> 1, "b" -> 2|>;
Key["a"][assoc]
(* 1 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Key.html) for more details.*