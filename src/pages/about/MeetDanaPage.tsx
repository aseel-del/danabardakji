import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, ArrowLeft, Radio, Building2, Stethoscope, Check, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MeetDanaPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <Link
          to="/about"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to About Dana</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-coral block mb-2">
            Clinical Background & Career Journey
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
            Meet Dana Bardakji
          </h1>
          <p className="text-base text-brand-navy/80 leading-relaxed max-w-3xl font-normal">
            Certified Dietitian with academic and clinical credentials from the University of Jordan and Stone Bridge University UK, dedicated to evidence-based nutrition and practical living.
          </p>
        </div>

        {/* Biography & Key Milestones */}
        <div className="space-y-8">
          
          {/* Milestone 1: Education */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-brand-mint/20 text-brand-navy flex items-center justify-center flex-shrink-0">
              <Award className="w-7 h-7 text-brand-mint-dark" />
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-mint-dark">Academic Credentials</span>
              <h3 className="text-xl font-extrabold text-brand-navy">B.Sc. & UK Clinical Higher Diploma</h3>
              <p className="text-sm text-brand-navy/80 leading-relaxed font-normal">
                Dana earned her Bachelor of Science degree in <strong>Nutrition and Food Technology</strong> from the University of Jordan, followed by a post-graduate <strong>Higher Diploma in Clinical Nutritional Treatments</strong> from Stone Bridge University in the United Kingdom.
              </p>
            </div>
          </div>

          {/* Milestone 2: Women & Obstetrics */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-brand-coral/15 text-brand-coral flex items-center justify-center flex-shrink-0">
              <Stethoscope className="w-7 h-7" />
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-coral">Clinical Practice in Abu Dhabi</span>
              <h3 className="text-xl font-extrabold text-brand-navy">Women & Obstetrics Medical Center</h3>
              <p className="text-sm text-brand-navy/80 leading-relaxed font-normal">
                She started her professional career in Abu Dhabi–UAE as a specialized dietitian in a premier Women and Obstetrics medical center. Her hands-on expertise was strongly forged through developing customized therapeutic plans for patients with diabetes, gestational diabetes, hypertension, high cholesterol, food allergies, pediatric malnutrition, and morbid obesity.
              </p>
            </div>
          </div>

          {/* Milestone 3: NutriCenter */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-brand-gold/25 text-brand-navy flex items-center justify-center flex-shrink-0">
              <Building2 className="w-7 h-7 text-brand-navy" />
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Amman Founder</span>
              <h3 className="text-xl font-extrabold text-brand-navy">Co-Founder of NutriCenter</h3>
              <p className="text-sm text-brand-navy/80 leading-relaxed font-normal">
                Continuing her mission to empower families with practical health education, Dana co-founded <strong>NutriCenter in Amman–Jordan</strong>, providing family consultations, specialized training, and clinical metabolic monitoring.
              </p>
            </div>
          </div>

          {/* Milestone 4: Books & Media */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-14 h-14 rounded-2xl bg-brand-navy/10 text-brand-navy flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-7 h-7 text-brand-navy" />
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/60">Published Author & Media</span>
              <h3 className="text-xl font-extrabold text-brand-navy">2 Published Books & Media Voice</h3>
              <p className="text-sm text-brand-navy/80 leading-relaxed font-normal">
                Dana has authored two widely read books: <strong>“100 Questions and answers in Nutrition”</strong> and <strong>“Myths in Dieting”</strong>, debunking fads and clarifying evidence-based habits. She has been a regular invited guest expert on major TV and radio programs in Amman and Abu Dhabi.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-brand-navy text-white text-center space-y-4">
          <h3 className="text-2xl font-extrabold text-white">Work Directly with Dana</h3>
          <p className="text-sm text-brand-mint max-w-xl mx-auto">
            Experience the difference of evidence-based clinical dietary guidance tailored specifically to you.
          </p>
          <div className="pt-2">
            <Link
              to="/packages/consultation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-brand-navy bg-brand-gold hover:bg-white transition-all shadow-soft"
            >
              <span>Schedule 1-on-1 Consultation ($50 USD)</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
