  (function() {
            // ----- COMPREHENSIVE LIST OF RELIGIONS (each with a representative icon) -----
            const religions = [
                { name: "Sri", icon: "🕉️" },
                { name: "Brahma", icon: "🕉️" },
                { name: "Rudra", icon: "🕉️" },
                { name: "Kumara (Nimbarka)", icon: "🕉️" },
                { name: "Gaudiya Vaishnava", icon: "🕉️" },
                { name: "Ramanandi", icon: "🕉️" },
                { name: "Swaminarayan", icon: "🕉️" },
                { name: "Warkari", icon: "🕉️" },
                { name: "Vaikhanasa", icon: "🕉️" },
                { name: "Krishna Pranami (Pranami Panth / Nijananda)", icon: "🕉️" },
                { name: "Radhavallabha", icon: "🕉️" },
                { name: "Mahanubhava", icon: "🕉️" },
                { name: "Ekasarana Dharma", icon: "🕉️" },
                { name: "Balmiki", icon: "🕉️" },
                { name: "Kapadi", icon: "🕉️" },
                { name: "Gunupasaka", icon: "🕉️" },
                { name: "Nandinatha (Saiva Siddhanta)", icon: "🔱" },
                { name: "Adinath (Nath)", icon: "🔱" },
                { name: "Meykanda", icon: "🔱" },
                { name: "Kashmir Shaiv", icon: "🔱" },
                { name: "Pashupata Shaiv", icon: "🔱" },
                { name: "Lingayatism (Veerashaiv)", icon: "🔱" },
                { name: "Siddha Siddhanta", icon: "🔱" },
                { name: "shiva Advaita", icon: "🔱" },
                { name: "Shaiva Siddhanta", icon: "🔱" },
                { name: "Srikula", icon: "⚡" },
                { name: "Kalikula", icon: "⚡" },
                { name: "Srividya", icon: "⚡" },
                { name: "Dashanami", icon: "🕉️" },
                { name: "Advaita", icon: "🕉️" },
                { name: "Mahima Dharma", icon: "🕉️" }, 
                { name: "Sants Mat", icon: "🕉️" }, 
                { name: "Kirat Mundhum", icon: "⛰️" },
                { name: "Buddh", icon: "☸️" },
                { name: "Jain", icon: "🪷" },
                { name: "Sikh", icon: "🪯" },
                { name: "Kabir Panth", icon: "🕉️" },
                { name: "Dadu Panth", icon: "🕉️" }, 
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