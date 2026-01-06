---
title: MailServerConnection
---

`MailServerConnection[...]` is a symbolic representation of a connection to an incoming mail server.

This object represents an active connection to an IMAP or POP mail server.

## Examples

```wolfram
conn = MailServerConnect["imap.example.com", "user@example.com", "password"]
```

```wolfram
MailExecute["Search", conn, "FROM:boss@company.com"]
```

```wolfram
Close[conn]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MailServerConnection.html) for more details.*