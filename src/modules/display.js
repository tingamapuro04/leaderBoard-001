const tablerow = document.querySelector('userData');
const displayInfo = (name, score) => {
  const row = document.createElement('tr');
  row.textContent = `${name}: ${score}`;
  tablerow.appendChild(row);
};

export default displayInfo;