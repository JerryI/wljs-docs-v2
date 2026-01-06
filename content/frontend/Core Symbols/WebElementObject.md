# WebElementObject

`WebElementObject[...]` represents an element of an open webpage operated on by WebExecute.

## Examples

Find an element on a page:
```wolfram
elem = WebExecute[session, "LocateElements" -> "id" -> "myButton"]
```

Click the element:
```wolfram
WebExecute[session, "ClickElement" -> elem]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WebElementObject.html) for more details.*