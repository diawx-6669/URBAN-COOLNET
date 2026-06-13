/* =========================================
   URBAN COOLNET — MAIN SCRIPT
   Lang switcher · Dashboard tabs · Animations
   ========================================= */

/* ---- TRANSLATIONS ---- */
const i18n = {
  ru: {
    "hero.badge":       "ИИ-платформа для умных городов",
    "hero.title.1":     "Города раскаляются.",
    "hero.title.2":     "ИИ возвращает им прохладу.",
    "hero.slogan":      "Умное ИИ-озеленение, которое спасает жителей от зноя, а бюджет города — от перерасхода.",
    "hero.sub":         "Климатическая ИИ-платформа, которая находит скрытые тепловые аномалии в мегаполисе, строит ультра-комфортные тенистые маршруты и рассчитывает точную финансовую окупаемость (ROI) от каждого высаженного дерева.",
    "hero.cta1":        "Открыть Дашборд Мэрии",
    "hero.cta2":        "Скачать приложение для жителей",
    "hero.stat1":       "перегрев центра",
    "hero.stat2":       "ИИ-модуля",
    "hero.stat3":       "экономия/сезон",
    "hero.scroll":      "Листай вниз",

    "problem.eyebrow":  "Проблема",
    "problem.title":    "Каменные джунгли превращаются в сковороду",
    "problem.desc":     "Из-за обилия асфальта и бетона возникает эффект «острова тепла» (Urban Heat Island). Летом температура в центре города на 5–8°C выше, чем в пригороде. Это скрытый кризис, бьющий по всем.",
    "problem.c1.title": "Тепловой удар на ровном месте",
    "problem.c1.text":  "Аномальная жара провоцирует резкий рост сердечно-сосудистых заболеваний и опасных тепловых ударов у детей и пожилых прямо во время прогулок.",
    "problem.c1.tag":   "Риски здоровья",
    "problem.c2.title": "Кондиционеры на пределе",
    "problem.c2.text":  "Миллионы климатических систем работают на максимуме. Город тратит мегаватты лишней энергии на охлаждение зданий, переплачивая миллионы из бюджета.",
    "problem.c2.tag":   "Энергетический коллапс",
    "problem.c3.title": "Токсичный воздух",
    "problem.c3.text":  "Раскаленный воздух блокирует циркуляцию ветра. В безветренные дни опасный смог, CO и NO₂ прижимаются к земле, заставляя город задыхаться.",
    "problem.c3.tag":   "Смог-капкан",

    "ai.eyebrow":       "ИИ-Архитектура",
    "ai.title":         "Инженерия данных против глобального потепления",
    "ai.desc":          "Мы не просто рисуем зеленые зоны — мы обучили три ИИ-модели на терабайтах реальных данных для сквозной эко-аналитики.",
    "ai.m1.name":       "«Картограф»",
    "ai.m1.logic":      "Слой компьютерного зрения принимает спутниковые снимки высокого разрешения. Нейросеть архитектуры U-Net проводит попиксельную семантическую сегментацию — мгновенно вычисляя точный процент озеленения каждого двора.",
    "ai.m2.name":       "«Микроклимат»",
    "ai.m2.logic":      "Математическое ядро на базе ансамблей Random Forest сопоставляет векторные слои OpenStreetMap с тепловыми инфракрасными каналами (TIRS) Landsat 8/9. Модель предсказывает угрозы и концентрацию CO, NO₂ во время волн жары.",
    "ai.m3.name":       "«ROI-Прогноз»",
    "ai.m3.logic":      "Экономический предиктор на базе градиентного бустинга LightGBM симулирует падение температуры через транспирацию листьев и тень крон, конвертируя кубометры зелени в сохраненные деньги бюджета.",
    "ai.dataset":       "Датасет:",

    "b2g.eyebrow":      "Панель Мэрии · B2G",
    "b2g.title":        "Управление городом на основе данных, а не интуиции",
    "b2g.tab1":         "🗺 Тепловая 3D-карта",
    "b2g.tab2":         "⚙️ Оптимизация",
    "b2g.tab3":         "💰 ROI-Калькулятор",
    "b2g.map.critical": "Критично",
    "b2g.map.high":     "Высокий",
    "b2g.map.medium":   "Средний",
    "b2g.heatmap.desc": "Интерактивный цифровой двойник города. Подсвечивает критические зоны перегрева. Клик по любому кварталу показывает плотность застройки, дефицит деревьев и уровень теплового стресса населения.",
    "b2g.optimize.btn": "⚙️ Запустить ИИ-анализ",
    "b2g.optimize.r1":  "Найдено 14 пустующих участков под озеленение",
    "b2g.optimize.r2":  "Приоритет: квартал A-4, трафик 3 200 чел/день",
    "b2g.optimize.r3":  "Экономический эффект от плана: $186K/год",
    "b2g.optimize.desc":"Один клик — и ИИ автоматически сопоставляет свободные участки земли, трафик людей и аномалии, расставляя маркеры идеальных точек для новых скверов.",
    "b2g.roi.badge":    "ИИ-Отчёт · Квартал A-4",
    "b2g.roi.rec":      "Рекомендация",
    "b2g.roi.rec.val":  "45 широколиственных кленов",
    "b2g.roi.temp":     "Прогноз температуры",
    "b2g.roi.temp.sub": "в радиусе 300м",
    "b2g.roi.hvac":     "Экономия HVAC",
    "b2g.roi.hvac.sub": "для 8 зданий",
    "b2g.roi.fin":      "Финансовый эффект / сезон",
    "b2g.roi.desc":     "Калькулятор окупаемости: точный ИИ-прогноз финансовой выгоды от инвестиций в озеленение, понятный любому чиновнику.",

    "b2c.eyebrow":      "Приложение для жителей · B2C",
    "b2c.title":        "Ваш персональный климатический щит",
    "b2c.desc":         "Город может быть комфортным, даже если на улице +35°C.",
    "b2c.route.ui":     "−4°C · Тенистый маршрут",
    "b2c.f1.title":     "Навигатор «Прохладный Маршрут»",
    "b2c.f1.desc":      "Хватит плавиться на раскаленном асфальте. Наш навигатор строит путь от точки А до точки Б не по самому короткому пути, а по самому тенистому. ИИ-анализ крон деревьев ведет вас через аллеи и парки, где температура в среднем на 4°C ниже.",
    "b2c.push.title":   "Внимание! Аномальная жара",
    "b2c.push.body":    "Ваш обычный маршрут +42°C. Предлагаем прохладный путь через парк Горького.",
    "b2c.f2.title":     "Умные Пуш-Уведомления",
    "b2c.f2.desc":      "Приложение знает ваши привычные маршруты. Если ИИ зафиксирует аномальный перегрев или пиковый уровень смога на вашей улице, он пришлет заботливое уведомление и предложит более прохладную альтернативу.",
    "b2c.game.rank":    "🥇 Зелёный Страж города",
    "b2c.f3.title":     "«Зеленый Гражданин» — Геймификация",
    "b2c.f3.desc":      "Станьте частью эко-обороны. Видите засыхающее дерево или раскаленный пустырь? Сделайте фото прямо в приложении. ИИ верифицирует геоданные, обновит карту и отправит заявку в горслужбы, а вы получите Эко-Коины — обменяйте их на самокаты или скидки в кофейнях.",

    "tech.eyebrow":     "Под капотом",
    "tech.title":       "Технологический стек MVP",

    "footer.copy":      "© 2026 Urban CoolNet. Разработано в рамках хакатона.",
    "footer.pitch":     "📄 Скачать Презентацию",
    "footer.github":    "🐙 Смотреть на GitHub",
    "footer.contact":   "✉️ Связаться с командой",
  },

  kz: {
    "hero.badge":       "Ақылды қалаларға арналған AI-платформа",
    "hero.title.1":     "Қалалар қызып жатыр.",
    "hero.title.2":     "Жасанды интеллект салқындық әкеледі.",
    "hero.slogan":      "Тұрғындарды аптап ыстықтан, ал қала бюджетін артық шығыннан сақтайтын ақылды AI-көгалдандыру.",
    "hero.sub":         "Мегаполистегі жасырын жылу аномалияларын табатын, азаматтар үшін барынша жайлы көлеңкелі маршруттар сызатын және әрбір отырғызылған ағаштың нақты қаржылық тиімділігін (ROI) есептейтін климаттық AI-платформа.",
    "hero.cta1":        "Әкімдік Дашбордын ашу",
    "hero.cta2":        "Тұрғындарға арналған қолданбаны жүктеу",
    "hero.stat1":       "орталықтың қызуы",
    "hero.stat2":       "AI-модуль",
    "hero.stat3":       "үнемдеу/маусым",
    "hero.scroll":      "Төмен жылжыту",

    "problem.eyebrow":  "Мәселе",
    "problem.title":    "Тас джунглилер таба сияқты қызып жатыр",
    "problem.desc":     "Асфальт пен бетонның көптігінен «жылу аралы» (Urban Heat Island) әсері пайда болады. Жазда қала орталығындағы температура қала маңына қарағанда 5–8°C жоғары болады.",
    "problem.c1.title": "Кенеттен келетін жылу соққысы",
    "problem.c1.text":  "Аномальды ыстық серуендеу кезінде балалар мен қарттарда жүрек-қан тамырлары ауруларының өршуін және қауіпті жылу соққыларын тудырады.",
    "problem.c1.tag":   "Денсаулыққа қауіп",
    "problem.c2.title": "Кондиционерлер шектеулі режимде",
    "problem.c2.text":  "Миллиондаған климаттық жүйелер ең жоғары қуатта жұмыс істейді. Қала ғимараттарды салқындатуға мегаватт артық энергия жұмсап, миллиондаған шығынға батады.",
    "problem.c2.tag":   "Энергетикалық коллапс",
    "problem.c3.title": "Токсинді ауа",
    "problem.c3.text":  "Қызған ауа желдің айналымын блоктайды. Желсіз күндері қауіпті түтін, CO және NO₂ жерге жақындап, қаланы тұншықтырады.",
    "problem.c3.tag":   "Тұншықтырғыш түтін",

    "ai.eyebrow":       "AI-Сәулеті",
    "ai.title":         "Жаһандық жылынуға қарсы деректер инженериясы",
    "ai.desc":          "Біз жай ғана жасыл аймақтарды сызбаймыз — толық эко-аналитика үшін терабайттық нақты деректер бойынша үш AI моделін үйреттік.",
    "ai.m1.name":       "«Картограф»",
    "ai.m1.logic":      "Компьютерлік көру қабаты жоғары ажыратымдылықтағы спутниктік суреттерді қабылдайды. U-Net архитектурасының нейрожелісі әр ауланың нақты көгалдандыру пайызын лезде есептей отырып, пиксельдік семантикалық сегментацияны жүргізеді.",
    "ai.m2.name":       "«Микроклимат»",
    "ai.m2.logic":      "Random Forest ансамбльдеріне негізделген математикалық ядро OpenStreetMap векторлық қабаттарын Landsat 8/9 спутниктерінің жылу инфрақызыл арналарымен (TIRS) салыстырады. Модель ыстық толқындар кезіндегі CO, NO₂ концентрациясын болжайды.",
    "ai.m3.name":       "«ROI-Болжам»",
    "ai.m3.logic":      "LightGBM градиентті бустингіне негізделген экономикалық предиктор температураның төмендеуін симуляциялап, ғимараттардың HVAC жүйелеріне түсетін жүктеменің азаюын есептейді.",
    "ai.dataset":       "Деректер жиыны:",

    "b2g.eyebrow":      "Әкімдік Панелі · B2G",
    "b2g.title":        "Түйсікке емес, деректерге негізделген қаланы басқару",
    "b2g.tab1":         "🗺 Жылулық 3D-карта",
    "b2g.tab2":         "⚙️ Оңтайландыру",
    "b2g.tab3":         "💰 ROI-Калькулятор",
    "b2g.map.critical": "Критикалық",
    "b2g.map.high":     "Жоғары",
    "b2g.map.medium":   "Орташа",
    "b2g.heatmap.desc": "Қаланың интерактивті цифрлық егізі. Кризистік қызып кету аймақтарын көрсетеді. Кез келген кварталды басу ағымдағы құрылыс тығыздығын, ағаш тапшылығын және халықтың жылу стресс деңгейін көрсетеді.",
    "b2g.optimize.btn": "⚙️ AI-талдауды іске қосу",
    "b2g.optimize.r1":  "Көгалдандыруға 14 бос учаске табылды",
    "b2g.optimize.r2":  "Басымдық: A-4 кварталы, трафик тәулігіне 3 200 адам",
    "b2g.optimize.r3":  "Жоспардың экономикалық әсері: $186K/жыл",
    "b2g.optimize.desc":"Бір рет басу арқылы ИИ бос жер учаскелерін, адамдар ағынын және аномалияларды автоматты түрде салыстырып, жаңа саябақтар үшін оңтайлы нүктелерді белгілейді.",
    "b2g.roi.badge":    "AI-Есеп · A-4 кварталы",
    "b2g.roi.rec":      "Ұсыныс",
    "b2g.roi.rec.val":  "45 кең жапырақты үйеңкі",
    "b2g.roi.temp":     "Температура болжамы",
    "b2g.roi.temp.sub": "300м радиуста",
    "b2g.roi.hvac":     "HVAC үнемдеуі",
    "b2g.roi.hvac.sub": "8 ғимарат үшін",
    "b2g.roi.fin":      "Маусымдық қаржылық әсер",
    "b2g.roi.desc":     "Өтелімділік калькуляторы: кез келген шенеунікке түсінікті, көгалдандыруға инвестициялардың қаржылық пайдасының нақты AI-болжамы.",

    "b2c.eyebrow":      "Тұрғындарға арналған қолданба · B2C",
    "b2c.title":        "Сіздің жеке климаттық қалқаныңыз",
    "b2c.desc":         "Сыртта +35°C болса да, қала жайлы бола алады.",
    "b2c.route.ui":     "−4°C · Көлеңкелі маршрут",
    "b2c.f1.title":     "«Салқын маршрут» навигаторы",
    "b2c.f1.desc":      "Еритіндей ыстық асфальтта жүруді тоқтатыңыз. Біздің навигатор А нүктесінен Б нүктесіне дейінгі жолды ең қысқа жолмен емес, ең көлеңкелі жолмен салады. AI температура орта есеппен 4°C төмен болатын аллеялар мен саябақтар арқылы өткізеді.",
    "b2c.push.title":   "Назар аударыңыз! Аномальды ыстық",
    "b2c.push.body":    "Сіздің үйреншікті маршрутыңыз +42°C. Горький саябағы арқылы салқын жол ұсынамыз.",
    "b2c.f2.title":     "Ақылды Push-хабарламалар",
    "b2c.f2.desc":      "Қолданба сіздің үйреншікті маршруттарыңызды біледі. Егер AI сіздің көшеңізде аномальды қызып кетуді тіркесе, ескерту жіберіп, салқынырақ балама нұсқаны ұсынады.",
    "b2c.game.rank":    "🥇 Қаланың Жасыл Қорғаушысы",
    "b2c.f3.title":     "«Жасыл Азамат» — Геймификация",
    "b2c.f3.desc":      "Эко-қорғаныстың бір бөлігі болыңыз. Қурап жатқан ағашты немесе бос тұрған ыстық жерді көрдіңіз бе? Тікелей қолданбадан суретке түсіріңіз. AI геодеректерді тексереді, картаны жаңартады және қалалық қызметтерге сұраныс жібереді, ал сіз Эко-Коиндар аласыз.",

    "tech.eyebrow":     "Капот астында",
    "tech.title":       "MVP технологиялық стегі",

    "footer.copy":      "© 2026 Urban CoolNet. Хакатон аясында әзірленген.",
    "footer.pitch":     "📄 Презентацияны жүктеу",
    "footer.github":    "🐙 GitHub-тағы кодты көру",
    "footer.contact":   "✉️ Әзірлеушілер тобымен байланысу",
  },

  en: {
    "hero.badge":       "AI Platform for Smart Cities",
    "hero.title.1":     "Cities are scorching.",
    "hero.title.2":     "AI brings the cool back.",
    "hero.slogan":      "Smart AI-greening that saves citizens from extreme heat and city budgets from overspending.",
    "hero.sub":         "A climate AI platform that detects hidden urban heat anomalies, charts ultra-comfortable shaded routes for citizens, and calculates the exact ROI for every tree planted.",
    "hero.cta1":        "Open City Dashboard",
    "hero.cta2":        "Download App for Residents",
    "hero.stat1":       "downtown overheat",
    "hero.stat2":       "AI modules",
    "hero.stat3":       "saved/season",
    "hero.scroll":      "Scroll down",

    "problem.eyebrow":  "The Problem",
    "problem.title":    "Concrete Jungles are Turning into Frying Pans",
    "problem.desc":     "Excessive asphalt and concrete trigger the Urban Heat Island (UHI) effect. In summer, downtown temperatures soar 5–8°C higher than in suburban areas. It is a hidden crisis impacting everyone.",
    "problem.c1.title": "Heat Strokes out of Nowhere",
    "problem.c1.text":  "Anomalous heat triggers a sharp spike in cardiovascular issues and dangerous heat strokes among children and the elderly during regular walks.",
    "problem.c1.tag":   "Health Risks",
    "problem.c2.title": "AC Units at Breaking Point",
    "problem.c2.text":  "Millions of cooling systems run at maximum capacity. The city wastes megawatts of excess energy cooling down buildings, resulting in massive bills.",
    "problem.c2.tag":   "Energy Collapse",
    "problem.c3.title": "Toxic Air",
    "problem.c3.text":  "Scorching air blocks natural wind circulation. On windless days, hazardous smog, CO, and NO₂ get trapped close to the ground, suffocating the city.",
    "problem.c3.tag":   "Smog Trap",

    "ai.eyebrow":       "AI Architecture",
    "ai.title":         "Data Engineering Against Global Warming",
    "ai.desc":          "We don't just draw green zones — we trained three AI models on terabytes of real-world data for end-to-end eco-analytics.",
    "ai.m1.name":       "«Cartographer»",
    "ai.m1.logic":      "The computer vision layer processes high-resolution satellite imagery. A U-Net neural network performs pixel-level semantic segmentation, instantly calculating the exact green coverage percentage of every backyard.",
    "ai.m2.name":       "«Microclimate»",
    "ai.m2.logic":      "A mathematical core powered by Random Forest ensembles cross-references OpenStreetMap vector layers with thermal infrared (TIRS) bands from Landsat 8/9 satellites. The model predicts eco-hazard levels and CO, NO₂ concentrations during heatwaves.",
    "ai.m3.name":       "«ROI-Forecast»",
    "ai.m3.logic":      "An economic predictor based on LightGBM gradient boosting simulates temperature drops via leaf transpiration and canopy shade, converting cubic meters of greenery into saved budget funds.",
    "ai.dataset":       "Dataset:",

    "b2g.eyebrow":      "City Dashboard · B2G",
    "b2g.title":        "Managing the City Based on Data, Not Intuition",
    "b2g.tab1":         "🗺 3D Heatmap",
    "b2g.tab2":         "⚙️ Optimize",
    "b2g.tab3":         "💰 ROI Calculator",
    "b2g.map.critical": "Critical",
    "b2g.map.high":     "High",
    "b2g.map.medium":   "Medium",
    "b2g.heatmap.desc": "An interactive digital twin of the city. It highlights critical overheat zones. Clicking on any block reveals current building density, tree deficits, and the population's heat stress levels.",
    "b2g.optimize.btn": "⚙️ Run AI Analysis",
    "b2g.optimize.r1":  "14 vacant lots identified for greening",
    "b2g.optimize.r2":  "Priority: sector A-4, pedestrian traffic 3,200/day",
    "b2g.optimize.r3":  "Plan economic impact: $186K/year",
    "b2g.optimize.desc":"With a single click, the AI automatically correlates vacant land lots, pedestrian traffic, and anomalies, placing markers on the perfect spots for new pocket parks.",
    "b2g.roi.badge":    "AI Report · Sector A-4",
    "b2g.roi.rec":      "Recommendation",
    "b2g.roi.rec.val":  "Plant 45 broad-leaved maples",
    "b2g.roi.temp":     "Temperature Forecast",
    "b2g.roi.temp.sub": "within 300m radius",
    "b2g.roi.hvac":     "HVAC Savings",
    "b2g.roi.hvac.sub": "for 8 buildings",
    "b2g.roi.fin":      "Seasonal Financial Impact",
    "b2g.roi.desc":     "ROI calculator: precise AI forecast of financial returns from greening investments, presented in a format any official can understand.",

    "b2c.eyebrow":      "Resident App · B2C",
    "b2c.title":        "Your Personal Climate Shield",
    "b2c.desc":         "The city can be comfortable, even when it's +35°C outside.",
    "b2c.route.ui":     "−4°C · Shaded Route",
    "b2c.f1.title":     "«Cool Route» Navigator",
    "b2c.f1.desc":      "Stop melting on scorching asphalt. Our navigator plots your path from A to B not by the shortest route, but by the shadiest. Powered by AI canopy analysis, the app guides you through alleys and parks where the temperature is on average 4°C cooler.",
    "b2c.push.title":   "Alert! Extreme Heat",
    "b2c.push.body":    "Your usual route is at +42°C. We suggest a cool path through Gorky Park.",
    "b2c.f2.title":     "Smart Push Notifications",
    "b2c.f2.desc":      "The app remembers your frequent routes. If the AI detects an extreme heat spike or peak smog levels on your street, it sends a thoughtful alert and suggests a cooler alternative route.",
    "b2c.game.rank":    "🥇 Green City Guardian",
    "b2c.f3.title":     "«Green Citizen» Gamification",
    "b2c.f3.desc":      "Join the eco-defense. Spotted a dying tree or a barren, overheating lot? Snap a photo directly in the app. The AI verifies the geodata, updates the map, and alerts city services while you earn Eco-Coins redeemable for free scooter rides or coffee shop discounts.",

    "tech.eyebrow":     "Under the Hood",
    "tech.title":       "MVP Technology Stack",

    "footer.copy":      "© 2026 Urban CoolNet. Built for Hackathon.",
    "footer.pitch":     "📄 Download Pitch Deck",
    "footer.github":    "🐙 View Code on GitHub",
    "footer.contact":   "✉️ Contact Dev Team",
  }
};

