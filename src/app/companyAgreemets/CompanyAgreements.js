import React from 'react';
import CompanyAgreementsPanel from "./CompanyAgreementsPanel";
import CompanyAgreementsTable from "./CompanyAgreementsTable";

export default class CompanyAgreements extends React.Component {
    render() {
        return <div>
            <CompanyAgreementsPanel/>
            <CompanyAgreementsTable/>
        </div>
    }
}