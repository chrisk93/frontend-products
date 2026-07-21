import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Typography,
} from '@mui/material';
import type { Product } from '../../types/Product';

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
    removeProduct?: (product: number) => void;
}

export const ProductCard = ({ product, onAddToCart, removeProduct }: ProductCardProps) => {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardMedia
                component="img"
                height="180"
                image="https://placehold.co/600x400?text=Product"
                alt={product.name}
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                }}
            >
                <Typography variant="h6" gutterBottom >
                    {product.name}
                </Typography>

                <Chip
                    label={product.category}
                    size="small"
                    sx={{
                        mb: 2
                    }}
                />

                <Typography
                    variant="h5"
                    sx={{ mt: 2 }}
                >
                    ${product.price}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    Stock: {product.stock}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    
                    variant="contained"
                    onClick={() => removeProduct?.(product.id)}
                >
                    Remover
                </Button>

                <Button
                    
                    variant="contained"
                    onClick={() => onAddToCart?.(product)}
                >
                    Agregar
                </Button>
            </CardActions>
        </Card>
    );
};