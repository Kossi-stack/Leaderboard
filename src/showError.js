const showError = () => {
  const scoreInput = document.getElementById('score').value;
  const nameInput = document.getElementById('name').value;
  const errorMsg = document.getElementById('error-msg');

  if (nameInput === '' && scoreInput === '') {
    return;
  }
  if (nameInput === '' || scoreInput === '') {
    errorMsg.style.display = 'block';
  }
};

export default showError;