const productData = {
    1: {
        title: 'info1_title',
        img: '../img_DWG/bridge_crane_drawing.png',
        img2: '../img_DWG/table.png',

        img3: '../img_DWG/bridge_crane_drawing2.png',
        img4: '../img_DWG/table2.png',

        img5: '../img_DWG/bridge_crane_drawing3.png',
        img6: '../img_DWG/table3.png',

        img7: '../img_DWG/bridge_crane_drawing4.png',
        img8: '../img_DWG/table4.png',

        img9: '../img_DWG/bridge_crane_drawing5.png',
        img10: '../img_DWG/table5.png',

        img11: '../img_DWG/bridge_crane_drawing6.png',
        img12: '../img_DWG/table6.png',

        img13: '../img_DWG/bridge_crane_drawing7.png',
        img14: '../img_DWG/table7.png',

        img15: '../img_DWG/bridge_crane_drawing8.png',
        img16: '../img_DWG/table8.png',

        img17: '../img_DWG/bridge_crane_drawing9.png',
        img18: '../img_DWG/table9.png',

        img19: '../img_DWG/bridge_crane_drawing10.png',
        img20: '../img_DWG/table10.png',

        img21: '../img_DWG/bridge_crane_drawing11.png',
        img22: '../img_DWG/table11.png',

        img23: '../img_DWG/bridge_crane_drawing12.png',
        img24: '../img_DWG/table12.png',

        img25: '../img_DWG/bridge_crane_drawing13.png',
        img26: '../img_DWG/table13.png',

        list: ['info1_p1', 'info1_p2', 'info1_p3', 'info1_p4'],
        specs: 'info1_specs'
    },
    2: { title: 'Карточка 2', img: '../img/table_2.png' },
    3: { title: 'Карточка 3', img: '../img/table_3.png' },
    4: { title: 'Карточка 4', img: '../img/table_4.png' }
};

