Array.prototype._group = function (groupKey) {
	if (arguments === null || arguments.length === 0) {
		return this;
	}

	var groupByArgs = arguments;
	var srcList = this;
	var fieldValue = null;
	var groupResult = new Object();

	$.each(srcList, function (key, value) {
		for (var i in groupByArgs) {
			var argsKey = groupByArgs[i];
			var fieldValue = value[argsKey];
			if (groupResult[fieldValue] == null) {
				groupResult[fieldValue] = srcList._filter(argsKey, fieldValue);
			}
		}
	})

	console.log(groupResult);

	return groupResult;
}


Array.prototype._filter = function(filterBy, filterValue){
	return $.grep(this, function(key, value){
		return key[filterBy] === filterValue;
	});
}


Array.prototype._sort = function (sortBy) {
	var outer, inner, temp;
	var srcList = this;
	for (outer = srcList.length - 1; outer > 0; outer--) {  
		for (inner = 0; inner < outer; inner++) {
			if (srcList[inner][sortBy] > srcList[inner + 1][sortBy]) {
				temp = srcList[inner];
				srcList[inner] = srcList[inner + 1];
				srcList[inner + 1] = temp;
			}
		}
	}
}
