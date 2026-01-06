# SendMail

`SendMail[body]` sends mail consisting of body to the address specified by $CloudUserID.

- `SendMail[{"subject"}]` sends mail with the specified subject and no body.
- `SendMail[{"subject", body}]` sends mail with the specified subject and body.
- `SendMail[{"subject", body, att}]` sends mail with the attachment or attachments att.
- `SendMail["to", content]` sends mail to the specified To: address.
- `SendMail[{to1, to2, ...}, content]` sends mail to multiple To: addresses.
- `SendMail[assoc]` sends mail with elements specified in the association assoc.

## Examples

```wolfram
SendMail["user@example.com", {"Test Subject", "Hello!"}]
```

```wolfram
SendMail[<|"To" -> "user@example.com", "Subject" -> "Report", "Body" -> "See attached", "Attachments" -> File["report.pdf"]|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SendMail.html) for more details.*