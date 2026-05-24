function shareSite() {
        if (navigator.share) {
            navigator.share({
                title: 'কৃষ্ণবর্ষ',
                text: 'বৈদিক যাত্রা',
                url: window.location.href
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href)
                .then(() => alert("লিঙ্ক ক্লিপবোর্ডে কপি হয়েছে!"))
                .catch(() => alert("লিঙ্ক কপি করতে ব্যর্থ।"));
        }
    }