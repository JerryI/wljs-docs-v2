# WikipediaData

`WikipediaData[article]` gives the plain text of the specified Wikipedia article.

- `WikipediaData[{article1, article2, ...}]` gives the texts for each of the articles.
- `WikipediaData[article, property, options]` gives the value of the specified property for the given Wikipedia article.
- `WikipediaData["Category" -> category, property, options]` gives the value of the specified property for the given Wikipedia category.
- `WikipediaData["PageID" -> pageid, property, options]` gives the value of the specified property for the article corresponding to the given numerical Wikipedia page ID.

## Examples

```wolfram
WikipediaData["Albert Einstein"]
```

```wolfram
WikipediaData["Wolfram Language", "Summary"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WikipediaData.html) for more details.*