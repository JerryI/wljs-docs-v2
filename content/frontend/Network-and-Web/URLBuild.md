---
title: URLBuild
---

`URLBuild["path",{param1->val1,param2->val2,...}]` builds a URL with the specified path and query parameters and values parami and vali.

`URLBuild[{path1,path2,...}]` builds a URL from the path components pathi.

`URLBuild[path,params]` builds a URL from a specification of a path and query parameters.

`URLBuild[assoc]` builds a URL from an association of components.

`URLBuild[assoc,params]` builds a URL from an association of components, plus query parameters and values.

## Examples

Build a URL with query parameters:

```wolfram
URLBuild["https://example.com", {"name" -> "test", "id" -> 123}]
(* "https://example.com?name=test&id=123" *)
```

Build a URL from path components:

```wolfram
URLBuild[{"https://example.com", "api", "v1", "data"}]
(* "https://example.com/api/v1/data" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/URLBuild.html) for more details.