## Database setup

1. Make sure you have docker installed
2. Download hasura CLI [here](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html) (follow the "Install a binary globally" instruction according to the platform you are using). If you are on Windows, you'll want to add the .exe to you environment variables.
3. In the `database` directory, run `docker compose up -d`. This will download and setup the database and hasura images.
4. Inside the `hasura` directory, run `hasura deploy` to apply all the migrations to you database.
5. Run `hasura console`, a web interface will open and you should see the database
6. That's it you're ready to go! 🚀

## Database migration
Please refer to hasura's [official doc](https://hasura.io/docs/latest/graphql/core/migrations/index.html)

## Connecting to pg_admin
1. Open pg_admin `localhost:5432`. 
2. You will find the login credential inside the `docker-compose` file.