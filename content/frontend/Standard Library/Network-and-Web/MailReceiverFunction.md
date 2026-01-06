# MailReceiverFunction

`MailReceiverFunction[fun]` represents a mail receiver function that applies fun to any mail message it receives.

## Examples

Create a mail receiver that extracts the subject:

```wolfram
MailReceiverFunction[#["Subject"] &]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MailReceiverFunction.html) for more details.*