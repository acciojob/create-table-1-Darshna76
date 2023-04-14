function insert_Row() {
    //Write your code here
	var tabel=document.getElementById("sampleTable");
	var row=document.createElement("tr");
	var r1=document.createElement("td");
	var r2=document.createElement("td");
	r1.innerText="New Cell1";
	r2.innerText="New Cell2"
	row.appendChild(r1);
	row.appendChild(r2);
	tabel.appendChild(row);
	// tabel.innerHtml=`<tr><td>New Cell1</td><td>New Cell2</></t>`
	
	
	
  
  
}
