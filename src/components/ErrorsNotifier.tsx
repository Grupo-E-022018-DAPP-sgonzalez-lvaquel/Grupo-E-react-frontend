import * as React from 'react';

import { connect } from 'react-redux';
import { IStore } from 'src/store/reducers/rootReducer';
import { getAuctionsErrors } from 'src/store/selectors';
import Alert from './common/style/Alert';


interface IErrorsNotifierProps extends React.Props<any> {
    errors: string[]
}

function ErrorsNotifier({ errors }: IErrorsNotifierProps) {
    return (
        <React.Fragment>
            {errors.map((error, index) =>
                <Alert key={index} type='danger'>
                    {error}
                </Alert>
            )}
        </React.Fragment>
    );
}

function mapStateToProps(state: IStore) {
    return {
        errors: getAuctionsErrors(state)
    }
}

export default connect(mapStateToProps)(ErrorsNotifier);
