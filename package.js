Package.describe({
	name: "helloludger:mbox",
	summary: "This package allows you to easily use a Meteor template within a bootbox dialog.",
	version: "1.0.0",
	git: "https://github.com/HelloLudger/meteor-mbox.git",
	documentation: "README.md"
});

Package.onUse(function (api) {
	api.versionsFrom("1.0.4.2");
	
	api.use(['underscore','jquery', 'templating'], 'client');
	api.use('mizzao:bootboxjs@4.4.0', 'client', {weak: true});
	
	api.add_files('client.js', "client");
	
	api.export('mbox', 'client');
});