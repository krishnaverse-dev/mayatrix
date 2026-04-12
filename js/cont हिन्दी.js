function sendEmail() {
    const subject = encodeURIComponent("विषय: लिखें");
    const body = encodeURIComponent("प्रणाम, सुंदरसाथ जी");
    const email = "bramhaatma@gmail.com";
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}