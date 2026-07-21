import { Grid } from '@mui/material';

import type { Product } from '../../types/Product';
import { ProductCard } from  '../ProductCard/ProductCard';

interface ProductGridProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
    removeProduct: (product: number) => void;
}

export const ProductGrid = ({ products, onAddToCart, removeProduct }: ProductGridProps) => {
    return (
        <Grid container spacing={3}>
            {products.map(product => (
                <Grid
                    key={product.id}
                    size={{
                        xs: 12,
                        sm: 6,
                        md: 4,
                        lg: 3,
                    }}
                >
                    <ProductCard
                        product={product}
                        onAddToCart={onAddToCart}
                        removeProduct={removeProduct}
                    />
                </Grid>
            ))}
        </Grid>
    );
};