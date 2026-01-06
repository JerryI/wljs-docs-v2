# Stub

`Stub` is an attribute which specifies that if a symbol is ever used, `Needs` should automatically be called on the context of the symbol.

This enables autoloading of packages when their symbols are first accessed.

## Examples

```wolfram
Attributes[MyPackage`myFunction] = {Stub}
```

```wolfram
(* Check if a symbol has Stub attribute *)
MemberQ[Attributes[symbol], Stub]
```



*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Stub.html) for more details.*