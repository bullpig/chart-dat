// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import ChartImg1 from 'assets/images/chart1.png';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => (
  <MainCard title="Basic Typography" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
    <div className="chart-container">
      <img style={{ width: '70vw', height: '73vh', objectFit: 'scale-down' }} src={ChartImg1} alt="chart1" />
    </div>
  </MainCard>
);

export default Typography;
