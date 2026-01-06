---
title: ServiceExecute
---

`ServiceExecute[service, "req"]` executes "req" on an external service.

`ServiceExecute[service, "req", {par1->val1, ...}]` executes "req" with the specified settings for parameters.

`ServiceExecute[req]` executes ServiceRequest req on an external service.

## Examples

Execute a request on an external service:

```wolfram
ServiceExecute["Twitter", "Search", {"Query" -> "Wolfram"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ServiceExecute.html) for more details.*