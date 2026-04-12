  (function() {
            // ----- COMPREHENSIVE LIST OF RELIGIONS (each with a representative icon) -----
          const religions = [
                { name: "শ্রী", icon: "🕉️" },
                { name: "ব্রহ্মা", icon: "🕉️" },
                { name: "রুদ্র", icon: "🕉️" },
                { name: "কুমার (নিম্বার্ক)", icon: "🕉️" },
                { name: "গৌড়ীয় বৈষ্ণব", icon: "🕉️" },
                { name: "রামানন্দী", icon: "🕉️" },
                { name: "স্বামীনারায়ণ", icon: "🕉️" },
                { name: "বারকरी", icon: "🕉️" },
                { name: "বৈখানস", icon: "🕉️" },
                { name: "কৃষ্ণ প্রাণামী (প্রাণামী পন্থ / নিজানন্দ)", icon: "🕉️" },
                { name: "রাধাবল্লভ", icon: "🕉️" },
                { name: "মহানুভব", icon: "🕉️" },
                { name: "একসরণ ধর্ম", icon: "🕉️" },
                { name: "বাল্মীকি", icon: "🕉️" },
                { name: "কাপড়ি", icon: "🕉️" },
                { name: "গুণোপাসক", icon: "🕉️" },
                { name: "নন্দিনাথ (শৈব সিদ্ধান্ত)", icon: "🔱" },
                { name: "আদিনাথ (নাথ)", icon: "🔱" },
                { name: "মেয়কন্দ", icon: "🔱" },
                { name: "কাশ্মীর শৈব", icon: "🔱" },
                { name: "পাশুপত শৈব", icon: "🔱" },
                { name: "লিঙ্গায়ত (বীরশৈব)", icon: "🔱" },
                { name: "সিদ্ধ সিদ্ধান্ত", icon: "🔱" },
                { name: "শিব অদ্বৈত", icon: "🔱" },
                { name: "শৈব সিদ্ধান্ত", icon: "🔱" },
                { name: "শ্রীকুল", icon: "⚡" },
                { name: "কালীকুল", icon: "⚡" },
                { name: "শ্রীবিদ্যা", icon: "⚡" },
                { name: "দশনামী", icon: "🕉️" },
                { name: "অদ্বৈত", icon: "🕉️" },
                { name: "মহিমা ধর্ম", icon: "🕉️" }, 
                { name: "সন্ত মত", icon: "🕉️" }, 
                { name: "কিরাত মুন্ধুম", icon: "⛰️" },
                { name: "বৌদ্ধ", icon: "☸️" },
                { name: "জৈন", icon: "🪷" },
                { name: "শিখ", icon: "🪯" },
                { name: "কবীর পন্থ", icon: "🕉️" },
                { name: "দাদু পন্থ", icon: "🕉️" }, 
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