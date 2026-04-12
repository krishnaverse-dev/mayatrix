function sendEmail() {
    const subject = encodeURIComponent("موضوع: لکھیں");
    const body = encodeURIComponent("آداب، سندرساتھ جی");
    const email = "bramhaatma@gmail.com";
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}