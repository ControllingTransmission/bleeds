$(document).bind('keydown', 'b', function(e) { 
	tree.makeBranch()
}); 

$(document).bind('keydown', 'n', function(e) { 
	tree.step()
}); 	

$(document).bind('keydown', 'z', function(e) { 
	tree.setColor(new THREE.Color('#ffffff'))
}); 	

$(document).bind('keydown', 'x', function(e) { 
	tree.setColor(new THREE.Color('#ff00ff'))
}); 

$(document).bind('keydown', 'c', function(e) { 
	tree.setColor(new THREE.Color('#ffff00'))
});

$(document).bind('keydown', 'v', function(e) { 
	tree.setColor(new THREE.Color('#00ffff'))
}); 	

$(document).bind('keydown', 'o', function(e) { 
	tree.rotation.y += .1
}); 
