# FixedOrder

`FixedOrder[p1, p2, ...]` is a grammar rules pattern object that represents a sequence of elements matching p1, p2, …, in the fixed order given.

## Examples

Match a fixed sequence of elements:

```wolfram
GrammarApply[FixedOrder["hello", " ", "world"], "hello world"]
```

Use in a grammar:

```wolfram
grammar = FixedOrder[DigitCharacter, LetterCharacter];
StringMatchQ["1a", grammar]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FixedOrder.html) for more details.*