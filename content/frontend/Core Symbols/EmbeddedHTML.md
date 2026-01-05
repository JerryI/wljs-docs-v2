# EmbeddedHTML

`EmbeddedHTML["string"]` is an object that formats as a web frame containing the HTML content "string".

`EmbeddedHTML[URL["url"]]` formats as a rendering of the webpage corresponding to the specified URL.

`EmbeddedHTML[CloudObject[...]]` formats as a web rendering of the specified cloud object.

## Examples

```wolfram
EmbeddedHTML["<h1>Hello World</h1>"]
```

```wolfram
EmbeddedHTML[URL["https://www.wolfram.com"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EmbeddedHTML.html) for more details.*