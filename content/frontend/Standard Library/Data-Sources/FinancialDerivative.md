---
title: FinancialDerivative
---

`FinancialDerivative[instrument,params,ambientparams]` gives the value of the specified financial instrument.

`FinancialDerivative[instrument,params,ambientparams,prop]` computes the specified property prop.

## Examples

```wolfram
(* Price a European call option *)
FinancialDerivative["EuropeanCall", 
  <|"StrikePrice" -> 100, "Expiration" -> 1|>,
  <|"CurrentPrice" -> 100, "Volatility" -> 0.2, "InterestRate" -> 0.05|>]

(* Get option Greeks *)
FinancialDerivative["EuropeanCall", 
  <|"StrikePrice" -> 100, "Expiration" -> 0.5|>,
  <|"CurrentPrice" -> 100, "Volatility" -> 0.3|>, "Greeks"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FinancialDerivative.html) for more details.*