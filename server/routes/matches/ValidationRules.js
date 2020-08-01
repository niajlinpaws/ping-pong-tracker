module.exports = {
  addNewMatch: {
    statistics: 'required|array|size:2',
    'statistics.*.player': 'required|string',
    'statistics.*.score': 'required|min:0|max:5',
    'statistics.*.status': 'required|string|in:Won,Lost',
  },
};
