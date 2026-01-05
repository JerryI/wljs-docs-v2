# RelationalDatabase

`RelationalDatabase[...]` represents schema information about a relational database.

`RelationalDatabase[db]` gives the complete schema of the database referenced by db.

`RelationalDatabase[{table1, table2, ...}, db]` gives schema information related to the tables tablei.

## Examples

```wolfram
RelationalDatabase[DatabaseReference["mydb"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RelationalDatabase.html) for more details.*