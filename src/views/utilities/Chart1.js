import { Card } from '@mui/material';
import ChartImg1 from 'assets/images/chart1.png';

const Chart1 = () => {
  return (
    <Card>
      <h2 style={{ padding: '20px' }}>Title Chart</h2>
      <div className="chart-container">
        <img style={{ width: '70vw', height: '78vh', objectFit: 'scale-down' }} src={ChartImg1} alt="chart1" />
      </div>
    </Card>
  );
};

export default Chart1;
