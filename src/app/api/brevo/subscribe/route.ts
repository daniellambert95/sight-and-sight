import { NextRequest, NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not configured in environment variables');
      return NextResponse.json(
        { error: 'Brevo API is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Initialize Brevo API client
    const apiInstance = new brevo.ContactsApi();
    apiInstance.setApiKey(
      brevo.ContactsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    // Create contact in Brevo
    const createContact = new brevo.CreateContact();
    createContact.email = email.toLowerCase().trim();
    createContact.attributes = {
      FIRSTNAME: name.trim(),
    };
    createContact.listIds = [5];
    createContact.updateEnabled = true; // Update if contact exists

    await apiInstance.createContact(createContact);

    // Optional: Send welcome email via Brevo transactional template
    // Only send if BREVO_TEMPLATE_ID is configured
    const templateId = process.env.BREVO_TEMPLATE_ID;

    if (templateId) {
      try {
        const emailApiInstance = new brevo.TransactionalEmailsApi();
        emailApiInstance.setApiKey(
          brevo.TransactionalEmailsApiApiKeys.apiKey,
          process.env.BREVO_API_KEY!
        );

        const sendSmtpEmail = new brevo.SendSmtpEmail();
        sendSmtpEmail.to = [{ email, name }];
        sendSmtpEmail.templateId = parseInt(templateId);
        sendSmtpEmail.params = {
          NAME: name,
        };

        await emailApiInstance.sendTransacEmail(sendSmtpEmail);
      } catch (emailError) {
        console.error('Failed to send welcome email:', emailError);
        // Don't fail the subscription if email sending fails
      }
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Brevo API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
