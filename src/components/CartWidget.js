import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';

const CartWidget = () => {
  return (
    <Button variant="Outlined" endIcon={<ShoppingCartIcon />}>
      Cart
    </Button>
  )
}

export default CartWidget