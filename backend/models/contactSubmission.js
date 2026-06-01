/**
 * contactSubmission.js
 * In-memory model representing contact and volunteer submissions.
 */

const contactSubmissions = [];

class ContactSubmission {
  static getAll() {
    return contactSubmissions;
  }

  static create({ name, email, message, type }) {
    const submission = {
      id: contactSubmissions.length + 1,
      name,
      email,
      message,
      type,
      createdAt: new Date().toISOString(),
    };
    contactSubmissions.push(submission);
    return submission;
  }
}

module.exports = ContactSubmission;
