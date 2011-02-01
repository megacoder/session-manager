$("select").each(function(){
	$(this)
		.append('<option value="click">click</option>')
		.append('<option value="shift+click">shift+click</option>')
		.append('<option value="ctrl/cmd+click">ctrl/cmd+click</option>')
		.append('<option value="alt+click">alt+click</option>')
		.find("option[value='" + JSON.parse(localStorage.open)[this.id.split("-")[1]] + "']").attr("selected", "true");
}).change(function(){
	var open = JSON.parse(localStorage.open);
	open[this.id.split("-")[1]] = this.value;
	localStorage.open = JSON.stringify(open);
});