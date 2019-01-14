//author="_jason_w_"



let alist = ["Alcohol","Babel Fish","Bulldozer","Bypass","Deep Thought","Dentrassi","Digital Watched","Dolphins","The Earth","Encyclopedia Galactica","Ford Prefect","Genuine People Personality","Heart Of Gold","Indian Wrestling","Infinite Improbablity Drive","Magrathea","Oolon Colluphid","Peanuts","Petunia","Protestnic Vogon Jeltz","Sirius Cybernetics Corporation","Towel","Vogon Construction Fleet","Vogon"];


function do_sth()
	{

	var x;
	
		if(window.event) //获取windows事件
			{
				x = event.keyCode;
			}
			if (x == 13) 
			{
				var content = document.getElementById('inputid');
				var hehe_input = content.value.toLowerCase();

				
				var len_of_input = hehe_input.length;

				console.log(len_of_input);

				

				$(".list_table").remove();

				var table_node = document.createElement("table");
				table_node.setAttribute("class", "list_table");
				table_node.setAttribute("id", "the_coming_table");

				var node_tr = null;
				var node_td = null;
				var new_one = null;

				for (var i = alist.length - 1; i >= 0; i--) { //对于每一个alist元素进行遍历
					console.log(alist[i].length);  //控制台模拟输出

					// console.log(alist[i].slice(0,3));

					var test_times = alist[i].length - hehe_input.length + 1;

					for (var j = 0; j < test_times; j++) 
						{
							// var test_times = alist[i].length;
							if (alist[i].toLowerCase().slice(j, j+len_of_input) == hehe_input) 
								{
									
									


									var node_tr = document.createElement("TR"); //
									var node_td = document.createElement("TD");
									var link = document.createElement("A");
									var new_one = document.createTextNode(alist[i]);

									link.appendChild(new_one);
									node_td.appendChild(link);
									node_tr.appendChild(node_td);
									table_node.appendChild(node_tr);

									var file_path = "../searching_items/" + alist[i].toLowerCase() + ".html";

									link.setAttribute("href", file_path);
									link.setAttribute("stlye", "text-decoration:none;");
									


									link.href = file_path;
									link.target = "blank";


									// var text_node = document.creatTextNode(alist[i])

									
									document.getElementById("this_one_bro").appendChild(table_node);
									

									// document.getElementById("the_coming_table").innerHTML = "<tr><td>" + alist[i] + "</td></tr>";
									break;
								}
							
						}

				}
				if (node_tr == null) {
									var node_tr = document.createElement("TR"); //
									var node_td = document.createElement("TD");
									var new_one = document.createTextNode("No such entry called \"" + hehe_input + "\"!");


									node_td.appendChild(new_one);
									node_tr.appendChild(node_td);
									table_node.appendChild(node_tr);


									// var text_node = document.creatTextNode(alist[i])

									
									document.getElementById("this_one_bro").appendChild(table_node);
				}


				// document.getElementById("the_coming_table").innerHTML = "<tr><td>" + file_path + "</td></tr>";
 				// window.open(file_path);

				// alert("成功了！ 你输入了 " + file_path + " !");
			}
	}

function searching_button(){
				var content = document.getElementById('inputid');
				var hehe_input = content.value.toLowerCase();

				
				var len_of_input = hehe_input.length;

				console.log(len_of_input);

				$(".list_table").remove();

				var table_node = document.createElement("table");
				table_node.setAttribute("class", "list_table");
				table_node.setAttribute("id", "the_coming_table");

				var node_tr = null;
				var node_td = null;
				var new_one = null;

				for (var i = alist.length - 1; i >= 0; i--) { //对于每一个alist元素进行遍历
					console.log(alist[i].length);  //控制台模拟输出

					// console.log(alist[i].slice(0,3));

					var test_times = alist[i].length - hehe_input.length + 1;

					for (var j = 0; j < test_times; j++) 
						{
							// var test_times = alist[i].length;
							if (alist[i].toLowerCase().slice(j, j+len_of_input) == hehe_input) 
								{
									
									


									var node_tr = document.createElement("TR"); //
									var node_td = document.createElement("TD");
									var link = document.createElement("A");
									var new_one = document.createTextNode(alist[i]);

									link.appendChild(new_one);
									node_td.appendChild(link);
									node_tr.appendChild(node_td);
									table_node.appendChild(node_tr);

									var file_path = "../searching_items/" + alist[i].toLowerCase() + ".html";

									link.setAttribute("href", file_path);
									link.setAttribute("stlye", "text-decoration:none;");

									link.href = file_path;
									link.target = "blank";
									// var text_node = document.creatTextNode(alist[i])

									
									document.getElementById("this_one_bro").appendChild(table_node);
									

									// document.getElementById("the_coming_table").innerHTML = "<tr><td>" + alist[i] + "</td></tr>";
									break;
								}
							
						}

				}
				if (node_tr == null) {
									var node_tr = document.createElement("TR"); //
									var node_td = document.createElement("TD");
									var new_one = document.createTextNode("No such entry called \"" + hehe_input + "\"!");


									node_td.appendChild(new_one);
									node_tr.appendChild(node_td);
									table_node.appendChild(node_tr);


									// var text_node = document.creatTextNode(alist[i])

									
									document.getElementById("this_one_bro").appendChild(table_node);
				}
}