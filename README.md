#helloludger:mbox
*A Meteor package to use templates within a bootbox dialog.*

##How To Use
###Dependencies
You need Bootstrap and bootbox.js for this package. I use
* [https://atmospherejs.com/mizzao/bootboxjs](https://atmospherejs.com/mizzao/bootboxjs) and
* [https://atmospherejs.com/twbs/bootstrap](https://atmospherejs.com/twbs/bootstrap)

but since there are many ways to include Bootstrap in your project, I only made mizzao:bootboxjs a weak dependency.

###Basics
If the first parameter isn't an object if you use a normale *message* instead of an Meteor Template, **mbox** will simply call bootbox with the given parameters.

You can use all variants bootbox.js offers for modals. Simply call `mbox.alert( ... )` instead of `bootbox.alert( ... )`.
For a detailed list of modal variants and how to include different buttons, etc., [check out bootbox.js's documentation](http://bootboxjs.com).

###Including A Template
```
mbox.alert({
	message: Template.mboxNoData, 
});
```
This will open an alert modal and render the template **"mboxNoData"** in its body. You have to provide the template in an object as the value of the *message* key. 
The object is the only allowed parameter for the `mbox.*something*` function call.
	  
###Including A Template With Data 
```
mbox.alert({
	message: Template.mboxWithData, 
	data: { somevalue: "Hello world!" }
});
```
This will open an alert modal and render the template **"mboxWithData"** in its body. 
Within the template, a simple `{{somevalue}}` will render the data, in this case **Hello World!**.

You have to provide the template in an object as the value of the *message* key. 
The object is the only allowed parameter for the `mbox.*something*` function call.

If you provide the data in this way, it will not be ractive.

###Including A Template With Reactive Data 
```
mbox.alert({
	message: Template.mboxWihReactiveData, 
	**data: function() {
		return {
			reactiveData: Session.get("myReactiveData"),
			otherData: SomeCollection.findOne().name
		}**
	}
});
```
This will open an alert modal and render the template **"mboxWihReactiveData"** in its body. 
Within the template, a simple `{{reactiveData}}` will render the data.

You have to provide the template in an object as the value of the *message* key. 
The object is the only allowed parameter for the `mbox.*something*` function call.

Only if you wrap your data in a function it will be reactive. 

##Examples
Check out the example page under [http://mbox.meteor.com](http://mbox.meteor.com).

##License
Published under **MIT License**.