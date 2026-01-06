# Missing

`Missing[]` represents data that is missing.

`Missing["reason"]` specifies a reason for the data being missing.

`Missing["reason", expr]` associates the expression expr with the missing data.

## Examples

Create missing data:

```wolfram
Missing["NotAvailable"]
(* Missing["NotAvailable"] *)
```

Missing values propagate through computations:

```wolfram
{1, 2, Missing[], 4} + 1
(* {2, 3, Missing[], 5} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Missing.html) for more details.*