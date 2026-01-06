---
title: InteractiveTradingChart
---

`InteractiveTradingChart[{{date1, {open1, high1, low1, close1, volume1}}, ...}]` makes a chart showing prices and volume for each date.

- `InteractiveTradingChart[{"name", daterange}]` makes a financial chart for the financial entity "name" over the daterange.
- `InteractiveTradingChart[{...}, {ind1, ind2, ...}]` makes a financial chart with indicators ind1, ind2, ....

## Examples

Chart for a stock:

```wolfram
InteractiveTradingChart[{"AAPL", {2023, 1, 1}}]
```

With technical indicators:

```wolfram
InteractiveTradingChart[{"MSFT", {2023, 1, 1}}, {"BollingerBands", "Volume"}]
```

Custom data:

```wolfram
InteractiveTradingChart[{
  {DateObject[{2024, 1, 1}], {100, 105, 98, 103, 10000}},
  {DateObject[{2024, 1, 2}], {103, 108, 102, 107, 12000}}
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InteractiveTradingChart.html) for more details.*