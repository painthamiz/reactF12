import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import "../styles/input.css";
import { Formik, Form, Field } from 'formik';
import DataManipulation from '../service/DataManipulation';
import "../styles/dropdown.css";
import fform from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
class Input extends Component {
	constructor(props) {
		super(props)

		this.state = {
			mpin: '',
			tin: '',
			adr: '',
			dt1: '',
			dt2: ''
		}
	}

	validate(values) {
		let errors = {}
		if (values.mpin.length > 9 || !values.mpin) {
			errors.mpin = 'Enter a valid mpin'
		}
		return errors

	}

	onSubmit(values) {
		let details = {
			mpin: values.mpin,
			tin: values.tin,
			adr: values.adr,
			dt1: values.dt1,
			dt2: values.dt2
		}


		DataManipulation.updateCourse(details).then(() => window.location = '/Output')
		DataManipulation.updatePhone(details)
		DataManipulation.updateContrOrg(details)
		console.log(values);
	}

	render() {

		let { mpin, tin, adr, dt1, dt2 } = this.state

		return (
			<div className="searchbg">
				<div className="navbar">
					<img
						src="/images/optum-logo-vector-removebg-preview.png"
						alt="optum-logo" />
				</div>
				<div className="row inputform">
					<div className="col">
						<div className="container">
							<Card>
								<Card.Header className="searchdiv">NDB Audit F12</Card.Header>
								<Card.Body>
									<div className="text-center"> <Image className="search" src="/images/vectorsearch.png" thumbnail /></div>
									<hr />
									<Card.Title>Looking For History ??</Card.Title>
									<Card.Text>
										Our Audit Search Engine will helps you in identifying various screen's history information in Network Data Base (NDB).
    								</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>
					<div className="col">
						<div className="form-cont">
							<div className="container">
								<Formik
									initialValues={{ mpin, tin, adr, dt1, dt2 }}
									onSubmit={this.onSubmit}
									validateOnChange={false}
									validateOnBlur={false}
									validate={this.validate}
									enableReinitialize={true}
								>
									{
										(props) => (
											<div className="card">
												<div className="card-body">
													<Form>
														<div>
															<div className='row'>
																<div className='col'>
																	<fform.Label className="inputtext">Mpin</fform.Label>
																	<Field
																		type="number"
																		className="form-control"
																		placeholder="Enter Provider Id"
																		name="mpin"
																	/>
																</div>

																<div className='col'>
																	<fform.Label className="inputtext">Tin</fform.Label>
																	<Field
																		type="number"
																		id="tin"
																		name="tin"
																		className="form-control"
																		placeholder="Enter Tax Id" />
																</div>
																<div class="w-100"><hr /></div>
																<div className='col'>
																	<fform.Label className="inputtext">Adr Id</fform.Label>
																	<Field
																		type="number"
																		id="adr"
																		name="adr"
																		className="form-control"
																		placeholder="Enter Address Id"
																	/>
																</div>
																<div className='col'>
																	<fform.Label className="inputtext">Select Screen</fform.Label>
																	<select id="screen" name="screen" className="form-control">
																		<option value="address">Address / Phone</option>
																	</select>
																</div>
																<div class="w-100"><hr /></div>
																<div className='col'>
																	<fform.Label className="inputtext">Date From</fform.Label>
																	<Field
																		type="date"
																		id="dt1"
																		name="dt1"
																		className="form-control"
																		placeholdertext="Enter Date"
																	/>
																</div>
																<div className='col'>
																	<fform.Label className="inputtext" >Date To</fform.Label>
																	<Field
																		type="date"
																		id="dt2"
																		name="dt2"
																		className="form-control"
																		placeholdertext="Enter Date"
																	/>
																</div>
															</div>
															<div className="bt text-center mt-4">
																<MDBBtn color="unique" type="submit">
																	Search
	                                         		   		</MDBBtn>
															</div>
														</div>
													</Form>
												</div>
											</div>
										)
									}
								</Formik>
							</div>

						</div>
					</div>
				</div>
			</div>
		);
	};
}
export default Input;
