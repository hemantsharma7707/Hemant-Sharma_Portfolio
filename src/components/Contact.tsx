import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { socialLinks, contactContent } from '../data/socialLinks';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '../lib/animations';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // Since no backend is configured, use mailto fallback
    const mailtoLink = `mailto:${socialLinks.emailDisplay}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    // Small delay to show loading state, then open mailto
    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset success state after 5s
      setTimeout(() => setStatus('idle'), 5000);
    }, 500);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: socialLinks.emailDisplay,
      href: socialLinks.email,
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: socialLinks.phone,
      href: socialLinks.phoneHref,
    },
    {
      icon: <GithubIcon size={20} />,
      label: 'GitHub',
      value: 'hemantsharma7707',
      href: socialLinks.github,
    },
    {
      icon: <LinkedinIcon size={20} />,
      label: 'LinkedIn',
      value: 'hemant-sharma-jvd',
      href: socialLinks.linkedin,
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-mono tracking-wide">// contact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            {contactContent.heading}
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            {contactContent.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact methods */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="lg:col-span-2 space-y-4"
          >
            {contactMethods.map((method) => (
              <motion.a
                key={method.label}
                variants={slideInLeft}
                href={method.href}
                target={method.label !== 'Email' ? '_blank' : undefined}
                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="card-glass card-hover p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {method.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">{method.label}</p>
                  <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Note about form */}
            <motion.div variants={slideInLeft} className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="text-primary font-medium">Note:</span> The contact form uses mailto
                as a fallback. Your email client will open with the message pre-filled. For a direct
                backend connection, configure an email service.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={slideInRight}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card-glass p-6 md:p-8 space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-400 mb-1.5">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className={`w-full px-4 py-3 bg-dark-100 border rounded-xl text-white text-sm placeholder-gray-600
                      focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all
                      ${errors.name ? 'border-red-500/50' : 'border-gray-800/50'}`}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-400 text-xs mt-1 flex items-center gap-1" role="alert">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-400 mb-1.5">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`w-full px-4 py-3 bg-dark-100 border rounded-xl text-white text-sm placeholder-gray-600
                      focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all
                      ${errors.email ? 'border-red-500/50' : 'border-gray-800/50'}`}
                    placeholder="your@email.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-400 text-xs mt-1 flex items-center gap-1" role="alert">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-400 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className={`w-full px-4 py-3 bg-dark-100 border rounded-xl text-white text-sm placeholder-gray-600
                    focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all
                    ${errors.subject ? 'border-red-500/50' : 'border-gray-800/50'}`}
                  placeholder="What's this about?"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-red-400 text-xs mt-1 flex items-center gap-1" role="alert">
                    <AlertCircle size={12} /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className={`w-full px-4 py-3 bg-dark-100 border rounded-xl text-white text-sm placeholder-gray-600 resize-none
                    focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all
                    ${errors.message ? 'border-red-500/50' : 'border-gray-800/50'}`}
                  placeholder="Tell me about your project or idea..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-red-400 text-xs mt-1 flex items-center gap-1" role="alert">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 size={16} />
                    Email Client Opened!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
