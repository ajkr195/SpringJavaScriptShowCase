async function getUsers() {
    let url = '/api/userlist';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();

    let html = '';
    users.map(user => {
        let htmlSegment = `<h6>${user.username} (${user.useraddress}) - 
                            <a href="email:${user.useremail}">${user.useremail}</a></h6>`;

        html += htmlSegment;
    });

    let divContainer = document.getElementById('someContainer');
    divContainer.innerHTML = "";
    divContainer.innerHTML = html;
}

renderUsers();

