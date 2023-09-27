Create database server container
```
docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=yourStrong(!)Password' -e 'MSSQL_PID=Evaluation' -p 1433:1433  --name nestexercise --hostname sqlpreview -d mcr.microsoft.com/mssql/server:2022-preview-ubuntu-22.04

docker run -e 'ACCEPT_EULA=Y' -e 'MSSQL_SA_PASSWORD=yourStrong(!)Password' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-preview-ubuntu-22.04
```

Create database
```
docker exec -it mssql /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'yourStrong(!)Password' -Q 'CREATE DATABASE mydb'
```

```
docker run --name mssql -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=yourStrong(!)Password' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest
docker exec -it mssql /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 'yourStrong(!)Password'
```

```
docker exec -it mssql /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'yourStrong(!)Password' -Q 'CREATE DATABASE mydb'
```


docker cp mysitename.crt mssql:/usr/local/share/ca-certificates/mysitename.crt
docker exec mssql update-ca-certificates
