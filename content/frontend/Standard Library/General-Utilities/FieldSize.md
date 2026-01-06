# FieldSize

`FieldSize` is an option for InputField, PopupMenu, and related functions that specifies the size of the field allowed for input or contents. 

## Examples

```wolfram
(* Create a wide input field *)
InputField["", String, FieldSize -> 30]

(* Specify both width and height *)
InputField["", String, FieldSize -> {20, 3}]

(* Use with PopupMenu *)
PopupMenu["a", {"a", "b", "c"}, FieldSize -> Medium]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FieldSize.html) for more details.*