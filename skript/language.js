// ============================================================
// ПОЛНЫЙ СКРИПТ: ПЕРЕВОД + СКРЫТИЕ ШАПКИ И ПАНЕЛИ
// ============================================================
const translations = {
    ru: {
        'menu_company': 'Компания',
        'menu_production': 'Производственное и обрабатывающее оборудование',
        'menu_bridge': 'Мостовые краны',
        'menu_gantry': 'Козловые краны',
        'menu_special': 'Краны специального назначения',
        'menu_lifting': 'Грузоподъемное оборудование',
        'title_company': 'Шаньдун Шэньчжоу Машинери',
        'sub_develop': 'РАЗРАБОТКА',
        'sub_design': 'ПРОЕКТИРОВАНИЕ',
        'sub_manufacture': 'ИЗГОТОВЛЕНИЕ',
        'sub_install': 'МОНТАЖ',
        'sub_service': 'ОБСЛУЖИВАНИЕ',
        'about_title': 'О компании',
        'catalog_title': 'Каталог поставляемых систем',
        'certificates_title': 'Сертификаты',
        'about_text': 'ООО «Шаньдун Шэньчжоу Машинери», основанное в 1989 году, является современным профессиональным производителем и поставщиком кранового оборудования. Компания объединяет в себе научные исследования, проектирование, изготовление, монтаж и сервисное обслуживание, предоставляя клиентам индивидуальные решения по крановому оборудованию благодаря постоянному стремлению к совершенству качества продукции. Мы также предлагаем профессиональные схемы управления, снимая с клиентов все последующие заботы. Ассортимент продукции компании включает: легкие энергосберегающие краны, однобалочные и двухбалочные мостовые краны, козловые краны, судостроительные краны, электрические тали, а также краны изолированные, электромагнитные, с частотным регулированием, с дистанционным управлением, поворотные (консольные) краны, взрывозащищенное, металлургическое, чистовое (беспыльное) крановое оборудование и различные виды специальных кранов. Компания имеет сертификаты EAC, CE, ATEX, WIKI, а также лицензию класса «А» на производство специального кранового оборудования, выданную Государственным управлением по регулированию рынка КНР. Предприятие сертифицировано по системе менеджмента качества ISO 9001 и обладает собственной интеллектуальной и промышленной собственностью. Мы неизменно придерживаемся принципа «Качество превыше всего, честность — основа», идем в ногу со временем, внедряем инновации. Концепция стабильной работы, безупречного качества и приоритета клиента позволяет нам обеспечивать долгосрочную надежную и безопасную продукцию, облегчать труд наших заказчиков и их долгосрочную ценность.',
        'card1_title': 'Грузоподъемные компоненты',
        'card1_text': 'Электрические тали-тележки, лебедочные тележки, ручные и электрические козловые порталы для локальных рабочих зон.',
        'card2_title': 'Мостовые краны (Кран-балки)',
        'card2_text': 'Конструкции общего назначения и двухбалочные краны повышенной надежности для непрерывных циклов эксплуатации.',
        'card3_title': 'Козловые и полукозловые краны',
        'card3_text': 'Краны с электрическими талями, двухбалочные козловые краны для открытых складских площадок и контейнерных терминалов.',
        'card4_title': 'Краны специального назначения',
        'card4_text': 'Металлургические краны для работы в условиях экстремальных температур, а также мощные портовые и портальные крановые системы.',
        'prod_title': 'Производственное и обрабатывающее оборудование',
        'prod_card1': 'Производственная линия кранов',
        'prod_card2': 'Линия размотки и правки металла с ЧПУ',
        'prod_card3': 'Дробеметно-транспортная линия',
        'prod_card4': 'Линия раскроя и транспортировки',
        'prod_card5': 'Линия сварки стенок с транспортером',
        'prod_card6': 'Станок для резки пересекающихся труб с ЧПУ',
        'prod_card7': 'Линия лазерной резки',
        'prod_card8': 'Автоматическая козловая сварочная установка',
        'bridge_title': 'Мостовой кран',
        'bridge_card1': 'Электрический однобалочный мостовой кран',
        'bridge_card2': 'Электрический однобалочный подвесной мостовой кран',
        'bridge_card3': 'Двухбалочный мостовой кран с электрической талью',
        'bridge_card4': 'Электрический двухбалочный мостовой кран',
        'gantry_title': 'Козловой кран',
        'gantry_card1': 'Козловой кран с электрической талью',
        'gantry_card2': 'Двухбалочный козловой кран с электрической талью',
        'gantry_card3': 'Полукозловой кран',
        'gantry_card4': 'Двухбалочный козловой кран',
        'special_title': 'Краны специального назначения',
        'special_card1': 'Металлургический кран',
        'special_card2': 'Портальный кран',
        'special_card3': 'Контейнерный козловой кран',
        'lifting_title': 'Грузоподъемное оборудование',
        'lifting_card1': 'Ручной консольный кран',
        'lifting_card2': 'Электрический консольный кран',
        'lifting_card3': 'Настенный консольный кран',
        'lifting_card4': 'Передвижной консольный кран',
        'lifting_card5': 'Безрельсовая электрическая платформа',
        'lifting_card6': 'Рельсовая электрическая платформа',
        'lifting_card7': 'Низкопрофильная электрическая таль',
        'lifting_card8': 'Электрическая таль со стандартным подъемным габаритом',
        'lifting_card9': 'Канатная электрическая таль',
        'lifting_card10': 'Цепная электрическая таль',
        'lifting_card11': 'Электрическая таль-тележка',
        'lifting_card12': 'Электрическая лебедочная тележка',
        'lifting_card13': 'Ручной козловой портал',
        'lifting_card14': 'Электрический козловой портал',
        'footer_russian': 'Качество — прежде всего, честность — основа.'
    },
    en: {
        'menu_company': 'Company',
        'menu_production': 'Manufacturing and Processing Equipment',
        'menu_bridge': 'Bridge Cranes',
        'menu_gantry': 'Gantry Cranes',
        'menu_special': 'Special-Purpose Cranes',
        'menu_lifting': 'Lifting Equipment',
        'title_company': 'SHANDONG SHENZHOU MACHINERY CO., LTD',
        'sub_develop': 'DEVELOPMENT',
        'sub_design': 'DESIGN',
        'sub_manufacture': 'MANUFACTURING',
        'sub_install': 'INSTALLATION',
        'sub_service': 'SERVICE',
        'about_title': 'About Company',
        'catalog_title': 'Product Catalog',
        'certificates_title': 'Certificates',
        'about_text': '<strong>Shandong Shenzhou Machinery Co., Ltd.</strong>, founded in <strong>1989</strong>, is a modern professional manufacturer and supplier of <strong>crane equipment</strong>. The company combines <strong>scientific research, design, manufacturing, installation and service</strong>, providing customers with <strong>individual solutions</strong> for crane equipment through constant pursuit of product quality excellence. We also offer professional management solutions, relieving customers of all subsequent worries. The product range includes: <strong>lightweight energy-saving cranes</strong>, <strong>single-girder and double-girder bridge cranes</strong>, <strong>gantry cranes</strong>, <strong>shipbuilding cranes</strong>, <strong>electric hoists</strong>, as well as <strong>insulated</strong>, <strong>electromagnetic</strong>, <strong>variable frequency</strong>, <strong>remote-controlled</strong>, <strong>slewing (jib) cranes</strong>, <strong>explosion-proof</strong>, <strong>metallurgical</strong>, <strong>finishing (dust-free)</strong> crane equipment and various types of <strong>special cranes</strong>. The company has <strong>EAC</strong>, <strong>CE</strong>, <strong>ATEX</strong>, <strong>WIKI</strong> certificates, as well as an <strong>"A" class license</strong> for the production of special crane equipment issued by the State Administration for Market Regulation of the PRC. The enterprise is certified under the <strong>ISO 9001</strong> quality management system and owns its own intellectual and industrial property. We consistently adhere to the principle <strong>"Quality above all, honesty is the foundation"</strong>, keep pace with the times, and introduce innovations. The concept of <strong>stable operation</strong>, <strong>impeccable quality</strong> and <strong>customer priority</strong> allows us to ensure long-term reliable and safe products, facilitate the work of our customers and their long-term value.',
        'card1_title': 'Lifting Components',
        'card1_text': 'Electric hoist trolleys, winch trolleys, manual and electric gantry portals for local work areas.',
        'card2_title': 'Bridge Cranes (Overhead Cranes)',
        'card2_text': 'General-purpose structures and double-girder cranes for continuous operation cycles.',
        'card3_title': 'Gantry and Semi-Gantry Cranes',
        'card3_text': 'Electric hoist cranes, double-girder gantry cranes for open warehouses and container terminals.',
        'card4_title': 'Special-Purpose Cranes',
        'card4_text': 'Metallurgical cranes for extreme temperature conditions, as well as powerful port and portal crane systems.',
        'footer_chinese': '质量第一、诚信为本',
        'prod_title': 'Manufacturing and Processing Equipment',
        'prod_card1': 'Crane Production Line',
        'prod_card2': 'CNC Uncoiling and Straightening Line',
        'prod_card3': 'Shot Blasting and Conveying Line',
        'prod_card4': 'Cutting and Conveying Line',
        'prod_card5': 'Wall Welding Line with Conveyor',
        'prod_card6': 'CNC Intersecting Pipe Cutting Machine',
        'prod_card7': 'Laser Cutting Line',
        'prod_card8': 'Automatic Gantry Welding Installation',
        'bridge_title': 'Bridge Crane',
        'bridge_card1': 'Electric Single-Girder Bridge Crane',
        'bridge_card2': 'Electric Single-Girder Suspension Bridge Crane',
        'bridge_card3': 'Double-Girder Bridge Crane with Electric Hoist',
        'bridge_card4': 'Electric Double-Girder Bridge Crane',
        'gantry_title': 'Gantry Crane',
        'gantry_card1': 'Gantry Crane with Electric Hoist',
        'gantry_card2': 'Double-Girder Gantry Crane with Electric Hoist',
        'gantry_card3': 'Semi-Gantry Crane',
        'gantry_card4': 'Double-Girder Gantry Crane',
        'special_title': 'Special-Purpose Cranes',
        'special_card1': 'Metallurgical Crane',
        'special_card2': 'Portal Crane',
        'special_card3': 'Container Gantry Crane',
        'lifting_title': 'Lifting Equipment',
        'lifting_card1': 'Manual Slewing Crane',
        'lifting_card2': 'Electric Slewing Crane',
        'lifting_card3': 'Wall-Mounted Slewing Crane',
        'lifting_card4': 'Mobile Slewing Crane',
        'lifting_card5': 'Rail-less Electric Platform',
        'lifting_card6': 'Rail-Mounted Electric Platform',
        'lifting_card7': 'Low-Profile Electric Hoist',
        'lifting_card8': 'Electric Hoist with Standard Lift Height',
        'lifting_card9': 'Wire Rope Electric Hoist',
        'lifting_card10': 'Chain Electric Hoist',
        'lifting_card11': 'Electric Hoist Trolley',
        'lifting_card12': 'Electric Winch Trolley',
        'lifting_card13': 'Manual Gantry Portal',
        'lifting_card14': 'Electric Gantry Portal',
        'footer_russian': 'Quality first, honesty first.'
    },
    zh: {
        'menu_company': '公司',
        'menu_production': '生产和加工设备',
        'menu_bridge': '桥式起重机',
        'menu_gantry': '龙门起重机',
        'menu_special': '特种起重机',
        'menu_lifting': '起重设备',
        'title_company': '山东神州机械有限公司',
        'sub_develop': '研发',
        'sub_design': '设计',
        'sub_manufacture': '制造',
        'sub_install': '安装',
        'sub_service': '服务',
        'about_title': '关于公司',
        'catalog_title': '产品目录',
        'certificates_title': '证书',
        'about_text': '<strong>山东神州机械有限公司</strong>成立于<strong> 1989年 </strong>，是一家现代化的专业起重设备制造商和供应商。公司集<strong>科研、设计、制造、安装和服务</strong>于一体，通过不断追求卓越的产品质量，为客户提供<strong>个性化的起重解决方案</strong>。我们还提供专业的管理方案，为客户免除所有后顾之忧。产品范围包括：<strong>轻型节能起重机</strong>、<strong>单梁和双梁桥式起重机</strong>、<strong>龙门起重机</strong>、<strong>造船起重机</strong>、<strong>电动葫芦</strong>，以及<strong>绝缘</strong>、<strong>电磁</strong>、<strong>变频</strong>、<strong>遥控</strong>、<strong>回转（臂架）起重机</strong>、<strong>防爆</strong>、<strong>冶金</strong>、<strong>精加工（无尘）</strong>起重设备和各种<strong>特种起重机</strong>。公司拥有<strong> EAC</strong>、<strong> CE</strong>、<strong>ATEX</strong>、<strong> WIKI </strong>证书，以及中国国家市场监督管理总局颁发的特种起重设备生产<strong> "A" 类许可证</strong>。企业通过<strong> ISO 9001 </strong>质量管理体系认证，拥有自主的知识产权和工业产权。我们始终坚持<strong>"质量第一，诚信为本"</strong>的原则，与时俱进，不断创新。<strong>稳定运行</strong>、<strong>卓越品质</strong>和<strong>客户优先</strong>的理念使我们能够确保持续可靠和安全的产品，为客户的工作和长期价值提供便利。',
        'card1_title': '起重组件',
        'card1_text': '电动葫芦小车、绞盘小车、手动和电动龙门架，适用于局部工作区域。',
        'card2_title': '桥式起重机（天车）',
        'card2_text': '通用结构和双梁起重机，适用于连续作业周期。',
        'card3_title': '龙门式半龙门起重机',
        'card3_text': '电动葫芦起重机、双梁龙门起重机，适用于露天仓库和集装箱码头。',
        'card4_title': '特种起重机',
        'card4_text': '适用于极端温度条件的冶金起重机，以及强大的港口和门座式起重机系统。',
        'footer_chinese': '质量第一、诚信为本',
        'prod_title': '生产和加工设备',
        'prod_card1': '起重机生产线',
        'prod_card2': '数控开卷校平生产线',
        'prod_card3': '抛丸输送线',
        'prod_card4': '切割输送线',
        'prod_card5': '壁板焊接输送线',
        'prod_card6': '数控相贯线切割机',
        'prod_card7': '激光切割线',
        'prod_card8': '自动龙门焊接装置',
        'bridge_title': '桥式起重机',
        'bridge_card1': '电动单梁桥式起重机',
        'bridge_card2': '电动单梁悬挂桥式起重机',
        'bridge_card3': '双梁桥式起重机带电动葫芦',
        'bridge_card4': '电动双梁桥式起重机',
        'gantry_title': '龙门起重机',
        'gantry_card1': '电动葫芦龙门起重机',
        'gantry_card2': '双梁电动葫芦龙门起重机',
        'gantry_card3': '半龙门起重机',
        'gantry_card4': '双梁龙门起重机',
        'special_title': '特种起重机',
        'special_card1': '冶金起重机',
        'special_card2': '门座式起重机',
        'special_card3': '集装箱龙门起重机',
        'lifting_title': '起重设备',
        'lifting_card1': '手动旋臂起重机',
        'lifting_card2': '电动旋臂起重机',
        'lifting_card3': '壁挂式旋臂起重机',
        'lifting_card4': '移动式旋臂起重机',
        'lifting_card5': '无轨电动平台',
        'lifting_card6': '有轨电动平台',
        'lifting_card7': '低净空电动葫芦',
        'lifting_card8': '标准起升高度电动葫芦',
        'lifting_card9': '钢丝绳电动葫芦',
        'lifting_card10': '环链电动葫芦',
        'lifting_card11': '电动葫芦小车',
        'lifting_card12': '电动绞盘小车',
        'lifting_card13': '手动龙门架',
        'lifting_card14': '电动龙门架',
        'footer_russian': '质量第一，诚信为本'
    }
};

