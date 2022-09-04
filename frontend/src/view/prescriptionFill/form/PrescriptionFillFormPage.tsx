import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/prescriptionFill/form/prescriptionFillFormActions';
import selectors from 'src/modules/prescriptionFill/form/prescriptionFillFormSelectors';
import { getHistory } from 'src/modules/store';
import PrescriptionFillForm from 'src/view/prescriptionFill/form/PrescriptionFillForm';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import Spinner from 'src/view/shared/Spinner';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PrescriptionFillFormPage(props) {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(match.params.id);
  const title = isEditing
    ? i18n('entities.prescriptionFill.edit.title')
    : i18n('entities.prescriptionFill.new.title');

  useEffect(() => {
    dispatch(actions.doInit(match.params.id, match.params.patientVisitId));
    setDispatched(true);
  }, [dispatch, match.params.id, match.params.patientVisitId]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.prescriptionFill.menu'), '/prescription-fill'],
          [title],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{title}</PageTitle>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <PrescriptionFillForm
            saveLoading={saveLoading}
            initLoading={initLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={() => getHistory().push('/prescription-fill')}
          />
        )}
      </ContentWrapper>
    </>
  );
}

export default PrescriptionFillFormPage;
