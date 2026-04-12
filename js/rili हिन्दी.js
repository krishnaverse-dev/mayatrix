  (function() {
            // ----- COMPREHENSIVE LIST OF RELIGIONS (each with a representative icon) -----
          const religions = [
                { name: "श्री", icon: "🕉️" },
                { name: "ब्रह्मा", icon: "🕉️" },
                { name: "रुद्र", icon: "🕉️" },
                { name: "कुमार (निंबार्क)", icon: "🕉️" },
                { name: "गौड़ीय वैष्णव", icon: "🕉️" },
                { name: "रामानंदी", icon: "🕉️" },
                { name: "स्वामिनारायण", icon: "🕉️" },
                { name: "वारकरी", icon: "🕉️" },
                { name: "वैखानस", icon: "🕉️" },
                { name: "कृष्ण प्रणामी (प्रणामी पंथ / निजानंद)", icon: "🕉️" },
                { name: "राधावल्लभ", icon: "🕉️" },
                { name: "महानुभाव", icon: "🕉️" },
                { name: "एकसरण धर्म", icon: "🕉️" },
                { name: "बाल्मीकि", icon: "🕉️" },
                { name: "कापड़ी", icon: "🕉️" },
                { name: "गुणोपासक", icon: "🕉️" },
                { name: "नंदिनाथ (शैव सिद्धांत)", icon: "🔱" },
                { name: "आदिनाथ (नाथ)", icon: "🔱" },
                { name: "मेयकंद", icon: "🔱" },
                { name: "कश्मीर शैव", icon: "🔱" },
                { name: "पाशुपत शैव", icon: "🔱" },
                { name: "लिंगायत (वीरशैव)", icon: "🔱" },
                { name: "सिद्ध सिद्धांत", icon: "🔱" },
                { name: "शिव अद्वैत", icon: "🔱" },
                { name: "शैव सिद्धांत", icon: "🔱" },
                { name: "श्रीकुल", icon: "⚡" },
                { name: "कालीकुल", icon: "⚡" },
                { name: "श्रीविद्या", icon: "⚡" },
                { name: "दशनामी", icon: "🕉️" },
                { name: "अद्वैत", icon: "🕉️" },
                { name: "महिमा धर्म", icon: "🕉️" }, 
                { name: "संत मत", icon: "🕉️" }, 
                { name: "किरात मुंधुम", icon: "⛰️" },
                { name: "बौद्ध", icon: "☸️" },
                { name: "जैन", icon: "🪷" },
                { name: "सिख", icon: "🪯" },
                { name: "कबीर पंथ", icon: "🕉️" },
                { name: "दादू पंथ", icon: "🕉️" }, 
    ];

            // Remove duplicates (keep first occurrence)
            const seen = new Set();
            const uniqueReligions = religions.filter(item => {
                if (seen.has(item.name)) return false;
                seen.add(item.name);
                return true;
            });

            const container = document.getElementById('religionList');
            if (!container) return;

            container.innerHTML = '';  // clear if any placeholder

            // Create list items
            uniqueReligions.forEach(rel => {
                const listItem = document.createElement('div');
                listItem.className = 'religion-list-item';

                const iconSpan = document.createElement('span');
                iconSpan.className = 'religion-list-icon';
                iconSpan.textContent = rel.icon;

                const nameSpan = document.createElement('span');
                nameSpan.className = 'religion-list-name';
                nameSpan.textContent = rel.name;

                listItem.appendChild(iconSpan);
                listItem.appendChild(nameSpan);
                container.appendChild(listItem);
            });
        })();