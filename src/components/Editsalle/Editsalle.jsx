/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";
import {InputLabel, MenuItem, Select} from "@material-ui/core";
import SallesServices from "../../Services/SallesServices";

class Editsalle extends Component {
    constructor(props) {
        super(props);
        this.state={
            id : this.props.match.params.id,
            numsalle :'',
            emplacementsalle :'',
            capacite :'',
            typesalle :'',
        }
        this.changeCapaciteHandler=this.changeCapaciteHandler.bind(this);
        this.changeEmplacementsalleHandler=this.changeEmplacementsalleHandler.bind(this);
        this.changeNumsalleHandler=this.changeNumsalleHandler.bind(this);
        this.changeTypesalleHandler=this.changeTypesalleHandler.bind(this);

    }
    changeNumsalleHandler = (event) => {
        this.setState({numsalle:event.target.value});
    }
    changeEmplacementsalleHandler = (event) => {
        this.setState({emplacementsalle:event.target.value});
    }
    changeCapaciteHandler = (event) => {
        this.setState({capacite:event.target.value});
    }
    changeTypesalleHandler = (event) => {
        this.setState({typesalle:event.target.value});
    }
    componentDidMount() {
        SallesServices.getSallesById(this.state.id).then(res =>{
            let salle= res.data;
            this.setState({
                numsalle: salle.numsalle,
                emplacementsalle: salle.emplacementsalle,
                capacite : salle.capacite,
                typesalle : salle.typesalle,

            })
        });
    }
    updateSalle = (s) => {
        s.preventDefault();
        let salle={numsalle: this.state.numsalle, emplacementsalle: this.state.emplacementsalle, capacite: this.state.capacite, typesalle: this.state.typesalle};
        console.log('salle =>'+ JSON.stringify(salle));
        SallesServices.updateSalle(salle, this.state.id).then(res =>{
            this.props.history.push('/admin/tableDesSalles');
        });
    }
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Modifier une salle"
                                content={
                                    <form>
                                        <FormInputs
                                            ncols={["col-md-6"]}
                                            properties={[
                                                {
                                                    label: "Numéro de la salle",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Numéro de la salle",
                                                    value: this.state.numsalle,
                                                    onChange: this.changeNumsalleHandler,
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-6"]}
                                            properties={[
                                                {label: "Emplacement de la salle",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Emplacement de la salle",
                                                    value : this.state.emplacementsalle ,
                                                    onChange : this.changeEmplacementsalleHandler,
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-6"]}
                                            properties={[
                                                {
                                                    label: "Capacité de la salle",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Capacité de la salle",
                                                    value : this.state.capacite ,
                                                    onChange : this.changeCapaciteHandler,
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-6"]}
                                            properties={[
                                                {
                                                    label: "Type de la salle",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Type de la salle",
                                                    value : this.state.typesalle ,
                                                    onChange : this.changeTypesalleHandler,
                                                }
                                            ]}
                                        />


                                        <Row>

                                        </Row>

                                        <Button bsStyle="danger " type="submit" pullRight fill href={"/admin/tableDesSalles"} >
                                            Quitter
                                        </Button>
                                        <Button onClick={this.updateSalle} bsStyle="info" fill type="submit" pullRight style={{marginRight:"10px"}} >
                                            Enregistrer
                                        </Button>
                                        <div className="clearfix" />
                                    </form>
                                }
                            />
                        </Col>

                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Editsalle;
