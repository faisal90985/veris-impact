import React from 'react';

const Feature: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-transparent p-6 rounded-lg">
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-bold leading-6 text-white">{title}</h3>
        <p className="mt-2 text-base text-slate-400">{description}</p>
      </div>
    </div>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="lg:text-center">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Why Veris Impact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            A Better Approach to Assurance
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto">
            We combine deep industry expertise with innovative technology to deliver assurance services that create real, lasting value.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-10">
            <Feature 
                title="Unwavering Independence"
                description="Our impartiality is the cornerstone of our services, ensuring that our findings are credible, objective, and trusted by all stakeholders."
            />
            <Feature 
                title="Global Expertise"
                description="With a network of experts across the globe, we bring international best practices and local insights to every engagement."
            />
            <Feature 
                title="Data-Driven Insights"
                description="We leverage advanced analytics and technology to move beyond compliance, providing actionable insights for continuous improvement."
            />
            <Feature 
                title="Focus on Impact"
                description="Our goal is not just to verify, but to help our clients make a measurable positive impact on their business and the world."
            />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;