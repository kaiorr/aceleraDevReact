function getShoppingCart(ids, productsList) {
	const products = ids.map(id => productsList.reduce(
		(previous, current) => current.id == id?current:previous));
	let cart = products.reduce(calculatePriceOfCart, {
		'products': [],
		'promotion': '',
		'totalPrice': 0.0,
		'discountValue': {
			'SINGLE LOOK': 0,
			'DOUBLE LOOK': 0,
			'TRIPLE LOOK': 0,
			'FULL LOOK':   0
		},
		'getPromotion': getPromotionClosure()
	});
	cart.discountValue = (cart.totalPrice - cart.discountValue[cart.promotion]).toFixed(2);
	cart.discount = (cart.discountValue*100/cart.totalPrice).toFixed(2)+'%';
	cart.totalPrice = (cart.totalPrice - cart.discountValue).toFixed(2);
	delete cart['getPromotion'];
	return cart;
}

const calculatePriceOfCart = (previous, current) => {
	previous.products.push({'name': current.name, 'category': current.category});
	previous.totalPrice = (previous.totalPrice + current.regularPrice);
	previous.promotion = previous.getPromotion(current.category);
	previous.discountValue = {
		'SINGLE LOOK': previous.discountValue['SINGLE LOOK'] + current.promotions.reduce( (previous, current) => current.looks.includes('SINGLE LOOK')?current.price:previous, current.regularPrice),// getPriceOfLookPromotion(current.promotions, 'SINGLE LOOK'), //[current.promotions.findIndex( x => x.looks.includes('SINGLE LOOK'))].price,
		'DOUBLE LOOK': previous.discountValue['DOUBLE LOOK'] + current.promotions.reduce( (previous, current) => current.looks.includes('DOUBLE LOOK')?current.price:previous, current.regularPrice),
		'TRIPLE LOOK': previous.discountValue['TRIPLE LOOK'] + current.promotions.reduce( (previous, current) => current.looks.includes('TRIPLE LOOK')?current.price:previous, current.regularPrice),
		'FULL LOOK':   previous.discountValue['FULL LOOK']   + current.promotions.reduce( (previous, current) => current.looks.includes('FULL LOOK')?current.price:previous, current.regularPrice),
	}
	return previous;
}

const getPromotionClosure = () =>{
	let listCategory = [];
	return (category) => {
		if(!listCategory.includes(category))
			listCategory.push(category);
		switch(listCategory.length){
			case 1: return 'SINGLE LOOK'
			case 2: return 'DOUBLE LOOK'
			case 3: return 'TRIPLE LOOK'
			case 4: return 'FULL LOOK'
		}
	}
}

module.exports = { getShoppingCart };