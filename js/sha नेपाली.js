function shareSite() {
        if (navigator.share) {
            navigator.share({
                title: 'कृष्णवर्स',
                text: 'वैदिक यात्रा',
                url: window.location.href
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href)
                .then(() => alert("लिङ्क क्लिपबोर्डमा प्रतिलिपि गरियो!"))
                .catch(() => alert("लिङ्क प्रतिलिपि गर्न असफल।"));
        }
    }