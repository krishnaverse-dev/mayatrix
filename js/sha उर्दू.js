function shareSite() {
        if (navigator.share) {
            navigator.share({
                title: 'کرشنورس',
                text: 'ویدک سفر',
                url: window.location.href
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href)
                .then(() => alert("لنک کلپ بورڈ پر کاپی ہو گیا!"))
                .catch(() => alert("لنک کاپی کرنے میں ناکام۔"));
        }
    }