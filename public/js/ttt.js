function init() { 
  var grid=[["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"]];
  var html=["<table>"];
  
  
  for(var i=0; i < grid.length; i++) {
   
    html.push("<tr>");
    
    for(var j=0; j < grid[i].length; j++) {
 
      html.push("<td>", grid[i][j], "</td>");
    }
    html.push("</tr>");
  }
  html.push("</table>");
  
  //console.log(html.join(""));
  var contentDiv = document.getElementById("content");
  contentDiv.innerHTML = html.join("");
}
