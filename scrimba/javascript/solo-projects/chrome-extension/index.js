let myLeads = [];
const inputEl = document.getElementById('input-el');
const tabBtn = document.getElementById('tab-btn');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = '';
  for (let i = 0; i < leads.length; i++) {
    let index = leads[i];
    listItems += `<li> <a target='_blank' href='${index}'> ${index} </a> </li>`;
  }
  ulEl.innerHTML = listItems;
}

tabBtn.addEventListener('click', () => {
  // newest version (manifest V3)

  async function getCurrentTab(tabs) {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;

    myLeads.push(tab[0].url);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    render(myLeads);
  }
});

deleteBtn.addEventListener('dblclick', function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  render(myLeads);
});
