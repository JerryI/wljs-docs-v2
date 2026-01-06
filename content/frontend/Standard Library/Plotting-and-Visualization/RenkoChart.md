---
title: RenkoChart
---

`RenkoChart[{{date1, p1}, {date2, p2}, ...}]` makes a Renko chart with prices pi at date datei.

- `RenkoChart[{"name", daterange}]` makes a Renko chart of closing prices for the financial entity "name" over the date range.
- `RenkoChart[{...}, s]` makes a Renko chart with brick height of fraction s of the average price.

Renko charts filter out minor price movements to show trends more clearly.

## Examples

```wolfram
RenkoChart[FinancialData["AAPL", "Jan 1, 2023"]]
```

```wolfram
RenkoChart[{"GOOG", "Jan 2023"}]
```

```wolfram
RenkoChart[stockData, 0.02]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RenkoChart.html) for more details.*