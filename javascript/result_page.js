// "channels": [ "https://erhan.in/channel_v3.json" ],
function read_txt(which_file){
	var file_path = "../items/" + which_file + ".txt";
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var file = fso.opentextfile(file_path,1,false);

	var everything = file.ReadAll();
	console.log(everything);
	file.close();
    
}

 function test(){
 	var selection = new File(fileBits: Blob, fileName: DOMString)
 	var selectedfile = document.getElementById("files").files[0];
 	console.log(selectedfile);
 	var reader = new FileReader();
 	var everything = reader.readAsText(selectedfile);
 	var everything = reader.readAsText({name:"Alcohol.txt" type: "text/plain"})

 	// console.log(everything);

 	
 	reader.onload = function(){
        console.log(this.result);//当读取完成之后会回调这个函数，然后此时文件的内容存储到了result中。直接操作即可。
    }
 }