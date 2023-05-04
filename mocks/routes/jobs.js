const jobs = require('../data/jobs.json');

const job = jobs.data[0];

module.exports = [
  {
    id: 'jobs',
    url: '/api/jobs',
    method: 'GET',
    variants: [
      {
        id: 'list',
        type: 'json',
        options: {
          status: 200,
          body: jobs,
        },
      },
    ],
  },
  {
    id: 'job',
    url: '/api/jobs/:id',
    method: 'GET',
    variants: [
      {
        id: 'post',
        type: 'json',
        options: {
          status: 200,
          body: job,
        },
      },
    ],
  },
];
