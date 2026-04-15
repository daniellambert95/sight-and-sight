import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, service, projectTypes, customProject } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured in environment variables');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly at hello@siteandsight.com' },
        { status: 500 }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Format the email content
    let emailMessage = `
Contact Information:
- Name: ${name}
- Email: ${email}
`;

    if (service) {
      emailMessage += `- Service: ${service}\n`;
    }

    if (projectTypes && projectTypes.length > 0) {
      emailMessage += `- Project Types: ${projectTypes.join(', ')}\n`;
    }

    emailMessage += `
Message:
${message}
`;

    if (customProject) {
      emailMessage += `
Project Details:
${customProject}
`;
    }

    emailMessage += `
---
Submitted: ${new Date().toLocaleString()}
Form: ${projectTypes ? 'Project Inquiry Modal' : 'Contact Form'}
`;

    // Create HTML email content
    const htmlContent = `
      <h2>${projectTypes ? 'New Project Inquiry' : 'New Contact Form Submission'}</h2>
      
      <h3>Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        ${service ? `<li><strong>Service:</strong> ${service}</li>` : ''}
        ${projectTypes && projectTypes.length > 0 ? `<li><strong>Project Types:</strong> ${projectTypes.join(', ')}</li>` : ''}
      </ul>
      
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      ${customProject ? `
        <h3>Project Details:</h3>
        <p>${customProject.replace(/\n/g, '<br>')}</p>
      ` : ''}
      
      <hr>
      <p><small>
        Submitted: ${new Date().toLocaleString()}<br>
        Form: ${projectTypes ? 'Project Inquiry Modal' : 'Contact Form'}
      </small></p>
    `;

    // Send email using Resend
    console.log('Sending email via Resend...');
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Use Resend's default sender for now
      to: ['hello@siteandsight.com'],
      replyTo: email,
      subject: `${projectTypes ? 'New Project Inquiry' : 'New Contact Form'} from ${name}`,
      html: htmlContent,
    });

    console.log('Resend response:', { data, error });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send message' },
      { status: 500 }
    );
  }
}