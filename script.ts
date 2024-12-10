// Get references to the form and display area
const Form = document.getElementById("resume-form") as HTMLFormElement;
const ResumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

// Handle form submission
Form.addEventListener("submit", (event: Event) => {
    event.preventDefault();   // prevent page reload

    // Collect input value
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value

    // Generate the resume content dynamically
    const resumeHTML = `
    <h2><b> Editable Resume</b></h2>
    <h3>Personal Informational</h3>
    <p><b>Name:</b><span Contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span Contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span Contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p <span Contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <p <span Contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p<span Contenteditable="true" >${skills}</p>
    `;

    // Display the generated resume 
    if(ResumeDisplayElement){
        ResumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('The resume display element is missing.');
    }
});