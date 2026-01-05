# TextTranslation

`TextTranslation["text"]` translates text into the current default language.

`TextTranslation["text", lang]` translates text into the language specified by lang.

`TextTranslation["text", lang1 -> lang2]` translates text from language lang1 to lang2.

## Examples

Translate to a specific language:

```wolfram
TextTranslation["Hello, world!", "French"]
(* "Bonjour le monde!" *)
```

Translate between languages:

```wolfram
TextTranslation["Guten Tag", "German" -> "English"]
(* "Good day" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TextTranslation.html) for more details.*