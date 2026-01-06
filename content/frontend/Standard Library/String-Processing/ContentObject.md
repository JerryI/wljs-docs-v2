---
title: ContentObject
---

`ContentObject["string"]` gives a content object whose content is string.

`ContentObject[File[...]]` gives a content object whose content is stored in the specified file.

`ContentObject[<|name1 -> val1, name2 -> val2, ...|>]` gives a content object with a sequence of fields with names namei and values vali.

## Examples

Create a content object from a string:

```wolfram
ContentObject["Hello, World!"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContentObject.html) for more details.*