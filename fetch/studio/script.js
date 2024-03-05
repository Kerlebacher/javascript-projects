      window.addEventListener("load", function() {     
        const container =  document.getElementById('container');

          fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((res) => {
             res.json().then((data) => {
            //  data.sort(function  (a,b) {
            //     return a.hoursInSpace < b.hoursInSpace? 1 :-1;
            //  });


               for (let i=0; i < data.length; i++) {
                let id = data[i];
                // let isActive = id.active ? "active" : "";
                container.innerHTML += `
         
                <div class="astronaut">
                  <div class="bio">
                    <h3> ${id.firstName} ${id.lastName} </h3>
                    <ul>
                        <li>Hours in Space: ${id.hoursInSpace}</li>
                        <li class="${isActive}">Active: ${id.active}</li>
                        <li>Skills: ${id.skills.join(", ")}</li>
                    </ul>
                  </div>
                  <img class="avatar" src"${id.picture}">
                </div>
                `;
               }
              });
          });
        });
