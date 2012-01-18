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
