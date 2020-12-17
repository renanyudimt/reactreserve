// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV: "mongodb+srv://renanyudi:dlNOe1g6caj42oPo@cluster0.aq1np.mongodb.net/Estudos?retryWrites=true&w=majority",
    JWT_SECRET: "asd234flapj234ksdh1flçka234jsd", //Somente será possivel gerar um token de usuario com essa secret que eu coloquei ai aleatoriamente
    CLOUDINARY_URL: "<insert-cloudinary-url>",
    STRIPE_SECRET_KEY: "sk_test_51Hy6iuKI6qQv71tk2KmD4bqUeM0fP72ebstCAYw7ENIVXuiFQmywOv9U7yFC8Ujdam3vHA696ve2q57hNrpAPPOW00E1OgLzFg",
    STRIPE_PUBLISH_KEY: "pk_test_51Hy6iuKI6qQv71tkbUEjLkkX9eY8H29vB3GSRn2Vd1Pv6j22NJUwQ1bTN1qHMLbfi4WDGwYEP55DfBa6rAXax3od00ga8x4JWU"
  }
};
