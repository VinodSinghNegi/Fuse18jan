import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import AddBoxIcon from '@material-ui/icons/AddBox';
import {
    Button,
    FormControlLabel,
    MenuItem,
    Radio,
    Typography,
    Tabs,
    Tab,
    withStyles,
    Icon,
    IconButton
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
    paper: {
        backgroundColor: '#FFFFFF',
        boxShadow: theme.shadows[5],
        width: "100%",
        height: 'h-full',
    },
    root: {
        flexGrow: 1
    }
});
interface Props { }

interface State { }

class Relatives extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            spouse: [{ Name: '', Age: '', Profession: '' }],
            son: [{ Name: '', Age: '', Profession: '' }],
            daughter: [{ Name: '', Age: '', Profession: '' }],
            sister: [{ Name: '', Age: '', Profession: '' }],
            brother: [{ Name: '', Age: '', Profession: '' }],
            object: { Name: '', Age: '', Profession: '' }
        }
    }

    addSpouse = () => {
        let newArray = [...this.state.spouse, { Name: '', Age: '', Profession: '' }];
        this.setState({ spouse: newArray })
    }
    addSon = () => {
        let newArray = [...this.state.son, { Name: '', Age: '', Profession: '' }];
        this.setState({ son: newArray })
    }
    addBrother = () => {
        let newArray = [...this.state.brother, { Name: '', Age: '', Profession: '' }];
        this.setState({ brother: newArray })
    }
    addSister = () => {
        let newArray = [...this.state.sister, { Name: '', Age: '', Profession: '' }];
        this.setState({ sister: newArray })
    }
    addDaughter= () => {
        let newArray = [...this.state.daughter, { Name: '', Age: '', Profession: '' }];
        this.setState({ daughter: newArray })
    }

    render() {
        const { classes } = this.props;
        const { son, spouse, daughter, brother, sister, object } = this.state;
        return (
            <React.Fragment>
                <div className={classes.paper}>
                    <Grid container style={{ padding: "5px" }}>
                        <Formsy className="flex flex-col justify-center">
                            <Grid xs={16}>
                                <label>PARTNER/SPOUSE</label>
                                {spouse.map((rel, i) => (
                                    <React.Fragment >
                                        <div className='w-full'>
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="text"
                                                name="Name"
                                                label="Partner Name"
                                                // value={}
                                                variant="outlined"
                                            />
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="number"
                                                name="Age"
                                                label="Age"
                                                // value={}
                                                variant="outlined"
                                            />
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="text"
                                                name="Profession"
                                                label="Profession"
                                                // value={}
                                                variant="outlined"
                                            />
                                            {i === (spouse.length - 1) && <IconButton onClick={this.addSpouse} className="floated left" ><AddBoxIcon color="primary" /></IconButton>}

                                        </div>
                                    </React.Fragment>
                                ))}
                            </Grid>
                            < Grid xs={16} >
                                <label>SON</label>
                                {son.map((rel, i) => (
                                    <React.Fragment >
                                        <div className='w-full'>
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="text"
                                                name="Name"
                                                label="Son Name"
                                                // value={}
                                                variant="outlined"
                                            />
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="number"
                                                name="Age"
                                                label="Age"
                                                // value={}
                                                variant="outlined"
                                            />
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="text"
                                                name="Profession"
                                                label="Profession"
                                                // value={}
                                                variant="outlined"
                                            />
                                            {i === (son.length - 1) && <IconButton onClick={this.addSon} className="floated left" ><AddBoxIcon color="primary" /></IconButton>}

                                        </div>
                                    </React.Fragment>
                                ))}
                            </Grid>
                            <Grid xs={16}>
                                <label>DAUGHTER</label>
                                {daughter.map((rel, i) => (
                                    <React.Fragment >
                                        <div className='w-full'>
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="text"
                                                name="Name"
                                                label="Daughter Name"
                                                // value={}
                                                variant="outlined"
                                            />
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="number"
                                                name="Age"
                                                label="Age"
                                                // value={}
                                                variant="outlined"
                                            />
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="text"
                                                name="Profession"
                                                label="Profession"
                                                // value={}
                                                variant="outlined"
                                            />
                                            {i === (daughter.length - 1) && <IconButton onClick={this.addDaughter} className="floated left" ><AddBoxIcon color="primary" /></IconButton>}

                                        </div>
                                    </React.Fragment>
                                ))}
                             </Grid>
                            <Grid xs={16}>
                                <label>SISTER</label>
                                {sister.map((rel, i) => (
                                    <React.Fragment >
                                        <div className='w-full'>
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="text"
                                                name="Name"
                                                label="Sister Name"
                                                // value={}
                                                variant="outlined"
                                            />
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="number"
                                                name="Age"
                                                label="Age"
                                                // value={}
                                                variant="outlined"
                                            />
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="text"
                                                name="Profession"
                                                label="Profession"
                                                // value={}
                                                variant="outlined"
                                            />
                                            {i === (sister.length - 1) && <IconButton onClick={this.addSister} className="floated left" ><AddBoxIcon color="primary" /></IconButton>}

                                        </div>
                                    </React.Fragment>
                                ))}
                            </Grid>
                            <Grid xs={16}>
                                <label>BROTHER</label>
                                {brother.map((rel, i) => (
                                    <React.Fragment >
                                        <div className='w-full'>
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="text"
                                                name="Name"
                                                label="Brother Name"
                                                // value={}
                                                variant="outlined"
                                            />
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="number"
                                                name="Age"
                                                label="Age"
                                                // value={}
                                                variant="outlined"
                                            />
                                            <TextFieldFormsy
                                                className="my-16 m-2"
                                                type="text"
                                                name="Profession"
                                                label="Profession"
                                                // value={}
                                                variant="outlined"
                                            />
                                            {i === (brother.length - 1) && <IconButton onClick={this.addBrother} className="floated left" ><AddBoxIcon color="primary" /></IconButton>}

                                        </div>
                                    </React.Fragment>
                                ))}
                               
                            </Grid>
                        </Formsy>
                    </Grid>
                    <div className="flex flex justify-right">
                    <Button
                        type="submit"
                        variant="contained"
                       
                        className="mx-auto my-16 ml-5 mb-5"
                        aria-label="cancel"
                    >
                        CANCEL
                            </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="mx-auto my-16 ml-5 mb-5 "
                        aria-label="Save"
                    >
                        SAVE
                            </Button>
                    </div>
                </div>
            </React.Fragment >
        );
    }

}
export default withStyles(styles, { withTheme: true })(Relatives);