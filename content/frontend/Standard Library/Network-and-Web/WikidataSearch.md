---
title: WikidataSearch
---

`WikidataSearch["keywords"]` returns a list of Wikidata items whose labels include the given keywords.

- `WikidataSearch["type" -> "keywords"]` returns a list of Wikidata identifiers of the specified type.

## Examples

Search Wikidata:
```wolfram
WikidataSearch["Albert Einstein"]
```

Search for a specific type:
```wolfram
WikidataSearch["Property" -> "population"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WikidataSearch.html) for more details.*