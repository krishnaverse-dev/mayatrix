function shareSite() {
        if (navigator.share) {
            navigator.share({
                title: 'krishnaverse',
                text: 'vedic journey',
                url: window.location.href
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(window.location.href)
                .then(() => alert("Link copied to clipboard!"))
                .catch(() => alert("Failed to copy link."));
        }
    }