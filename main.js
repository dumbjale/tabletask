
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#data-table tbody');
    const loadDataButton = document.getElementById('load-data');

    function loadData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = '';
                data.forEach(user => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${Math.floor(Math.random() * 43) + 18}</td>
                        <td>${['Active', 'Inactive', 'Pending'][Math.floor(Math.random() * 3)]}</td>
                        <td>
                            <button class="view-btn">View</button>
                            <button class="delete-btn">Delete</button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });

                
                document.querySelectorAll('.delete-btn').forEach(button => {
                    button.addEventListener('click', () => {
                        button.closest('tr').remove(); 
                    });
                });

               
                document.querySelectorAll('.view-btn').forEach(button => {
                    button.addEventListener('click', () => {
                        window.open("./details.html", "_blank");
                    });
                });
            })
            .catch(error => console.error('Fetch error:', error)); 
    }

    loadDataButton.addEventListener('click', loadData); 
});