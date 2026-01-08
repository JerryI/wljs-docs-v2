---
title: Read
---

`Read[stream]` reads one expression from an input stream and returns the expression.

`Read[stream, type]` reads one object of the specified type.

`Read[stream, {type1, type2, …}]` reads a sequence of objects of the specified types.

## Examples

Read from a stream:

```wolfram
stream = OpenRead["data.txt"];
Read[stream]
Close[stream]
```

Read specific type:

```wolfram
Read[stream, Number]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Read.html) for more details.