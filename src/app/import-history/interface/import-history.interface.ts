import { Document } from 'mongoose';

export interface ImportHistory extends Document {
    status: String,
}