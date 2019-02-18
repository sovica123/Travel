$(".mobile-menu-icon" ).click(function() {
  $(".mobile-nav").toggle(".mobile-nav");
});

var tabButtons=document.querySelectorAll(".tab-container .button-container button");
var tabPanels=document.querySelectorAll(".tab-container .tab-panel");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function(node){
    node.style.backgroundColor="";
    node.style.styleColor="";
  });
  tabButtons[panelIndex].style.backgroundColor=colorCode;
  tabButtons[panelIndex].style.color="rgba(92,73,5,1)";
  tabPanels.forEach(function(node){
    node.style.display="none";
  });
  tabPanels[panelIndex].style.display="block";
  tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel (0, );
