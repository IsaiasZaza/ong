import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, telefone } = req.body;

    // Validação básica
    if (!name || !email || !telefone) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    // Crie o transportador
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT),
        secure: process.env.EMAIL_SERVER_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      });
    } catch (error) {
      console.error('Erro ao criar transportador:', error);
      return res.status(500).json({ message: 'Erro no servidor de email.' });
    }

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.TO_EMAIL,
      subject: 'Nova mensagem do formulário de contato',
      text: `Telefone: ${telefone}`, // Atualizado para incluir telefone
      html: `<p>Telefone: ${telefone}</p>`, // Atualizado para incluir telefone
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      res.status(500).json({ message: 'Erro ao enviar o email.' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido.' });
  }
}
