mbox = {};

mbox.test = function () {
	var ret = mbox.adapt(arguments);
	console.log (ret);
	return ret;	
};

mbox.report = function (msg) {
	if (window.location.hostname !== "localhost") return false; 
	console.log("mbox: " + msg);
};

mbox.adapt = function(args) {	
	if (!_.isObject(args[0])) {
		mbox.report("If you're not providing an object as argument, mbox will simply hand-off the call to bootbox.");
		return {
			args: args,
			template: false,
			data: false,
			id: false,
		};
	};
	
	args = args[0];
	var template = false;
	var data     = false;
	var id       = false;

	if (_.isObject(args.message)) {
		template = args.message;
		id = "mbox-" + (new Date).valueOf();
		args.message = "<div id='" + id + "' class='mbox'></div>";
	}

	if (_.has(args, "data")) {
		data = args.data;
	};

	if ((data !== false) && (!_.isFunction(data))) {
		mbox.report("Warning! Your data will only be reactive, if it's a function returning the data!");
	}
	
	return {
		'args': args,
		'template': template,
		'data': data,
		'id': id,
	};
};

mbox.afterwork = function (template, data, id) {
	if (data === false) {
		Blaze.render(template, $('#' + id)[0]);
	} else {
		Blaze.renderWithData(template, data, $('#' + id)[0]);
	}
};

mbox.alert = function() {
	var adapt = mbox.adapt(arguments);
	
	if (adapt.template !== false) {
		ret = bootbox.alert(adapt.args);
		mbox.afterwork(adapt.template, adapt.data, adapt.id); 
		return ret;
	}
	
	var args  = arguments;
	switch(args.length) {
		case 1:
		var ret = bootbox.alert(args[0]);
		break;
		
		case 2:
		var ret = bootbox.alert(args[0], args[1]);
		break;

		default:
		throw new Meteor.Error('mBox: Wrong number of args.');
	};
	
	return ret;
};

mbox.confirm = function() {
	var adapt = mbox.adapt(arguments);
	
	if (adapt.template !== false) {
		ret = bootbox.confirm(adapt.args);
		mbox.afterwork(adapt.template, adapt.data, adapt.id); 
		return ret;
	}
	
	var args  = arguments;
	switch(args.length) {
		case 1:
		var ret = bootbox.confirm(args[0]);
		break;
		
		case 2:
		var ret = bootbox.confirm(args[0], args[1]);
		break;
		
		case 3:
		var ret = bootbox.confirm(args[0], args[1], args[2]);
		break;
		
		case 4:
		var ret = bootbox.confirm(args[0], args[1], args[2], args[3]);
		break;
	
		default:
		throw new Meteor.Error('mBox: Wrong number of args.');
	};
	
	mbox.afterwork(adapt.template, adapt.data);
	
	return ret;
};

mbox.prompt = function() {
	var adapt = mbox.adapt(arguments);
	
	if (adapt.template !== false) {
		ret = bootbox.prompt(adapt.args);
		$('.bootbox-body:first').prepend("<div id='" + adapt.id + "' class='mbox'></div>");
		mbox.afterwork(adapt.template, adapt.data, adapt.id); 
		return ret;
	}
	
	var args  = arguments;
	switch(args.length) {
		case 1:
		var ret = bootbox.prompt(args[0]);
		break;
		
		case 2:
		var ret = bootbox.prompt(args[0], args[1]);
		break;
		
		case 3:
		var ret = bootbox.prompt(args[0], args[1], args[2]);
		break;
		
		case 4:
		var ret = bootbox.prompt(args[0], args[1], args[2], args[3]);
		break;
		
		case 5:
		var ret = bootbox.prompt(args[0], args[1], args[2], args[3], args[4]);
		break;
	
		default:
		throw new Meteor.Error('mBox: Wrong number of args.');
	};
	
	mbox.afterwork(adapt.template, adapt.data);
	
	return ret;
};

mbox.dialog = function() {
	var adapt = mbox.adapt(arguments);
	
	if (adapt.template !== false) {
		ret = bootbox.dialog(adapt.args);
		mbox.afterwork(adapt.template, adapt.data, adapt.id); 
		return ret;
	}
	
	var args  = arguments;
	switch(args.length) {
		case 1:
		var ret = bootbox.confirm(args[0]);
		break;
		
		case 2:
		var ret = bootbox.confirm(args[0], args[1]);
		break;
		
		case 3:
		var ret = bootbox.confirm(args[0], args[1], args[2]);
		break;
		
		case 4:
		var ret = bootbox.confirm(args[0], args[1], args[2], args[3]);
		break;
	
		default:
		throw new Meteor.Error('mBox: Wrong number of args.');
	};
	
	mbox.afterwork(adapt.template, adapt.data);
	
	return ret;
};