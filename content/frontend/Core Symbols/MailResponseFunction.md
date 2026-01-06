# MailResponseFunction

`MailResponseFunction` is an option for `MailReceiverFunction` that specifies what function to apply to respond to the sender of mail received by a `MailReceiverFunction`.

## Examples

```wolfram
MailReceiverFunction[function, MailResponseFunction -> (SendMail["Reply"] &)]
```

```wolfram
MailReceiverFunction[handler, MailResponseFunction -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MailResponseFunction.html) for more details.*