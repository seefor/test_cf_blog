export async function POST({ request }) {
  try {
    const data = await request.formData();
    const email = data.get('email');
    
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Valid email is required' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // TODO: Integrate with your preferred email service
    // Examples:
    // - Mailchimp: https://mailchimp.com/developer/marketing/api/
    // - ConvertKit: https://developers.convertkit.com/
    // - Klaviyo: https://developers.klaviyo.com/
    // - Brevo (Sendinblue): https://developers.brevo.com/
    
    console.log('New email subscription:', email);
    
    // For now, just log the email (replace with actual service integration)
    // You can also store in a database or send to a webhook
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed!' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Subscription error:', error);
    
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Something went wrong. Please try again.' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
