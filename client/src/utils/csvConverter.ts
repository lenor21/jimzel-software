export const convertJsonToCsv = (data: any[], fileName = 'employees.csv') => {
  if (!data || data.length === 0) {
    console.warn('No data to convert to CSV.');
    return;
  }

  const replacer = (key: string, value: any) => (value === null ? '' : value);
  const header = Object.keys(data[0]);

  let csv = header.join(',') + '\n';

  for (const row of data) {
    const values = header.map((fieldName) => {
      let cell = JSON.stringify(row[fieldName], replacer);
      cell = cell.replace(/^"|"$/g, '');
      if (cell.includes(',') || cell.includes('"') || cell.includes('\n')) {
        cell = `"${cell.replace(/"/g, '""')}"`;
      }
      return cell;
    });
    csv += values.join(',') + '\n';
  }

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } else {
    alert('Your browser does not support downloading files directly. Please copy the data or try a different browser.');
  }
};
