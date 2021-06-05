window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const page = this.document.getElementById("page");
            console.log(page);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 1.5 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(page).set(opt).save();
        })
}

function generatePDF(){
    const page = document.getElementById("page");
    html2pdf().from(page).save();
}