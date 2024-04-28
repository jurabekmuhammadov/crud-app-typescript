"use strict";
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
