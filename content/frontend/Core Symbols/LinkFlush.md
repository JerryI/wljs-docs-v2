# LinkFlush

`LinkFlush[link]` transmits immediately any locally buffered outgoing expressions.

## Examples

Flush a link:

```wolfram
link = LinkCreate[];
LinkWrite[link, "data"];
LinkFlush[link]
```

Ensure data is sent:

```wolfram
LinkFlush[link];
LinkClose[link]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinkFlush.html) for more details.*