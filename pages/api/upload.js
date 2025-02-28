import multiparty from 'multiparty';

export default async function handle(req, res) {
  const form = new multiparty.Form();
  
  // Usando o parse de maneira assíncrona
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Erro ao processar o upload', err);
      return res.status(500).json({ error: 'Erro ao processar os arquivos' });
    }

    // Se files contém algum arquivo
    if (files && files.file && files.file.length > 0) {
      console.log("Número de arquivos recebidos:", files.file.length);  // Deve verificar o arquivo na chave 'file'
      return res.json({ message: 'Upload bem-sucedido' });
    } else {
      return res.status(400).json({ error: 'Nenhum arquivo enviado' });
    }
  });
}

export const config = {
  api: {
    bodyParser: false, 
  },
};
