---
title: CandlestickChart
---

`CandlestickChart[{{date1, {open1, high1, low1, close1}}, ...}]` makes a chart with candles representing open, high, low, and close prices for each date.

`CandlestickChart[{"name", daterange}]` makes a candlestick chart for the financial entity "name" over the date range daterange.

## Examples

Create a candlestick chart:

```wolfram
CandlestickChart[{
  {1, {100, 110, 95, 105}},
  {2, {105, 115, 100, 112}},
  {3, {112, 120, 108, 118}}
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CandlestickChart.html) for more details.*