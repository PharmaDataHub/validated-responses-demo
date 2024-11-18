function showDetails(medicationId) {
    const details = {
        med1: {
            name: "DEMO PARACETAMOL 10 MG/ML",
            description: "Solution for Injection",
            dosage: "1000 MG",
            frequency: "IV | Daily",
            startDate: "2019-10-18",
        },
        med2: {
            name: "Aciclovir 200 mg Comp",
            description: "Oral Tablet",
            dosage: "200 MG",
            frequency: "3x daily",
            startDate: "2020-11-17",
        },
        med3: {
            name: "Acetylsalicylic Acid 100 mg",
            description: "Oral Tablet",
            dosage: "100 MG",
            frequency: "1x daily",
            startDate: "2021-03-30",
        },
    };

    const detailElement = document.getElementById("medication-details");
    if (details[medicationId]) {
        const med = details[medicationId];
        detailElement.innerHTML = `
            <p><strong>Name:</strong> ${med.name}</p>
            <p><strong>Description:</strong> ${med.description}</p>
            <p><strong>Dosage:</strong> ${med.dosage}</p>
            <p><strong>Frequency:</strong> ${med.frequency}</p>
            <p><strong>Start Date:</strong> ${med.startDate}</p>
        `;
    } else {
        detailElement.innerHTML = `<p>No details available for this medication.</p>`;
    }
}
