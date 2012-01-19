javaScript groupBy
========

> Javascript utility to group JSON objects by object key, 
## using jQuery to filter array objects;

```javascript
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

		###	 Group BY
  		list._group("gender");
  		
  		### Sort
  		list._group("gender").Male._sort("name");
  		return;

  	});

    Person = function () {
    	this.name = "";
    	this.gender = "";
    }

```
