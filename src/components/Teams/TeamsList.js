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

const TeamsList = ({ data, emit }) => {
  return (
    <SmartTable
      dataSource={data.teams ? data.teams : []}
      columns={columns}
      emit={emit}
      rowKey="id"
    />
  )
}

TeamsList.defaultProps = {
  data: {},
}

TeamsList.propTypes = {
  data: PropTypes.object,
  emit: PropTypes.func.isRequired,
}

export default TeamsList;
