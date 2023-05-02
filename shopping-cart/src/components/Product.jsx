import { useState } from "react";


const Product = ({post}) => {
  console.log("in a Product");
  const[select,setSelect] = useState(true);
  return(
    <div>
        <div>
          {post.title}
        </div>
        <div>
          {post.description}
        </div>
        <div>
          <img src={post.image}/>
        </div>
        <div>
          <p>{post.prize}</p>
        </div>
          <button>
            {
              select ? <p>Remove Item</p> : <p>Add to Cart</p>
            }
          </button>
    </div>
  );
};

export default Product;
