/* Simple translations. Plain text only; no dynamic HTML insertion. */
(() => {
  const translations = {
    en: {
      skip: 'Skip to main content', navAbout: 'About', navProjects: 'Projects', navSkills: 'Skills', navExperience: 'Experience', navCourses: 'Courses', navContact: 'Contact',
      heroIntro: "Mahsaossadat Mousavinia · Frontend Developer Intern", heroTitle: "Still learning.",
      heroDescription: "I’ve been working with WordPress for a few years. I share my work here and will add the frontend projects I build along the way.",
      seeProjects: 'See my work', contactAction: 'Get in touch',
      aboutTitle: 'About me',
      aboutText1: "I'm Mahsaossadat Mousavinia. I've spent the past few years working on website design, WordPress and graphic design. Along the way, I've learned a lot from working on real websites and understanding what clients and visitors need.",
      aboutText2: "I'm now taking frontend development more seriously. I want to understand not only how a website looks, but how to build it properly. I'll share my work here, along with the projects I build as I keep learning.",
      projectsTitle: 'Projects', projectFallback: 'Loading the project screenshot…', projectImageError: 'Preview image could not be loaded.', projectStatus: 'In progress',
      projectDescription: 'Website design and management for a private school in Muscat. My work includes responsive pages, forms, the admissions journey and WordPress customization.',
      caseLink: 'Project details', visitLink: 'Visit website',
      skillsTitle: 'Tools I work with', skillGroupWeb: 'Web & frontend', skillGroupDesign: 'Design', skillGroupOther: 'Other tools',
      beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced',
      expTitle: 'Work experience',
      exp1Date: '2025 — Present', exp1Title: 'Freelance WordPress web designer & graphic designer', exp1Text: 'Website design, WordPress customization and graphic design.',
      exp2Date: '2022 — 2025', exp2Title: 'LecoCup Specialist | Leco', exp2Text: 'WordPress website work, graphic design and coordination of student events.',
      exp3Date: '2019 — 2022', exp3Title: 'MATLAB projects', exp3Text: 'Computational and software projects using MATLAB.',
      exp4Date: '2019 — 2021', exp4Title: 'Content & SEO reviewer | RayaMarketing', exp4Text: 'Reviewing content and checking basic SEO practices.',
      exp5Date: '2013 — 2015', exp5Title: 'Ramsar Branch Manager | Leco',
      exp7Date: '2012 — 2014', exp7Title: 'Astronomy and Mathematics Instructor',
      coursesTitle: 'Courses', courseName: 'Frontend Bootcamp — Hamrah-e Avval', courseText: 'Frontend fundamentals and hands-on exercises.', courseLabel: 'Frontend training',
      contactTitle: 'Contact', contactDescription: "Have a question about a project or want to talk about working together? Feel free to email me.", backTop: 'Back to top ↑',
      backProjects: 'Back to projects', caseLead: 'Design and ongoing management of a private school website in Muscat, Oman, with an emphasis on helping parents find key information and admissions details.',
      caseRoleLabel: 'My role', caseRole: 'UI/UX design & WordPress management', caseStatusLabel: 'Status', caseToolsLabel: 'Tools',
      caseAboutTitle: 'About the project', caseAbout1: 'MAPS School is a private school in Muscat, Oman. Parents visit its website to learn about the school, grade levels, admissions and how to get in touch.',
      caseAbout2: 'I work on the page structure, user experience, content management and WordPress customization. The website is still being developed.',
      caseWorkTitle: 'What I worked on', work1Title: 'Page design & navigation', work1Text: 'Organizing information, designing admissions pages and making the main calls to action easy to find.',
      work2Title: 'Responsive layouts', work2Text: 'Adjusting layouts, forms and interface components for mobile, tablet and desktop.',
      work3Title: 'WordPress management & customization', work3Text: 'Working with Elementor, custom HTML/CSS, forms and the WordPress plugins used by the school.',
      work4Title: 'Dashboard, content & SEO', work4Text: 'Designing a user dashboard, updating content and working with Yoast SEO on page structure.',
      caseGoalTitle: 'Design goal', caseGoalText: 'I wanted parents to find essentials like grade levels, admissions steps and contact information without getting lost. Clear navigation and readable content mattered more than adding extra visual elements.'
    },
    fa: {
      skip: 'رفتن به محتوای اصلی', navAbout: 'درباره من', navProjects: 'پروژه‌ها', navSkills: 'مهارت‌ها', navExperience: 'سوابق کاری', navCourses: 'دوره‌ها', navContact: 'ارتباط',
      heroIntro: 'مهسا السادات موسوی‌نیا · کارآموز توسعه‌دهنده فرانت‌اند', heroTitle: 'هنوز دارم یاد می‌گیرم.',
      heroDescription: 'چند ساله با وردپرس کار می‌کنم. اینجا نمونه‌کارهام رو می‌ذارم و به‌مرور پروژه‌های فرانت‌اندی که می‌سازم رو اضافه می‌کنم.',
      seeProjects: 'پروژه‌هام رو ببین', contactAction: 'ارتباط با من',
      aboutTitle: 'درباره من',
      aboutText1: 'من مهسا السادات موسوی‌نیا هستم. چند ساله با طراحی سایت، وردپرس و کارهای گرافیکی سروکار دارم. توی این مدت با نیازهای واقعی کارفرماها و کاربرهای سایت آشنا شدم.',
      aboutText2: 'حالا تصمیم گرفتم فرانت‌اند رو جدی‌تر دنبال کنم؛ چون می‌خوام علاوه بر طراحی ظاهر سایت، پیاده‌سازی اون رو هم اصولی یاد بگیرم. اینجا کارهایی رو می‌ذارم که انجام دادم و پروژه‌هایی که در ادامه می‌سازم.',
      projectsTitle: 'پروژه‌ها', projectFallback: 'در حال بارگذاری تصویر پروژه…', projectImageError: 'تصویر پروژه بارگذاری نشد.', projectStatus: 'در حال توسعه',
      projectDescription: 'طراحی رابط کاربری و مدیریت سایت یک مدرسه خصوصی در مسقط. روی صفحات ریسپانسیو، فرم‌ها، مسیر پذیرش و شخصی‌سازی وردپرس کار کردم.',
      caseLink: 'جزئیات پروژه', visitLink: 'دیدن سایت',
      skillsTitle: 'ابزارهایی که باهاشون کار می‌کنم', skillGroupWeb: 'وب و فرانت‌اند', skillGroupDesign: 'طراحی', skillGroupOther: 'ابزارهای دیگه',
      beginner: 'مقدماتی', intermediate: 'متوسط', advanced: 'حرفه‌ای',
      expTitle: 'سوابق کاری',
      exp1Date: '۱۴۰۴ — اکنون', exp1Title: 'فریلنسر؛ طراح سایت وردپرسی و گرافیست', exp1Text: 'طراحی سایت، شخصی‌سازی صفحات وردپرس و کارهای گرافیکی.',
      exp2Date: '۱۴۰۱ — ۱۴۰۴', exp2Title: 'کارشناس لکوکاپ | شرکت دانش‌بنیان لکو', exp2Text: 'کار روی سایت وردپرسی، طراحی گرافیک و هماهنگی اجرای رویدادهای دانش‌آموزی.',
      exp3Date: '۱۳۹۸ — ۱۴۰۱', exp3Title: 'انجام پروژه‌های MATLAB', exp3Text: 'انجام پروژه‌های محاسباتی و نرم‌افزاری با متلب.',
      exp4Date: '۱۳۹۸ — ۱۴۰۰', exp4Title: 'کارشناس بازبینی محتوا (SEO) | رایامارکتینگ', exp4Text: 'بررسی محتوا و رعایت اصول سئو در بازبینی آن.',
      exp5Date: '۱۳۹۲ — ۱۳۹۴', exp5Title: 'مدیر شعبه رامسر | شرکت دانش‌بنیان لکو',
      exp7Date: '۱۳۹۱ — ۱۳۹۳', exp7Title: 'تدریس نجوم و ریاضیات',
      coursesTitle: 'دوره‌ها', courseName: 'بوت‌کمپ فرانت‌اند همراه اول', courseText: 'آموزش مبانی و تمرین‌های عملی توسعه فرانت‌اند.', courseLabel: 'آموزش فرانت‌اند',
      contactTitle: 'ارتباط با من', contactDescription: 'اگه درباره پروژه‌ای سؤال داری یا می‌خوای درباره همکاری صحبت کنیم، خوشحال می‌شم بهم پیام بدی.', backTop: 'برگشت به بالا ↑',
      backProjects: 'برگشت به پروژه‌ها', caseLead: 'طراحی و مدیریت سایت یک مدرسه خصوصی در مسقط، عمان؛ با تمرکز روی دسترسی راحت والدین به اطلاعات مدرسه و پذیرش.',
      caseRoleLabel: 'نقش من', caseRole: 'طراحی UI/UX و مدیریت وردپرس', caseStatusLabel: 'وضعیت', caseToolsLabel: 'ابزارها',
      caseAboutTitle: 'درباره پروژه', caseAbout1: 'MAPS School یک مدرسه خصوصی در مسقط، عمان است. والدین برای آشنایی با مقاطع، شرایط پذیرش و ارتباط با مدرسه از سایت استفاده می‌کنند.',
      caseAbout2: 'در این پروژه روی طراحی ساختار صفحات، تجربه کاربری، مدیریت محتوا و شخصی‌سازی وردپرس کار کردم. پروژه همچنان در حال توسعه است.',
      caseWorkTitle: 'کارهایی که انجام دادم', work1Title: 'طراحی صفحات و مسیرهای کاربری', work1Text: 'مرتب‌کردن ساختار اطلاعات، طراحی صفحات پذیرش و مشخص‌کردن CTAهای اصلی.',
      work2Title: 'نسخه ریسپانسیو', work2Text: 'تنظیم چیدمان، فرم‌ها و اجزای رابط برای موبایل، تبلت و دسکتاپ.',
      work3Title: 'مدیریت و شخصی‌سازی وردپرس', work3Text: 'کار با Elementor، استفاده از HTML/CSS اختصاصی، مدیریت فرم‌ها و افزونه‌های مورد نیاز سایت.',
      work4Title: 'داشبورد، محتوا و سئو', work4Text: 'طراحی پنل و داشبورد، به‌روزرسانی محتوا و کار با Yoast SEO برای بهبود ساختار صفحات.',
      caseGoalTitle: 'هدف طراحی', caseGoalText: 'می‌خواستم والدین بدون سردرگمی، اطلاعات اصلی مثل مقاطع تحصیلی، مراحل پذیرش و راه‌های ارتباطی رو پیدا کنند؛ به همین خاطر سادگی مسیرها و خوانایی محتوا برام مهم بود.'
    }
  };
  const root = document.documentElement;
  let lang = root.lang === 'en' ? 'en' : 'fa';
  let theme = root.dataset.theme === 'light' ? 'light' : 'dark';
  const page = document.body.dataset.page;
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch(e) {} };
  function applyLang(value) {
    lang = value;
    root.lang = lang;
    root.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = translations[lang][element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll('[data-language-toggle]').forEach(button => {
      button.textContent = lang === 'fa' ? 'EN' : 'فا';
      button.setAttribute('aria-label', lang === 'fa' ? 'Switch to English' : 'تغییر زبان به فارسی');
    });
    document.querySelectorAll('[data-theme-toggle]').forEach(button => button.setAttribute('aria-label', lang === 'fa' ? 'تغییر تم روشن و تاریک' : 'Toggle light and dark mode'));
    document.querySelectorAll('[data-menu-toggle]').forEach(button => button.setAttribute('aria-label', lang === 'fa' ? 'باز کردن منو' : 'Open menu'));
    document.title = page === 'project' ? (lang === 'fa' ? 'MAPS School | مهسا موسوی‌نیا' : 'MAPS School | Mahsa Mousavinia') : (lang === 'fa' ? 'مهسا موسوی‌نیا | توسعه فرانت‌اند و طراحی وب' : 'Mahsa Mousavinia | Web Design & Frontend');
    save('mahsa-lang', lang);
  }
  function applyTheme(value) {
    theme = value;
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#1f1f1f' : '#fbfbfb';
    save('mahsa-theme', theme);
  }
  document.querySelectorAll('[data-language-toggle]').forEach(button => button.addEventListener('click', () => applyLang(lang === 'fa' ? 'en' : 'fa')));
  document.querySelectorAll('[data-theme-toggle]').forEach(button => button.addEventListener('click', () => applyTheme(theme === 'dark' ? 'light' : 'dark')));
  const menu = document.querySelector('#mobile-menu');
  const menuButton = document.querySelector('[data-menu-toggle]');
  if (menu && menuButton) {
    const closeMenu = () => { menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); };
    menuButton.addEventListener('click', () => { const isOpen = menu.hidden; menu.hidden = !isOpen; menuButton.setAttribute('aria-expanded', String(isOpen)); });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if(event.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth >= 900) closeMenu(); });
  }
  // Real screenshot: show a light placeholder while it loads, never a fabricated mockup.
  document.querySelectorAll('.project-media').forEach(frame => {
    const img = frame.querySelector('.project-image');
    if (!img) return;
    frame.setAttribute('aria-busy', 'true');
    const showImage = () => {
      if (img.naturalWidth > 0) {
        frame.classList.add('has-image');
        frame.classList.remove('is-error');
        frame.setAttribute('aria-busy', 'false');
      }
    };
    const showError = () => {
      frame.classList.add('is-error');
      frame.setAttribute('aria-busy', 'false');
      const caption = frame.querySelector('[data-i18n="projectFallback"]');
      if (caption) {
        caption.dataset.i18n = 'projectImageError';
        caption.textContent = translations[lang].projectImageError;
      }
    };
    img.addEventListener('load', showImage);
    img.addEventListener('error', showError);
    if (img.complete) img.naturalWidth ? showImage() : showError();
  });
  // #top on a sticky header did not always scroll. Keep the real top anchor
  // as a no-JS fallback and scroll directly on click.
  document.querySelectorAll('[data-back-top]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, left: 0, behavior: reducedMotion ? 'instant' : 'smooth' });
    });
  });
  applyLang(lang);
  applyTheme(theme);
  // Keep content available while downloading. This bar is only a visual hint,
  // not a blocking overlay. The project image has its own loading placeholder.
  const progress = document.getElementById('page-load-progress');
  const finishLoading = () => {
    if (progress) {
      progress.classList.add('is-done');
      progress.setAttribute('aria-hidden', 'true');
    }
  };
  if (document.readyState === 'complete') finishLoading();
  else window.addEventListener('load', finishLoading, { once: true });
})();
