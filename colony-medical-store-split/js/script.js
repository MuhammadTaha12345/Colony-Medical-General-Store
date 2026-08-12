// Live open/closed status: open daily 11:30 AM - 12:00 AM (midnight)
function updateStatus(){
  const now = new Date();
  const mins = now.getHours()*60 + now.getMinutes();
  const openMins = 11*60+30;
  const closeMins = 24*60; // midnight
  const isOpen = mins >= openMins && mins < closeMins;

  const dot = document.getElementById('statusDot');
  const text = document.getElementById('statusText');
  if(isOpen){
    dot.classList.remove('closed');
    text.textContent = 'Open now · closes 12:00 AM';
  } else {
    dot.classList.add('closed');
    text.textContent = 'Closed now · opens 11:30 AM';
  }

  // Highlight today's row in timings table
  const today = now.getDay();
  document.querySelectorAll('.timings-row').forEach(row=>{
    row.classList.toggle('today', parseInt(row.dataset.day) === today);
  });
}

updateStatus();
setInterval(updateStatus, 60000);
