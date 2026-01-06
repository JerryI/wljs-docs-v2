# OptionQ

`OptionQ[e]` returns `True` if e can be considered an option or list of options, and `False` otherwise.

## Examples

Test for option:

```wolfram
OptionQ[a -> 1]
(* True *)
```

List of options:

```wolfram
OptionQ[{a -> 1, b -> 2}]
(* True *)
```

Not an option:

```wolfram
OptionQ[{1, 2, 3}]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OptionQ.html) for more details.*