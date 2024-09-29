document.getElementById("downloadCV").addEventListener("click", function() {
    // Create an invisible download link and trigger it
    const link = document.createElement('a');
    link.href = 'Junior Zwelethu Skosana CV.pdf'; // Update with the correct path to your CV file
    link.download = 'Junior_Zwelethu_Skosana_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show a success message after the download
    setTimeout(function() {
        alert("CV download successful!");
    }, 500);  // Adjust the timing for a smoother experience
});