import React from 'react';
import { Target, Lightbulb } from 'lucide-react';
import { businessData } from '../data';

export const About = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-24 pb-20 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="uppercase tracking-[0.1em] text-sm font-semibold text-primary mb-4 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
              Building a Stronger Foundation Since {businessData.established}
            </h1>
            <p className="text-lg text-body leading-relaxed">
              {businessData.name} is a leading steel solutions company based in Goa, specializing in the manufacturing, processing, and distribution of high-quality steel products. With over a decade of industry experience, the company has established itself as a reliable partner for infrastructure, industrial, commercial, and residential projects across Goa and neighboring regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-canvas-soft p-10 rounded-xl shadow-sm border border-mute">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm border border-mute">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">Our Mission</h3>
              <p className="text-body leading-relaxed">
                {businessData.mission}
              </p>
            </div>
            
            <div className="bg-canvas-soft p-10 rounded-xl shadow-sm border border-mute">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm border border-mute">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-ink mb-4">Our Vision</h3>
              <p className="text-body leading-relaxed">
                {businessData.vision}
              </p>
            </div>
          </div>

          <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square bg-mute">
              <img 
                src="https://loremflickr.com/800/800/industry,factory?random=2" 
                alt="Photo by LoremFlickr - Modern industrial facility" 
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-ink mb-6">Why Choose {businessData.name}?</h2>
              <ul className="space-y-4 text-body">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <span>Strong association with JSW Steel Limited</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <span>More than a decade of industry experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <span>Reliable product quality & Timely deliveries</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <span>Customer-focused approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <span>Comprehensive steel solutions under one roof</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
