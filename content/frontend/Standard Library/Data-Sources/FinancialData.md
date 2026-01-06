# FinancialData

`FinancialData["name"]` gives the last known price or value for the financial entity specified by "name".

- `FinancialData["name",start]` gives a list of dates and daily closing values for "name" from start until the current date.
- `FinancialData["name",{start,end}]` gives a list of dates and daily closing values for dates from start to end.
- `FinancialData["name",{start,end,period}]` gives a list of dates and prices for the specified periods lying between start and end.
- `FinancialData["name","prop"]` gives the value of the specified property for the financial entity "name". 
- `FinancialData["name","prop",{start,end,…}]` gives a list of dates and values of a property for a sequence of dates or periods. 

## Examples

```wolfram
(* Get current Apple stock price *)
FinancialData["AAPL"]

(* Get historical data for the last year *)
FinancialData["GOOG", {DatePlus[Today, -1], Today}]

(* Get company market cap *)
FinancialData["MSFT", "MarketCap"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FinancialData.html) for more details.*