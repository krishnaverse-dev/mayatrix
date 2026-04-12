(function() {
    // ----- COMPLETE RELIGIONS LIST WITH SCIENCE PERCENTAGES -----
  const religions = [
                { name: "Sri", icon: "🕉️", percent: "Nondual" },
                { name: "Brahma", icon: "🕉️", percent: "dual" },
                { name: "Rudra", icon: "🕉️", percent: "Nondual" },
                { name: "Kumara (Nimbarka)", icon: "🕉️", percent: "Nondual" },
                { name: "Gaudiya Vaishnava", icon: "🕉️", percent: "dual" },
                { name: "Ramanandi", icon: "🕉️", percent: "Nondual" },
                { name: "Swaminarayan", icon: "🕉️", percent: "Nondual" },
                { name: "Warkari", icon: "🕉️", percent: "Nondual" },
                { name: "Vaikhanasa", icon: "🕉️", percent: "Nondual" },
                { name: "Krishna Pranami (Pranami Panth / Nijananda)", icon: "🕉️", percent: "Nondual" },
                { name: "Radhavallabha", icon: "🕉️", percent: "dual" },
                { name: "Mahanubhava", icon: "🕉️", percent: "dual" },
                { name: "Ekasarana Dharma", icon: "🕉️", percent: "dual" },
                { name: "Balmiki", icon: "🕉️", percent: "dual" },
                { name: "Kapadi", icon: "🕉️", percent: "dual" },
                { name: "Gunupasaka", icon: "🕉️", percent: "dual" },
                { name: "Nandinatha (Saiva Siddhanta)", icon: "🔱", percent: "dual" },
                { name: "Adinath (Nath)", icon: "🔱", percent: "Nondual" },
                { name: "Meykanda", icon: "🔱", percent: "dual" },
                { name: "Kashmir Shaiv", icon: "🔱", percent: "Nondual" },
                { name: "Pashupata Shaiv", icon: "🔱", percent: "dual" },
                { name: "Lingayatism (Veerashaiv)", icon: "🔱", percent: "dual" },
                { name: "Siddha Siddhanta", icon: "🔱", percent: "Nondual" },
                { name: "shiva Advaita", icon: "🔱", percent: "Nondual" },
                { name: "Shaiva Siddhanta", icon: "🔱", percent: "dual" },
                { name: "Srikula", icon: "⚡", percent: "Nondual" },
                { name: "Kalikula", icon: "⚡", percent: "Nondual" },
                { name: "Srividya", icon: "⚡", percent: "Nondual" },
                { name: "Dashanami", icon: "🕉️", percent: "Nondual" },
                { name: "Advaita", icon: "🕉️", percent: "Nondual" },
                { name: "Mahima Dharma", icon: "🕉️", percent: "Nondual" }, 
                { name: "Sants Mat", icon: "🕉️", percent: "Nondual" }, 
                { name: "Kirat Mundhum", icon: "⛰️", percent: "dual" },
                { name: "Buddh", icon: "☸️", percent: "Nondual" },
                { name: "Jain", icon: "🪷", percent: "dual" },
                { name: "Sikh", icon: "🪯", percent: "dual" },
                { name: "Kabir Panth", icon: "🕉️", percent: "Nondual" },
                { name: "Dadu Panth", icon: "🕉️", percent: "Nondual" }, 
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