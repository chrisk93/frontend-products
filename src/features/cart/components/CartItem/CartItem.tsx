import {
    Box,
    Divider,
    Typography,
} from '@mui/material';

import type { CartItem as CartItemType } from '../../types';

interface CartItemProps {
    item: CartItemType;
}

export const CartItem = ({
    item,
}: CartItemProps) => {
    const subtotal =
        item.product.price * item.quantity;

    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                py: 1
            }}>
                <Typography fontWeight={600}>
                    {item.product.name}
                </Typography>

                <Typography variant="body2">
                    Precio: ${item.product.price}
                </Typography>

                <Typography variant="body2">
                    Cantidad: {item.quantity}
                </Typography>

                <Typography variant="body2">
                    Subtotal: ${subtotal}
                </Typography>
            </Box>

            <Divider />
        </>
    );
};