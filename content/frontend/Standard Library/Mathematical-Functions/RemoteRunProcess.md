---
title: RemoteRunProcess
---

`RemoteRunProcess["host", "command"]` runs the specified system command on the remote host, returning information on the outcome.

- `RemoteRunProcess[IPAddress["address"], "command"]` runs the command on the machine with the specified IP address.
- `RemoteRunProcess[obj, "command"]` runs the command on the remote host specified by the RemoteConnectionObject obj.
- `RemoteRunProcess["host", {"command", arg1, arg2, ...}]` runs the specified command, with command-line arguments argi.
- `RemoteRunProcess["host", command, "prop"]` returns only the specified property.
- `RemoteRunProcess["host", command, prop, input]` feeds the specified initial input to the command.

## Examples

Run a command on a remote host:
```wolfram
RemoteRunProcess["server.example.com", "ls -la"]
```

Get only the exit code:
```wolfram
RemoteRunProcess["server", {"echo", "Hello"}, "ExitCode"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoteRunProcess.html) for more details.*