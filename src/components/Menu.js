// Menu.js

import React from "react";
import recipes from '../recipes';
import Swal from "sweetalert2";

const Menu = () => {

    const handleOrder = (id) => {
        console.log(id, "id is clicked");
        Swal.fire({
            title: "Add to cart?",
            text: "This will add the item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    "Ordered!",
                    "This item was added to your cart.",
                    "Success"
                )
            }
        })
    }

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This week's specials</h2>
                <button>Order Menu</button>
            </div>

            {/* Menu cards */}
            <div className="cards">
                {
                    recipes.map(recipe => <div key={recipe.id} className="menu-items">
                       <img src={recipe.image} alt="" />
                       <div className="menu-content">
                            <div className="heading">
                            <h5>{recipe.title}</h5>
                            <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>)
                }
            </div>
        </div>


    );
};

export default Menu;