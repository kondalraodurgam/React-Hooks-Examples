const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];


  function ShoppingList() {
    const title = products.map(product=>(
        <li key={product.id}
        style={{
            color : product.isFruit ?'magenta' : 'darkblue'
        }}>
            {product.title}
            </li>
    ))
    return <h1>{title}</h1>
  }
  export default ShoppingList;
