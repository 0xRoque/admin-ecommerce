
import mongoose from "mongoose";  // Importa mongoose
const { Schema, model } = mongoose;  // Desestrutura 'model' e 'Schema' do mongoose

// Definição do esquema do produto
const ProductSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

// Criando o modelo a partir do esquema
const Product = mongoose.models.Product || model("Product", ProductSchema);

// Exportando o modelo
export { Product };
