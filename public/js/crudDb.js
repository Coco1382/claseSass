function addItem(id){
	var nuevo = new Firebase("https://ucreativaeduardo.firebaseio.com/admin/" + id);
	nuevo.child('Item').set('Lo quesea');
}

function process(){
	var id = document.formulario.id.value;
	var vbrand = document.formulario.brand.value;
	var vitem = document.formulario.item.value;
	var vquantity = document.formulario.quantity.value;

	var newItem = new Firebase("https://ucreativaeduardo.firebaseio.com/admin/" + id);
	var op = newItem.set({ brand: vbrand, item: vitem, quantity: vquantity });

	if (op) {
		location.href="/inventory";
	};
	
}