const cv = document.querySelector(".main-container");
const generatePDF = document.querySelector(".generate-pdf");
const agePlaceholder = document.querySelector(".age");
const birthDate = "1992/01/19";

const options = {
    margin:       0,
    filename:     'Mihai-Claudiu Stoica.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a3', orientation: 'portrait' }
};

function hideElements() {
    generatePDF.style.display = "none";
}

function showElements() {
    generatePDF.style.display = "";
}

generatePDF.addEventListener('click', () => {
    hideElements();
    html2pdf(cv, options);
    setTimeout(() => showElements(), 5000);
})

function calculateAge() {
    var ageDifMs = Date.now() - new Date(birthDate).getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

agePlaceholder.innerHTML = `${birthDate.split("/").reverse().join("/")} (${calculateAge()})`;