        (function() {
            const books = [
                {
                    title: "RIG VEDA",
                    cover: "thumbnail/Rigveda.jpg",
                    link: "https://www.holybooks.com/wp-content/uploads/RigVeda.pdf"
                },
                {
                    title: "SAMA VEDA",
                    cover: "thumbnail/samaveda.jpg",
                    link: "https://www.holybooks.com/wp-content/uploads/The-Sama-Veda.pdf"
                },
                {
                    title: "YAJUR VEDA",
                    cover: "thumbnail/yajurveda.jpg",
                    link: "https://www.holybooks.com/wp-content/uploads/The-Yajur-Veda-Taittiriya-Sanhita-Taittiriya-Sanhita.pdf"
                },
                {
                    title: "ATHARVA VEDA",
                    cover: "thumbnail/atharvaveda.jpg",
                    link: "https://www.holybooks.com/atharva-veda-samhita-complete-pdf-e-book"
                },
                {
                    title: "Isha Upanishad",
                    cover: "thumbnail/isha-upanishad.jpg",
                    link: "https://www.vedanta-nl.org/ISHA.pdf"
                },
                {
                    title: "Kena Upanishad",
                    cover: "thumbnail/kena-upanishad.png",
                    link: "https://archive.org/details/kena-upanishad00xxxxuoft/page/n5/mode/2up"
                },
                {
                    title: "Katha Upanishad",
                    cover: "thumbnail/katha-upanishad.jpg",
                    link: "https://www.holybooks.com/wp-content/uploads/Katha-Upanishad.pdf"
                },
                {
                    title: "Prashna Upanishad",
                    cover: "thumbnail/prashna-upanishad.jpg",
                    link: "https://archive.org/details/kBBJ_prashna-upanisad-with-the-commentary-of-shankaracharya-by-swami-gambhiranand-advaita-ashram/page/n5/mode/2up"
                },
                {
                    title: "Mundaka Upanishad",
                    cover: "thumbnail/mundaka-upanishad.png",
                    link: "https://archive.org/details/elNj_mundaka-upanishad-by-swami-chinmayananda-english-s-d-shroff-new-delhi/page/n25/mode/2up"
                },
                {
                    title: "Mandukya Upanishad",
                    cover: "thumbnail/Mandukya-Upanishad.png",
                    link: "https://www.holybooks.com/wp-content/uploads/Mandukya-Upanishad-An-ancient-Sanskrit-text-on-the-nature-of-Reality.pdf"
                },
                {
                    title: "Taittiriya Upanishad",
                    cover: "thumbnail/Taitttiriya-Upanishad.jpg",
                    link: "https://www.holybooks.com/wp-content/uploads/Taitttiriya-Upanishad.pdf"
                },
                {
                    title: "Aitareya Upanishad",
                    cover: "thumbnail/Aitareya-Upanishad.webp",
                    link: "https://dn710609.ca.archive.org/0/items/AitareyataittiriyaUpanishadsWithShankaraBhashya-English/05AitareyataittiriyaUpanishadsWithShankaraBhashya-English.pdf"
                },
                {
                    title: "Chandogya Upanishad",
                    cover: "thumbnail/Chandogya-Upanishad.webp",
                    link: "https://dn711408.ca.archive.org/0/items/Shankara.Bhashya-Chandogya.Upanishad-Ganganath.Jha.1942.English/Shankara.Bhashya-Chandogya.Upanishad-Ganganath.Jha.1942.English.pdf"
                },
                {
                    title: "Brihadaranyaka Upanishad",
                    cover: "thumbnail/Brihadaranyaka-Upanishad.webp",
                    link: "https://www.holybooks.com/wp-content/uploads/Brihadaranyaka-Upanishad.pdf"
                },
                 { 
                    title: "18 Maha Purana",
                    cover: "thumbnail/18mahapurans.jpg",
                    link: "https://dn790009.ca.archive.org/0/items/all18majorpuranas/ALL%2018%20MAJOR%20PURANAS.pdf"
                },
                { 
                    title: "kuljam svaroop (Tartam Sagar)",
                    cover: "thumbnail/kuljam-svaroop.jpg",
                    link: "https://archive.org/details/tartam-sagar-ras-to-kayamatnama-mahamati-prannath"
                },
                { 
                    title: "Kirat Mundhum",
                    cover: "thumbnail/Kirat-Mundhum.jpg",
                    link: "https://www.researchgate.net/publication/393228377_Kirat-Mundhum-Of-Earth-and-Ancestors#read"
                },
                { 
                    title: "Tripataka",
                    cover: "thumbnail/Tripataka.jpg",
                    link: "https://archive.org/details/theravada-buddhism-tripitaka/Tripitaka%20-%20English/Abhidhamma/Bhikkhu%20Bodhi%20-%20A%20comprehensive%20manual%20of%20the%20Abhidhamma/"
                },
                { 
                    title: "Saman Suttam",
                    cover: "thumbnail/Saman-Suttam.jpg",
                    link: "https://jainworld.com/scripture/saman-suttam"
                },
                { 
                    title: "Guru Granth Sahib",
                    cover: "thumbnail/Guru-Granth-Sahib.jpg",
                    link: "https://www.khalsadarbar.com/PDFs/SriGuruGranthSahibJiDarpanEnglish.pdf"
                },
                { 
                    title: "Bijak",
                    cover: "thumbnail/Bijak.jpg",
                    link: "https://dn790007.ca.archive.org/0/items/bijakofkabirtran00kabiuoft/bijakofkabirtran00kabiuoft.pdf"
                },
                { 
                    title: "Dadu vani",
                    cover: "thumbnail/Dadu-vani.jpg",
                    link: "https://archive.org/details/in.ernet.dli.2015.409877/page/n9/mode/2up"
                },
                
            ];

            const container = document.getElementById('bookLibraryGrid');
            if (!container) return;

            container.innerHTML = '';  // clear if any placeholder

            books.forEach(b => {
                // create an anchor that wraps the whole card – link is fully functional but invisible
                const card = document.createElement('a');
                card.className = 'book-card';
                card.href = b.link;
                card.target = '_blank';      // open in new tab (optional, but preserves your site)
                card.rel = 'noopener noreferrer';

                // ----- cover with fallback -----
                const coverDiv = document.createElement('div');
                coverDiv.className = 'book-cover';

                const img = document.createElement('img');
                img.src = b.cover;
                img.alt = `Cover of ${b.title}`;
                img.loading = 'lazy';
                img.onerror = function() {
                    // replace with styled fallback (no broken image icon)
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'cover-fallback';
                    fallbackDiv.textContent = '📖';  // book emoji
                    this.parentNode.replaceChild(fallbackDiv, this);
                };

                coverDiv.appendChild(img);

                // title and author (absolutely no link text / url shown)
                const titleEl = document.createElement('div');
                titleEl.className = 'book-title';
                titleEl.textContent = b.title;

                const authorEl = document.createElement('div');
                authorEl.className = 'book-author';
                authorEl.textContent = b.author;

                // assemble card
                card.appendChild(coverDiv);
                card.appendChild(titleEl);
                card.appendChild(authorEl);

                container.appendChild(card);
            });
        })();