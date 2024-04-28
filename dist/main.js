"use strict";
const newMemberAddBtn = document.querySelector('.addMemberBtn');
const darkBg = document.querySelector('.dark_bg');
const popupForm = document.querySelector('.popup');
const crossBtn = document.querySelector('.closeBtn');
const submitBtn = document.querySelector('.submitBtn');
const modalTitle = document.querySelector('.modalTitle');
const popupFooter = document.querySelector('.popupFooter');
const imgInput = document.querySelector('.img');
const imgHolder = document.querySelector('.imgholder');
const form = document.querySelector('form');
const formInputFields = document.querySelectorAll('form input');
const uploadimg = document.querySelector("#uploadimg");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const age = document.getElementById("age");
const city = document.getElementById("city");
const position = document.getElementById("position");
const salary = document.getElementById("salary");
const sDate = document.getElementById("sDate");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const entries = document.querySelector(".showEntries");
const tabSize = document.getElementById("table_size");
const userInfo = document.querySelector(".userInfo");
const table = document.querySelector("table");
const filterData = document.getElementById("search");
let originalData = localStorage.getItem('userProfile') !== null ? JSON.parse(localStorage.getItem('userProfile')) : [];
let getData = [...originalData];
let isEdit = false;
let editId;
let arrayLength = 0;
let tableSize = 5;
let startIndex = 1;
let endIndex = 0;
let currentIndex = 1;
let maxIndex = 0;
showInfo();
newMemberAddBtn.addEventListener('click', () => {
    isEdit = false;
    submitBtn.innerHTML = "Submit";
    modalTitle.innerHTML = "Fill the Form";
    if (popupFooter instanceof HTMLElement) {
        popupFooter.style.display = "block";
    }
    if (imgInput instanceof HTMLImageElement) {
        imgInput.src = "./img/pic1.png";
    }
    darkBg.classList.add('active');
    popupForm.classList.add('active');
});
crossBtn.addEventListener('click', () => {
    darkBg.classList.remove('active');
    popupForm.classList.remove('active');
    ;
    if (form instanceof HTMLFormElement) {
        form.reset();
    }
});
if (uploadimg instanceof HTMLInputElement && imgInput instanceof HTMLImageElement) {
    uploadimg.onchange = function () {
        var _a;
        const file = (_a = uploadimg.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file && file.size < 1000000) {
            const fileReader = new FileReader();
            fileReader.onload = function (e) {
                var _a;
                const imgUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                if (imgUrl)
                    imgInput.src = imgUrl.toString();
            };
            fileReader.readAsDataURL(file);
        }
        else {
            alert("This file is too large!");
        }
    };
}
function preLoadCalculations() {
    let array = getData;
    arrayLength = array.length;
    maxIndex = arrayLength / tableSize;
    if ((arrayLength % tableSize) > 0) {
        maxIndex++;
    }
}
function displayIndexBtn() {
    preLoadCalculations();
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = "";
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.classList.add('prev');
    prevButton.addEventListener('click', prev);
    pagination.appendChild(prevButton);
    for (let i = 1; i <= maxIndex; i++) {
        const button = document.createElement('button');
        button.textContent = String(i);
        button.setAttribute('index', String(i));
        button.addEventListener('click', () => paginationBtn(i));
        pagination.appendChild(button);
    }
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('next');
    nextButton.addEventListener('click', next);
    pagination.appendChild(nextButton);
    highlightIndexBtn();
}
function highlightIndexBtn() {
    startIndex = ((currentIndex - 1) * tableSize) + 1;
    endIndex = (startIndex + tableSize) - 1;
    if (endIndex > arrayLength) {
        endIndex = arrayLength;
    }
    if (maxIndex >= 2) {
        const nextBtn = document.querySelector(".next");
        if (nextBtn) {
            nextBtn.classList.add("act");
        }
    }
    if (entries instanceof Element) {
        entries.textContent = `Showing ${startIndex} to ${endIndex} of ${arrayLength} entries`;
    }
    const paginationBtns = document.querySelectorAll('.pagination button');
    paginationBtns.forEach(btn => {
        if (btn instanceof HTMLButtonElement) {
            btn.classList.remove('active');
            if (btn.getAttribute('index') === currentIndex.toString()) {
                btn.classList.add('active');
            }
        }
    });
    showInfo();
}
function showInfo() {
    document.querySelectorAll(".employeeDetails").forEach(info => info.remove());
    const tab_start = startIndex - 1;
    const tab_end = endIndex;
    if (getData.length > 0) {
        for (let i = tab_start; i < tab_end; i++) {
            const staff = getData[i];
            if (staff) {
                const createElement = `<tr class="employeeDetails">
                <td>${i + 1}</td>
                <td><img src="${staff.picture}" alt="" width="40" height="40"></td>
                <td>${staff.fName + " " + staff.lName}</td>
                <td>${staff.ageVal}</td>
                <td>${staff.cityVal}</td>
                <td>${staff.positionVal}</td>
                <td>${staff.salaryVal}</td>
                <td>${staff.sDateVal}</td>
                <td>${staff.emailVal}</td>
                <td>${staff.phoneVal}</td>
                <td>
                    <button onclick="readInfo('${staff.picture}', '${staff.fName}', '${staff.lName}', '${staff.ageVal}', '${staff.cityVal}', '${staff.positionVal}', '${staff.salaryVal}', '${staff.sDateVal}', '${staff.emailVal}', '${staff.phoneVal}')"><i class="fa-regular fa-eye"></i></button>

                    <button onclick="editInfo('${i}', '${staff.picture}', '${staff.fName}', '${staff.lName}', '${staff.ageVal}', '${staff.cityVal}', '${staff.positionVal}', '${staff.salaryVal}', '${staff.sDateVal}', '${staff.emailVal}', '${staff.phoneVal}')"><i class="fa-regular fa-pen-to-square"></i></button>

                    <button onclick="deleteInfo(${i})"><i class="fa-regular fa-trash-can"></i></button>
                </td>
            </tr>`;
                if (userInfo instanceof HTMLElement) {
                    userInfo.innerHTML += createElement;
                }
                if (table instanceof HTMLElement) {
                    table.style.minWidth = "1400px";
                }
            }
        }
    }
    else {
        if (userInfo instanceof HTMLElement) {
            userInfo.innerHTML = `<tr class="employeeDetails"><td class="empty" colspan="11" align="center">No data available in table</td></tr>`;
        }
        if (table instanceof HTMLElement) {
            table.style.minWidth = "1400px";
        }
    }
}
showInfo();
function readInfo(pic, fname, lname, Age, City, Position, Salary, SDate, Email, Phone) {
    if (imgInput instanceof HTMLImageElement) {
        imgInput.src = pic;
    }
    if (fName instanceof HTMLInputElement) {
        fName.value = fname;
    }
    if (lName instanceof HTMLInputElement) {
        lName.value = lname;
    }
    if (age instanceof HTMLInputElement) {
        age.value = Age;
    }
    if (city instanceof HTMLInputElement) {
        city.value = City;
    }
    if (position instanceof HTMLInputElement) {
        position.value = Position;
    }
    if (salary instanceof HTMLInputElement) {
        salary.value = Salary;
    }
    if (sDate instanceof HTMLInputElement) {
        sDate.value = SDate;
    }
    if (email instanceof HTMLInputElement) {
        email.value = Email;
    }
    if (phone instanceof HTMLInputElement) {
        phone.value = Phone;
    }
    if (darkBg instanceof HTMLElement) {
        darkBg.classList.add('active');
    }
    if (popupForm instanceof HTMLElement) {
        popupForm.classList.add('active');
    }
    if (popupFooter instanceof HTMLElement) {
        popupFooter.style.display = "none";
    }
    if (modalTitle instanceof HTMLElement) {
        modalTitle.innerHTML = "Profile";
    }
    if (formInputFields instanceof NodeList) {
        formInputFields.forEach((input) => {
            input.disabled = true;
        });
    }
    if (imgHolder instanceof HTMLElement) {
        imgHolder.style.pointerEvents = "none";
    }
}
function editInfo(id, pic, fname, lname, Age, City, Position, Salary, SDate, Email, Phone) {
    isEdit = true;
    editId = id;
    const originalIndex = originalData.findIndex(item => item.id === id);
    originalData[originalIndex] = {
        id: id,
        picture: pic,
        fName: fname,
        lName: lname,
        ageVal: Age,
        cityVal: City,
        positionVal: Position,
        salaryVal: Salary,
        sDateVal: SDate,
        emailVal: Email,
        phoneVal: Phone
    };
    if (imgInput instanceof HTMLImageElement) {
        imgInput.src = pic;
    }
    if (fName instanceof HTMLInputElement) {
        fName.value = fname;
    }
    if (lName instanceof HTMLInputElement) {
        lName.value = lname;
    }
    if (age instanceof HTMLInputElement) {
        age.value = Age;
    }
    if (city instanceof HTMLInputElement) {
        city.value = City;
    }
    if (position instanceof HTMLInputElement) {
        position.value = Position;
    }
    if (salary instanceof HTMLInputElement) {
        salary.value = Salary;
    }
    if (sDate instanceof HTMLInputElement) {
        sDate.value = SDate;
    }
    if (email instanceof HTMLInputElement) {
        email.value = Email;
    }
    if (phone instanceof HTMLInputElement) {
        phone.value = Phone;
    }
    if (darkBg instanceof HTMLElement) {
        darkBg.classList.add('active');
    }
    if (popupForm instanceof HTMLElement) {
        popupForm.classList.add('active');
    }
    if (popupFooter instanceof HTMLElement) {
        popupFooter.style.display = "block";
    }
    if (modalTitle instanceof HTMLElement) {
        modalTitle.innerHTML = "Update the Form";
    }
    if (submitBtn instanceof HTMLElement) {
        submitBtn.innerHTML = "Update";
    }
    if (formInputFields instanceof NodeList) {
        formInputFields.forEach((input) => {
            input.disabled = false;
        });
    }
    if (imgHolder instanceof HTMLElement) {
        imgHolder.style.pointerEvents = "auto";
    }
}
function deleteInfo(index) {
    if (confirm("Are you sure you want to delete?")) {
        if (originalData instanceof Array) {
            originalData.splice(index, 1);
            localStorage.setItem("userProfile", JSON.stringify(originalData));
            getData = [...originalData];
            preLoadCalculations();
            if (getData.length === 0) {
                currentIndex = 1;
                startIndex = 1;
                endIndex = 0;
            }
            else if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }
            showInfo();
            highlightIndexBtn();
            displayIndexBtn();
            var nextBtn = document.querySelector('.next');
            var prevBtn = document.querySelector('.prev');
            if (nextBtn) {
                if (Math.floor(maxIndex) > currentIndex) {
                    nextBtn.classList.add("act");
                }
                else {
                    nextBtn.classList.remove("act");
                }
            }
            if (prevBtn) {
                if (currentIndex > 1) {
                    prevBtn.classList.add('act');
                }
            }
        }
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const information = {
        id: Date.now(),
        picture: imgInput instanceof HTMLImageElement ? (imgInput.src || "./img/pic1.png") : "./img/pic1.png",
        fName: fName instanceof HTMLInputElement ? fName.value : "",
        lName: lName instanceof HTMLInputElement ? lName.value : "",
        ageVal: age instanceof HTMLInputElement ? age.value : "",
        cityVal: city instanceof HTMLInputElement ? city.value : "",
        positionVal: position instanceof HTMLInputElement ? position.value : "",
        salaryVal: salary instanceof HTMLInputElement ? salary.value : "",
        sDateVal: sDate instanceof HTMLInputElement ? sDate.value : "",
        emailVal: email instanceof HTMLInputElement ? email.value : "",
        phoneVal: phone instanceof HTMLInputElement ? phone.value : ""
    };
    if (!isEdit) {
        if (originalData instanceof Array) {
            originalData.unshift(information);
        }
    }
    else {
        if (originalData instanceof Array) {
            originalData[editId] = information;
        }
    }
    getData = [...originalData];
    localStorage.setItem('userProfile', JSON.stringify(originalData));
    if (submitBtn instanceof HTMLElement) {
        submitBtn.innerHTML = "Submit";
    }
    if (modalTitle instanceof HTMLElement) {
        modalTitle.innerHTML = "Fill the Form";
    }
    if (darkBg instanceof HTMLElement) {
        darkBg.classList.remove('active');
    }
    if (popupForm instanceof HTMLElement) {
        popupForm.classList.remove('active');
    }
    if (form instanceof HTMLFormElement) {
        form.reset();
    }
    if (typeof highlightIndexBtn === 'function') {
        highlightIndexBtn();
    }
    if (typeof displayIndexBtn === 'function') {
        displayIndexBtn();
    }
    if (typeof showInfo === 'function') {
        showInfo();
    }
    var nextBtn = document.querySelector(".next");
    var prevBtn = document.querySelector(".prev");
    if (nextBtn) {
        if (Math.floor(maxIndex) > currentIndex) {
            nextBtn.classList.add("act");
        }
        else {
            nextBtn.classList.remove("act");
        }
    }
    if (prevBtn) {
        if (currentIndex > 1) {
            prevBtn.classList.add("act");
        }
    }
});
function next() {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    if (currentIndex <= maxIndex - 1) {
        currentIndex++;
        if (prevBtn) {
            prevBtn.classList.add("act");
        }
        highlightIndexBtn();
    }
    if (currentIndex > maxIndex - 1 && nextBtn) {
        nextBtn.classList.remove("act");
    }
}
function prev() {
    const prevBtn = document.querySelector('.prev');
    if (currentIndex > 1) {
        currentIndex--;
        if (prevBtn) {
            prevBtn.classList.add("act");
        }
        highlightIndexBtn();
    }
    if (currentIndex < 2 && prevBtn) {
        prevBtn.classList.remove("act");
    }
}
function paginationBtn(i) {
    currentIndex = i;
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    highlightIndexBtn();
    if (currentIndex > maxIndex - 1) {
        if (nextBtn) {
            nextBtn.classList.remove('act');
        }
    }
    else {
        if (nextBtn) {
            nextBtn.classList.add("act");
        }
    }
    if (currentIndex > 1) {
        if (prevBtn) {
            prevBtn.classList.add("act");
        }
    }
    if (currentIndex < 2 && prevBtn) {
        prevBtn.classList.remove("act");
    }
}
if (tabSize instanceof HTMLSelectElement) {
    tabSize.addEventListener('change', () => {
        const selectedValue = parseInt(tabSize.value);
        tableSize = selectedValue;
        currentIndex = 1;
        startIndex = 1;
        displayIndexBtn();
    });
}
if (filterData instanceof HTMLInputElement) {
    filterData.addEventListener("input", () => {
        const searchTerm = filterData.value.toLowerCase().trim();
        if (searchTerm !== "") {
            const filteredData = originalData.filter((item) => {
                const fullName = (item.fName + " " + item.lName).toLowerCase();
                const city = item.cityVal.toLowerCase();
                const position = item.positionVal.toLowerCase();
                return (fullName.includes(searchTerm) ||
                    city.includes(searchTerm) ||
                    position.includes(searchTerm));
            });
            getData = filteredData;
        }
        else {
            const userProfileString = localStorage.getItem('userProfile');
            const userProfileData = userProfileString !== null ? JSON.parse(userProfileString) : [];
            getData = Array.isArray(userProfileData) ? userProfileData : [];
        }
        currentIndex = 1;
        startIndex = 1;
        displayIndexBtn();
    });
}
else {
    console.error("filterData is not an input element");
}
displayIndexBtn();
