import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FusePageCarded } from '@fuse';
import ProductListing from './components/ProductListing';
import { Icon } from '@material-ui/core';

const styles = theme => ({
    layoutRoot: {}
});

class Product extends Component {

    render() {
        const { classes } = this.props;
        return (
            <FusePageCarded
                classes={{
                    root: classes.layoutRoot
                }}
                header={
                    <div className="p-24">
                        <h1 className="text-4xl">
                            <Icon className='text-4xl'>shopping_cart</Icon>
                            <span>Products</span>
                        </h1>
                    </div>
                }

                content={<ProductListing />}
            />
        )
    }
}

export default withStyles(styles, { withTheme: true })(Product);