import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      projectType,
      currentWebsite,
      goals,
      hasBranding,
      brandingLink,
      interests,
      interestDetails,
      additionalInfo,
    } = body;

    if (!name || !email || !goals) {
      return NextResponse.json(
        { error: 'Name, email, and project goals are required' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured in environment variables');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly at hello@siteandsight.com' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const rows: { label: string; value: string }[] = [
      { label: 'Name', value: name },
      { label: 'Email', value: email },
      { label: 'Company', value: company || 'Not provided' },
      { label: 'Project Type', value: projectType || 'Not specified' },
    ];

    if (projectType === 'Redesign' && currentWebsite) {
      rows.push({ label: 'Current Website', value: currentWebsite });
    }

    rows.push({ label: 'Existing Branding/Design', value: hasBranding || 'Not specified' });

    if (brandingLink) {
      rows.push({ label: 'Branding/Design Link', value: brandingLink });
    }

    rows.push({ label: 'Other Interests', value: interests && interests.length > 0 ? interests.join(', ') : 'None' });

    const textRows = rows.map(r => `- ${r.label}: ${r.value}`).join('\n');
    const htmlRows = rows.map(r => `<li><strong>${r.label}:</strong> ${r.value}</li>`).join('');

    const emailMessage = `
New Project Enquiry:

${textRows}

Project Goals:
${goals}

${interestDetails ? `More on Other Interests:\n${interestDetails}\n` : ''}
${additionalInfo ? `Additional Info:\n${additionalInfo}\n` : ''}
---
Form: Start a Project
Submitted: ${new Date().toLocaleString()}
    `.trim();

    const htmlContent = `
      <h2>New Project Enquiry</h2>
      <ul>${htmlRows}</ul>
      <h3>Project Goals:</h3>
      <p>${String(goals).replace(/\n/g, '<br>')}</p>
      ${interestDetails ? `<h3>More on Other Interests:</h3><p>${String(interestDetails).replace(/\n/g, '<br>')}</p>` : ''}
      ${additionalInfo ? `<h3>Additional Info:</h3><p>${String(additionalInfo).replace(/\n/g, '<br>')}</p>` : ''}
      <hr>
      <p><small>
        Submitted: ${new Date().toLocaleString()}<br>
        Form: Start a Project
      </small></p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['hello@siteandsight.com'],
      replyTo: email,
      subject: `New Project Enquiry from ${name}`,
      html: htmlContent,
      text: emailMessage,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Project details sent successfully!', id: data?.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Start a Project form error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send message' },
      { status: 500 }
    );
  }
}
