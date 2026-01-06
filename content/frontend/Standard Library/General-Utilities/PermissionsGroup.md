---
title: PermissionsGroup
---

`PermissionsGroup["name"]` represents a permissions group with the specified name, owned by the current user.

- `PermissionsGroup[user, "name"]` represents a permissions group owned by the specified user.

## Examples

Create a permissions group:
```wolfram
PermissionsGroup["MyTeam"]
```

Reference another user's group:
```wolfram
PermissionsGroup["alice", "SharedGroup"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PermissionsGroup.html) for more details.*