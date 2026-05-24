function shareSite() {
        if (navigator.share) {
            navigator.share({
                title: 'कृष्णवर्स',
                text: 'वैदिक यात्रा',
                url: window.location.href
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href)
                .then(() => alert("लिंक क्लिपबोर्ड पर कॉपी हो गया!"))
                .catch(() => alert("लिंक कॉपी करने में विफल।"));
        }
    }