export type Language = 'en' | 'ru';

export type TranslationKey = 
  | 'welcome'
  | 'demo'
  | 'home'
  | 'about'
  | 'contact'
  | 'login'
  | 'signup'
  | 'logout'
  | 'profile'
  | 'settings'
  | 'downloadApp'
  | 'followUs'
  | 'faq'
  | 'ourInvestors'
  | 'copyright'
  | 'faqHowWorks'
  | 'faqHowWorksAnswer'
  | 'faqSetupFee'
  | 'faqSetupFeeAnswer'
  | 'faqPosIntegration'
  | 'faqPosIntegrationAnswer'
  | 'notFoundTitle'
  | 'notFoundMessage'
  | 'backToHome'
  | 'heroTitle'
  | 'heroSubtitle'
  | 'getStarted'
  | 'learnMore'
  | 'appName'
  | 'features'
  | 'pricing'
  | 'blog'
  | 'support'
  | 'whoWeServe'
  | 'forCafes'
  | 'forInvestors'
  | 'forCustomers'
  | 'cafesDescription'
  | 'investorsDescription'
  | 'customersDescription'
  | 'benefits'
  | 'increaseCustomerReturn'
  | 'realTimeAnalytics'
  | 'simpleIntegration'
  | 'customizableCampaigns'
  | 'provenGrowthModel'
  | 'profitableUnitEconomics'
  | 'expandingMarketReach'
  | 'sustainableBusinessModel'
  | 'unifiedLoyaltyProgram'
  | 'personalizedRewards'
  | 'discoverNewPlaces'
  | 'contactlessExperience'
  | 'drivingRealResults'
  | 'cafesVisited'
  | 'activeUsers'
  | 'campaignsLaunched'
  | 'seeInAction'
  | 'dashboardInterface'
  | 'mobileAppInterface'
  | 'whatPartnersSay'
  | 'testimonial1'
  | 'testimonial1Author'
  | 'testimonial1Role'
  | 'testimonial2'
  | 'testimonial2Author'
  | 'testimonial2Role'
  | 'testimonial3'
  | 'testimonial3Author'
  | 'testimonial3Role'
  | 'testimonial4'
  | 'testimonial4Author'
  | 'testimonial4Role'
  | 'testimonial5'
  | 'testimonial5Author'
  | 'testimonial5Role'
  | 'testimonial6'
  | 'testimonial6Author'
  | 'testimonial6Role'
  | 'testimonial7'
  | 'testimonial7Author'
  | 'testimonial7Role'
  | 'testimonial8'
  | 'testimonial8Author'
  | 'testimonial8Role'
  | 'testimonial9'
  | 'testimonial9Author'
  | 'testimonial9Role'
  | 'testimonial10'
  | 'testimonial10Author'
  | 'testimonial10Role'
  | 'previousSlide'
  | 'nextSlide'
  | 'navPartners'
  | 'navAchievements'
  | 'navDemo'
  | 'navTestimonials'
  | 'navFAQ'
  | 'navInvestors'
  | 'navDownload'
  | 'navSocial'
  | 'navInfo'
  | 'privacyPolicy';

