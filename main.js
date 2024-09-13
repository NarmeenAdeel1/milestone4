var _a, _b, _c;
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById("toggleSkillsButton");
    var skillsSection = document.getElementById("Skills");
    toggleButton.addEventListener('click', function () {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    });
});
(_a = document.getElementById('profileImage')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function (e) {
    var _a;
    var input = e.target;
    var file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
    var preview = document.getElementById('preview');
    if (file)
        preview.src = URL.createObjectURL(file);
});
(_b = document.getElementById('generateResumeForm')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var form = document.getElementById('ResumeForm');
    if (form)
        form.requestSubmit();
});
(_c = document.getElementById("ResumeForm")) === null || _c === void 0 ? void 0 : _c.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameElement = document.getElementById("Name");
    var EmailElement = document.getElementById("Email");
    var PhoneNumberElement = document.getElementById("PhoneNumber");
    var EducationElement = document.getElementById("Education");
    var ExperienceElement = document.getElementById("Experience");
    var SkillsElement = document.getElementById("Skills");
    var previewImage = document.getElementById('preview').src;
    if (nameElement && EmailElement && PhoneNumberElement && EducationElement && ExperienceElement && SkillsElement) {
        var name_1 = nameElement.value;
        var Email = EmailElement.value;
        var PhoneNumber = PhoneNumberElement.value;
        var Education = EducationElement.value;
        var Experience = ExperienceElement.value;
        var Skills = SkillsElement.value;
        console.log({ name: name_1, Email: Email, PhoneNumber: PhoneNumber, Education: Education, Experience: Experience, Skills: Skills });
        var ResumeGenerator = "\n            <h2>Dynamic Resume</h2>\n            <img src=\"".concat(previewImage, "\" alt=\"Profile Image\" style=\"width: 150px; height: 150px; border-radius: 50%;\"><br>\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span id=\"edit-Email\" class=\"editable\">").concat(Email, "</span></p>\n            <p><strong>Number:</strong> <span id=\"edit-PhoneNumber\" class=\"editable\">").concat(PhoneNumber, "</span></p>\n            <h3>Education</h3>\n            <p id=\"edit-Education\" class=\"editable\">").concat(Education, "</p>\n            <h3>Experience</h3>\n            <p id=\"edit-Experience\" class=\"editable\">").concat(Experience, "</p>\n            <h3>Skills</h3>\n            <p id=\"edit-Skills\" class=\"editable\">").concat(Skills, "</p>");
        var ResumeGeneratorElement = document.getElementById("ResumeGenerator");
        if (ResumeGeneratorElement) {
            ResumeGeneratorElement.innerHTML = ResumeGenerator;
        }
        else {
            console.error("The Resume Generator Element is Missing");
        }
        makeEditable();
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        var _a;
        var currentElement = element;
        var currentValue = currentElement.textContent || "";
        var input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;
        input.classList.add("editing-input");
        input.addEventListener("blur", function () {
            currentElement.textContent = input.value;
            currentElement.style.display = "inline";
            input.remove();
        });
        currentElement.style.display = "none";
        (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
        input.focus();
    });
}
