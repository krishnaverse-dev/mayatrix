function sendEmail() {
    const subject = encodeURIComponent("subject: write");
    const body = encodeURIComponent("pranam, sundarsath ji");
    const email = "bramhaatma@gmail.com";
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}