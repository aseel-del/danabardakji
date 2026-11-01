import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { GoogleIcon } from './common/GoogleIcon';

interface HeroProps {
  onOpenConsultation?: () => void;
}

const HIGHLIGHT_WORDS_EN = [
  'Your Health',
  'Your Life',
  'Your Body',
  'Your Goals',
];

const HIGHLIGHT_WORDS_AR = [
  'لصحتك وعافيتك',
  'لنمط حياتك',
  'لنشاطك وطاقتك',
  'لتوازن جسمك',
];

interface HeroSlide {
  src: string;
  altEn: string;
  altAr: string;
  objectPosition: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    src: '/hero-slide-1.png',
    altEn: 'Dana Bardakji - Certified Clinical Dietitian welcoming portrait',
    altAr: 'الأخصائية دانة بردقجي - أخصائية التغذية السريرية والعلاجية',
    objectPosition: '82% center',
  },
  {
    src: '/hero-slide-2.png',
    altEn: 'Dana Bardakji - Fresh clinical nutrition and vibrant lifestyle',
    altAr: 'دانة بردقجي - نمط حياة صحي وتغذية متوازنة',
    objectPosition: '82% center',
  },
  {
    src: '/hero-slide-3.png',
    altEn: 'Dana Bardakji - Personalized holistic and clinical dietitian',
    altAr: 'دانة بردقجي - برامج غذائية واستشارات علاجية مخصصة',
    objectPosition: '82% center',
  },
];

const SLIDE_DURATION_MS = 5000;

