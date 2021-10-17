// ------------ Chart.js -------------

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Agusts',
  'September',
  'November',
  'December'
];
const data = {
  labels: labels,
  datasets: [{
    label: 'Attendance',
    backgroundColor: '#1A55AF',
    borderColor: '#1A55AF',
    data: [0, 10, 5, 2, 20, 30, 45, 50, 100, 25, 150, 100],
  },
  {label: 'Visiting',
    backgroundColor: '#427A0A',
    borderColor: '#427A0A',
    data: [0, 5, 15, 14, 18, 20, 30, 37, 40, 45, 55, 70],}
]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


// --------- visability password

function toggelPassword() {
    var password = document.getElementById('password');
    var togglePassword = document.getElementById('togglePassword');
    if (password.type == "password") {
        password.type = "text";
        togglePassword.style.opacity = "30%";
    } else {
        password.type = "Password";
        togglePassword.style.opacity = "100%";
    }
};