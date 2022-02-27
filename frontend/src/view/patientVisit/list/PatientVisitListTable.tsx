import { Box } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import patientVisitSelectors from 'src/modules/patientVisit/patientVisitSelectors';
import destroyActions from 'src/modules/patientVisit/destroy/patientVisitDestroyActions';
import destroySelectors from 'src/modules/patientVisit/destroy/patientVisitDestroySelectors';
import actions from 'src/modules/patientVisit/list/patientVisitListActions';
import selectors from 'src/modules/patientVisit/list/patientVisitListSelectors';
import ConfirmModal from 'src/view/shared/modals/ConfirmModal';
import Pagination from 'src/view/shared/table/Pagination';
import Spinner from 'src/view/shared/Spinner';
import TableCellCustom from 'src/view/shared/table/TableCellCustom';
import PatientListItem from 'src/view/patient/list/PatientListItem';
import DoctorListItem from 'src/view/doctor/list/DoctorListItem';
import SymptomsEnumListItem from 'src/view/symptomsEnum/list/SymptomsEnumListItem';
import MedicineEnumListItem from 'src/view/medicineEnum/list/MedicineEnumListItem';

function PatientVisitListTable(props) {
  const [
    recordIdToDestroy,
    setRecordIdToDestroy,
  ] = useState(null);
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
  const hasPermissionToEdit = useSelector(
    patientVisitSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    patientVisitSelectors.selectPermissionToDestroy,
  );

  const doOpenDestroyConfirmModal = (id) => {
    setRecordIdToDestroy(id);
  };

  const doCloseDestroyConfirmModal = () => {
    setRecordIdToDestroy(null);
  };

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'asc'
        ? 'desc'
        : 'asc';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();

    dispatch(destroyActions.doDestroy(id));
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  return (
    <>
      <Box
        style={{
          display: 'block',
          width: '100%',
          overflowX: 'auto',
        }}
      >
        <Table
          style={{
            borderRadius: '5px',
            border: '1px solid rgb(224, 224, 224)',
            borderCollapse: 'initial',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCellCustom padding="checkbox">
                {hasRows && (
                  <Checkbox
                    checked={Boolean(isAllSelected)}
                    onChange={() => doToggleAllSelected()}
                    size="small"
                  />
                )}
              </TableCellCustom>
              <TableCellCustom
                label={i18n(
                  'entities.patientVisit.fields.patient',
                )}
              />
              <TableCellCustom
                label={i18n(
                  'entities.patientVisit.fields.doctor',
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'visitDate'}
                label={i18n(
                  'entities.patientVisit.fields.visitDate',
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'repeatVisit'}
                label={i18n(
                  'entities.patientVisit.fields.repeatVisit',
                )}
              />
              <TableCellCustom
                label={i18n(
                  'entities.patientVisit.fields.symptom1',
                )}
              />
              <TableCellCustom
                label={i18n(
                  'entities.patientVisit.fields.symptom2',
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'caseSeverity'}
                label={i18n(
                  'entities.patientVisit.fields.caseSeverity',
                )}
              />
              <TableCellCustom
                label={i18n(
                  'entities.patientVisit.fields.medicine1',
                )}
              />
              <TableCellCustom
                label={i18n(
                  'entities.patientVisit.fields.medicine2',
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'isTelemedReferral'}
                label={i18n(
                  'entities.patientVisit.fields.isTelemedReferral',
                )}
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'patientCopay'}
                label={i18n(
                  'entities.patientVisit.fields.patientCopay',
                )}
                align="right"
              />
              <TableCellCustom
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'telemedCopay'}
                label={i18n(
                  'entities.patientVisit.fields.telemedCopay',
                )}
                align="right"
              />
              <TableCellCustom
                label={i18n(
                  'entities.patientVisit.fields.telemedicineDoctor',
                )}
              />              
              <TableCellCustom size="md" />
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && (
              <TableRow>
                <TableCell colSpan={100}>
                  <Spinner />
                </TableCell>
              </TableRow>
            )}
            {!loading && !hasRows && (
              <TableRow>
                <TableCell colSpan={100}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {i18n('table.noData')}
                  </div>
                </TableCell>
              </TableRow>
            )}
            {!loading &&
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedKeys.includes(
                        row.id,
                      )}
                      onChange={() =>
                        doToggleOneSelected(row.id)
                      }
                      size="small"
                    />
                  </TableCell>
                <TableCell>
                  <PatientListItem value={row.patient} />
                </TableCell>
                <TableCell>
                  <DoctorListItem value={row.doctor} />
                </TableCell>
                <TableCell>{row.visitDate}</TableCell>
                <TableCell>
                  {row.repeatVisit
                    ? i18n('common.yes')
                    : i18n('common.no')}
                </TableCell>
                <TableCell>
                  <SymptomsEnumListItem value={row.symptom1} />
                </TableCell>
                <TableCell>
                  <SymptomsEnumListItem value={row.symptom2} />
                </TableCell>
                <TableCell>
                  {row.caseSeverity
                    ? i18n(
                        `entities.patientVisit.enumerators.caseSeverity.${row.caseSeverity}`,
                      )
                    : null}
                </TableCell>
                <TableCell>
                  <MedicineEnumListItem value={row.medicine1} />
                </TableCell>
                <TableCell>
                  <MedicineEnumListItem value={row.medicine2} />
                </TableCell>
                <TableCell>
                  {row.isTelemedReferral
                    ? i18n('common.yes')
                    : i18n('common.no')}
                </TableCell>
                <TableCell align="right">{row.patientCopay}</TableCell>
                <TableCell align="right">{row.telemedCopay}</TableCell>
                <TableCell>
                  <DoctorListItem value={row.telemedicineDoctor} />
                </TableCell>                  
                  <TableCell>
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                    >
                      <Tooltip title={i18n('common.view')}>
                        <IconButton
                          component={Link}
                          color="primary"
                          to={`/patient-visit/${row.id}`}
                        >
                          <SearchIcon />
                        </IconButton>
                      </Tooltip>
                      {hasPermissionToEdit && (
                        <Tooltip
                          title={i18n('common.edit')}
                        >
                          <IconButton
                            color="primary"
                            component={Link}
                            to={`/patient-visit/${row.id}/edit`}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                      {hasPermissionToDestroy && (
                        <Tooltip
                          title={i18n('common.destroy')}
                        >
                          <IconButton
                            color="primary"
                            onClick={() =>
                              doOpenDestroyConfirmModal(
                                row.id,
                              )
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      )}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>

      <Pagination
        onChange={doChangePagination}
        pagination={pagination}
      />

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </>
  );
}

export default PatientVisitListTable;
