# XMLObject

`XMLObject["type"]` represents the head of an XML object in symbolic XML.

## Examples

Document declaration:

```wolfram
XMLObject["Declaration"]["Version" -> "1.0"]
```

XML document:

```wolfram
XMLObject["Document"][{}, XMLElement["root", {}, {}], {}]
```

Import XML:

```wolfram
Import["file.xml", "XML"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/XMLObject.html) for more details.*