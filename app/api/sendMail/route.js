import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, subject, company, message } = await req.json();

    // Mail transporter oluşturuluyor
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Mail içeriği
    const mailOptions = {
      from: `"Web Sitesi İletişim Formu" <${process.env.SMTP_USER}>`,
      to: "sumeyyedg04@gmail.com",
      subject: `📩 Yeni İletişim Mesajı: ${subject || "Konusuz"}`,
      html: `
        <h2>Yeni bir iletişim mesajı alındı</h2>
        <p><b>İsim:</b> ${name}</p>
        <p><b>E-posta:</b> ${email}</p>
        <p><b>Telefon:</b> ${phone || "-"}</p>
        <p><b>Şirket:</b> ${company || "-"}</p>
        <p><b>Konu:</b> ${subject || "-"}</p>
        <p><b>Mesaj:</b></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Mail gönderilemedi:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
