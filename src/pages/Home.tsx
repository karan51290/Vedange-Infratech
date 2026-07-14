import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { businessData } from '../data';

export const Home = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="uppercase tracking-[0.1em] text-sm font-semibold text-primary mb-4 block">
              Building Strength. Delivering Trust.
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-ink leading-[1.1] mb-6 font-display tracking-tight">
              Manufacturing Excellence & Trusted Steel Solutions
            </h1>
            <p className="text-lg text-body-mid mb-8 max-w-lg leading-relaxed">
              {businessData.name} is Goa’s premier partner for manufacturing, processing, and distribution of high-quality steel and JSW roofing products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-semibold transition-colors shadow-sm inline-flex items-center gap-2">
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link to="/businesses" className="bg-canvas border-2 border-ink text-ink hover:bg-canvas-soft px-8 py-3.5 rounded-xl font-semibold transition-colors inline-block">
                Explore Solutions
              </Link>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] bg-mute">
            <img 
              src="https://loremflickr.com/1200/900/manufacturing,steel?random=1" 
              alt="Photo by LoremFlickr - Steel infrastructure construction" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Trust Band */}
      <section className="py-12 bg-ink text-canvas text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-canvas-soft opacity-90 text-sm uppercase tracking-wider mb-6">Trusted Business Associate</p>
          <div className="flex justify-center items-center gap-4">
            <div className="font-display font-bold text-4xl tracking-wider text-primary">
              JSW STEEL
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials snippet */}
      <section className="py-24 px-6 bg-canvas-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ink tracking-tight">Client Testimonials</h2>
            <p className="text-body-mid mt-4 text-lg">What our partners say about our quality and service.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {businessData.testimonials.slice(0, 3).map((testimonial, i) => (
              <div key={i} className="bg-canvas rounded-xl p-8 shadow-sm border border-mute">
                <div className="flex gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, j) => <CheckCircle2 key={j} size={20} className="fill-current" />)}
                </div>
                <p className="text-body mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <p className="text-ink font-semibold text-sm">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
