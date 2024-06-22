import mongoose from 'mongoose';

const diseaseSchema = new mongoose.Schema({
    name: String,
    def: String
});

export const Disease = mongoose.model('Disease', diseaseSchema);


