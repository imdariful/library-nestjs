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
export const BookSchema = SchemaFactory.createForClass(Book);
