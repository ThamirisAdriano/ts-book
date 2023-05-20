import mongoose from "mongoose";

//Essa definição de esquema é usada para criar e validar 
//documentos de notícia antes de serem salvos no banco de dados MongoDB. 
//É uma forma de garantir que os documentos sigam uma estrutura consistente e correspondam às expectativas
// definidas pelo esquema. 

export const NewsSchema = new mongoose.Schema({
  titulo: { type: String },
  chapeu: { type: String },
  texto: { type: String },
  autor: { type: String },
  imagem: { type: String },
  dataPublicacao: { type: Date },
  tags: { type: String },
  link: { type: String },
  ativo: { type: Boolean },
});
