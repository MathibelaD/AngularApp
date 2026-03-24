const fs = require('fs');
const path = require('path');

require('dotenv').config();

const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } = process.env;

if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.error('Missing EmailJS environment variables. Check your .env file.');
  process.exit(1);
}

const envContent = (production) => `export const environment = {
  production: ${production},
  emailjs: {
    serviceId: '${EMAILJS_SERVICE_ID}',
    templateId: '${EMAILJS_TEMPLATE_ID}',
    publicKey: '${EMAILJS_PUBLIC_KEY}'
  }
};
`;

const dir = path.join(__dirname, 'src', 'environments');

fs.writeFileSync(path.join(dir, 'environment.ts'), envContent(false));
fs.writeFileSync(path.join(dir, 'environment.prod.ts'), envContent(true));

console.log('Environment files updated from .env');
