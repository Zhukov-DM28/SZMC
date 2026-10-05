const productData = {
    1: {
        title: 'info_MDG_type',
        images: [
            ['../img_GC/MDG_SB_Door/MDG_SB_Door_DWG.png',  '../img_GC/MDG_SB_Door/MDG_SB_Door_Tab.png'],
            ['../img_GC/MDG_SB_Door/MDG_SB_Door_DWG2.png', '../img_GC/MDG_SB_Door/MDG_SB_Door_Tab2.png'],
            ['../img_GC/MDG_SB_Door/MDG_SB_Door_DWG3.png', '../img_GC/MDG_SB_Door/MDG_SB_Door_Tab3.png'],
        ],
        list: ['info_L_p1', 'info_L_p2', 'info_L_p3'],
        specs: 'info_specs'
    },
    2: {
        title: 'info_MG_type',
        images: [
            ['../img_GC/MG_DB_Crane/MG_DB_Gantry_DWG.png',  '../img_GC/MG_DB_Crane/MG_DB_Gantry_Tab.png'],
            ['../img_GC/MG_DB_Crane/MG_DB_Gantry_DWG2.png', '../img_GC/MG_DB_Crane/MG_DB_Gantry_Tab2.png'],
            ['../img_GC/MG_DB_Crane/MG_DB_Gantry_DWG3.png', '../img_GC/MG_DB_Crane/MG_DB_Gantry_Tab3.png'],
            ['../img_GC/MG_DB_Crane/MG_DB_Gantry_DWG4.png', '../img_GC/MG_DB_Crane/MG_DB_Gantry_Tab4.png'],
            ['../img_GC/MG_DB_Crane/MG_DB_Gantry_DWG5.png', '../img_GC/MG_DB_Crane/MG_DB_Gantry_Tab5.png'],
            ['../img_GC/MG_DB_Crane/MG_DB_Gantry_DWG6.png', '../img_GC/MG_DB_Crane/MG_DB_Gantry_Tab6.png'],
            ['../img_GC/MG_DB_Crane/MG_DB_Gantry_DWG7.png', '../img_GC/MG_DB_Crane/MG_DB_Gantry_Tab7.png'],
        ],
        list: ['info_MG_p1', 'info_MG_p2', 'info_MG_p3'],
        specs: 'info_specs'
    },
    3: {
        title: 'info_U_type',
        images: [
            ['','../img_GC/U_DG_Crane/U_DG_Tab.png'],
            ['../img_GC/U_DG_Crane/U_DG_DWG.png', '../img_GC/U_DG_Crane/U_DG_Tab2.png'],
            ['../img_GC/U_DG_Crane/U_DG_DWG2.png', '../img_GC/U_DG_Crane/U_DG_Tab3.png'],
        ],
        list: ['info_U_p1', 'info_U_p2', 'info_U_p3'],
        specs: 'info_specs'
    }, 
    4: {
        title: 'info_Gantry_Project_type',
        images: [
            ['../img_GC/Gantry_Crane_Project/Gantry_Project_DWG.png',  '../img_GC/Gantry_Crane_Project/Gantry_Project_Tab.png'],
            ['../img_GC/Gantry_Crane_Project/Gantry_Project_DWG2.png', '../img_GC/Gantry_Crane_Project/Gantry_Project_Tab2.png'],
        ],
        list: ['info_Gantry_Project_p1', 'info_Gantry_Project_p2',],
        specs: 'info_specs'
    },  
    5: {
        title: 'info_Lnstitute_Girder_crane',
        images: [
            ['../img_GC/Institute_Girder_Crane/Institute_Girder_Crane_DWG.png', '../img_GC/Institute_Girder_Crane/Institute_Girder_Crane_Tab.png'],
        ],        
        specs: 'info_specs'
    }, 
    6: {
        title: 'info_Track_Cont_Gantry',
        images: [
            ['../img_GC/Track-type_Ccontainer_gantry_crane/Track_Cont_Gantry_DWG.png', '../img_GC/Track-type_Ccontainer_gantry_crane/Track_Cont_Gantry_Tab.png'],
        ],        
        specs: 'info_specs'
    },  
    7: {
        title: 'info_Electric cart',
        images: [
            ['../img_GC/Electric_cart/Electric cart_Tab.png'],
        ],        
        list: ['info_Electric_Flat_p'],
        specs: 'info_specs'
    },    
};

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.product-card');
    const panels = document.querySelectorAll('.info-panel');
    const container = document.querySelector('.info-container');

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

        if (targetId === '1') {
            html += `<div style="text-align: center; margin-bottom: 10px;">
                        <div class="header-top-bar">
                            <h2 class="section-title" data-i18n="${data.title}">Козловой кран MDG с крюком и однобалочной главной балкой грузоподъёмностью 5~50/10 т.</h2>
                        </div>
                    </div>`;

            html += `<h4 class="section-title" style="font-size: 20px; margin-top: 26px; margin-bottom: 35px;" data-i18n="info3_subtitle">Обзор продукта:</h4>`;
            // Список
            if (data.list && data.list.length > 0) {
                html += '<ol class="features-list">';
                data.list.forEach(item => {
                    html += `<li data-i18n="${item}">${item}</li>`;
                });
                html += '</ol>';
            }

            // Выпадающее меню
            html += `
            <div class="dwg-accordion">
                <button class="dwg-accordion-toggle" onclick="toggleAccordion(this)">
                    <span data-i18n="menu_title">Чертежи по моделям</span>
                    <span class="dwg-arrow">▼</span>
                </button>
                <div class="dwg-accordion-content">
                    <ul class="dwg-accordion-list">`;

            const menuKeys = [ 'new_dwg_MDG_menu_1', 'new_dwg_MDG_menu_2', 'new_dwg_MDG_menu_3'];
            const titleKeys = [ 'new_dwg_MDG_title_1', 'new_dwg_MDG_title_2', 'new_dwg_MDG_title_3'];

            menuKeys.forEach((key, idx) => {
                html += `<li><a href="#dwg-${idx + 1}-${targetId}" data-i18n="${key}">${key}</a></li>`;
            });
            html += `</ul></div></div>`;

            data.images.forEach((pair, idx) => {
                const titleKey = titleKeys[idx];
                const blockNumber = idx + 1;

                html += `<div id="dwg-${blockNumber}-${targetId}" class="dwg-block">`;
                html += `<div class="gray-bar-title" data-i18n="${titleKey}">Чертёж ${blockNumber}</div>`;

                if (pair[0]) {
                    html += `<div style="text-align: center; margin: 20px 0;">
                                <a href="${pair[0]}" target="_blank">
                                    <img src="${pair[0]}" alt="Drawing" class="table-image">
                                </a>
                             </div>`;
                }
           
                html += `<h3 class="section-title specs-title" style="font-size: 20px; margin-top: 35px; margin-bottom: 35px;" data-i18n="${data.specs}">${data.specs}</h3>`;

                if (pair[1]) {
                    html += `<div style="text-align: center; margin: 20px 0;">
                                <a href="${pair[1]}" target="_blank">
                                    <img src="${pair[1]}" alt="Table" class="table-image">
                                </a>
                             </div>`;
                }

                html += `</div>`;
            });
        }           
        else if (targetId === '2') {
    html += `<div style="text-align: center; margin-bottom: 10px;">
                        <div class="header-top-bar">
                            <h2 class="section-title" data-i18n="${data.title}">Козловой кран типа MG грузоподъемностью 5-500 т. с двойной балкой</h2>
                        </div>
                    </div>`;

            html += `<h4 class="section-title" style="font-size: 20px; margin-top: 26px; margin-bottom: 35px;" data-i18n="info3_subtitle">Обзор продукта:</h4>`;
            // Список
            if (data.list && data.list.length > 0) {
                html += '<ol class="features-list">';
                data.list.forEach(item => {
                    html += `<li data-i18n="${item}">${item}</li>`;
                });
                html += '</ol>';
            }

            // Выпадающее меню
            html += `
            <div class="dwg-accordion">
                <button class="dwg-accordion-toggle" onclick="toggleAccordion(this)">
                    <span data-i18n="menu_title">Чертежи по моделям</span>
                    <span class="dwg-arrow">▼</span>
                </button>
                <div class="dwg-accordion-content">
                    <ul class="dwg-accordion-list">`;

            const menuKeys = [ 'new_dwg_MG_menu_1', 'new_dwg_MG_menu_2', 'new_dwg_MG_menu_3', 'new_dwg_MG_menu_4', 'new_dwg_MG_menu_5', 'new_dwg_MG_menu_6', 'new_dwg_MG_menu_7'];
            const titleKeys = [ 'new_dwg_MG_title_1', 'new_dwg_MG_title_2', 'new_dwg_MG_title_3' , 'new_dwg_MG_title_4', 'new_dwg_MG_title_5', 'new_dwg_MG_title_6', 'new_dwg_MG_title_7'];

            menuKeys.forEach((key, idx) => {
                html += `<li><a href="#dwg-${idx + 1}-${targetId}" data-i18n="${key}">${key}</a></li>`;
            });
            html += `</ul></div></div>`;

            data.images.forEach((pair, idx) => {
                const titleKey = titleKeys[idx];
                const blockNumber = idx + 1;

                html += `<div id="dwg-${blockNumber}-${targetId}" class="dwg-block">`;
                html += `<div class="gray-bar-title" data-i18n="${titleKey}">Чертёж ${blockNumber}</div>`;

                if (pair[0]) {
                    html += `<div style="text-align: center; margin: 20px 0;">
                                <a href="${pair[0]}" target="_blank">
                                    <img src="${pair[0]}" alt="Drawing" class="table-image">
                                </a>
                             </div>`;
                }
           
                html += `<h3 class="section-title specs-title" style="font-size: 20px; margin-top: 35px; margin-bottom: 35px;" data-i18n="${data.specs}">${data.specs}</h3>`;

                if (pair[1]) {
                    html += `<div style="text-align: center; margin: 20px 0;">
                                <a href="${pair[1]}" target="_blank">
                                    <img src="${pair[1]}" alt="Table" class="table-image">
                                </a>
                             </div>`;
                }
                html += `</div>`;
            });
        }
        else if (targetId === '3') {
            html += `<div style="text-align: center; margin-bottom: 10px;">
                        <div class="header-top-bar">
                            <h2 class="section-title" data-i18n="${data.title}">Козловой кран U-образной конструкции с двумя балками и крюком, грузоподъемностью 10~50/10 т.</h2>
                        </div>
                    </div>`;

            html += `<h4 class="section-title" style="font-size: 20px; margin-top: 26px; margin-bottom: 35px;" data-i18n="info_subtitle">Краткое описание продукции:</h4>`;
            // Список
            if (data.list && data.list.length > 0) {
                html += '<ol class="features-list">';
                data.list.forEach(item => {
                    html += `<li data-i18n="${item}">${item}</li>`;
                });
                html += '</ol>';
            }

            // Выпадающее меню
            html += `
            <div class="dwg-accordion">
                <button class="dwg-accordion-toggle" onclick="toggleAccordion(this)">
                    <span data-i18n="menu_title">Чертежи по моделям</span>
                    <span class="dwg-arrow">▼</span>
                </button>
                <div class="dwg-accordion-content">
                    <ul class="dwg-accordion-list">`;

            const menuKeys = [ 'new_dwg_U_menu_1', 'new_dwg_U_menu_2', 'new_dwg_U_menu_3'];
            const titleKeys = [ 'new_dwg_U_title_1', 'new_dwg_U_title_2', 'new_dwg_U_title_3'];

            menuKeys.forEach((key, idx) => {
                html += `<li><a href="#dwg-${idx + 1}-${targetId}" data-i18n="${key}">${key}</a></li>`;
            });
            html += `</ul></div></div>`;

            data.images.forEach((pair, idx) => {
                const titleKey = titleKeys[idx];
                const blockNumber = idx + 1;

                html += `<div id="dwg-${blockNumber}-${targetId}" class="dwg-block">`;
                html += `<div class="gray-bar-title" data-i18n="${titleKey}">Чертёж ${blockNumber}</div>`;

                if (pair[0]) {
                    html += `<div style="text-align: center; margin: 20px 0;">
                                <a href="${pair[0]}" target="_blank">
                                    <img src="${pair[0]}" alt="Drawing" class="table-image">
                                </a>
                             </div>`;
                }
           
                html += `<h3 class="section-title specs-title" style="font-size: 20px; margin-top: 35px; margin-bottom: 35px;" data-i18n="${data.specs}">${data.specs}</h3>`;

                if (pair[1]) {
                    html += `<div style="text-align: center; margin: 20px 0;">
                                <a href="${pair[1]}" target="_blank">
                                    <img src="${pair[1]}" alt="Table" class="table-image">
                                </a>
                             </div>`;
                }
                html += `</div>`;
            });
        }  
        else if (targetId === '4') {
            html += `<div style="text-align: center; margin-bottom: 10px;">
                        <div class="header-top-bar">
                            <h2 class="section-title" data-i18n="${data.title}">Портальный кран с крюком для проекта</h2>
                        </div>
                    </div>`;

            html += `<h4 class="section-title" style="font-size: 20px; margin-top: 26px; margin-bottom: 35px;" data-i18n="info_subtitle">Краткое описание продукции:</h4>`;
            // Список
            if (data.list && data.list.length > 0) {
                html += '<ol class="features-list">';
                data.list.forEach(item => {
                    html += `<li data-i18n="${item}">${item}</li>`;
                });
                html += '</ol>';
            }

            // Выпадающее меню
            html += `
            <div class="dwg-accordion">
                <button class="dwg-accordion-toggle" onclick="toggleAccordion(this)">
                    <span data-i18n="menu_title">Чертежи по моделям</span>
                    <span class="dwg-arrow">▼</span>
                </button>
                <div class="dwg-accordion-content">
                    <ul class="dwg-accordion-list">`;

            const menuKeys = [ 'new_dwg_Gantry_Project_menu_1', 'new_dwg_Gantry_Project_menu_2' ];
            const titleKeys = [ 'new_dwg_Gantry_Project_title_1', 'new_dwg_Gantry_Project_title_2' ];
            menuKeys.forEach((key, idx) => {
                html += `<li><a href="#dwg-${idx + 1}-${targetId}" data-i18n="${key}">${key}</a></li>`;
            });
            html += `</ul></div></div>`;

            data.images.forEach((pair, idx) => {
                const titleKey = titleKeys[idx];
                const blockNumber = idx + 1;

                html += `<div id="dwg-${blockNumber}-${targetId}" class="dwg-block">`;
                html += `<div class="gray-bar-title" data-i18n="${titleKey}">Чертёж ${blockNumber}</div>`;

                if (pair[0]) {
                    html += `<div style="text-align: center; margin: 20px 0;">
                                <a href="${pair[0]}" target="_blank">
                                    <img src="${pair[0]}" alt="Drawing" class="table-image">
                                </a>
                             </div>`;
                }
           
                html += `<h3 class="section-title specs-title" style="font-size: 20px; margin-top: 35px; margin-bottom: 35px;" data-i18n="${data.specs}">${data.specs}</h3>`;

                if (pair[1]) {
                    html += `<div style="text-align: center; margin: 20px 0;">
                                <a href="${pair[1]}" target="_blank">
                                    <img src="${pair[1]}" alt="Table" class="table-image">
                                </a>
                             </div>`;
                    }
                html += `</div>`;
        });
        }
        else if (targetId === '5') {
            html += `<div style="text-align: center; margin-bottom: 10px;">
                        <div class="header-top-bar">
                            <h2 class="section-title" data-i18n="${data.title}">Вспомогательный балочный кран на 450+450 т.</h2>
                        </div>
                    </div>`;

            html += `<h4 class="section-title" style="font-size: 20px; margin-top: 26px; margin-bottom: 35px;" data-i18n="info_sketch">Эскиз</h4>`;          
            data.images.forEach((pair, idx) => {           
            if (pair[0]) {
                    html += `<div style="text-align: center; margin: 20px 0;">
                                <a href="${pair[0]}" target="_blank">
                                    <img src="${pair[0]}" alt="Drawing" class="table-image">
                                </a>
                             </div>`;
                }         
                html += `<h3 class="section-title specs-title" style="font-size: 20px; margin-top: 35px; margin-bottom: 35px;" data-i18n="${data.specs}">${data.specs}</h3>`;
                if (pair[1]) {
                    html += `<div style="text-align: center; margin: 20px 0;">
                                <a href="${pair[1]}" target="_blank">
                                    <img src="${pair[1]}" alt="Table" class="table-image">
                                </a>
                             </div>`;
                }
                html += `</div>`;
            });           
        }
        else if (targetId === '6') {
            html += `<div style="text-align: center; margin-bottom: 10px;">
                        <div class="header-top-bar">
                            <h2 class="section-title" data-i18n="${data.title}">Гусеничный контейнерный козловой кран</h2>
                        </div>
                    </div>`;       
            data.images.forEach((pair, idx) => {           
            if (pair[0]) {
                    html += `<div style="text-align: center; margin: 20px 0;">
                                <a href="${pair[0]}" target="_blank">
                                    <img src="${pair[0]}" alt="Drawing" class="table-image">
                                </a>
                             </div>`;
                }         
                html += `<h3 class="section-title specs-title" style="font-size: 20px; margin-top: 35px; margin-bottom: 35px;" data-i18n="${data.specs}">${data.specs}</h3>`;
                if (pair[1]) {
                    html += `<div style="text-align: center; margin: 20px 0;">
                                <a href="${pair[1]}" target="_blank">
                                    <img src="${pair[1]}" alt="Table" class="table-image">
                                </a>
                             </div>`;
                }
                html += `</div>`;
            });           
        }
        else if (targetId === '7') {
            html += `<div style="text-align: center; margin-bottom: 10px;">
                        <div class="header-top-bar">
                            <h2 class="section-title" data-i18n="${data.title}">Электрическая тележка</h2>
                        </div>
                    </div>`;

            html += `<h4 class="section-title" style="font-size:20px; margin-top:26px; margin-bottom:25px;" data-i18n="info_subtitle">Краткое описание продукции:</h4>`;
            html += `<p data-i18n="info_Electric_Flat_p" style="margin-bottom:25px; line-height:1.7; text-align:justify;">info_Electric_Flat_p</p>`;

            data.images.forEach((pair, idx) => {
                if (pair[0]) {
                    html += `<h3 class="section-title specs-title" style="font-size: 20px; margin-top: 35px; margin-bottom: 35px;" data-i18n="${data.specs}">${data.specs}</h3>`;
                    html += `<div style="text-align: center; margin: 40px 0;">
                                <a href="${pair[0]}" target="_blank">
                                
                                    <img src="${pair[0]}" alt="Drawing" class="table-image">
                                </a>
                             </div>`;
                }
            });
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

function toggleAccordion(button) {
    const accordion = button.closest('.dwg-accordion');
    accordion.classList.toggle('open');
}

let resizeTimer;
window.addEventListener('resize', function() {
    const activePanel = document.querySelector('.info-panel.active');
    if (!activePanel) return;

    const content = activePanel.innerHTML;
    let targetId = null;

    if (content.includes('Клещевой мостовой кран')) {
        targetId = '11';
    } else if (content.includes('Мостовой кран нового типа')) {
        targetId = '2';
    }

    if (!targetId) return;

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        const card = document.querySelector('.product-card[data-target="' + targetId + '"]');
        if (card) card.click();
    }, 300);
});

window.toggleAccordion = toggleAccordion;