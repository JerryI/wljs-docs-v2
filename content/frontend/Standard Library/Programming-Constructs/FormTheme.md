# FormTheme

`FormTheme` is an option for FormObject and related functions that specifies an overall theme for a form and its elements.

## Examples

Create a form with a theme:

```wolfram
FormObject[{"name" -> "String", "age" -> "Number"}, 
  FormTheme -> "Blue"]
```

Use a different theme:

```wolfram
FormObject[<|"email" -> "EmailAddress"|>, 
  FormTheme -> "Minimal"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FormTheme.html) for more details.*