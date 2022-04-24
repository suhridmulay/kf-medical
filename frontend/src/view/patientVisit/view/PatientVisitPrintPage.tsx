import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/patientVisit/view/patientVisitViewActions';
import selectors from 'src/modules/patientVisit/view/patientVisitViewSelectors';
import PatientVisitPrintView from 'src/view/patientVisit/view/PatientVisitPrintView';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function PatientVisitPrintPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doPrint(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.patientVisit.menu'), '/patient-visit'],
          [i18n('entities.patientVisit.view.title')],
        ]}
      />
      <ContentWrapper>
        <PatientVisitPrintView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PatientVisitPrintPage;
