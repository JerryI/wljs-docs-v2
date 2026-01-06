# ExternalIdentifier

`ExternalIdentifier["type", id]` represents a resource identified by id in the external identifier system "type".

`ExternalIdentifier["type", id, meta]` includes the metadata given by the association meta to this instance of the external identifier object.

## Examples

Create an external identifier for a DOI:

```wolfram
ExternalIdentifier["DOI", "10.1000/xyz123"]
```

Create an identifier with metadata:

```wolfram
ExternalIdentifier["ISBN", "978-3-16-148410-0", <|"Title" -> "Example Book"|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExternalIdentifier.html) for more details.*