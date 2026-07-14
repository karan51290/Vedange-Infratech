import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { businessData } from '../data';

export const Contact = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-24 pb-20 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <span className="uppercase tracking-[0.1em] text-sm font-semibold text-primary mb-4 block">
              Contact Us
            </span>
            <h1 className="text-4xl font-bold text-ink mb-6 tracking-tight">Let's Build Together</h1>
            <p className="text-body-mid mb-10 text-lg">
              Send us a message and our team will get back to you promptly with a solution tailored to your needs.
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Full Name</label>
                  <input type="text" className="w-full bg-canvas-soft border border-mute rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-ink transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">Your Phone</label>
                  <input type="tel" className="w-full bg-canvas-soft border border-mute rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-ink transition-all" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-2">Service Required</label>
                <select className="w-full bg-canvas-soft border border-mute rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-ink appearance-none transition-all">
                  <option value="">Select a product or service</option>
                  <option value="Hollow Sections">Hollow Sections</option>
                  <option value="MS / GP Pipes">MS / GP Pipes</option>
                  <option value="JSW Roofing Sheets">JSW Roofing Sheets</option>
                  <option value="Structural Steel">Structural Steel Components</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-2">Message</label>
                <textarea rows={4} className="w-full bg-canvas-soft border border-mute rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-ink transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 rounded-xl transition-colors shadow-sm">
                Submit Inquiry
              </button>
            </form>
          </div>

          <div>
            <div className="bg-canvas-soft rounded-xl p-8 shadow-sm border border-mute mb-8">
              <h3 className="text-xl font-bold text-ink mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-body">
                  <MapPin className="text-primary shrink-0 mt-1" />
                  <div>
                    <strong className="block text-ink mb-1">Head Office</strong>
                    {businessData.addressFull}
                  </div>
                </div>
                <div className="flex items-start gap-4 text-body">
                  <MapPin className="text-primary shrink-0 mt-1" />
                  <div>
                    <strong className="block text-ink mb-1">Manufacturing Unit</strong>
                    {businessData.cuncolimAddress}
                  </div>
                </div>
                <div className="flex items-start gap-4 text-body">
                  <Phone className="text-primary shrink-0 mt-1" />
                  <div>
                    <strong className="block text-ink mb-1">Phone</strong>
                    <a href={`tel:${businessData.phone}`} className="hover:text-primary transition-colors">
                      {businessData.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-body">
                  <Mail className="text-primary shrink-0 mt-1" />
                  <div>
                    <strong className="block text-ink mb-1">Email</strong>
                    <a href={`mailto:${businessData.email}`} className="hover:text-primary transition-colors">
                      {businessData.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-sm h-72 border border-mute relative bg-mute">
              <iframe src={businessData.googleLink} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" className="absolute inset-0"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Terms = () => (
  <div className="animate-in fade-in duration-700 pt-24 pb-20 px-6 max-w-4xl mx-auto min-h-[60vh]">
    <h1 className="text-4xl font-bold text-ink mb-8">Terms & Conditions</h1>
    <div className="prose max-w-none text-body">
      <p className="mb-4">Welcome to {businessData.name}. By accessing this website, we assume you accept these terms and conditions. Do not continue to use this website if you do not agree to take all of the terms and conditions stated on this page.</p>
      <h3 className="text-xl font-bold text-ink mt-8 mb-4">License</h3>
      <p className="mb-4">Unless otherwise stated, {businessData.name} and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.</p>
      <h3 className="text-xl font-bold text-ink mt-8 mb-4">Business Engagements</h3>
      <p className="mb-4">All quotes, orders, and manufacturing requests initiated through this platform are subject to final contract and review by our business team. Prices and timelines may vary based on material availability and market conditions.</p>
    </div>
  </div>
);

export const Privacy = () => (
  <div className="animate-in fade-in duration-700 pt-24 pb-20 px-6 max-w-4xl mx-auto min-h-[60vh]">
    <h1 className="text-4xl font-bold text-ink mb-8">Privacy Policy</h1>
    <div className="prose max-w-none text-body">
      <p className="mb-4">Your privacy is important to us. It is {businessData.name}'s policy to respect your privacy regarding any information we may collect from you across our website.</p>
      <h3 className="text-xl font-bold text-ink mt-8 mb-4">Information we collect</h3>
      <p className="mb-4">We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
      <h3 className="text-xl font-bold text-ink mt-8 mb-4">How we use it</h3>
      <p className="mb-4">The information we collect is used primarily to respond to your inquiries, provide quotes, and facilitate business communications regarding our steel solutions and manufacturing services.</p>
    </div>
  </div>
);
