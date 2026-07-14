import React from 'react';
import { businessData } from '../data';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Manufacturing = () => (
  <div className="animate-in fade-in duration-700">
    <section className="pt-12 pb-20 px-6 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <Link to="/businesses" className="inline-flex items-center gap-2 text-body-mid hover:text-primary transition-colors mb-8 font-medium">
          <ArrowLeft size={16} /> Back to Businesses
        </Link>
        <h1 className="text-4xl font-bold text-ink mb-6">Manufacturing</h1>
        <p className="text-lg text-body mb-12 max-w-3xl leading-relaxed">
          At {businessData.name}, we maintain strict quality standards to ensure consistency, durability, and performance. Our manufacturing unit in {businessData.manufacturingUnit} is equipped to handle complex steel fabrication requirements.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-canvas-soft p-8 rounded-xl border border-mute">
            <h2 className="text-2xl font-bold text-ink mb-6">Our Capabilities</h2>
            <ul className="space-y-4">
              {['Hollow Sections', 'MS Tubes', 'GP Pipes', 'Structural Steel Components'].map(item => (
                <li key={item} className="flex items-center gap-3 text-body">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video bg-mute shadow-sm">
            <img src="https://loremflickr.com/800/600/manufacturing?random=11" alt="Manufacturing" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const Roofing = () => (
  <div className="animate-in fade-in duration-700">
    <section className="pt-12 pb-20 px-6 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <Link to="/businesses" className="inline-flex items-center gap-2 text-body-mid hover:text-primary transition-colors mb-8 font-medium">
          <ArrowLeft size={16} /> Back to Businesses
        </Link>
        <h1 className="text-4xl font-bold text-ink mb-6">JSW Roofing Solutions</h1>
        <p className="text-lg text-body mb-12 max-w-3xl leading-relaxed">
          We are proud to offer premium-quality JSW roofing products designed for Residential, Industrial, Warehouses, and Commercial projects. Available in multiple profiles, colors, and thicknesses to suit your specific architectural needs.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-canvas-soft p-8 rounded-xl border border-mute">
            <h2 className="text-2xl font-bold text-ink mb-6">Applications</h2>
            <ul className="space-y-4">
              {['Industrial Sheds & Warehouses', 'Commercial Complexes', 'Residential Buildings', 'Custom Architectural Projects'].map(item => (
                <li key={item} className="flex items-center gap-3 text-body">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video bg-mute shadow-sm">
            <img src="https://loremflickr.com/800/600/roofing?random=12" alt="Roofing" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const Pipes = () => (
  <div className="animate-in fade-in duration-700">
    <section className="pt-12 pb-20 px-6 bg-canvas">
      <div className="max-w-7xl mx-auto">
        <Link to="/businesses" className="inline-flex items-center gap-2 text-body-mid hover:text-primary transition-colors mb-8 font-medium">
          <ArrowLeft size={16} /> Back to Businesses
        </Link>
        <h1 className="text-4xl font-bold text-ink mb-6">JSW Tubes & Pipes</h1>
        <p className="text-lg text-body mb-12 max-w-3xl leading-relaxed">
          As a trusted distributor for the Goa Region, we provide high-grade JSW Tubes & Pipes. Our supplies serve fabricators, contractors, builders, and various industrial applications requiring reliable structural integrity.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-canvas-soft p-8 rounded-xl border border-mute">
            <h2 className="text-2xl font-bold text-ink mb-6">Product Range</h2>
            <ul className="space-y-4">
              {['Hollow Sections', 'MS Pipes', 'GP Pipes', 'Structural Tubes'].map(item => (
                <li key={item} className="flex items-center gap-3 text-body">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video bg-mute shadow-sm">
            <img src="https://loremflickr.com/800/600/pipes?random=13" alt="Pipes" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  </div>
);
