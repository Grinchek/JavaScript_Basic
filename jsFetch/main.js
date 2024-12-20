async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);

    }
}

function searchHendler() {
    const search = document.getElementById('search').value;
    fetchData("https://api.github.com/users").then(users => {
        const wraper = document.getElementById("wraper");
        for (user of users) {
            if (user.login === search) {
                fetchData(user.url).then(oneUser => {
                    wraper.innerHTML = `<div id="title-wraper">
            <div class="search-login">
                <p class="title">Search login: ${oneUser.login}</p>
            </div>
            <div class="search-login2">

            </div>
        </div>
        <div class="info-waper">
            <div class="info-container">
                <div id="image-box">
                    <img src="${oneUser.avatar_url}" alt="" width="130" height="130">
                </div>
                <div class="info-box">
                    <p>Name:</p>
                    <p class="content" > ${oneUser.name}</p>
                </div>
                <div class="info-box">
                    <p>Login: </p>
                    <p class="content" > ${oneUser.login}</p>
                </div>
            </div>
            <div class="info-container">
                <div class="info-box">
                    <p>Url to github:</p>
                    <p class="content" >  ${oneUser.html_url}</p>
                </div>
                <div class="info-box">
                    <p>Blog:</P>
                    <p class="content" >${oneUser.blog ? oneUser.blog : "No blog"}</p>
                 </div>
                <div class="info-box">
                    <p>City:<?p>
                    <p class="content" >${oneUser.city ? oneUser.city : "No city"}</p>
                </div>
                <div class="info-box">
                    <p>Email:</p>
                    <p class="content" > ${oneUser.email ? oneUser.email : "No e-mail"}</p>
                </div>
                <div class="info-box">
                    <p>Folowers:</p>
                    <p class="content" >${oneUser.followers}</p>
                </div>
            </div>
        </div>`;
                })


            }
        }

    });
}



