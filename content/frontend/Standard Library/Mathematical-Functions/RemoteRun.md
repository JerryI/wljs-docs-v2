---
title: RemoteRun
---

`RemoteRun["host", "command"]` runs the specified operating system command on the remote host, returning the exit code obtained.

- `RemoteRun[IPAddress["address"], "command"]` runs the command on the machine with the specified IP address.
- `RemoteRun[obj, "command"]` runs the command on the remote host specified by the RemoteConnectionObject obj.

## Examples

Run a command on a remote host:

```wolfram
RemoteRun["server.example.com", "ls -la"]
```

Using IP address:

```wolfram
RemoteRun[IPAddress["192.168.1.100"], "pwd"]
```

With connection object:

```wolfram
conn = RemoteConnect["myhost"];
RemoteRun[conn, "whoami"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoteRun.html) for more details.*