/* ---- STATE ---- */
let currentLang = 'ru';

/* ---- APPLY LANG ---- */
function applyLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

/* ---- LANG SWITCHER ---- */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLang(btn.getAttribute('data-lang'));
  });
});

/* ---- NAVBAR SCROLL ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---- DASHBOARD TABS ---- */
const dashTabs = document.querySelectorAll('.dash-tab');
const dashPanels = document.querySelectorAll('.dash-panel');

dashTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');
    dashTabs.forEach(t => t.classList.remove('active'));
    dashPanels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById('panel-' + target);
    if (panel) panel.classList.add('active');
  });
});

/* ---- OPTIMIZE BUTTON ---- */
const optimizeBtn = document.getElementById('optimizeBtn');
const optResult = document.getElementById('optResult');

if (optimizeBtn) {
  optimizeBtn.addEventListener('click', () => {
    optimizeBtn.textContent = '⏳ Анализирую...';
    optimizeBtn.disabled = true;
    setTimeout(() => {
      optResult.classList.add('visible');
      optimizeBtn.textContent = '✅ Анализ завершён';
    }, 1800);
  });
}

/* ---- SCROLL REVEAL ---- */
const revealEls = document.querySelectorAll(
  '.card, .ai-module, .feature, .stat-pill, .tech-block, .roi-metric'
);

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  if (i % 3 === 1) el.classList.add('reveal-delay-1');
  if (i % 3 === 2) el.classList.add('reveal-delay-2');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

/* ---- INIT ---- */
applyLang('ru');
