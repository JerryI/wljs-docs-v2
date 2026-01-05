# DictionaryLookup

`DictionaryLookup[patt]` finds all words in an English dictionary that match the string pattern patt.

`DictionaryLookup[patt,n]` gives only the first n words found.

`DictionaryLookup[{"lang",patt}]` finds words in the language specified by lang.

## Examples

Find words matching a pattern:

```wolfram
DictionaryLookup["test*"]
(* {"test", "testament", "testify", ...} *)
```

Find words in a specific language:

```wolfram
DictionaryLookup[{"German", "Hund*"}]
(* {"Hund", "Hunde", ...} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DictionaryLookup.html) for more details.*