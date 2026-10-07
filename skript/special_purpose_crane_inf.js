const productData = {
    1: {
        title: 'info_boom_crane_type',
        titleKeys: [
            'new_dwg_BX_title',
            'new_dwg_BZ_title',
            'new_dwg_BB_title',
            'new_dwg_Light_title',
            'new_dwg_Flex_Wall_title'
        ],
        newModels: [
            //  МОДЕЛЬ 1 — BX 
            {
                imgs: ['../img_SPC/BX_Wall_Slewing_Crane/BX_Wall_Slewing_DWG.png'],
                tables: ['../img_SPC/BX_Wall_Slewing_Crane/BX_Wall_Slewing_Tab.png'],
                sketchTitle: 'info_sketch'
            },
            //  МОДЕЛЬ 2 — BZ 
            {
                imgs: ['../img_SPC/BZ_Fixed_Pillar_Crane/BZ_Fixed_Pillar_DWG.png'],
                tables: ['../img_SPC/BZ_Fixed_Pillar_Crane/BZ_Fixed_Pillar_Tab.png'],
                paragraphs: ['info_BZ_p1'],
                envTitle: 'info_BZ_env_title',
                envList: ['info_BZ_env_1', 'info_BZ_env_2', 'info_BZ_env_3'],
                orderTitle: 'info_BZ_order_title',
                paragraphAfterOrder: 'info_BZ_order_text',
                sketchTitle: 'info_sketch'
            },
            //  МОДЕЛЬ 3 — BB 
            {
                paragraphs: ['info_BB_p1'],
                pairs: [
                    {
                        img: '../img_SPC/BB_Wall_Mounted_Crane/BB_Wall_Mounted_DWG.png',
                        table: '../img_SPC/BB_Wall_Mounted_Crane/BB_Wall_Mounted_Tab.png',
                        note: 'info_BB_note_full'
                    },
                    {
                        img: '../img_SPC/BB_Wall_Mounted_Crane/BB_Wall_Mounted_DWG2.png',
                        table: '../img_SPC/BB_Wall_Mounted_Crane/BB_Wall_Mounted_Tab2.png',
                        note: 'info_BB_note_short'
                    }
                ],
                envTitle: 'info_BB_env_title',
                envList: ['info_BB_env_1', 'info_BB_env_2', 'info_BB_env_3', 'info_BB_env_4', 'info_BB_env_5'],
                orderTitle: 'info_BB_order_title',
                paragraphAfterOrder: 'info_BB_order_text',
                sketchTitle: 'info_sketch'
            },
            //  МОДЕЛЬ 4  
            {
                paragraphs: ['info_Light_p1', 'info_Light_p2', 'info_Light_p3', 'info_Light_p4', 'info_Light_p5'],
                sketchTitle: 'info_sketch',
                imgs: ['../img_SPC/Light_Flex_Column_Crane/Light_Flex_Column_DWG.png'],
                tables: ['../img_SPC/Light_Flex_Column_Crane/Light_Flex_Column_Tab.png']
            },
            //  МОДЕЛЬ 5 
            {
                paragraphs: ['info_Flex_Wall_p1', 'info_Flex_Wall_p2', 'info_Flex_Wall_p3', 'info_Flex_Wall_p4', 'info_Flex_Wall_p5'],
                sketchTitle: 'info_sketch',
                imgs: ['../img_SPC/Flex_Light_Wall_Crane/Flex_Light_Wall_DWG.png'],
                tables: ['../img_SPC/Flex_Light_Wall_Crane/Flex_Light_Wall_Tab.png']
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.product-card');
    if (!cards.length) return;

    const panels = document.querySelectorAll('.info-panel');
    const container = document.querySelector('.info-container');

    if (panels.length === 0 && !container) {
        console.warn('Не найден .info-panel или .info-container в HTML');
        return;
    }

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
            let html = '';

            // СТРЕЛОВОЙ КРАН 
            if (targetId === '1') {
                html += `<div style="text-align: center; margin-bottom: 10px;">
                            <div class="header-top-bar">
                                <h2 class="section-title" data-i18n="${data.title}">Стреловой кран</h2>
                            </div>
                        </div>`;

                if (data.newModels && data.titleKeys) {

                    // ВЫПАДАЮЩЕЕ МЕНЮ
                    html += `
                    <div class="dwg-accordion">
                        <button class="dwg-accordion-toggle" onclick="toggleAccordion(this)">
                            <span data-i18n="boom_menu_title">Виды моделей:</span>
                            <span class="dwg-arrow">▼</span>
                        </button>
                        <div class="dwg-accordion-content">
                            <ul class="dwg-accordion-list">`;

                    data.newModels.forEach((model, idx) => {
                        const titleKey = data.titleKeys[idx] || '';
                        html += `<li><a href="javascript:void(0)" onclick="showBoomModel(${idx + 1}, '${targetId}')" data-i18n="${titleKey}">${titleKey}</a></li>`;
                    });

                    html += `</ul></div></div>`;

                    // БЛОКИ МОДЕЛЕЙ
                    data.newModels.forEach((model, idx) => {
                        const titleKey = data.titleKeys[idx] || '';
                        const blockNumber = idx + 1;

                        html += `<div id="boom-dwg-${blockNumber}-${targetId}" class="dwg-block dwg-block-menu">`;
                        html += `<div class="gray-bar-title" data-i18n="${titleKey}">${titleKey}</div>`;

                        // КРАТКОЕ ОПИСАНИЕ
                        if (model.paragraphs && model.paragraphs.length > 0) {

                            if (titleKey === 'new_dwg_Light_title' || titleKey === 'new_dwg_Flex_Wall_title') {
                                html += `<h4 class="section-title" style="font-size: 20px; margin-top: 35px; margin-bottom: 35px; text-align:center; font-weight: 500;" data-i18n="${model.paragraphs[0]}">Обзор продукта:</h4>`;

                                // Остальные абзацы — как список с маркерами
                                html += '<ol class="features-list" style="margin-bottom:15px;">';
                                for (let i = 1; i < model.paragraphs.length; i++) {
                                    const key = model.paragraphs[i];
                                    html += `<li data-i18n="${key}" style="margin-bottom:8px; line-height:1.6;">${key}</li>`;
                                }
                                html += '</ol>';
                            }
                            else {
                                html += `<h4 class="section-title" style="font-size: 20px; margin-top: 35px; margin-bottom: 35px; text-align:center;" data-i18n="info_subtitle">Краткое описание продукции:</h4>`;
                                model.paragraphs.forEach(key => {
                                    html += `<p data-i18n="${key}" style="margin-bottom:25px; line-height:1.7; text-align:justify;">${key}</p>`;
                                });
                            }
                        }

                        // ОБЩЕЕ ПРИМЕЧАНИЕ (если задано)
                        if (model.note) {
                            html += `<p data-i18n="${model.note}" style="margin: 15px 0 25px 0; line-height:1.7; text-align:justify; font-size: 14px;">${model.note}</p>`;
                        }

                        // УСЛОВИЯ ОКРУЖАЮЩЕЙ СРЕДЫ
                        if (model.envTitle) {
                            html += `<p style="margin:20px 0 10px 0; font-weight:600;" data-i18n="${model.envTitle}">Условия окружающей среды:</p>`;
                        }
                        if (model.envList && model.envList.length > 0) {
                            html += '<ol class="features-list" style="margin-bottom:15px;">';
                            model.envList.forEach(key => {
                                html += `<li data-i18n="${key}" style="margin-bottom:8px; line-height:1.6;">${key}</li>`;
                            });
                            html += '</ol>';
                        }

                        // ИНСТРУКЦИЯ ПО ЗАКАЗУ
                        if (model.orderTitle) {
                            html += `<p style="margin:20px 0 10px 0; font-weight:600;" data-i18n="${model.orderTitle}">Инструкция по заказу:</p>`;
                        }
                        if (model.paragraphAfterOrder) {
                            html += `<p data-i18n="${model.paragraphAfterOrder}" style="margin-bottom:15px; line-height:1.7; text-align:justify;">${model.paragraphAfterOrder}</p>`;
                        }

                        if (model.pairs && model.pairs.length > 0) {
                            model.pairs.forEach(pair => {

                                // ЭСКИЗ (перед каждым чертежом)
                                if (pair.img && model.sketchTitle) {
                                    html += `<h4 class="section-title" style="font-size: 20px; margin-top: 35px; margin-bottom: 35px; text-align:center;" data-i18n="${model.sketchTitle}">Эскиз</h4>`;
                                }

                                // ЧЕРТЁЖ
                                if (pair.img) {
                                    html += `<div style="text-align: center; margin: 40px 0;">
                                                <a href="${pair.img}" target="_blank">
                                                    <img src="${pair.img}" alt="Drawing" class="table-image">
                                                </a>
                                             </div>`;
                                }

                                // ТЕХНИЧЕСКИЕ ПАРАМЕТРЫ + ТАБЛИЦА
                                if (pair.table) {
                                    html += `<h3 class="section-title specs-title" style="font-size:20px; margin-top:40px; margin-bottom:25px; text-align:center;" data-i18n="info_specs">Технические параметры</h3>`;
                                    html += `<div style="text-align: center; margin: 40px 0 20px 0;">
                                                <a href="${pair.table}" target="_blank">
                                                    <img src="${pair.table}" alt="Table" class="table-image">
                                                </a>
                                             </div>`;
                                }

                                // ПРИМЕЧАНИЕ (по центру)
                                if (pair.note) {
                                    html += `<p data-i18n="${pair.note}" style="margin: 25px auto 50px auto; line-height:1.7; text-align:center; font-size: 14px; max-width: 900px;">${pair.note}</p>`;
                                }
                            });
                        }
                        else {
                            // ЭСКИЗ
                            if (model.sketchTitle) {
                                html += `<h4 class="section-title" style="font-size: 20px; margin-top: 35px; margin-bottom: 35px; text-align:center;" data-i18n="${model.sketchTitle}">Эскиз</h4>`;
                            }

                            // ЧЕРТЁЖ
                            if (model.imgs && model.imgs.length > 0) {
                                model.imgs.forEach(imgSrc => {
                                    html += `<div style="text-align: center; margin: 40px 0;">
                                                <a href="${imgSrc}" target="_blank">
                                                    <img src="${imgSrc}" alt="Drawing" class="table-image">
                                                </a>
                                             </div>`;
                                });
                            }

                            // ТАБЛИЦА
                            if (model.tables && model.tables.length > 0) {
                                html += `<h3 class="section-title specs-title" style="font-size:20px; margin-top:40px; margin-bottom:25px; text-align:center;" data-i18n="info_specs">Технические параметры</h3>`;
                                model.tables.forEach((tableSrc, tIdx) => {
                                    html += `<div style="text-align: center; margin: 40px 0 20px 0;">
                                                <a href="${tableSrc}" target="_blank">
                                                    <img src="${tableSrc}" alt="Table" class="table-image">
                                                </a>
                                             </div>`;

                                    if (model.tableNotes && model.tableNotes[tIdx]) {
                                        const noteKey = model.tableNotes[tIdx];
                                        html += `<p data-i18n="${noteKey}" style="margin: 25px auto 50px auto; line-height:1.7; text-align:center; font-size: 14px; max-width: 900px;">${noteKey}</p>`;
                                    }
                                });
                            }
                        }

                        html += `</div>`;
                    });
                }
            }
            else {
                return;
            }

            targetContainer.innerHTML = html;
            if (typeof translatePage === 'function') {
                translatePage(localStorage.getItem('preferred_language') || 'ru');
            }
            const activePanel = targetContainer.closest('.info-panel');
            if (activePanel) {
                activePanel.classList.add('active');
                activePanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

function showBoomModel(blockNumber, targetId) {
    document.querySelectorAll('.dwg-block-menu').forEach(block => {
        block.classList.remove('active');
    });

    const targetBlock = document.getElementById(`boom-dwg-${blockNumber}-${targetId}`);
    if (targetBlock) {
        targetBlock.classList.add('active');
        targetBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function toggleAccordion(button) {
    const accordion = button.closest('.dwg-accordion');
    if (accordion) accordion.classList.toggle('open');
}

window.toggleAccordion = toggleAccordion;
window.showBoomModel = showBoomModel;