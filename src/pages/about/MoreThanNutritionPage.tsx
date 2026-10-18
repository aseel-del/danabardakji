import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { GoogleIcon } from '../../components/common/GoogleIcon';

export const MoreThanNutritionPage: React.FC = () => {
  const { isRTL } = useLanguage();

  const pillars = [
    {
      iconName: 'explore',
      title: isRTL ? 'علاقة واعية ومتصالحة مع الطعام' : 'Mindful Relationship with Food',
      description: isRTL 
        ? 'الابتعاد التام عن الشعور بالذنب، الحرمان الشديد، والقيود الصارمة. نتعلم فهم إشارات الجوع الفسيولوجية والشبع الحقيقي والتمييز بين الجوع العاطفي والحقيقي.'
        : 'Moving away from guilt, deprivation, and rigid restriction. We teach you to understand physiological hunger cues, emotional triggers, and satiety signals.',
    },
    {
      iconName: 'light_mode',
      title: isRTL ? 'هندسة العادات السلوكية اليومية' : 'Behavioral Habit Architecture',
      description: isRTL 
        ? 'تفشل الحميات القاسية لأنها تطالب بتغييرات جذرية لا يمكن الاستمرار بها. نحن نبني عادات يومية صغيرة متراكمة تندمج بسهولة وسلاسة في حياتك العائلية والعملية.'
        : 'Diets fail when they demand radical, unsustainable changes overnight. We build small, consistent daily micro-habits that integrate effortlessly into your family and work life.',
    },
    {
      iconName: 'sync_alt',
      title: isRTL ? 'المرونة والتأقلم مع الحياة الواقعية' : 'Real-Life Adaptability',
      description: isRTL 
        ? 'لست مضطراً لتجنب المطاعم والمناسبات الاجتماعية والسفر للحفاظ على صحتك. يمنحك نظام بدائل الأطعمة القدرة على اتخاذ قرارات ذكية ومتزنة في أي مكان.'
        : 'You shouldn’t have to avoid restaurants, social gatherings, or travel to stay healthy. Our food exchange system empowers you to make intuitive, confident food choices anywhere.',
    },
    {
      iconName: 'shield',
      title: isRTL ? 'حماية معدل الحرق وتوازن الهرمونات' : 'Metabolic & Hormonal Preservation',
      description: isRTL 
        ? 'التقييد العنيف للسعرات يؤدي إلى هبوط معدل الأيض واضطراب هرمونات التوتر والغدة الدرقية. نغذي خلاياك بمغذيات متوازنة تحمي كتلتك العضلية ونشاطك.'
        : 'Severe calorie restriction crashes your metabolism and elevates stress hormones. We nourish your cells with balanced macronutrients to protect lean muscle and thyroid health.',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <Link
          to="/about"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy/60 hover:text-brand-coral transition-colors mb-8 cursor-pointer"
        >
          <GoogleIcon name={isRTL ? "arrow_forward" : "arrow_back"} className="text-base" />
          <span>{isRTL ? 'الرجوع إلى صفحة عن دانة' : 'Back to About Dana'}</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-coral block mb-2">
            {isRTL ? 'الفلسفة والرؤية المستدامة' : 'Philosophy & Mindset'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
            {isRTL ? 'أكثر من مجرد حمية غذائية' : 'More Than Nutrition'}
          </h1>
          <p className="text-base text-brand-navy/80 leading-relaxed max-w-3xl font-normal">
            {isRTL 
              ? 'الصحة الحقيقية ليست التزاماً مؤقتاً بورقة مكتوبة؛ بل هي بناء نمط حياة واعٍ ومستدام يمنحك الطاقة، ويحترم جسدك ونفسيتك.'
              : 'Real health is not about temporary perfection on a sheet of paper. It is about creating a peaceful, educated, and sustainable way of living that honors your body and mind.'}
          </p>
        </div>

        {/* Philosophy Intro Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-surface-border shadow-soft mb-12 space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-gold/25 text-brand-navy flex items-center justify-center">
            <GoogleIcon name="favorite" className="text-2xl text-brand-coral" />
          </div>

          <h2 className="text-2xl font-extrabold text-brand-navy">
            {isRTL ? 'لماذا تفشل الحميات القاسية — وما هو البديل الناجح؟' : 'Why Restrictive Diets Fail — And What Works Instead'}
          </h2>

          <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed font-normal">
            {isRTL 
              ? 'في كتابيها "خرافات الحميات" و"100 سؤال وجواب في التغذية"، توضح دانة بردقجي كيف تسبب الحميات السريعة والقاسية ضرراً بالغاً لسرعة الحرق وتدخل الشخص في حلقة مفرغة من الحرمان ثم الانتكاس.'
              : 'In her two books, “Myths in Dieting” and “100 Questions and Answers in Nutrition”, Dana Bardakji explores how aggressive fads damage metabolic rate and create an exhausting cycle of restriction and rebound.'}
          </p>

          <p className="text-sm sm:text-base text-brand-navy/80 leading-relaxed font-normal">
            {isRTL 
              ? 'يجمع منهج دانة الإكلينيكي بين الدقة العلمية البيوكيميائية والتعاطف الإنساني العميق. من خلال فهم فسيولوجيا جسمك وعلاقتك النفسية مع الطعام، يتحول الأكل من مصدر للتوتر اليومي إلى أداة للنشاط والحيوية.'
              : 'Dana’s clinical approach combines rigorous biochemical precision with profound compassion. By understanding your unique physiology and psychological relationship with food, we transform eating from a source of daily stress into a powerful tool for energy, vitality, and self-care.'}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-surface-border shadow-soft space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-surface-subtle border border-brand-navy/10 flex items-center justify-center text-brand-coral">
                <GoogleIcon name={pillar.iconName} className="text-2xl" />
              </div>
              <h3 className="text-lg font-extrabold text-brand-navy">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-brand-navy/75 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-brand-navy text-white text-center space-y-4">
          <h3 className="text-2xl font-extrabold text-white">
            {isRTL ? 'جاهز لتغيير علاقتك مع صحتك وغذائك؟' : 'Ready to Transform Your Nutrition Journey?'}
          </h3>
          <p className="text-sm text-brand-mint max-w-xl mx-auto">
            {isRTL 
              ? 'انضم إلى إحدى باقات المتابعة المخصصة وابدأ رحلة استعادة صحتك وتوازنك.'
              : 'Join one of our clinical coaching packages and start your personalized path today.'}
          </p>
          <div className="pt-2">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider bg-brand-coral hover:bg-brand-coral-dark text-white shadow-soft transition-all"
            >
              <span>{isRTL ? 'استعراض باقات المتابعة' : 'Explore Packages'}</span>
              <GoogleIcon name={isRTL ? "arrow_back" : "arrow_forward"} className="text-sm" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
