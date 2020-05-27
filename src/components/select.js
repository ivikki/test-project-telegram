import React from 'react';
import PropTypes from 'prop-types';

import ReactSelect from 'react-select';
import { FormGroup, FormText, Label } from 'reactstrap';

export class Select extends React.PureComponent {

    render () {
        const { input, meta, rootClassName, label, className, ...attr } = this.props;

        const message = meta.touched ? meta.error : null;

        return <FormGroup className={`mb-0 ${rootClassName}`}>
            {label && <Label>{label}</Label>}
            <ReactSelect
                {...input}
                {...attr}
                onBlur={() => input.onBlur(input.value)}
            />
            <FormText className="text-red text-center">
                {message}
            </FormText>
        </FormGroup>;
    }

}
Select.propTypes = {
    meta: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired,
    className: PropTypes.string,
    rootClassName: PropTypes.string,
    label: PropTypes.node,
    options: PropTypes.array.isRequired,
};

Select.defaultProps = {
    className: '',
    label: '',
    rootClassName: ''
};
