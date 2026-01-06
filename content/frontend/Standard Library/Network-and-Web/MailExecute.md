---
title: MailExecute
---

`MailExecute[cmd, target]` executes the mail command cmd on the target mail server connection, folder, file or item(s).

## Examples

Get messages from server:

```wolfram
conn = MailServerConnect["imap.example.com"];
MailExecute["GetMessages", conn]
```

Move message to folder:

```wolfram
MailExecute["MoveMessages", {message, "Archive"}]
```

Delete messages:

```wolfram
MailExecute["DeleteMessages", {message1, message2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MailExecute.html) for more details.*