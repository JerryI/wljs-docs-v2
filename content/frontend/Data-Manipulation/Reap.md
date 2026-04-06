---
title: Reap
---

`Reap[expr]` gives the value of expr together with all expressions to which Sow has been applied during its evaluation. Expressions sown using Sow[e] or Sow[e,tagi] with different tags are given in different lists.

`Reap[expr,patt]` reaps only expressions sown with tags that match patt.

`Reap[expr,{patt1,patt2,…}]` puts expressions associated with each of the patti in a separate list.

`Reap[expr,patt,f]` returns {expr,{f[tag1,{e11,e12,…}],…}}.

## Examples

```wolfram
Reap[Sow[1]; Sow[2]; Sow[3]]
(* {3, {{1, 2, 3}}} *)
```

```wolfram
Reap[Sow[a, x]; Sow[b, y]; Sow[c, x], x]
(* {c, {{a, c}}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Reap.html) for more details.