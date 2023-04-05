import * as mongoose from 'mongoose';

export const ImportHistorySchema = new mongoose.Schema({
    status: String,
});
