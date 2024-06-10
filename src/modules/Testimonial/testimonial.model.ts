import { Schema, model } from 'mongoose';
import { ITestimonial } from './testimonial.interface';

const testimonialSchema = new Schema<ITestimonial>(
  {
    userId: {
      type: Schema.Types.ObjectId, // MongoDB ObjectId type
      ref: 'User', // Reference to the 'User' model
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1, // Minimum value for rating is 1
      max: 5, // Maximum value for rating is 5
    },
  },
  { timestamps: true },
);

// Create the Testimonial model using the schema
export const Testimonial = model<ITestimonial>(
  'Testimonial',
  testimonialSchema,
);
