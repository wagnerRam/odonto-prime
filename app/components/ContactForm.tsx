
"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Não foi possível enviar a mensagem."
        );
      }

      setFeedback("Mensagem enviada com sucesso!");
      form.reset();
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao enviar a mensagem."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Seu nome</label>
      <input
        id="name"
        name="name"
        placeholder="Como podemos chamar você?"
        required
        maxLength={100}
      />

      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="seu@email.com"
        required
        maxLength={254}
      />

      <label htmlFor="phone">Telefone</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="(00) 00000-0000"
        maxLength={20}
      />

      <label htmlFor="message">Como podemos ajudar?</label>
      <textarea
        id="message"
        name="message"
        rows={4}
        placeholder="Conte um pouco sobre o que você precisa..."
        required
        maxLength={2000}
      />

      <button
        type="submit"
        className="button-primary"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar mensagem"}
        <span>↗</span>
      </button>

      <small className="form-note" role="status" aria-live="polite">
        {feedback || "Nossa equipe entrará em contato em breve."}
      </small>
    </form>
  );
}
