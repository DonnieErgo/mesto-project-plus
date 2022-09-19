import { Schema, model } from 'mongoose';
import { ICard } from '../utils/types';

const cardsSchema = new Schema<ICard>({
  name: {
    type: String,
    minlength: [2, 'Поле должно содержать от 2 до 20 символов'],
    maxlength: [20, 'Поле должно содержать от 2 до 20 символов'],
    required: [true, 'Обязательное поле'],
  },
  link: {
    type: String,
    required: [true, 'Обязательное поле'],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Обязательное поле'],
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
      default: [],
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default model<ICard>('card', cardsSchema);
