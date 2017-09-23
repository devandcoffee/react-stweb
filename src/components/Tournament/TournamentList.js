import React from 'react';
import { SmartTable } from '../../shared';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Start Date',
    dataIndex: 'start_date',
    key: 'start_date',
  },
  {
    title: 'Amount Teams',
    dataIndex: 'amount_teams',
    key: 'amount_teams',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

const tournamentsList = [
  {
    id: '1',
    name: 'sit et',
    description: 'Accusamus dolores ea accusantium repudiandae. In exercitationem dolorum et aut a eos.',
    start_date: 'Tue Jul 25 1995 00:00:00 GMT+0000 (UTC)',
    amount_teams: 16,
  },
  {
    id: '2',
    name: 'dignissimos in',
    description: 'Non consequatur quis aspernatur nulla. Ratione consectetur sunt magni et magnam voluptas rerum.',
    start_date: 'Wed Jun 11 1975 00:00:00 GMT+0000 (UTC)',
    amount_teams: 17,
  },
  {
    id: '3',
    name: 'est dicta',
    description: 'Et ut sit nemo. Aliquam dignissimos vel dolorum accusantium porro qui minima hic id.',
    start_date: 'Wed Sep 16 1998 00:00:00 GMT+0000 (UTC)',
    amount_teams: 19,
  },
];

const TournamentList = () => (
  <SmartTable
    dataSource={tournamentsList}
    columns={columns}
    rowKey="id"
  />
)

export default TournamentList;
