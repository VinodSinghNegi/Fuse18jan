import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import CloseIcon from '@material-ui/icons/Close';
import {
    Button,
    FormControlLabel,
    MenuItem,
    Radio,
    Typography,
    Tabs,
    Tab,
    withStyles
} from "@material-ui/core";
import {
    TextFieldFormsy,
    CheckboxFormsy,
    RadioGroupFormsy,
    SelectFormsy,
    FuseChipSelectFormsy
} from "@fuse";
import Formsy from "formsy-react";


const styles = theme => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        width: "80%",
        height: "80%"
    },
    root: {
        flexGrow: 1
    }
});

class ProductSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rightcontent: 0,
            setting: {
                name: props.data.name,
                category: props.data.category,
                barcode: props.data.barcode,
                retailPrice: props.data.retailPrice,
                stockAmount: props.data.retailPrice,
                lastModified: props.data.lastModified,
                description: "i am an extended description",
            }
        };
    }

    setrightcontent = (rightcontent) => {
        this.setState({ rightcontent: rightcontent });
    }

    render() {
        const { classes, data, showSetting, handleModalClose } = this.props;
        const { setting, rightcontent } = this.state;
        return (
            <React.Fragment>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={showSetting}
                    onClose={handleModalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500
                    }}
                >
                    <Fade in={showSetting}>
                        <div className={classes.paper}>
                            <div
                                style={{
                                    background: "#192D3E",
                                    padding: "15px",
                                    display: "flex",
                                    color: "white"
                                }}>
                                <Grid xs={6} style={{ padding: "5px" }}>
                                    Product-{'Settings'}
                                </Grid>
                                <Grid xs={6} style={{ padding: "5px" }}>
                                    <CloseIcon
                                        onClick={handleModalClose}
                                        style={{ float: "right", zIndex: "100" }}
                                    />
                                </Grid>
                            </div>
                            <Grid container style={{ padding: "5px" }}>
                                <Grid xs={6} style={{ padding: "5px" }}>
                                    <Formsy className="flex flex-col justify-center">
                                        <TextFieldFormsy
                                            className="my-16"
                                            type="text"
                                            name="CATEGORY"
                                            value={data.categoryName}
                                            variant="outlined"
                                        />


                                        <TextFieldFormsy
                                            className="my-16"
                                            type="text"
                                            name="PRODUCT_NAME"
                                            label="PRODUCT NAME"
                                            value={data.Product}
                                            variant="outlined"
                                        />
                                        <Grid xs={16}>
                                            <TextFieldFormsy
                                                className="my-16 mr-3"
                                                type="text"
                                                name="BARCODE"
                                                label="BAR CODE"
                                                value={data.BarCode}
                                                variant="outlined"
                                            />
                                            <TextFieldFormsy
                                                className="my-16 ml-3"
                                                type="text"
                                                name="SKU"
                                                label="SKU"
                                                value="kjskhdkhsdkjh"
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <TextFieldFormsy
                                            className="my-16"
                                            type="text"
                                            name="EXTENDEDDESCRIPTION"
                                            value={setting.description}
                                            label="EXTENDED DESCRIPTION"
                                            variant="outlined"
                                        />

                                        <Grid>
                                            <TextFieldFormsy
                                                className="my-16 mr-3"
                                                type="text"
                                                name="RETAILPRICE"
                                                value={data.Price}
                                                label="RETAIL PRICE"
                                                variant="outlined"
                                            />
                                            <TextFieldFormsy
                                                className="my-16 ml-3"
                                                type="text"
                                                name="SPECIAL PRICE"
                                                value={setting.stockAmount}
                                                label="SPECIAL PRICE"
                                                variant="outlined"
                                            /></Grid>
                                    </Formsy>
                                </Grid>
                                <Grid xs={6} style={{ padding: "5px" }}>
                                    <Tabs
                                        value={rightcontent}
                                        indicatorColor="secondary"
                                        textColor="secondary"
                                        scrollable
                                        scrollButtons="auto"
                                        classes={{ root: "w-full h-64" }}
                                    >
                                        <Tab className="h-64 normal-case" label="SETTINGS" />
                                    </Tabs>

                                    <br />
                                    <Formsy className="flex flex-col justify-center">
                                       
                                                <h3>Enable commision</h3>
                                                <CheckboxFormsy
                                                    className="my-16"
                                                    name="accept"
                                                    value={true}
                                                    label="Calculate commision for the staff when this product is sold."
                                                    validations="equals:true"

                                                />
                                        
                                    </Formsy>

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        className="mx-auto my-16"
                                        aria-label="LOG IN"
                                    >
                                        SAVE
                            </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Fade>
                </Modal>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(ProductSetting);