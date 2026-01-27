// Legal Pages Storage (Privacy Policy & Terms of Service)
// Uses localStorage to persist content

const STORAGE_KEY_PRIVACY = 'vintora_privacy_policy'
const STORAGE_KEY_TERMS = 'vintora_terms_of_service'

// Default content
const defaultPrivacyContent = `Vintora LLC ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.

## Information We Collect

We may collect information that you provide directly to us, including:
- Name and contact information
- Email address
- Phone number
- Company information
- Any other information you choose to provide

## How We Use Your Information

We use the information we collect to:
- Respond to your inquiries and provide customer support
- Send you information about our products and services
- Improve our website and services
- Comply with legal obligations

## Data Security

We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

## Contact Us

If you have any questions about this Privacy Policy, please contact us at:
Email: info@vintorallc.com
Website: www.vintorallc.com`

const defaultTermsContent = `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our website.

## Use License

Permission is granted to temporarily access the materials on Vintora LLC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
- Modify or copy the materials
- Use the materials for any commercial purpose
- Attempt to decompile or reverse engineer any software
- Remove any copyright or other proprietary notations

## Disclaimer

The materials on Vintora LLC's website are provided on an 'as is' basis. Vintora LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

## Limitations

In no event shall Vintora LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vintora LLC's website.

## Contact Information

If you have any questions about these Terms of Service, please contact us at:
Email: info@vintorallc.com
Website: www.vintorallc.com`

// Get Privacy Policy content
export const getPrivacyPolicy = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_PRIVACY)
    if (stored) {
      return stored
    }
    // Return default if nothing stored
    return defaultPrivacyContent
  } catch (error) {
    console.error('Error reading privacy policy:', error)
    return defaultPrivacyContent
  }
}

// Save Privacy Policy content
export const savePrivacyPolicy = (content) => {
  try {
    localStorage.setItem(STORAGE_KEY_PRIVACY, content)
    return true
  } catch (error) {
    console.error('Error saving privacy policy:', error)
    return false
  }
}

// Get Terms of Service content
export const getTermsOfService = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_TERMS)
    if (stored) {
      return stored
    }
    // Return default if nothing stored
    return defaultTermsContent
  } catch (error) {
    console.error('Error reading terms of service:', error)
    return defaultTermsContent
  }
}

// Save Terms of Service content
export const saveTermsOfService = (content) => {
  try {
    localStorage.setItem(STORAGE_KEY_TERMS, content)
    return true
  } catch (error) {
    console.error('Error saving terms of service:', error)
    return false
  }
}
