export const JS_CODE_EXAMPLE = `
//==================================================================
function add_product_to_cart(idcolorsize, photo, name, price, amount, size, count='')
{
	console.log('add_product_to_cart');
	let cartpage__container = document.createElement('div');
	cartpage__container.id = 'cp' + idcolorsize;
	cartpage__container.classList.add('cartpage__container');
	cartpage__container.innerHTML = \`<img src="\` + photo + \`" alt="" width="80px" class="cart__photo">
									<div class="cartpage__container-info">
										<span class="cart__name">\` + name + \`</span>
										<span>\` + size + \`р</span>
										<span class="cart__price">\` + price*amount + \`₴</span>
										<img src="img/trash.svg" alt="" width="25px" class="removecart">
									</div>
									<div class="cartpage__container-amount">
										<img id='cart__amount-minus' src="../img/minus.svg" alt="" width="15px">
										<span class='cart__amount'>\` + amount + \`</span>
										<img id='cart__amount-plus' src="../img/plus.svg" alt="" width="15px">
									</div>\`;

    let div = document.getElementsByClassName(HB + '__cartpage')[0];
	div.insertBefore(cartpage__container, div.lastElementChild);
	document.getElementsByClassName(HB + '__cart-count')[0].innerHTML = count;

	let totPrice = document.getElementsByClassName(HB + '__cheackout__total-price')[0];
	totPrice.innerHTML = parseInt(price * amount) + parseInt(totPrice.innerHTML) + '₴';
}

//==================================================================
function change_cart_amount(id, plusMinus)
{
	let obj = JSON.parse(localStorage.getItem('CP'));
	let el = obj.find(x => x.idcolorsize == id);

	el.amount += plusMinus;

	if(el.amount == 0)
	{
		remove_cart_product(id);
		return;
	}

	localStorage.setItem('CP', JSON.stringify(obj));

	let obj_price = document.getElementById('cp' + id).children[1].children[2];
	let obj_amount = document.getElementById('cp' + id).lastElementChild.children[1];
	let price = parseInt(obj_price.innerHTML.slice(0,-1)) / parseInt(obj_amount.innerHTML);
	obj_amount.innerHTML = parseInt(obj_amount.innerHTML) + plusMinus;
	obj_price.innerHTML = parseInt(obj_price.innerHTML.slice(0,-1)) + price * plusMinus + '₴';

	let totPrice = document.getElementsByClassName(HB + '__cheackout__total-price')[0];
	totPrice.innerHTML = parseInt(totPrice.innerHTML) + price * plusMinus + '₴';
}

//===================================================================
function remove_cart_product(id)
{
	console.log('remove_cart_product');

	document.getElementById('cp' + id).lastElementChild.lastElementChild.
		removeEventListener('click', change_cart_amount);

	document.getElementById('cp' + id).lastElementChild.firstElementChild.
		removeEventListener('click', change_cart_amount);

	let obj = JSON.parse(localStorage.getItem('CP'));
	
	let obj_index = obj.indexOf(obj.find(x => x.idcolorsize == id));

	let totPrice = document.getElementsByClassName(HB + '__cheackout__total-price')[0];
	totPrice.innerHTML = parseInt(totPrice.innerHTML) - obj[obj_index].price * obj[obj_index].amount + '₴';

	if (obj.length != 1)
		obj.push(obj.splice(obj_index, 1)[0]);

	obj.pop();

	localStorage.setItem('CP', JSON.stringify(obj));

	document.getElementById('cp' + id).remove();
	
	document.getElementsByClassName(HB + '__cart-count')[0].innerHTML = obj.length ? obj.length : '';
}

//==================================================================
function add_cart_product_reload()
{
	console.log('add_cart_product_reload');
	//let productcart_photo = document.querySelectorAll(".productcart__photo img");
	let obj = JSON.parse(localStorage.getItem('CP'));
	if(obj && obj.length)
	{
		for(let el of obj)
		{
			add_product_to_cart(el.idcolorsize, el.photo, el.name, el.price, el.amount, el.size, obj.length);
			
			document.getElementById('cp' + el.idcolorsize).lastElementChild.lastElementChild.
				addEventListener('click', change_cart_amount.bind(null, el.idcolorsize, 1));

			document.getElementById('cp' + el.idcolorsize).lastElementChild.firstElementChild.
				addEventListener('click', change_cart_amount.bind(null, el.idcolorsize, -1));
		}
	}
}

add_cart_product_reload();
`;

export const REACT_CODE_EXAMPLE = `
const ProductCart = (props) => 
{
	const [likeState, setLikeState] = useState(false);

	useEffect(() => {
		const storage = localStorage.getItem('wishlist');
		if (storage) {
			const arrStorage = JSON.parse(storage);
			setLikeState(() => {
				if(arrStorage.find(x => x.id === props.id))
					return true;
				else
					return false;
			});
		}
	});

	const dispatch = useDispatch();

	const handleLikeClick = () => {
		setLikeState(!likeState);
		
		if(likeState) {
			dispatch(removeWishes(props.id));
		}
		else{
			const payload = {
				id: props.id, 
				img: props.img, 
				name: props.name,
				price: props.price
			};
			dispatch(addWishes(payload));
		}
	};

	return (
    	<div className={styles.cart}>
    		<Link to={props.id}>
				<img src={props.img} alt={ \`\${props.name}\`} />
			</Link>
    		<div className={styles.info}>
                <div className={styles.priceName}>
    				<p>{props.name}</p>
    				<p>{props.price}</p>
    			</div>
    			<button className={\`\${styles.like} \${likeState ? 'liked' : ''}\`} onClick={handleLikeClick}>
    				{
    					likeState ? <LikedIcon size={18}/> : <NotLikedIcon size={18}/>
    				}
    			</button>
    		</div>
    	</div>
  );
}
`;
