function insert_Row() {
    //Write your code here
	var tabel=document.getElementById("sampleTable");
	var row=document.createElement("tr");
	var r1=document.createElement("td");
	var r2=document.createElement("td");
	r1.innerText="Row2 Cell1";
	r2.innerText="Row2 Cell2"
	row.appendChild(r1);
	row.appendChild(r2);
	tabel.appendChild(row);
	
	
	
  
  
}
