---
title: WikipediaSearch
---

`WikipediaSearch[keywords]` returns a list of Wikipedia articles whose titles include the given keywords.

- `WikipediaSearch["Title" -> keywords, options]` returns articles whose titles include the given keywords.
- `WikipediaSearch["Category" -> keywords, options]` returns categories whose titles include the given keywords.
- `WikipediaSearch["Content" -> keywords]` returns articles whose content includes the given keywords.
- `WikipediaSearch[loc]` returns articles whose associated coordinates are near the given location.

## Examples

Search for Wikipedia articles:

```wolfram
WikipediaSearch["quantum mechanics"]
```

Search by category:

```wolfram
WikipediaSearch["Category" -> "physics"]
```

Search articles near a location:

```wolfram
WikipediaSearch[GeoPosition[{48.8566, 2.3522}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WikipediaSearch.html) for more details.*