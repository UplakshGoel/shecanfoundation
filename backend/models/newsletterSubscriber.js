/**
 * newsletterSubscriber.js
 * In-memory model representing newsletter subscribers.
 */

const newsletterSubscribers = [];

class NewsletterSubscriber {
  static getAll() {
    return newsletterSubscribers;
  }

  static findByEmail(email) {
    return newsletterSubscribers.find(sub => sub.email === email);
  }

  static create({ email }) {
    const subscriber = {
      id: newsletterSubscribers.length + 1,
      email,
      subscribedAt: new Date().toISOString(),
    };
    newsletterSubscribers.push(subscriber);
    return subscriber;
  }
}

module.exports = NewsletterSubscriber;
