## Create Book

create module using
`nest g module book`

create controller using (`--no-spec` stand for no test file)
`nest g controller book --no-spec`

create module using
`nest g service book --no-spec`

## Add mongoose and dotenv

install mongoose and nest config for require dot env
`pnpm add mongoose @nestjs/mongoose @nestjs/config --save`


```js
    // for .env file
    ConfigModule.forRoot({
      envFilePath: '.env', // require dot env file
      isGlobal: true,
    }),
    // for connecting with mongoose
    MongooseModule.forRoot(process.env.MONGODB_URL),
```

## Book Schema created
```ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// create enum for book category
export enum Category {
  ADVENTURE = 'Adventure',
  CLASSICS = 'classics',
  CRIME = 'Crime',
  Fantasy = 'Fantasy',
}
// create schema for book
@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  category: Category;
}

// export schema
export const BookSchema = SchemaFactory.createForClass(Book)
```


## Create Book DTO
DTO (Data Transfer Object) is like define what type of data to expect from the user

