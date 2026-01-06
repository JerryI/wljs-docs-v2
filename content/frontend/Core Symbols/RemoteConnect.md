# RemoteConnect

`RemoteConnect["host"]` connects to the specified remote host.

- `RemoteConnect[IPAddress["address"]]` connects to the machine with the specified IP address.
- `RemoteConnect["host", username]` connects using the specified username for the remote host.
- `RemoteConnect["host", username, password]` connects using the specified username and password.

## Examples

Connect to a remote host:
```wolfram
conn = RemoteConnect["server.example.com"]
```

Connect with credentials:
```wolfram
RemoteConnect["192.168.1.100", "admin", "password"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoteConnect.html) for more details.*