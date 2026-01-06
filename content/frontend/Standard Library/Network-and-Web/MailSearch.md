---
title: MailSearch
---

`MailSearch[folder, assoc]` searches the specified mail folder for messages with properties matching elements in assoc.

`MailSearch[assoc]` searches the current default mail inbox.

`MailSearch[]` gives the list of unread messages in the current default mail inbox.

## Examples

Get unread messages:

```wolfram
MailSearch[]
(* {MailItem[...], ...} *)
```

Search by sender:

```wolfram
MailSearch[<|"From" -> "user@example.com"|>]
```

Search in a specific folder:

```wolfram
MailSearch["Sent", <|"Subject" -> "meeting"|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MailSearch.html) for more details.*