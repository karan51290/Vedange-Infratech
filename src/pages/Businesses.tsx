import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Factory, Home as HomeIcon, Wrench } from 'lucide-react';

export const Businesses = () => {
  const location = useLocation();
  const isRoot = location.pathname === '/businesses' || location.pathname === '/businesses/';
  
  if (!isRoot) {
    return <Outlet />;
  }

  const businesses = [
    {
      title: "Manufacturing",
      desc: "Strict quality standards to ensure consistency, durability, and performance.",
      icon: Factory,
      path: "/businesses/manufacturing",
      img: "https://loremflickr.com/800/600/manufacturing?random=1"
    },
    {
      title: "JSW Roofing Solutions",
      desc: "Premium-quality roofing available in multiple profiles, colours, and thicknesses.",
      icon: HomeIcon,
      path: "/businesses/roofing",
      img: "https://loremflickr.com/800/600/roofing?random=2"
    },
    {
      title: "JSW Tubes & Pipes",
      desc: "Trusted supplies serving fabricators, contractors, builders, and industries.",
      icon: Wrench,
      path: "/businesses/pipes",
      img: "https://loremflickr.com/800/600/pipes?random=3"
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <section className="pt-24 pb-20 px-6 bg-canvas">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="uppercase tracking-[0.1em] text-sm font-semibold text-primary mb-4 block">
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
              Our Core Businesses
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {businesses.map((biz) => (
              <Link key={biz.title} to={biz.path} className="group flex flex-col bg-canvas-soft rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-mute hover:border-primary/50">
                <div className="relative h-48 overflow-hidden bg-mute">
                  <img src={biz.img} alt={biz.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4 text-ink">
                    <biz.icon className="text-primary" />
                    <h2 className="text-xl font-bold">{biz.title}</h2>
                  </div>
                  <p className="text-body mb-6 flex-grow">{biz.desc}</p>
                  <div className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Details <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
