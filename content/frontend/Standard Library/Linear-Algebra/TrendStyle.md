---
title: TrendStyle
---

`TrendStyle` is an option to `CandlestickChart`, `RenkoChart`, and other financial charting functions that specifies how to style price trends.

## Examples

Style upward and downward trends:

```wolfram
CandlestickChart[FinancialData["AAPL", "OHLC", {2023, 1, 1}], 
  TrendStyle -> {Green, Red}]
```

Custom trend colors:

```wolfram
CandlestickChart[data, TrendStyle -> {Darker[Green], Darker[Red]}]
```

With edge styling:

```wolfram
CandlestickChart[data, 
  TrendStyle -> {Directive[Green, EdgeForm[Black]], 
                 Directive[Red, EdgeForm[Black]]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrendStyle.html) for more details.*