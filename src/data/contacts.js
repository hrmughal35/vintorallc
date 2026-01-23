// Contact Form Submissions Storage
// Uses localStorage to persist contact form submissions

const STORAGE_KEY = 'vintora_contact_submissions'

// Get all contact submissions
export const getContactSubmissions = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    const submissions = JSON.parse(stored)
    // Sort by date (newest first)
    return submissions.sort((a, b) => new Date(b.date) - new Date(a.date))
  } catch (error) {
    console.error('Error reading contact submissions:', error)
    return []
  }
}

// Get a single contact submission by ID
export const getContactSubmission = (id) => {
  const submissions = getContactSubmissions()
  return submissions.find(sub => sub.id === id)
}

// Save a new contact submission
export const saveContactSubmission = (submission) => {
  try {
    const submissions = getContactSubmissions()
    const newSubmission = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      ...submission,
      date: new Date().toISOString(),
      read: false, // Mark as unread
    }
    submissions.unshift(newSubmission) // Add to beginning
    localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions))
    return newSubmission
  } catch (error) {
    console.error('Error saving contact submission:', error)
    throw error
  }
}

// Mark a submission as read/unread
export const markContactSubmissionRead = (id, read = true) => {
  try {
    const submissions = getContactSubmissions()
    const index = submissions.findIndex(sub => sub.id === id)
    if (index !== -1) {
      submissions[index].read = read
      localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions))
      return true
    }
    return false
  } catch (error) {
    console.error('Error updating contact submission:', error)
    return false
  }
}

// Delete a contact submission
export const deleteContactSubmission = (id) => {
  try {
    const submissions = getContactSubmissions()
    const filtered = submissions.filter(sub => sub.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
    return true
  } catch (error) {
    console.error('Error deleting contact submission:', error)
    return false
  }
}

// Get unread count
export const getUnreadCount = () => {
  const submissions = getContactSubmissions()
  return submissions.filter(sub => !sub.read).length
}

// Get total count
export const getTotalCount = () => {
  return getContactSubmissions().length
}