export const translations = {
  en: {
    welcome: "Welcome to Loyalist",
    demo: "Request Demo",
    home: "Home",
    about: "About",
    contact: "Contact",
    login: "Login",
    signup: "Sign Up",
    logout: "Logout",
    profile: "Profile",
    settings: "Settings",
    downloadApp: "Download Our App",
    followUs: "Follow Us",
    faq: "FAQ",
    ourInvestors: "Our Investors",
    copyright: "© 2025 Loyalist. All rights reserved.",
    faqHowWorks: "How does the loyalty program work?",
    faqHowWorksAnswer: "Our loyalty program uses a digital points system that café owners can customize. Customers earn points with each visit or purchase, which they can redeem for rewards.",
    faqSetupFee: "Is there a setup fee?",
    faqSetupFeeAnswer: "No, Loyalist offers a free basic plan to get started. Premium features are available with paid subscription tiers.",
    faqPosIntegration: "How do I integrate Loyalist with my existing POS?",
    faqPosIntegrationAnswer: "Loyalist offers API integration with most popular POS systems, or you can use our standalone tablet app that works independently.",
    notFoundTitle: "404",
    notFoundMessage: "Oops! Page not found",
    backToHome: "Back to Home",
    heroTitle: "Turn Customers into Regulars with Loyalist",
    heroSubtitle: "Increase customer retention and drive revenue through personalized loyalty rewards",
    getStarted: "Get Started",
    learnMore: "Learn More",
    appName: "Loyalist",
    features: "Features",
    pricing: "Pricing",
    blog: "Blog",
    support: "Support",
    whoWeServe: "Who We Help",
    forCafes: "For Cafés",
    forInvestors: "For Investors",
    forCustomers: "For Customers",
    cafesDescription: "Turn casual visitors into loyal regulars with our easy-to-use, powerful loyalty platform.",
    investorsDescription: "Invest in a rapidly growing platform reshaping the café loyalty industry.",
    customersDescription: "Earn personalized rewards while exploring and supporting your favorite cafés.",
    benefits: "Benefits",
    increaseCustomerReturn: "Increase Customer Return Rate",
    realTimeAnalytics: "Real-time Analytics",
    simpleIntegration: "Simple Integration",
    customizableCampaigns: "Customizable Campaigns",
    provenGrowthModel: "Proven Growth Model",
    profitableUnitEconomics: "Profitable Unit Economics",
    expandingMarketReach: "Expanding Market Reach",
    sustainableBusinessModel: "Sustainable Business Model",
    unifiedLoyaltyProgram: "Unified Loyalty Program",
    personalizedRewards: "Personalized Rewards",
    discoverNewPlaces: "Discover New Places",
    contactlessExperience: "Contactless Experience",
    drivingRealResults: "Driving Real Results",
    cafesVisited: "Cafés Visited",
    activeUsers: "Active Users",
    campaignsLaunched: "Campaigns Launched",
    seeInAction: "See Loyalist in Action",
    dashboardInterface: "Loyalist Dashboard Interface",
    mobileAppInterface: "Loyalist Mobile App Interface",
    whatPartnersSay: "What Our Partners Say",
    testimonial1: "It took just half a day to integrate Loyalist without interrupting our POS. By that evening, guests were already earning points. After a month, breakfast sales rose 28%, and regulars increased by 17%.",
    testimonial1Author: "Alexander Grinev",
    testimonial1Role: "Barista Bar",
    testimonial2: "We had been looking for ways to boost customer return. Loyalist pointed out the best hours for promos and lifted repeat visits by a third. I love how easily we can launch new campaigns without red tape.",
    testimonial2Author: "Olga Ivanova",
    testimonial2Role: "Coffee Corner",
    testimonial3: "Integration via plugin was easier than expected. Within 20 minutes, we saw first receipts with points added. Real-time analytics helped us adjust menus and promos to match guest preferences.",
    testimonial3Author: "Daniyar Abdullaev",
    testimonial3Role: "Tash Brew",
    testimonial4: "Switching to digital stamps nearly eliminated forgotten cards. Now, every third guest uses the loyalty program, and average visits jumped from 2.3 to 3.2 per quarter.",
    testimonial4Author: "Anna Petrova",
    testimonial4Role: "Bean & Go",
    testimonial5: "We used to wonder why Friday afternoons had sales slumps. Loyalist analytics pinpointed the gap, and a simple happy-hour promo turned Friday evenings into one of our top-performing time slots.",
    testimonial5Author: "Sergey Litvin",
    testimonial5Role: "Urban Roast",
    testimonial6: "Loyalist's mobile app moved 60% of guests to card and reward payments. This sped up service dramatically, cutting average wait times by nearly a minute during rush hours.",
    testimonial6Author: "Natalya Kozlova",
    testimonial6Role: "Latte Lane",
    testimonial7: "Thanks to ROI reports, we secured investment to open two more branches within a year. All customer data remains centralized, making expansion seamless without sacrificing service quality.",
    testimonial7Author: "Roman Zayats",
    testimonial7Role: "Vista Café",
    testimonial8: "We activated personalized pushes via Loyalist and recovered 18% of churned customers within three weeks. Customized bonuses on favorite drinks worked particularly well.",
    testimonial8Author: "Marina Orlova",
    testimonial8Role: "Cozy Cup",
    testimonial9: "Adding a Telegram bot was a smart move. Reward redemption now takes seconds, SMS costs dropped by half, and guests are much more responsive to new promotions.",
    testimonial9Author: "Timur Akhmedov",
    testimonial9Role: "Espresso Express",
    testimonial10: "Retention analytics let us adapt our menu based on the weather. On rainy days, we promote warm drinks and successfully minimize revenue dips.",
    testimonial10Author: "Ksenia Volkova",
    testimonial10Role: "Green Mug",
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
    privacyPolicy: "Privacy Policy",
    navPartners: "Partners",
    navAchievements: "Achievements",
    navDemo: "Demo",
    navTestimonials: "Testimonials",
    navFAQ: "FAQ",
    navInvestors: "Investors",
    navDownload: "Download",
    navSocial: "Social Media",
    navInfo: "Info"
  },
  ru: {
    welcome: "Добро пожаловать в Loyalist",
    demo: "Запросить демо",
    home: "Главная",
    about: "О нас",
    contact: "Контакты",
    login: "Войти",
    signup: "Регистрация",
    logout: "Выйти",
    profile: "Профиль",
    settings: "Настройки",
    downloadApp: "Скачать приложение",
    followUs: "Следите за нами",
    faq: "Часто задаваемые вопросы",
    ourInvestors: "Наши инвесторы",
    copyright: "© 2025 Loyalist. Все права защищены.",
    faqHowWorks: "Как работает программа лояльности?",
    faqHowWorksAnswer: "Наша программа лояльности использует цифровую систему баллов, которую владельцы кафе могут настраивать. Клиенты зарабатывают баллы за каждый визит или покупку, которые можно обменять на награды.",
    faqSetupFee: "Есть ли плата за установку?",
    faqSetupFeeAnswer: "Нет, Loyalist предлагает бесплатный базовый план для начала работы. Премиум-функции доступны с платными тарифными планами.",
    faqPosIntegration: "Как интегрировать Loyalist с моей существующей POS-системой?",
    faqPosIntegrationAnswer: "Loyalist предлагает API-интеграцию с большинством популярных POS-систем, или вы можете использовать наше автономное приложение для планшета, которое работает независимо.",
    notFoundTitle: "404",
    notFoundMessage: "Упс! Страница не найдена",
    backToHome: "Вернуться на главную",
    heroTitle: "Превратите клиентов в постоянных с помощью Loyalist",
    heroSubtitle: "Увеличьте удержание клиентов и увеличьте доход за счет персонализированных вознаграждений за лояльность",
    getStarted: "Попробовать бесплатно",
    learnMore: "Узнать больше",
    appName: "Loyalist",
    features: "Возможности",
    pricing: "Цены",
    blog: "Блог",
    support: "Поддержка",
    whoWeServe: "Кому мы помогаем",
    forCafes: "Для кафе",
    forInvestors: "Для инвесторов",
    forCustomers: "Для клиентов",
    cafesDescription: "Превратите случайных гостей вашего кафе в постоянных клиентов благодаря простой и эффективной системе лояльности.",
    investorsDescription: "Инвестируйте в быстрорастущую платформу, которая меняет подход к лояльности в кафе.",
    customersDescription: "Получайте персонализированные награды, посещая любимые кафе и открывая новые заведения.",
    benefits: "Преимущества",
    increaseCustomerReturn: "Увеличение возврата клиентов",
    realTimeAnalytics: "Аналитика в реальном времени",
    simpleIntegration: "Простая интеграция",
    customizableCampaigns: "Настраиваемые кампании",
    provenGrowthModel: "Проверенная модель роста",
    profitableUnitEconomics: "Прибыльная экономика",
    expandingMarketReach: "Расширение охвата рынка",
    sustainableBusinessModel: "Устойчивая бизнес-модель",
    unifiedLoyaltyProgram: "Единая программа лояльности",
    personalizedRewards: "Персонализированные награды",
    discoverNewPlaces: "Открывайте новые места",
    contactlessExperience: "Бесконтактный опыт",
    drivingRealResults: "Достигаем реальных результатов",
    cafesVisited: "Посещенных кафе",
    activeUsers: "Активных пользователей",
    campaignsLaunched: "Запущенных кампаний",
    seeInAction: "Увидеть Loyalist в действии",
    dashboardInterface: "Интерфейс панели управления Loyalist",
    mobileAppInterface: "Интерфейс мобильного приложения Loyalist",
    whatPartnersSay: "Что говорят наши партнеры",
    testimonial1: "Подключение Loyalist заняло всего полдня, без остановки касс. Уже в первый вечер гости начали собирать баллы. Через месяц продажи завтраков выросли на 28%, а постоянных клиентов стало на 17% больше.",
    testimonial1Author: "Александр Гринев",
    testimonial1Role: "Barista Bar",
    testimonial2: "Мы давно искали способ увеличить возврат клиентов. Система подсказала лучшие часы для акций и помогла повысить повторные визиты на треть. Особенно нравится простота настройки новых кампаний — без лишней бюрократии.",
    testimonial2Author: "Ольга Иванова",
    testimonial2Role: "Coffee Corner",
    testimonial3: "Интеграция через плагин оказалась проще, чем мы думали. Уже через 20 минут увидели первые чеки с начисленными бонусами. Благодаря онлайн-аналитике мы быстро скорректировали меню и акции под интересы гостей.",
    testimonial3Author: "Данияр Абдуллаев",
    testimonial3Role: "Tash Brew",
    testimonial4: "С переходом на цифровые штампы число забытых карт уменьшилось почти до нуля. Теперь каждый третий гость пользуется программой лояльности, а среднее количество визитов выросло с 2,3 до 3,2 за квартал.",
    testimonial4Author: "Анна Петрова",
    testimonial4Role: "Bean & Go",
    testimonial5: "Раньше падение продаж по пятницам после обеда было загадкой. Через аналитику Loyalist мы увидели проблему и запустили акцию happy-hour — теперь вечер пятницы один из лучших периодов недели по выручке.",
    testimonial5Author: "Сергей Литвин",
    testimonial5Role: "Urban Roast",
    testimonial6: "Мобильное приложение Loyalist помогло перевести 60% гостей на оплату картой и бонусами. Это ускорило обслуживание и сократило среднее время ожидания в очереди почти на минуту в пиковые часы.",
    testimonial6Author: "Наталья Козлова",
    testimonial6Role: "Latte Lane",
    testimonial7: "Благодаря отчетам ROI мы убедили инвесторов открыть ещё два филиала за год. Все данные клиентов остаются в одной системе, что упростило запуск новых точек без потерь качества сервиса.",
    testimonial7Author: "Роман Заяц",
    testimonial7Role: "Vista Café",
    testimonial8: "Мы активировали персональные рассылки через Loyalist и за три недели вернули 18% ушедших клиентов. Особенно хорошо сработали индивидуальные бонусы на любимые напитки.",
    testimonial8Author: "Марина Орлова",
    testimonial8Role: "Cozy Cup",
    testimonial9: "Подключение Telegram-бота оказалось очень удачным решением. Вручение бонусов занимает считанные секунды, а расходы на SMS упали более чем вдвое. Плюс, гости активнее реагируют на новые акции.",
    testimonial9Author: "Тимур Ахмедов",
    testimonial9Role: "Espresso Express",
    testimonial10: "Аналитика удержания позволила нам адаптировать меню в зависимости от погоды. Например, в дождливые дни продвигаем согревающие напитки и минимизируем просадки в продажах.",
    testimonial10Author: "Ксения Волкова",
    testimonial10Role: "Green Mug",
    previousSlide: "Предыдущий слайд",
    nextSlide: "Следующий слайд",
    privacyPolicy: "Политика конфиденциальности",
    navPartners: "Партнёры",
    navAchievements: "Достижения",
    navDemo: "Демо",
    navTestimonials: "Отзывы",
    navFAQ: "Вопросы",
    navInvestors: "Инвесторы",
    navDownload: "Скачать",
    navSocial: "Соц. сети",
    navInfo: "Инфо"
  },
  privacyPolicy: {
    en: "Privacy Policy",
    ru: "Политика конфиденциальности"
  }
} as const; 