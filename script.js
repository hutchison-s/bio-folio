const main = document.querySelector("main");
const tabs = Array.from(document.querySelectorAll(".div"));
const hideables = Array.from(document.querySelectorAll(".hideable"));
const labels = Array.from(document.querySelectorAll(".divLbl"));
const jobs = Array.from(document.querySelectorAll("#workexp .content-wrap li"));
const jobDescriptions = Array.from(document.querySelectorAll(".job-description"));
let currentTab = document.querySelector("#home");

const changeTabs = function (event) {
    Array.from(currentTab.querySelectorAll(".hideable")).forEach(el => el.classList.add("hideThis"));
    currentTab.classList.remove("primaryTab");
    currentTab = event.target.parentNode;
    currentTab.classList.add("primaryTab");
    Array.from(currentTab.querySelectorAll(".hideable")).forEach(el => el.classList.remove("hideThis"))
};

const changeJobDesc = function (event) {
    jobDescriptions.forEach(desc => {desc.classList.add("hideThis")});
    jobs.forEach(job => {job.classList.remove("active-list-item")});
    let idx = jobs.indexOf(event.target);
    event.target.classList.add("active-list-item");
    jobDescriptions[idx].classList.remove("hideThis");

};

const fillDegree = function(event) {
    event.target.style.content = degrees[target.getAttribute("id")];
};

labels.forEach(lbl => {lbl.addEventListener("click", changeTabs)});
jobs.forEach(job => {job.addEventListener("click", changeJobDesc)});

