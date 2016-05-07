HanulWiki.escapeId = METHOD({
	
	run : function(id) {
		'use strict';
		//REQUIRED: id
		
		return id.replace(/\//g, '@!').replace(/\?/g, '@~').replace(/#/g, '@@').replace(/\./g, '@.');
	}
});
