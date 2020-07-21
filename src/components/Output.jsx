import React, { Component } from "react";
import { MDBDataTable } from 'mdbreact';
import "../styles/output.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Nav from "./Navbar";

import DataManipulation from '../service/DataManipulation';

class Output extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dbdata: [],
			columns: [
				{
					label: [<i key="Lorem" className="fa fa-leaf mr-2 orange-text" aria-hidden="true"></i>, 'Mpin'],
					field: 'mpin',
					sort: 'asc',
					width: 120

				},
				{
					label: [<i key="Lorem" className="fa fa-leaf mr-2 cyan-text" aria-hidden="true"></i>, 'Tin'],
					field: 'tin',
					sort: 'asc',
					width: 120
				},
				{
					label: [<i key="Lorem" className="fa fa-leaf mr-2 green-text" aria-hidden="true"></i>, 'AdrId'],
					field: 'adr_id',
					sort: 'asc',
					width: 120
				},

				{
					label: 'Tin Type Cd',
					field: 'tin_typ_cd',
					sort: 'asc',
					width: 120
				},

				{
					label: 'Adr Type Cd',
					field: 'adr_typ_cd',
					sort: 'asc',
					width: 120
				},
				{
					label: 'Address Line Txt',
					field: 'adr',
					sort: 'asc',
					width: 350
				},
				{
					label: 'City Name',
					field: 'cty_nm',
					sort: 'asc',
					width: 150
				},
				{
					label: 'State Code',
					field: 'st_cd',
					sort: 'asc',
					width: 110
				},
				{
					label: 'Zip Code',
					field: 'zip_cd',
					sort: 'asc',
					width: 100
				},
				{
					label: 'User Id',
					field: 'user_id',
					sort: 'asc',
					width: 90
				},
				{
					label: 'User Ofc Code',
					field: 'user_ofc_cd',
					sort: 'asc',
					width: 130
				},
				{
					label: 'Last Update Date',
					field: 'lst_updt_dt',
					sort: 'asc',
					width: 150
				},
				{
					label: 'Last Update Time',
					field: 'lst_updt_tm',
					sort: 'asc',
					width: 155
				}

			]
		}

	}
	componentDidMount() {
		DataManipulation.retrieveAllCourses()//HARDCODED
			.then(
				response => {
					console.log("helloz");
					console.log(response);
					console.log(response.data);
					this.setState({ dbdata: response.data })

				}
			)
	}

	render() {
		let rows = this.state.dbdata
		let columns = this.state.columns;
		let data = { columns, rows };
		console.log("dbdata", this.state.dbdata);
		console.log("dbdatacols", this.state.columns);
		return (
			<div>
				<Nav />
				<div class='bg'>
					<div class='bgsupport card'>
						<div class='card'>
							<div class='card-body'>
								<br />
								<div className="btns row justify-content-md-center">
									<Link to="/output" className='col-md-auto'>
										<Button variant="unique">Address History Details</Button>
									</Link>
									<Link to="/phone" className='col-md-auto'>
										<div className="btn btcolor1">Phone History Details</div>
									</Link>
									<Link to="/contrOrg" className='col-md-auto'>
										<div className="btn btcolor1">Contract Org History Details</div>
									</Link>
								</div>
								<div>
									<MDBDataTable
										scrollX
										fixed
										hover
										striped
										bordered
										small
										data={data}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}

export default Output;