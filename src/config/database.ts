export default () => ({
    mongodb: {
        uri: process.env.MONGODB_URI || `mongodb+srv://admin:IaLhmQ8nBHbPA3JN@clusterproductstest.s3vppb9.mongodb.net/?retryWrites=true&w=majority`,
        host: process.env.MONGODB_HOST || 'clusterproductstest.s3vppb9.mongodb.net',
        database: process.env.MONGODB_DATABASE || 'test',
        user: process.env.MONGODB_USER || 'admin',
        password: process.env.MONGODB_PASSWORD || 'IaLhmQ8nBHbPA3JN',
    },
});