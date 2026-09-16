const apiUrl = "https://api.github.com/users/syedrasimali"
        const xhr = new XMLHttpRequest();
        let avatar = document.querySelector("img");
        let run = document.querySelector("#run");
        let stop = document.querySelector("#stop");
        const names = document.querySelector("#name");
        const followers = document.querySelector("#followers");
        const repos = document.querySelector("#public_repos");


        xhr.open("GET", apiUrl);
        xhr.onreadystatechange = () => {

            console.log(xhr.readyState);
            if (xhr.readyState === 4) {

                run.addEventListener("click", () => {

                    const data = JSON.parse(xhr.responseText);
                    console.log(data);
                    avatar.src = data.avatar_url;
                    names.innerHTML = data.name;
                    followers.innerHTML = data.followers;
                    repos.innerHTML = data.public_repos;

                })

                stop.addEventListener("click", () => {

                    avatar.src = "https://via.placeholder.com/110";
                    names.innerHTML = "${username}";
                    followers.innerHTML = "0";
                    repos.innerHTML = "0";

                })

            }


        }
        xhr.send();


