import React, { Component } from "react";
import { MDBDataTable } from 'mdbreact';
import { Link } from "react-router-dom";
import "../styles/phone.css";
import Nav from "./Navbar";
import Button from "react-bootstrap/Button";

import DataManipulation from '../service/DataManipulation';

class ContrOrgDet extends Component {
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
					label: 'Contr Org Cd',
					field: 'contr_org_cd',
					sort: 'asc',
					width: 120
				},
				{
					label: 'Pri Cd',
					field: 'pri_cd',
					sort: 'asc',
					width: 90
				},
				{
					label: 'Corsp Adr Ind',
					field: 'corsp_adr_ind',
					sort: 'asc',
					width: 130
				},
				{
					label: 'User Id',
					field: 'user_id',
					sort: 'asc',
					width: 110
				},
				{
					label: 'User Ofc Code',
					field: 'user_ofc_cd',
					sort: 'asc',
					width: 140
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
					width: 150
				}
			]
		}

	}
	componentDidMount() {
		DataManipulation.retrieveAllContr()//HARDCODED
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
										<div className="btn btcolor1">Address History Details</div>
									</Link>
									<Link to="/phone" className='col-md-auto'>
										<div className="btn btcolor1">Phone History Details</div>
									</Link>
									<Link to="/contrOrg" className='col-md-auto'>
										<Button variant="unique">Contract Org History Details</Button>
									</Link>
								</div>
								<div>
									<MDBDataTable
										scrollX
										fixed
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

export default ContrOrgDet;
