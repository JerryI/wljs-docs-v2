# SendMail

```
SendMail[body] sends mail consisting of body to the address specified by $CloudUserID.

SendMail[{"subject"}] sends mail with the specified subject and no body.

SendMail[{"subject",body}] sends mail with the specified subject and body.

SendMail[{"subject",body,att}] sends mail with the attachment or attachments att.

SendMail["to",content] sends mail to the specified To: address.

SendMail[{to1,to2,…},content] sends mail to multiple To: addresses.

SendMail[{{to1,…},{cc1,…}},content] includes the cci as Cc: addresses.

SendMail[{{to1,…},{cc1,…},{bcc1,…}},content] also includes the bcci as Bcc: addresses.

SendMail[assoc] sends mail with elements specified in the association assoc.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*