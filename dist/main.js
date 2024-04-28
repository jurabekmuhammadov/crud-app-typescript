"use strict";
let originalData = localStorage.getItem('users') !== null ? JSON.parse(localStorage.getItem('users')) : [];
let getData = [...originalData];
let isEdit = false;
let editId;
let arrayLength = 0;
let tableSize = 10;
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
function showInfo() {
    document.querySelectorAll(".employeeDetails").forEach(info => info.remove());
    const tab_start = startIndex - 1;
    const tab_end = endIndex;
    if (getData.length > 0) {
        for (let i = tab_start; i < tab_end; i++) {
            const staff = getData[i];
            if (staff) {
                let isM;
                if (staff.isMarried === true || staff.isMarried === "on" || staff.isMarried === "true") {
                    isM = true;
                }
                else if (staff.isMarried === "off" || staff.isMarried === undefined || staff.isMarried === "false") {
                    isM = false;
                }
                else {
                    isM = false;
                }
                const createElement = `<tr class="employeeDetails">
                <td>${i + 1}</td>
                <td><img src="${staff.picture}" alt="" width="40" height="40"></td>
                <td>${staff.fName + " " + staff.lName}</td>
                <td>${staff.birthDate.split("T")[0]}</td>
                <td>${staff.address}</td>
                <td>${staff.position}</td>
                <td>${staff.email}</td>
                <td>${staff.salary}</td>
                <td>${isM}</td>
                <td>
                    <button onclick="readInfo('${staff.picture}', '${staff.fName}', '${staff.lName}', '${staff.birthDate.split("T")[0]}', '${staff.address}', '${staff.position}', '${staff.email}', '${staff.salary}', '${staff.isMarried}')"><i class="fa-regular fa-eye"></i></button>

                    <button onclick="editInfo('${i}', '${staff.picture}', '${staff.fName}', '${staff.lName}', '${staff.birthDate.split("T")[0]}', '${staff.address}', '${staff.position}', '${staff.email}', '${staff.salary}', '${staff.isMarried}')"><i class="fa-regular fa-pen-to-square"></i></button>

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
            table.style.minWidth = "1500px";
        }
    }
}
showInfo();
function readInfo(pic, FName, Lname, BirthDate, Address, Position, Email, Salary, IsMarried) {
    console.log(typeof IsMarried);
    if (imgInput instanceof HTMLImageElement) {
        imgInput.src = pic;
    }
    if (fName instanceof HTMLInputElement) {
        fName.value = FName;
    }
    if (lName instanceof HTMLInputElement) {
        lName.value = Lname;
    }
    if (address instanceof HTMLInputElement) {
        address.value = Address;
    }
    if (birthDate instanceof HTMLInputElement) {
        birthDate.value = BirthDate;
    }
    if (position instanceof HTMLInputElement) {
        position.value = Position;
    }
    if (salary instanceof HTMLInputElement) {
        salary.value = Salary;
    }
    if (email instanceof HTMLInputElement) {
        email.value = Email;
    }
    if (isMarried instanceof HTMLInputElement) {
        if (IsMarried === "true" || IsMarried === "on") {
            isMarried.checked = true;
        }
        else if (IsMarried === "off" || IsMarried === "undefined") {
            isMarried.checked = false;
        }
        else {
            isMarried.checked = false;
        }
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
function editInfo(id, pic, FName, Lname, BirthDate, Address, Position, Email, Salary, IsMarried) {
    isEdit = true;
    editId = id;
    const originalIndex = originalData.findIndex(item => item.id === id);
    originalData[originalIndex] = {
        id: id,
        picture: pic,
        fName: FName,
        lName: Lname,
        birthDate: BirthDate,
        address: Address,
        position: Position,
        salary: Salary,
        email: Email,
        isMarried: IsMarried,
    };
    if (imgInput instanceof HTMLImageElement) {
        imgInput.src = pic;
    }
    if (fName instanceof HTMLInputElement) {
        fName.value = FName;
    }
    if (lName instanceof HTMLInputElement) {
        lName.value = Lname;
    }
    if (birthDate instanceof HTMLInputElement) {
        birthDate.value = BirthDate;
    }
    if (address instanceof HTMLInputElement) {
        address.value = Address;
    }
    if (position instanceof HTMLInputElement) {
        position.value = Position;
    }
    if (salary instanceof HTMLInputElement) {
        salary.value = Salary;
    }
    if (email instanceof HTMLInputElement) {
        email.value = Email;
    }
    if (isMarried instanceof HTMLInputElement) {
        if (IsMarried === "true" || IsMarried === "on") {
            isMarried.checked = true;
        }
        else if (IsMarried === "off" || IsMarried === "undefined") {
            isMarried.checked = false;
        }
        else {
            isMarried.checked = false;
        }
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
            localStorage.setItem("users", JSON.stringify(originalData));
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
        birthDate: birthDate instanceof HTMLInputElement ? birthDate.value : "",
        address: address instanceof HTMLInputElement ? address.value : "",
        position: position instanceof HTMLInputElement ? position.value : "",
        salary: salary instanceof HTMLInputElement ? salary.value : "",
        email: email instanceof HTMLInputElement ? email.value : "",
        isMarried: isMarried instanceof HTMLInputElement ? isMarried.checked : "",
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
    localStorage.setItem('users', JSON.stringify(originalData));
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
                return (fullName.includes(searchTerm));
            });
            getData = filteredData;
        }
        else {
            const userProfileString = localStorage.getItem('users');
            const userProfileData = userProfileString !== null ? JSON.parse(userProfileString) : [];
            getData = Array.isArray(userProfileData) ? userProfileData : [];
        }
        currentIndex = 1;
        startIndex = 1;
        displayIndexBtn();
    });
}
displayIndexBtn();
