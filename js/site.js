function init(){

	function Next_phase() {
	  document.getElementById('des').innerHTML = 'Create Username and Password';
	}
	var b = document.getElementById('button-slot');
	b.addEventListener('click', Next_phase);
	}
	window.addEventListener('load', init);