function applyTranslations(lang, element) {
    if (!translations[lang]) return;
    element.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.product-card');
    const panels = document.querySelectorAll('.info-panel');
    const container = document.querySelector('.info-container');

    const currentLang = localStorage.getItem('preferred_language') || 'ru';

    if (!container && panels.length > 0) {
        panels[0].innerHTML = '<div class="info-container"></div>';
    }
    const targetContainer = document.querySelector('.info-container') || panels[0];

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const data = productData[targetId];
            if (!data) return;

            panels.forEach(panel => panel.classList.remove('active'));

            let html = `<div style="text-align: center; margin-bottom: 10px;"><div class="header-top-bar"><h2 class="section-title" data-i18n="${data.title}">Мостовой кран типа QD на 5–450 тонн с крюком</h2></div></div>`;

            html += `<h4 class="section-title" style="font-size: 22px; margin-top: 10px; margin-bottom: 15px;" data-i18n="info1_subtitle">Краткое описание продукции</h4>`;

            if (data.desc) {
                html += `<h4 class="section-title" style="font-size: 18px; margin-top: 30px; margin-bottom: 15px;" data-i18n="info1_subtitle">Краткое описание продукции</h4>`;
                html += `<p data-i18n="${data.desc}">${data.desc}</p>`;
            }

            if (data.list && data.list.length > 0) {
                html += '<ol class="features-list">';
                data.list.forEach(item => {
                    html += `<li data-i18n="${item}">${item}</li>`;
                });
                html += '</ol>';
            }

            // ============================================================
            // ВЫПАДАЮЩЕЕ МЕНЮ (АККОРДЕОН) ПО ЦЕНТРУ
            // ============================================================
            if (data.img) {
                html += `
                <div class="dwg-accordion">
                    <button class="dwg-accordion-toggle" onclick="toggleAccordion(this)">
                        <span data-i18n="dwg_menu_title">Чертежи по моделям</span>
                        <span class="dwg-arrow">▼</span>
                    </button>
                    <div class="dwg-accordion-content">
                        <ul class="dwg-accordion-list">
                            <li><a href="#dwg-1-${targetId}" data-i18n="dwg_1">QD 5 т</a></li>
                            <li><a href="#dwg-2-${targetId}" data-i18n="dwg_2">QD 10 т</a></li>
                            <li><a href="#dwg-3-${targetId}" data-i18n="dwg_3">QD 16/3.2 т</a></li>
                            <li><a href="#dwg-4-${targetId}" data-i18n="dwg_4">QD 20/5 т</a></li>
                            <li><a href="#dwg-5-${targetId}" data-i18n="dwg_5">QD 32/5 т</a></li>
                            <li><a href="#dwg-6-${targetId}" data-i18n="dwg_6">QD 50/10 т</a></li>
                            <li><a href="#dwg-7-${targetId}" data-i18n="dwg_7">QD 75/20 т</a></li>
                            <li><a href="#dwg-8-${targetId}" data-i18n="dwg_8">QD 100/20 т</a></li>
                            <li><a href="#dwg-9-${targetId}" data-i18n="dwg_9">QD 125/32 т</a></li>
                            <li><a href="#dwg-10-${targetId}" data-i18n="dwg_10">QD 150/32 ~ 160/32 т</a></li>
                            <li><a href="#dwg-11-${targetId}" data-i18n="dwg_11">QD 200/50 ~ 250/50 т</a></li>
                            <li><a href="#dwg-12-${targetId}" data-i18n="dwg_12">QD 300/75 ~ 350/80 т</a></li>
                            <li><a href="#dwg-13-${targetId}" data-i18n="dwg_13">QD 400/80 ~ 450/100 т</a></li>
                        </ul>
                    </div>
                </div>
                `;
            }

            // ---- Чертёж 1 + Таблица 1 ----
            html += `<div id="dwg-1-${targetId}" class="dwg-block">`;
            html += `<div class="gray-bar-title" data-i18n="dwg_title_1">Кран мостовой типа QD грузоподъемностью 5 т. с крюком</div>`;
            if (data.img) {
                html += `<div><a href="${data.img}" target="_blank"><img src="${data.img}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `<h3 class="section-title" style="font-size:22px;" data-i18n="${data.specs}">${data.specs}</h3>`;
            if (data.img2) {
                html += `<div style="text-align: center; margin: 20px 0;"><a href="${data.img2}" target="_blank"><img src="${data.img2}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `</div>`;

            // ---- Чертёж 2 + Таблица 2 ----
            html += `<div id="dwg-2-${targetId}" class="dwg-block">`;
            html += `<div class="gray-bar-title" data-i18n="dwg_title_2">Кран мостовой типа QD грузоподъемностью 10 т. с крюком</div>`;
            if (data.img3) {
                html += `<div><a href="${data.img3}" target="_blank"><img src="${data.img3}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `<h3 class="section-title" style="font-size:22px;" data-i18n="${data.specs}">${data.specs}</h3>`;
            if (data.img4) {
                html += `<div style="text-align: center; margin: 20px 0;"><a href="${data.img4}" target="_blank"><img src="${data.img4}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `</div>`;

            // ---- Чертёж 3 + Таблица 3 ----
            html += `<div id="dwg-3-${targetId}" class="dwg-block">`;
            html += `<div class="gray-bar-title" data-i18n="dwg_title_3">Кран мостовой типа QD грузоподъемностью 16/3.2 т. с крюком</div>`;
            if (data.img5) {
                html += `<div><a href="${data.img5}" target="_blank"><img src="${data.img5}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `<h3 class="section-title" style="font-size:22px;" data-i18n="${data.specs}">${data.specs}</h3>`;
            if (data.img6) {
                html += `<div style="text-align: center; margin: 20px 0;"><a href="${data.img6}" target="_blank"><img src="${data.img6}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `</div>`;

            // ---- Чертёж 4 + Таблица 4 ----
            html += `<div id="dwg-4-${targetId}" class="dwg-block">`;
            html += `<div class="gray-bar-title" data-i18n="dwg_title_4">Кран мостовой типа QD грузоподъемностью 20/5 т. с крюком</div>`;
            if (data.img7) {
                html += `<div><a href="${data.img7}" target="_blank"><img src="${data.img7}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `<h3 class="section-title" style="font-size:22px;" data-i18n="${data.specs}">${data.specs}</h3>`;
            if (data.img8) {
                html += `<div style="text-align: center; margin: 20px 0;"><a href="${data.img8}" target="_blank"><img src="${data.img8}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `</div>`;

            // ---- Чертёж 5 + Таблица 5 ----
            html += `<div id="dwg-5-${targetId}" class="dwg-block">`;
            html += `<div class="gray-bar-title" data-i18n="dwg_title_5">Кран мостовой типа QD грузоподъемностью 32/5 т. с крюком</div>`;
            if (data.img9) {
                html += `<div><a href="${data.img9}" target="_blank"><img src="${data.img9}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `<h3 class="section-title" style="font-size:22px;" data-i18n="${data.specs}">${data.specs}</h3>`;
            if (data.img10) {
                html += `<div style="text-align: center; margin: 20px 0;"><a href="${data.img10}" target="_blank"><img src="${data.img10}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `</div>`;

            // ---- Чертёж 6 + Таблица 6 ----
            html += `<div id="dwg-6-${targetId}" class="dwg-block">`;
            html += `<div class="gray-bar-title" data-i18n="dwg_title_6">Кран мостовой типа QD грузоподъемностью 50/10 т. с крюком</div>`;
            if (data.img11) {
                html += `<div><a href="${data.img11}" target="_blank"><img src="${data.img11}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `<h3 class="section-title" style="font-size:22px;" data-i18n="${data.specs}">${data.specs}</h3>`;
            if (data.img12) {
                html += `<div style="text-align: center; margin: 20px 0;"><a href="${data.img12}" target="_blank"><img src="${data.img12}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `</div>`;

            // ---- Чертёж 7 + Таблица 7 ----
            html += `<div id="dwg-7-${targetId}" class="dwg-block">`;
            html += `<div class="gray-bar-title" data-i18n="dwg_title_7">Кран мостовой типа QD грузоподъемностью 75/20 т. с крюком</div>`;
            if (data.img13) {
                html += `<div><a href="${data.img13}" target="_blank"><img src="${data.img13}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `<h3 class="section-title" style="font-size:22px;" data-i18n="${data.specs}">${data.specs}</h3>`;
            if (data.img14) {
                html += `<div style="text-align: center; margin: 20px 0;"><a href="${data.img14}" target="_blank"><img src="${data.img14}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `</div>`;

            // ---- Чертёж 8 + Таблица 8 ----
            html += `<div id="dwg-8-${targetId}" class="dwg-block">`;
            html += `<div class="gray-bar-title" data-i18n="dwg_title_8">Кран мостовой типа QD грузоподъемностью 100/20 т. с крюком</div>`;
            if (data.img15) {
                html += `<div><a href="${data.img15}" target="_blank"><img src="${data.img15}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `<h3 class="section-title" style="font-size:22px;" data-i18n="${data.specs}">${data.specs}</h3>`;
            if (data.img16) {
                html += `<div style="text-align: center; margin: 20px 0;"><a href="${data.img16}" target="_blank"><img src="${data.img16}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `</div>`;

            // ---- Чертёж 9 + Таблица 9 ----
            html += `<div id="dwg-9-${targetId}" class="dwg-block">`;
            html += `<div class="gray-bar-title" data-i18n="dwg_title_9">Кран мостовой типа QD грузоподъемностью 125/32 т. с крюком</div>`;
            if (data.img17) {
                html += `<div><a href="${data.img17}" target="_blank"><img src="${data.img17}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `<h3 class="section-title" style="font-size:22px;" data-i18n="${data.specs}">${data.specs}</h3>`;
            if (data.img18) {
                html += `<div style="text-align: center; margin: 20px 0;"><a href="${data.img18}" target="_blank"><img src="${data.img18}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `</div>`;

            // ---- Чертёж 10 + Таблица 10 ----
            html += `<div id="dwg-10-${targetId}" class="dwg-block">`;
            html += `<div class="gray-bar-title" data-i18n="dwg_title_10">Кран мостовой типа QD грузоподъемностью 150/32 ~ 160/32 т. с крюком</div>`;
            if (data.img19) {
                html += `<div><a href="${data.img19}" target="_blank"><img src="${data.img19}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `<h3 class="section-title" style="font-size:22px;" data-i18n="${data.specs}">${data.specs}</h3>`;
            if (data.img20) {
                html += `<div style="text-align: center; margin: 20px 0;"><a href="${data.img20}" target="_blank"><img src="${data.img20}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `</div>`;

            // ---- Чертёж 11 + Таблица 11 ----
            html += `<div id="dwg-11-${targetId}" class="dwg-block">`;
            html += `<div class="gray-bar-title" data-i18n="dwg_title_11">Кран мостовой типа QD грузоподъемностью 200/50 ~ 250/50 т. с крюком</div>`;
            if (data.img21) {
                html += `<div><a href="${data.img21}" target="_blank"><img src="${data.img21}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `<h3 class="section-title" style="font-size:22px;" data-i18n="${data.specs}">${data.specs}</h3>`;
            if (data.img22) {
                html += `<div style="text-align: center; margin: 20px 0;"><a href="${data.img22}" target="_blank"><img src="${data.img22}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `</div>`;

            // ---- Чертёж 12 + Таблица 12 ----
            html += `<div id="dwg-12-${targetId}" class="dwg-block">`;
            html += `<div class="gray-bar-title" data-i18n="dwg_title_12">Кран мостовой типа QD грузоподъемностью 300/75 ~ 350/80 т. с крюком</div>`;
            if (data.img23) {
                html += `<div><a href="${data.img23}" target="_blank"><img src="${data.img23}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `<h3 class="section-title" style="font-size:22px;" data-i18n="${data.specs}">${data.specs}</h3>`;
            if (data.img24) {
                html += `<div style="text-align: center; margin: 20px 0;"><a href="${data.img24}" target="_blank"><img src="${data.img24}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `</div>`;

            // ---- Чертёж 13 + Таблица 13 ----
            html += `<div id="dwg-13-${targetId}" class="dwg-block">`;
            html += `<div class="gray-bar-title" data-i18n="dwg_title_13">Кран мостовой типа QD грузоподъемностью 400/80 ~ 450/100 т. с крюком</div>`;
            if (data.img25) {
                html += `<div><a href="${data.img25}" target="_blank"><img src="${data.img25}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `<h3 class="section-title" style="font-size:22px;" data-i18n="${data.specs}">${data.specs}</h3>`;
            if (data.img26) {
                html += `<div style="text-align: center; margin: 20px 0;"><a href="${data.img26}" target="_blank"><img src="${data.img26}" alt="Technical Specifications" class="table-image"></a></div>`;
            }
            html += `</div>`;

            targetContainer.innerHTML = html;
            applyTranslations(currentLang, targetContainer);

            const activePanel = targetContainer.closest('.info-panel');
            if (activePanel) {
                activePanel.classList.add('active');
                activePanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// ============================================================
// ПЕРЕКЛЮЧЕНИЕ АККОРДЕОНА
// ============================================================
function toggleAccordion(button) {
    const accordion = button.closest('.dwg-accordion');
    accordion.classList.toggle('open');
}

window.toggleAccordion = toggleAccordion;