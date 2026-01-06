# FinancialIndicator

`FinancialIndicator["ind",par1,par2,…]` represents a financial indicator "ind" with parameters par1, par2, etc. 

## Examples

```wolfram
(* Create a simple moving average indicator *)
indicator = FinancialIndicator["SimpleMovingAverage", 20]

(* Create a Bollinger Bands indicator *)
FinancialIndicator["BollingerBands", 20, 2]

(* Use in TradingChart *)
TradingChart[{"AAPL", {2023, 1, 1}}, 
  FinancialIndicator["RSI", 14]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FinancialIndicator.html) for more details.*