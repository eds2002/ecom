const hamburger = document.querySelector(".hamburger")
hamburger.onclick = () =>{
    let mobileNav = document.querySelector(".mob-nav");
    mobileNav.classList.add("active");
}


// On collection click
const mobileLinks = document.querySelectorAll(".mobile-link")
mobileLinks.forEach((link) =>{
    link.onclick = (e) =>{
        switch(e.target.textContent){
            case "New Releases":
                document.querySelector(".nav-releases").classList.add("active")
                break;
            case "Men":

                document.querySelector(".mens").classList.add("active")
                break;
            case "Women":
                document.querySelector(".womens").classList.add("active")
                break;
            case "Kids":
                document.querySelector(".kids").classList.add("active")
                break;
            case "Sale":
                document.querySelector(".sale").classList.add("active")
                break;
        }
    }
})

// New Releases sublink container
const newReleasesLinks = document.querySelectorAll(".nav-releases__link-title")
newReleasesLinks.forEach(link => {
    link.onclick = (e) =>{
        switch(link.textContent){
            case "New For Men >":
                document.querySelector(".mob-men-container").classList.add("active")
                break;
            case "New For Women >":
                document.querySelector(".mob-women-container").classList.add("active")
                break;
            case "New For Kids >":
                document.querySelector(".mob-kids-container").classList.add("active")
                break;
        }
    }
})

// Mens sublink container 
const newAndFeatured = document.querySelector(".mens__link-title");
newAndFeatured.onclick = () =>{
    document.querySelector(".mob-newfeatured-container").classList.add("active")
}

// Womens sublink container 
const womensNewAndFeatured = document.querySelector(".womens__link-title");
womensNewAndFeatured.onclick = () =>{
    document.querySelector(".mob-women-newfeatured-container").classList.add("active")
}

// Kids sublink container

const kidsNewAndFeatured = document.querySelectorAll(".kids__link")
kidsNewAndFeatured.forEach((sublink)=>{
    console.log(sublink.innerText)
    sublink.onclick = (e) =>{
        switch(e.target.innerText){
            case "New & Featured >":
                document.querySelector(".mob-kids-newfeatured-container").classList.add("active")
                break;
            case "Big Kids >":
                document.querySelector(".mob-kids-bigkids-container").classList.add("active")
                break;
            case "Little kids>":
                document.querySelector(".mob-kids-littlekids-container").classList.add("active")
                break;
            case "Babies & Toddlers>":
                document.querySelector(".mob-kids-toddlers-container").classList.add("active")
                break;
            case "Accessories & Equipment>":
                document.querySelector(".mob-kids-accessories-container").classList.add("active")
                break;
        }
    } 
})




// Exit current navigation menu
const navReleaseLeaveCrumb = document.querySelectorAll(".nav-releases__crumb, .mob-men-container__crumb, .mob-women-container__crumb, .mob-kids-container__crumb, .mob-newfeatured-container__crumb, .mens__crumb, .womens__crumb, .mob-women-newfeatured-container__crumb, .mob-kids-newfeatured-container__crumb, .kids__crumb, .mob-kids-bigkids-container__crumb, .mob-kids-littlekids-container__crumb, .mob-kids-toddlers-container__crumb, .mob-kids-accessories-container__crumb, .sale__crumb")
navReleaseLeaveCrumb.forEach(link =>{
    link.onclick = (e)=>{
        e.target.parentElement.classList.remove("active")
    }
})


