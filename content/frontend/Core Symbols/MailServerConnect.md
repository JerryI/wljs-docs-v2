# MailServerConnect

`MailServerConnect[]` connects to your default incoming mail server.

`MailServerConnect["server"]` connects to the specified incoming mail server "server".

`MailServerConnect["server",userid]` connects using the specified user ID userid.

`MailServerConnect["server",userid,password]` connects using userid and password.

## Examples

Connect to the default mail server:

```wolfram
conn = MailServerConnect[]
(* MailServerConnection[...] *)
```

Connect to a specific server:

```wolfram
conn = MailServerConnect["imap.gmail.com"]
(* MailServerConnection[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MailServerConnect.html) for more details.*