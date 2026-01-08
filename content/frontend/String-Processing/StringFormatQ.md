---
title: StringFormatQ
---

`StringFormatQ["string","fmt"]` gives True if the string "string" might be imported as format "fmt" and gives False otherwise.

`StringFormatQ["string",{fmt1,fmt2,…}]` gives True if "string" might be imported as one of "fmti".

## Examples

```wolfram
StringFormatQ["{\"key\": 1}", "JSON"]
(* True *)
```

```wolfram
StringFormatQ["<html></html>", {"JSON", "HTML"}]
(* True *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringFormatQ.html) for more details.