# TextPosition

`TextPosition[text,form]` gives a list of the starting and ending positions at which instances of form occur in text.

`TextPosition[text,{form1,form2,…}]` gives an association of results for all the types formi.

`TextPosition[text,formspec,n]` gives the positions of the first n cases found.

## Examples

Find positions of a word:

```wolfram
TextPosition["The quick brown fox", "Word"]
(* {{1, 3}, {5, 9}, {11, 15}, {17, 19}} *)
```

Find sentence positions:

```wolfram
TextPosition["Hello world. How are you?", "Sentence"]
(* {{1, 12}, {14, 26}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TextPosition.html) for more details.*