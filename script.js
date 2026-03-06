async function fetchUserData() {
    let divContainer = document.getElementById("container");
    try{
        let UserData = await fetch("https://randomuser.me/api/");
        let Data = await UserData.json();
        let getData = Data.results[0];
        let image = getData.picture.large;
        divContainer.innerHTML= `<img src="${image}"><h3> ${getData.name.first} ${getData.name.last} </h3> <p class="email"><strong class="mail">Email:</strong>  ${getData.email} </p> <p class="location"><strong class="loc">Location:</strong>  ${getData.location.city}, ${getData.location.state}</p> <button class="del-btn">Clear</button> `;
        document.querySelector(".del-btn").addEventListener("click", () =>{
            divContainer.innerHTML="";
        })
    }
    catch(error){
        console.log(error);
    }
    

    
}