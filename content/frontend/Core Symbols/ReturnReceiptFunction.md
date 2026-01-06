# ReturnReceiptFunction

`ReturnReceiptFunction` is an option for `MailReceiverFunction` that specifies what function to apply if a return receipt is requested for mail received by a `MailReceiverFunction`.

## Examples

```wolfram
MailReceiverFunction[..., ReturnReceiptFunction -> (Print["Receipt requested"] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReturnReceiptFunction.html) for more details.*