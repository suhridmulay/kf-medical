import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MaterialLink from '@material-ui/core/Link';

import { useSelector } from 'react-redux';
import selectors from 'src/modules/patientVisit/patientVisitSelectors';
import PatientService from 'src/modules/patient/patientService';
import { PromiseTracker } from 'src/types';

function PatientRecord(props) {
  const {record} = props;
  const [patientData, setPatientData] = React.useState<PromiseTracker>({state: 'pending'});

  useEffect(() => {
    setPatientData({state: 'pending'});
    PatientService.find(record.patientId).then(data => {
      setPatientData({state: 'resolved', payload: data});
    })
  }, [])

  return(
    <pre>{JSON.stringify(patientData, null, '\t')}</pre>
  )
}

function PatientVisitListItem(props) {
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const displayableRecord = (record) => {
    if (hasPermissionToRead) {
      return (
        <PatientRecord record={record}/>
      );
    }

    return <div key={record.id}>{record.id}</div>;
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </>
  );
}

PatientVisitListItem.propTypes = {
  value: PropTypes.any,
};

export default PatientVisitListItem;
