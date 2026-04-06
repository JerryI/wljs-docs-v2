---
title: XMLElement
---

`XMLElement[tag, {attr1 -> val1, ...}, {data1, ...}]` represents an element in symbolic XML.

## Examples

Create an XML element:
```wolfram
XMLElement["book", {"id" -> "1"}, {"Title of Book"}]
```

Nested elements:
```wolfram
XMLElement["root", {}, {XMLElement["child", {}, {"content"}]}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/XMLElement.html) for more details.