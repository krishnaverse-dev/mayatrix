(function() {
    // ----- COMPLETE RELIGIONS LIST WITH SCIENCE PERCENTAGES -----
  const religions = [
                { name: "سری", icon: "🕉️", percent: "لا ثنوی" },
                { name: "برہما", icon: "🕉️", percent: "ثنوی" },
                { name: "رودر", icon: "🕉️", percent: "لا ثنوی" },
                { name: "کمار (نمبرک)", icon: "🕉️", percent: "لا ثنوی" },
                { name: "گاڈیہ ویشنو", icon: "🕉️", percent: "ثنوی" },
                { name: "رامانندی", icon: "🕉️", percent: "لا ثنوی" },
                { name: "سوامی ناراین", icon: "🕉️", percent: "لا ثنوی" },
                { name: "وارکری", icon: "🕉️", percent: "لا ثنوی" },
                { name: "ویکھانس", icon: "🕉️", percent: "لا ثنوی" },
                { name: "کرشنا پرنامی (پرنامی پنتھ / نجانند)", icon: "🕉️", percent: "لا ثنوی" },
                { name: "رادھا ولابھ", icon: "🕉️", percent: "ثنوی" },
                { name: "مہانبھاو", icon: "🕉️", percent: "ثنوی" },
                { name: "ایک سرن دھرم", icon: "🕉️", percent: "ثنوی" },
                { name: "والمیکی", icon: "🕉️", percent: "ثنوی" },
                { name: "کاپڑی", icon: "🕉️", percent: "ثنوی" },
                { name: "گنوپاسک", icon: "🕉️", percent: "ثنوی" },
                { name: "نندیناتھ (شیو سدھانت)", icon: "🔱", percent: "ثنوی" },
                { name: "آدیناتھ (ناتھ)", icon: "🔱", percent: "لا ثنوی" },
                { name: "میکند", icon: "🔱", percent: "ثنوی" },
                { name: "کشمیر شیو", icon: "🔱", percent: "لا ثنوی" },
                { name: "پاشوپت شیو", icon: "🔱", percent: "ثنوی" },
                { name: "لنگایت (ویر شیو)", icon: "🔱", percent: "ثنوی" },
                { name: "سدھ سدھانت", icon: "🔱", percent: "لا ثنوی" },
                { name: "شیو ادویت", icon: "🔱", percent: "لا ثنوی" },
                { name: "شیو سدھانت", icon: "🔱", percent: "ثنوی" },
                { name: "سری کل", icon: "⚡", percent: "لا ثنوی" },
                { name: "کالی کل", icon: "⚡", percent: "لا ثنوی" },
                { name: "سری ودیا", icon: "⚡", percent: "لا ثنوی" },
                { name: "دس نامی", icon: "🕉️", percent: "لا ثنوی" },
                { name: "ادویت", icon: "🕉️", percent: "لا ثنوی" },
                { name: "مہما دھرم", icon: "🕉️", percent: "لا ثنوی" }, 
                { name: "سنت مات", icon: "🕉️", percent: "لا ثنوی" }, 
                { name: "کرات مونڈھم", icon: "⛰️", percent: "ثنوی" },
                { name: "بدھ", icon: "☸️", percent: "لا ثنوی" },
                { name: "جین", icon: "🪷", percent: "ثنوی" },
                { name: "سکھ", icon: "🪯", percent: "ثنوی" },
                { name: "کبیر پنتھ", icon: "🕉️", percent: "لا ثنوی" },
                { name: "دادو پنتھ", icon: "🕉️", percent: "لا ثنوی" }, 
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