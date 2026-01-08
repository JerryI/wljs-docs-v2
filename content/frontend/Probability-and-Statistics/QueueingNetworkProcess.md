---
title: QueueingNetworkProcess
---

`QueueingNetworkProcess[γ, r, μ, c]` represents an open (Jackson) queueing network process with arrival vector γ, routing probability matrix r, service vector μ, and service channel vector c.

- `QueueingNetworkProcess[γ, r, μ, c, k]` represents a closed (Gordon–Newell) queueing network process with k jobs in the system.

## Examples

Open queueing network:

```wolfram
QueueingNetworkProcess[{0.5, 0.3}, {{0, 0.5}, {0.5, 0}}, {1, 1}, {1, 1}]
```

Mean queue lengths:

```wolfram
qnp = QueueingNetworkProcess[{1}, {{0}}, {2}, {1}];
Mean[qnp]
```

Closed queueing network with 5 jobs:

```wolfram
QueueingNetworkProcess[{0, 0}, {{0, 1}, {1, 0}}, {2, 3}, {1, 1}, 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/QueueingNetworkProcess.html) for more details.