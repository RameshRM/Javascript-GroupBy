    <script src="jquery-1.6.2.min.js" type="text/javascript"></script>
    <script src="_groupBy.js" type="text/javascript"></script>

  <script language="javascript" type="text/javascript">

  	$(document).ready(function () {
  		var personnel = new Person();
  		personnel.name = "John Doe";
  		personnel.gender = "Male";

  		var personnel1 = new Person();
  		personnel1.name = "Alicia Keys";
  		personnel1.gender = "FeMale";

  		var personnel2 = new Person();
  		personnel2.name = "Mic Arther";
  		personnel2.gender = "Male";

  		var personnel3 = new Person();
  		personnel3.name = "Bond James, Bond";
  		personnel3.gender = "Male";

  		var personnel4 = new Person();
  		personnel4.name = "Jammie, GoldFinger";
  		personnel4.gender = "FeMale";

  		var personnelList = new Object();
  		var list = new Array();
  		list.push(personnel);
  		list.push(personnel1);
  		list.push(personnel2);
  		list.push(personnel3);
  		list.push(personnel4);
  		console.log(list._group("gender"));
  		return;

  	});

    Person = function () {
    	this.name = "";
    	this.gender = "";
    }

    </script>
