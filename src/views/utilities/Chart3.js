import { Card } from '@mui/material';
import ChartImg3 from 'assets/images/chart3.png';

const Chart3 = () => {
  return (
    <Card>
      <h2 style={{ padding: '20px' }}>Title Chart</h2>
      <div className="chart-container">
        <img style={{ width: '70vw', height: '78vh', objectFit: 'scale-down' }} src={ChartImg3} alt="chart1" />
      </div>
    </Card>
  );
};

export default Chart3;
