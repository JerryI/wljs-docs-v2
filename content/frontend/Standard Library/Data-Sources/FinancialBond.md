---
title: FinancialBond
---

`FinancialBond[params,ambientparams]` gives the value of a financial bond instrument.

`FinancialBond[params,ambientparams,prop]` computes the specified property prop.

## Examples

```wolfram
(* Value a simple bond *)
FinancialBond[<|"Coupon" -> 0.05, "Maturity" -> 5|>, 
  <|"InterestRate" -> 0.04|>]

(* Get a specific property *)
FinancialBond[<|"Coupon" -> 0.05, "Maturity" -> 10|>, 
  <|"InterestRate" -> 0.03|>, "Duration"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FinancialBond.html) for more details.*