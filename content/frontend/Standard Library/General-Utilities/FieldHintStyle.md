---
title: FieldHintStyle
---

`FieldHintStyle` is an option for InputField that specifies the style to use for displaying the field hint.

## Examples

```wolfram
(* Style the field hint *)
InputField["", String, 
  FieldHint -> "Enter text",
  FieldHintStyle -> {Gray, Italic}]

(* Use a directive for styling *)
InputField["", Number, 
  FieldHint -> "Enter a number",
  FieldHintStyle -> Directive[LightGray, FontSize -> 10]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FieldHintStyle.html) for more details.*