function updateButtonStates(activeLang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const lang = btn.dataset.lang;
        btn.classList.remove('active', 'inactive', 'pending');
        if (lang === activeLang) {
            btn.classList.add('active');
        } else {
            btn.classList.add('inactive');
        }
    });
}

function translatePage(lang) {
    if (!translations[lang]) {
        console.warn('Перевод для языка "' + lang + '" не найден');
        return;
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active', 'inactive', 'pending');
        if (btn.dataset.lang === lang) {
            btn.classList.add('pending');
        } else {
            btn.classList.add('inactive');
        }
    });
    
    setTimeout(() => {
        if (lang === 'ru') {
            localStorage.setItem('preferred_language', 'ru');
            location.reload();
            return;
        }
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key] !== undefined) {
                element.innerHTML = translations[lang][key]; 
            }
        });
        
        updateButtonStates(lang);
        localStorage.setItem('preferred_language', lang);
        document.documentElement.lang = lang;
        
    }, 800);
}

document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferred_language') || 'ru';
    updateButtonStates(savedLang);
    
    if (savedLang !== 'ru' && translations[savedLang]) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[savedLang] && translations[savedLang][key] !== undefined) {
                element.innerHTML = translations[savedLang][key]; // ← ИЗМЕНЕНО
            }
        });
        document.documentElement.lang = savedLang;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            const currentLang = localStorage.getItem('preferred_language') || 'ru';
            if (lang === currentLang) return;
            translatePage(lang);
        });
    });
});

// ============================================================
// ПАНЕЛЬ ПЕРЕВОДА — ПОД МЕНЮ ПО ЦЕНТРУ
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const centerPanel = document.getElementById('langPanelCenter');
    if (!centerPanel) return;
    
    const centerBtns = centerPanel.querySelectorAll('.lang-btn-center');
    const currentLang = localStorage.getItem('preferred_language') || 'ru';
    
    centerBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }
    });
    
    centerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            const currentLang = localStorage.getItem('preferred_language') || 'ru';
            if (lang === currentLang) return;
            
            centerBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            translatePage(lang);
            
            document.querySelectorAll('.lang-btn, .lang-float-btn').forEach(b => {
                b.classList.remove('active', 'inactive', 'pending');
                if (b.dataset.lang === lang) {
                    b.classList.add('active');
                } else {
                    b.classList.add('inactive');
                }
            });
        });
    });
});
