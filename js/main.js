//Burger

const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".header__list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  headerNav.classList.toggle("active");
});

//Select version
const selectDropDownBtn = document.querySelector(".select-group__dropdown-btn");
const selectDropDownList = document.querySelector(".select-dropdown__list");
const selectDropDownListItem = document.querySelectorAll(
  ".select-dropdown__list-item"
);
const selectInput = document.querySelector(".select-dropdown__input-hidden");

selectDropDownBtn.addEventListener("click", () => {
  selectDropDownList.classList.toggle("select-dropdown__list--visible");
  selectDropDownBtn.classList.toggle("active");
});

selectDropDownListItem.forEach((listItem) => {
  listItem.addEventListener("click", (e) => {
    e.stopPropagation();
    selectDropDownBtn.innerText = listItem.innerText;
    selectDropDownList.classList.remove("select-dropdown__list--visible");
    selectDropDownBtn.classList.remove("active");
    selectDropDownBtn.style.color = "#F2F2F2";
    selectInput.value = listItem.dataset.value;
  });
});

document.addEventListener("click", (e) => {
  if (e.target !== selectDropDownBtn) {
    selectDropDownList.classList.remove("select-dropdown__list--visible");
    selectDropDownBtn.classList.remove("active");
  }
});

//Easy to start

const easyTitles = Array.from(
  document.querySelectorAll(".easy-to-start__info-title")
);

easyTitles.forEach((title) => {
  title.addEventListener("click", easyHandler);
});

function easyHandler(e) {
  e.preventDefault();
  let currentContent = e.target.closest(".easy-to-start__content");
  currentContent.classList.toggle("active");
}

//Accodion

const accordions = Array.from(
  document.querySelectorAll(".questions__accordion-title")
);

accordions.forEach((accordion) => {
  accordion.addEventListener("click", accordionHandler);
});

function accordionHandler(e) {
  e.preventDefault();
  let currentAccordion = e.target.closest(".questions__accordion-title");
  let currentContent = e.target.nextElementSibling;
  let currentAccordionWrapper = e.target.closest(".questions__accordion-item");
  currentAccordion.classList.toggle("active");
  currentAccordionWrapper.classList.toggle("active");
  if (currentAccordion.classList.contains("active"))
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  else currentContent.style.maxHeight = 0;
}

//Language Select
const langDropDownBtn = document.querySelector(".lang-group__dropdown-btn");
const langDropDownList = document.querySelector(".lang-dropdown__list");
const langDropDownListItem = document.querySelectorAll(
  ".lang-dropdown__list-item"
);
const langInput = document.querySelector(".lang-dropdown__input-hidden");

langDropDownBtn.addEventListener("click", () => {
  langDropDownList.classList.toggle("lang-dropdown__list--visible");
  langDropDownBtn.classList.toggle("active");
});

langDropDownListItem.forEach((listItem) => {
  listItem.addEventListener("click", (e) => {
    e.stopPropagation();
    langDropDownBtn.innerText = listItem.innerText.substring(0, 2);
    langDropDownList.classList.remove("lang-dropdown__list--visible");
    langDropDownBtn.classList.remove("active");
    langInput.value = listItem.dataset.value;
  });
});

document.addEventListener("click", (e) => {
  if (e.target !== langDropDownBtn) {
    langDropDownList.classList.remove("lang-dropdown__list--visible");
    langDropDownBtn.classList.remove("active");
  }
});

//Header lang

const langBtns = document.querySelectorAll(".lang");

langBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    langBtns.forEach((e) => {
      e.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

//popup test

const popupTestOpen = document.querySelector(".popup-test-open");

const popupTest = document.querySelector(".popup-wrapper--test");
const popupContainer = document.querySelector(".popup-container");
const popupTestInner = document.querySelector(".popup-inner");
const popupTestSended = document.querySelector(".popup-send");
const popupTestBtnCancel = document.querySelector(".popup-btn-cancel");
const popupTestBtnSend = document.querySelector(".popup-btn-send");
const popupTestBtnClose = document.querySelector(".popup-close");
const popupTestCheckbox = document.getElementById("checkbox-popup-test");

popupTestBtnClose.addEventListener("click", () => {
  popupTest.classList.remove("active");
});

popupTestBtnCancel.addEventListener("click", () => {
  popupTest.classList.remove("active");
});

popupTestCheckbox.addEventListener("click", () => {
  if (popupTestCheckbox.checked) {
    popupTestBtnSend.disabled = false;
    popupTestBtnSend.style.cursor = "pointer";
  } else {
    popupTestBtnSend.disabled = true;
    popupTestBtnSend.style.cursor = "no-drop";
  }
});

popupTestBtnSend.addEventListener("click", () => {
  if (popupTestCheckbox.checked) {
    popupTestSended.classList.add("active");
    popupTestInner.classList.remove("active");
  }
});

popupTestOpen.addEventListener("click", () => {
  popupTest.classList.add("active");
});

// document.addEventListener("click", (e) => {
//   if (e.target !== popupTest) {
//     popupTest.classList.remove("active");
//   }
// });

//Select version popup
const selectPopupTestDropDownBtn = document.querySelector(".select-group-popup__dropdown-btn");
const selectPopupTestDropDownList = document.querySelector(".select-dropdown-popup__list");
const selectPopupTestDropDownListItem = document.querySelectorAll(".select-dropdown-popup__list-item");
const selectPopupTestInput = document.querySelector(".select-dropdown-popup__input-hidden");

selectPopupTestDropDownBtn.addEventListener('click', ()=>{
    selectPopupTestDropDownBtn.classList.toggle('show');
    selectPopupTestDropDownList.classList.toggle('show-list')
})

selectPopupTestDropDownListItem.forEach((listItem) => {
  listItem.addEventListener("click", (e) => {
    e.stopPropagation();
    selectPopupTestDropDownBtn.innerText = listItem.innerText;
    selectPopupTestDropDownList.classList.remove(
      "show-list"
    );
    selectPopupTestDropDownBtn.classList.remove("show");
    selectPopupTestDropDownBtn.style.color = "#F2F2F2";
    selectPopupTestInput.value = listItem.dataset.value;
  });
});

document.addEventListener("click", (e) => {
  if (e.target !== selectDropDownBtn) {
    selectPopupTestDropDownList.classList.remove(
      "select-dropdown-popup__list--visible"
    );
    selectPopupTestDropDownBtn.classList.remove("active");
  }
});

//Select version popup help

const selectPopupHelpDropDownBtn = document.querySelector(
  ".select-group-popup-help__dropdown-btn"
);
const selectPopupHelpDropDownList = document.querySelector(
  ".select-dropdown-popup-help__list"
);
const selectPopupHelpDropDownListItem = document.querySelectorAll(
  ".select-dropdown-popup-help__list-item"
);
const selectPopupHelpInput = document.querySelector(
  ".select-dropdown-popup-help__input-hidden"
);

selectPopupHelpDropDownBtn.addEventListener("click", () => {
  selectPopupHelpDropDownList.classList.toggle(
    "select-dropdown-popup-help__list--visible"
  );
  selectPopupHelpDropDownBtn.classList.toggle("active");
});

selectPopupHelpDropDownListItem.forEach((listItem) => {
  listItem.addEventListener("click", (e) => {
    e.stopPropagation();
    selectPopupHelpDropDownBtn.innerText = listItem.innerText;
    selectPopupHelpDropDownList.classList.remove(
      "select-dropdown-popup-help__list--visible"
    );
    selectPopupHelpDropDownBtn.classList.remove("active");
    selectPopupHelpDropDownBtn.style.color = "#F2F2F2";
    selectPopupHelpInput.value = listItem.dataset.value;
  });
});

document.addEventListener("click", (e) => {
  if (e.target !== selectDropDownBtn) {
    selectPopupTestDropDownList.classList.remove(
      "select-dropdown-popup__list--visible"
    );
    selectPopupTestDropDownBtn.classList.remove("active");
  }
});

//popup help

const popupHelpOpen = document.querySelector('.popup-help-open')

const popupHelp = document.querySelector(".popup-wrapper--help");
const popupHelpInner = document.querySelector(".popup-inner--help");
const popupHelpSended = document.querySelector(".popup-send--help");
const popupHelpBtnCancel = document.querySelector(".popup-btn-cancel--help");
const popupHelpBtnSend = document.querySelector(".popup-btn-send--help");
const popupHelpBtnClose = document.querySelector(".popup-close--help");
const popupHelpCheckbox = document.getElementById("checkbox-popup-help");

popupHelpBtnClose.addEventListener("click", () => {
  popupHelp.classList.remove("active");
});

popupHelpBtnCancel.addEventListener("click", () => {
  popupHelp.classList.remove("active");
});

popupHelpCheckbox.addEventListener("click", () => {
  if (popupHelpCheckbox.checked) {
    popupHelpBtnSend.disabled = false;
    popupHelpBtnSend.style.cursor = "pointer";
  } else {
    popupHelpBtnSend.disabled = true;
    popupHelpBtnSend.style.cursor = "no-drop";
  }
});

popupHelpBtnSend.addEventListener("click", () => {
  if (popupHelpCheckbox.checked) {
    popupHelpSended.classList.add("active");
    popupHelpInner.classList.remove("active");
  }
});

popupHelpOpen.addEventListener('click', ()=>{
    popupHelp.classList.add('active');
});

const textAreaPopup = document.querySelector(".input-popup-area");
const textAreaError = document.querySelector(".textarea-error");

function limitAreaCheck() {
  if (textAreaPopup.value.length == 500) {
    textAreaPopup.classList.add("active");
    textAreaError.classList.add("active");
  } else {
    textAreaError.classList.remove("active");
    textAreaPopup.classList.remove("active");
  }
}

//Swiper

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
