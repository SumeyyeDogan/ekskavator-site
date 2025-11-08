// app/api/sendRentalMail/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, phone, company, machineType, rentalDuration, message } = data;

    // transporter oluşturma
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Geliştirme sırasında TLS sorunlarını test etmek için (production'da kullanma)
      // tls: { rejectUnauthorized: false },
    });

    // transporter.verify ile bağlantı testi (isteğe bağlı, hatayı erken göstersin)
    await transporter.verify();

    const mailOptions = {
      from: `"Kiralama Talebi" <${process.env.SMTP_USER}>`,
      to: 'sumeyyedg04@gmail.com',
      subject: `🚜 Yeni Kiralama Talebi: ${machineType || 'Belirtilmedi'}`,
      text: `
Yeni kiralama talebi:

İsim: ${name}
E-posta: ${email}
Telefon: ${phone}
Şirket: ${company || '-'}
Makine: ${machineType || '-'}
Süre: ${rentalDuration || '-'}
Mesaj:
${message || '-'}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    // Konsola tam hata yazısı (terminalde gör)
    console.error('sendRentalMail error:', err);

    // Geliştirme sırasında istemciye detaylı hata dönebiliriz (prod'da bunu kaldır)
    const safeMessage = process.env.NODE_ENV === 'development'
      ? (err.message || String(err))
      : 'Mail gönderilemedi';

    return new Response(JSON.stringify({ success: false, error: safeMessage }), { status: 500 });
  }
}
