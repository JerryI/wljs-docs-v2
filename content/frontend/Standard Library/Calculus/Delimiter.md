---
title: Delimiter
---

`Delimiter` represents a delimiter to be displayed in objects such as `PopupMenu`, `Manipulate`, and `FormObject`.

## Examples

Add separator in popup menu:

```wolfram
PopupMenu[1, {1 -> "Option 1", 2 -> "Option 2", Delimiter, 3 -> "Other"}]
```

In a menu list:

```wolfram
Menu["File", {"New", "Open", Delimiter, "Exit"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Delimiter.html) for more details.*