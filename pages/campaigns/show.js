import React, { Component} from 'react';
import { Card,Grid, GridColumn,Button, GridRow } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';

class CampaignShow extends Component {
    static async getInitialProps (props){
        //console.log(props.query.address);
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        console.log(summary);
        return {
            address:props.query.address,
            minimumContribution : summary[0],
            balance : summary[1],
            requestsCount : summary[2],
            approversCount:summary[3],
            manager:summary[4]
        };
    }

    renderCards(){
        const{
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;

        const items = [{
            header:manager,
            meta:'Address of Manager',
            description:'The manager created this campaign and can create requests to withdraw money',
            style:{overflowWrap:'break-word'}
        },
        {
            header:minimumContribution,
            meta:'Minimum Contribution in wei',
            description:'This is the minimum contribution to be given for this campaign'
        
        },
        {
            header:requestsCount,
            meta:'Number of Requests',
            description:'This is the number of requests for this campaign'
        },
        {
            header:approversCount,
            meta:'Number of Approvers',
            description:'Number of people who has already donated for this campaign'

        },
        {
            header:web3.utils.fromWei(balance,'ether'),
            meta:'Campaign Balance (ether)',
            description:'The balance of how much money is left in the campaign.'

        }
        ];


        return <Card.Group items = {items} />;
    }

    render(){
        return(
            <Layout>
                 <h3>Campaign Show</h3>;
                 <Grid>
                     <GridRow>
                     <GridColumn width={10}>
                        {this.renderCards()}
                        
                     </GridColumn>

                     <GridColumn width={6}>
                        <ContributeForm address={this.props.address}/>
                     </GridColumn>
                     </GridRow>
                     <GridRow>
                         <GridColumn>
                     <Link route={`/campaigns/${this.props.address}/requests`}>
                            <a>
                                <Button primary>View Requests</Button>
                            </a>
                        </Link>
                        </GridColumn>
                     </GridRow>
                 </Grid>
                 
                 

            </Layout>
        );
        
    }
}

export default CampaignShow;