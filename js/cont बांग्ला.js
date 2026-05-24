function sendEmail() {
    const subject = encodeURIComponent("বিষয়: লিখুন");
    const body = encodeURIComponent("প্রণাম, সুন্দরসাথ জি");
    const email = "mayatrixnepal@gmail.com";
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
