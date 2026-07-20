import {
    Box,
    Button,
    Divider,
    Paper,
    Typography,
} from '@mui/material';

import { useCart } from '../../hooks';
import { CartItem } from '../CartItem';
import { useCartSummary } from '../../hooks';

export const Cart = () => {
    const {
        items,
        clearCart,
    } = useCart();

    const { totalItems, totalPrice } = useCartSummary();


    return (
        <Paper
            elevation={3}
            sx={{
                mt: 4,
                p: 3,
            }}
        >
            <Typography
                variant="h5"
                gutterBottom
            >
                🛒 Carrito ({totalItems})
            </Typography>

            <Divider sx={{ mb: 2 }} />

            {items.length === 0 ? (
                <Typography>
                    El carrito está vacío.
                </Typography>
            ) : (
                <Box>
                    {
                        items.map(item => (
                            <CartItem
                                key={item.product.id}
                                item={item}
                            />
                        ))
                    }
                </Box>
            )}

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6">
                Total: ${totalPrice}
            </Typography>

            <Button
                sx={{ mt: 3 }}
                variant="contained"
                color="error"
                onClick={clearCart}
            >
                Vaciar carrito
            </Button>
        </Paper>
    );
};