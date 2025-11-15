import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nome, email, assunto, mensagem } = await req.json();

    if (!nome || !email || !assunto || !mensagem) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: "Seu Site <no-reply@resend.dev>",
      to: "otaviopessoa999@gmail.com",
      subject: assunto, 
      html: `
        <h2>Novo contato do site</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Falha ao enviar email." },
      { status: 500 }
    );
  }
}
