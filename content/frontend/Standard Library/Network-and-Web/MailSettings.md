# MailSettings

`MailSettings` is an option for `SendMail` and `MailServerConnect` to specify mail settings.

## Examples

```wolfram
SendMail["To" -> "user@example.com", "Body" -> "Hello", 
  MailSettings -> {"Username" -> "me", "Password" -> "secret"}]
```

```wolfram
MailServerConnect[server, MailSettings -> settings]
```

```wolfram
$MailSettings
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MailSettings.html) for more details.*