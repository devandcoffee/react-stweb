import React from 'react';
import PropTypes from 'prop-types';

import { SmartTable } from '../../shared';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

const TeamsTable = ({ data, emit }) => {
  return (
    <SmartTable
      dataSource={data.teams ? data.teams : []}
      columns={columns}
      emit={emit}
      rowKey="id"
    />
  )
}

TeamsTable.defaultProps = {
  data: {},
}

TeamsTable.propTypes = {
  data: PropTypes.object,
  emit: PropTypes.func.isRequired,
}

export default TeamsTable;
