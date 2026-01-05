# LineBreakChart

`LineBreakChart[{{date1,p1},{date2,p2},…}]` makes a line break chart with prices pi at date datei.

`LineBreakChart[{"name",daterange}]` makes a line break chart of closing prices for the financial entity "name" over the date range daterange.

`LineBreakChart[{…},n]` makes a line break chart where n bars in a row cause a reversal.

## Examples

Create a line break chart for a stock:

```wolfram
LineBreakChart[{"AAPL", DatePlus[Today, -365] ;; Today}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LineBreakChart.html) for more details.*