const therapists = [
    { name: 'Dr. Smith', specialization: 'anxiety', availability: 'morning', phno: '***'},
    { name: 'Dr. Johnson', specialization: 'depression', availability: 'afternoon', phno: '***'},
    { name: 'Dr. Williams', specialization: 'Addiction', availability: 'evening', phno: '***'},
    { name: 'Dr. vijay', specialization: 'Rehabilitation', availability: 'evening', phno: '***'},
    { name: 'Dr. Brown', specialization: 'ptsd', availability: 'morning', phno: '***'}
  ];
  
  let filteredTherapists = [];
  
  function openApp() {
    document.getElementById('start-section').classList.add('hidden');
    document.getElementById('directory-section').classList.remove('hidden');
  }
  
  function browseTherapists() {
    document.getElementById('directory-section').classList.add('hidden');
    document.getElementById('browse-section').classList.remove('hidden');
  }
  
  function filterBy(criteria) {
    document.getElementById('browse-section').classList.add('hidden');
    if (criteria === 'specialization') {
      document.getElementById('specialization-section').classList.remove('hidden');
    } else {
      document.getElementById('availability-section').classList.remove('hidden');
    }
  }
  
  function showTherapists() {
    let selectedValue;
    if (!document.getElementById('specialization-section').classList.contains('hidden')) {
      selectedValue = document.getElementById('specialization-select').value;
      filteredTherapists = therapists.filter(t => t.specialization === selectedValue);
      document.getElementById('specialization-section').classList.add('hidden');
    } else {
      selectedValue = document.getElementById('availability-select').value;
      filteredTherapists = therapists.filter(t => t.availability === selectedValue);
      document.getElementById('availability-section').classList.add('hidden');
    }
  
    const list = document.getElementById('therapist-list');
    list.innerHTML = '';
    filteredTherapists.forEach((therapist, index) => {
      const li = document.createElement('li');
      li.textContent = therapist.name;
      li.onclick = () => viewDetails(index);
      list.appendChild(li);
    });
  
    document.getElementById('therapists-section').classList.remove('hidden');
  }
    function viewDetails(index) {
    const therapist = filteredTherapists[index];
    document.getElementById('therapists-section').classList.add('hidden');
    document.getElementById('therapist-details').textContent = `Name: ${therapist.name}, Specialization: ${therapist.specialization}, Availability: ${therapist.availability},phno: ${therapist.phno}`;
    document.getElementById('details-section').classList.remove('hidden');
  }
  
  function bookAppointment() {
    document.getElementById('details-section').classList.add('hidden');
    document.getElementById('appointment-section').classList.remove('hidden');
  }
    function endProcess() {
    document.getElementById('appointment-section').classList.add('hidden');
    document.getElementById('end-section').classList.remove('hidden');
  }
  