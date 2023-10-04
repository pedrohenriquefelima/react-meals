import React from "react";
import ProductList from "../../components/products/ProductList";
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div>
            <section>
                <div className={styles['background-welcome']}>
                    <div>
                        <h1>Welcome</h1>
                        <p> Indulge in a culinary journey where flavors dance, and every dish tells a story. At FortuneCat, we're not just a restaurant; we're an experience. As you step through our doors, prepare to embark on a gastronomic adventure like no other.

Our talented chefs have crafted a menu that celebrates the art of food, using the freshest ingredients to create dishes that will tantalize your taste buds. Whether you're a connoisseur of fine dining or simply seeking comfort in familiar flavors, our diverse menu has something to satisfy every palate.

We take pride in our warm and inviting atmosphere, where you can savor each moment with family and friends.
</p>
                    </div>
                </div>
                <ProductList></ProductList>
            </section>
        </div>
    )
}
export default HomePage;