export const Hero: React.FC<HeroProps> = () => {
  const { isRTL } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const [wordIndex, setWordIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const words = isRTL ? HIGHLIGHT_WORDS_AR : HIGHLIGHT_WORDS_EN;

  // Rotating headline highlight word timer
  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [words.length, prefersReducedMotion]);

  // Background banner 5s slide rotation timer
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [isPaused, prefersReducedMotion]);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-[#f6f9fb]">
      {/* =====================================================================
          DESKTOP FULL-BLEED ANIMATED BACKGROUND BANNER (lg and up)
          Mirrored horizontally in Arabic (RTL) so Dana sits on the left and
          the open negative space aligns with Arabic text on the right.
         ===================================================================== */}
      <div
        className={`hidden lg:block absolute inset-0 pointer-events-none select-none overflow-hidden ${
          isRTL ? '-scale-x-100' : 'scale-x-100'
        }`}
        aria-hidden="true"
      >
        {HERO_SLIDES.map((slide, i) => {
          const isActive = i === slideIndex;
          const priorityProps =
            i === 0
              ? ({ fetchPriority: 'high' } as Record<string, string>)
              : ({ fetchPriority: 'low' } as Record<string, string>);

          return (
            <motion.img
              key={slide.src}
              src={slide.src}
              alt=""
              width={1024}
              height={576}
              {...priorityProps}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: prefersReducedMotion ? 1 : isActive ? 1.045 : 1.0,
              }}
              transition={{
                opacity: { duration: 1.2, ease: 'easeInOut' },
                scale: { duration: 5.2, ease: 'easeOut' },
              }}
              style={{ objectPosition: slide.objectPosition }}
              className="absolute inset-0 w-full h-full object-cover will-change-[opacity,transform]"
            />
          );
        })}
      </div>

      {/* Subtle desktop readability veil on the text side only — keeps Dana's side 100% crisp */}
      <div
        className={`hidden lg:block absolute inset-0 pointer-events-none ${
          isRTL
            ? 'bg-gradient-to-l from-[#f6f9fb]/85 via-[#f6f9fb]/45 to-transparent'
            : 'bg-gradient-to-r from-[#f6f9fb]/85 via-[#f6f9fb]/45 to-transparent'
        }`}
        aria-hidden="true"
      />

      {/* Soft bottom transition into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fbfdfd] via-[#fbfdfd]/60 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* =====================================================================
          STACKED / BLENDED MOBILE & TABLET BANNER (< lg)
          Frames Dana clearly above the text with a seamless bottom gradient mask
          so the text never covers her face on narrow screens.
         ===================================================================== */}
      <div className="lg:hidden relative w-full pt-2">
        <div
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden"
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, black 72%, transparent 100%)',
            maskImage:
              'linear-gradient(to bottom, black 72%, transparent 100%)',
          }}
        >
          <div
            className={`w-full h-full relative ${
              isRTL ? '-scale-x-100' : 'scale-x-100'
            }`}
          >
            {HERO_SLIDES.map((slide, i) => {
              const isActive = i === slideIndex;
              const priorityProps =
                i === 0
                  ? ({ fetchPriority: 'high' } as Record<string, string>)
                  : ({ fetchPriority: 'low' } as Record<string, string>);

              return (
                <motion.img
                  key={`mobile-${slide.src}`}
                  src={slide.src}
                  alt={isRTL ? slide.altAr : slide.altEn}
                  width={1024}
                  height={576}
                  {...priorityProps}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: prefersReducedMotion ? 1 : isActive ? 1.04 : 1.0,
                  }}
                  transition={{
                    opacity: { duration: 1.2, ease: 'easeInOut' },
                    scale: { duration: 5.2, ease: 'easeOut' },
                  }}
                  style={{ objectPosition: '75% center' }}
                  className="absolute inset-0 w-full h-full object-cover will-change-[opacity,transform]"
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================================
          MAIN HERO CONTENT COLUMN
          Positioned in the open space of the banner (Left in EN, Right in AR)
         ===================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full -mt-4 sm:-mt-6 lg:mt-0">
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-start">
          {/* Live Clinical Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-brand-navy/10 shadow-soft-sm mb-5 sm:mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-coral" />
            </span>
            <span className="text-xs font-bold text-brand-navy tracking-wide">
              {isRTL
                ? 'إشراف سريري مباشر • خبرة +15 عاماً'
                : 'Direct Clinical Supervision • 15+ Years Experience'}
            </span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold text-brand-navy tracking-tight leading-[1.22] mb-5 sm:mb-6"
          >
            <span className="block mb-2">
              {isRTL
                ? 'تغذية سريرية وعلاجية متخصصة'
                : 'Personalized Clinical Nutrition'}
            </span>
            <span className="flex flex-col sm:inline-flex sm:flex-row items-center lg:items-baseline justify-center lg:justify-start gap-1.5 sm:gap-3">
              <span className="text-brand-navy whitespace-nowrap">
                {isRTL ? 'مصممة خصيصاً' : 'Designed for'}
              </span>
              <span className="relative inline-grid grid-cols-1 grid-rows-1 text-brand-coral align-baseline text-center lg:text-start">
                {words.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={false}
                    animate={{
                      opacity: i === wordIndex ? 1 : 0,
                      y: i === wordIndex ? 0 : 6,
                      scale: i === wordIndex ? 1 : 0.96,
                    }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="col-start-1 row-start-1 whitespace-nowrap"
                  >
                    {word}
                  </motion.span>
                ))}
                <span className="absolute left-0 bottom-1 w-full h-[6px] bg-brand-gold/45 -z-10 rounded-full" />
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-brand-navy/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-9 font-normal"
          >
            {isRTL
              ? 'برامج واستشارات علاجية مبنية على أحدث الأدلة العلمية والفحوصات المخبرية لتحقيق توازن صحي مستدام وخالٍ من الحرمان. بإشراف مباشر من الأخصائية دانة بردقجي وخبرة سريرية تمتد لأكثر من 15 عاماً.'
              : 'Evidence-based dietary programs tailored to your biochemistry, clinical health needs, and personal lifestyle. Guided by 15+ years of specialized medical practice in Abu Dhabi & Amman.'}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-9 sm:mb-10"
          >
            <Link
              to="/packages"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-semibold text-white bg-brand-coral hover:bg-brand-coral-dark rounded-2xl shadow-soft hover:shadow-coral-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>
                {isRTL ? 'استكشف باقات الاشتراك' : 'Explore Diet Packages'}
              </span>
              <GoogleIcon
                name={isRTL ? 'arrow_back' : 'arrow_forward'}
                className="text-base"
              />
            </Link>

            <Link
              to="/packages/consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-brand-navy bg-white/90 hover:bg-white backdrop-blur-md border border-brand-navy/20 hover:border-brand-navy/40 rounded-2xl shadow-soft-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <GoogleIcon
                name="calendar_today"
                className="text-base text-brand-coral"
              />
              <span>
                {isRTL ? 'حجز استشارة خاصة' : 'Book 1-on-1 Consultation'}
              </span>
            </Link>
          </motion.div>

          {/* Compact 2x2 Glassmorphic Credentials Grid inside the Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-3 sm:gap-3.5 max-w-xl mx-auto lg:mx-0"
          >
            <motion.div
              whileHover={{ y: -3, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="bg-white/85 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-brand-mint/35 shadow-soft-sm hover:shadow-soft flex items-center gap-3 text-start cursor-default group"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-mint/25 flex items-center justify-center text-brand-navy flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <GoogleIcon
                  name="workspace_premium"
                  className="text-lg text-brand-mint-dark"
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-brand-navy leading-snug">
                {isRTL
                  ? 'بكالوريوس ودبلوم عالي بريطاني'
                  : 'B.Sc. & UK Higher Diploma'}
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="bg-white/85 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-brand-gold/45 shadow-soft-sm hover:shadow-soft flex items-center gap-3 text-start cursor-default group"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-gold/30 flex items-center justify-center text-brand-navy flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <GoogleIcon
                  name="medical_services"
                  className="text-lg text-brand-navy"
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-brand-navy leading-snug">
                {isRTL
                  ? 'مركز صحة المرأة والولادة'
                  : 'Women & Obstetrics Center'}
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="bg-white/85 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-brand-coral/25 shadow-soft-sm hover:shadow-soft flex items-center gap-3 text-start cursor-default group"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-coral/15 flex items-center justify-center text-brand-coral flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <GoogleIcon
                  name="menu_book"
                  className="text-lg text-brand-coral-dark"
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-brand-navy leading-snug">
                {isRTL ? 'مؤلفة كتابين متخصصين' : '2 Published Books'}
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -3, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="bg-white/85 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-brand-mint/35 shadow-soft-sm hover:shadow-soft flex items-center gap-3 text-start cursor-default group"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-mint/25 flex items-center justify-center text-brand-navy flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <GoogleIcon
                  name="apartment"
                  className="text-lg text-brand-mint-dark"
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-brand-navy leading-snug">
                {isRTL ? 'شريك مؤسس نوتري سنتر' : 'Co-founder NutriCenter'}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================================
          INTERACTIVE SLIDE INDICATORS + PAUSE/PLAY CONTROL
          Allows manual switching between the 3 portraits and pausing motion.
         ===================================================================== */}
      <div className="relative z-20 mt-8 lg:mt-0 lg:absolute lg:bottom-7 lg:inset-x-0 flex justify-center">
        <div
          className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-brand-navy/10 shadow-soft-sm"
          role="region"
          aria-label={
            isRTL ? 'عناصر التحكم في صور العرض الرئيسي' : 'Hero slide controls'
          }
        >
          {HERO_SLIDES.map((slide, i) => {
            const isActive = i === slideIndex;
            return (
              <button
                key={slide.src}
                type="button"
                onClick={() => setSlideIndex(i)}
                aria-label={
                  isRTL
                    ? `عرض الصورة ${i + 1}`
                    : `Show hero portrait ${i + 1}`
                }
                aria-current={isActive ? 'true' : undefined}
                className={`relative h-2.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'w-9 bg-brand-coral/25'
                    : 'w-2.5 bg-brand-navy/25 hover:bg-brand-navy/45'
                }`}
              >
                {isActive && (
                  <motion.span
                    key={`${slideIndex}-${isPaused}`}
                    initial={{ scaleX: isPaused ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration:
                        isPaused || prefersReducedMotion
                          ? 0.2
                          : SLIDE_DURATION_MS / 1000,
                      ease: 'linear',
                    }}
                    style={{
                      transformOrigin: isRTL ? 'right' : 'left',
                    }}
                    className="block h-full w-full bg-brand-coral rounded-full"
                  />
                )}
              </button>
            );
          })}

          <div className="w-px h-3.5 bg-brand-navy/15 mx-0.5" />

          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-label={
              isPaused
                ? isRTL
                  ? 'تشغيل العرض التلقائي'
                  : 'Play slideshow'
                : isRTL
                  ? 'إيقاف العرض التلقائي مؤقتاً'
                  : 'Pause slideshow'
            }
            title={
              isPaused
                ? isRTL
                  ? 'تشغيل العرض التلقائي'
                  : 'Play slideshow'
                : isRTL
                  ? 'إيقاف العرض التلقائي مؤقتاً'
                  : 'Pause slideshow'
            }
            className="w-5 h-5 rounded-full flex items-center justify-center text-brand-navy/70 hover:text-brand-coral transition-colors cursor-pointer"
          >
            <GoogleIcon
              name={isPaused ? 'play_arrow' : 'pause'}
              className="text-sm"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
