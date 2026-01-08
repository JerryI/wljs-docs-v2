---
title: Snippet
---

`Snippet[doc]` gives a snippet of text from a document or other content object.

- `Snippet[doc, n]` gives about n lines from the beginning.
- `Snippet[doc, -n]` gives about n lines from the end.
- `Snippet[doc, n1;;n2]` gives a span from lines n1 to n2.
- `Snippet[doc, n1;;n2;;n3]` gives a span from lines n1 to n2 in steps of n3.
- `Snippet[ContentObject[...], SearchResultObject[...]]` gives contextual snippets from a content object based on search results.

## Examples

Get first 5 lines from a file:

```wolfram
Snippet[File["example.txt"], 5]
```

Get last 3 lines:

```wolfram
Snippet[File["example.txt"], -3]
```

Get a range of lines:

```wolfram
Snippet[File["example.txt"], 10;;20]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Snippet.html) for more details.