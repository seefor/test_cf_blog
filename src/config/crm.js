// CRM Configuration
// Choose your preferred email service and add your API credentials

export const CRM_CONFIG = {
  // Choose your service: 'netlify', 'mailchimp', 'convertkit', 'klaviyo', 'brevo'
  service: 'netlify',
  
  // Mailchimp Configuration
  mailchimp: {
    apiKey: process.env.MAILCHIMP_API_KEY,
    serverPrefix: process.env.MAILCHIMP_SERVER_PREFIX, // e.g., 'us1'
    listId: process.env.MAILCHIMP_LIST_ID,
  },
  
  // ConvertKit Configuration
  convertkit: {
    apiKey: process.env.CONVERTKIT_API_KEY,
    formId: process.env.CONVERTKIT_FORM_ID,
  },
  
  // Klaviyo Configuration
  klaviyo: {
    apiKey: process.env.KLAVIYO_API_KEY,
    listId: process.env.KLAVIYO_LIST_ID,
  },
  
  // Brevo (Sendinblue) Configuration
  brevo: {
    apiKey: process.env.BREVO_API_KEY,
    listId: process.env.BREVO_LIST_ID,
  }
};

// Email validation
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Service integrations (examples)
export const emailServices = {
  async mailchimp(email) {
    const { apiKey, serverPrefix, listId } = CRM_CONFIG.mailchimp;
    
    const response = await fetch(`https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });
    
    return response.ok;
  },
  
  async convertkit(email) {
    const { apiKey, formId } = CRM_CONFIG.convertkit;
    
    const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: apiKey,
        email: email,
      }),
    });
    
    return response.ok;
  }
};
