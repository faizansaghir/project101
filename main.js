const collapseMenu=()=>{
	let screenWidth= window.innerWidth;
	const navToggler=document.getElementsByClassName("navbar-toggler")[0];
	if(screenWidth<768){
		const expanded=navToggler.getAttribute("aria-expanded");
		if(expanded=="true"){
			const navLinks = document.querySelectorAll('.nav-item')
			const menuToggle = document.getElementById('navbarSupportedContent')
			const bsCollapse = new bootstrap.Collapse(menuToggle)
			navLinks.forEach((l) => {
			    l.addEventListener('click', () => { bsCollapse.toggle() })
			})
		}
	}	
}
const checkToCollapse=(e)=>{
	if(navToggler!==e.target)
		collapseMenu();
}
const navToggler=document.getElementsByClassName("navbar-toggler-icon")[0];	
const bodyVar=document.getElementsByTagName("body")[0];
bodyVar.addEventListener("click",checkToCollapse);
window.addEventListener("resize",collapseMenu);