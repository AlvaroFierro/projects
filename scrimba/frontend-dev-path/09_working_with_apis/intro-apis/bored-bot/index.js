const activityBtn = document.getElementById('activity-btn')

activityBtn.addEventListener('click', getActivity)

function getActivity() {
  const URL = 'https://apis.scrimba.com/bored/api/activity'
  const title = document.querySelector('.activity')
  fetch(URL)
    .then((res) => res.json())
    .then((data) => (title.textContent = data.activity))
}
