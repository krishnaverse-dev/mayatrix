(function() {
    // ----- COMPLETE RELIGIONS LIST WITH SCIENCE PERCENTAGES -----
   const religions = [
                { name: "শ্রী", icon: "🕉️", percent: "অদ্বৈত" },
                { name: "ব্রহ্মা", icon: "🕉️", percent: "দ্বৈত" },
                { name: "রুদ্র", icon: "🕉️", percent: "অদ্বৈত" },
                { name: "কুমার (নিম্বার্ক)", icon: "🕉️", percent: "অদ্বৈত" },
                { name: "গৌড়ীয় বৈষ্ণব", icon: "🕉️", percent: "দ্বৈত" },
                { name: "রামানন্দী", icon: "🕉️", percent: "অদ্বৈত" },
                { name: "স্বামীনারায়ণ", icon: "🕉️", percent: "অদ্বৈত" },
                { name: "বারকरी", icon: "🕉️", percent: "অদ্বৈত" },
                { name: "বৈখানস", icon: "🕉️", percent: "অদ্বৈত" },
                { name: "কৃষ্ণ প্রাণামী (প্রাণামী পন্থ / নিজানন্দ)", icon: "🕉️", percent: "অদ্বৈত" },
                { name: "রাধাবল্লভ", icon: "🕉️", percent: "দ্বৈত" },
                { name: "মহানুভব", icon: "🕉️", percent: "দ্বৈত" },
                { name: "একসরণ ধর্ম", icon: "🕉️", percent: "দ্বৈত" },
                { name: "বাল্মীকি", icon: "🕉️", percent: "দ্বৈত" },
                { name: "কাপড়ি", icon: "🕉️", percent: "দ্বৈত" },
                { name: "গুণোপাসক", icon: "🕉️", percent: "দ্বৈত" },
                { name: "নন্দিনাথ (শৈব সিদ্ধান্ত)", icon: "🔱", percent: "দ্বৈত" },
                { name: "আদিনাথ (নাথ)", icon: "🔱", percent: "অদ্বৈত" },
                { name: "মেয়কন্দ", icon: "🔱", percent: "দ্বৈত" },
                { name: "কাশ্মীর শৈব", icon: "🔱", percent: "অদ্বৈত" },
                { name: "পাশুপত শৈব", icon: "🔱", percent: "দ্বৈত" },
                { name: "লিঙ্গায়ত (বীরশৈব)", icon: "🔱", percent: "দ্বৈত" },
                { name: "সিদ্ধ সিদ্ধান্ত", icon: "🔱", percent: "অদ্বৈত" },
                { name: "শিব অদ্বৈত", icon: "🔱", percent: "অদ্বৈত" },
                { name: "শৈব সিদ্ধান্ত", icon: "🔱", percent: "দ্বৈত" },
                { name: "শ্রীকুল", icon: "⚡", percent: "অদ্বৈত" },
                { name: "কালীকুল", icon: "⚡", percent: "অদ্বৈত" },
                { name: "শ্রীবিদ্যা", icon: "⚡", percent: "অদ্বৈত" },
                { name: "দশনামী", icon: "🕉️", percent: "অদ্বৈত" },
                { name: "অদ্বৈত", icon: "🕉️", percent: "অদ্বৈত" },
                { name: "মহিমা ধর্ম", icon: "🕉️", percent: "অদ্বৈত" }, 
                { name: "সন্ত মত", icon: "🕉️", percent: "অদ্বৈত" }, 
                { name: "কিরাত মুন্ধুম", icon: "⛰️", percent: "দ্বৈত" },
                { name: "বৌদ্ধ", icon: "☸️", percent: "অদ্বৈত" },
                { name: "জৈন", icon: "🪷", percent: "দ্বৈত" },
                { name: "শিখ", icon: "🪯", percent: "দ্বৈত" },
                { name: "কবীর পন্থ", icon: "🕉️", percent: "অদ্বৈত" },
                { name: "দাদু পন্থ", icon: "🕉️", percent: "অদ্বৈত" }, 
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