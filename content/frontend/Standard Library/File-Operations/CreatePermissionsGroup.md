---
title: CreatePermissionsGroup
---

`CreatePermissionsGroup["name"]` creates a permissions group with the specified name.

`CreatePermissionsGroup["name", {user1, user2, ...}]` creates a permissions group consisting of the specified initial users.

## Examples

Create an empty permissions group:

```wolfram
CreatePermissionsGroup["MyGroup"]
```

Create with initial members:

```wolfram
CreatePermissionsGroup["Team", {"user1@example.com", "user2@example.com"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CreatePermissionsGroup.html) for more details.*