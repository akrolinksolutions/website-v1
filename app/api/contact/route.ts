import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message, formType } = body;

    // Basic validation
    if (!name || !email || !message || !formType) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter - configured for Gmail
    // IMPORTANT: Use App Password, not regular Gmail password
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your Gmail address
        pass: process.env.SMTP_PASSWORD, // Your Gmail App Password (16 characters)
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email content
    const mailOptions = {
      from: "info@akrolinksolutions.com", // Always send from your own email
      to: "info@akrolinksolutions.com", // Send to yourself
      replyTo: email, // Set reply-to as the submitter's email so you can reply directly
      subject:
        formType === "quote"
          ? `New Quote Request from ${name}`
          : `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
            ${
              formType === "quote"
                ? "New Quote Request"
                : "New Contact Form Submission"
            }
          </h2>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #0066cc; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
          </div>

          ${
            formType === "quote" && body.shipmentType
              ? `
          <div style="background-color: #f0f8ff; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <h3 style="color: #0066cc; margin-top: 0;">Shipment Details</h3>
            <p><strong>Shipment Type:</strong> ${body.shipmentType}</p>
            ${
              body.noOfShipments
                ? `<p><strong>Number of Shipments:</strong> ${body.noOfShipments}</p>`
                : ""
            }
            ${
              body.originCountry
                ? `<p><strong>Origin Country:</strong> ${body.originCountry}</p>`
                : ""
            }
            ${
              body.destinationCountry
                ? `<p><strong>Destination Country:</strong> ${body.destinationCountry}</p>`
                : ""
            }
            ${
              body.estimatedValue
                ? `<p><strong>CFL Courier Code:</strong> ${body.estimatedValue}</p>`
                : ""
            }
            ${
              body.urgency
                ? `<p><strong>Urgency:</strong> ${body.urgency}</p>`
                : ""
            }
          </div>
          `
              : ""
          }

          ${
            message || body.goodsDescription
              ? `
          <div style="background-color: #fff; padding: 20px; border-radius: 5px; margin-top: 20px; border-left: 4px solid #0066cc;">
            <h3 style="color: #0066cc; margin-top: 0;">${
              formType === "quote" ? "Goods Description" : "Message"
            }</h3>
            <p style="white-space: pre-wrap;">${
              message || body.goodsDescription
            }</p>
          </div>
          `
              : ""
          }

          ${
            formType === "quote" && body.additionalInfo
              ? `
          <div style="background-color: #fffbf0; padding: 20px; border-radius: 5px; margin-top: 20px; border-left: 4px solid #ffcc00;">
            <h3 style="color: #333; margin-top: 0;">Additional Information</h3>
            <p style="white-space: pre-wrap;">${body.additionalInfo}</p>
          </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the Akrolink Solutions website contact form.</p>
            <p><strong>Reply directly to this email to respond to: ${email}</strong></p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
