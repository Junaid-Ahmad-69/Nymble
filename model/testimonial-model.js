import mongoose, {Schema} from 'mongoose';

const testimonialSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    courseId: {
        type: Schema.ObjectId,
        ref: 'Category'
    },
    userId: {
        type: Schema.ObjectId,
        ref: 'Category'
    },
})
export const Testimonial = mongoose.models?.Testimonial ?? mongoose.model('Testimonial', testimonialSchema);