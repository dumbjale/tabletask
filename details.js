
const tBody = document.querySelector('#details-table tbody');

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(user => {
    console.log(user); 
    tBody.innerHTML = `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.address.street}, ${user.address.city}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
      </tr>
    `;
  })
  .catch(error => {
    console.error('Error fetching user details:', error);
    tBody.innerHTML = '<tr><td colspan="7">Error fetching user details.</td></tr>';
  });