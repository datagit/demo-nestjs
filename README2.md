https://docs.nestjs.com/controllers
```bash
# change code
# run app
npm run build

npm run start:dev

# run app with debug, setting debug: Attach by Process ID
npm run start:debug
```

https://docs.nestjs.com/providers
```bash
mkdir src/cats
mkdir src/cats/interfaces && touch src/cats/interfaces/cat.interface.ts
mkdir src/cats/dto/ && touch src/cats/dto/create-cat.dto.ts
touch src/cats/cats.service.ts
touch src/cats/cats.controller.ts

# call api
# create
curl --location --request POST 'http://localhost:3000/cats' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "name2",
  "age": 5,
  "breed": "TYPE_01"
}'
# get all
curl http://localhost:3000/cats
```