  (function() {
            // ----- COMPREHENSIVE LIST OF RELIGIONS (each with a representative icon) -----
            const religions = [
                { name: "سری", icon: "🕉️" },
                { name: "برہما", icon: "🕉️" },
                { name: "رودر", icon: "🕉️" },
                { name: "کمار (نمبرک)", icon: "🕉️" },
                { name: "گاڈیہ ویشنو", icon: "🕉️" },
                { name: "رامانندی", icon: "🕉️" },
                { name: "سوامی ناراین", icon: "🕉️" },
                { name: "وارکری", icon: "🕉️" },
                { name: "ویکھانس", icon: "🕉️" },
                { name: "کرشنا پرنامی (پرنامی پنتھ / نجانند)", icon: "🕉️" },
                { name: "رادھا ولابھ", icon: "🕉️" },
                { name: "مہانبھاو", icon: "🕉️" },
                { name: "ایک سرن دھرم", icon: "🕉️" },
                { name: "والمیکی", icon: "🕉️" },
                { name: "کاپڑی", icon: "🕉️" },
                { name: "گنوپاسک", icon: "🕉️" },
                { name: "نندیناتھ (شیو سدھانت)", icon: "🔱" },
                { name: "آدیناتھ (ناتھ)", icon: "🔱" },
                { name: "میکند", icon: "🔱" },
                { name: "کشمیر شیو", icon: "🔱" },
                { name: "پاشوپت شیو", icon: "🔱" },
                { name: "لنگایت (ویر شیو)", icon: "🔱" },
                { name: "سدھ سدھانت", icon: "🔱" },
                { name: "شیو ادویت", icon: "🔱" },
                { name: "شیو سدھانت", icon: "🔱" },
                { name: "سری کل", icon: "⚡" },
                { name: "کالی کل", icon: "⚡" },
                { name: "سری ودیا", icon: "⚡" },
                { name: "دس نامی", icon: "🕉️" },
                { name: "ادویت", icon: "🕉️" },
                { name: "مہما دھرم", icon: "🕉️" }, 
                { name: "سنت مات", icon: "🕉️" }, 
                { name: "کرات مونڈھم", icon: "⛰️" },
                { name: "بدھ", icon: "☸️" },
                { name: "جین", icon: "🪷" },
                { name: "سکھ", icon: "🪯" },
                { name: "کبیر پنتھ", icon: "🕉️" },
                { name: "دادو پنتھ", icon: "🕉️" }, 
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