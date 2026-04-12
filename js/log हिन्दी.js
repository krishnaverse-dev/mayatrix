(function() {
    // ----- COMPLETE RELIGIONS LIST WITH SCIENCE PERCENTAGES -----
const religions = [
                { name: "श्री", icon: "🕉️", percent: "अद्वैत" },
                { name: "ब्रह्मा", icon: "🕉️", percent: "द्वैत" },
                { name: "रुद्र", icon: "🕉️", percent: "अद्वैत" },
                { name: "कुमार (निंबार्क)", icon: "🕉️", percent: "अद्वैत" },
                { name: "गौड़ीय वैष्णव", icon: "🕉️", percent: "द्वैत" },
                { name: "रामानंदी", icon: "🕉️", percent: "अद्वैत" },
                { name: "स्वामिनारायण", icon: "🕉️", percent: "अद्वैत" },
                { name: "वारकरी", icon: "🕉️", percent: "अद्वैत" },
                { name: "वैखानस", icon: "🕉️", percent: "अद्वैत" },
                { name: "कृष्ण प्रणामी (प्रणामी पंथ / निजानंद)", icon: "🕉️", percent: "अद्वैत" },
                { name: "राधावल्लभ", icon: "🕉️", percent: "द्वैत" },
                { name: "महानुभाव", icon: "🕉️", percent: "द्वैत" },
                { name: "एकसरण धर्म", icon: "🕉️", percent: "द्वैत" },
                { name: "बाल्मीकि", icon: "🕉️", percent: "द्वैत" },
                { name: "कापड़ी", icon: "🕉️", percent: "द्वैत" },
                { name: "गुणोपासक", icon: "🕉️", percent: "द्वैत" },
                { name: "नंदिनाथ (शैव सिद्धांत)", icon: "🔱", percent: "द्वैत" },
                { name: "आदिनाथ (नाथ)", icon: "🔱", percent: "अद्वैत" },
                { name: "मेयकंद", icon: "🔱", percent: "द्वैत" },
                { name: "कश्मीर शैव", icon: "🔱", percent: "अद्वैत" },
                { name: "पाशुपत शैव", icon: "🔱", percent: "द्वैत" },
                { name: "लिंगायत (वीरशैव)", icon: "🔱", percent: "द्वैत" },
                { name: "सिद्ध सिद्धांत", icon: "🔱", percent: "अद्वैत" },
                { name: "शिव अद्वैत", icon: "🔱", percent: "अद्वैत" },
                { name: "शैव सिद्धांत", icon: "🔱", percent: "द्वैत" },
                { name: "श्रीकुल", icon: "⚡", percent: "अद्वैत" },
                { name: "कालीकुल", icon: "⚡", percent: "अद्वैत" },
                { name: "श्रीविद्या", icon: "⚡", percent: "अद्वैत" },
                { name: "दशनामी", icon: "🕉️", percent: "अद्वैत" },
                { name: "अद्वैत", icon: "🕉️", percent: "अद्वैत" },
                { name: "महिमा धर्म", icon: "🕉️", percent: "अद्वैत" }, 
                { name: "संत मत", icon: "🕉️", percent: "अद्वैत" }, 
                { name: "किरात मुंधुम", icon: "⛰️", percent: "द्वैत" },
                { name: "बौद्ध", icon: "☸️", percent: "अद्वैत" },
                { name: "जैन", icon: "🪷", percent: "द्वैत" },
                { name: "सिख", icon: "🪯", percent: "द्वैत" },
                { name: "कबीर पंथ", icon: "🕉️", percent: "अद्वैत" },
                { name: "दादू पंथ", icon: "🕉️", percent: "अद्वैत" }, 
    ];
    // Make sure DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        // remove duplicates by name (keep first occurrence)
        const seen = new Set();
        const uniqueReligions = religions.filter(item => {
            if (seen.has(item.name)) return false;
            seen.add(item.name);
            return true;
        });

        // optional sort alphabetically
        const container = document.getElementById('religionList');
        if (!container) {
            console.error('Container #religionList not found!');
            return;
        }

        container.innerHTML = '';

        uniqueReligions.forEach(rel => {
            const listItem = document.createElement('div');
            listItem.className = 'religion-list-item';

            const iconSpan = document.createElement('span');
            iconSpan.className = 'religion-list-icon';
            iconSpan.textContent = rel.icon;

            const nameSpan = document.createElement('span');
            nameSpan.className = 'religion-list-name';
            nameSpan.textContent = rel.name;

            const percentSpan = document.createElement('span');
            percentSpan.className = 'science-percent';
            percentSpan.textContent = rel.percent;

            listItem.appendChild(iconSpan);
            listItem.appendChild(nameSpan);
            listItem.appendChild(percentSpan);
            container.appendChild(listItem);
        });
        
        console.log(`Loaded ${uniqueReligions.length} religions`); // Debug message
    });
})();