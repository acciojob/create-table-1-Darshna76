function insert_Row() {
    //Write your code here
	var tabel=document.getElementById("sampleTable");
	var row=tabel.insertRow(0);
	var c1=row.insertCell(0);
	var c2=row.insertCell(1);
	c1.innerHTML = "New Cell1 ";
  c2.innerHTML = "New Cell2";
	
	
}
