const menubars = document.querySelector(".menubars");
const mobileNav = document.querySelector(".overlay");
const navbar = document.querySelector(".navbar");
const anchor = document.querySelectorAll(".anchor");
const btnintro = document.querySelector(".btn-intro");
const modalBox = document.querySelector(".modalBox");
const modalClose = document.getElementById("modalClose");
const bookmark = document.querySelector(".bookmark");
const bookbg = document.querySelector(".bookbg");
const faBookmark = document.querySelector(".fa-bookmark");
const pledgeBam = document.querySelector(".pledgeBam");
const pledgeBlack = document.querySelector(".pledgeBlack");
const noReward = document.querySelector("#noReward");
const noRewardbd = document.querySelector(".noRewardbd");
const bamboo = document.querySelector(".bamboobd");
const blackbd = document.querySelector(".blackbd");
const bambooInput = document.querySelector("#bamboo");
const blackInput = document.querySelector("#black");
const selection = document.querySelector(".selection");
const select = document.querySelectorAll(".select label");
const specificBtn = document.querySelectorAll(".specific");

// Scroll Header
window.onscroll=()=>{
    navbar.classList.toggle("scrollHeader", window.scrollY  >= 50)
}
menubars.onclick=()=>{
    menubars.classList.toggle("fa-times");
    if(menubars.classList.contains("fa-times")){
        mobileNav.classList.add("activeMenu");
    }else{
        mobileNav.classList.remove("activeMenu");
    }
}
//* Removing navlinks
const linkAction =()=>{
    const mobileNav = document.querySelector(".overlay");
    mobileNav.classList.remove("activeMenu");
    menubars.classList.toggle("fa-times");
    if(menubars.classList.contains("fa-times")){
        mobileNav.classList.add("activeMenu");
    }else{
        mobileNav.classList.remove("activeMenu");
    }
}
anchor.forEach(l => l.addEventListener("click", linkAction));

//* ModalBox Display
btnintro.onclick=() =>{
    modalBox.classList.add("modal-active");
    modalBox.style.transition()
}
modalClose.onclick=()=>{
    modalBox.style.display="none";
}
//? Bookmark
bookmark.onclick=()=>{
    bookmark.classList.toggle("active");
    if(bookmark.classList.contains("active")){
        bookbg.innerHTML="Bookmarked";
        bookbg.style.color="hsl(176, 50%, 47%)";
        faBookmark.style.background="hsl(176, 50%, 47%)";
    }else{
        bookbg.innerHTML="Bookmark";
        bookbg.style.color="hsl(0, 0%, 48%)";
        faBookmark.style.background="hsl(0, 0%, 0%)";
    }
}

// Select Reward
specificBtn.forEach(reward =>{
    reward.addEventListener("click",()=>{
        modalBox.style.display="flex";
    })
})
noReward.onclick =()=>{
    noRewardbd.style.border="1px solid hsl(176, 50%, 47%)";

    pledgeBlack.style.display="none";
    pledgeBlack.style.maxHeight="0";
    blackbd.style.border="1px solid hsl(0, 0%, 90%)";

    pledgeBam.style.display="none";
    pledgeBam.style.maxHeight="0";
    bamboo.style.border="1px solid hsl(0, 0%, 90%)";
}
bambooInput.onclick =()=>{
    pledgeBam.style.display="flex";
    pledgeBam.style.maxHeight="100%";
    bamboo.style.border="1px solid hsl(176, 50%, 47%)";

    pledgeBlack.style.display="none";
    pledgeBlack.style.maxHeight="0";
    blackbd.style.border="1px solid hsl(0, 0%, 90%)";

    noRewardbd.style.border="1px solid hsl(0, 0%, 90%)";

}
blackInput.onclick =()=>{
    pledgeBlack.style.display="flex";
    pledgeBlack.style.maxHeight="100%";
    blackbd.style.border="1px solid hsl(176, 50%, 47%)";

    pledgeBam.style.display="none";
    pledgeBam.style.maxHeight="0";
    bamboo.style.border="1px solid hsl(0, 0%, 90%)";

    noRewardbd.style.border="1px solid hsl(0, 0%, 90%)";
}

// Form
const errPledge = document.querySelector(".errPledge");
const errPledge2 = document.querySelector(".errPledge2");
const confirmation = document.querySelector(".thanks");
const confirmClose = document.querySelector(".confirmClose");
validatePledge1=()=>{
    const option1 = document.getElementById("option1")
    if(option1.value==""){
        errPledge.style.display="flex";
        option1.style.border="1px solid red";
        return false
    }
    errPledge.style.display="flex";
    confirmation.style.display="flex";
    modalBox.style.display="none";
    errPledge.style.color="hsl(176, 50%, 47%)";
    errPledge.innerHTML = "Pledged";
    option1.style.border="1px solid hsl(176, 50%, 47%)";
    return true;
}
validatePledge2=()=>{
    const option2 = document.querySelector(".option2")
    if(option2.value==""){
        errPledge2.style.display="flex";
        option2.style.border="1px solid red";
        return false
    }
    errPledge2.style.display="flex";
    errPledge2.style.color="hsl(176, 50%, 47%)";
    errPledge2.innerHTML = "Pledged";
    confirmation.style.display="flex";
    modalBox.style.display="none";
    option2.style.border="1px solid hsl(176, 50%, 47%)";
    return true;
}
confirmClose.onclick=()=>{
    confirmation.style.display="none";
}

// stats
const counters = document.querySelectorAll('.counter');
const speed = 1000;
counters.forEach(counter => {
   const updateCount = () =>{
    const target = counter.getAttribute('data-target');
    const count = +counter.innerText;
    const inc = target / speed;
    if(count < target){
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else{
      counter.innerText = target;
    }
   }

   updateCount();
})