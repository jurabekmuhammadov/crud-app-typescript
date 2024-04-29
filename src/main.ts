let originalData: any[] = localStorage.getItem('users') !== null ? JSON.parse(localStorage.getItem('users')!) : [];
let getData: any[] = [...originalData];
let isEdit: boolean = false;
let editId: number;
let arrayLength: number = 0;
let tableSize: number = 10;
let startIndex: number = 1;
let endIndex: number = 0;
let currentIndex: number = 1;
let maxIndex: number = 0;
let isMarried_filter: string = "all";

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
    ; if (form instanceof HTMLFormElement) {
        form.reset();
    }

});

if (uploadimg instanceof HTMLInputElement && imgInput instanceof HTMLImageElement) {
    uploadimg.onchange = function () {
        const file = uploadimg.files?.[0];
        if (file && file.size < 1000000) {
            const fileReader = new FileReader();
            fileReader.onload = function (e) {
                const imgUrl = e.target?.result;
                if (imgUrl) imgInput.src = imgUrl.toString();
            };
            fileReader.readAsDataURL(file);
        } else {
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
                let isM: boolean;
                if (staff.isMarried === true || staff.isMarried === "on" || staff.isMarried === "true") {
                    isM = true
                } else if (staff.isMarried === "off" || staff.isMarried === undefined || staff.isMarried === "false") {
                    isM = false
                } else {
                    isM = false
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
    } else {
        if (userInfo instanceof HTMLElement) {
            userInfo.innerHTML = `<tr class="employeeDetails"><td class="empty" colspan="11" align="center">No data available in table</td></tr>`;
        }
        if (table instanceof HTMLElement) {
            table.style.minWidth = "1500px";
        }
    }
}
showInfo();

function readInfo(
    pic: string,
    FName: string,
    Lname: string,
    BirthDate: string,
    Address: string,
    Position: string,
    Email: string,
    Salary: string,
    IsMarried: string,

) {
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
        } else if (IsMarried === "off" || IsMarried === "undefined") {
            isMarried.checked = false;
        } else {
            isMarried.checked = false
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
        formInputFields.forEach((input: any) => {
            input.disabled = true;
        });
    }
    if (imgHolder instanceof HTMLElement) {
        imgHolder.style.pointerEvents = "none";
    }
}

function editInfo(
    id: number,
    pic: string,
    FName: string,
    Lname: string,
    BirthDate: string,
    Address: string,
    Position: string,
    Email: string,
    Salary: string,
    IsMarried: string,
) {
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
        } else if (IsMarried === "off" || IsMarried === "undefined") {
            isMarried.checked = false;
        } else {
            isMarried.checked = false
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
        formInputFields.forEach((input: any) => {
            input.disabled = false;
        });
    }
    if (imgHolder instanceof HTMLElement) {
        imgHolder.style.pointerEvents = "auto";
    }
}

function deleteInfo(index: number) {
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
            } else if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }

            showInfo();
            highlightIndexBtn();
            displayIndexBtn();

            var nextBtn = document.querySelector('.next') as HTMLButtonElement | null;
            var prevBtn = document.querySelector('.prev') as HTMLButtonElement | null;

            if (nextBtn) {
                if (Math.floor(maxIndex) > currentIndex) {
                    nextBtn.classList.add("act");
                } else {
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

form.addEventListener('submit', (e: Event) => {
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
    } else {
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

    var nextBtn = document.querySelector(".next") as HTMLElement | null;
    var prevBtn = document.querySelector(".prev") as HTMLElement | null;
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

if (isMarriedFilter instanceof HTMLSelectElement) {
    isMarriedFilter.addEventListener('change', () => {
        const selectedValue = isMarriedFilter.value;
        isMarried_filter = selectedValue;
        applyFilters();
    });
};

function applyFilters() {
    let filteredData = originalData;

    if (isMarried_filter !== "all") {
        const isMarriedBool = isMarried_filter === "true";
        filteredData = filteredData.filter((item: any) => {
            let isMarried: boolean;
            if (item.isMarried === true) {
                isMarried = true
            } else if (item.isMarried === "on") {
                isMarried = true
            } else if (item.isMarried === "true") {
                isMarried = true
            } else if (item.isMarried === false) {
                isMarried = false
            } else if (item.isMarried === "off") {
                isMarried = false
            } else if (item.isMarried === "false") {
                isMarried = false
            } else {
                isMarried = true;
            }
            return isMarried === isMarriedBool;
        });
    }

    const searchTerm = filterData.value.toLowerCase().trim();
    if (searchTerm !== "") {
        filteredData = filteredData.filter((item: any) => {
            const fullName = (item.fName + " " + item.lName).toLowerCase();
            const email = item.email.toLowerCase();
            return fullName.includes(searchTerm) || email.includes(searchTerm);
        });
    }

    getData = filteredData;
    currentIndex = 1;
    startIndex = 1;
    displayIndexBtn();
}


if (filterData instanceof HTMLInputElement) {
    filterData.addEventListener("input", () => {
        const searchTerm = filterData.value.toLowerCase().trim();

        if (searchTerm !== "") {
            const filteredData = originalData.filter((item: any) => {
                const fullName = (item.fName + " " + item.lName).toLowerCase();
                const email = (item.email).toLowerCase();

                return (
                    fullName.includes(searchTerm) ||
                    email.includes(searchTerm)
                );
            });

            getData = filteredData;
        } else {
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