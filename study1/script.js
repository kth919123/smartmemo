var testA = document.getElementById('testbutton'); //메모추가 버튼
var retVal; // 입력하는 메모값
var deleteButton = "<input type = 'button' id='del' onclick='deletememo()''>";// 메모삭제버튼. 동적으로 input태그 생성이므로 이벤트도 포함해서 생성해야함.(addEventListener로는 인식안함)
 

testA.addEventListener('click' , testAlertBox );

// 메모추가 대화창
function testAlertBox() {
 retVal = prompt("Enter your name : ", "your name here");
 add_row();

  }

//메모 없애는 이벤트
function deletememo(){
	console.log("됨?");
	masterTable = document.getElementById('masterTable');
	var row_index = masterTable.rows.length - 1 ;
	console.log(row_index);
	masterTable.deleteRow(row_index);
	
}



//동적 행추가 
 function add_row(){ 
 	masterTable = document.getElementById('masterTable');
 	row = masterTable.insertRow(masterTable.rows.length);
 	var memo_Cell = row.insertCell(0);
 	var button_Cell = row.insertCell(1);
 	//console.log(masterTable.rows.length);
 	//console.log(cell1);
 	memo_Cell.innerHTML = retVal;
 	button_Cell.innerHTML = deleteButton;

 }
