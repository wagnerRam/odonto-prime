
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const name = String(body.name || "").trim();
        const email = String(body.email || "").trim();
        const phone = String(body.phone || "").trim();
        const message = String(body.message || "").trim();

        // Validar campos obrigatórios
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: "Preencha seu nome, e-mail e mensagem." },
                { status: 400 }
            );
        }

        // Limitar tamanho dos campos
        if (
            name.length > 100 ||
            email.length > 254 ||
            phone.length > 20 ||
            message.length > 2000
        ) {
            return NextResponse.json(
                { message: "Um ou mais campos ultrapassaram o limite permitido." },
                { status: 400 }
            );
        }

        // Validar formato do e-mail
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!validEmail.test(email)) {
            return NextResponse.json(
                { message: "Informe um endereço de e-mail válido." },
                { status: 400 }
            );
        }

        // Verificar configurações do Resend
        const apiKey = process.env.RESEND_API_KEY;
        const recipient = process.env.CONTACT_EMAIL;

        if (!apiKey || !recipient) {
            return NextResponse.json(
                { message: "O serviço de contato ainda não está configurado." },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);

        // Enviar e-mail
        const { error } = await resend.emails.send({
            from: "Odonto Prime <onboarding@resend.dev>",
            to: recipient,
            replyTo: email,
            subject: `Novo contato pelo site — ${name}`,
            text: `
Nome: ${name}
E-mail: ${email}
Telefone: ${phone || "Não informado"}

Mensagem:
${message}
      `,
        });

        if (error) {
            console.error("Erro ao enviar e-mail:", error);

            return NextResponse.json(
                { message: "Não foi possível enviar sua mensagem agora." },
                { status: 502 }
            );
        }

        return NextResponse.json({
            message: "Mensagem enviada com sucesso!",
        });
    } catch (error) {
        console.error("Erro na API de contato:", error);

        return NextResponse.json(
            { message: "Ocorreu um erro interno. Tente novamente." },
            { status: 500 }
        );
    }
}
