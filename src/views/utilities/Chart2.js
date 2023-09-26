import { Card } from '@mui/material';
import ChartImg2 from 'assets/images/chart2.png';

const Chart2 = () => {
  return (
    <Card>
      <h2 style={{ padding: '20px' }}>Title Chart</h2>
      <div className="chart-container">
        <img style={{ width: '70vw', height: '78vh', objectFit: 'scale-down' }} src={ChartImg2} alt="chart1" />
      </div>
    </Card>
  );
};

export default Chart2;
