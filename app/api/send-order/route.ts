import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 🔁 Convert URL → Buffer
async function urlToBuffer(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch image: ${url}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function POST(req: any) {
  try {
    const data = await req.json();
    const { name, email, phone, address, cart, total } = data;

    // ✅ FORCE production URL (no localhost)
    const baseUrl = "https://chic-design.vercel.app";

    const attachments = [];

    for (let item of cart) {
      try {
        let imagePath = item.image;

        // ❗ FIX: convert _next/static → public path
        if (imagePath.includes("/_next/static")) {
          console.warn("❌ Skipping Next.js static image:", imagePath);
          continue; // skip broken images
        }

        // ✅ build full URL
        const fullUrl = imagePath.startsWith("http")
          ? imagePath
          : baseUrl + imagePath;

        console.log("📥 Fetching:", fullUrl);

        const buffer = await urlToBuffer(fullUrl);

        attachments.push({
          filename: `${item.name}.jpg`,
          content: buffer,
        });
      } catch (err) {
        console.error("❌ Image failed:", item.image, err);
      }
    }

    console.log("📎 Attachments count:", attachments.length);

    const html = `
      <h2>🛒 New Order</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>

      <h3>Order:</h3>
      <ul>
        ${cart
          .map(
            (item: any) => `
            <li>
              ${item.name} x${item.quantity} — ${item.price} DH <br/>
              <img src="${baseUrl}${item.image}" width="100" />
            </li>
          `
          )
          .join("")}
      </ul>

      <h3>Total: ${total} DH</h3>
    `;

    const res = await resend.emails.send({
      from: "Chic Design <onboarding@resend.dev>",
      to: "designasmae84@gmail.com",
      subject: "طلب جديد",
      html,
      attachments,
    });

    console.log("📧 RESEND:", res);

    return Response.json({
      success: true,
      data: res,
    });
  } catch (error) {
    console.error("🔥 ERROR:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}