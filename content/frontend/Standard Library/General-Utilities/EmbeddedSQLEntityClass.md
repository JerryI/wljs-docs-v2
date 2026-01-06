# EmbeddedSQLEntityClass

`EmbeddedSQLEntityClass[string, props]` represents a verbatim SQL query to be interpreted as an entity class with properties given by props.

`EmbeddedSQLEntityClass[template, props, args]` represents an SQL query string template with arguments provided by args.

## Examples

Create an entity class from SQL:

```wolfram
EmbeddedSQLEntityClass["SELECT * FROM users", {"name", "id"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EmbeddedSQLEntityClass.html) for more details.*