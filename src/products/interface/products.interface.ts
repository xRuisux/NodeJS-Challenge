import { Document } from 'mongoose';

export interface Products extends Document {
    code: number,
    status: String,
    imported_t: number
    url: String,
    creator: String,
    created_t: number,
    last_modified_t: number,
    product_name: String,
    quantity: String,
    brands: String,
    categories: String,
    labels: String,
    cities: String,
    purchase_places: String,
    stores: String,
    ingredients_text: String,
    traces: String,
    serving_size: String,
    serving_quantity: number,
    nutriscore_score: number,
    nutriscore_grade: String,
    main_category: String,
    image_url: String,
}